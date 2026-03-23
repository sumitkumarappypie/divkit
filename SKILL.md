---
name: generate-widget
description: |
  Generate a new first-class DivKit widget type across all platforms.
  Sub-commands:
    /generate-widget              - Full workflow (all platforms)
    /generate-widget:schema       - Schema + translations only
    /generate-widget:web          - Web client + visual editor only
    /generate-widget:ios          - iOS client only
    /generate-widget:android      - Android client only
---

# DivKit Widget Generator

Generates all files needed for a new first-class DivKit widget across schema, web, iOS, Android, and visual editor.

## Step 0: Gather Input

Ask the user for these 4 parameters using AskUserQuestion:

| Parameter | Description | Example |
|-----------|-------------|---------|
| **widgetName** | Lowercase hyphenated name | `rating`, `date-picker`, `chip` |
| **category** | Widget category (see below) | `form-boolean` |
| **properties** | Custom properties list | `[{name: "max_stars", type: "integer", required: false, default: 5}]` |
| **similarWidget** | Existing widget to pattern from | `checkbox`, `radio`, `progress`, `switch`, `select`, `slider` |

### Categories

| Category | Description | Reference widget | Variable binding | ARIA role |
|----------|-------------|-----------------|-----------------|-----------|
| `form-boolean` | Toggle true/false | checkbox, switch | `TwoWayBooleanVariableBinder` | checkbox/switch |
| `form-string` | Binds to string variable | input, select | `TwoWayStringVariableBinder` | textbox/listbox |
| `form-options` | Selects from list of options | radio, select | `TwoWayStringVariableBinder` | radiogroup |
| `display-only` | No variable binding | progress, separator | none | progressbar/img |

### Naming Conventions

Derive all names from `widgetName`:

| Format | Example (`date-picker`) | Used in |
|--------|------------------------|---------|
| `kebab-case` | `date-picker` | schema filename, CSS, web component folder |
| `snake_case` | `date_picker` | JSON type field, schema properties, translations key |
| `PascalCase` | `DatePicker` | Svelte component, Swift type, Kotlin class |
| `camelCase` | `datePicker` | TypeScript interface field, Kotlin field |
| `UPPER_SNAKE` | `DATE_PICKER` | Android TAG constant |

---

## Step 1: Schema File

Create `schema/div-{kebab-case}.json`.

### Template: form-boolean (like checkbox)

```json
{
  "$description": "translations.json#/div_{snake_case}",
  "allOf": [
    {
      "$ref": "div-base.json"
    },
    {
      "properties": {
        "type": {
          "type": "string",
          "enum": ["{snake_case}"]
        },
        "{variable_property_name}": {
          "$ref": "div-variable-name.json",
          "$description": "translations.json#/div_{snake_case}_{variable_property_name}"
        },
        "is_enabled": {
          "$ref": "common.json#/boolean_int",
          "default_value": "true",
          "$description": "translations.json#/div_{snake_case}_is_enabled"
        }
      }
    }
  ],
  "platforms": ["android", "ios", "web"],
  "required": ["type", "{variable_property_name}"]
}
```

### Template: form-options (like radio)

```json
{
  "$description": "translations.json#/div_{snake_case}",
  "definitions": {
    "option": {
      "type": "object",
      "properties": {
        "text": {
          "type": "string",
          "$description": "translations.json#/div_{snake_case}_option_text"
        },
        "value": {
          "type": "string",
          "$description": "translations.json#/div_{snake_case}_option_value"
        }
      },
      "required": ["value"]
    }
  },
  "allOf": [
    {
      "$ref": "div-base.json"
    },
    {
      "properties": {
        "type": {
          "type": "string",
          "enum": ["{snake_case}"]
        },
        "options": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/option",
            "$description": "translations.json#/div_{snake_case}_option"
          },
          "minItems": 1
        },
        "value_variable": {
          "$ref": "div-variable-name.json",
          "$description": "translations.json#/div_{snake_case}_value_variable"
        },
        "is_enabled": {
          "$ref": "common.json#/boolean_int",
          "default_value": "true",
          "$description": "translations.json#/div_{snake_case}_is_enabled"
        }
      }
    }
  ],
  "platforms": ["android", "ios", "web"],
  "required": ["type", "options", "value_variable"]
}
```

### Template: display-only (like progress)

```json
{
  "$description": "translations.json#/div_{snake_case}",
  "allOf": [
    {
      "$ref": "div-base.json"
    },
    {
      "properties": {
        "type": {
          "type": "string",
          "enum": ["{snake_case}"]
        }
      }
    }
  ],
  "platforms": ["android", "ios", "web"],
  "required": ["type"]
}
```

Add each custom property inside the second `allOf` entry's `properties` using this type mapping:

| Property type | Schema `$ref` or `type` | Notes |
|---------------|------------------------|-------|
| `color` | `"$ref": "common.json#/color"` | Use 6-char hex `#RRGGBB` or 8-char `#AARRGGBB` for `default_value` |
| `boolean` | `"$ref": "common.json#/boolean_int"` | Use `default_value: "true"` or `"false"` (string, not bool) |
| `integer` | `"$ref": "common.json#/non_negative_integer"` | Add `"constraint"` if bounded |
| `number` | `"type": "number"` | Add `"constraint"` for range |
| `string` | `"type": "string"` | Add `"enum"` for fixed values |
| `enum` | `"type": "string", "enum": [...]` | Include `default_value` |
| `variable-name` | `"$ref": "div-variable-name.json"` | For variable binding |
| `font-weight` | `"$ref": "div-font-weight.json"` | Standard DivKit font weights |

Each property needs `"$description": "translations.json#/div_{snake_case}_{property_name}"`.

---

## Step 2: Schema Registry + Translations

### 2a. Edit `schema/div.json`

Add to the `anyOf` array (alphabetical among recent additions):

```json
{
  "$ref": "div-{kebab-case}.json",
  "$description": "translations.json#/div_{snake_case}"
}
```

### 2b. Edit `schema/translations.json`

Add entries for the widget and each property. Every entry needs `"en"` and `"ru"` keys.

For Russian translations, generate best-effort text. Mark uncertain translations with `[REVIEW]` suffix.

Pattern for translation keys:
- `div_{snake_case}` — Widget description
- `div_{snake_case}_{property}` — Property description
- `div_{snake_case}_short` — Short one-line description (optional, for div.json `$description`)

Reference: `schema/translations.json` — see checkbox/radio/progress entries for patterns.

---

## Step 3: Web Client (sub-command: `/generate-widget:web`)

### 3a. Type Definition

Create `client/web/divkit/src/types/{kebab-case}.d.ts`:

```typescript
import type { BooleanInt } from '../../typings/common';
import type { DivBaseData } from './base';

export interface Div{PascalCase}Data extends DivBaseData {
    type: '{snake_case}';

    // Add each property with its TypeScript type:
    // variable-name → string
    // color → string (optional)
    // boolean → BooleanInt (optional)
    // integer → number (optional)
    // number → number (optional)
    // string → string (optional)
    // enum → string literal union (optional)
}
```

Type mapping to TypeScript:

