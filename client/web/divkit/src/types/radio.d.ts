import type { BooleanInt } from '../../typings/common';
import type { DivBaseData } from './base';

export interface RadioOption {
    text?: string;
    value: string;
}

export interface DivRadioData extends DivBaseData {
    type: 'radio';

    options: RadioOption[];
    value_variable: string;
    orientation?: 'vertical' | 'horizontal';
    item_spacing?: number;
    selected_color?: string;
    default_color?: string;
    text_color?: string;
    font_size?: number;
    font_weight?: 'light' | 'regular' | 'medium' | 'bold';
    font_family?: string;
    is_enabled?: BooleanInt;
}
