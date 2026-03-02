<script lang="ts">
    import { getContext } from 'svelte';
    import { capitalize } from '../../utils/capitalize';
    import PropsSubGroup from './PropsSubGroup.svelte';
    import { getPropsList, resolveDesc, type PropItem } from '../../data/schema';
    import { getObjectProperty, setObjectProperty } from '../../utils/objectProperty';
    import { SetPropertyCommand, type SetPropertyItem } from '../../data/commands/setProperty';
    import { CompoundCommand } from '../../data/commands/compoundCommand';
    import { ReplaceLeafsCommand } from '../../data/commands/replaceLeafs';
    import Spoiler2 from '../controls/Spoiler2.svelte';
    import { APP_CTX, type AppContext } from '../../ctx/appContext';
    import type { TreeLeaf } from '../../ctx/tree';

    export let group = '';

    const { state } = getContext<AppContext>(APP_CTX);
    const { selectedLeaf, readOnly, tree } = state;

    // todo process templates somehow

    let list: PropItem[] | null = null;

    $: {
        list = null;

        if (group && $selectedLeaf) {
            const desc = resolveDesc(`div-${group}`);
            if (desc) {
                list = getPropsList(desc, $selectedLeaf.props.processedJson) || null;
            } else {
                list = [];
            }
        }
    }

    function onChange(event: CustomEvent<{
        value: unknown;
        prop: string;
    }>) {
        if (!$selectedLeaf) {
            return;
        }
        if ($readOnly) {
            console.error('Cannot edit readonly');
            return;
        }

        state.pushCommand(new SetPropertyCommand($tree, [{
            leafId: $selectedLeaf.id,
            property: event.detail.prop,
            value: event.detail.value
        }]));
    }

    function tableCellLabel(rowIndex: number, cellIndex: number): string {
        if (rowIndex === -1) return `H${cellIndex + 1}`;
        return `R${rowIndex + 1}C${cellIndex + 1}`;
    }

    function handleTableColumnAdd(): void {
        const leaf = $selectedLeaf!;
        const json = leaf.props.json;
        const columns = Array.isArray(json.columns) ? json.columns as unknown[] : [];
        const changes: SetPropertyItem[] = [];

        // Add new column definition
        const newColumns = [...columns, { width: { type: 'match_parent', weight: 1 } }];
        changes.push({
            leafId: leaf.id,
            property: 'columns',
            value: newColumns
        });

        const newColIndex = newColumns.length - 1;

        // Add empty cell to header_row.cells
        const headerCells = json.header_row?.cells;
        if (Array.isArray(headerCells)) {
            changes.push({
                leafId: leaf.id,
                property: 'header_row.cells',
                value: [...headerCells, { div: { type: 'text', text: tableCellLabel(-1, newColIndex) } }]
            });
        }

        // Add empty cell to each body row
        const rows = json.rows;
        if (Array.isArray(rows)) {
            rows.forEach((row: any, rowIdx: number) => {
                if (row && Array.isArray(row.cells)) {
                    changes.push({
                        leafId: leaf.id,
                        property: `rows[${rowIdx}].cells`,
                        value: [...row.cells, { div: { type: 'text', text: tableCellLabel(rowIdx, newColIndex) } }]
                    });
                }
            });
        }

        // Rebuild tree children with the new column
        const rowCount = Array.isArray(rows) ? rows.length : 0;
        const newChildren: TreeLeaf[] = [];

        // Preserve existing children
        leaf.childs.forEach(child => {
            newChildren.push({ ...child });
        });

        // Add new header cell child
        if (Array.isArray(headerCells)) {
            newChildren.push({
                id: state.genId(),
                parent: leaf,
                childs: [],
                props: {
                    json: { type: 'text', text: tableCellLabel(-1, newColIndex) } as Record<string, unknown>,
                    info: { rowIndex: -1, cellIndex: newColIndex }
                }
            });
        }

        // Add new body cell children
        for (let r = 0; r < rowCount; r++) {
            newChildren.push({
                id: state.genId(),
                parent: leaf,
                childs: [],
                props: {
                    json: { type: 'text', text: tableCellLabel(r, newColIndex) } as Record<string, unknown>,
                    info: { rowIndex: r, cellIndex: newColIndex }
                }
            });
        }

        const propCmd = new SetPropertyCommand($tree, changes);
        const replaceCmd = new ReplaceLeafsCommand({
            parentId: leaf.id,
            leafs: newChildren
        });
        state.pushCommand(new CompoundCommand([propCmd, replaceCmd]));
    }

    function onAdd(event: CustomEvent<{
        prop: string;
        subtype: string;
    }>) {
        if (!$selectedLeaf) {
            return;
        }
        if ($readOnly) {
            console.error('Cannot edit readonly');
            return;
        }

        // Table column addition: cascade to cells
        if (event.detail.prop === 'columns') {
            const toSet = $selectedLeaf.props.json;
            const baseType = state.getBaseType(toSet.type);
            if (baseType === 'table') {
                handleTableColumnAdd();
                return;
            }
        }

        const toSet = $selectedLeaf.props.json;

        const val = getObjectProperty(toSet, event.detail.prop);
        let key;
        if (event.detail.subtype === 'custom') {
            if (val && typeof val === 'object') {
                let counter = 0;
                do {
                    key = `prop${counter++}`;
                } while (key in val);
            } else {
                key = 'prop0';
                setObjectProperty(toSet, event.detail.prop, {});
            }
        } else if (Array.isArray(val)) {
            key = val.length;
        } else {
            key = 0;
        }
        state.pushCommand(new SetPropertyCommand($tree, [{
            leafId: $selectedLeaf.id,
            property: event.detail.prop + '[' + key + ']',
            value: event.detail.subtype === 'object' ? {} : ''
        }]));

        tree.set($tree);
    }

    function handleTableColumnDelete(colIndex: number): void {
        const leaf = $selectedLeaf!;
        const json = leaf.props.json;
        const columns = json.columns as unknown[];
        const changes: SetPropertyItem[] = [];

        // Remove column definition
        const newColumns = columns.slice();
        newColumns.splice(colIndex, 1);
        changes.push({
            leafId: leaf.id,
            property: 'columns',
            value: newColumns.length === 0 ? undefined : newColumns
        });

        // Remove cell at colIndex from header_row.cells
        const headerCells = json.header_row?.cells;
        if (Array.isArray(headerCells) && colIndex < headerCells.length) {
            const newHeaderCells = headerCells.slice();
            newHeaderCells.splice(colIndex, 1);
            changes.push({
                leafId: leaf.id,
                property: 'header_row.cells',
                value: newHeaderCells
            });
        }

        // Remove cell at colIndex from each body row
        const rows = json.rows;
        if (Array.isArray(rows)) {
            rows.forEach((row: any, rowIdx: number) => {
                if (row && Array.isArray(row.cells) && colIndex < row.cells.length) {
                    const newCells = row.cells.slice();
                    newCells.splice(colIndex, 1);
                    changes.push({
                        leafId: leaf.id,
                        property: `rows[${rowIdx}].cells`,
                        value: newCells
                    });
                }
            });
        }

        // Rebuild tree children to match new cell layout
        const newColCount = newColumns.length;
        const rowCount = Array.isArray(rows) ? rows.length : 0;
        const existingByPos = new Map<string, TreeLeaf>();
        leaf.childs.forEach(child => {
            const info = child.props.info || {};
            if (info.rowIndex !== undefined && info.cellIndex !== undefined) {
                // Map old cell positions, skipping removed column
                const oldCellIdx = info.cellIndex as number;
                if (oldCellIdx < colIndex) {
                    existingByPos.set(`${info.rowIndex}:${oldCellIdx}`, child);
                } else if (oldCellIdx > colIndex) {
                    existingByPos.set(`${info.rowIndex}:${oldCellIdx - 1}`, child);
                }
                // cells at colIndex are dropped
            }
        });

        const newChildren: TreeLeaf[] = [];
        // Header row children (rowIndex = -1)
        if (Array.isArray(headerCells)) {
            for (let c = 0; c < newColCount; c++) {
                const existing = existingByPos.get(`-1:${c}`);
                if (existing) {
                    newChildren.push({
                        ...existing,
                        props: { ...existing.props, info: { ...existing.props.info, cellIndex: c } }
                    });
                }
            }
        }
        // Body row children
        for (let r = 0; r < rowCount; r++) {
            for (let c = 0; c < newColCount; c++) {
                const existing = existingByPos.get(`${r}:${c}`);
                if (existing) {
                    newChildren.push({
                        ...existing,
                        props: { ...existing.props, info: { ...existing.props.info, cellIndex: c } }
                    });
                }
            }
        }

        const propCmd = new SetPropertyCommand($tree, changes);
        const replaceCmd = new ReplaceLeafsCommand({
            parentId: leaf.id,
            leafs: newChildren
        });
        state.pushCommand(new CompoundCommand([propCmd, replaceCmd]));
    }

    function onDelete(event: CustomEvent<{
        prop: string;
        key: string | number;
        subtype?: string;
    }>) {
        if (!$selectedLeaf) {
            return;
        }
        if ($readOnly) {
            console.error('Cannot edit readonly');
            return;
        }

        const key = event.detail.key;
        let toSet = $selectedLeaf.props.json;
        let val = getObjectProperty(toSet, event.detail.prop);

        // Table column removal: cascade to cells
        if (event.detail.prop === 'columns' && Array.isArray(val)) {
            const baseType = state.getBaseType(toSet.type);
            if (baseType === 'table') {
                handleTableColumnDelete(Number(key));
                return;
            }
        }

        if (event.detail.subtype === 'custom') {
            if (val && typeof val === 'object') {
                let val2 = val as Record<string, unknown>;
                val2 = { ...val2 };
                delete val2[key];

                state.pushCommand(new SetPropertyCommand($tree, [{
                    leafId: $selectedLeaf.id,
                    property: event.detail.prop,
                    value: Object.keys(val2).length === 0 ? undefined : val
                }]));
            }
        } else if (Array.isArray(val)) {
            const newVal = val.slice();
            newVal.splice(Number(key), 1);
            state.pushCommand(new SetPropertyCommand($tree, [{
                leafId: $selectedLeaf.id,
                property: event.detail.prop,
                value: val.length === 1 && key === 0 ? undefined : newVal
            }]));
        }
    }

    function onRename(event: CustomEvent<{
        prop: string;
        key: string;
        newName: string;
    }>): void {
        if (!$selectedLeaf) {
            return;
        }
        // todo check is valid and duplicates
        // todo fix [] brackets in name
        const key = event.detail.key;
        let toSet = $selectedLeaf.props.json;
        const val = getObjectProperty(toSet, event.detail.prop);

        if (val && typeof val === 'object') {
            let val2 = val as Record<string, unknown>;
            val2 = { ...val2 };
            val2[event.detail.newName] = val2[key];
            delete val2[key];

            state.pushCommand(new SetPropertyCommand($tree, [{
                leafId: $selectedLeaf.id,
                property: event.detail.prop,
                value: val2
            }]));
        }
    }
</script>

<Spoiler2
    theme="straight"
    mix="props-group"
    open
>
    <div slot="title" class="props-group__summary">
        {capitalize(group)}
    </div>

    <ul class="props-group__content">
        {#if list}
            <PropsSubGroup
                {group}
                {list}
                on:change={onChange}
                on:add={onAdd}
                on:delete={onDelete}
                on:rename={onRename}
            />
        {/if}
    </ul>
</Spoiler2>

<style>
    :global(.props-group) {
        flex: 0 0 auto;
    }

    .props-group__summary {
        padding: 0 9px;
    }

    .props-group__content {
        box-sizing: border-box;
        list-style: none;
        margin: 0;
        padding: 0;
        padding-left: 20px;
        width: 100%;
    }
</style>