| Schema type | TypeScript type | Import needed |
|-------------|----------------|---------------|
| `common.json#/color` | `string` | none |
| `common.json#/boolean_int` | `BooleanInt` | `import { BooleanInt } from '../../typings/common'` |
| `common.json#/non_negative_integer` | `number` | none |
| `number` | `number` | none |
| `string` | `string` | none |
| `div-variable-name.json` | `string` | none |
| `enum` | `'val1' \| 'val2'` | none |

### 3b. Svelte Component

Create `client/web/divkit/src/components/{kebab-case}/{PascalCase}.svelte`.

Follow the pattern from the `similarWidget`:
- **form-boolean**: Pattern from `checkbox/Checkbox.svelte` — variable binding via `createVariable`, `getDerivedFromVars`, `correctBooleanInt`
- **form-options**: Pattern from `radio/Radio.svelte` — options iteration, `createVariable` for string
- **display-only**: Pattern from `progress/Progress.svelte` — reactive `getDerivedFromVars` only

#### Critical: Svelte Reactive State Pattern (rebind)

All widgets MUST use this exact reactive pattern to avoid state invalidation bugs when sibling components are added/removed. This matches existing widgets (Switch, Slider, Input, Select):

```svelte
<script lang="ts">
    // 1. Declare mutable state with defaults
    let myColor = '#129386';
    let myStyle: 'a' | 'b' = 'a';

    // 2. Track origJson for rebinding on component re-creation
    $: origJson = componentContext.origJson;

    // 3. rebind() resets ALL mutable state to defaults
    function rebind(): void {
        myColor = '#129386';
        myStyle = 'a';
    }

    // 4. Call rebind when origJson changes (component re-created)
    $: if (origJson) {
        rebind();
    }

    // 5. Create derived stores from JSON properties
    $: jsonMyColor = componentContext.getDerivedFromVars(componentContext.json.my_color);
    $: jsonMyStyle = componentContext.getDerivedFromVars(componentContext.json.style);

    // 6. Reactive blocks that restore values from JSON AFTER rebind.
    //    CRITICAL: Do NOT add `origJson;` as a dependency in these blocks.
    //    Use the current variable as fallback (NOT hardcoded defaults).
    $: {
        myColor = correctColor($jsonMyColor, 1, myColor);
    }
    $: {
        myStyle = ($jsonMyStyle === 'a' || $jsonMyStyle === 'b') ? $jsonMyStyle : myStyle;
    }
</script>
```

