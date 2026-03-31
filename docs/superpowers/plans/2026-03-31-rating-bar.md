# Rating Bar Widget Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement a `div-rating` widget across schema, web, Android, iOS, and visual editor — supporting interactive/display modes, fractional clip fill, custom icons, and configurable colors/sizing.

**Architecture:** Standalone widget following the `div-choice-chips` pattern with all lessons applied. Single schema file (no item schema needed). Each platform renders a horizontal row of icon layers with clip-based fractional fill. String variable binding avoids type mismatch issues.

**Tech Stack:** JSON Schema, TypeScript/Svelte 4, Kotlin/Android, Swift/iOS UIKit, Visual Editor (TypeScript)

**Spec:** `docs/superpowers/specs/2026-03-31-rating-bar-design.md`

**Lessons from Choice Chips (MUST follow):**
- Do NOT use `items` as a property name (reserved by DivKit container)
- Web Svelte: use reactive `$:` declarations and `let` variables with `$: {}` blocks — NOT function calls in templates
- Visual editor selects: always include `default` property
- Variable: always `string` type, parse to float internally
- Visual editor palette: auto-create variable with unique name via `genId()`
- Always rebuild web library (`npm run build:prod`) before testing visual editor
- Verify claims by checking existing component patterns before asserting behavior

---

### Task 1: Schema — Widget Definition and Translations

**Files:**
- Create: `schema/div-rating.json`
- Modify: `schema/div.json`
- Modify: `schema/translations.json`

- [ ] **Step 1: Create the widget schema**

Create `schema/div-rating.json`. Follow the exact `div-choice-chips.json` allOf pattern. Reference `div-base.json` only (not font-base — rating has no text input).

```json
{
  "$description": "translations.json#/div_rating",
  "allOf": [
    { "$ref": "div-base.json" },
    {
      "properties": {
        "type": { "type": "string", "enum": ["rating"] },
        "rating_variable": {
          "$ref": "div-variable-name.json",
          "$description": "translations.json#/div_rating_rating_variable"
        },
        "max_rating": {
          "$ref": "common.json#/non_negative_integer",
          "default_value": "5",
          "$description": "translations.json#/div_rating_max_rating"
        },
        "step": {
          "type": "number",
          "default_value": "1",
          "$description": "translations.json#/div_rating_step"
        },
        "is_interactive": {
          "$ref": "common.json#/boolean_int",
          "default_value": "true",
          "$description": "translations.json#/div_rating_is_interactive"
        },
        "rating_icon": {
          "$ref": "div-image-background.json",
          "$description": "translations.json#/div_rating_rating_icon"
        },
        "icon_size": {
          "$ref": "common.json#/non_negative_integer",
          "default_value": "32",
          "$description": "translations.json#/div_rating_icon_size"
        },
        "icon_spacing": {
          "$ref": "common.json#/non_negative_integer",
          "default_value": "4",
          "$description": "translations.json#/div_rating_icon_spacing"
        },
        "icon_padding": {
          "$ref": "div-edge-insets.json",
          "$description": "translations.json#/div_rating_icon_padding"
        },
        "active_color": {
          "$ref": "common.json#/color",
          "default_value": "#FFFFC107",
          "$description": "translations.json#/div_rating_active_color"
        },
        "inactive_color": {
          "$ref": "common.json#/color",
          "default_value": "#FFE0E0E0",
          "$description": "translations.json#/div_rating_inactive_color"
        },
        "border_color": {
          "$ref": "common.json#/color",
          "$description": "translations.json#/div_rating_border_color"
        },
        "disabled_color": {
          "$ref": "common.json#/color",
          "default_value": "#FFBDBDBD",
          "$description": "translations.json#/div_rating_disabled_color"
        },
        "rating_change_actions": {
          "type": "array",
          "items": { "$ref": "div-action.json" },
          "$description": "translations.json#/div_rating_rating_change_actions"
        }
      }
    }
  ],
  "platforms": ["android", "ios", "web"],
  "required": ["type", "rating_variable"]
}
```

- [ ] **Step 2: Register widget in div.json**

In `schema/div.json`, add to the `anyOf` array (after the choice_chips entry):

