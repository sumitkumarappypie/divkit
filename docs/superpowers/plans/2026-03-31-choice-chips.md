# Choice Chips Widget Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement a `div-choice-chips` widget across schema, web, Android, iOS, and visual editor — supporting single/multi selection, wrap/scroll layout, and outlined/filled/elevated themes.

**Architecture:** Standalone widget following the `div-autocomplete` pattern. New schema files define the widget and its item type. Each platform gets a native implementation: Svelte component (web), FrameLayout with FlexboxLayout/HorizontalScrollView (Android), UIView with flow layout/UIScrollView (iOS). Visual editor gets property panel and translations.

**Tech Stack:** JSON Schema, TypeScript/Svelte 4, Kotlin/Android, Swift/iOS UIKit, Visual Editor (TypeScript)

**Spec:** `docs/superpowers/specs/2026-03-31-choice-chips-design.md`

---

### Task 1: Schema — Item and Widget Definition

**Files:**
- Create: `schema/div-choice-chips-item.json`
- Create: `schema/div-choice-chips.json`
- Modify: `schema/div.json`
- Modify: `schema/translations.json`

- [ ] **Step 1: Create the chip item schema**

Create `schema/div-choice-chips-item.json`:

```json
{
  "$description": "translations.json#/div_choice_chips_item",
  "type": "object",
  "properties": {
    "value": {
      "type": "string",
      "$description": "translations.json#/div_choice_chips_item_value"
    },
    "text": {
      "type": "string",
      "$description": "translations.json#/div_choice_chips_item_text"
    },
    "icon": {
      "$ref": "div-image-background.json",
      "$description": "translations.json#/div_choice_chips_item_icon"
    },
    "is_enabled": {
      "$ref": "common.json#/boolean_int",
      "default_value": "true",
      "$description": "translations.json#/div_choice_chips_item_is_enabled"
    },
    "is_selected_by_default": {
      "$ref": "common.json#/boolean_int",
      "default_value": "false",
      "$description": "translations.json#/div_choice_chips_item_is_selected_by_default"
    }
  },
  "required": ["value"]
}
```

- [ ] **Step 2: Create the widget schema**

Create `schema/div-choice-chips.json`:

```json
{
  "$description": "translations.json#/div_choice_chips",
  "allOf": [
    {
      "$ref": "div-base.json"
    },
    {
      "properties": {
        "type": {
          "type": "string",
          "enum": ["choice_chips"]
        },
        "selection_mode": {
          "type": "string",
          "enum": ["single", "multi"],
          "default_value": "single",
          "$description": "translations.json#/div_choice_chips_selection_mode"
        },
        "selected_value_variable": {
          "$ref": "div-variable-name.json",
          "$description": "translations.json#/div_choice_chips_selected_value_variable"
        },
        "chip_items": {
          "type": "array",
          "items": {
            "$ref": "div-choice-chips-item.json",
            "$description": "translations.json#/div_choice_chips_item"
          },
          "$description": "translations.json#/div_choice_chips_chip_items"
        },
        "items_variable": {
          "$ref": "div-variable-name.json",
          "$description": "translations.json#/div_choice_chips_items_variable"
        },
        "selection_actions": {
          "type": "array",
          "items": {
            "$ref": "div-action.json"
          },
          "$description": "translations.json#/div_choice_chips_selection_actions"
        },
        "layout_mode": {
          "type": "string",
          "enum": ["wrap", "scroll"],
          "default_value": "wrap",
          "$description": "translations.json#/div_choice_chips_layout_mode"
        },
        "chip_spacing": {
          "$ref": "common.json#/non_negative_integer",
          "default_value": "8",
          "$description": "translations.json#/div_choice_chips_chip_spacing"
        },
        "row_spacing": {
          "$ref": "common.json#/non_negative_integer",
          "default_value": "8",
          "$description": "translations.json#/div_choice_chips_row_spacing"
        },
        "chip_style": {
          "type": "string",
          "enum": ["outlined", "filled", "elevated"],
          "default_value": "outlined",
          "$description": "translations.json#/div_choice_chips_chip_style"
        },
        "corner_radius": {
          "$ref": "common.json#/non_negative_integer",
          "default_value": "16",
          "$description": "translations.json#/div_choice_chips_corner_radius"
        },
        "font_size": {
          "$ref": "common.json#/non_negative_integer",
          "default_value": "14",
          "$description": "translations.json#/div_choice_chips_font_size"
        },
        "font_weight": {
          "$ref": "div-font-weight.json",
          "$description": "translations.json#/div_choice_chips_font_weight"
        },
        "font_family": {
          "type": "string",
          "$description": "translations.json#/div_choice_chips_font_family"
        },
        "selected_background_color": {
          "$ref": "common.json#/color",
          "$description": "translations.json#/div_choice_chips_selected_background_color"
        },
        "selected_text_color": {
          "$ref": "common.json#/color",
          "$description": "translations.json#/div_choice_chips_selected_text_color"
        },
        "selected_border_color": {
          "$ref": "common.json#/color",
          "$description": "translations.json#/div_choice_chips_selected_border_color"
        },
        "default_background_color": {
          "$ref": "common.json#/color",
          "$description": "translations.json#/div_choice_chips_default_background_color"
        },
        "default_text_color": {
          "$ref": "common.json#/color",
          "$description": "translations.json#/div_choice_chips_default_text_color"
        },
        "default_border_color": {
          "$ref": "common.json#/color",
          "$description": "translations.json#/div_choice_chips_default_border_color"
        },
        "disabled_background_color": {
          "$ref": "common.json#/color",
          "$description": "translations.json#/div_choice_chips_disabled_background_color"
        },
        "disabled_text_color": {
          "$ref": "common.json#/color",
          "$description": "translations.json#/div_choice_chips_disabled_text_color"
        },
        "disabled_border_color": {
          "$ref": "common.json#/color",
          "$description": "translations.json#/div_choice_chips_disabled_border_color"
        },
        "show_checkmark": {
          "$ref": "common.json#/boolean_int",
          "default_value": "false",
          "$description": "translations.json#/div_choice_chips_show_checkmark"
        },
        "icon_size": {
          "$ref": "common.json#/non_negative_integer",
          "default_value": "18",
          "$description": "translations.json#/div_choice_chips_icon_size"
        },
        "chip_height": {
          "$ref": "common.json#/non_negative_integer",
          "default_value": "36",
          "$description": "translations.json#/div_choice_chips_chip_height"
        },
        "chip_padding": {
          "$ref": "div-edge-insets.json",
          "$description": "translations.json#/div_choice_chips_chip_padding"
        }
      }
    }
  ],
  "platforms": ["android", "ios", "web"],
  "required": ["type", "selected_value_variable"]
}
```

