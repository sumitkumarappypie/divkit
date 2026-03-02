<script lang="ts">
    import { getContext, onDestroy } from 'svelte';

    import css from './Table.module.css';

    import type { LayoutParams } from '../../types/layoutParams';
    import type { DivTableData, TableRow, TableCell } from '../../types/table';
    import type { DivBaseData } from '../../types/base';
    import type { AlignmentHorizontal, AlignmentVertical } from '../../types/alignment';
    import type { MaybeMissing } from '../../expressions/json';
    import type { ComponentContext } from '../../types/componentContext';
    import type { Variable } from '../../expressions/variable';
    import type { ComponentKey } from '../../types/componentContext';
    import { genClassName } from '../../utils/genClassName';
    import { type AlignmentVerticalMapped, correctAlignmentVertical } from '../../utils/correctAlignmentVertical';
    import { correctAlignmentHorizontal } from '../../utils/correctAlignmentHorizontal';
    import { ROOT_CTX, type RootCtxValue } from '../../context/root';
    import { pxToEm } from '../../utils/pxToEm';
    import { correctColor } from '../../utils/correctColor';
    import { getItemsFromItemBuilder } from '../../utils/itemBuilder';
    import { constStore } from '../../utils/constStore';
    import Outer from '../utilities/Outer.svelte';
    import Unknown from '../utilities/Unknown.svelte';
    import DevtoolHolder from '../utilities/DevtoolHolder.svelte';

    export let componentContext: ComponentContext<DivTableData>;
    export let layoutParams: LayoutParams | undefined = undefined;

    const rootCtx = getContext<RootCtxValue>(ROOT_CTX);
    const direction = rootCtx.direction;

    let hasError = false;
    let contentVAlign: AlignmentVerticalMapped = 'start';
    let contentHAlign: AlignmentHorizontal = 'start';
    let items: ComponentContext[] = [];
    let prevContext: ComponentContext<DivTableData> | undefined;

    interface CellPlacement {
        componentContext: ComponentContext;
        layoutParams: LayoutParams;
        cellHAlign?: string;
        cellVAlign?: string;
        backgroundStyle?: string;
        borderStyles?: string;
    }

    interface SeparatorElement {
        gridColumn: string;
        gridRow: string;
        background: string;
        height?: string;
        width?: string;
        marginTop?: string;
        marginBottom?: string;
        marginLeft?: string;
        marginRight?: string;
    }

    interface ParsedSeparator {
        color: string;
        thickness: number;
        show_at_start: boolean;
        show_between: boolean;
        show_at_end: boolean;
        marginTop: number;
        marginBottom: number;
        marginLeft: number;
        marginRight: number;
    }

    let cellPlacements: CellPlacement[] = [];
    let separatorElements: SeparatorElement[] = [];
    let gridTemplateColumns = '';

    $: origJson = componentContext.origJson;

    function rebind(): void {
        hasError = false;
        contentVAlign = 'start';
        contentHAlign = 'start';
    }

    $: if (origJson) {
        rebind();
    }

    $: jsonColumns = componentContext.json.columns;
    $: jsonContentVAlign = componentContext.getDerivedFromVars(componentContext.json.content_alignment_vertical);
    $: jsonContentHAlign = componentContext.getDerivedFromVars(componentContext.json.content_alignment_horizontal);
    $: jsonStriped = componentContext.getDerivedFromVars(componentContext.json.striped);

    // eslint-disable-next-line no-nested-ternary
    $: jsonRowBuilderData = typeof componentContext.json.row_builder?.data === 'string' ? componentContext.getDerivedFromVars(
        componentContext.json.row_builder?.data, undefined, true
    ) : (componentContext.json.row_builder?.data ? constStore(componentContext.json.row_builder.data) : undefined);

    $: {
        if (!Array.isArray(jsonColumns) || jsonColumns.length === 0) {
            hasError = true;
        } else {
            hasError = false;
        }
    }

    $: columnCount = Array.isArray(jsonColumns) ? jsonColumns.length : 0;

    // Calculate grid-template-columns from column definitions
    $: {
        if (Array.isArray(jsonColumns)) {
            const templates: string[] = [];
            for (let i = 0; i < jsonColumns.length; i++) {
                const col = jsonColumns[i];
                const width = col?.width;
                if (width?.type === 'fixed' && width.value) {
                    templates.push(pxToEm(Number(width.value)));
                } else if (width?.type === 'match_parent') {
                    const weight = Number(width.weight || 1);
                    templates.push(`${weight}fr`);
                } else {
                    // wrap_content or no width specified
                    templates.push('auto');
                }
            }
            gridTemplateColumns = templates.join(' ');
        } else {
            gridTemplateColumns = '';
        }
    }

    // Parse separator config from JSON
    function parseSeparator(sep: any): ParsedSeparator | null {
        if (!sep || !sep.style) return null;

        let color = '#E0E0E0';
        let thickness = 1;

        const style = sep.style;
        if (style.type === 'shape_drawable' && style.shape) {
            const shape = style.shape;
            color = correctColor(shape.background_color || style.color || '#E0E0E0');
            if (shape.type === 'rounded_rectangle') {
                thickness = Number(shape.item_height?.value || shape.item_width?.value || 1);
            }
        } else if (style.color) {
            color = correctColor(style.color);
        }

        const margins = sep.margins || {};

        return {
            color,
            thickness,
            show_at_start: sep.show_at_start === 1 || sep.show_at_start === true,
            show_between: sep.show_between !== 0 && sep.show_between !== false,
            show_at_end: sep.show_at_end === 1 || sep.show_at_end === true,
            marginTop: Number(margins.top) || 0,
            marginBottom: Number(margins.bottom) || 0,
            marginLeft: Number(margins.left) || 0,
            marginRight: Number(margins.right) || 0
        };
    }

    // Build rows list from either rows or row_builder
    $: allRows = buildAllRows(componentContext.json, $jsonRowBuilderData);

    function buildAllRows(
        json: MaybeMissing<DivTableData>,
        rowBuilderData: unknown
    ): { rows: MaybeMissing<TableRow>[]; headerRow?: MaybeMissing<TableRow> } {
        const headerRow = json.header_row;
        let rows: MaybeMissing<TableRow>[] = [];

        if (json.row_builder && Array.isArray(rowBuilderData)) {
            const builtItems = getItemsFromItemBuilder(
                rowBuilderData as MaybeMissing<object[]>,
                rootCtx,
                componentContext,
                json.row_builder
            );
            // Each built item's div should be a row-like object
            rows = builtItems.map(item => item.div as unknown as MaybeMissing<TableRow>);
        } else if (Array.isArray(json.rows)) {
            rows = json.rows;
        }

        return { rows, headerRow };
    }

    // 2D occupancy grid to track cells occupied by row/column spans
    // occupancyGrid[row][col] = true if cell is occupied by a span from a previous row
    let occupancyGrid: boolean[][] = [];

    function initOccupancyGrid(totalRows: number, totalCols: number): void {
        occupancyGrid = [];
        for (let r = 0; r < totalRows; r++) {
            occupancyGrid[r] = new Array(totalCols).fill(false);
        }
    }

    function markOccupied(startRow: number, startCol: number, rowSpan: number, colSpan: number): void {
        for (let r = startRow; r < startRow + rowSpan && r < occupancyGrid.length; r++) {
            for (let c = startCol; c < startCol + colSpan && c < (occupancyGrid[0]?.length || 0); c++) {
                occupancyGrid[r][c] = true;
            }
        }
    }

    function findNextFreeCol(row: number, startCol: number): number {
        if (row >= occupancyGrid.length) return startCol;
        let col = startCol;
        while (col < (occupancyGrid[0]?.length || 0) && occupancyGrid[row][col]) {
            col++;
        }
        return col;
    }

    // Create child component contexts for each cell
    $: {
        const unusedContexts = new Set(items);
        const jsonToContextMap = new Map<unknown, ComponentContext>();

        if (prevContext === componentContext) {
            items.forEach(context => {
                jsonToContextMap.set(context.json, context);
            });
        }

        const newItems: ComponentContext[] = [];
        const newPlacements: CellPlacement[] = [];
        const newSeparators: SeparatorElement[] = [];
        let gridRow = 0; // 0-indexed for occupancy grid

        const json = componentContext.json;
        const cols = Array.isArray(jsonColumns) ? jsonColumns : [];

        // Count total rows for occupancy grid
        const hasHeader = !!(allRows.headerRow && Array.isArray(allRows.headerRow.cells));
        const bodyRowCount = allRows.rows.length;
        const totalRows = (hasHeader ? 1 : 0) + bodyRowCount;

        initOccupancyGrid(totalRows + 10, columnCount + 10); // extra buffer for spans

        // Parse separator configs
        const rowSep = parseSeparator(json.row_separator);
        const colSep = parseSeparator(json.column_separator);
        const headerSep = parseSeparator(json.header_separator);

        // Process header row
        if (hasHeader) {
            processRow(
                allRows.headerRow!,
                gridRow,
                cols,
                allRows.headerRow!.background || json.header_background,
                undefined,
                -1,
                newItems,
                newPlacements,
                jsonToContextMap,
                unusedContexts
            );
            gridRow++;
        }

        // Process body rows
        const bodyRows = allRows.rows;
        for (let rowIdx = 0; rowIdx < bodyRows.length; rowIdx++) {
            const row = bodyRows[rowIdx];
            if (!row || !Array.isArray(row.cells)) continue;

            // Determine row background
            let rowBg = row.background;
            if (!rowBg && $jsonStriped) {
                if (rowIdx % 2 === 0) {
                    rowBg = $jsonStriped.even_row_background;
                } else {
                    rowBg = $jsonStriped.odd_row_background;
                }
            }

            processRow(
                row,
                gridRow,
                cols,
                rowBg,
                undefined,
                rowIdx,
                newItems,
                newPlacements,
                jsonToContextMap,
                unusedContexts
            );
            gridRow++;
        }

        // Build separator elements
        const totalGridRows = gridRow;

        // Header separator
        if (headerSep && hasHeader && bodyRowCount > 0) {
            newSeparators.push({
                gridColumn: `1 / span ${columnCount}`,
                gridRow: `1 / span 1`,
                background: headerSep.color,
                height: pxToEm(headerSep.thickness),
                marginTop: headerSep.marginTop ? pxToEm(headerSep.marginTop) : undefined,
                marginBottom: headerSep.marginBottom ? pxToEm(headerSep.marginBottom) : undefined,
                marginLeft: headerSep.marginLeft ? pxToEm(headerSep.marginLeft) : undefined,
                marginRight: headerSep.marginRight ? pxToEm(headerSep.marginRight) : undefined
            });
        }

        // Row separators
        if (rowSep) {
            const firstBodyRow = hasHeader ? 1 : 0;
            if (rowSep.show_at_start && bodyRowCount > 0) {
                newSeparators.push({
                    gridColumn: `1 / span ${columnCount}`,
                    gridRow: `${firstBodyRow + 1} / span 1`,
                    background: rowSep.color,
                    height: pxToEm(rowSep.thickness),
                    marginTop: rowSep.marginTop ? pxToEm(rowSep.marginTop) : undefined,
                    marginBottom: rowSep.marginBottom ? pxToEm(rowSep.marginBottom) : undefined,
                    marginLeft: rowSep.marginLeft ? pxToEm(rowSep.marginLeft) : undefined,
                    marginRight: rowSep.marginRight ? pxToEm(rowSep.marginRight) : undefined
                });
            }
            if (rowSep.show_between) {
                for (let i = firstBodyRow; i < totalGridRows - 1; i++) {
                    newSeparators.push({
                        gridColumn: `1 / span ${columnCount}`,
                        gridRow: `${i + 1} / span 1`,
                        background: rowSep.color,
                        height: pxToEm(rowSep.thickness),
                        marginTop: rowSep.marginTop ? pxToEm(rowSep.marginTop) : undefined,
                        marginBottom: rowSep.marginBottom ? pxToEm(rowSep.marginBottom) : undefined,
                        marginLeft: rowSep.marginLeft ? pxToEm(rowSep.marginLeft) : undefined,
                        marginRight: rowSep.marginRight ? pxToEm(rowSep.marginRight) : undefined
                    });
                }
            }
            if (rowSep.show_at_end && bodyRowCount > 0) {
                newSeparators.push({
                    gridColumn: `1 / span ${columnCount}`,
                    gridRow: `${totalGridRows} / span 1`,
                    background: rowSep.color,
                    height: pxToEm(rowSep.thickness),
                    marginTop: rowSep.marginTop ? pxToEm(rowSep.marginTop) : undefined,
                    marginBottom: rowSep.marginBottom ? pxToEm(rowSep.marginBottom) : undefined,
                    marginLeft: rowSep.marginLeft ? pxToEm(rowSep.marginLeft) : undefined,
                    marginRight: rowSep.marginRight ? pxToEm(rowSep.marginRight) : undefined
                });
            }
        }

        // Column separators
        if (colSep && columnCount > 0) {
            if (colSep.show_at_start) {
                newSeparators.push({
                    gridColumn: '1 / span 1',
                    gridRow: `1 / span ${totalGridRows}`,
                    background: colSep.color,
                    width: pxToEm(colSep.thickness),
                    marginTop: colSep.marginTop ? pxToEm(colSep.marginTop) : undefined,
                    marginBottom: colSep.marginBottom ? pxToEm(colSep.marginBottom) : undefined,
                    marginLeft: colSep.marginLeft ? pxToEm(colSep.marginLeft) : undefined,
                    marginRight: colSep.marginRight ? pxToEm(colSep.marginRight) : undefined
                });
            }
            if (colSep.show_between) {
                for (let c = 0; c < columnCount - 1; c++) {
                    newSeparators.push({
                        gridColumn: `${c + 1} / span 1`,
                        gridRow: `1 / span ${totalGridRows}`,
                        background: colSep.color,
                        width: pxToEm(colSep.thickness),
                        marginTop: colSep.marginTop ? pxToEm(colSep.marginTop) : undefined,
                        marginBottom: colSep.marginBottom ? pxToEm(colSep.marginBottom) : undefined,
                        marginLeft: colSep.marginLeft ? pxToEm(colSep.marginLeft) : undefined,
                        marginRight: colSep.marginRight ? pxToEm(colSep.marginRight) : undefined
                    });
                }
            }
            if (colSep.show_at_end) {
                newSeparators.push({
                    gridColumn: `${columnCount} / span 1`,
                    gridRow: `1 / span ${totalGridRows}`,
                    background: colSep.color,
                    width: pxToEm(colSep.thickness),
                    marginTop: colSep.marginTop ? pxToEm(colSep.marginTop) : undefined,
                    marginBottom: colSep.marginBottom ? pxToEm(colSep.marginBottom) : undefined,
                    marginLeft: colSep.marginLeft ? pxToEm(colSep.marginLeft) : undefined,
                    marginRight: colSep.marginRight ? pxToEm(colSep.marginRight) : undefined
                });
            }
        }

        for (const ctx of unusedContexts) {
            ctx.destroy();
        }

        items = newItems;
        cellPlacements = newPlacements;
        separatorElements = newSeparators;
        prevContext = componentContext;
    }

    function processRow(
        row: MaybeMissing<TableRow>,
        gridRowIdx: number,
        cols: MaybeMissing<DivTableData['columns']>,
        rowBackground: MaybeMissing<DivBaseData['background']> | undefined,
        _rowVars: Map<string, Variable> | undefined,
        rowIndex: number,
        outItems: ComponentContext[],
        outPlacements: CellPlacement[],
        contextMap: Map<unknown, ComponentContext>,
        unusedContexts: Set<ComponentContext>
    ): void {
        const cells = Array.isArray(row.cells) ? row.cells : [];
        let logicalCol = 0;

        for (let cellIdx = 0; cellIdx < cells.length; cellIdx++) {
            const cell = cells[cellIdx];
            if (!cell || !cell.div) continue;

            const colSpan = Math.max(1, Number(cell.column_span) || 1);
            const rowSpan = Math.max(1, Number(cell.row_span) || 1);

            // Find next free column using occupancy grid
            logicalCol = findNextFreeCol(gridRowIdx, logicalCol);

            // Mark cells as occupied
            markOccupied(gridRowIdx, logicalCol, rowSpan, colSpan);

            // Resolve alignment: cell > column > table defaults
            const colDef = Array.isArray(cols) && cols[logicalCol];
            const cellHAlign = cell.content_alignment_horizontal ||
                (colDef && colDef.content_alignment_horizontal) ||
                undefined;
            const cellVAlign = cell.content_alignment_vertical ||
                (colDef && colDef.content_alignment_vertical) ||
                undefined;

            // Build background style string for cell wrapper
            let backgroundStyle: string | undefined;
            const bg = cell.background || rowBackground;
            if (bg && Array.isArray(bg) && bg.length > 0) {
                const firstBg = bg[0];
                if (firstBg && firstBg.type === 'solid' && firstBg.color) {
                    backgroundStyle = correctColor(firstBg.color as string);
                }
            }

            const found = contextMap.get(cell.div);
            let ctx: ComponentContext;
            if (found) {
                unusedContexts.delete(found);
                ctx = found;
            } else {
                ctx = componentContext.produceChildContext(cell.div as MaybeMissing<DivBaseData>, {
                    path: `${rowIndex}_${cellIdx}`
                });
            }

            outItems.push(ctx);
            outPlacements.push({
                componentContext: ctx,
                layoutParams: {
                    gridArea: {
                        x: logicalCol,
                        y: gridRowIdx,
                        colSpan,
                        rowSpan
                    }
                },
                cellHAlign: cellHAlign as string | undefined,
                cellVAlign: cellVAlign as string | undefined,
                backgroundStyle
            });

            logicalCol += colSpan;
        }
    }

    $: {
        contentVAlign = correctAlignmentVertical($jsonContentVAlign, contentVAlign);
    }

    $: {
        contentHAlign = correctAlignmentHorizontal($jsonContentHAlign, $direction, contentHAlign);
    }

    $: mods = {
        valign: contentVAlign,
        halign: contentHAlign
    };

    $: style = {
        'grid-template-columns': gridTemplateColumns
    };

    onDestroy(() => {
        items.forEach(context => {
            context.destroy();
        });
    });