```json
{
  "$ref": "div-rating.json",
  "$description": "translations.json#/div_rating_short"
}
```

- [ ] **Step 3: Add translations**

In `schema/translations.json`, add all keys with en and ru:

```json
"div_rating": { "en": "Rating bar widget for displaying or setting a star/icon-based rating.", "ru": "Виджет рейтинга для отображения или установки рейтинга на основе звёзд/иконок." },
"div_rating_short": { "en": "Rating bar.", "ru": "Рейтинг." },
"div_rating_rating_variable": { "en": "Name of the string variable storing the rating value (e.g. \"3.5\").", "ru": "Имя строковой переменной для хранения значения рейтинга (например, \"3.5\")." },
"div_rating_max_rating": { "en": "Number of rating icons to display.", "ru": "Количество иконок рейтинга." },
"div_rating_step": { "en": "Rating increment granularity (e.g. 0.1, 0.5, 1).", "ru": "Шаг изменения рейтинга (например, 0.1, 0.5, 1)." },
"div_rating_is_interactive": { "en": "Whether the user can tap to set the rating.", "ru": "Может ли пользователь устанавливать рейтинг нажатием." },
"div_rating_rating_icon": { "en": "Custom icon image. Default: built-in star.", "ru": "Пользовательская иконка. По умолчанию: встроенная звезда." },
"div_rating_icon_size": { "en": "Width and height of each rating icon in dp.", "ru": "Ширина и высота каждой иконки рейтинга в dp." },
"div_rating_icon_spacing": { "en": "Gap between rating icons in dp.", "ru": "Расстояние между иконками рейтинга в dp." },
"div_rating_icon_padding": { "en": "Padding around each icon's tap target.", "ru": "Отступы вокруг области нажатия иконки." },
"div_rating_active_color": { "en": "Color of the filled rating portion.", "ru": "Цвет заполненной части рейтинга." },
"div_rating_inactive_color": { "en": "Color of the unfilled rating portion.", "ru": "Цвет незаполненной части рейтинга." },
"div_rating_border_color": { "en": "Outline color for each icon.", "ru": "Цвет контура каждой иконки." },
"div_rating_disabled_color": { "en": "Fill color when the rating is read-only.", "ru": "Цвет заполнения в режиме только для чтения." },
"div_rating_rating_change_actions": { "en": "Actions fired when the user changes the rating.", "ru": "Действия при изменении рейтинга пользователем." }
```

- [ ] **Step 4: Commit**

```bash
git add schema/div-rating.json schema/div.json schema/translations.json
git commit -m "feat: add rating bar widget schema and translations"
```

---

### Task 2: Web — TypeScript Types and CSS Module

**Files:**
- Create: `client/web/divkit/src/types/rating.d.ts`
- Create: `client/web/divkit/src/components/rating/Rating.module.css`

- [ ] **Step 1: Create type definitions**

Create `client/web/divkit/src/types/rating.d.ts`:

```typescript
import type { DivBaseData } from './base';
import type { Action } from './base';
import type { BooleanInt } from './base';
import type { DivImageBackground } from './base';
import type { EdgeInsets } from './base';

export interface DivRatingData extends DivBaseData {
    type: 'rating';
    rating_variable: string;
    max_rating?: number;
    step?: number;
    is_interactive?: BooleanInt;
    rating_icon?: DivImageBackground;
    icon_size?: number;
    icon_spacing?: number;
    icon_padding?: EdgeInsets;
    active_color?: string;
    inactive_color?: string;
    border_color?: string;
    disabled_color?: string;
    rating_change_actions?: Action[];
}
```

- [ ] **Step 2: Create CSS module**

Create `client/web/divkit/src/components/rating/Rating.module.css`:

```css
.rating {
    display: inline-flex;
    align-items: center;
    pointer-events: auto;
}

.rating__icon {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    overflow: hidden;
}

.rating__icon_interactive {
    cursor: pointer;
}

.rating__icon_disabled {
    cursor: default;
}

.rating__icon-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.rating__icon-layer_inactive {
    z-index: 1;
}

.rating__icon-layer_active {
    z-index: 2;
}
```