- [ ] **Step 3: Register widget in div.json**

In `schema/div.json`, add to the `anyOf` array (after the autocomplete entry):

```json
{
  "$ref": "div-choice-chips.json",
  "$description": "translations.json#/div_choice_chips_short"
}
```

- [ ] **Step 4: Add translations**

In `schema/translations.json`, add all translation keys. Use the pattern `div_choice_chips_<property>` for widget properties and `div_choice_chips_item_<property>` for item properties:

```json
"div_choice_chips": {
  "en": "Choice chips widget for selecting one or more options from a set of chips.",
  "ru": "Виджет выбора из набора чипов для выбора одного или нескольких вариантов."
},
"div_choice_chips_short": {
  "en": "Choice chips.",
  "ru": "Чипы выбора."
},
"div_choice_chips_selection_mode": {
  "en": "Selection mode: `single` allows one chip selected at a time, `multi` allows multiple.",
  "ru": "Режим выбора: `single` — один чип, `multi` — несколько."
},
"div_choice_chips_selected_value_variable": {
  "en": "Name of the variable to store selected value(s). String variable for single mode, array variable for multi mode.",
  "ru": "Имя переменной для хранения выбранных значений. Строковая переменная для single, массив для multi."
},
"div_choice_chips_chip_items": {
  "en": "Static array of chip items.",
  "ru": "Статический массив элементов чипов."
},
"div_choice_chips_items_variable": {
  "en": "Name of the array variable containing dynamic chip items.",
  "ru": "Имя переменной массива с динамическими элементами чипов."
},
"div_choice_chips_selection_actions": {
  "en": "Actions fired when the selection changes.",
  "ru": "Действия при изменении выбора."
},
"div_choice_chips_layout_mode": {
  "en": "Layout mode: `wrap` flows chips to next line, `scroll` enables horizontal scrolling.",
  "ru": "Режим размещения: `wrap` — перенос на новую строку, `scroll` — горизонтальная прокрутка."
},
"div_choice_chips_chip_spacing": {
  "en": "Horizontal spacing between chips in dp.",
  "ru": "Горизонтальный отступ между чипами в dp."
},
"div_choice_chips_row_spacing": {
  "en": "Vertical spacing between rows in wrap mode in dp.",
  "ru": "Вертикальный отступ между строками в режиме wrap в dp."
},
"div_choice_chips_chip_style": {
  "en": "Visual theme preset: `outlined`, `filled`, or `elevated`.",
  "ru": "Визуальная тема: `outlined`, `filled` или `elevated`."
},
"div_choice_chips_corner_radius": {
  "en": "Corner radius of each chip in dp.",
  "ru": "Радиус скругления углов каждого чипа в dp."
},
"div_choice_chips_font_size": {
  "en": "Font size of chip text.",
  "ru": "Размер шрифта текста чипа."
},
"div_choice_chips_font_weight": {
  "en": "Font weight of chip text.",
  "ru": "Толщина шрифта текста чипа."
},
"div_choice_chips_font_family": {
  "en": "Font family of chip text.",
  "ru": "Семейство шрифтов текста чипа."
},
"div_choice_chips_selected_background_color": {
  "en": "Background color of selected chips.",
  "ru": "Цвет фона выбранных чипов."
},
"div_choice_chips_selected_text_color": {
  "en": "Text color of selected chips.",
  "ru": "Цвет текста выбранных чипов."
},
"div_choice_chips_selected_border_color": {
  "en": "Border color of selected chips.",
  "ru": "Цвет границы выбранных чипов."
},
"div_choice_chips_default_background_color": {
  "en": "Background color of unselected chips.",
  "ru": "Цвет фона невыбранных чипов."
},
"div_choice_chips_default_text_color": {
  "en": "Text color of unselected chips.",
  "ru": "Цвет текста невыбранных чипов."
},
"div_choice_chips_default_border_color": {
  "en": "Border color of unselected chips.",
  "ru": "Цвет границы невыбранных чипов."
},
"div_choice_chips_disabled_background_color": {
  "en": "Background color of disabled chips.",
  "ru": "Цвет фона отключённых чипов."
},
"div_choice_chips_disabled_text_color": {
  "en": "Text color of disabled chips.",
  "ru": "Цвет текста отключённых чипов."
},
"div_choice_chips_disabled_border_color": {
  "en": "Border color of disabled chips.",
  "ru": "Цвет границы отключённых чипов."
},
"div_choice_chips_show_checkmark": {
  "en": "Whether to show a checkmark icon on selected chips.",
  "ru": "Показывать ли галочку на выбранных чипах."
},
"div_choice_chips_icon_size": {
  "en": "Size of the chip leading icon in dp.",
  "ru": "Размер иконки чипа в dp."
},
"div_choice_chips_chip_height": {
  "en": "Height of each chip in dp.",
  "ru": "Высота каждого чипа в dp."
},
"div_choice_chips_chip_padding": {
  "en": "Internal padding within each chip.",
  "ru": "Внутренние отступы каждого чипа."
},
"div_choice_chips_item": {
  "en": "A single chip item in the choice chips widget.",
  "ru": "Отдельный элемент чипа в виджете выбора."
},
"div_choice_chips_item_value": {
  "en": "Unique identifier for the chip, used as the selection value.",
  "ru": "Уникальный идентификатор чипа, используемый как значение выбора."
},
"div_choice_chips_item_text": {
  "en": "Display label for the chip. Falls back to `value` if not set.",
  "ru": "Текст отображения чипа. Если не задан, используется `value`."
},
"div_choice_chips_item_icon": {
  "en": "Optional leading icon for the chip.",
  "ru": "Необязательная иконка перед текстом чипа."
},
"div_choice_chips_item_is_enabled": {
  "en": "Whether this chip is interactive.",
  "ru": "Является ли этот чип интерактивным."
},
"div_choice_chips_item_is_selected_by_default": {
  "en": "Whether this chip is pre-selected on first render.",
  "ru": "Выбран ли этот чип при первом отображении."
}
```

- [ ] **Step 5: Commit schema changes**

```bash
git add schema/div-choice-chips-item.json schema/div-choice-chips.json schema/div.json schema/translations.json
git commit -m "feat: add choice chips widget schema and translations"
```

---

### Task 2: Web — TypeScript Type Definitions

**Files:**
- Create: `client/web/divkit/src/types/choiceChips.d.ts`

- [ ] **Step 1: Create type definitions**

Create `client/web/divkit/src/types/choiceChips.d.ts`:

