# AutoComplete Input Widget — Native Platforms Design Spec

**Date:** 2026-03-30
**Extends:** `docs/superpowers/specs/2026-03-28-autocomplete-input-design.md`
**Scope:** Android (Kotlin) + iOS (Swift) implementations. Web client and visual editor are already complete.

## Overview

This spec covers the native platform implementations of the `autocomplete` widget type. All behavioral rules, properties, data flow, and schema definitions are defined in the original design spec (2026-03-28). This document focuses on platform-specific architecture and file structure.

## Prerequisites

The schema files (`div-autocomplete.json`, `div-autocomplete-suggestion.json`) are already committed. Both platforms require running the `api_generator` to produce model/data classes before implementation.

## Code Generation

### Android (Kotlin)

Run from `api_generator/`:
```bash
python3 -m api_generator \
  -c ../client/android/div-data/div2-generator-config.json \
  -s ../schema \
  -o ../client/android/div-data/build/generated/java/scheme_divModel
```

Produces:
- `DivAutocomplete.kt` — Data class extending `DivBase` with all schema properties as `Expression<T>`
- `DivAutocompleteSuggestion.kt` — Suggestion item data class
- Serialization and template support classes

### iOS (Swift)

Run from `client/ios/`:
```bash
./codegen_DivKit.sh
```

Which executes:
```bash
python3 -m api_generator \
  -c ../client/ios/DivKit/generator_config.json \
  -s ../schema \
  -o ../client/ios/DivKit/generated_sources
```

Produces:
- `DivAutocomplete.swift` — Model class conforming to `DivBase` with expression resolvers
- `DivAutocompleteSuggestion.swift` — Suggestion item model

## Android Implementation

### New Files

#### `DivAutocompleteView.kt`
**Path:** `client/android/div/src/main/java/com/yandex/div/core/view2/divs/widgets/DivAutocompleteView.kt`

Minimal custom view following `DivSelectView.kt` pattern (~120 lines):
- Extends `FrameLayout`
- Implements `DivHolderView<Div.Autocomplete>` (via mixin) and `DivAnimator`
- Contains `EditText` for text input
- Contains `ListPopupWindow` for suggestions dropdown
- ListPopupWindow handles above/below auto-positioning natively
- Exposes:
  - `valueUpdater: ((String) -> Unit)?` — callback for variable updates
  - `addAfterTextChangeAction(action: (Editable?) -> Unit)` — text change observer
  - `removeAfterTextChangeListener()` — cleanup
  - `setOnSuggestionSelectedListener(listener: (position: Int) -> Unit)` — selection callback
  - `setSuggestions(items: List<SuggestionItem>)` — update dropdown data
  - `showDropdown()` / `dismissDropdown()` — visibility control
- `SuggestionItem` data class: `value: String`, `text: String?`, `secondaryText: String?`

#### `DivAutocompleteBinder.kt`
**Path:** `client/android/div/src/main/java/com/yandex/div/core/view2/divs/DivAutocompleteBinder.kt`

Fat binder following `DivInputBinder.kt` pattern (~350 lines):
- Annotated `@DivScope`
- Extends `DivViewBinder<Div.Autocomplete, DivAutocomplete, DivAutocompleteView>`
- Injected dependencies:
  - `DivBaseBinder` — base property binding
  - `TwoWayStringVariableBinder` — text_variable two-way binding
  - `DivActionBinder` — action execution
  - `DivTypefaceResolver` — font resolution
  - `ErrorCollectors` — error logging

**Binding responsibilities:**
- `observeText()` — Binds `text_variable` via `TwoWayStringVariableBinder` with callbacks:
  - `onVariableChanged(value)` → updates EditText text
  - `setViewStateChangeListener(valueUpdater)` → calls `addAfterTextChangeAction()` to fire on typing
- `observeSuggestions()` — Subscribes to `suggestions_variable` via `variableController.subscribeToVariableChange()`:
  - The variable holds a `JSONArray` where each element is a `JSONObject` with fields: `value` (required string), `text` (optional string), `secondary_text` (optional string)
  - Parses into `SuggestionItem` list
  - Skips items missing `value` field
  - Updates adapter via `view.setSuggestions(items)`
  - Shows/hides dropdown based on `dismiss_on_empty` flag
- `observeTextChanges()` — From `afterTextChanged`:
  - Checks `text.length >= min_query_length`
  - If yes: fires `text_change_actions` via `DivActionBinder.handleBulkActions()`
  - If no: dismisses dropdown
- `handleSelection(position)` — On suggestion item click:
  - Sets `text_variable` to `suggestion.text ?: suggestion.value`
  - Sets `value_variable` via `VariableMutationHandler.setVariable()`
  - Fires `selection_actions` via `DivActionBinder.handleBulkActions()`
  - Dismisses dropdown if `dismiss_on_selection` is true
- `observeDismissFlags()` — Observes `dismiss_on_selection`, `dismiss_on_blur`, `dismiss_on_empty` with expression resolver
- `observeTextStyle()` — Font size, color, weight, family, line height, letter spacing (same as DivInputBinder)
- `observeHint()` — Hint text and color
- `observeKeyboardType()` — Input type mapping (single_line, email, phone, etc.)
- `observeEnterKeyActions()` — IME action type and enter key actions
- Focus/blur handling: dismiss dropdown on blur if `dismiss_on_blur` is true

#### `DivAutocompleteSuggestionAdapter.kt`
**Path:** `client/android/div/src/main/java/com/yandex/div/core/view2/divs/DivAutocompleteSuggestionAdapter.kt`