- [ ] **Step 3: Commit**

```bash
git add client/web/divkit/src/types/rating.d.ts client/web/divkit/src/components/rating/Rating.module.css
git commit -m "feat: add rating bar TypeScript types and CSS module"
```

---

### Task 3: Web — Svelte Component

**Files:**
- Create: `client/web/divkit/src/components/rating/Rating.svelte`

- [ ] **Step 1: Create the Svelte component**

CRITICAL patterns to follow (lessons from choice chips):

1. Use `componentContext` from `getContext`, `getDerivedFromVars()` for all reactive JSON properties
2. Use `let` variables with `$: {}` reactive blocks for computed styles (Radio pattern)
3. NEVER use function calls in template expressions for styles — Svelte can't track dependencies
4. Use `correctBooleanInt()` for `is_interactive`
5. Use `getVariable(name, 'string')` for variable binding — string type only
6. Use `correctColor()` with defaults matching the spec
7. Parse rating to float via `parseFloat()`, clamp to `[0, maxRating]`

Component structure:

```
<script>
  // Imports: css, componentContext types, ROOT_CTX, utilities
  // Props: componentContext, layoutParams
  // origJson + rebind pattern (reset let variables)
  
  // Variable binding:
  $: ratingVarName = componentContext.json.rating_variable;
  $: ratingVariable = ratingVarName && (
      componentContext.getVariable(ratingVarName, 'string') ||
      rootCtx.awaitGlobalVariable(ratingVarName, 'string', '0')
  ) || createVariable('temp', 'string', '0');
  
  // Derived JSON properties (all via getDerivedFromVars):
  $: jsonMaxRating, jsonStep, jsonIsInteractive, jsonIconSize, jsonIconSpacing,
     jsonIconPadding, jsonActiveColor, jsonInactiveColor, jsonBorderColor,
     jsonDisabledColor, jsonRatingIcon
  
  // Computed values (let variables + $: {} blocks):
  let maxRating = 5;
  let step = 1;
  let isInteractive = true;
  let iconSize = 32;
  let iconSpacing = 4;
  let activeColor = '#FFC107';
  let inactiveColor = '#E0E0E0';
  let borderColor = '';
  let disabledColor = '#BDBDBD';
  
  $: { maxRating = Math.max(1, Math.min(20, Number($jsonMaxRating) || 5)); }
  $: { step = Math.max(0.1, Number($jsonStep) || 1); }
  $: { isInteractive = correctBooleanInt($jsonIsInteractive, true); }
  // ... etc for all properties
  
  // Reactive rating value (for template tracking):
  $: currentRating = parseFloat($ratingVariable as string) || 0;
  $: clampedRating = Math.max(0, Math.min(currentRating, maxRating));
  
  // Reactive style objects (NOT functions):
  $: fillColor = isInteractive ? activeColor : disabledColor;
  $: iconStyle = { width: iconSize + 'px', height: iconSize + 'px' };
  $: containerStyle = { gap: iconSpacing + 'px' };
  
  // Icon array for iteration:
  $: icons = Array.from({ length: maxRating }, (_, i) => i + 1);
  
  // Fill percentage for each icon (reactive):
  function getFillPercent(position: number, rating: number): number {
    if (rating >= position) return 100;
    if (rating <= position - 1) return 0;
    return (rating - (position - 1)) * 100;
  }
  
  // Click handler:
  function onIconClick(event: MouseEvent, position: number) {
    if (!isInteractive) return;
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const fraction = clickX / rect.width;
    let newRating: number;
    if (step >= 1) {
      newRating = position;
    } else {
      newRating = (position - 1) + Math.ceil(fraction / step) * step;
      newRating = Math.min(newRating, position);
    }
    newRating = Math.round(newRating / step) * step;
    newRating = Math.max(0, Math.min(newRating, maxRating));
    ratingVariable.setValue(String(newRating));
    // Fire actions
    const actions = componentContext.json.rating_change_actions;
    if (actions && actions.length) {
      componentContext.execAnyActions(actions);
    }
  }
</script>

<Outer cls={...} style={containerStyle} {componentContext} {layoutParams}>
  {#each icons as position}
    {@const fillPct = getFillPercent(position, clampedRating)}
    <div class={...} style={makeStyle(iconStyle)} on:click={e => onIconClick(e, position)}>
      <!-- Inactive layer (full icon, inactive color) -->
      <svg class="inactive-layer" ...fill={inactiveColor} stroke={borderColor || 'none'}/>
      <!-- Active layer (clipped to fillPct) -->
      <div class="active-layer" style="clip-path: inset(0 {100 - fillPct}% 0 0)">
        <svg ...fill={fillColor} stroke={borderColor || 'none'}/>
      </div>
    </div>
  {/each}
</Outer>
```

