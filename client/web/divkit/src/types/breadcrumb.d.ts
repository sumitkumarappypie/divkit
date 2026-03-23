import type { DivBaseData } from './base';
import type { Action, BooleanInt } from '../../typings/common';

export interface BreadcrumbCrumb {
    title: string;
    action?: Action;
}

export interface BreadcrumbItemBuilderPrototype {
    selector?: BooleanInt;
    title: string;
    action?: Action;
}

export interface BreadcrumbItemBuilder {
    data: object[];
    prototypes: BreadcrumbItemBuilderPrototype[];
    data_element_name?: string;
}

export interface DivBreadcrumbData extends DivBaseData {
    type: 'breadcrumb';
    crumbs?: BreadcrumbCrumb[];
    separator?: string;
    item_text_color?: string;
    active_text_color?: string;
    item_font_size?: number;
    item_builder?: BreadcrumbItemBuilder;
}