```typescript
import type { DivBaseData } from './base';
import type { Action } from './base';
import type { BooleanInt } from './base';
import type { DivImageBackground } from './base';
import type { EdgeInsets } from './base';
import type { FontWeight } from './base';

export interface ChoiceChipsItem {
    value: string;
    text?: string;
    icon?: DivImageBackground;
    is_enabled?: BooleanInt;
    is_selected_by_default?: BooleanInt;
}

export interface DivChoiceChipsData extends DivBaseData {
    type: 'choice_chips';
    selection_mode?: 'single' | 'multi';
    selected_value_variable: string;
    chip_items?: ChoiceChipsItem[];
    items_variable?: string;
    selection_actions?: Action[];
    layout_mode?: 'wrap' | 'scroll';
    chip_spacing?: number;
    row_spacing?: number;
    chip_style?: 'outlined' | 'filled' | 'elevated';
    corner_radius?: number;
    font_size?: number;
    font_weight?: FontWeight;
    font_family?: string;
    selected_background_color?: string;
    selected_text_color?: string;
    selected_border_color?: string;
    default_background_color?: string;
    default_text_color?: string;
    default_border_color?: string;
    disabled_background_color?: string;
    disabled_text_color?: string;
    disabled_border_color?: string;
    show_checkmark?: BooleanInt;
    icon_size?: number;
    chip_height?: number;
    chip_padding?: EdgeInsets;
}
```

- [ ] **Step 2: Commit**

```bash
git add client/web/divkit/src/types/choiceChips.d.ts
git commit -m "feat: add choice chips TypeScript type definitions"
```

---

### Task 3: Web — CSS Module

**Files:**
- Create: `client/web/divkit/src/components/choice-chips/ChoiceChips.module.css`

- [ ] **Step 1: Create CSS module**

Create `client/web/divkit/src/components/choice-chips/ChoiceChips.module.css`:

```css
.choice-chips {
    display: flex;
    pointer-events: auto;
}

.choice-chips_wrap {
    flex-wrap: wrap;
}

.choice-chips_scroll {
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
}

.choice-chips_scroll::-webkit-scrollbar {
    display: none;
}

.chip {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    flex-shrink: 0;
    box-sizing: border-box;
    transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
    pointer-events: auto;
}

.chip_disabled {
    cursor: not-allowed;
    opacity: 0.7;
}

.chip__icon {
    flex-shrink: 0;
    object-fit: contain;
}

.chip__checkmark {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
}

.chip__text {
    overflow: hidden;
    text-overflow: ellipsis;
}
```

- [ ] **Step 2: Commit**

```bash
git add client/web/divkit/src/components/choice-chips/ChoiceChips.module.css
git commit -m "feat: add choice chips CSS module"
```

---

### Task 4: Web — Svelte Component

**Files:**
- Create: `client/web/divkit/src/components/choice-chips/ChoiceChips.svelte`

- [ ] **Step 1: Create the Svelte component**

Create `client/web/divkit/src/components/choice-chips/ChoiceChips.svelte`. The component must:

1. Import `componentContext` from Svelte context using `getContext('componentContext')`
2. Use `getDerivedFromVars()` for all reactive JSON properties
3. Use `correctBooleanInt()` for all BooleanInt properties
4. Resolve items from `items_variable` (array variable) first, fall back to static `chip_items`
5. For single mode: bind to string variable via `getVariable(name, 'string')`, toggle on/off
6. For multi mode: bind to array variable via `getVariable(name, 'array')`, add/remove values
7. Fire `selection_actions` via `componentContext.execAnyActions()` on user tap only
8. Apply theme defaults based on `chip_style` when color props are not explicitly set
9. Support `layout_mode: 'wrap'` (flex-wrap) and `'scroll'` (overflow-x: auto)
10. Render each chip as a `<button>` with dynamic inline styles for colors, border, radius, shadow
11. Show checkmark SVG when `show_checkmark` is enabled and chip is selected
12. Render optional icon via `<img>` tag with `icon_size`
13. Parse items from variable using same `Any?` → parse pattern as autocomplete (handle JSONArray, array, etc.)

Key patterns to follow (from autocomplete):
- `$: varName = componentContext.json.selected_value_variable;`
- `$: variable = varName && (componentContext.getVariable(varName, 'string') || rootCtx.awaitGlobalVariable(varName, 'string', '')) || createVariable('temp', 'string', '');`
- Error checking: if required `selected_value_variable` is missing, log error and render nothing
- Use `genClassName` from utils for BEM class composition
- Use `makeStyle` for inline style objects

For the theme defaults, implement a `getThemeColors(chipStyle, explicitColors)` function that returns the resolved color set based on the theme table in the spec.

For item parsing from variable:
```typescript
function parseItems(raw: any): ParsedChipItem[] {
    if (!Array.isArray(raw)) return [];
    return raw.filter(item => item && typeof item.value === 'string').map(item => ({
        value: item.value,
        text: item.text || item.value,
        icon: item.icon,
        isEnabled: correctBooleanInt(item.is_enabled, true),
        isSelectedByDefault: correctBooleanInt(item.is_selected_by_default, false)
    }));
}
```

For chip click handling:
```typescript
function handleChipClick(chipValue: string) {
    if (selectionMode === 'single') {
        const current = $selectedVariable;
        const newValue = current === chipValue ? '' : chipValue;
        selectedVariable.setValue(newValue);
    } else {
        const current = Array.isArray($selectedVariable) ? [...$selectedVariable] : [];
        const idx = current.indexOf(chipValue);
        if (idx >= 0) {
            current.splice(idx, 1);
        } else {
            current.push(chipValue);
        }
        selectedVariable.setValue(current);
    }
    const actions = componentContext.json.selection_actions;
    if (actions && actions.length) {
        componentContext.execAnyActions(actions);
    }
}
```

Template structure:
```svelte
{#if !hasError}
<Outer {componentContext} cls={genClassName('choice-chips', css, mods)} {style}>
    {#each chipItems as item (item.value)}
        <button
            class={chipClass(item)}
            style={chipStyle(item)}
            disabled={!item.isEnabled}
            on:click={() => item.isEnabled && handleChipClick(item.value)}
        >
            {#if item.icon}
                <img class={css['chip__icon']} src={item.icon.image_url} alt="" style="width:{iconSize}px;height:{iconSize}px;" />
            {/if}
            {#if showCheckmark && isSelected(item.value)}
                <svg class={css['chip__checkmark']} viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
            {/if}
            <span class={css['chip__text']}>{item.text}</span>
        </button>
    {/each}
</Outer>
{/if}
```