NOTE: `getFillPercent` is acceptable as a function because it receives `clampedRating` as an explicit parameter (Svelte tracks it). The key lesson from choice chips: all reactive dependencies must be passed as arguments, not accessed as closured variables.

The default star SVG path (used when `rating_icon` is not set):
`M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z`

When `rating_icon` is set, render `<img>` tags instead of SVG, with CSS `filter` or overlapping colored divs for tinting.

- [ ] **Step 2: Commit**

```bash
git add client/web/divkit/src/components/rating/Rating.svelte
git commit -m "feat: add rating bar Svelte component"
```

---

### Task 4: Web — Registration and Build

**Files:**
- Modify: `client/web/divkit/src/components/typeMap.ts`

- [ ] **Step 1: Register in typeMap**

```typescript
import Rating from './rating/Rating.svelte';
// In TYPE_MAP:
rating: Rating
```

- [ ] **Step 2: Build and verify**

```bash
cd client/web/divkit && npm run build:prod
```

Expected: Build succeeds with no errors.

- [ ] **Step 3: Commit**

```bash
git add client/web/divkit/src/components/typeMap.ts
git commit -m "feat: register rating bar in web client typeMap"
```

---

### Task 5: Android — View and Binder

**Files:**
- Create: `client/android/div/src/main/java/com/yandex/div/core/view2/divs/widgets/DivRatingView.kt`
- Create: `client/android/div/src/main/java/com/yandex/div/core/view2/divs/DivRatingBinder.kt`

- [ ] **Step 1: Create DivRatingView**

`DivRatingView` extends `LinearLayout`, implements `DivHolderView<Div.Rating>` via `DivHolderViewMixin()`.

Key structure:
- Horizontal `LinearLayout` containing `FrameLayout` icon containers
- Each icon container: two `ImageView` layers — inactive (background) + active (foreground with `ClipDrawable`)
- Default star: `VectorDrawableCompat` from embedded path data `M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z`
- Color tinting via `DrawableCompat.setTint()`
- `ClipDrawable` with `Gravity.START` for left-to-right fill, level set to `fillPercent * 100` (max 10000)

Public methods:
- `setMaxRating(count: Int)` — rebuilds icon views
- `setRating(value: Float)` — updates fill levels on all icons
- `setActiveColor(color: Int)`, `setInactiveColor(color: Int)`, `setBorderColor(color: Int?)`, `setDisabledColor(color: Int)`
- `setIconSize(size: Int)`, `setIconSpacing(spacing: Int)`, `setIconPadding(left, top, right, bottom)`
- `setIsInteractive(interactive: Boolean)` — enables/disables touch handling
- `var onRatingChangeListener: ((Float) -> Unit)?` — callback for tap

Touch handling:
- `OnTouchListener` on the whole view
- Calculate which icon was tapped from X position
- Snap to `step` value
- Call `onRatingChangeListener`

- [ ] **Step 2: Create DivRatingBinder**

```kotlin
@DivScope
internal class DivRatingBinder @Inject constructor(
    baseBinder: DivBaseBinder,
    private val actionBinder: DivActionBinder,
    private val errorCollectors: ErrorCollectors
) : DivViewBinder<Div.Rating, DivRating, DivRatingView>(baseBinder)
```

Observer methods:
- `observeRatingVariable()` — subscribe to string variable, parse to float, call `view.setRating()`
- `observeMaxRating()`, `observeStep()`, `observeIsInteractive()`
- `observeColors()` — active, inactive, border, disabled
- `observeIconSize()`, `observeIconSpacing()`, `observeIconPadding()`
- Set up `onRatingChangeListener` that updates variable + fires `rating_change_actions`

