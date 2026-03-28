# AutoComplete Input Widget Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a new `autocomplete` widget type to DivKit that combines text input with a host-driven suggestions dropdown.

**Architecture:** Standalone widget (`div-autocomplete`) following existing DivKit patterns. Extends `div-base.json` + `div-font-base.json`. Suggestion items defined via a separate schema. Web client implemented as a Svelte component with absolute-positioned dropdown overlay. Visual editor integration follows the same pattern as input/select.

**Tech Stack:** JSON Schema, Svelte 4, TypeScript, CSS Modules, Kotlin (Android)

**Design Spec:** `docs/superpowers/specs/2026-03-28-autocomplete-input-design.md`

---

### Task 1: Create suggestion item schema

**Files:**
- Create: `schema/div-autocomplete-suggestion.json`

- [ ] **Step 1: Create the suggestion schema file**

```json
{
  "$description": "translations.json#/div_autocomplete_suggestion",
  "type": "object",
  "properties": {
    "value": {
      "type": "string",
      "$description": "translations.json#/div_autocomplete_suggestion_value"
    },
    "text": {
      "type": "string",
      "$description": "translations.json#/div_autocomplete_suggestion_text"
    },
    "secondary_text": {
      "type": "string",
      "$description": "translations.json#/div_autocomplete_suggestion_secondary_text"
    }
  },
  "required": [
    "value"
  ]
}
```

- [ ] **Step 2: Verify schema is valid JSON**

Run: `python3 -c "import json; json.load(open('schema/div-autocomplete-suggestion.json'))"`
Expected: No output (success)

---

### Task 2: Create main autocomplete widget schema

**Files:**
- Create: `schema/div-autocomplete.json`

- [ ] **Step 1: Create the autocomplete schema file**

This extends `div-base.json` and `div-font-base.json` via `allOf`, replicates key input properties, and adds autocomplete-specific properties.

```json
{
  "$description": "translations.json#/div_autocomplete",
  "allOf": [
    {
      "$ref": "div-base.json"
    },
    {
      "$ref": "div-font-base.json"
    },
    {
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "autocomplete"
          ]
        },
        "text_variable": {
          "$ref": "div-variable-name.json",
          "$description": "translations.json#/div_autocomplete_text_variable"
        },
        "keyboard_type": {
          "type": "string",
          "enum": [
            "single_line_text",
            "multi_line_text",
            "phone",
            "number",
            "email",
            "uri",
            "password"
          ],
          "default_value": "single_line_text",
          "$description": "translations.json#/div_autocomplete_keyboard_type"
        },
        "hint_text": {
          "type": "string",
          "$description": "translations.json#/div_autocomplete_hint_text"
        },
        "hint_color": {
          "$ref": "common.json#/color",
          "default_value": "#73000000",
          "$description": "translations.json#/div_autocomplete_hint_color"
        },
        "highlight_color": {
          "$ref": "common.json#/color",
          "$description": "translations.json#/div_autocomplete_highlight_color",
          "platforms": [
            "android",
            "ios",
            "web"
          ]
        },
        "max_length": {
          "$ref": "common.json#/positive_integer",
          "$description": "translations.json#/div_autocomplete_max_length",
          "platforms": [
            "android",
            "ios",
            "web"
          ]
        },
        "is_enabled": {
          "$ref": "common.json#/boolean_int",
          "default_value": "true",
          "$description": "translations.json#/div_autocomplete_is_enabled"
        },
        "select_all_on_focus": {
          "$ref": "common.json#/boolean_int",
          "default_value": "false",
          "$description": "translations.json#/div_autocomplete_select_all_on_focus",
          "platforms": [
            "android",
            "ios",
            "web"
          ]
        },
        "enter_key_type": {
          "type": "string",
          "enum": [
            "default",
            "go",
            "search",
            "send",
            "done"
          ],
          "default_value": "default",
          "$description": "translations.json#/div_autocomplete_enter_key_type",
          "platforms": [
            "android",
            "ios",
            "web"
          ]
        },
        "enter_key_actions": {
          "type": "array",
          "items": {
            "$ref": "div-action.json"
          },
          "$description": "translations.json#/div_autocomplete_enter_key_actions",
          "platforms": [
            "android",
            "ios",
            "web"
          ]
        },
        "filters": {
          "type": "array",
          "$description": "translations.json#/div_autocomplete_filters",
          "platforms": [
            "android",
            "ios",
            "web"
          ],
          "items": {
            "$ref": "div-input-filter.json"
          }
        },
        "validators": {
          "type": "array",
          "$description": "translations.json#/div_autocomplete_validators",
          "platforms": [
            "android",
            "ios",
            "web"
          ],
          "items": {
            "$ref": "div-input-validator.json"
          }
        },
        "text_alignment_horizontal": {
          "$ref": "div-alignment-horizontal.json",
          "default_value": "start",
          "$description": "translations.json#/div_autocomplete_text_alignment_horizontal"
        },
        "text_alignment_vertical": {
          "$ref": "div-alignment-vertical.json",
          "default_value": "center",
          "$description": "translations.json#/div_autocomplete_text_alignment_vertical"
        },
        "line_height": {
          "$ref": "common.json#/non_negative_integer",
          "$description": "translations.json#/div_autocomplete_line_height"
        },
        "suggestions_variable": {
          "$ref": "div-variable-name.json",
          "$description": "translations.json#/div_autocomplete_suggestions_variable"
        },
        "value_variable": {
          "$ref": "div-variable-name.json",
          "$description": "translations.json#/div_autocomplete_value_variable"
        },
        "text_change_actions": {
          "type": "array",
          "items": {
            "$ref": "div-action.json"
          },
          "$description": "translations.json#/div_autocomplete_text_change_actions",
          "platforms": [
            "android",
            "ios",
            "web"
          ]
        },
        "selection_actions": {
          "type": "array",
          "items": {
            "$ref": "div-action.json"
          },
          "$description": "translations.json#/div_autocomplete_selection_actions",
          "platforms": [
            "android",
            "ios",
            "web"
          ]
        },
        "min_query_length": {
          "$ref": "common.json#/positive_integer",
          "default_value": "1",
          "$description": "translations.json#/div_autocomplete_min_query_length"
        },
        "max_visible_suggestions": {
          "$ref": "common.json#/positive_integer",
          "default_value": "5",
          "$description": "translations.json#/div_autocomplete_max_visible_suggestions"
        },
        "max_suggestions_height": {
          "$ref": "div-fixed-size.json",
          "$description": "translations.json#/div_autocomplete_max_suggestions_height"
        },
        "dismiss_on_selection": {
          "$ref": "common.json#/boolean_int",
          "default_value": "true",
          "$description": "translations.json#/div_autocomplete_dismiss_on_selection"
        },
        "dismiss_on_blur": {
          "$ref": "common.json#/boolean_int",
          "default_value": "true",
          "$description": "translations.json#/div_autocomplete_dismiss_on_blur"
        },
        "dismiss_on_empty": {
          "$ref": "common.json#/boolean_int",
          "default_value": "true",
          "$description": "translations.json#/div_autocomplete_dismiss_on_empty"
        },
        "suggestion_text_color": {
          "$ref": "common.json#/color",
          "default_value": "#FF000000",
          "$description": "translations.json#/div_autocomplete_suggestion_text_color"
        }
      }
    }
  ],
  "platforms": [
    "android",
    "ios",
    "web"
  ],
  "required": [
    "type",
    "text_variable",
    "suggestions_variable"
  ]
}
```