- [ ] **Step 2: Commit**

```bash
git add client/web/divkit/src/components/choice-chips/ChoiceChips.svelte
git commit -m "feat: add choice chips Svelte component"
```

---

### Task 5: Web — Component Registration and Build

**Files:**
- Modify: `client/web/divkit/src/components/typeMap.ts`

- [ ] **Step 1: Register component in typeMap**

In `client/web/divkit/src/components/typeMap.ts`, add the import and registration:

```typescript
import ChoiceChips from './choice-chips/ChoiceChips.svelte';
```

And in the `TYPE_MAP` object:

```typescript
choice_chips: ChoiceChips
```

- [ ] **Step 2: Build and verify**

Run from `client/web/divkit/`:

```bash
npm run build:prod
```

Expected: Build succeeds with no errors.

- [ ] **Step 3: Commit**

```bash
git add client/web/divkit/src/components/typeMap.ts
git commit -m "feat: register choice chips in web client typeMap"
```

---

### Task 6: Android — View Widget

**Files:**
- Create: `client/android/div/src/main/java/com/yandex/div/core/view2/divs/widgets/DivChoiceChipsView.kt`

- [ ] **Step 1: Create the view class**

Create `DivChoiceChipsView.kt`. The view must:

1. Extend `FrameLayout` and implement `DivHolderView<Div.ChoiceChips>` via `DivHolderViewMixin()`
2. Contain two layout containers:
   - `wrapLayout: FlexboxLayout` — with `flexWrap = FlexWrap.WRAP`, `flexDirection = FlexDirection.ROW`
   - `scrollLayout: HorizontalScrollView` containing a `LinearLayout` (horizontal orientation)
3. Switch between layouts based on `layoutMode` property
4. Define inner data class `ChipItem(value: String, text: String, iconUrl: String?, isEnabled: Boolean, isSelectedByDefault: Boolean)`
5. Define inner class `ChipView(context: Context)` extending `FrameLayout`:
   - Contains `textView: TextView`, `iconView: ImageView` (optional), `checkmarkView: ImageView` (optional)
   - `GradientDrawable` background for rounded corners, border, and colors
   - `update(selected: Boolean, enabled: Boolean, colors: ChipColors, cornerRadius: Float, chipHeight: Int, chipPadding: EdgeInsets?)` method
6. Public methods:
   - `setLayoutMode(mode: String)` — switches between wrap/scroll container
   - `setChipItems(items: List<ChipItem>)` — rebuilds chip views
   - `setSelectedValues(values: Any?)` — updates selection state (String for single, JSONArray/List for multi)
   - `setSelectionMode(mode: String)` — "single" or "multi"
   - `setChipColors(colors: ChipColors)` — applies theme + override colors
   - `setChipSpacing(spacing: Int)` — gap between chips
   - `setRowSpacing(spacing: Int)` — row gap in wrap mode
   - `setCornerRadius(radius: Int)`
   - `setChipHeight(height: Int)`
   - `setChipPadding(padding: EdgeInsets?)`
   - `setShowCheckmark(show: Boolean)`
   - `setIconSize(size: Int)`
   - `setFontProperties(size: Float, weight: Int, family: String?)`
   - `onChipClickListener: ((String) -> Unit)?` — callback for chip taps
7. Define data class `ChipColors(selectedBg: Int, selectedText: Int, selectedBorder: Int, defaultBg: Int, defaultText: Int, defaultBorder: Int, disabledBg: Int, disabledText: Int, disabledBorder: Int, shadow: Boolean)`

The FlexboxLayout dependency already exists in the project — verify by checking `client/android/div/build.gradle` for `com.google.android.flexbox:flexbox`. If not present, use a manual flow layout implementation with `ViewGroup` that measures and positions children with wrapping, similar to iOS approach.

- [ ] **Step 2: Commit**

```bash
git add client/android/div/src/main/java/com/yandex/div/core/view2/divs/widgets/DivChoiceChipsView.kt
git commit -m "feat: add DivChoiceChipsView for Android"
```

---

### Task 7: Android — Binder

**Files:**
- Create: `client/android/div/src/main/java/com/yandex/div/core/view2/divs/DivChoiceChipsBinder.kt`

- [ ] **Step 1: Create the binder**

Create `DivChoiceChipsBinder.kt`. Must follow the fat binder pattern:

```kotlin
@DivScope
internal class DivChoiceChipsBinder @Inject constructor(
    baseBinder: DivBaseBinder,
    private val typefaceResolver: DivTypefaceResolver,
    private val actionBinder: DivActionBinder,
    private val errorCollectors: ErrorCollectors
) : DivViewBinder<Div.ChoiceChips, DivChoiceChips, DivChoiceChipsView>(baseBinder)
```

Key observation methods (each subscribes to expressions/variables):

1. `observeSelectionMode()` — reads `div.selectionMode` expression, calls `view.setSelectionMode()`
2. `observeSelectedVariable()` — subscribes to the variable named by `div.selectedValueVariable`. For single mode: subscribe as string variable. For multi mode: subscribe as array variable. On variable change, call `view.setSelectedValues()`. On chip click callback, update the variable (toggle in single mode, add/remove in multi mode) and fire `div.selectionActions` via `actionBinder`
3. `observeItems()` — if `div.chipItems` is set, parse static items. Subscribe to `div.itemsVariable` if set (same `parseSuggestions`-style parsing as autocomplete: handle `JSONArray`, `String`, `List<*>` raw values). Call `view.setChipItems()`
4. `observeLayoutMode()` — reads `div.layoutMode` expression, calls `view.setLayoutMode()`
5. `observeChipStyle()` — reads `div.chipStyle` expression, resolves theme defaults, merges with explicit color overrides from div properties, calls `view.setChipColors()`
6. `observeSpacing()` — reads `div.chipSpacing` and `div.rowSpacing`, calls view setters
7. `observeCornerRadius()` — reads `div.cornerRadius`, calls `view.setCornerRadius()`
8. `observeChipHeight()` — reads `div.chipHeight`, calls `view.setChipHeight()`
9. `observeChipPadding()` — reads `div.chipPadding`, calls `view.setChipPadding()`
10. `observeShowCheckmark()` — reads `div.showCheckmark`, calls `view.setShowCheckmark()`
11. `observeIconSize()` — reads `div.iconSize`, calls `view.setIconSize()`
12. `observeFontProperties()` — reads `div.fontSize`, `div.fontWeight`, `div.fontFamily`, calls `view.setFontProperties()`

