import type { BooleanInt } from '../../typings/common';
import type { DivBaseData } from './base';

export interface DivCheckboxData extends DivBaseData {
    type: 'checkbox';

    is_checked_variable: string;
    is_enabled?: BooleanInt;
    on_color?: string;
    off_color?: string;
    check_mark_color?: string;
}