- [ ] **Step 2: Verify schema is valid JSON**

Run: `python3 -c "import json; json.load(open('schema/div-autocomplete.json'))"`
Expected: No output (success)

---

### Task 3: Register autocomplete in div.json and add translations

**Files:**
- Modify: `schema/div.json` — Add `div-autocomplete.json` to the `anyOf` array
- Modify: `schema/translations.json` — Add English + Russian descriptions for all new properties

- [ ] **Step 1: Add to div.json anyOf array**

Add this entry at the end of the `anyOf` array in `schema/div.json`, after the `div-google-map.json` entry:

```json
{
  "$ref": "div-autocomplete.json",
  "$description": "translations.json#/div_autocomplete_short"
}
```

- [ ] **Step 2: Add translations to schema/translations.json**

Add the following keys to `schema/translations.json`. Find the file's structure (it's an object with translation keys mapping to `{"en": "...", "ru": "..."}` objects) and add these entries:

```json
"div_autocomplete": {
  "en": "Autocomplete input field with dynamic suggestions dropdown.",
  "ru": "Поле ввода с автодополнением и выпадающим списком подсказок."
},
"div_autocomplete_short": {
  "en": "Autocomplete input.",
  "ru": "Поле автодополнения."
},
"div_autocomplete_text_variable": {
  "en": "Name of the variable that stores the text entered by the user.",
  "ru": "Имя переменной, которая хранит текст, введённый пользователем."
},
"div_autocomplete_keyboard_type": {
  "en": "Keyboard type for the input field.",
  "ru": "Тип клавиатуры для поля ввода."
},
"div_autocomplete_hint_text": {
  "en": "Hint text displayed when the input is empty.",
  "ru": "Подсказка, отображаемая при пустом поле ввода."
},
"div_autocomplete_hint_color": {
  "en": "Color of the hint text.",
  "ru": "Цвет текста подсказки."
},
"div_autocomplete_highlight_color": {
  "en": "Color of the text selection highlight.",
  "ru": "Цвет выделения текста."
},
"div_autocomplete_max_length": {
  "en": "Maximum number of characters that can be entered.",
  "ru": "Максимальное количество символов, которое можно ввести."
},
"div_autocomplete_is_enabled": {
  "en": "Whether the input field is enabled for user interaction.",
  "ru": "Включено ли поле ввода для взаимодействия с пользователем."
},
"div_autocomplete_select_all_on_focus": {
  "en": "Whether to select all text when the input receives focus.",
  "ru": "Выделять ли весь текст при получении фокуса."
},
"div_autocomplete_enter_key_type": {
  "en": "Type of action button on the keyboard.",
  "ru": "Тип кнопки действия на клавиатуре."
},
"div_autocomplete_enter_key_actions": {
  "en": "Actions to perform when the enter key is pressed.",
  "ru": "Действия при нажатии клавиши ввода."
},
"div_autocomplete_filters": {
  "en": "Filters that restrict user input in real-time.",
  "ru": "Фильтры, ограничивающие ввод в реальном времени."
},
"div_autocomplete_validators": {
  "en": "Validators that check input after text changes.",
  "ru": "Валидаторы, проверяющие ввод после изменения текста."
},
"div_autocomplete_text_alignment_horizontal": {
  "en": "Horizontal text alignment.",
  "ru": "Горизонтальное выравнивание текста."
},
"div_autocomplete_text_alignment_vertical": {
  "en": "Vertical text alignment.",
  "ru": "Вертикальное выравнивание текста."
},
"div_autocomplete_line_height": {
  "en": "Line height of the input text.",
  "ru": "Высота строки текста ввода."
},
"div_autocomplete_suggestions_variable": {
  "en": "Name of the array variable containing suggestion items. Each item should have a 'value' field (required), and optional 'text' and 'secondary_text' fields.",
  "ru": "Имя переменной-массива с элементами подсказок. Каждый элемент должен иметь поле 'value' (обязательно), а также необязательные поля 'text' и 'secondary_text'."
},
"div_autocomplete_value_variable": {
  "en": "Name of the variable that stores the selected suggestion's value.",
  "ru": "Имя переменной, хранящей значение выбранной подсказки."
},
"div_autocomplete_text_change_actions": {
  "en": "Actions fired when the input text changes and meets the minimum query length.",
  "ru": "Действия, выполняемые при изменении текста и достижении минимальной длины запроса."
},
"div_autocomplete_selection_actions": {
  "en": "Actions fired when the user selects a suggestion.",
  "ru": "Действия, выполняемые при выборе подсказки пользователем."
},
"div_autocomplete_min_query_length": {
  "en": "Minimum number of characters before text_change_actions fire and suggestions are shown.",
  "ru": "Минимальное количество символов для срабатывания text_change_actions и отображения подсказок."
},
"div_autocomplete_max_visible_suggestions": {
  "en": "Maximum number of suggestions visible before the dropdown scrolls.",
  "ru": "Максимальное количество видимых подсказок до прокрутки."
},
"div_autocomplete_max_suggestions_height": {
  "en": "Maximum height of the suggestions dropdown.",
  "ru": "Максимальная высота выпадающего списка подсказок."
},
"div_autocomplete_dismiss_on_selection": {
  "en": "Whether to hide the dropdown when a suggestion is selected.",
  "ru": "Скрывать ли выпадающий список при выборе подсказки."
},
"div_autocomplete_dismiss_on_blur": {
  "en": "Whether to hide the dropdown when the input loses focus.",
  "ru": "Скрывать ли выпадающий список при потере фокуса."
},
"div_autocomplete_dismiss_on_empty": {
  "en": "Whether to hide the dropdown when the suggestions array is empty.",
  "ru": "Скрывать ли выпадающий список при пустом массиве подсказок."
},
"div_autocomplete_suggestion_text_color": {
  "en": "Text color for suggestion items in the dropdown.",
  "ru": "Цвет текста элементов подсказок в выпадающем списке."
},
"div_autocomplete_suggestion": {
  "en": "A single suggestion item for the autocomplete dropdown.",
  "ru": "Элемент подсказки для выпадающего списка автодополнения."
},
"div_autocomplete_suggestion_value": {
  "en": "The underlying value stored when this suggestion is selected.",
  "ru": "Значение, сохраняемое при выборе этой подсказки."
},
"div_autocomplete_suggestion_text": {
  "en": "Display text for the suggestion. Falls back to value if absent.",
  "ru": "Отображаемый текст подсказки. Если отсутствует, используется value."
},
"div_autocomplete_suggestion_secondary_text": {
  "en": "Secondary text shown below the main suggestion text.",
  "ru": "Дополнительный текст, отображаемый под основным текстом подсказки."
}
```