Property names on generated `DivRating` class (from snake_case schema):
- `ratingVariable`, `maxRating`, `step`, `isInteractive`
- `ratingIcon`, `iconSize`, `iconSpacing`, `iconPadding`
- `activeColor`, `inactiveColor`, `borderColor`, `disabledColor`
- `ratingChangeActions`

- [ ] **Step 3: Commit**

```bash
git add client/android/div/src/main/java/com/yandex/div/core/view2/divs/widgets/DivRatingView.kt \
      client/android/div/src/main/java/com/yandex/div/core/view2/divs/DivRatingBinder.kt
git commit -m "feat: add rating bar Android view and binder"
```

---

### Task 6: Android — Registration and Exhaustive When Blocks

**Files:**
- Modify: `client/android/div/src/main/java/com/yandex/div/core/view2/DivBinder.kt`
- Modify: `client/android/div/src/main/java/com/yandex/div/core/view2/DivViewCreator.kt`
- Modify: 11+ files with exhaustive `when` blocks

- [ ] **Step 1: Add to DivBinder**

Add `private val ratingBinder: DivRatingBinder` to constructor.
Add `is Div.Rating -> ratingBinder.bindView(context, view as DivRatingView, div, path)` to bind when-block.
Add `is Div.Rating -> (view as DivRatingView).setDataWithoutBinding(context, div)` to setDataWithoutBinding.

- [ ] **Step 2: Add to DivViewCreator**

Add `const val TAG_RATING = "DIV2.RATING"`.
Register: `register(TAG_RATING, { DivRatingView(context) }, 0)`.
Add to getTag: `is Div.Rating -> TAG_RATING`.
Add to TAGS array.

- [ ] **Step 3: Fix all exhaustive when blocks**

Search for `is Div.ChoiceChips` (the most recent addition) and add `is Div.Rating ->` right after in all files:
1. `DivVisitor.kt` — + `visitRating` abstract method
2. `DivTreeVisitor.kt` — + `visitRating` method
3. `DivCollectionExtensions.kt`
4. `ExistingToken.kt`
5. `NewToken.kt`
6. `DivComparator.kt`
7. `DivTreeWalk.kt`
8. `DivRuntimeVisitor.kt`
9. `DivUtil.kt` — THREE when blocks
10. `DivPathUtils.kt`
11. `DivTooltipController.kt` (return `true`)

Mirror the ChoiceChips case pattern exactly.

- [ ] **Step 4: Commit**

```bash
git add client/android/div/src/main/java/com/yandex/div/core/view2/DivBinder.kt \
      client/android/div/src/main/java/com/yandex/div/core/view2/DivViewCreator.kt \
      # ... all when-block files
git commit -m "feat: register rating bar in Android DivKit dispatch system"
```

---

### Task 7: iOS — Block and UIViewRenderableBlock

**Files:**
- Create: `client/ios/LayoutKit/LayoutKit/Blocks/RatingBlock.swift`
- Create: `client/ios/LayoutKit/LayoutKit/UI/Blocks/RatingBlock+UIViewRenderableBlock.swift`

- [ ] **Step 1: Create RatingBlock**

```swift
public final class RatingBlock: BlockWithTraits {
  public let widthTrait: LayoutTrait
  public let heightTrait: LayoutTrait
  public let ratingValue: Binding<String>
  public let maxRating: Int
  public let step: CGFloat
  public let isInteractive: Bool
  public let iconSize: CGFloat
  public let iconSpacing: CGFloat
  public let iconPadding: EdgeInsets?
  public let activeColor: Color
  public let inactiveColor: Color
  public let borderColor: Color?
  public let disabledColor: Color
  public let ratingChangeActions: [UserInterfaceAction]
  public let ratingIconUrl: URL?
  public let path: UIElementPath
  // ... init, equals, intrinsicContentWidth/Height, getImageHolders
}
extension RatingBlock: LayoutCachingDefaultImpl {}
extension RatingBlock: ElementStateUpdatingDefaultImpl {}
```