**Why this matters**: When a sibling component is added/removed, the tree updates and DivKit re-renders all components with new `componentContext` objects. The `rebind()` resets state to defaults, then the reactive blocks immediately restore values from the JSON (which contains the user's saved property values). Without this pattern, property changes (e.g., changing style from "linear" to "circular") get lost when siblings are modified.

#### Reactive Value Update Patterns

Use these patterns for different property types in reactive blocks:

```svelte
// Color: use correctColor(value, alphaMultiplier, fallback)
$: { myColor = correctColor($jsonMyColor, 1, myColor); }

// BooleanInt: use correctBooleanInt(value, fallback)
$: { isEnabled = correctBooleanInt($jsonIsEnabled, isEnabled); }

// Enum: ternary with valid values, fallback to current value
$: { myStyle = ($jsonStyle === 'a' || $jsonStyle === 'b') ? $jsonStyle : myStyle; }

// Number with validation: typeof check + range, fallback to current value
$: { trackThickness = (typeof $jsonTrackThickness === 'number' && $jsonTrackThickness >= 0) ? $jsonTrackThickness : trackThickness; }

// Font weight: use correctFontWeight(value, default, fallback)
$: { fontWeight = correctFontWeight($jsonFontWeight, undefined, fontWeight); }
```

#### Variable Binding Pattern (form widgets)

Form widgets that bind to a DivKit variable must follow this lookup chain:

```svelte
// 1. Get variable name from JSON
$: variable = componentContext.json.{variable_property_name};

// 2. Variable lookup chain: local scope → global scope → temp fallback
$: valueVariable = variable
    && (componentContext.getVariable(variable, '{type}')
        || rootCtx.awaitGlobalVariable(variable, '{type}', {defaultValue}))
    || createVariable('temp', '{type}', {defaultValue});

// 3. Read value reactively
$: if (booleanInt(value) !== booleanInt($valueVariable)) {
    value = booleanInt($valueVariable);  // boolean
}
// OR for strings:
// The $valueVariable store auto-updates

// 4. Write value on user interaction
function onInput(newValue): void {
    valueVariable.setValue(newValue);
}
```

Where `{type}` is `'boolean'` or `'string'` and `{defaultValue}` is `false` or `''`.

#### Error Handling Pattern (form widgets)

Form widgets must validate required variables and context:

```svelte
$: {
    let newHasError = false;

    if (!variable) {
        newHasError = true;
        componentContext.logError(wrapError(new Error('Missing "{variable_property_name}" in "{snake_case}"')));
    } else if (actionCtx.hasAction() || $jsonAccessibility?.mode === 'exclude') {
        newHasError = true;
        componentContext.logError(wrapError(new Error('Cannot show "{snake_case}" inside component with an action or inside accessibility mode=exclude')));
    }

    if (hasError !== newHasError) {
        hasError = newHasError;
    }
}
```

#### Focusable Registration Pattern (form widgets)

Form widgets with interactive inputs must register/unregister as focusable:

```svelte
$: if (inputElement && componentContext.json) {
    if (prevId) {
        rootCtx.unregisterFocusable(prevId);
        prevId = undefined;
    }

    if (componentContext.id && !componentContext.fakeElement) {
        prevId = componentContext.id;
        rootCtx.registerFocusable(prevId, {
            focus() {
                if (inputElement) {
                    inputElement.focus();
                }
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
```

Key imports used across all types:
```svelte
<script lang="ts">
    import { getContext, onDestroy } from 'svelte';
    import css from './{PascalCase}.module.css';
    import type { LayoutParams } from '../../types/layoutParams';
    import type { Div{PascalCase}Data } from '../../types/{kebab-case}';
    import type { ComponentContext } from '../../types/componentContext';
    import { ROOT_CTX, type RootCtxValue } from '../../context/root';
    import { genClassName } from '../../utils/genClassName';
    import { wrapError } from '../../utils/wrapError';
    import Outer from '../utilities/Outer.svelte';
    import DevtoolHolder from '../utilities/DevtoolHolder.svelte';
    // For form widgets also import:
    import { ACTION_CTX, type ActionCtxValue } from '../../context/action';
    import { correctColor } from '../../utils/correctColor';
    import { correctBooleanInt } from '../../utils/correctBooleanInt';
    // For boolean variable binding:
    import { createVariable } from '../../expressions/variable';
    import { booleanInt } from '../../utils/booleanInt';
    // For accessibility:
    import { composeAccessibilityDescription } from '../../utils/composeAccessibilityDescription';
    // For size conversions:
    import { pxToEm } from '../../utils/pxToEm';
    // For font weight:
    import { correctFontWeight } from '../../utils/correctFontWeight';
</script>
```

Component structure:

**Form widgets** (checkbox, radio) — use `{#if !hasError}`:
```svelte
{#if !hasError}
    <Outer
        let:focusHandler
        let:blurHandler
        let:hasCustomFocus
        cls={genClassName('{snake_case}', css, mods)}
        style={stl}
        customDescription={true}
        customActions={'{snake_case}'}
        hasInnerFocusable={true}
        {componentContext}
        {layoutParams}
    >
        <!-- Widget HTML here -->
    </Outer>
{:else if process.env.DEVTOOL}
    <DevtoolHolder {componentContext} />
{/if}
```

**Display-only widgets** (progress) — use `{#if true}`:
```svelte
{#if true}
    <Outer
        cls={genClassName('{snake_case}', css, {})}
        style={stl}
        {componentContext}
        {layoutParams}
    >
        <!-- Widget HTML here -->
    </Outer>
{:else if process.env.DEVTOOL}
    <DevtoolHolder {componentContext} />
{/if}
```

### 3c. CSS Module

Create `client/web/divkit/src/components/{kebab-case}/{PascalCase}.module.css`.

Pattern from the similar widget. Use CSS custom properties `--divkit-{kebab-case}-{property}` for color customization.

### 3d. Register in typeMap

Edit `client/web/divkit/src/components/typeMap.ts`:

1. Add import: `import {PascalCase} from './{kebab-case}/{PascalCase}.svelte';`
2. Add to `TYPE_MAP`: `{snake_case}: {PascalCase},`

---

## Step 4: Visual Editor (included in `/generate-widget:web`)

### 4a. SVG Icon

Create `visual-editor/src/assets/components/{kebab-case}.svg`:

Generate a simple 40x40 SVG matching the white-stroke icon style:
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
  <!-- Widget-specific paths using stroke="#fff" stroke-width="2" -->
</svg>
```

Reference existing icons for style: `checkbox.svg`, `radio.svg`, `progress.svg`.

### 4b. Icon Registry

Edit `visual-editor/src/lib/utils/componentIcon.ts`:

1. Add import: `import {camelCase}Icon from '../../assets/components/{kebab-case}.svg?url';`
2. Add to `MAP`: `{snake_case}: {camelCase}Icon,`

### 4c. Component Props

Edit `visual-editor/src/lib/data/componentProps.ts`:

1. Add `'{snake_case}'` to the `supportedComponents` Set
2. Add entry in `COMPONENT_PROPS`:

```typescript
{snake_case}: [...BASE_COMPONENT_PROPS, {
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
    title: '{camelCase}Props.title',
    list: [
        // Map each property using this table:
        // variable-name → { type: 'variable-name', required: true }
        // color → { type: 'color', default: '#RRGGBB', enableSources: true }
        // boolean → { type: 'boolean', default: true/false, enableSources: true }
        // integer → { type: 'integer', min: ..., max: ..., enableSources: true }
        // number → { type: 'number', default: ..., enableSources: true }
        // enum → { type: 'select', options: [...], default: ..., enableSources: true }
    ]
}],
```

**IMPORTANT for `select` type properties**: Option names MUST use translation keys (e.g., `props.style_linear`), NOT raw display strings (e.g., `'linear'`). Add corresponding entries in `lang.json`.

```typescript
// CORRECT:
options: [{
    name: 'props.style_linear',   // ← translation key
    value: 'linear'
}, {
    name: 'props.style_circular', // ← translation key
    value: 'circular'
}]

// WRONG:
options: [{
    name: 'linear',   // ← raw string, won't be translated
    value: 'linear'
}]
```

**`split` type for grouped properties** (e.g., font size + font weight side by side):
```typescript
{
    type: 'split',
    list: [{
        name: 'props.font_size',
        prop: 'font_size',
        type: 'integer',
        min: 1,
        max: 1000,
        enableSources: true
    }, {
        name: 'props.font_weight',
        prop: 'font_weight',
        type: 'select',
        options: [{
            name: 'props.font_weight_light',
            value: 'light'
        }, {
            name: 'props.font_weight_normal',
            value: 'regular'
        }, {
            name: 'props.font_weight_medium',
            value: 'medium'
        }, {
            name: 'props.font_weight_bold',
            value: 'bold'
        }],
        enableSources: true
    }]
}
```

### 4d. Default JSON in State

Edit `visual-editor/src/lib/data/state.ts`.

Find the block of `else if (type === 'progress')` conditions (~line 775) and add before the `namedTemplates` fallback.

**IMPORTANT**: Include default color values in the default JSON so the visual editor preview renders correctly on first drop. Without explicit colors, widgets may appear invisible or use platform defaults that don't match the expected appearance.

**form-boolean:**
```typescript
} else if (type === '{snake_case}') {
    json = {
        type,
        {variable_property_name}: '{snake_case}_var',
        on_color: '#129386',
        off_color: '#4D000000',
        // Add other color defaults that affect initial appearance
    };
```

**form-options:**
```typescript
} else if (type === '{snake_case}') {
    json = {
        type,
        value_variable: 'selected_var',
        options: [
            { value: 'option_1', text: 'Option 1' },
            { value: 'option_2', text: 'Option 2' }
        ],
        selected_color: '#129386',
        default_color: '#4D000000'
    };
```

**display-only:**
```typescript
} else if (type === '{snake_case}') {
    json = {
        type,
        // Set sensible defaults for key properties
        value: 0.5,
        active_color: '#129386',
        inactive_color: '#4D000000',
        width: { type: 'match_parent' }
    };
```

### 4e. Translations

Edit `visual-editor/src/auto/lang.json`.

Add to both `"ru"` and `"en"` sections:

```json
"components.{snake_case}": "{Display Name}",
"{camelCase}Props.title": "{Display Name} properties",
```

Plus any widget-specific prop labels like `"props.{property_name}"` if they don't already exist.

**IMPORTANT**: Add translation entries for ALL `select` option names used in componentProps:
```json
"props.style_linear": "Linear",
"props.style_circular": "Circular",
```

---

## Step 5: iOS Client (sub-command: `/generate-widget:ios`)

### 5a. Generated Models

Run the API generator to produce Swift models from the schema:

```bash
cd /private/tmp/divkit_ios_gen
python3 -m api_generator \
  -c client/ios/generator_config.json \
  -s schema/ \
  -o /private/tmp/divkit_ios_gen
```

This generates:
- `Div{PascalCase}.swift` — model
- `Div{PascalCase}Template.swift` — template

Copy these to `client/ios/DivKit/generated_sources/`.

Also regenerate `Div.swift` and `DivTemplate.swift` (the enum that includes all widget types).

### 5b. Extension File

Create `client/ios/DivKit/Extensions/Div{PascalCase}Extensions.swift`.

Choose the appropriate pattern based on widget complexity:

#### Pattern A: Composed LayoutKit Blocks (Checkbox, Radio)

Use this for widgets that can be built entirely from existing LayoutKit blocks (EmptyBlock, TextBlock, LayeredBlock, ContainerBlock). This is the **preferred** approach for most widgets.

**form-boolean pattern** (like DivCheckboxExtensions.swift):
```swift
import CoreGraphics
import Foundation
import LayoutKit
import Serialization
import VGSL

extension Div{PascalCase}: DivBlockModeling {
  public func makeBlock(context: DivBlockModelingContext) throws -> Block {
    let context = modifiedContextParentPath(context)
    let resolver = context.expressionResolver

    return try applyBaseProperties(
      to: { makeBaseBlock(context: context) },
      context: context,
      actionsHolder: nil,
      customAccessibilityParams: CustomAccessibilityParams(
        defaultTraits: .button
      ) { [unowned self] in
        accessibility?.resolveDescription(resolver)
      }
    )
  }

  private func makeBaseBlock(context: DivBlockModelingContext) -> Block {
    let resolver = context.expressionResolver

    // 1. Bind to variable
    let checkedBinding: Binding<Bool> = context.makeBinding(
      variableName: {variableProperty},
      defaultValue: false
    )
    let isChecked = checkedBinding.value

    // 2. Resolve properties
    let onColor = resolveOnColor(resolver)
    let offColor = resolveOffColor(resolver)

    // 3. Build visual blocks using LayoutKit primitives
    let widgetBlock: Block
    if isChecked {
      // Checked state: LayeredBlock with background + indicator
      widgetBlock = LayeredBlock(
        widthTrait: .fixed(22),
        heightTrait: .fixed(22),
        horizontalChildrenAlignment: .center,
        verticalChildrenAlignment: .center,
        children: [
          EmptyBlock(widthTrait: .fixed(22), heightTrait: .fixed(22))
            .addingDecorations(boundary: .cornerRadius(4), backgroundColor: onColor),
          // indicator content (TextBlock for checkmark, EmptyBlock for dot, etc.)
        ]
      )
    } else {
      // Unchecked state: outline only
      widgetBlock = EmptyBlock(widthTrait: .fixed(22), heightTrait: .fixed(22))
        .addingDecorations(
          boundary: .cornerRadius(4),
          border: BlockBorder(color: offColor, width: 2)
        )
    }

    // 4. Attach tap action to toggle variable
    let newValue = isChecked ? "false" : "true"
    let encodedName = {variableProperty}.addingPercentEncoding(
      withAllowedCharacters: .urlQueryAllowed
    ) ?? {variableProperty}
    let actionURLString = "div-action://set_variable?name=\(encodedName)&value=\(newValue)"
    let actionURL = Foundation.URL(string: actionURLString)!

    let actionJSON: JSONObject = .object([
      "log_id": .string("{snake_case}_toggle"),
      "url": .string(actionURLString),
    ])

    let tapAction = UserInterfaceAction(
      payload: .divAction(
        params: UserInterfaceAction.DivActionParams(
          action: actionJSON,
          path: context.path,
          source: .tap,
          url: actionURL
        )
      ),
      path: context.path + "{snake_case}_toggle"
    )

    return widgetBlock.addingDecorations(
      actions: NonEmptyArray(tapAction)
    )
  }
}
```

**form-options pattern** (like DivRadioExtensions.swift):
```swift
import CoreGraphics
import Foundation
import LayoutKit
import Serialization
import VGSL

extension Div{PascalCase}: DivBlockModeling {
  public func makeBlock(context: DivBlockModelingContext) throws -> Block {
    let context = modifiedContextParentPath(context)
    return try applyBaseProperties(
      to: { try makeBaseBlock(context: context) },
      context: context,
      actionsHolder: nil
    )
  }

  private func makeBaseBlock(context: DivBlockModelingContext) throws -> Block {
    let expressionResolver = context.expressionResolver

    // 1. Bind to string variable
    let textBinding: Binding<String> = context
      .makeBinding(variableName: valueVariable, defaultValue: "")
    let selectedValue = textBinding.value

    // 2. Resolve styling properties
    let resolvedSelectedColor = resolveSelectedColor(expressionResolver)
    let resolvedDefaultColor = resolveDefaultColor(expressionResolver)

    // 3. Build option blocks with tap actions
    let optionBlocks: [Block] = try options.map { option in
      let value = option.resolveValue(expressionResolver) ?? ""
      let isSelected = value == selectedValue

      // Build indicator + label using LayoutKit blocks
      // ...

      // Attach tap action
      let encodedName = valueVariable.addingPercentEncoding(
        withAllowedCharacters: .urlQueryAllowed) ?? valueVariable
      let encodedValue = value.addingPercentEncoding(
        withAllowedCharacters: .urlQueryAllowed) ?? value
      let actionURLString = "div-action://set_variable?name=\(encodedName)&value=\(encodedValue)"
      let actionURL = URL(string: actionURLString)!

      let actionJSON: JSONObject = .object([
        "log_id": .string("{snake_case}_select_\(value)"),
        "url": .string(actionURLString),
      ])

      let tapAction = UserInterfaceAction(
        payload: .divAction(
          params: UserInterfaceAction.DivActionParams(
            action: actionJSON,
            path: context.path,
            source: .tap,
            url: actionURL
          )
        ),
        path: context.path + "option_\(value)"
      )

      return optionRow.addingDecorations(actions: NonEmptyArray(tapAction))
    }

    // 4. Arrange options in container
    return try ContainerBlock(
      layoutDirection: .vertical,
      widthTrait: resolveContentWidthTrait(context),
      heightTrait: resolveContentHeightTrait(context),
      gaps: gaps,
      children: optionBlocks
    )
  }
}
```

#### Pattern B: Custom Block + UIViewRenderable (Progress)

Use this for widgets that need **custom drawing or animations** (e.g., animated progress indicators, charts). This requires 3 files:

**File 1: Block definition** — `client/ios/DivKit/Blocks/{PascalCase}Block.swift`:
```swift
import CoreGraphics
import LayoutKit
import VGSL

public final class {PascalCase}Block: BlockWithTraits {
  // Properties
  public let widthTrait: LayoutTrait
  public let heightTrait: LayoutTrait

  public init(/* properties */, widthTrait: LayoutTrait, heightTrait: LayoutTrait) {
    // ...
  }

  public var intrinsicContentWidth: CGFloat {
    widthTrait.intrinsicSize  // uses fileprivate extension below
  }

  public func intrinsicContentHeight(forWidth _: CGFloat) -> CGFloat {
    heightTrait.intrinsicSize
  }

  public func equals(_ other: Block) -> Bool {
    guard let other = other as? {PascalCase}Block else { return false }
    // Compare all properties
    return true
  }

  public func getImageHolders() -> [ImageHolder] { [] }

  public var debugDescription: String { "{PascalCase}Block(...)" }
}

extension {PascalCase}Block: LayoutCachingDefaultImpl {}
extension {PascalCase}Block: ElementStateUpdatingDefaultImpl {}

// REQUIRED: LayoutTrait.intrinsicSize is fileprivate in LayoutKit.
// Each file that needs it must define its own extension.
extension LayoutTrait {
  fileprivate var intrinsicSize: CGFloat {
    switch self {
    case let .fixed(value):
      value
    case let .intrinsic(_, minSize, _):
      minSize
    case .weighted:
      0
    }
  }
}
```

**File 2: UIView rendering** — `client/ios/DivKit/Blocks/{PascalCase}Block+UIViewRenderable.swift`:
```swift
#if os(iOS)

import CoreGraphics
import LayoutKit
import UIKit
import VGSL

extension {PascalCase}Block: UIViewRenderable {
  public static func makeBlockView() -> BlockView {
    {PascalCase}BlockView()
  }

  public func configureBlockView(
    _ view: BlockView,
    observer _: ElementStateObserver?,
    overscrollDelegate _: ScrollDelegate?,
    renderingDelegate _: RenderingDelegate?
  ) {
    let customView = view as! {PascalCase}BlockView
    customView.configure(/* properties */)
  }

  public func canConfigureBlockView(_ view: BlockView) -> Bool {
    view is {PascalCase}BlockView
  }
}

final class {PascalCase}BlockView: UIView, BlockViewProtocol, VisibleBoundsTrackingLeaf {
  var effectiveBackgroundColor: UIColor? { backgroundColor }

  // Custom drawing / animation layers
  private let trackLayer = CAShapeLayer()

  override init(frame: CGRect) {
    super.init(frame: frame)
    layer.addSublayer(trackLayer)
  }

  @available(*, unavailable)
  required init?(coder _: NSCoder) { fatalError() }

  func configure(/* properties */) {
    // Configure layers/views
    setNeedsLayout()
  }

  override func layoutSubviews() {
    super.layoutSubviews()
    // CRITICAL: Set layer frames here, not in configure().
    // Without this, animation anchor points default to (0,0).
    trackLayer.frame = bounds
    updatePaths()
  }
}

#endif
```

**File 3: Extension** — `client/ios/DivKit/Extensions/Div{PascalCase}Extensions.swift`:
```swift
import CoreGraphics
import LayoutKit
import VGSL

extension Div{PascalCase}: DivBlockModeling {
  public func makeBlock(context: DivBlockModelingContext) throws -> Block {
    let context = modifiedContextParentPath(context)
    return try applyBaseProperties(
      to: { makeBaseBlock(context: context) },
      context: context,
      actionsHolder: nil
    )
  }

  private func makeBaseBlock(context: DivBlockModelingContext) -> Block {
    let resolver = context.expressionResolver
    // Resolve properties and create custom block
    return {PascalCase}Block(
      /* properties */,
      widthTrait: resolveContentWidthTrait(context),
      heightTrait: resolveContentHeightTrait(context)
    )
  }
}
```

### iOS Key APIs and Patterns

**LayoutKit blocks available for composition:**
| Block | Purpose | Key init params |
|-------|---------|----------------|
| `EmptyBlock` | Invisible box for decoration | `widthTrait`, `heightTrait` |
| `TextBlock` | Text label | `widthTrait`, `text` (AttributedString via `.with(typo:)`) |
| `LayeredBlock` | Stack blocks on top of each other | `widthTrait`, `heightTrait`, `horizontalChildrenAlignment`, `verticalChildrenAlignment`, `children` |
| `ContainerBlock` | Horizontal/vertical layout | `layoutDirection`, `widthTrait`, `heightTrait`, `verticalChildrenAlignment`, `gaps`, `children` |

**Decorations** (via `Block.addingDecorations()`):
- `boundary: .cornerRadius(CGFloat)` — rounded corners
- `backgroundColor: Color` — fill color
- `border: BlockBorder(color:, width:)` — stroke outline
- `actions: NonEmptyArray<UserInterfaceAction>` — tap actions

**Tap action construction for variable updates:**
```swift
// 1. Build URL: div-action://set_variable?name=<encoded>&value=<encoded>
let actionURLString = "div-action://set_variable?name=\(encodedName)&value=\(encodedValue)"
let actionURL = Foundation.URL(string: actionURLString)!

// 2. Wrap in JSONObject for action handler
let actionJSON: JSONObject = .object([
  "log_id": .string("my_action_id"),
  "url": .string(actionURLString),
])

// 3. Create UserInterfaceAction with .divAction payload (NOT .url)
let tapAction = UserInterfaceAction(
  payload: .divAction(
    params: UserInterfaceAction.DivActionParams(
      action: actionJSON,
      path: context.path,
      source: .tap,
      url: actionURL
    )
  ),
  path: context.path + "action_suffix"
)

// 4. Attach to block
return block.addingDecorations(actions: NonEmptyArray(tapAction))
```

**IMPORTANT**: Use `.divAction` payload, NOT `.url`. The `.url` payload routes to the app's custom URL handler, while `.divAction` routes through DivKit's built-in action handler which understands `div-action://set_variable`.

**Width/height trait resolution:**
- `resolveContentWidthTrait(context)` / `resolveContentHeightTrait(context)` — for child blocks (respects parent constraints)
- `resolveWidthTrait(context)` / `resolveHeightTrait(context)` — for the widget's own size (used in `applyBaseProperties`)

**ContainerBlock argument order matters:** `verticalChildrenAlignment` must come before `gaps` in the initializer.

**ContainerBlock layout constraint:** In a vertical intrinsic-width container, all children MUST have non-resizable width (use `.intrinsic` or `.fixed`, not `.resizable`). Similarly for horizontal intrinsic-height containers.

---

## Step 6: Android Client (sub-command: `/generate-widget:android`)

Android models (`com.yandex.div2.Div{PascalCase}`) are generated at Gradle build time — do NOT create them manually. Only create the view, wrapper, and binder files, then register in 4 existing files.

### 6a. Internal Widget View

Create `client/android/div/src/main/java/com/yandex/div/internal/widget/{WidgetView}.kt`:

This is the base Android view. Pattern depends on category:
- **form-boolean**: Extend a base toggle view (like `CheckboxView`)
- **form-options**: Extend `LinearLayout` or `RadioGroup`
- **display-only**: Extend `View` with custom `onDraw`

### 6b. Div Widget View (wrapper)

Create `client/android/div/src/main/java/com/yandex/div/core/view2/divs/widgets/Div{PascalCase}View.kt`:

```kotlin
package com.yandex.div.core.view2.divs.widgets

import android.content.Context
import android.graphics.Canvas
import com.yandex.div.core.annotations.Mockable
import com.yandex.div.internal.widget.{WidgetView}
import com.yandex.div2.Div

@Mockable
internal class Div{PascalCase}View(context: Context) : {WidgetView}(context),
    DivHolderView<Div.{PascalCase}> by DivHolderViewMixin() {

    override fun onSizeChanged(w: Int, h: Int, oldw: Int, oldh: Int) {
        super.onSizeChanged(w, h, oldw, oldh)
        onBoundsChanged(w, h)
    }

    override fun draw(canvas: Canvas) {
        drawBorderClipped(canvas) { super.draw(it) }
    }
}
```

### 6c. Binder

Create `client/android/div/src/main/java/com/yandex/div/core/view2/divs/Div{PascalCase}Binder.kt`:

```kotlin
package com.yandex.div.core.view2.divs

import com.yandex.div.core.dagger.DivScope
import com.yandex.div.core.state.DivStatePath
import com.yandex.div.core.view2.BindingContext
import com.yandex.div.core.view2.DivViewBinder
import com.yandex.div.core.view2.divs.widgets.Div{PascalCase}View
import com.yandex.div.json.expressions.ExpressionResolver
import com.yandex.div.json.expressions.equalsToConstant
import com.yandex.div.json.expressions.isConstant
import com.yandex.div.json.expressions.isConstantOrNull
import com.yandex.div2.Div
import com.yandex.div2.Div{PascalCase}
import javax.inject.Inject

@DivScope
internal class Div{PascalCase}Binder @Inject constructor(
    baseBinder: DivBaseBinder,
    // For form widgets, inject the appropriate variable binder:
    // private val variableBinder: TwoWayBooleanVariableBinder  (form-boolean)
    // private val variableBinder: TwoWayStringVariableBinder   (form-string/form-options)
    // For widgets needing typeface:
    // private val typefaceResolver: DivTypefaceResolver
) : DivViewBinder<Div.{PascalCase}, Div{PascalCase}, Div{PascalCase}View>(baseBinder) {

    override fun Div{PascalCase}View.bind(
        bindingContext: BindingContext,
        div: Div{PascalCase},
        oldDiv: Div{PascalCase}?,
        path: DivStatePath
    ) {
        // Bind each property
        bindPropertyName(div, oldDiv, bindingContext.expressionResolver)
        // For form widgets, observe the variable:
        // observeVariable(div, bindingContext, path)
    }

    // === PROPERTY BINDING PATTERN ===
    // For each property, create a bind + apply pair:

    // Required property (non-nullable Expression):
    private fun Div{PascalCase}View.bindPropertyName(
        div: Div{PascalCase}, oldDiv: Div{PascalCase}?, resolver: ExpressionResolver
    ) {
        if (div.propertyName.equalsToConstant(oldDiv?.propertyName)) {
            return
        }
        applyPropertyName(div, resolver)
        if (div.propertyName.isConstant()) {
            return
        }
        val callback = { _: Any -> applyPropertyName(div, resolver) }
        addSubscription(div.propertyName.observe(resolver, callback))
    }

    private fun Div{PascalCase}View.applyPropertyName(
        div: Div{PascalCase}, resolver: ExpressionResolver
    ) {
        viewProperty = div.propertyName.evaluate(resolver)
    }

    // Optional property (nullable Expression):
    private fun Div{PascalCase}View.bindOptionalProp(
        div: Div{PascalCase}, oldDiv: Div{PascalCase}?, resolver: ExpressionResolver
    ) {
        if (div.optionalProp.equalsToConstant(oldDiv?.optionalProp)) {
            return
        }
        div.optionalProp?.evaluate(resolver)?.let { viewProperty = it }
        if (div.optionalProp.isConstantOrNull()) {
            return
        }
        val callback: (Any) -> Unit = { _ ->
            div.optionalProp?.evaluate(resolver)?.let { viewProperty = it }
        }
        addSubscription(div.optionalProp?.observe(resolver, callback))
    }

    // === VARIABLE BINDING PATTERN (form widgets) ===
    // form-boolean:
    private fun Div{PascalCase}View.observeVariable(
        div: Div{PascalCase},
        bindingContext: BindingContext,
        path: DivStatePath,
    ) {
        val callbacks = object : TwoWayBooleanVariableBinder.Callbacks {
            override fun onVariableChanged(value: Boolean?) {
                value?.let { isChecked = it }
            }

            override fun setViewStateChangeListener(valueUpdater: (Boolean) -> Unit) {
                setOnCheckedChangeListener(valueUpdater)
            }
        }

        val subscription = variableBinder.bindVariable(
            bindingContext, div.{variableProperty}, callbacks, path
        )
        addSubscription(subscription)
    }

    // form-string / form-options:
    private fun Div{PascalCase}View.observeVariable(
        div: Div{PascalCase},
        bindingContext: BindingContext,
        path: DivStatePath,
    ) {
        val callbacks = object : TwoWayStringVariableBinder.Callbacks {
            override fun onVariableChanged(value: String?) {
                value?.let { selectedValue = it }
            }

            override fun setViewStateChangeListener(valueUpdater: (String) -> Unit) {
                setOnValueChangedListener(valueUpdater)
            }
        }

        val subscription = variableBinder.bindVariable(
            bindingContext, div.valueVariable, callbacks, path
        )
        addSubscription(subscription)
    }
}
```

**Dimension conversion helpers** used in binder apply methods:
- `value.dpToPx(resources.displayMetrics)` — dp to pixels (for sizes, spacing)
- `value.spToPxF(resources.displayMetrics)` — sp to pixels float (for text sizes)

### 6d. Register in DivViewCreator

Edit `client/android/div/src/main/java/com/yandex/div/core/view2/DivViewCreator.kt`:

1. Add import: `import com.yandex.div.core.view2.divs.widgets.Div{PascalCase}View`
2. Add TAG constant: `const val TAG_{UPPER_SNAKE} = "DIV2.{UPPER_SNAKE}"`
3. Add to `TAGS` array: `TAG_{UPPER_SNAKE}`
4. Add `register` call in `init`: `register(TAG_{UPPER_SNAKE}, { Div{PascalCase}View(context) }, {camelCase}.capacity)`
5. Add `changeCapacity` in setter: `changeCapacity(TAG_{UPPER_SNAKE}, {camelCase}.capacity)`
6. Add to `getTag` when branch: `is Div.{PascalCase} -> TAG_{UPPER_SNAKE}`

### 6e. Register in DivBinder

Edit `client/android/div/src/main/java/com/yandex/div/core/view2/DivBinder.kt`:

1. Add imports for binder and view
2. Add constructor parameter: `private val {camelCase}Binder: Div{PascalCase}Binder`
3. Add `when` branch in `bind()`: `is Div.{PascalCase} -> bind{PascalCase}(context, view, div, path)`
4. Add `when` branch in `setDataWithoutBinding()`: `is Div.{PascalCase} -> (view as Div{PascalCase}View).setDataWithoutBinding(context, div)`
5. Add private bind method:
```kotlin
private fun bind{PascalCase}(context: BindingContext, view: View, data: Div.{PascalCase}, path: DivStatePath) {
    {camelCase}Binder.bindView(context, view as Div{PascalCase}View, data, path)
}
```

### 6f. Register in ViewPreCreationProfile

Edit `client/android/div/src/main/java/com/yandex/div/internal/viewpool/ViewPreCreationProfile.kt`:

1. Add data class field: `val {camelCase}: PreCreationModel = PreCreationModel(2)`
2. Add to `unconstrained()` parameters: `{camelCase}Capacity: Int = 2`
3. Add to `unconstrained()` body: `{camelCase} = PreCreationModel({camelCase}Capacity)`

### 6g. Register in DivVisitor, DivTreeVisitor, DivCollectionExtensions

These files contain exhaustive `when` expressions over all `Div` subtypes. The Kotlin compiler will flag them as errors after the generated model adds the new `Div.{PascalCase}` variant. Add the corresponding branches.

Files to update (search for existing `Checkbox` branches and add matching `{PascalCase}` branches):

- `client/android/div/src/main/java/com/yandex/div/internal/core/DivVisitor.kt`
- `client/android/div/src/main/java/com/yandex/div/internal/core/DivTreeVisitor.kt`
- `client/android/div/src/main/java/com/yandex/div/internal/core/DivCollectionExtensions.kt`
- `client/android/div/src/main/java/com/yandex/div/core/view2/animations/DivComparator.kt`
- `client/android/div/src/main/java/com/yandex/div/core/view2/reuse/ExistingToken.kt`
- `client/android/div/src/main/java/com/yandex/div/core/view2/reuse/NewToken.kt`
- `client/android/div/src/main/java/com/yandex/div/core/state/DivPathUtils.kt`
- `client/android/div/src/main/java/com/yandex/div/core/util/DivUtil.kt`
- `client/android/div/src/main/java/com/yandex/div/core/util/DivTreeWalk.kt`
- `client/android/div/src/main/java/com/yandex/div/core/tooltip/DivTooltipController.kt`
- `client/android/div/src/main/java/com/yandex/div/core/expression/local/DivRuntimeVisitor.kt`

Strategy: Search each file for `Checkbox` occurrences. For every `when` branch or `is Div.Checkbox`, add a parallel `is Div.{PascalCase}` branch with matching behavior (usually the same default/simple action).

---

## Step 7: Tests

### 7a. Web Test

Create `client/web/divkit/tests/components/{snake_case}.test.ts` (or `.spec.ts`).

Pattern from similar widget tests. Test:
- Component renders without errors
- Variable binding works (for form widgets)
- Property changes update the view
- Error cases (missing required properties)

### 7b. iOS Test

Create `client/ios/DivKitTests/Extensions/Div{PascalCase}ExtensionsTests.swift`.

Pattern from `DivCheckboxExtensionsTests.swift` or `DivProgressExtensionsTests.swift`.

### 7c. Android Test

Create `client/android/div/src/test/java/com/yandex/div/core/view2/divs/Div{PascalCase}BinderTest.kt`.

Pattern from `DivCheckboxBinderTest.kt` or `DivProgressBinderTest.kt`.

---

## Build & Verify

After generating all files, run these verification commands:

### Schema validation
```bash
cd /Users/sumitkumartiwari/Documents/divkit
python3 -c "import json; json.load(open('schema/div-{kebab-case}.json'))"
python3 -c "import json; d=json.load(open('schema/div.json')); refs=[x['\$ref'] for x in d['anyOf']]; assert 'div-{kebab-case}.json' in refs"
```

### Web build (REQUIRED for visual editor)
```bash
cd client/web/divkit && npm run build:prod
```

> **CRITICAL**: The visual editor imports `@divkitframework/divkit` which is symlinked to
> `client/web/divkit/`, but resolves to the **built `dist/` output** (not source files).
> You MUST run `npm run build:prod` after ANY change to web client source files (Svelte
> components, types, CSS modules, typeMap.ts) for the visual editor to pick them up.
> After rebuilding, restart the visual editor dev server (`kill port 5173`, then
> `cd visual-editor && npm run dev`).

### iOS build
```bash
cd client/ios && swift build
```

### Android build (validates generated models + compile)
```bash
cd client/android && ./gradlew :div:compileDebugKotlin
```

---

## Common Pitfalls & Lessons Learned

These issues were discovered during actual widget implementation. Watch for them:

### iOS Pitfalls

1. **`URL` type ambiguity**: The `URL` type can conflict with LayoutKit's `URL` or other modules. Always use `Foundation.URL(string:)` and add `import Foundation` explicitly.

2. **`LayoutTrait.intrinsicSize` is fileprivate**: Each file that needs `intrinsicSize` on `LayoutTrait` must define its own fileprivate extension. You cannot access it from other files. Copy the pattern from `EmptyBlock.swift` or `SeparatorBlock.swift`.

3. **`ContainerBlock` argument order**: The Swift compiler requires arguments in a specific order. `verticalChildrenAlignment` must come BEFORE `gaps` in the initializer.

4. **Intrinsic-width container children**: In a vertical container with `.intrinsic` widthTrait, ALL children must have non-resizable width (`.intrinsic` or `.fixed`). Using `.resizable` width causes a runtime error: "in vertical intrinsic-width container all children have resizable width".

5. **`#if os(iOS)` for UIKit code**: Any code using `UIKit` (UIView, CALayer, CAAnimation) must be wrapped in `#if os(iOS) ... #endif` because the DivKit Swift package also builds for macOS.

6. **CALayer animation anchor points**: When using `CABasicAnimation` for rotation, set `layer.frame = bounds` in `layoutSubviews()`, not in `configure()`. Without proper frame, the rotation anchor defaults to (0,0) instead of the view center.

7. **Use `.divAction` payload, not `.url`**: For `div-action://` URLs that update variables, use `UserInterfaceAction.Payload.divAction(params:)`. The `.url` payload routes to the app's custom URL handler which may not handle DivKit internal actions.

8. **JSONObject import**: The `JSONObject` type comes from `Serialization`. Add `import Serialization` to files that construct action JSON.

### Web Pitfalls

1. **Rebuild dist for visual editor**: After changing ANY web source file, you MUST run `npm run build:prod` in `client/web/divkit/`. The visual editor reads from `dist/`, not source files. Forgetting this causes the visual editor to show the old widget or fail silently.

2. **Select option names need translation keys**: In `componentProps.ts`, `select` type options must use translation keys (e.g., `props.style_linear`) not raw strings. Raw strings won't be translated and look unprofessional.

3. **Default colors in state.ts**: Always include color defaults when creating default JSON for new widget types in `state.ts`. Without them, widgets may render invisible or with incorrect colors in the visual editor preview.

4. **`correctColor` fallback pattern**: Always pass the current value as the third argument (fallback), not a hardcoded default. This ensures the value persists correctly through rebind cycles.

### Android Pitfalls

1. **Models are auto-generated**: Never manually create `com.yandex.div2.Div{PascalCase}` classes. They are generated from schema during Gradle build. Only create the view, binder, and wrapper.

2. **Expression observation pattern**: For each bindable property, follow the exact 3-step pattern: (a) check `equalsToConstant` to skip if unchanged, (b) apply the value, (c) check `isConstant`/`isConstantOrNull` to skip observation if constant, then subscribe with `addSubscription`.

3. **Exhaustive `when` in 11 files**: After adding the schema, the Gradle build will fail with exhaustive-when errors in 11 files. These must all be updated before the project compiles.

### Schema Pitfalls

1. **Color format**: Colors use `#RRGGBB` (6-char) or `#AARRGGBB` (8-char with alpha prefix). The alpha is the FIRST two chars, not the last. Example: `#4D000000` = black at 30% opacity.

2. **`boolean_int` values**: Boolean properties use `"$ref": "common.json#/boolean_int"` and `default_value` must be a string: `"true"` or `"false"` (not JSON boolean).

---

## Verification Checklist

Run through this checklist after generation:

### Schema (3 items)
- [ ] `schema/div-{kebab-case}.json` exists and is valid JSON
- [ ] `schema/div.json` anyOf array includes `div-{kebab-case}.json` reference
- [ ] `schema/translations.json` has en+ru entries for widget and all properties

### Web Client (5 items)
- [ ] `client/web/divkit/src/types/{kebab-case}.d.ts` — interface extends `DivBaseData`
- [ ] `client/web/divkit/src/components/{kebab-case}/{PascalCase}.svelte` — component exists, uses `rebind()` pattern
- [ ] `client/web/divkit/src/components/{kebab-case}/{PascalCase}.module.css` — styles exist
- [ ] `client/web/divkit/src/components/typeMap.ts` — `{snake_case}` entry in `TYPE_MAP`
- [ ] `npm run build:prod` in `client/web/divkit/` — dist rebuilt for visual editor

### Visual Editor (7 items)
- [ ] `visual-editor/src/assets/components/{kebab-case}.svg` — icon exists
- [ ] `visual-editor/src/lib/utils/componentIcon.ts` — import + MAP entry
- [ ] `visual-editor/src/lib/data/componentProps.ts` — in `supportedComponents` + `COMPONENT_PROPS`
- [ ] `visual-editor/src/lib/data/componentProps.ts` — select options use translation keys, not raw strings
- [ ] `visual-editor/src/lib/data/state.ts` — default JSON includes color defaults
- [ ] `visual-editor/src/auto/lang.json` — ru + en entries for component name, props title, and select options
- [ ] Visual editor dev server restarted after DivKit web client rebuild

### iOS (3-5 items depending on complexity)
- [ ] `client/ios/DivKit/generated_sources/Div{PascalCase}.swift` — generated model
- [ ] `client/ios/DivKit/generated_sources/Div{PascalCase}Template.swift` — generated template
- [ ] `client/ios/DivKit/Extensions/Div{PascalCase}Extensions.swift` — manual extension
- [ ] (If custom block) `client/ios/DivKit/Blocks/{PascalCase}Block.swift` — block definition with fileprivate LayoutTrait extension
- [ ] (If custom block) `client/ios/DivKit/Blocks/{PascalCase}Block+UIViewRenderable.swift` — UIView rendering with `#if os(iOS)`

### Android (8 items)
- [ ] Internal widget view in `div/internal/widget/`
- [ ] `Div{PascalCase}View` in `div/core/view2/divs/widgets/`
- [ ] `Div{PascalCase}Binder` in `div/core/view2/divs/`
- [ ] `DivViewCreator.kt` — TAG + register + getTag
- [ ] `DivBinder.kt` — import + constructor param + bind method + when branches (both `bind()` and `setDataWithoutBinding()`)
- [ ] `ViewPreCreationProfile.kt` — field + unconstrained param
- [ ] All visitor/exhaustive-when files updated (11 files)
- [ ] Binder test in `div/src/test/`

### Tests (3 items)
- [ ] Web component test
- [ ] iOS extension test
- [ ] Android binder test

**Total: 30-32 items**

---

## Sub-command Routing

| Sub-command | Steps |
|-------------|-------|
| `/generate-widget` | All steps (1-7) |
| `/generate-widget:schema` | Steps 1-2 only |
| `/generate-widget:web` | Steps 3-4 only (assumes schema exists) |
| `/generate-widget:ios` | Step 5 only (assumes schema exists) |
| `/generate-widget:android` | Step 6 + 7c only (assumes schema exists) |

---

## Reference File Index

### Schema
- `schema/div-checkbox.json` — form-boolean schema
- `schema/div-radio.json` — form-options schema with definitions
- `schema/div-progress.json` — display-only schema
- `schema/div.json` — widget registry (anyOf array)
- `schema/translations.json` — bilingual descriptions

### Web Client
- `client/web/divkit/src/components/checkbox/Checkbox.svelte` — form-boolean Svelte (variable binding, error handling, focusable)
- `client/web/divkit/src/components/checkbox/Checkbox.module.css` — CSS module
- `client/web/divkit/src/components/radio/Radio.svelte` — form-options Svelte (options iteration, font handling)
- `client/web/divkit/src/components/progress/Progress.svelte` — display-only Svelte (SVG, reactive only)
- `client/web/divkit/src/types/checkbox.d.ts` — TypeScript type definition
- `client/web/divkit/src/components/typeMap.ts` — component registry

### Visual Editor
- `visual-editor/src/assets/components/checkbox.svg` — SVG icon (40x40, white stroke)
- `visual-editor/src/lib/utils/componentIcon.ts` — icon registry
- `visual-editor/src/lib/data/componentProps.ts` — property panel definitions
- `visual-editor/src/lib/data/state.ts` — default JSON for new leaf (~line 775)
- `visual-editor/src/auto/lang.json` — UI translations (ru + en)

### iOS
- `client/ios/DivKit/Extensions/DivCheckboxExtensions.swift` — form-boolean: composed blocks + tap action
- `client/ios/DivKit/Extensions/DivProgressExtensions.swift` — display-only: custom ProgressBlock
- `client/ios/DivKit/Extensions/DivRadioExtensions.swift` — form-options: composed blocks + tap actions + ContainerBlock
- `client/ios/DivKit/Blocks/ProgressBlock.swift` — custom Block + BlockWithTraits (with fileprivate LayoutTrait extension)
- `client/ios/DivKit/Blocks/ProgressBlock+UIViewRenderable.swift` — UIViewRenderable + custom UIView with CALayer animation

### Android
- `client/android/div/src/main/java/com/yandex/div/internal/widget/CheckboxView.kt` — base widget
- `client/android/div/src/main/java/com/yandex/div/core/view2/divs/widgets/DivCheckboxView.kt` — wrapper
- `client/android/div/src/main/java/com/yandex/div/core/view2/divs/DivCheckboxBinder.kt` — form-boolean binder (bind/apply pattern)
- `client/android/div/src/main/java/com/yandex/div/core/view2/divs/DivRadioBinder.kt` — form-options binder (options + typeface binding)
- `client/android/div/src/main/java/com/yandex/div/core/view2/divs/DivProgressBinder.kt` — display-only binder
- `client/android/div/src/main/java/com/yandex/div/core/view2/DivViewCreator.kt` — view pool
- `client/android/div/src/main/java/com/yandex/div/core/view2/DivBinder.kt` — bind dispatch (bind + setDataWithoutBinding)
- `client/android/div/src/main/java/com/yandex/div/internal/viewpool/ViewPreCreationProfile.kt` — pool profile
- `client/android/div/src/main/java/com/yandex/div/internal/core/DivVisitor.kt` — visitor
- `client/android/div/src/main/java/com/yandex/div/internal/core/DivTreeVisitor.kt` — tree visitor
- `client/android/div/src/main/java/com/yandex/div/internal/core/DivCollectionExtensions.kt` — collection ext
- `client/android/div/src/main/java/com/yandex/div/core/view2/animations/DivComparator.kt` — comparator
- `client/android/div/src/main/java/com/yandex/div/core/view2/reuse/ExistingToken.kt` — reuse token
- `client/android/div/src/main/java/com/yandex/div/core/view2/reuse/NewToken.kt` — new token
- `client/android/div/src/main/java/com/yandex/div/core/state/DivPathUtils.kt` — path utils
- `client/android/div/src/main/java/com/yandex/div/core/util/DivUtil.kt` — div utils
- `client/android/div/src/main/java/com/yandex/div/core/util/DivTreeWalk.kt` — tree walk
- `client/android/div/src/main/java/com/yandex/div/core/tooltip/DivTooltipController.kt` — tooltip
- `client/android/div/src/main/java/com/yandex/div/core/expression/local/DivRuntimeVisitor.kt` — runtime visitor

### Tests
- `client/web/divkit/tests/components/` — web test directory
- `client/ios/DivKitTests/Extensions/DivCheckboxExtensionsTests.swift` — iOS test
- `client/android/div/src/test/java/com/yandex/div/core/view2/divs/DivCheckboxBinderTest.kt` — Android test

Remember: Claude is capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.