- [ ] **Step 3: Verify both files are valid JSON**

Run: `python3 -c "import json; json.load(open('schema/div.json')); json.load(open('schema/translations.json')); print('OK')"`
Expected: `OK`

- [ ] **Step 4: Commit schema changes**

```bash
git add schema/div-autocomplete.json schema/div-autocomplete-suggestion.json schema/div.json schema/translations.json
git commit -m "feat: add autocomplete widget schema definition

Adds div-autocomplete.json and div-autocomplete-suggestion.json schemas,
registers the type in div.json, and adds English + Russian translations."
```

---

### Task 4: Create web client TypeScript types

**Files:**
- Create: `client/web/divkit/src/types/autocomplete.d.ts`

- [ ] **Step 1: Create the type definition file**

```typescript
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
```

- [ ] **Step 2: Verify the file has no syntax errors**

Run: `cd client/web/divkit && npx tsc --noEmit src/types/autocomplete.d.ts 2>&1 | head -20`
Expected: No errors (or only unrelated warnings)

---

### Task 5: Create web client CSS module

**Files:**
- Create: `client/web/divkit/src/components/autocomplete/Autocomplete.module.css`

- [ ] **Step 1: Create the CSS module**

```css
.autocomplete {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
}

.autocomplete__input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    font: inherit;
    color: inherit;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.autocomplete__input::placeholder {
    color: var(--divkit-input-hint-color);
}

.autocomplete__input::selection {
    background: var(--divkit-input-highlight-color);
}

.autocomplete__input_has-custom-focus:focus,
.autocomplete__input_has-custom-focus:focus-visible {
    outline: none;
}

.autocomplete__dropdown {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1000;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
}

.autocomplete__dropdown_below {
    top: 100%;
    margin-top: 2px;
}

.autocomplete__dropdown_above {
    bottom: 100%;
    margin-bottom: 2px;
}

.autocomplete__suggestion {
    padding: 8px 12px;
    cursor: pointer;
    user-select: none;
}

.autocomplete__suggestion:hover,
.autocomplete__suggestion_highlighted {
    background: rgba(0, 0, 0, 0.05);
}

.autocomplete__suggestion-text {
    font: inherit;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.autocomplete__suggestion-secondary {
    font-size: 0.85em;
    opacity: 0.6;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 2px;
}
```