- [ ] **Step 2: Create UIViewRenderableBlock**

Private `RatingBlockView` with:
- Horizontal layout of `IconLayerView` subviews
- Each `IconLayerView`: two sublayers (inactive + active with `CAShapeLayer` mask for clip)
- Default star via `UIBezierPath` from path data
- Tap gesture for interactive mode
- `configure(with block:, observer:)` method

- [ ] **Step 3: Commit**

```bash
git add client/ios/LayoutKit/LayoutKit/Blocks/RatingBlock.swift \
      client/ios/LayoutKit/LayoutKit/UI/Blocks/RatingBlock+UIViewRenderableBlock.swift
git commit -m "feat: add rating bar block and UIView rendering for iOS"
```

---

### Task 8: iOS — Generated Sources, Extensions, and Switch Fixes

**Files:**
- Create: `client/ios/DivKit/Extensions/DivRatingExtensions.swift`
- Create/Modify: Generated source files via `api_generator`
- Modify: 6 files with exhaustive switch statements

- [ ] **Step 1: Run API generator for iOS**

```bash
python3 -m api_generator -c client/ios/DivKit/generator_config.json -s schema -o client/ios/DivKit/generated_sources
```

This produces `DivRating.swift`, `DivRatingTemplate.swift`, and updates `Div.swift` + `DivTemplate.swift`.

- [ ] **Step 2: Create DivRatingExtensions.swift**

DivBlockModeling conformance. `makeBlock` resolves all properties, returns `RatingBlock(...)`.

- [ ] **Step 3: Fix switch exhaustiveness**

Add `.divRating` to all switches (search for `.divChoiceChips` and add after):
1. `DivExtensions.swift`
2. `ResourceDivExtensions.swift` (two switches)
3. `DivKitExtensions/DivExtensions.swift`
4. `DivDataPatchExtensions.swift`
5. `DivContainer+Accessibility.swift`

- [ ] **Step 4: Commit**

```bash
git add client/ios/DivKit/Extensions/DivRatingExtensions.swift \
      client/ios/DivKit/generated_sources/ \
      # ... switch files
git commit -m "feat: add rating bar iOS implementation with generated sources"
```

---

### Task 9: Visual Editor Integration

**Files:**
- Modify: `visual-editor/src/lib/data/componentProps.ts`
- Modify: `visual-editor/src/lib/utils/componentIcon.ts`
- Modify: `visual-editor/src/auto/lang.json`
- Modify: `visual-editor/src/lib/data/state.ts`
- Create: `visual-editor/src/assets/components/rating.svg`

- [ ] **Step 1: Add to supportedComponents and COMPONENT_PROPS**

In `componentProps.ts`, add `'rating'` to `supportedComponents` Set.

Add property panel (NOTE: `default` on the `is_interactive` boolean select to avoid empty option):

```typescript
rating: [...BASE_COMPONENT_PROPS, {
    type: 'group',
    title: 'a11yProps.title',
    list: [{
        type: 'string',
        prop: 'accessibility.description',
        enableSources: true,
        name: 'a11yProps.description'
    }]
}, {
    type: 'group',
    title: 'ratingProps.title',
    list: [
        { type: 'variable-name', prop: 'rating_variable', name: 'ratingProps.rating_variable', required: true, enableSources: true },
        { type: 'split', list: [
            { type: 'integer', prop: 'max_rating', name: 'ratingProps.max_rating', min: 1, max: 20, enableSources: true },
            { type: 'integer', prop: 'step', name: 'ratingProps.step', min: 0, max: 10, enableSources: true }
        ]},
        { type: 'split', list: [
            { type: 'integer', prop: 'icon_size', name: 'ratingProps.icon_size', min: 8, max: 200, enableSources: true },
            { type: 'integer', prop: 'icon_spacing', name: 'ratingProps.icon_spacing', min: 0, max: 100, enableSources: true }
        ]},
        { type: 'color', prop: 'active_color', name: 'ratingProps.active_color', enableSources: true },
        { type: 'color', prop: 'inactive_color', name: 'ratingProps.inactive_color', enableSources: true },
        { type: 'color', prop: 'border_color', name: 'ratingProps.border_color', enableSources: true },
        { type: 'color', prop: 'disabled_color', name: 'ratingProps.disabled_color', enableSources: true }
    ]
}]
```

