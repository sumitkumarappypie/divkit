import type { BooleanInt } from '../../typings/common';
import type { DivBaseData } from './base';

export interface DivProgressData extends DivBaseData {
    type: 'progress';

    style?: 'linear' | 'circular';
    value?: number;
    is_indeterminate?: BooleanInt;
    active_color?: string;
    inactive_color?: string;
    track_thickness?: number;
}