Simple list adapter (~80 lines):
- Extends `BaseAdapter` (for ListPopupWindow compatibility)
- Each row renders:
  - Primary text: `suggestion.text ?: suggestion.value`
  - Secondary text: `suggestion.secondaryText` (if present, smaller + lighter color)
- Accepts `suggestion_text_color` for styling
- `setItems(items: List<SuggestionItem>)` with `notifyDataSetChanged()`

### Modified Files

#### `DivBinder.kt`
**Path:** `client/android/div/src/main/java/com/yandex/div/core/view2/DivBinder.kt`

- Add `private val autocompleteBinder: DivAutocompleteBinder` to constructor injection
- Add case in `bind()` when-expression:
  ```kotlin
  is Div.Autocomplete -> bindAutocomplete(context, view, div, path)
  ```
- Add private method:
  ```kotlin
  private fun bindAutocomplete(context: BindingContext, view: View, data: Div.Autocomplete, path: DivStatePath) {
      autocompleteBinder.bindView(context, view as DivAutocompleteView, data, path)
  }
  ```

#### `DivViewCreator.kt`
**Path:** `client/android/div/src/main/java/com/yandex/div/core/view2/DivViewCreator.kt`

- Add `TAG_AUTOCOMPLETE` constant
- Register in `init` block:
  ```kotlin
  register(TAG_AUTOCOMPLETE, { DivAutocompleteView(context) }, autocomplete.capacity)
  ```
- Add visit case for `Div.Autocomplete`

## iOS Implementation

### New Files

#### `DivAutocompleteExtensions.swift`
**Path:** `client/ios/DivKit/Extensions/DivAutocompleteExtensions.swift`

DivBlockModeling conformance (~150 lines), follows `DivSelectExtensions.swift` pattern:

```swift
extension DivAutocomplete: DivBlockModeling {
  public func makeBlock(context: DivBlockModelingContext) throws -> Block {
    let context = modifiedContextParentPath(context)
    return try applyBaseProperties(
      to: { try makeBaseBlock(context: context) },
      context: context,
      actionsHolder: nil
    )
  }
}
```

**`makeBaseBlock(context:)` responsibilities:**
- Resolves font params via `context.font(resolveFontParams(expressionResolver))`
- Resolves text color, hint color, hint text, suggestion text color
- Creates `Binding<String>` for `text_variable` via `context.makeBinding(variableName:defaultValue:)`
- Creates `Binding<String>` for `value_variable` similarly
- Reads `suggestions_variable` from `context.variablesStorage` — observes via `variableTracker`
- Converts `text_change_actions` and `selection_actions` to `[UserInterfaceAction]` via `.uiActions(context:)`
- Resolves `min_query_length`, `max_visible_suggestions`, dismiss flags
- Returns `AutocompleteBlock` with all resolved properties

#### `AutocompleteBlock.swift`
**Path:** `client/ios/LayoutKit/LayoutKit/Blocks/AutocompleteBlock.swift`

Custom LayoutKit block (~250 lines):

**Block definition:**
- Conforms to `BlockWithTraits`, `LayoutCachingDefaultImpl`
- Properties: `textValue: Binding<String>`, `valueBinding: Binding<String>?`, `suggestions: [SuggestionItem]`, `hint`, `textTypo`, `hintTypo`, `suggestionTextColor`, `minQueryLength`, `maxVisibleSuggestions`, `dismissOnSelection`, `dismissOnBlur`, `dismissOnEmpty`, `textChangeActions`, `selectionActions`, `path`, `isFocused`
- `SuggestionItem` struct: `value: String`, `text: String?`, `secondaryText: String?`

**UIView rendering (`AutocompleteBlockView`):**
- Contains `UITextField` for text input
- Contains `UITableView` in a floating `UIView` for suggestions dropdown
- `UITextFieldDelegate` implementation:
  - `textFieldDidChangeSelection` → checks min_query_length, fires text_change_actions, shows/hides dropdown
  - `textFieldDidBeginEditing` → shows dropdown if conditions met
  - `textFieldDidEndEditing` → dismisses dropdown if dismiss_on_blur
- `UITableViewDataSource/Delegate`:
  - Cells render text + optional secondary_text
  - `didSelectRowAt` → sets text_variable, sets value_variable, fires selection_actions, dismisses per flags
- Auto-positioning: compares `frame.maxY` against `UIScreen.main.bounds.height` to decide above/below
- Dropdown constrained by `maxVisibleSuggestions * rowHeight`

### No Modifications Needed

The iOS architecture uses protocol extensions — `DivAutocomplete` (generated) automatically participates in the block modeling system once the extension file exists. No factory/registry modifications needed.

## Testing Strategy

### Android
- Unit tests for `DivAutocompleteBinder`: verify variable binding, action firing, suggestion parsing, dismiss behavior
- Unit tests for adapter: verify item rendering
- Integration test: verify view creation via `DivViewCreator`

### iOS
- Unit tests for `DivAutocompleteExtensions`: verify block creation with various property combinations
- Unit tests for `AutocompleteBlock`: verify layout traits and equality
- Snapshot tests: verify rendered appearance

### Both Platforms
- Regression test data: Create sample JSON in `test_data/` exercising all autocomplete properties

## Scope

This spec covers:
- Running api_generator for both platforms
- Android: View + Binder + Adapter + registration (3 new files, 2 modified)
- iOS: Extension + Block (2 new files, 0 modified)
- Web: Already complete (from 2026-03-28 spec)

This spec does not cover:
- Flutter client
- Server-side JSON builder updates
- Compose interop (Android Compose wrapper)
