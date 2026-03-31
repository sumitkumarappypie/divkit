# Rating Bar Widget — Design Specification

**Date:** 2026-03-31
**Status:** Approved
**Platforms:** Android, iOS, Web, Visual Editor

## Overview

A new `div-rating` widget for DivKit that renders a configurable star/icon-based rating bar. Supports interactive (user sets rating) and display-only modes, fractional ratings with precise clip fill, custom icons via URL, and configurable colors/sizing. Follows the standalone widget pattern established by `div-choice-chips`.

## Lessons Applied from Choice Chips

- Property name avoids `items` (reserved by container) — no item array needed for rating
- Web component uses reactive `$:` declarations, NOT function calls in templates
- Visual editor selects include `default` values to prevent empty dropdown options
- Variable type is `string` to avoid type mismatch errors in visual editor
- Auto-create variable with unique name on palette add
- Rebuild web library before testing visual editor

## Schema

### `div-rating.json` — Widget

Extends `div-base.json`.

#### Core Properties

| Property | Type | Required | Default | Description |
|---|---|---|---|---|
| `rating_variable` | `string` | yes | — | Variable name storing rating as string (e.g. `"3.5"`) |
| `max_rating` | `non_negative_integer` | no | `5` | Number of icons to display |
| `step` | `number` | no | `1` | Rating increment granularity (e.g. 0.1, 0.5, 1) |
| `is_interactive` | `boolean_int` | no | `1` | Whether user can tap to set rating |

#### Icon Properties

| Property | Type | Required | Default | Description |
|---|---|---|---|---|
| `rating_icon` | `div-image-background` | no | — | Custom icon URL. Default: built-in star SVG |
| `icon_size` | `non_negative_integer` | no | `32` | Width/height of each icon in dp |
| `icon_spacing` | `non_negative_integer` | no | `4` | Gap between icons in dp |
| `icon_padding` | `div-edge-insets` | no | — | Padding around each icon's tap target |

#### Color Properties

| Property | Type | Required | Default | Description |
|---|---|---|---|---|
| `active_color` | `color` | no | `#FFFFC107` | Filled portion color (amber) |
| `inactive_color` | `color` | no | `#FFE0E0E0` | Unfilled portion color (light gray) |
| `border_color` | `color` | no | — | Icon outline color (no border if unset) |
| `disabled_color` | `color` | no | `#FFBDBDBD` | Color when `is_interactive` is false |

#### Action Properties

| Property | Type | Required | Default | Description |
|---|---|---|---|---|
| `rating_change_actions` | `array<div-action>` | no | — | Actions fired when user changes rating |

## Data Flow

### Variable Binding

- `rating_variable` binds to a `string` variable
- Empty string `""` or `"0"` means no rating set
- Stores numeric value as string: `"3"`, `"3.5"`, `"4.7"`
- Value is clamped to `[0, max_rating]` range
- Parsed to float internally for rendering and logic

### User Interaction (when `is_interactive` is true)

- Tap on an icon sets the rating to that icon's position, snapped to `step`
- With `step: 1`, tapping 3rd icon sets `"3"`
- With `step: 0.5`, tapping left-half of 3rd icon sets `"2.5"`, right-half sets `"3"`
- After setting value, `rating_change_actions` fire
- Actions are NOT fired for programmatic variable changes (only user interaction)

### Rendering Logic

Parse `rating_variable` string to float. For each icon position `i` (1 to `max_rating`):
- If `rating >= i` → fully filled (`active_color`)
- If `rating > i-1 && rating < i` → partially filled (clip active layer to `(rating - (i-1)) * 100%` width)
- If `rating <= i-1` → empty (`inactive_color`)

When `is_interactive` is false, use `disabled_color` instead of `active_color` for the filled portion.

Border applied to all icons uniformly if `border_color` is set.

### Custom Icon Handling

- If `rating_icon` is set, render that image for each icon position
- If not set, use a built-in star SVG path (same path data across all platforms)
- Fractional fill uses clip-rect on the icon — works for both SVG paths and raster images
- Star SVG path: `M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z`

## Platform Implementations

### Android