</script>

{#if !hasError}
    <Outer
        cls={genClassName('table', css, mods)}
        {componentContext}
        {style}
        {layoutParams}
        parentOf={items}
    >
        {#each cellPlacements as placement}
            <div
                class={genClassName('table__cell', css, {
                    halign: placement.cellHAlign,
                    valign: placement.cellVAlign
                })}
                style:grid-column="{(placement.layoutParams.gridArea?.x ?? 0) + 1} / span {placement.layoutParams.gridArea?.colSpan ?? 1}"
                style:grid-row="{(placement.layoutParams.gridArea?.y ?? 0) + 1} / span {placement.layoutParams.gridArea?.rowSpan ?? 1}"
                style:background={placement.backgroundStyle || undefined}
            >
                <Unknown
                    componentContext={placement.componentContext}
                    layoutParams={placement.layoutParams}
                />
            </div>
        {/each}
        {#each separatorElements as sep}
            <div
                class={css['table__separator']}
                style:grid-column={sep.gridColumn}
                style:grid-row={sep.gridRow}
                style:margin-top={sep.marginTop || undefined}
                style:margin-bottom={sep.marginBottom || undefined}
                style:margin-left={sep.marginLeft || undefined}
                style:margin-right={sep.marginRight || undefined}
            >
                <div
                    class={sep.width ? css['table__separator_col'] : css['table__separator_row']}
                    style:background={sep.background}
                    style:height={sep.height || undefined}
                    style:width={sep.width || undefined}
                ></div>
            </div>
        {/each}
    </Outer>
{:else if process.env.DEVTOOL}
    <DevtoolHolder
        {componentContext}
    />
{/if}
