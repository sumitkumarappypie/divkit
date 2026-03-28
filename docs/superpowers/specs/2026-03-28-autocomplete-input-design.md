# AutoComplete Input Widget — Design Spec

**Date:** 2026-03-28
**Widget type:** `autocomplete`
**Schema name:** `div-autocomplete`

## Overview

A new standalone DivKit widget that combines a text input with a dynamic suggestions dropdown. The host app receives text change notifications, performs search/filtering externally, and supplies results back via an array variable. The widget renders matching suggestions in a scrollable dropdown that the user can select from.

This follows the same standalone widget pattern as all other DivKit widgets (radio, checkbox, progress, google_map, etc.).

## Data Flow

```
User types in input
    → Widget checks len(text) >= min_query_length
    → If yes: fires text_change_actions
    → Host app receives action, reads text_variable for query
    → Host performs search (API, DB, local filter, etc.)
    → Host sets suggestions_variable with results array
    → Widget renders dropdown with suggestion items
    → User selects a suggestion
    → text_variable = suggestion.text (or value if no text)
    → value_variable = suggestion.value
    → selection_actions fired
    → Dropdown dismissed (per dismiss flags)
```

## Schema Design

### New Files

- `schema/div-autocomplete.json` — Main widget schema
- `schema/div-autocomplete-suggestion.json` — Suggestion item schema

### Modified Files

- `schema/div.json` — Add to `anyOf` union
- `schema/translations.json` — English + Russian descriptions

### `div-autocomplete.json`

Extends `div-base.json` and `div-font-base.json` via `allOf` composition.

**Input properties (replicated from div-input):**

| Property | Type | Required | Default |
|----------|------|----------|---------|
| `text_variable` | string | Yes | — |
| `keyboard_type` | enum (single_line_text, multi_line_text, phone, number, email, uri, password) | No | single_line_text |
| `hint_text` | string (expression) | No | — |
| `hint_color` | color | No | #73000000 |
| `highlight_color` | color | No | — |
| `max_length` | integer | No | — |
| `is_enabled` | boolean | No | true |
| `select_all_on_focus` | boolean | No | false |
| `enter_key_type` | enum (default, go, search, send, done) | No | default |
| `enter_key_actions` | array\<action\> | No | — |
| `filters` | array\<input_filter\> | No | — |
| `validators` | array\<input_validator\> | No | — |

**Autocomplete-specific properties:**

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `suggestions_variable` | string | Yes | — | Name of array variable holding suggestion items |
| `value_variable` | string | No | — | Variable to store selected suggestion's `value` |
| `text_change_actions` | array\<action\> | No | — | Actions fired when input text changes (respects min_query_length) |
| `selection_actions` | array\<action\> | No | — | Actions fired when a suggestion is selected |
| `min_query_length` | integer | No | 1 | Minimum characters before actions fire and suggestions show |
| `max_visible_suggestions` | integer | No | 5 | Max items visible in dropdown before scrolling |
| `max_suggestions_height` | fixed_size | No | — | Max height of suggestions dropdown |
| `dismiss_on_selection` | boolean | No | true | Hide dropdown when suggestion picked |
| `dismiss_on_blur` | boolean | No | true | Hide dropdown when input loses focus |
| `dismiss_on_empty` | boolean | No | true | Hide dropdown when suggestions array is empty |
| `suggestion_text_color` | color | No | #FF000000 | Text color for suggestion items |

### `div-autocomplete-suggestion.json`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `value` | string | Yes | Underlying value (stored in value_variable on selection) |
| `text` | string | No | Display text (falls back to value if absent) |
| `secondary_text` | string | No | Subtitle shown below main text |

## Component Architecture

### Web Client (Svelte)

| File | Purpose |
|------|---------|
| `client/web/divkit/src/components/autocomplete/Autocomplete.svelte` | Main component — input field + dropdown overlay |
| `client/web/divkit/src/components/autocomplete/Autocomplete.module.css` | Scoped styles |
| `client/web/divkit/src/types/autocomplete.d.ts` | TypeScript interfaces |
| `client/web/divkit/src/components/typeMap.ts` | Register `'autocomplete' → Autocomplete` |

**Implementation notes:**
- Uses `componentContext` pattern with `getDerivedFromVars()` for reactive property evaluation
- Subscribes to `suggestions_variable` via `getVariable()` — re-renders dropdown on changes
- Text input fires `text_change_actions` via `componentContext.execActions()` when `text.length >= min_query_length`
- Dropdown is absolutely positioned below (or above) the input container
- Auto-positioning: measures available space above/below, picks direction with more room
- Registers with `rootCtx.registerFocusable()` for keyboard navigation
- Dropdown items are keyboard-navigable (arrow keys + enter to select)