- **View:** `DivRatingView` — `LinearLayout` (horizontal) containing icon `ImageView` instances
- Each icon: Two-layer approach — inactive background `ImageView` + active foreground `ImageView` with `ClipDrawable` for fractional fill
- Default star via `VectorDrawableCompat` from embedded path data
- Custom icon loaded via URL (using the project's existing image loading infra)
- Color tinting via `DrawableCompat.setTint()`
- Touch listener: calculate tap X position → map to icon index → snap to `step` → update variable → fire actions via `DivActionBinder`
- **Binder:** `DivRatingBinder` — fat binder pattern. Observes `rating_variable` (string, parsed to float), all style properties. Sets up touch listener for interactive mode.
- **Registration:** Added to `DivBinder`, `DivViewCreator`, and all exhaustive `when` blocks

### iOS

- **Block:** `RatingBlock` — `BlockWithTraits` with rating value binding, all styling properties
- **View:** `RatingBlockView` — `UIView` with horizontal layout of icon subviews
- Each icon: `UIView` with two `CALayer` sublayers — inactive (full icon, `inactive_color` tinted) + active (same icon, `active_color` tinted, masked with `CAShapeLayer` rect for fractional clip)
- Default star via `UIBezierPath` from the same SVG path data
- Custom icon via `UIImage` from URL
- Tap gesture: compute touch X → map to icon index + snap to step → update binding → fire actions via `.perform(sendingFrom:)`
- **Registration:** DivBlockModeling conformance in `DivRatingExtensions.swift`, plus switch exhaustiveness fixes

### Web

- **Component:** `Rating.svelte` — component using `componentContext` pattern
- Each icon rendered as a `<div>` with two overlapping layers:
  - Inactive layer: full icon with `inactive_color`
  - Active layer: same icon with `active_color`, clipped via CSS `clip-path: inset(0 X% 0 0)` for fractional fill
- Default star: inline SVG `<path>`. Custom icon: `<img>` tag
- All style properties as reactive `$:` declarations with `let` variables and `$: {}` blocks (Radio pattern — NOT function calls in templates)
- Variable binding via `getVariable(name, 'string')`, parse with `parseFloat()`
- Click handler: calculate click X position relative to icon container → determine icon index → snap to step → `setValue()` → `execAnyActions()`
- `Rating.module.css` with `.rating`, `.rating__icon`, `.rating__icon-layer`
- Registration in `typeMap.ts`

### Visual Editor

- Register `rating` in `supportedComponents`
- Property panel in `componentProps.ts`: all properties with `default` on every select/enum
- Auto-create `string` variable with unique name on palette add (in `state.ts` `genNewLeaf`)
- New `rating.svg` icon for component palette
- Translations in `lang.json` (en + ru)

## Example JSON

### Basic 5-Star Interactive Rating

```json
{
  "type": "rating",
  "rating_variable": "user_rating",
  "max_rating": 5,
  "step": 1,
  "active_color": "#FFC107",
  "inactive_color": "#E0E0E0"
}
```

### Half-Star with Border

```json
{
  "type": "rating",
  "rating_variable": "product_rating",
  "max_rating": 5,
  "step": 0.5,
  "active_color": "#4CAF50",
  "inactive_color": "#C8E6C9",
  "border_color": "#388E3C",
  "icon_size": 40
}
```

### Display-Only with Custom Icon

```json
{
  "type": "rating",
  "rating_variable": "love_score",
  "max_rating": 5,
  "step": 1,
  "is_interactive": 0,
  "rating_icon": {
    "image_url": "https://example.com/heart.png"
  },
  "active_color": "#E91E63",
  "inactive_color": "#F8BBD0",
  "disabled_color": "#E91E63",
  "icon_size": 28
}
```

### 10-Point Precise Rating

```json
{
  "type": "rating",
  "rating_variable": "precise_score",
  "max_rating": 10,
  "step": 0.1,
  "is_interactive": 0,
  "active_color": "#FF9800",
  "inactive_color": "#FFF3E0",
  "border_color": "#E65100",
  "icon_size": 24,
  "icon_spacing": 2
}
```

### With Rating Change Actions

```json
{
  "type": "rating",
  "rating_variable": "feedback_rating",
  "max_rating": 5,
  "step": 1,
  "active_color": "#1976D2",
  "inactive_color": "#BBDEFB",
  "rating_change_actions": [{
    "log_id": "rating_submitted",
    "url": "div-action://submit_rating"
  }]
}
```
