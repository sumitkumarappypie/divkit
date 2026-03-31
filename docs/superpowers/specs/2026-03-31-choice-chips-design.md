# Choice Chips Widget — Design Specification

**Date:** 2026-03-31
**Status:** Approved
**Platforms:** Android, iOS, Web, Visual Editor

## Overview

A new `div-choice-chips` widget for DivKit that renders a set of selectable chip elements. Supports single and multi-selection modes, three visual themes (outlined, filled, elevated), configurable wrap/scroll layout, and both static and dynamic item sources. Follows the standalone widget pattern established by `div-autocomplete`.

## Schema

### `div-choice-chips-item.json` — Chip Item

| Property | Type | Required | Default | Description |
|---|---|---|---|---|
| `value` | `string` | yes | — | Unique identifier for the chip |
| `text` | `string` | no | — | Display label (falls back to `value` if absent) |
| `icon` | `div-image-background` | no | — | Optional leading icon |
| `is_enabled` | `boolean_int` | no | `1` | Whether chip is interactive |
| `is_selected_by_default` | `boolean_int` | no | `0` | Pre-selected on first render |

### `div-choice-chips.json` — Widget

Extends `div-base.json`.

#### Selection Properties

| Property | Type | Required | Default | Description |
|---|---|---|---|---|
| `selection_mode` | enum: `single`, `multi` | no | `single` | Single or multi-selection |
| `selected_value_variable` | `string` | yes | — | Variable name for selected value(s). Binds to `string` in single mode, `array` in multi mode |
| `chip_items` | `array<div-choice-chips-item>` | no | — | Static chip items defined in JSON |
| `items_variable` | `string` | no | — | Variable name containing dynamic chip items array |
| `selection_actions` | `array<div-action>` | no | — | Actions fired when selection changes |

#### Layout Properties

| Property | Type | Required | Default | Description |
|---|---|---|---|---|
| `layout_mode` | enum: `wrap`, `scroll` | no | `wrap` | Chips wrap to next line or scroll horizontally |
| `chip_spacing` | `non_negative_integer` | no | `8` | Horizontal gap between chips (dp/px) |
| `row_spacing` | `non_negative_integer` | no | `8` | Vertical gap between rows in wrap mode |

#### Theme & Styling Properties

| Property | Type | Required | Default | Description |
|---|---|---|---|---|
| `chip_style` | enum: `outlined`, `filled`, `elevated` | no | `outlined` | Visual preset theme |
| `corner_radius` | `non_negative_integer` | no | `16` | Chip corner radius (dp/px) |
| `font_size` | `int_constraint` | no | `14` | Chip text size |
| `font_weight` | `div-font-weight` | no | `regular` | Chip text weight |
| `font_family` | `string` | no | — | Chip text font family |
| `selected_background_color` | `color` | no | theme-dependent | Background when selected |
| `selected_text_color` | `color` | no | theme-dependent | Text color when selected |
| `selected_border_color` | `color` | no | theme-dependent | Border color when selected |
| `default_background_color` | `color` | no | theme-dependent | Background when unselected |
| `default_text_color` | `color` | no | theme-dependent | Text color when unselected |
| `default_border_color` | `color` | no | theme-dependent | Border color when unselected |
| `disabled_background_color` | `color` | no | theme-dependent | Background when disabled |
| `disabled_text_color` | `color` | no | theme-dependent | Text color when disabled |
| `disabled_border_color` | `color` | no | theme-dependent | Border color when disabled |
| `show_checkmark` | `boolean_int` | no | `0` | Show checkmark icon on selected chips |
| `icon_size` | `non_negative_integer` | no | `18` | Size of chip leading icon (dp/px) |
| `chip_height` | `non_negative_integer` | no | `36` | Height of each chip (dp/px) |
| `chip_padding` | `edge-insets` | no | — | Internal padding within each chip |

## Data Flow

### Variable Binding

**Single mode** (`selection_mode: "single"`):
- `selected_value_variable` binds to a `string` variable
- Empty string `""` means nothing selected
- Contains the `value` of the selected chip
- Tapping the selected chip deselects it (variable becomes `""`)
- Tapping a different chip selects it (variable becomes new value, old auto-deselects)

**Multi mode** (`selection_mode: "multi"`):
- `selected_value_variable` binds to an `array` variable
- Empty array `[]` means nothing selected
- Contains the `value` strings of all selected chips
- Tapping an unselected chip appends its value to the array
- Tapping a selected chip removes its value from the array

### Items Resolution

Priority order:
1. If `items_variable` is set and the variable exists with a valid array value → use it
2. Else if `chip_items` array is defined in JSON → use static items
3. Else → render nothing (empty widget)

Items from `items_variable` are parsed the same way as static items: each array element must have at minimum a `value` string field.

### Initial Selection

- `is_selected_by_default` on items sets initial state on first render
- If the bound variable already has a non-empty value, the variable takes precedence over `is_selected_by_default`

### Action Firing

- `selection_actions` fire whenever the selected value(s) change (tap to select or deselect)
- The app reads the bound variable to determine what changed
- Actions are NOT fired for programmatic variable changes (only user interaction)

## Theme Defaults

Colors applied when not explicitly overridden by per-property color settings:

| Property | Outlined | Filled | Elevated |
|---|---|---|---|
| `default_background_color` | `transparent` | `#1F000000` (12% black) | `#FFFFFFFF` |
| `default_text_color` | `#FF000000` | `#FF000000` | `#FF000000` |
| `default_border_color` | `#FF757575` | `transparent` | `transparent` |
| `selected_background_color` | `#1F1976D2` (12% blue) | `#FF1976D2` | `#FFFFFFFF` |
| `selected_text_color` | `#FF1976D2` | `#FFFFFFFF` | `#FF1976D2` |
| `selected_border_color` | `#FF1976D2` | `transparent` | `transparent` |
| `disabled_background_color` | `transparent` | `#0A000000` (4% black) | `#FFF5F5F5` |
| `disabled_text_color` | `#FFBDBDBD` | `#FFBDBDBD` | `#FFBDBDBD` |
| `disabled_border_color` | `#FFE0E0E0` | `transparent` | `transparent` |
| shadow | none | none | `0 2px 4px rgba(0,0,0,0.15)` |

