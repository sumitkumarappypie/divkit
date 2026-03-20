import type { DivBaseData } from './base';
import type { Action } from '../../typings/common';

export interface BreadcrumbCrumb {
    title: string;
    action?: Action;
}

export interface DivBreadcrumbData extends DivBaseData {
    type: 'breadcrumb';
    crumbs: BreadcrumbCrumb[];
    separator?: string;
    item_text_color?: string;
    active_text_color?: string;
    item_font_size?: number;
}
