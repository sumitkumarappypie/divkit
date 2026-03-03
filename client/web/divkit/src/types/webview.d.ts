import type { Action, BooleanInt } from '../../typings/common';
import type { DivBaseData } from './base';
import type { DivAspect } from './image';

export interface DivWebviewData extends DivBaseData {
    type: 'webview';
    url?: string;
    html?: string;
    javascript_enabled?: BooleanInt;
    allow_scrolling?: BooleanInt;
    allow_navigation?: BooleanInt;
    scale_to_fit?: BooleanInt;
    aspect?: DivAspect;
    on_load_actions?: Action[];
    on_error_actions?: Action[];
}
