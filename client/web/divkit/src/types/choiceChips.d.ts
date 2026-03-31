import type { DivBaseData } from './base';
import type { FontWeight } from './text';
import type { Action, BooleanInt } from '../../typings/common';
import type { EdgeInsets } from './edgeInserts';

export interface ChoiceChipsItem {
    value: string;
    text?: string;
    icon?: {
        type: 'image_background';
        image_url: string;
    };
    is_enabled?: BooleanInt;
    is_selected_by_default?: BooleanInt;
}

export type SelectionMode = 'single' | 'multi';

export type LayoutMode = 'wrap' | 'scroll';

export type ChipStyle = 'outlined' | 'filled' | 'elevated';

export interface DivChoiceChipsData extends DivBaseData {
    type: 'choice_chips';

    // Selection
    selection_mode?: SelectionMode;
    selected_value_variable: string;

    // Items
    chip_items?: ChoiceChipsItem[];
    items_variable?: string;

    // Actions
    selection_actions?: Action[];

    // Layout
    layout_mode?: LayoutMode;
    chip_spacing?: number;
    row_spacing?: number;

    // Appearance
    chip_style?: ChipStyle;
    corner_radius?: number;
    font_size?: number;
    font_weight?: FontWeight;
    font_family?: string;

    // Colors - selected state
    selected_background_color?: string;
    selected_text_color?: string;
    selected_border_color?: string;

    // Colors - default state
    default_background_color?: string;
    default_text_color?: string;
    default_border_color?: string;

    // Colors - disabled state
    disabled_background_color?: string;
    disabled_text_color?: string;
    disabled_border_color?: string;

    // Chip options
    show_checkmark?: BooleanInt;
    icon_size?: number;
    chip_height?: number;
    chip_padding?: EdgeInsets;
}