Theme color resolution (implement as private function):
```kotlin
private fun resolveThemeColors(
    style: DivChoiceChips.ChipStyle,
    div: DivChoiceChips,
    resolver: ExpressionResolver
): DivChoiceChipsView.ChipColors {
    val isOutlined = style == DivChoiceChips.ChipStyle.OUTLINED
    val isFilled = style == DivChoiceChips.ChipStyle.FILLED
    val isElevated = style == DivChoiceChips.ChipStyle.ELEVATED
    return DivChoiceChipsView.ChipColors(
        selectedBg = div.selectedBackgroundColor?.evaluate(resolver)
            ?: if (isOutlined) 0x1F1976D2 else if (isFilled) 0xFF1976D2.toInt() else 0xFFFFFFFF.toInt(),
        selectedText = div.selectedTextColor?.evaluate(resolver)
            ?: if (isOutlined) 0xFF1976D2.toInt() else if (isFilled) 0xFFFFFFFF.toInt() else 0xFF1976D2.toInt(),
        // ... same pattern for all 9 color properties
        shadow = isElevated
    )
}
```

- [ ] **Step 2: Commit**

```bash
git add client/android/div/src/main/java/com/yandex/div/core/view2/divs/DivChoiceChipsBinder.kt
git commit -m "feat: add DivChoiceChipsBinder for Android"
```

---

### Task 8: Android — Registration and Exhaustive When Blocks

**Files:**
- Modify: `client/android/div/src/main/java/com/yandex/div/core/view2/DivBinder.kt`
- Modify: `client/android/div/src/main/java/com/yandex/div/core/view2/DivViewCreator.kt`
- Modify: Multiple files with exhaustive `when` blocks

- [ ] **Step 1: Add binder injection to DivBinder.kt**

In `DivBinder.kt` constructor, add:
```kotlin
private val choiceChipsBinder: DivChoiceChipsBinder
```

Add dispatch case in the `when (div)` block (alongside `is Div.Autocomplete`):
```kotlin
is Div.ChoiceChips -> choiceChipsBinder.bindView(context, view as DivChoiceChipsView, div, path)
```

And in the `setDataWithoutBinding` when block:
```kotlin
is Div.ChoiceChips -> (view as DivChoiceChipsView).setDataWithoutBinding(context, div)
```

- [ ] **Step 2: Register view in DivViewCreator.kt**

Add TAG constant:
```kotlin
const val TAG_CHOICE_CHIPS = "DIV2.CHOICE_CHIPS"
```

Add pool registration:
```kotlin
register(TAG_CHOICE_CHIPS, { DivChoiceChipsView(context) }, 0)
```

Add to `getTag()` when block:
```kotlin
is Div.ChoiceChips -> TAG_CHOICE_CHIPS
```

Add to TAGS array.

- [ ] **Step 3: Fix all exhaustive when blocks**

Add `is Div.ChoiceChips -> ...` case to every exhaustive `when` block in these files. Search for `is Div.Autocomplete` to find each location, and add the ChoiceChips case right after:

1. `DivVisitor.kt` — `visit(div: Div)` when block + `visitChoiceChips` method
2. `DivTreeVisitor.kt` — `visit(div: Div)` when block + `visitChoiceChips` method
3. `DivCollectionExtensions.kt` — `copy()` function when block
4. `ExistingToken.kt` — when block
5. `NewToken.kt` — when block
6. `DivComparator.kt` — when block
7. `DivTreeWalk.kt` — when block
8. `DivRuntimeVisitor.kt` — when block
9. `DivUtil.kt` — three when blocks (lines ~105, ~224, ~254)
10. `DivPathUtils.kt` — when block
11. `DivTooltipController.kt` — when block (return `true` for tooltip support)

For each file, follow the exact same pattern as the `Div.Autocomplete` case — typically returning `Unit`, `null`, an empty list, or forwarding to the inner `value` property.

- [ ] **Step 4: Commit**

```bash
git add client/android/div/src/main/java/com/yandex/div/core/view2/DivBinder.kt \
      client/android/div/src/main/java/com/yandex/div/core/view2/DivViewCreator.kt \
      # ... all modified when-block files
git commit -m "feat: register choice chips in Android DivKit dispatch system"
```

---

### Task 9: iOS — ChoiceChipsBlock

**Files:**
- Create: `client/ios/LayoutKit/LayoutKit/Blocks/ChoiceChipsBlock.swift`

- [ ] **Step 1: Create the block class**

Create `ChoiceChipsBlock.swift` following the `AutocompleteBlock` pattern:

```swift
public final class ChoiceChipsBlock: BlockWithTraits {
  public struct ChipItem: Equatable {
    public let value: String
    public let text: String?
    public let iconUrl: URL?
    public let isEnabled: Bool
    public let isSelectedByDefault: Bool

    public init(
      value: String,
      text: String? = nil,
      iconUrl: URL? = nil,
      isEnabled: Bool = true,
      isSelectedByDefault: Bool = false
    ) { /* assign properties */ }

    public var displayText: String { text ?? value }
  }

  public enum SelectionMode: Equatable {
    case single
    case multi
  }

  public enum LayoutMode: Equatable {
    case wrap
    case scroll
  }

  public enum ChipStyle: Equatable {
    case outlined
    case filled
    case elevated
  }

  public struct ChipColors: Equatable {
    public let selectedBackground: Color
    public let selectedText: Color
    public let selectedBorder: Color
    public let defaultBackground: Color
    public let defaultText: Color
    public let defaultBorder: Color
    public let disabledBackground: Color
    public let disabledText: Color
    public let disabledBorder: Color
    public let hasShadow: Bool
  }

  // Properties
  public let widthTrait: LayoutTrait
  public let heightTrait: LayoutTrait
  public let selectionMode: SelectionMode
  public let layoutMode: LayoutMode
  public let chipStyle: ChipStyle
  public let chipColors: ChipColors
  public let items: [ChipItem]
  public let selectedValues: Binding<String>  // string for single, JSON array string for multi
  public let selectionActions: [UserInterfaceAction]
  public let chipSpacing: CGFloat
  public let rowSpacing: CGFloat
  public let cornerRadius: CGFloat
  public let chipHeight: CGFloat
  public let chipPadding: EdgeInsets?
  public let fontSize: CGFloat
  public let fontWeight: FontWeight
  public let fontFamily: String?
  public let showCheckmark: Bool
  public let iconSize: CGFloat
  public let path: UIElementPath

  // BlockWithTraits conformance
  public var intrinsicContentWidth: CGFloat { /* calculate based on items */ }
  public func intrinsicContentHeight(forWidth width: CGFloat) -> CGFloat { /* calculate rows */ }
  public func equals(_ other: Block) -> Bool { /* compare all properties */ }
  public func getImageHolders() -> [ImageHolder] { [] }
}

extension ChoiceChipsBlock: LayoutCachingDefaultImpl {}
extension ChoiceChipsBlock: ElementStateUpdatingDefaultImpl {}
```

