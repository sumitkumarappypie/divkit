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
    is_enabled?: BooleanInt;
}