- [ ] **Step 2: Create rating icon SVG**

Create `visual-editor/src/assets/components/rating.svg` — a 40x40 star outline:

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none"><path d="M20 8l3.09 6.26 6.91 1.01-5 4.87 1.18 6.86L20 23.77 13.82 27 15 20.14l-5-4.87 6.91-1.01L20 8z" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/></svg>
```

- [ ] **Step 3: Register icon**

In `componentIcon.ts`:
```typescript
import ratingIcon from '../../assets/components/rating.svg?url';
// In MAP:
rating: ratingIcon
```

- [ ] **Step 4: Add genNewLeaf for palette add**

In `state.ts`, add before the `namedTemplates` else-if (after choice_chips block):

```typescript
} else if (type === 'rating') {
    const uid = this.genId().replace(/[^a-z0-9]/gi, '');
    const ratingVarName = `rating_value_${uid}`;
    json = {
        type,
        rating_variable: ratingVarName,
        max_rating: 5,
        step: 1,
        active_color: '#FFC107',
        inactive_color: '#E0E0E0',
        icon_size: 32,
        width: { type: 'wrap_content' },
        height: { type: 'wrap_content' }
    };
    const vars = get(this.customVariables);
    vars.push({
        id: this.genVariableId(),
        name: ratingVarName,
        type: 'string',
        value: '0'
    });
    this.customVariables.set(vars);
```

- [ ] **Step 5: Add translations**

In `lang.json`, add to both ru and en sections:

Russian:
```json
"components.rating": "Рейтинг",
"ratingProps.title": "Свойства рейтинга",
"ratingProps.rating_variable": "Переменная рейтинга",
"ratingProps.max_rating": "Макс. рейтинг",
"ratingProps.step": "Шаг",
"ratingProps.icon_size": "Размер иконки",
"ratingProps.icon_spacing": "Расстояние между иконками",
"ratingProps.active_color": "Цвет заполнения",
"ratingProps.inactive_color": "Цвет пустой части",
"ratingProps.border_color": "Цвет контура",
"ratingProps.disabled_color": "Цвет в режиме просмотра"
```

English:
```json
"components.rating": "Rating",
"ratingProps.title": "Rating properties",
"ratingProps.rating_variable": "Rating variable",
"ratingProps.max_rating": "Max rating",
"ratingProps.step": "Step",
"ratingProps.icon_size": "Icon size",
"ratingProps.icon_spacing": "Icon spacing",
"ratingProps.active_color": "Active color",
"ratingProps.inactive_color": "Inactive color",
"ratingProps.border_color": "Border color",
"ratingProps.disabled_color": "Disabled color"
```

- [ ] **Step 6: Commit**

```bash
git add visual-editor/src/lib/data/componentProps.ts \
      visual-editor/src/lib/utils/componentIcon.ts \
      visual-editor/src/auto/lang.json \
      visual-editor/src/lib/data/state.ts \
      visual-editor/src/assets/components/rating.svg
git commit -m "feat: add rating bar to visual editor with auto-variable and translations"
```

---

### Task 10: Test Data

**Files:**
- Create: `test_data/samples/rating/rating_basic.json`
- Create: `test_data/samples/rating/rating_all_variations.json`

- [ ] **Step 1: Create basic demo**

Single interactive 5-star rating with amber color and selection action.

- [ ] **Step 2: Create all variations**

Vertical container with 8 variations:
1. Basic 5-star interactive (whole stars, amber)
2. Half-star with border (green theme, step 0.5)
3. Display-only (read-only, gray disabled color)
4. Custom colors (purple theme)
5. Large icons (icon_size: 48)
6. Small compact (icon_size: 20, spacing: 2)
7. 10-star rating (max_rating: 10, small icons)
8. With rating change actions

All variables as `type: "string"` with appropriate default values.

- [ ] **Step 3: Commit**

```bash
git add test_data/samples/rating/
git commit -m "feat: add rating bar test data samples"
```