- [ ] **Step 2: Commit**

```bash
git add client/ios/LayoutKit/LayoutKit/Blocks/ChoiceChipsBlock.swift
git commit -m "feat: add ChoiceChipsBlock for iOS"
```

---

### Task 10: iOS — UIViewRenderableBlock

**Files:**
- Create: `client/ios/LayoutKit/LayoutKit/UI/Blocks/ChoiceChipsBlock+UIViewRenderableBlock.swift`

- [ ] **Step 1: Create the renderable block extension**

Create `ChoiceChipsBlock+UIViewRenderableBlock.swift`:

```swift
#if os(iOS)
import UIKit
import VGSL

extension ChoiceChipsBlock {
  public static func makeBlockView() -> BlockView {
    ChoiceChipsBlockView()
  }

  public func configureBlockView(
    _ view: BlockView,
    observer: ElementStateObserver?,
    overscrollDelegate _: ScrollDelegate?,
    renderingDelegate _: RenderingDelegate?
  ) {
    let chipsView = view as! ChoiceChipsBlockView
    chipsView.setSelectionMode(selectionMode)
    chipsView.setLayoutMode(layoutMode)
    chipsView.setChipStyle(chipStyle)
    chipsView.setChipColors(chipColors)
    chipsView.setItems(items)
    chipsView.setSelectedValues(selectedValues)
    chipsView.setSelectionActions(selectionActions)
    chipsView.setChipSpacing(chipSpacing)
    chipsView.setRowSpacing(rowSpacing)
    chipsView.setCornerRadius(cornerRadius)
    chipsView.setChipHeight(chipHeight)
    chipsView.setChipPadding(chipPadding)
    chipsView.setFontSize(fontSize)
    chipsView.setFontWeight(fontWeight)
    chipsView.setFontFamily(fontFamily)
    chipsView.setShowCheckmark(showCheckmark)
    chipsView.setIconSize(iconSize)
    chipsView.setPath(path)
    chipsView.setObserver(observer)
  }

  public func canConfigureBlockView(_ view: BlockView) -> Bool {
    view is ChoiceChipsBlockView
  }
}
```

The private `ChoiceChipsBlockView` class:
- Extends `BlockView, VisibleBoundsTrackingLeaf`
- Contains a `UIScrollView` (for scroll mode) and direct subview management (for wrap mode)
- Creates `ChipUIView` instances for each chip item
- `ChipUIView` is a `UIView` subclass with:
  - `UILabel` for text
  - Optional `UIImageView` for icon
  - Optional `UIImageView` for checkmark (system checkmark or custom path)
  - `CALayer` configuration for rounded corners, border color/width, shadow
  - `updateAppearance(selected:enabled:colors:cornerRadius:)` method
- `layoutSubviews()` implements two layout strategies:
  - **Wrap mode:** Flow layout — iterate chips, place left-to-right, when `x + chipWidth > bounds.width`, move to next row at `y += chipHeight + rowSpacing`, reset `x = 0`
  - **Scroll mode:** Place all chips in a single row, set `scrollView.contentSize.width` to total width
- Tap handling via `UITapGestureRecognizer` on each chip:
  - Single mode: if tapped chip is already selected, deselect (set variable to ""); otherwise select it
  - Multi mode: toggle the tapped chip value in/out of the array variable
  - Fire `selectionActions.perform(sendingFrom: self)`

- [ ] **Step 2: Commit**

```bash
git add client/ios/LayoutKit/LayoutKit/UI/Blocks/ChoiceChipsBlock+UIViewRenderableBlock.swift
git commit -m "feat: add ChoiceChipsBlock UIView rendering for iOS"
```

---

### Task 11: iOS — DivBlockModeling Extension and Switch Exhaustiveness

**Files:**
- Create: `client/ios/DivKit/Extensions/DivChoiceChipsExtensions.swift`
- Modify: Multiple files with exhaustive switch cases

- [ ] **Step 1: Create DivBlockModeling extension**

Create `DivChoiceChipsExtensions.swift`:

