import type { DivBaseData } from './base';
import type { DivActionableData } from './actionable';
import type { AlignmentHorizontal, AlignmentVertical } from './alignment';
import type { Background } from './background';
import type { BooleanInt } from '../../typings/common';
import type { Drawable } from './drawable';
import type { EdgeInsets } from './edgeInserts';
import type { Size } from './sizes';
import type { CollectionItemBuilder } from './itemBuilder';

export interface TableColumn {
    width?: Size;
    content_alignment_horizontal?: AlignmentHorizontal;
    content_alignment_vertical?: AlignmentVertical;
}

export interface TableCell {
    div: DivBaseData;
    row_span?: number;
    column_span?: number;
    content_alignment_horizontal?: AlignmentHorizontal;
    content_alignment_vertical?: AlignmentVertical;
    background?: Background[];
}

export interface TableRow {
    cells: TableCell[];
    id?: string;
    background?: Background[];
}

export interface TableSeparator {
    show_at_start?: BooleanInt;
    show_between?: BooleanInt;
    show_at_end?: BooleanInt;
    style: Drawable;
    margins?: EdgeInsets;
}

export interface StripedStyle {
    even_row_background?: Background[];
    odd_row_background?: Background[];
}

export interface DivTableData extends DivBaseData, DivActionableData {
    type: 'table';
    columns: TableColumn[];
    header_row?: TableRow;
    header_background?: Background[];
    rows?: TableRow[];
    row_builder?: CollectionItemBuilder;
    row_separator?: TableSeparator;
    column_separator?: TableSeparator;
    header_separator?: TableSeparator;
    striped?: StripedStyle;
    content_alignment_vertical?: AlignmentVertical;
    content_alignment_horizontal?: AlignmentHorizontal;
}
