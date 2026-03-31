import type { DivBaseData } from './base';
import type { Action, BooleanInt } from '../../typings/common';
import type { EdgeInsets } from './edgeInserts';

export interface DivRatingData extends DivBaseData {
    type: 'rating';

    rating_variable: string;
    max_rating?: number;
    step?: number;
    is_interactive?: BooleanInt;

    // Icon
    rating_icon?: {
        type: 'image_background';
        image_url: string;
    };
    icon_size?: number;
    icon_spacing?: number;
    icon_padding?: EdgeInsets;

    // Colors
    active_color?: string;
    inactive_color?: string;
    border_color?: string;
    disabled_color?: string;

    // Actions
    rating_change_actions?: Action[];
}