```swift
import LayoutKit
import VGSL

extension DivChoiceChips: DivBlockModeling {
  public func makeBlock(context: DivBlockModelingContext) throws -> Block {
    let modifiedContext = context.modifiedContextParentPath(id)

    // Resolve items from items_variable or static items
    let chipItems = resolveItems(context: modifiedContext)

    // Resolve selection mode
    let selectionMode: ChoiceChipsBlock.SelectionMode = {
      switch resolveSelectionMode(modifiedContext.expressionResolver) {
      case .single: return .single
      case .multi: return .multi
      }
    }()

    // Resolve layout mode
    let layoutMode: ChoiceChipsBlock.LayoutMode = {
      switch resolveLayoutMode(modifiedContext.expressionResolver) {
      case .wrap: return .wrap
      case .scroll: return .scroll
      }
    }()

    // Resolve chip style and colors
    let chipStyle: ChoiceChipsBlock.ChipStyle = {
      switch resolveChipStyle(modifiedContext.expressionResolver) {
      case .outlined: return .outlined
      case .filled: return .filled
      case .elevated: return .elevated
      }
    }()

    let chipColors = resolveChipColors(
      style: chipStyle,
      resolver: modifiedContext.expressionResolver
    )

    // Build block with all resolved properties
    return ChoiceChipsBlock(
      widthTrait: resolveWidthTrait(modifiedContext),
      heightTrait: resolveHeightTrait(modifiedContext),
      selectionMode: selectionMode,
      layoutMode: layoutMode,
      chipStyle: chipStyle,
      chipColors: chipColors,
      items: chipItems,
      selectedValues: /* resolve binding from selected_value_variable */,
      selectionActions: resolveSelectionActions(context: modifiedContext),
      chipSpacing: CGFloat(resolveChipSpacing(modifiedContext.expressionResolver)),
      rowSpacing: CGFloat(resolveRowSpacing(modifiedContext.expressionResolver)),
      cornerRadius: CGFloat(resolveCornerRadius(modifiedContext.expressionResolver)),
      chipHeight: CGFloat(resolveChipHeight(modifiedContext.expressionResolver)),
      chipPadding: resolveChipPadding(modifiedContext.expressionResolver),
      fontSize: CGFloat(resolveFontSize(modifiedContext.expressionResolver)),
      fontWeight: resolveFontWeight(modifiedContext.expressionResolver),
      fontFamily: resolveFontFamily(modifiedContext.expressionResolver),
      showCheckmark: resolveShowCheckmark(modifiedContext.expressionResolver),
      iconSize: CGFloat(resolveIconSize(modifiedContext.expressionResolver)),
      path: modifiedContext.parentPath
    )
  }

  private func resolveItems(context: DivBlockModelingContext) -> [ChoiceChipsBlock.ChipItem] {
    // Try items_variable first
    if let itemsVarName = itemsVariable,
       let variable = context.variablesStorage.getVariable(name: itemsVarName) {
      // Parse array variable items
      return parseItemsFromVariable(variable)
    }
    // Fall back to static items
    return (chipItems ?? []).map { item in
      ChoiceChipsBlock.ChipItem(
        value: item.value,
        text: item.text,
        iconUrl: item.icon?.imageUrl,
        isEnabled: item.resolveIsEnabled(context.expressionResolver),
        isSelectedByDefault: item.resolveIsSelectedByDefault(context.expressionResolver)
      )
    }
  }

  private func resolveChipColors(
    style: ChoiceChipsBlock.ChipStyle,
    resolver: ExpressionResolver
  ) -> ChoiceChipsBlock.ChipColors {
    // Apply theme defaults with explicit overrides
    let isOutlined = style == .outlined
    let isFilled = style == .filled

    return ChoiceChipsBlock.ChipColors(
      selectedBackground: resolveSelectedBackgroundColor(resolver)
        ?? (isOutlined ? Color(0x1F1976D2) : isFilled ? Color(0xFF1976D2) : Color(0xFFFFFFFF)),
      selectedText: resolveSelectedTextColor(resolver)
        ?? (isOutlined ? Color(0xFF1976D2) : isFilled ? Color(0xFFFFFFFF) : Color(0xFF1976D2)),
      selectedBorder: resolveSelectedBorderColor(resolver)
        ?? (isOutlined ? Color(0xFF1976D2) : Color(0x00000000)),
      defaultBackground: resolveDefaultBackgroundColor(resolver)
        ?? (isOutlined ? Color(0x00000000) : isFilled ? Color(0x1F000000) : Color(0xFFFFFFFF)),
      defaultText: resolveDefaultTextColor(resolver) ?? Color(0xFF000000),
      defaultBorder: resolveDefaultBorderColor(resolver)
        ?? (isOutlined ? Color(0xFF757575) : Color(0x00000000)),
      disabledBackground: resolveDisabledBackgroundColor(resolver)
        ?? (isOutlined ? Color(0x00000000) : isFilled ? Color(0x0A000000) : Color(0xFFF5F5F5)),
      disabledText: resolveDisabledTextColor(resolver) ?? Color(0xFFBDBDBD),
      disabledBorder: resolveDisabledBorderColor(resolver)
        ?? (isOutlined ? Color(0xFFE0E0E0) : Color(0x00000000)),
      hasShadow: style == .elevated
    )
  }
}
```

- [ ] **Step 2: Fix exhaustive switch statements**

Add `.divChoiceChips` case to all exhaustive switch statements. Search for `.divAutocomplete` in these files and add the ChoiceChips case right after:

1. `client/ios/DivKit/Extensions/DivExtensions.swift` — `children` property switch
2. `client/ios/DivKit/ResourcesPreloader/ResourceDivExtensions.swift` — two switches
3. `client/ios/DivKitExtensions/DivExtensions.swift` — `makeImageURLs` switch
4. `client/ios/DivKit/Extensions/DivData/DivDataPatchExtensions.swift` — `applyPatchToChildren` switch
5. `client/ios/DivKit/Extensions/DivContainer/DivContainer+Accessibility.swift` — `resolveDescription` switch
6. `client/ios/DivKit/generated_sources/Div.swift` — `.value` and `.id` switches

For each, follow the same pattern as `.divAutocomplete` — typically returning `nil`, `[]`, or forwarding to `.value`.

- [ ] **Step 3: Commit**

```bash
git add client/ios/DivKit/Extensions/DivChoiceChipsExtensions.swift \
      # ... all modified switch files
git commit -m "feat: add choice chips iOS DivBlockModeling and switch exhaustiveness"
```

---

### Task 12: Visual Editor Integration

**Files:**
- Modify: `visual-editor/src/lib/data/componentProps.ts`
- Modify: `visual-editor/src/lib/utils/componentIcon.ts`
- Modify: `visual-editor/src/auto/lang.json`

- [ ] **Step 1: Register in supportedComponents and add property panel**

In `componentProps.ts`, add `'choice_chips'` to the `supportedComponents` Set.

Add property definitions to `COMPONENT_PROPS`:

```typescript
choice_chips: [...BASE_COMPONENT_PROPS, {
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
    title: 'choiceChipsProps.title',
    list: [{
        type: 'select',
        prop: 'selection_mode',
        name: 'choiceChipsProps.selection_mode',
        options: [
            { name: 'choiceChipsProps.selection_mode_single', value: 'single' },
            { name: 'choiceChipsProps.selection_mode_multi', value: 'multi' }
        ]
    }, {
        type: 'variable-name',
        prop: 'selected_value_variable',
        name: 'choiceChipsProps.selected_value_variable',
        required: true,
        enableSources: true
    }, {
        type: 'variable-name',
        prop: 'items_variable',
        name: 'choiceChipsProps.items_variable',
        enableSources: true
    }, {
        type: 'select',
        prop: 'layout_mode',
        name: 'choiceChipsProps.layout_mode',
        options: [
            { name: 'choiceChipsProps.layout_mode_wrap', value: 'wrap' },
            { name: 'choiceChipsProps.layout_mode_scroll', value: 'scroll' }
        ]
    }, {
        type: 'select',
        prop: 'chip_style',
        name: 'choiceChipsProps.chip_style',
        options: [
            { name: 'choiceChipsProps.chip_style_outlined', value: 'outlined' },
            { name: 'choiceChipsProps.chip_style_filled', value: 'filled' },
            { name: 'choiceChipsProps.chip_style_elevated', value: 'elevated' }
        ]
    }, {
        type: 'split',
        list: [{
            type: 'integer',
            prop: 'chip_spacing',
            name: 'choiceChipsProps.chip_spacing',
            min: 0,
            max: 100,
            enableSources: true
        }, {
            type: 'integer',
            prop: 'row_spacing',
            name: 'choiceChipsProps.row_spacing',
            min: 0,
            max: 100,
            enableSources: true
        }]
    }, {
        type: 'split',
        list: [{
            type: 'integer',
            prop: 'font_size',
            name: 'props.font_size',
            min: 1,
            max: 1000,
            enableSources: true
        }, {
            type: 'integer',
            prop: 'corner_radius',
            name: 'choiceChipsProps.corner_radius',
            min: 0,
            max: 100,
            enableSources: true
        }]
    }, {
        type: 'split',
        list: [{
            type: 'integer',
            prop: 'chip_height',
            name: 'choiceChipsProps.chip_height',
            min: 16,
            max: 200,
            enableSources: true
        }, {
            type: 'integer',
            prop: 'icon_size',
            name: 'choiceChipsProps.icon_size',
            min: 8,
            max: 100,
            enableSources: true
        }]
    }, {
        type: 'color',
        prop: 'selected_background_color',
        name: 'choiceChipsProps.selected_background_color',
        enableSources: true
    }, {
        type: 'color',
        prop: 'selected_text_color',
        name: 'choiceChipsProps.selected_text_color',
        enableSources: true
    }, {
        type: 'color',
        prop: 'default_background_color',
        name: 'choiceChipsProps.default_background_color',
        enableSources: true
    }, {
        type: 'color',
        prop: 'default_text_color',
        name: 'choiceChipsProps.default_text_color',
        enableSources: true
    }]
}]
```

