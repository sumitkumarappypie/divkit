import type { DivBaseData } from './base';
import type { FontWeight } from './text';
import type { Action, BooleanInt } from '../../typings/common';
import type { AlignmentHorizontal, AlignmentVertical } from './alignment';
import type { FontVariationSettings } from './fontVariationSettings';
import type { InputFilter, InputValidator, KeyboardType, InputEnterKeyType } from './input';
import type { FixedSize } from './sizes';

export interface AutocompleteSuggestion {
    value: string;
    text?: string;
    secondary_text?: string;
}

export interface DivAutocompleteData extends DivBaseData {
    type: 'autocomplete';

    // Input properties
    text_variable: string;
    keyboard_type?: KeyboardType;
    hint_text?: string;
    hint_color?: string;
    highlight_color?: string;
    max_length?: number;
    is_enabled?: BooleanInt;
    select_all_on_focus?: BooleanInt;
    enter_key_type?: InputEnterKeyType;
    enter_key_actions?: Action[];
    filters?: InputFilter[];
    validators?: InputValidator[];
    text_alignment_horizontal?: AlignmentHorizontal;
    text_alignment_vertical?: AlignmentVertical;
    line_height?: number;
    font_size?: number;
    font_family?: string;
    font_weight?: FontWeight;
    font_weight_value?: number;
    font_variation_settings?: FontVariationSettings;
    text_color?: string;
    letter_spacing?: number;

    // Autocomplete-specific properties
    suggestions_variable: string;
    value_variable?: string;
    text_change_actions?: Action[];
    selection_actions?: Action[];
    min_query_length?: number;
    max_visible_suggestions?: number;
    max_suggestions_height?: FixedSize;
    dismiss_on_selection?: BooleanInt;
    dismiss_on_blur?: BooleanInt;
    dismiss_on_empty?: BooleanInt;
    suggestion_text_color?: string;
}