---

### Task 6: Create web client Svelte component

**Files:**
- Create: `client/web/divkit/src/components/autocomplete/Autocomplete.svelte`

This is the largest implementation task. The component follows the exact patterns from `Select.svelte` and `Input.svelte`.

- [ ] **Step 1: Create the Svelte component**

```svelte
<script lang="ts">
    import { getContext, onDestroy, tick } from 'svelte';

    import css from './Autocomplete.module.css';

    import type { LayoutParams } from '../../types/layoutParams';
    import type { ComponentContext } from '../../types/componentContext';
    import type { DivAutocompleteData, AutocompleteSuggestion } from '../../types/autocomplete';
    import type { EdgeInsets } from '../../types/edgeInserts';
    import { ROOT_CTX, type RootCtxValue } from '../../context/root';
    import { genClassName } from '../../utils/genClassName';
    import { pxToEm } from '../../utils/pxToEm';
    import { wrapError } from '../../utils/wrapError';
    import { correctColor } from '../../utils/correctColor';
    import { correctPositiveNumber } from '../../utils/correctPositiveNumber';
    import { correctFontWeight } from '../../utils/correctFontWeight';
    import { isPositiveNumber } from '../../utils/isPositiveNumber';
    import { isNumber } from '../../utils/isNumber';
    import { correctEdgeInsertsObject } from '../../utils/correctEdgeInsertsObject';
    import { edgeInsertsToCss } from '../../utils/edgeInsertsToCss';
    import { makeStyle } from '../../utils/makeStyle';
    import { composeAccessibilityDescription } from '../../utils/composeAccessibilityDescription';
    import { variationSettingsToString } from '../../utils/variationSettings';
    import { createVariable } from '../../expressions/variable';
    import Outer from '../utilities/Outer.svelte';
    import DevtoolHolder from '../utilities/DevtoolHolder.svelte';

    export let componentContext: ComponentContext<DivAutocompleteData>;
    export let layoutParams: LayoutParams | undefined = undefined;

    const rootCtx = getContext<RootCtxValue>(ROOT_CTX);
    const direction = rootCtx.direction;

    let prevId: string | undefined;
    let inputEl: HTMLInputElement;
    let dropdownEl: HTMLDivElement;
    let hasError = false;
    let showDropdown = false;
    let highlightedIndex = -1;
    let dropdownPosition: 'below' | 'above' = 'below';
    let selfPadding: EdgeInsets | null = null;
    let padding = '';
    let hintColor = 'rgba(0,0,0,.45)';
    let fontSize = 12;
    let fontWeight: number | undefined = undefined;
    let fontFamily = '';
    let fontVariationSettings = '';
    let lineHeight: number | undefined = undefined;
    let letterSpacing = '';
    let textColor = '#000';
    let suggestionColor = '#000';
    let description = '';

    $: origJson = componentContext.origJson;

    function rebind(): void {
        selfPadding = null;
        hintColor = 'rgba(0,0,0,.45)';
        fontSize = 12;
        fontWeight = undefined;
        fontFamily = '';
        fontVariationSettings = '';
        lineHeight = undefined;
        letterSpacing = '';
        textColor = '#000';
        suggestionColor = '#000';
        description = '';
        showDropdown = false;
        highlightedIndex = -1;
    }

    $: if (origJson) {
        rebind();
    }

    // Variable bindings
    $: textVarName = componentContext.json.text_variable;
    $: suggestionsVarName = componentContext.json.suggestions_variable;
    $: valueVarName = componentContext.json.value_variable;

    $: textVariable = textVarName &&
        (componentContext.getVariable(textVarName, 'string') ||
         rootCtx.awaitGlobalVariable(textVarName, 'string', '')) ||
        createVariable('temp', 'string', '');

    $: suggestionsVariable = suggestionsVarName &&
        (componentContext.getVariable(suggestionsVarName, 'array') ||
         rootCtx.awaitGlobalVariable(suggestionsVarName, 'array', [])) ||
        createVariable('temp', 'array', []);

    // Derived properties
    $: jsonPaddings = componentContext.getDerivedFromVars(componentContext.json.paddings);
    $: jsonHintText = componentContext.getDerivedFromVars(componentContext.json.hint_text);
    $: jsonHintColor = componentContext.getDerivedFromVars(componentContext.json.hint_color);
    $: jsonFontSize = componentContext.getDerivedFromVars(componentContext.json.font_size);
    $: jsonFontWeight = componentContext.getDerivedFromVars(componentContext.json.font_weight);
    $: jsonFontWeightValue = componentContext.getDerivedFromVars(componentContext.json.font_weight_value);
    $: jsonFontFamily = componentContext.getDerivedFromVars(componentContext.json.font_family);
    $: jsonFontVariationSettings = componentContext.getDerivedFromVars(
        componentContext.json.font_variation_settings,
        undefined,
        true,
        0
    );
    $: jsonLineHeight = componentContext.getDerivedFromVars(componentContext.json.line_height);
    $: jsonLetterSpacing = componentContext.getDerivedFromVars(componentContext.json.letter_spacing);
    $: jsonTextColor = componentContext.getDerivedFromVars(componentContext.json.text_color);
    $: jsonSuggestionTextColor = componentContext.getDerivedFromVars(componentContext.json.suggestion_text_color);
    $: jsonAccessibility = componentContext.getDerivedFromVars(componentContext.json.accessibility);
    $: jsonIsEnabled = componentContext.getDerivedFromVars(componentContext.json.is_enabled);
    $: jsonMinQueryLength = componentContext.getDerivedFromVars(componentContext.json.min_query_length);
    $: jsonMaxVisibleSuggestions = componentContext.getDerivedFromVars(componentContext.json.max_visible_suggestions);
    $: jsonDismissOnSelection = componentContext.getDerivedFromVars(componentContext.json.dismiss_on_selection);
    $: jsonDismissOnBlur = componentContext.getDerivedFromVars(componentContext.json.dismiss_on_blur);
    $: jsonDismissOnEmpty = componentContext.getDerivedFromVars(componentContext.json.dismiss_on_empty);
    $: jsonKeyboardType = componentContext.getDerivedFromVars(componentContext.json.keyboard_type);
    $: jsonHighlightColor = componentContext.getDerivedFromVars(componentContext.json.highlight_color);

    // Computed values
    $: minQueryLength = Math.max(1, Number($jsonMinQueryLength) || 1);
    $: maxVisibleSuggestions = Math.max(1, Number($jsonMaxVisibleSuggestions) || 5);
    $: dismissOnSelection = $jsonDismissOnSelection !== 0 && $jsonDismissOnSelection !== false;
    $: dismissOnBlur = $jsonDismissOnBlur !== 0 && $jsonDismissOnBlur !== false;
    $: dismissOnEmpty = $jsonDismissOnEmpty !== 0 && $jsonDismissOnEmpty !== false;
    $: isEnabled = $jsonIsEnabled !== 0 && $jsonIsEnabled !== false;
    $: inputType = ($jsonKeyboardType === 'password') ? 'password' :
                   ($jsonKeyboardType === 'email') ? 'email' :
                   ($jsonKeyboardType === 'uri') ? 'url' :
                   ($jsonKeyboardType === 'phone') ? 'tel' :
                   ($jsonKeyboardType === 'number') ? 'number' : 'text';

    // Parse suggestions from variable
    $: suggestions = parseSuggestions($suggestionsVariable);

    function parseSuggestions(raw: unknown): AutocompleteSuggestion[] {
        if (!Array.isArray(raw)) return [];
        return raw.filter((item: unknown): item is AutocompleteSuggestion =>
            typeof item === 'object' && item !== null && typeof (item as Record<string, unknown>).value === 'string'
        );
    }

    // Show/hide dropdown based on state
    $: {
        const text = $textVariable || '';
        if (text.length < minQueryLength) {
            showDropdown = false;
        } else if (dismissOnEmpty && suggestions.length === 0) {
            showDropdown = false;
        } else if (suggestions.length > 0 && text.length >= minQueryLength) {
            showDropdown = true;
        }
    }

    // Error checking
    $: {
        let newHasError = false;
        if (!textVarName) {
            newHasError = true;
            componentContext.logError(wrapError(new Error('Missing "text_variable" in "autocomplete"')));
        }
        if (!suggestionsVarName) {
            newHasError = true;
            componentContext.logError(wrapError(new Error('Missing "suggestions_variable" in "autocomplete"')));
        }
        if (hasError !== newHasError) {
            hasError = newHasError;
        }
    }

    // Style computations (same pattern as Select.svelte)
    $: {
        selfPadding = correctEdgeInsertsObject(($jsonPaddings) ? $jsonPaddings : undefined, selfPadding);
        padding = selfPadding ? edgeInsertsToCss({
            top: (Number(selfPadding.top) || 0) / fontSize * 10,
            right: (Number($direction === 'ltr' ? selfPadding.end : selfPadding.start) || Number(selfPadding.right) || 0) / fontSize * 10,
            bottom: (Number(selfPadding.bottom) || 0) / fontSize * 10,
            left: (Number($direction === 'ltr' ? selfPadding.start : selfPadding.end) || Number(selfPadding.left) || 0) / fontSize * 10
        }, $direction) : '';
    }

    $: { hintColor = correctColor($jsonHintColor, 1, hintColor); }
    $: { fontSize = correctPositiveNumber($jsonFontSize, fontSize); }
    $: {
        fontWeight = correctFontWeight($jsonFontWeight, $jsonFontWeightValue, fontWeight);
        if ($jsonFontFamily && typeof $jsonFontFamily === 'string') {
            fontFamily = rootCtx.typefaceProvider($jsonFontFamily, { fontWeight: fontWeight || 400 });
        } else {
            fontFamily = '';
        }
    }
    $: {
        const newVal = variationSettingsToString($jsonFontVariationSettings);
        if (newVal !== fontVariationSettings) { fontVariationSettings = newVal; }
    }
    $: {
        const val = $jsonLineHeight;
        if (isPositiveNumber(val)) { lineHeight = val / fontSize; }
    }
    $: {
        if (isNumber($jsonLetterSpacing)) { letterSpacing = pxToEm($jsonLetterSpacing / fontSize * 10); }
    }
    $: { textColor = correctColor($jsonTextColor, 1, textColor); }
    $: { suggestionColor = correctColor($jsonSuggestionTextColor, 1, suggestionColor); }

    $: if ($jsonAccessibility?.description) {
        description = composeAccessibilityDescription($jsonAccessibility);
    } else {
        componentContext.logError(wrapError(new Error('Missing accessibility "description" for autocomplete'), {
            level: 'warn'
        }));
    }

    // Dropdown positioning
    function updateDropdownPosition(): void {
        if (!inputEl) return;
        const rect = inputEl.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;
        dropdownPosition = spaceBelow >= 200 || spaceBelow >= spaceAbove ? 'below' : 'above';
    }

    // Event handlers
    function onInput(e: Event): void {
        const target = e.target as HTMLInputElement;
        const newValue = target.value;
        // bind:value already updates $textVariable — no need to set it here
        highlightedIndex = -1;

        if (newValue.length >= minQueryLength) {
            updateDropdownPosition();
            const actions = componentContext.json.text_change_actions;
            if (actions && actions.length) {
                componentContext.execActions(actions);
            }
        }
    }

    function onFocusInput(): void {
        const text = $textVariable || '';
        if (text.length >= minQueryLength && suggestions.length > 0) {
            updateDropdownPosition();
            showDropdown = true;
        }
    }

    function onBlurInput(): void {
        if (dismissOnBlur) {
            // Delay to allow click on suggestion to fire first
            setTimeout(() => {
                showDropdown = false;
                highlightedIndex = -1;
            }, 200);
        }
    }

    function selectSuggestion(suggestion: AutocompleteSuggestion): void {
        const displayText = suggestion.text || suggestion.value;
        $textVariable = displayText;

        if (valueVarName) {
            const valueVar = componentContext.getVariable(valueVarName, 'string') ||
                rootCtx.awaitGlobalVariable(valueVarName, 'string', '');
            if (valueVar) {
                valueVar.setValue(suggestion.value);
            }
        }

        if (dismissOnSelection) {
            showDropdown = false;
        }
        highlightedIndex = -1;

        const actions = componentContext.json.selection_actions;
        if (actions && actions.length) {
            componentContext.execActions(actions);
        }
    }

    function onKeyDown(e: KeyboardEvent): void {
        if (!showDropdown || suggestions.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            highlightedIndex = (highlightedIndex + 1) % suggestions.length;
            scrollToHighlighted();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            highlightedIndex = highlightedIndex <= 0 ? suggestions.length - 1 : highlightedIndex - 1;
            scrollToHighlighted();
        } else if (e.key === 'Enter' && highlightedIndex >= 0) {
            e.preventDefault();
            selectSuggestion(suggestions[highlightedIndex]);
        } else if (e.key === 'Escape') {
            showDropdown = false;
            highlightedIndex = -1;
        }
    }

    function scrollToHighlighted(): void {
        tick().then(() => {
            if (dropdownEl && highlightedIndex >= 0) {
                const items = dropdownEl.children;
                if (items[highlightedIndex]) {
                    (items[highlightedIndex] as HTMLElement).scrollIntoView({ block: 'nearest' });
                }
            }
        });
    }

    // Styles
    $: stl = {
        '--divkit-input-hint-color': hintColor,
        '--divkit-input-highlight-color': $jsonHighlightColor || undefined,
        'font-weight': fontWeight,
        'font-family': fontFamily,
        'font-variation-settings': fontVariationSettings,
        color: textColor
    };
    $: inputStl = {
        padding,
        'font-size': pxToEm(fontSize),
        'line-height': lineHeight,
        'letter-spacing': letterSpacing
    };
    $: dropdownStl = {
        'max-height': maxVisibleSuggestions * 44 + 'px',
        color: suggestionColor
    };

    // Focusable registration
    $: if (componentContext.json && inputEl) {
        if (prevId) {
            rootCtx.unregisterFocusable(prevId);
            prevId = undefined;
        }
        if (componentContext.id && !componentContext.fakeElement) {
            prevId = componentContext.id;
            rootCtx.registerFocusable(prevId, {
                focus() {
                    if (inputEl) { inputEl.focus(); }
                }
            });
        }
    }

    onDestroy(() => {
        if (prevId) {
            rootCtx.unregisterFocusable(prevId);
            prevId = undefined;
        }
    });
</script>

{#if !hasError}
    <Outer
        let:hasCustomFocus
        let:focusHandler
        let:blurHandler
        cls={genClassName('autocomplete', css, {})}
        style={stl}
        customDescription={true}
        customActions={'autocomplete'}
        customPaddings={true}
        hasInnerFocusable={true}
        {componentContext}
        {layoutParams}
    >
        <input
            class={genClassName('autocomplete__input', css, { 'has-custom-focus': hasCustomFocus })}
            style={makeStyle(inputStl)}
            type={inputType}
            placeholder={$jsonHintText || ''}
            aria-label={description}
            aria-autocomplete="list"
            aria-expanded={showDropdown}
            autocomplete="off"
            disabled={!isEnabled}
            bind:this={inputEl}
            bind:value={$textVariable}
            on:input={onInput}
            on:focus={(e) => { focusHandler(e); onFocusInput(); }}
            on:blur={(e) => { blurHandler(e); onBlurInput(); }}
            on:keydown={onKeyDown}
        />

        {#if showDropdown && suggestions.length > 0}
            <div
                class={genClassName('autocomplete__dropdown', css, { [dropdownPosition]: true })}
                style={makeStyle(dropdownStl)}
                role="listbox"
                bind:this={dropdownEl}
            >
                {#each suggestions as suggestion, index}
                    <div
                        class={genClassName('autocomplete__suggestion', css, { highlighted: index === highlightedIndex })}
                        role="option"
                        aria-selected={index === highlightedIndex}
                        on:mousedown|preventDefault={() => selectSuggestion(suggestion)}
                        on:mouseenter={() => { highlightedIndex = index; }}
                    >
                        <div class={css['autocomplete__suggestion-text']}>
                            {suggestion.text || suggestion.value}
                        </div>
                        {#if suggestion.secondary_text}
                            <div class={css['autocomplete__suggestion-secondary']}>
                                {suggestion.secondary_text}
                            </div>
                        {/if}
                    </div>
                {/each}
            </div>
        {/if}
    </Outer>
{:else if process.env.DEVTOOL}
    <DevtoolHolder
        {componentContext}
    />
{/if}
```

