<script lang="ts">
    import { getContext } from 'svelte';
    import { namedTemplates } from '../../data/templates';
    import { BASE_COMPONENT_PROPS, COMPONENT_PROPS, ROOT_PROPS, type ComponentProperty, type SiblingComponentProperty } from '../../data/componentProps';
    import SimplePropsList from './SimplePropsList.svelte';
    import { SetPropertyCommand, type SetPropertyItem } from '../../data/commands/setProperty';
    import { CompoundCommand } from '../../data/commands/compoundCommand';
    import { ReplaceLeafsCommand } from '../../data/commands/replaceLeafs';
    import { APP_CTX, type AppContext } from '../../ctx/appContext';
    import { getTemplateProps } from '../../data/userTemplates';
    import type { TreeLeaf } from '../../ctx/tree';

    const { rootConfigurable, state, rendererApi } = getContext<AppContext>(APP_CTX);
    const { selectedLeaf, readOnly, tree } = state;

    let templateProps: ComponentProperty | undefined;

    $: json = $selectedLeaf?.props.json || null;
    $: processedJson = $selectedLeaf?.props.processedJson || json || null;
    $: parentProcessedJson = $selectedLeaf?.parent?.props.processedJson ||
        $selectedLeaf?.parent?.props.json ||
        null;
    $: evalJson = processedJson && rendererApi().evalJson(processedJson) || null;
    $: parentEvalJson = parentProcessedJson && rendererApi().evalJson(parentProcessedJson) || null;
    $: type = json?.type;
    $: baseType = state.getBaseType(type);
    $: list = !rootConfigurable && $selectedLeaf === $tree && ROOT_PROPS ||
        namedTemplates[type]?.props && [...BASE_COMPONENT_PROPS, ...namedTemplates[type]?.props] ||
        baseType && COMPONENT_PROPS[baseType] ||
        BASE_COMPONENT_PROPS;

    $: {
        const props = type in namedTemplates ? [] : getTemplateProps(state, type);

        templateProps = undefined;

        const mapped: ComponentProperty[] = props.map(it => {
            // todo
            const enableSources = it.editor.type !== 'background2' &&
                it.editor.type !== 'actions2' &&
                it.editor.type !== 'video_sources' &&
                it.editor.type !== 'variable-name';

            return {
                rawName: it.templatePropertyName,
                prop: it.templatePropertyName,
                type: it.editor.type,
                options: it.editor.options,
                constraint: it.editor.constraint,
                enableSources
            } as ComponentProperty; // todo
        });

        if (mapped.length) {
            templateProps = {
                type: 'group',
                rawTitle: type,
                list: mapped
            };
        }
    }

    $: selectedElemProps = json && rendererApi().selectedElemProps() || null;

    let tableCountTimer: ReturnType<typeof setTimeout> | null = null;

    function getExistingCellMap(leaf: TreeLeaf): Map<string, TreeLeaf> {
        const map = new Map<string, TreeLeaf>();
        leaf.childs.forEach(child => {
            const info = child.props.info || {};
            if (info.rowIndex !== undefined && info.cellIndex !== undefined) {
                map.set(`${info.rowIndex}:${info.cellIndex}`, child);
            }
        });
        return map;
    }

    function tableCellLabel(rowIndex: number, cellIndex: number): string {
        if (rowIndex === -1) return `H${cellIndex + 1}`;
        return `R${rowIndex + 1}C${cellIndex + 1}`;
    }

    function preserveOrCreateChild(
        existingByPos: Map<string, TreeLeaf>,
        parent: TreeLeaf,
        rowIndex: number,
        cellIndex: number
    ): TreeLeaf {
        const existing = existingByPos.get(`${rowIndex}:${cellIndex}`);
        if (existing) {
            return {
                ...existing,
                props: {
                    ...existing.props,
                    info: { ...existing.props.info, rowIndex, cellIndex }
                }
            };
        }
        return {
            id: state.genId(),
            parent,
            childs: [],
            props: {
                json: { type: 'text', text: tableCellLabel(rowIndex, cellIndex) } as Record<string, unknown>,
                info: { rowIndex, cellIndex }
            }
        };
    }

    function handleTableColumnChange(newColCount: number): { property: string; value: unknown }[] {
        if (!$selectedLeaf || !Number.isFinite(newColCount) || newColCount < 1) return [];
        const leaf = $selectedLeaf;
        const existingByPos = getExistingCellMap(leaf);

        const currentColumns = (json.columns || []) as Record<string, unknown>[];
        const currentRows = (json.rows || []) as Record<string, unknown>[];
        const hasHeader = !!(json.header_row && Array.isArray((json.header_row as any).cells));
        const headerCells = hasHeader ? ((json.header_row as any).cells as Record<string, unknown>[]) : [];
        const rowCount = currentRows.length || leaf.childs.reduce((max, c) => {
            const ri = c.props.info?.rowIndex ?? -1;
            return ri >= 0 ? Math.max(max, ri + 1) : max;
        }, 0);

        // Preserve existing column definitions, add new ones
        const newColumns = Array.from({ length: newColCount }, (_, i) =>
            i < currentColumns.length
                ? currentColumns[i]
                : { width: { type: 'match_parent', weight: 1 } }
        );

        const changes: SetPropertyItem[] = [{
            leafId: leaf.id,
            property: 'columns',
            value: newColumns
        }];

        // Update header_row.cells: preserve existing, add/trim
        if (hasHeader) {
            const newHeaderCells = Array.from({ length: newColCount }, (_, i) =>
                i < headerCells.length
                    ? headerCells[i]
                    : { div: { type: 'text', text: tableCellLabel(-1, i) } }
            );
            changes.push({
                leafId: leaf.id,
                property: 'header_row.cells',
                value: newHeaderCells
            });
        }

        // Update rows[].cells: preserve existing, add/trim
        const newRows = currentRows.map((row: any, rowIdx: number) => {
            const cells = Array.isArray(row.cells) ? row.cells : [];
            const newCells = Array.from({ length: newColCount }, (_, i) =>
                i < cells.length
                    ? cells[i]
                    : { div: { type: 'text', text: tableCellLabel(rowIdx, i) } }
            );
            return { ...row, cells: newCells };
        });
        changes.push({
            leafId: leaf.id,
            property: 'rows',
            value: newRows
        });

        // Rebuild tree children preserving existing content
        const newChildren: TreeLeaf[] = [];
        if (hasHeader) {
            for (let c = 0; c < newColCount; c++) {
                newChildren.push(preserveOrCreateChild(existingByPos, leaf, -1, c));
            }
        }
        for (let r = 0; r < rowCount; r++) {
            for (let c = 0; c < newColCount; c++) {
                newChildren.push(preserveOrCreateChild(existingByPos, leaf, r, c));
            }
        }

        const propCmd = new SetPropertyCommand($tree, changes);
        const replaceCmd = new ReplaceLeafsCommand({
            parentId: leaf.id,
            leafs: newChildren
        });
        state.pushCommand(new CompoundCommand([propCmd, replaceCmd]));
        return [];
    }

    function handleTableRowChange(newRowCount: number): { property: string; value: unknown }[] {
        if (!$selectedLeaf || !Number.isFinite(newRowCount) || newRowCount < 0) return [];
        const leaf = $selectedLeaf;
        const existingByPos = getExistingCellMap(leaf);

        const currentColumns = (json.columns || []) as Record<string, unknown>[];
        const currentRows = (json.rows || []) as Record<string, unknown>[];
        const colCount = currentColumns.length || 2;
        const hasHeader = !!(json.header_row && Array.isArray((json.header_row as any).cells));

        // Preserve existing rows, add new ones
        const newRows = Array.from({ length: newRowCount }, (_, rowIdx) => {
            if (rowIdx < currentRows.length) {
                return currentRows[rowIdx];
            }
            return {
                cells: Array.from({ length: colCount }, (_, colIdx) =>
                    ({ div: { type: 'text', text: tableCellLabel(rowIdx, colIdx) } })
                )
            };
        });

        const changes: SetPropertyItem[] = [{
            leafId: leaf.id,
            property: 'rows',
            value: newRows
        }];

        // Rebuild tree children preserving existing content
        const newChildren: TreeLeaf[] = [];
        if (hasHeader) {
            for (let c = 0; c < colCount; c++) {
                newChildren.push(preserveOrCreateChild(existingByPos, leaf, -1, c));
            }
        }
        for (let r = 0; r < newRowCount; r++) {
            for (let c = 0; c < colCount; c++) {
                newChildren.push(preserveOrCreateChild(existingByPos, leaf, r, c));
            }
        }

        const propCmd = new SetPropertyCommand($tree, changes);
        const replaceCmd = new ReplaceLeafsCommand({
            parentId: leaf.id,
            leafs: newChildren
        });
        state.pushCommand(new CompoundCommand([propCmd, replaceCmd]));
        return [];
    }

    async function onChange(event: CustomEvent<{
        value: unknown;
        item: ComponentProperty | SiblingComponentProperty;
    } | {
        values: {
            prop: string;
            value: unknown;
        }[];
        item: ComponentProperty | SiblingComponentProperty;
    }>) {
        if (!$selectedLeaf) {
            return;
        }
        if ($readOnly) {
            console.error('Cannot edit readonly');
            return;
        }

        const changes: SetPropertyItem[] = [];
        const item = event.detail.item;

        const pushChange = ({ property, value }: {
            property: string;
            value: unknown;
        }) => {
            if (property === 'width.type' || property === 'height.type') {
                const prevElemProps = rendererApi().selectedElemProps();

                const sizeProp = property === 'width.type' ? 'width' : 'height';
                if (value === 'fixed') {
                    return [{
                        property: sizeProp,
                        value: {
                            type: 'fixed',
                            value: prevElemProps ? Math.ceil(prevElemProps[sizeProp]) : 100
                        }
                    }];
                } else if (value === 'match_parent') {
                    return [{
                        property: sizeProp,
                        value: {
                            type: value
                        }
                    }];
                } else if (value === 'wrap_content') {
                    return [{
                        property: sizeProp,
                        value: {
                            type: value
                        }
                    }];
                }
                return [];
            } else if (property === 'alignment_horizontal' || property === 'alignment_vertical') {
                const sizeProp = property === 'alignment_horizontal' ? 'width' : 'height';
                const startProp = sizeProp === 'width' ? 'left' : 'top';
                const endProp = sizeProp === 'width' ? 'right' : 'bottom';

                const changes = [{
                    property,
                    value
                }];

                if (json.margins) {
                    if (json.margins[startProp]) {
                        changes.push({
                            property: 'margins.' + startProp,
                            value: undefined
                        });
                    }
                    if (json.margins[endProp]) {
                        changes.push({
                            property: 'margins.' + endProp,
                            value: undefined
                        });
                    }
                }

                return changes;
            } else if ((property === 'columns.length' || property === 'rows.length') && baseType === 'table' && $selectedLeaf) {
                // Debounce table count changes to prevent intermediate keystrokes
                // (e.g., clearing the field before typing a new number) from destroying data
                if (tableCountTimer) clearTimeout(tableCountTimer);
                tableCountTimer = setTimeout(() => {
                    tableCountTimer = null;
                    const count = Number(value);
                    if (!Number.isFinite(count) || count < 1) return;
                    if (property === 'columns.length') {
                        handleTableColumnChange(count);
                    } else {
                        handleTableRowChange(count);
                    }
                }, 300);
                return [];
            }

            return [{
                property,
                value
            }];
        };

        if ('values' in event.detail) {
            event.detail.values.forEach(set => {
                changes.push(...pushChange({
                    property: set.prop,
                    value: set.value
                }).map(it => ({ ...it, leafId: $selectedLeaf.id })));
            });
        } else if ('prop' in item && item.prop) {
            changes.push(...pushChange({
                property: item.prop,
                value: event.detail.value
            }).map(it => ({ ...it, leafId: $selectedLeaf.id })));
        }

        const related = 'related' in item && item.related;
        if (related) {
            related.forEach(({ prop, value }) => {
                changes.push({
                    leafId: $selectedLeaf.id,
                    property: prop,
                    value
                });
            });
        }

        if (changes.length) {
            state.pushCommand(new SetPropertyCommand($tree, changes));
        }
    }
</script>

<div class="simple-props">
    {#if list && processedJson}
        <SimplePropsList
            propsList={[...list, ...(templateProps && [templateProps] || [])]}
            {processedJson}
            {parentProcessedJson}
            {evalJson}
            {parentEvalJson}
            {selectedElemProps}
            on:change={onChange}
        />
    {/if}
</div>

<style>
    .simple-props {
        padding-top: 16px;
        padding-bottom: 16px;
    }
</style>