## Platform Implementations

### Android

- **View:** `DivChoiceChipsView` — `FrameLayout` containing:
  - Wrap mode: `FlexboxLayout` (Google flexbox-layout library) for flow layout
  - Scroll mode: `HorizontalScrollView` with inner `LinearLayout`
- **Chips:** Each chip is a custom `View` with `TextView` + optional `ImageView` (icon) + optional checkmark `ImageView`, with `GradientDrawable` background for rounded corners and state colors
- **Binder:** `DivChoiceChipsBinder` — Fat binder pattern. Observes `selected_value_variable` (string or array), `items_variable`, manages chip creation/selection state, fires `selection_actions` via `DivActionBinder`
- **Theme:** `ChipStyleProvider` utility resolves theme defaults + explicit overrides into final color/drawable sets per state (default, selected, disabled)
- **Registration:** Added to `DivBinder`, `DivViewCreator`, and all exhaustive `when` blocks (DivVisitor, DivTreeVisitor, etc.)

### iOS

- **Block:** `ChoiceChipsBlock` — `BlockWithTraits` with chip items, layout properties, styling configuration
- **View:** `ChoiceChipsBlockView` — `UIView` with two layout strategies:
  - Wrap mode: Custom flow layout via manual frame calculation in `layoutSubviews` (compute row breaks, position chips left-to-right with wrapping)
  - Scroll mode: `UIScrollView` with horizontal content, chips laid out in a single row
- **Chips:** Each chip is a `UIView` subview containing `UILabel` + optional `UIImageView` (icon) + optional checkmark `UIImageView`, with `CALayer` for rounded corners, borders, and shadows
- **Selection:** Variable observer pattern. Fires actions via `.perform(sendingFrom:)`. Focus state via `observer?.focusedElementChanged(isFocused:forPath:)`
- **Registration:** DivBlockModeling conformance in `DivChoiceChipsExtensions.swift`, plus switch exhaustiveness fixes

### Web

- **Component:** `ChoiceChips.svelte` — Svelte component using `componentContext` pattern
- **Layout:**
  - Wrap mode: CSS `display: flex; flex-wrap: wrap; gap: {chip_spacing}px {row_spacing}px`
  - Scroll mode: CSS `display: flex; overflow-x: auto; flex-wrap: nowrap; gap: {chip_spacing}px`
- **Chips:** `<button>` elements with CSS classes for state (`.chip--selected`, `.chip--disabled`) and theme (`.chip--outlined`, `.chip--filled`, `.chip--elevated`)
- **Variable binding:** `getDerivedFromVars()` for reactive state. Single mode uses `setValue()` on string variable, multi mode reads/writes array variable
- **Actions:** Fired via `execAnyActions()` from `componentContext`
- **BooleanInt:** All boolean properties use `correctBooleanInt()` utility
- **Styles:** `ChoiceChips.module.css` with theme-specific classes and state transitions
- **Registration:** Added to `typeMap.ts`

### Visual Editor

- Register `choice_chips` in `supportedComponents` set in `state.ts`
- Property panel in `componentProps.ts`: selection_mode dropdown, items editor, chip_style preset selector, layout_mode toggle, color pickers for all 9 state colors, font controls, spacing inputs
- Icon in `componentIcon.ts` (reuse or create chip-appropriate icon)
- Translations in `lang.json` for en + ru

## Example JSON

### Single Selection — Category Filter

```json
{
  "type": "choice_chips",
  "selection_mode": "single",
  "selected_value_variable": "category",
  "chip_style": "outlined",
  "chip_items": [
    { "value": "all", "text": "All" },
    { "value": "tech", "text": "Technology" },
    { "value": "design", "text": "Design" },
    { "value": "business", "text": "Business" }
  ],
  "selection_actions": [{
    "log_id": "category_changed",
    "url": "div-action://filter"
  }]
}
```

### Multi Selection — Tags with Checkmarks

```json
{
  "type": "choice_chips",
  "selection_mode": "multi",
  "selected_value_variable": "tags",
  "chip_style": "filled",
  "show_checkmark": 1,
  "chip_items": [
    { "value": "js", "text": "JavaScript", "is_selected_by_default": 1 },
    { "value": "py", "text": "Python" },
    { "value": "rs", "text": "Rust" },
    { "value": "go", "text": "Go" },
    { "value": "kt", "text": "Kotlin" }
  ]
}
```

### Horizontal Scroll with Disabled Chips

```json
{
  "type": "choice_chips",
  "selection_mode": "single",
  "selected_value_variable": "day",
  "chip_style": "elevated",
  "layout_mode": "scroll",
  "chip_items": [
    { "value": "mon", "text": "Mon" },
    { "value": "tue", "text": "Tue" },
    { "value": "wed", "text": "Wed" },
    { "value": "thu", "text": "Thu" },
    { "value": "fri", "text": "Fri" },
    { "value": "sat", "text": "Sat", "is_enabled": 0 },
    { "value": "sun", "text": "Sun", "is_enabled": 0 }
  ]
}
```

### Dynamic Items from Variable

```json
{
  "type": "choice_chips",
  "selection_mode": "multi",
  "selected_value_variable": "selected_skills",
  "items_variable": "available_skills",
  "chip_style": "outlined",
  "layout_mode": "wrap"
}
```
