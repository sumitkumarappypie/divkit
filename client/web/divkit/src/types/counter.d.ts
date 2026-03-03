import type { BooleanInt, Action } from '../../typings/common';
import type { DivBaseData } from './base';

export interface DivCounterData extends DivBaseData {
    type: 'counter';

    counter_value_variable?: string;
    min_value?: number;
    max_value?: number;
    step?: number;
    button_color?: string;
    button_size?: number;
    icon_color?: string;
    disabled_button_color?: string;
    text_color?: string;
    font_size?: number;
    font_weight?: string;
    value_width?: number;
    background_color?: string;
    border_color?: string;
    border_width?: number;
    corner_radius?: number;
    padding?: number;
    is_enabled?: BooleanInt;
    on_increment_actions?: Action[];
    on_decrement_actions?: Action[];
    on_value_change_actions?: Action[];
}