- [ ] **Step 2: Add icon mapping**

In `componentIcon.ts`, import and register:

```typescript
import choiceChipsIcon from '../../assets/components/radio.svg?url';
```

Add to MAP:
```typescript
choice_chips: choiceChipsIcon
```

(Reusing radio.svg as it represents selection from options — closest existing icon.)

- [ ] **Step 3: Add translations**

In `visual-editor/src/auto/lang.json`, add to the `ru` section:

```json
"components.choice_chips": "Чипы выбора",
"choiceChipsProps.title": "Свойства чипов выбора",
"choiceChipsProps.selection_mode": "Режим выбора",
"choiceChipsProps.selection_mode_single": "Одиночный",
"choiceChipsProps.selection_mode_multi": "Множественный",
"choiceChipsProps.selected_value_variable": "Переменная выбранного значения",
"choiceChipsProps.items_variable": "Переменная элементов",
"choiceChipsProps.layout_mode": "Режим размещения",
"choiceChipsProps.layout_mode_wrap": "Перенос",
"choiceChipsProps.layout_mode_scroll": "Прокрутка",
"choiceChipsProps.chip_style": "Стиль чипов",
"choiceChipsProps.chip_style_outlined": "Контурный",
"choiceChipsProps.chip_style_filled": "Заполненный",
"choiceChipsProps.chip_style_elevated": "Приподнятый",
"choiceChipsProps.chip_spacing": "Отступ между чипами",
"choiceChipsProps.row_spacing": "Отступ между строками",
"choiceChipsProps.corner_radius": "Радиус скругления",
"choiceChipsProps.chip_height": "Высота чипа",
"choiceChipsProps.icon_size": "Размер иконки",
"choiceChipsProps.selected_background_color": "Фон выбранного",
"choiceChipsProps.selected_text_color": "Текст выбранного",
"choiceChipsProps.default_background_color": "Фон по умолчанию",
"choiceChipsProps.default_text_color": "Текст по умолчанию"
```

Add to the `en` section:

```json
"components.choice_chips": "Choice Chips",
"choiceChipsProps.title": "Choice Chips properties",
"choiceChipsProps.selection_mode": "Selection mode",
"choiceChipsProps.selection_mode_single": "Single",
"choiceChipsProps.selection_mode_multi": "Multi",
"choiceChipsProps.selected_value_variable": "Selected value variable",
"choiceChipsProps.items_variable": "Items variable",
"choiceChipsProps.layout_mode": "Layout mode",
"choiceChipsProps.layout_mode_wrap": "Wrap",
"choiceChipsProps.layout_mode_scroll": "Scroll",
"choiceChipsProps.chip_style": "Chip style",
"choiceChipsProps.chip_style_outlined": "Outlined",
"choiceChipsProps.chip_style_filled": "Filled",
"choiceChipsProps.chip_style_elevated": "Elevated",
"choiceChipsProps.chip_spacing": "Chip spacing",
"choiceChipsProps.row_spacing": "Row spacing",
"choiceChipsProps.corner_radius": "Corner radius",
"choiceChipsProps.chip_height": "Chip height",
"choiceChipsProps.icon_size": "Icon size",
"choiceChipsProps.selected_background_color": "Selected background",
"choiceChipsProps.selected_text_color": "Selected text color",
"choiceChipsProps.default_background_color": "Default background",
"choiceChipsProps.default_text_color": "Default text color"
```

- [ ] **Step 4: Commit**

```bash
git add visual-editor/src/lib/data/componentProps.ts \
      visual-editor/src/lib/utils/componentIcon.ts \
      visual-editor/src/auto/lang.json
git commit -m "feat: add choice chips to visual editor with property panel and translations"
```

---

### Task 13: Test Data — Sample JSON Files

**Files:**
- Create: `test_data/samples/choice_chips/choice_chips_basic.json`
- Create: `test_data/samples/choice_chips/choice_chips_all_variations.json`

- [ ] **Step 1: Create basic demo JSON**

Create `test_data/samples/choice_chips/choice_chips_basic.json` with a single-selection category filter example using outlined style and static items. Include the `variables` section with a string variable `selected_category` and 4-5 category chips.

- [ ] **Step 2: Create all variations JSON**

Create `test_data/samples/choice_chips/choice_chips_all_variations.json` with a vertical container holding 8+ variations:

1. **Basic single selection** — outlined style, static items, string variable
2. **Multi selection with checkmarks** — filled style, show_checkmark: 1, array variable
3. **Horizontal scroll** — elevated style, layout_mode: scroll, 8+ items to force scrolling
4. **Custom colors** — outlined base with explicit selected_background_color, selected_text_color overrides (purple theme)
5. **With icons** — chips with icon URLs (use placeholder image URLs)
6. **Disabled chips** — mix of enabled and disabled items via is_enabled: 0
7. **High threshold** — min items with is_selected_by_default: 1 for pre-selection
8. **Dark theme** — filled style with dark background colors, light text
9. **Dynamic items** — items_variable binding to an array variable
10. **Large chips** — chip_height: 48, font_size: 18, corner_radius: 24

Each variation should have its own variables and be visually labeled with a `div-text` title above it.

- [ ] **Step 3: Commit**

```bash
git add test_data/samples/choice_chips/
git commit -m "feat: add choice chips test data with basic and all-variations samples"
```