---

### Task 7: Register autocomplete in web client typeMap

**Files:**
- Modify: `client/web/divkit/src/components/typeMap.ts`

- [ ] **Step 1: Add the import**

Add after the `import Breadcrumb from './breadcrumb/Breadcrumb.svelte';` line:

```typescript
import Autocomplete from './autocomplete/Autocomplete.svelte';
```

- [ ] **Step 2: Add to TYPE_MAP**

Add after the `breadcrumb: Breadcrumb` entry in the `TYPE_MAP` object:

```typescript
    autocomplete: Autocomplete
```

(Don't forget to add a comma after `breadcrumb: Breadcrumb,`)

- [ ] **Step 3: Build the web client**

Run: `cd client/web/divkit && npm run build:prod`
Expected: Build completes successfully with all variants (cjs, esm, iife, hydratable, devtool)

- [ ] **Step 4: Commit web client changes**

```bash
git add client/web/divkit/src/types/autocomplete.d.ts \
       client/web/divkit/src/components/autocomplete/Autocomplete.svelte \
       client/web/divkit/src/components/autocomplete/Autocomplete.module.css \
       client/web/divkit/src/components/typeMap.ts
git commit -m "feat: add autocomplete web client component

Implements the Svelte component with input field, suggestion dropdown,
keyboard navigation, auto-positioning, and variable bindings."
```

---

### Task 8: Add visual editor component props

**Files:**
- Modify: `visual-editor/src/lib/data/componentProps.ts`

- [ ] **Step 1: Add autocomplete to the component props map**

Add the following entry after the `google_map` entry (or at the end of the component definitions, before the closing of the object):

```typescript
autocomplete: [...BASE_COMPONENT_PROPS, {
    type: 'group',
    title: 'a11yProps.title',
    list: [{
        name: 'props.a11y_description',
        prop: 'accessibility.description',
        type: 'string',
        enableSources: true
    }]
}, {
    type: 'group',
    title: 'autocompleteProps.title',
    list: [{
        name: 'props.text_variable',
        prop: 'text_variable',
        type: 'variable-name',
        required: true
    }, {
        name: 'props.suggestions_variable',
        prop: 'suggestions_variable',
        type: 'variable-name',
        required: true
    }, {
        name: 'props.value_variable',
        prop: 'value_variable',
        type: 'variable-name'
    }, {
        name: 'props.keyboard_type',
        prop: 'keyboard_type',
        type: 'select',
        default: 'single_line_text',
        options: [{
            name: 'props.keyboard_single_line_text',
            value: 'single_line_text'
        }, {
            name: 'props.keyboard_multi_line_text',
            value: 'multi_line_text'
        }, {
            name: 'props.keyboard_phone',
            value: 'phone'
        }, {
            name: 'props.keyboard_number',
            value: 'number'
        }, {
            name: 'props.keyboard_email',
            value: 'email'
        }, {
            name: 'props.keyboard_uri',
            value: 'uri'
        }, {
            name: 'props.keyboard_password',
            value: 'password'
        }],
        enableSources: true
    }, {
        name: 'props.min_query_length',
        prop: 'min_query_length',
        type: 'integer',
        min: 1,
        max: 100,
        enableSources: true
    }, {
        name: 'props.max_visible_suggestions',
        prop: 'max_visible_suggestions',
        type: 'integer',
        min: 1,
        max: 50,
        enableSources: true
    }, {
        name: 'props.max_length',
        prop: 'max_length',
        type: 'integer',
        min: 0,
        max: 99999,
        enableSources: true
    }, {
        type: 'split',
        list: [{
            name: 'props.font_size',
            prop: 'font_size',
            type: 'integer',
            min: 1,
            max: 1000,
            enableSources: true
        }, {
            name: 'props.line_height',
            prop: 'line_height',
            type: 'integer',
            min: 0,
            max: 1000,
            enableSources: true
        }]
    }, {
        name: 'props.text_color',
        prop: 'text_color',
        type: 'color',
        enableSources: true
    }, {
        name: 'props.suggestion_text_color',
        prop: 'suggestion_text_color',
        type: 'color',
        enableSources: true
    }, {
        name: 'props.hint_text',
        prop: 'hint_text',
        type: 'string',
        enableSources: true
    }]
}],
```

---

### Task 9: Add visual editor state, icon, and i18n

**Files:**
- Modify: `visual-editor/src/lib/data/state.ts` — Add `'autocomplete'` to `supportedComponents`
- Modify: `visual-editor/src/lib/utils/componentIcon.ts` — Add icon mapping
- Modify: `visual-editor/src/auto/lang.json` — Add i18n labels

- [ ] **Step 1: Add to supportedComponents in state.ts**

Add `'autocomplete'` to the `supportedComponents` Set, after `'google_map'`:

```typescript
'autocomplete'
```

- [ ] **Step 2: Add icon mapping in componentIcon.ts**

Add the import (reuse the input icon since autocomplete is an input variant):

```typescript
import autocompleteIcon from '../../assets/components/input.svg?url';
```

Add to the MAP object:

```typescript
autocomplete: autocompleteIcon,
```

Note: If a dedicated autocomplete/search icon SVG exists in `visual-editor/src/assets/components/`, use that instead. Otherwise reusing the input icon is acceptable.

- [ ] **Step 3: Add i18n labels to lang.json**

Add to the Russian section (around line 251-252 area, near other component names):

```json
"components.autocomplete": "Автодополнение",
"autocompleteProps.title": "Свойства автодополнения",
"props.suggestions_variable": "Переменная подсказок",
"props.value_variable": "Переменная значения",
"props.min_query_length": "Мин. длина запроса",
"props.max_visible_suggestions": "Макс. подсказок",
"props.suggestion_text_color": "Цвет текста подсказок",
```

Add to the English section (around line 667-668 area):

```json
"components.autocomplete": "Autocomplete",
"autocompleteProps.title": "Autocomplete properties",
"props.suggestions_variable": "Suggestions variable",
"props.value_variable": "Value variable",
"props.min_query_length": "Min query length",
"props.max_visible_suggestions": "Max visible suggestions",
"props.suggestion_text_color": "Suggestion text color",
```

Note: Some `props.*` keys like `props.text_variable`, `props.keyboard_type`, `props.font_size`, `props.text_color`, `props.hint_text`, `props.max_length`, `props.line_height` already exist in lang.json (shared with input/select). Only add keys that don't exist yet.

- [ ] **Step 4: Verify visual editor builds**

Run: `cd visual-editor && npm run build 2>&1 | tail -5`
Expected: Build succeeds

- [ ] **Step 5: Commit visual editor changes**

```bash
git add visual-editor/src/lib/data/componentProps.ts \
       visual-editor/src/lib/data/state.ts \
       visual-editor/src/lib/utils/componentIcon.ts \
       visual-editor/src/auto/lang.json
git commit -m "feat: add autocomplete to visual editor

Registers autocomplete in supported components, adds property panel
configuration, icon mapping, and English + Russian labels."
```

---

### Task 10: Build, verify, and test end-to-end

**Files:**
- No new files — verification only

- [ ] **Step 1: Rebuild web client with autocomplete**

Run: `cd client/web/divkit && npm run build:prod`
Expected: All build variants succeed

- [ ] **Step 2: Start visual editor dev server**

Run: `cd visual-editor && npm run dev`
Expected: Vite dev server starts, no compilation errors

- [ ] **Step 3: Verify autocomplete appears in visual editor component palette**

Open the visual editor in a browser. The "Autocomplete" component should appear in the component list. Dragging it onto the canvas should render an input field. The property panel should show the autocomplete-specific properties (text_variable, suggestions_variable, etc.).

- [ ] **Step 4: Final commit if any fixes needed**

If any adjustments were made during testing, commit them:

```bash
git add -A
git commit -m "fix: address autocomplete integration issues found during testing"
```

---

### Task 11 (Future/Out-of-scope): Android client implementation

**Note:** This task is documented for completeness but is OUT OF SCOPE for this plan. The Android implementation requires the api_generator to produce Kotlin data classes from the schema, which depends on the full Python codegen pipeline.

**Files that would be created:**
- `client/android/div/src/main/java/com/yandex/div/core/view2/divs/widgets/DivAutocompleteView.kt`
- `client/android/div/src/main/java/com/yandex/div/core/view2/divs/DivAutocompleteBinder.kt`

**Approach:**
- `DivAutocompleteView` extends `FrameLayout`, contains an `EditText` and a `ListPopupWindow`
- `DivAutocompleteBinder` uses `TwoWayStringVariableBinder` for text binding
- Subscribes to suggestions array variable, updates `ListPopupWindow` adapter
- Fires `text_change_actions` via `DivActionBinder.handleBulkActions()` from `afterTextChanged`
- Fires `selection_actions` on popup item click
- Sets `value_variable` via `VariableMutationHandler.setVariable()`