### Android Client (Kotlin)

| File | Purpose |
|------|---------|
| `div/src/main/java/com/yandex/div/core/view2/divs/widgets/DivAutocompleteView.kt` | Custom view wrapping EditText + PopupWindow/dropdown |
| `div/src/main/java/com/yandex/div/core/view2/divs/DivAutocompleteBinder.kt` | Binds schema data to view |
| `div-data` (generated) | Data classes from schema via api_generator |

**Implementation notes:**
- Uses `TwoWayStringVariableBinder` for `text_variable` binding
- Subscribes to `suggestions_variable` for array changes — updates dropdown adapter
- Fires `text_change_actions` via `DivActionBinder.handleBulkActions()` from `afterTextChanged`
- Fires `selection_actions` on item click
- Sets `value_variable` via `VariableMutationHandler.setVariable()` on selection
- Dropdown auto-positions using Android's `PopupWindow` or `ListPopupWindow` which handles above/below natively

### Visual Editor

| File | Change |
|------|--------|
| `visual-editor/src/lib/data/componentProps.ts` | Add autocomplete property definitions |
| `visual-editor/src/lib/data/state.ts` | Add `'autocomplete'` to `supportedComponents` + default template |
| `visual-editor/src/lib/utils/componentIcon.ts` | Map to search/input icon |
| `visual-editor/src/auto/lang.json` | English + Russian labels |

## Behavioral Rules

- The dropdown is only shown when `len(text) >= min_query_length` AND the suggestions array is non-empty (if `dismiss_on_empty` is true). If the user deletes text below the threshold, the dropdown hides immediately regardless of dismiss flags.
- `text_change_actions` only fire when `len(text) >= min_query_length`. When text drops below the threshold, no action fires (the host can observe the variable directly if needed).
- The suggestion items in the array variable follow the `div-autocomplete-suggestion` structure by convention: each object has `value` (required), `text` (optional), `secondary_text` (optional). Items missing `value` are skipped.

## Widget States

1. **Idle** — Input shows hint text, no dropdown
2. **Typing (below threshold)** — User types but `len(text) < min_query_length`, no actions fire, dropdown hidden
3. **Typing (above threshold)** — `text_change_actions` fire, host populates suggestions, dropdown appears
4. **Suggestions visible** — Scrollable list, keyboard navigable, items show text + optional secondary_text
5. **After selection** — `text_variable` updated, `value_variable` updated, `selection_actions` fired, dropdown dismissed per flags
6. **Text cleared below threshold** — Dropdown hides immediately even if suggestions array is still populated

## Example JSON

### Complete example (city search)

```json
{
  "type": "autocomplete",
  "text_variable": "search_query",
  "hint_text": "Search for a city...",
  "hint_color": "#888888",
  "keyboard_type": "single_line_text",
  "enter_key_type": "search",
  "suggestions_variable": "city_suggestions",
  "value_variable": "selected_city_id",
  "min_query_length": 2,
  "max_visible_suggestions": 4,
  "text_change_actions": [{
    "log_id": "city_search",
    "typed": {
      "type": "custom",
      "payload": { "action": "search_cities" }
    }
  }],
  "selection_actions": [{
    "log_id": "city_selected",
    "typed": {
      "type": "custom",
      "payload": { "action": "load_city_details" }
    }
  }],
  "dismiss_on_selection": true,
  "dismiss_on_blur": true,
  "dismiss_on_empty": true,
  "font_size": 16,
  "text_color": "#000000",
  "suggestion_text_color": "#333333",
  "width": { "type": "match_parent" },
  "paddings": { "left": 12, "right": 12, "top": 8, "bottom": 8 }
}
```

Variables defined at the card level:

```json
{
  "variables": [
    { "name": "search_query", "type": "string", "value": "" },
    { "name": "city_suggestions", "type": "array", "value": [] },
    { "name": "selected_city_id", "type": "string", "value": "" }
  ]
}
```

### Suggestion variable value (set by host app)

```json
[
  { "value": "NYC", "text": "New York", "secondary_text": "New York, USA" },
  { "value": "NOL", "text": "New Orleans", "secondary_text": "Louisiana, USA" },
  { "value": "NEW", "text": "Newark" }
]
```

### Minimal example

```json
{
  "type": "autocomplete",
  "text_variable": "query",
  "suggestions_variable": "results"
}
```

## Scope

This spec covers:
- Schema definition (2 new files, 2 modified files)
- Web client Svelte component implementation
- Android client Kotlin implementation
- Visual editor integration
- Translations (English + Russian)

This spec does not cover:
- iOS client implementation (can follow same patterns later)
- Flutter client implementation
- Server-side JSON builder updates
- Test data / regression test samples (will be created during implementation)
