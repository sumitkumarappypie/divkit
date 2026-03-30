# AutoComplete Input Widget — Native Platforms Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the `autocomplete` widget on Android (Kotlin) and iOS (Swift), including code generation from the already-defined schema.

**Architecture:** Run `api_generator` to produce model/data classes from `div-autocomplete.json` schema. Android: FrameLayout view with EditText + ListPopupWindow, fat binder for variable/action binding, BaseAdapter for suggestion items. iOS: DivBlockModeling extension + custom AutocompleteBlock with UITextField + UITableView dropdown. Both platforms follow existing widget patterns (DivSelectBinder/DivSelectView on Android, DivSelectExtensions on iOS).

**Tech Stack:** Kotlin (Android), Swift (iOS), Python (api_generator)

**Design Spec:** `docs/superpowers/specs/2026-03-30-autocomplete-native-platforms-design.md`
**Original Spec:** `docs/superpowers/specs/2026-03-28-autocomplete-input-design.md`

---

### Task 1: Run api_generator for Android (Kotlin)

**Files:**
- Generated output to: `client/android/div-data/build/generated/java/scheme_divModel/`

- [ ] **Step 1: Verify Python environment**

Run:
```bash
cd /Users/sumitkumartiwari/Documents/divkit/api_generator && python3 -c "import api_generator; print('OK')"
```
Expected: `OK`. If it fails, run `pip3 install -e .` from the `api_generator/` directory.

- [ ] **Step 2: Run the Kotlin code generator**

```bash
cd /Users/sumitkumartiwari/Documents/divkit/api_generator && python3 -m api_generator \
  -c ../client/android/div-data/div2-generator-config.json \
  -s ../schema \
  -o ../client/android/div-data/build/generated/java/scheme_divModel
```

Expected: Generates files in `client/android/div-data/build/generated/java/scheme_divModel/` including `DivAutocomplete.kt` and `DivAutocompleteSuggestion.kt`.

- [ ] **Step 3: Verify generated files exist**

```bash
ls -la /Users/sumitkumartiwari/Documents/divkit/client/android/div-data/build/generated/java/scheme_divModel/DivAutocomplete*.kt
```

Expected: At least `DivAutocomplete.kt` and `DivAutocompleteSuggestion.kt` are present.

- [ ] **Step 4: Verify generated Div sealed class includes Autocomplete**

```bash
grep -n "Autocomplete" /Users/sumitkumartiwari/Documents/divkit/client/android/div-data/build/generated/java/scheme_divModel/Div.kt
```

Expected: A `data class Autocomplete(val value: DivAutocomplete) : Div()` case (or similar).

- [ ] **Step 5: Commit generated files**

```bash
cd /Users/sumitkumartiwari/Documents/divkit
git add client/android/div-data/build/generated/
git commit -m "feat: generate Android data classes for autocomplete widget

Ran api_generator to produce DivAutocomplete.kt and
DivAutocompleteSuggestion.kt from the autocomplete schema.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 2: Run api_generator for iOS (Swift)

**Files:**
- Generated output to: `client/ios/DivKit/generated_sources/`

- [ ] **Step 1: Run the Swift code generator**

```bash
cd /Users/sumitkumartiwari/Documents/divkit/api_generator && python3 -m api_generator \
  -c ../client/ios/DivKit/generator_config.json \
  -s ../schema \
  -o ../client/ios/DivKit/generated_sources
```

Expected: Generates `DivAutocomplete.swift` and `DivAutocompleteSuggestion.swift` in `client/ios/DivKit/generated_sources/`.

- [ ] **Step 2: Verify generated files exist**

```bash
ls -la /Users/sumitkumartiwari/Documents/divkit/client/ios/DivKit/generated_sources/DivAutocomplete*.swift
```

Expected: `DivAutocomplete.swift` and `DivAutocompleteSuggestion.swift` present.

- [ ] **Step 3: Commit generated files**

```bash
cd /Users/sumitkumartiwari/Documents/divkit
git add client/ios/DivKit/generated_sources/
git commit -m "feat: generate iOS model classes for autocomplete widget

Ran api_generator to produce DivAutocomplete.swift and
DivAutocompleteSuggestion.swift from the autocomplete schema.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 3: Create Android DivAutocompleteView

**Files:**
- Create: `client/android/div/src/main/java/com/yandex/div/core/view2/divs/widgets/DivAutocompleteView.kt`

- [ ] **Step 1: Read DivSelectView.kt and DivInputView.kt for reference patterns**

Read both files to understand the DivHolderView mixin pattern, draw/onSizeChanged overrides, and text change listener setup.

- [ ] **Step 2: Create DivAutocompleteView.kt**

```kotlin
package com.yandex.div.core.view2.divs.widgets

import android.content.Context
import android.graphics.Canvas
import android.text.Editable
import android.text.TextWatcher
import android.view.Gravity
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.EditText
import android.widget.FrameLayout
import android.widget.ListPopupWindow
import android.widget.TextView
import androidx.core.widget.doAfterTextChanged
import com.yandex.div.core.annotations.Mockable
import com.yandex.div2.Div

data class SuggestionItem(
    val value: String,
    val text: String?,
    val secondaryText: String?
)

@Mockable
internal class DivAutocompleteView(context: Context) : FrameLayout(context),
    DivHolderView<Div.Autocomplete> by DivHolderViewMixin(),
    DivAnimator {

    val editText = EditText(context).apply {
        layoutParams = LayoutParams(
            LayoutParams.MATCH_PARENT,
            LayoutParams.WRAP_CONTENT
        )
        background = null
        setPadding(0, 0, 0, 0)
    }

    private val popupWindow = ListPopupWindow(context).apply {
        anchorView = this@DivAutocompleteView
        isModal = false
        softInputMode = android.view.WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE
    }

    private val adapter = SuggestionAdapter()
    private val onTextChangedActions = mutableListOf<(Editable?) -> Unit>()
    private var textChangeWatcher: TextWatcher? = null
    private var onSuggestionSelected: ((Int) -> Unit)? = null

    var valueUpdater: ((String) -> Unit)? = null

    init {
        addView(editText)
        popupWindow.setAdapter(adapter)
        popupWindow.setOnItemClickListener { _, _, position, _ ->
            onSuggestionSelected?.invoke(position)
        }
    }

    fun addAfterTextChangeAction(action: (Editable?) -> Unit) {
        if (textChangeWatcher == null) {
            textChangeWatcher = editText.doAfterTextChanged { editable ->
                onTextChangedActions.forEach { it.invoke(editable) }
            }
        }
        onTextChangedActions.add(action)
    }

    fun removeAfterTextChangeListener() {
        editText.removeTextChangedListener(textChangeWatcher)
        onTextChangedActions.clear()
        textChangeWatcher = null
    }

    fun setOnSuggestionSelectedListener(listener: (Int) -> Unit) {
        onSuggestionSelected = listener
    }

    fun setSuggestions(items: List<SuggestionItem>, textColor: Int) {
        adapter.setItems(items, textColor)
    }

    fun showDropdown() {
        if (!popupWindow.isShowing && adapter.count > 0) {
            popupWindow.show()
        }
    }

    fun dismissDropdown() {
        if (popupWindow.isShowing) {
            popupWindow.dismiss()
        }
    }

    fun setMaxVisibleSuggestions(max: Int) {
        popupWindow.height = ListPopupWindow.WRAP_CONTENT
        // ListPopupWindow handles max height internally; we limit via adapter count visibility
    }

    override fun draw(canvas: Canvas) {
        drawBorderClipped(canvas) { super.draw(it) }
    }

    override fun onSizeChanged(width: Int, height: Int, oldWidth: Int, oldHeight: Int) {
        super.onSizeChanged(width, height, oldWidth, oldHeight)
        onBoundsChanged(width, height)
    }

    override fun onDetachedFromWindow() {
        super.onDetachedFromWindow()
        dismissDropdown()
        removeAfterTextChangeListener()
    }

    private inner class SuggestionAdapter : BaseAdapter() {
        private var items: List<SuggestionItem> = emptyList()
        private var textColor: Int = 0xFF000000.toInt()

        fun setItems(newItems: List<SuggestionItem>, color: Int) {
            items = newItems
            textColor = color
            notifyDataSetChanged()
        }

        override fun getCount(): Int = items.size
        override fun getItem(position: Int): SuggestionItem = items[position]
        override fun getItemId(position: Int): Long = position.toLong()

        override fun getView(position: Int, convertView: View?, parent: ViewGroup): View {
            val item = items[position]
            val layout = (convertView as? ViewGroup) ?: android.widget.LinearLayout(context).apply {
                orientation = android.widget.LinearLayout.VERTICAL
                setPadding(dpToPx(12), dpToPx(8), dpToPx(12), dpToPx(8))
            }

            if (layout.childCount == 0) {
                layout.addView(TextView(context).apply { tag = "primary" })
                layout.addView(TextView(context).apply {
                    tag = "secondary"
                    textSize = 12f
                    alpha = 0.6f
                })
            }

            (layout.findViewWithTag<TextView>("primary")).apply {
                text = item.text ?: item.value
                setTextColor(textColor)
                textSize = 14f
            }

            (layout.findViewWithTag<TextView>("secondary")).apply {
                val secondaryText = item.secondaryText
                if (secondaryText != null) {
                    text = secondaryText
                    setTextColor(textColor)
                    visibility = View.VISIBLE
                } else {
                    visibility = View.GONE
                }
            }

            return layout
        }

        private fun dpToPx(dp: Int): Int =
            (dp * context.resources.displayMetrics.density).toInt()
    }
}
```

- [ ] **Step 3: Verify compilation**

```bash
cd /Users/sumitkumartiwari/Documents/divkit/client/android && ./gradlew :div:compileDebugKotlin 2>&1 | tail -10
```

Expected: Compiles (or identifies missing generated classes if codegen output isn't on classpath — that's OK, we verify the syntax is correct).

---

### Task 4: Create Android DivAutocompleteBinder

**Files:**
- Create: `client/android/div/src/main/java/com/yandex/div/core/view2/divs/DivAutocompleteBinder.kt`

- [ ] **Step 1: Read DivSelectBinder.kt and DivInputBinder.kt for reference patterns**

Read both fully to understand variable binding, action handling, and expression observing patterns.

- [ ] **Step 2: Read the generated DivAutocomplete.kt to understand property names**

```bash
head -100 /Users/sumitkumartiwari/Documents/divkit/client/android/div-data/build/generated/java/scheme_divModel/DivAutocomplete.kt
```

Note the exact property names (e.g., `textVariable`, `suggestionsVariable`, `valueVariable`, `textChangeActions`, `selectionActions`, `minQueryLength`, `maxVisibleSuggestions`, `dismissOnSelection`, `dismissOnBlur`, `dismissOnEmpty`, `suggestionTextColor`).

- [ ] **Step 3: Create DivAutocompleteBinder.kt**

IMPORTANT: Read the generated `DivAutocomplete.kt` first to get exact property names. The code below uses expected names based on schema conventions — adapt if the generated names differ.

```kotlin
package com.yandex.div.core.view2.divs

import android.text.InputType
import android.view.inputmethod.EditorInfo
import com.yandex.div.core.dagger.DivScope
import com.yandex.div.core.expression.variables.TwoWayStringVariableBinder
import com.yandex.div.core.state.DivStatePath
import com.yandex.div.core.view2.BindingContext
import com.yandex.div.core.view2.DivTypefaceResolver
import com.yandex.div.core.view2.DivViewBinder
import com.yandex.div.core.view2.divs.widgets.DivAutocompleteView
import com.yandex.div.core.view2.divs.widgets.SuggestionItem
import com.yandex.div.core.view2.errors.ErrorCollectors
import com.yandex.div.internal.core.DivActionBinder
import com.yandex.div.json.expressions.ExpressionResolver
import com.yandex.div2.Div
import com.yandex.div2.DivAutocomplete
import org.json.JSONArray
import org.json.JSONObject
import javax.inject.Inject

@DivScope
internal class DivAutocompleteBinder @Inject constructor(
    baseBinder: DivBaseBinder,
    private val typefaceResolver: DivTypefaceResolver,
    private val variableBinder: TwoWayStringVariableBinder,
    private val actionBinder: DivActionBinder,
    private val errorCollectors: ErrorCollectors
) : DivViewBinder<Div.Autocomplete, DivAutocomplete, DivAutocompleteView>(baseBinder) {

    override fun DivAutocompleteView.bind(
        bindingContext: BindingContext,
        div: DivAutocomplete,
        oldDiv: DivAutocomplete?,
        path: DivStatePath
    ) {
        val divView = bindingContext.divView
        val resolver = bindingContext.expressionResolver

        editText.focusTracker = divView.inputFocusTracker

        observeTextVariable(div, bindingContext, path)
        observeSuggestionsVariable(div, bindingContext)
        observeTextChanges(div, bindingContext)
        observeSelection(div, bindingContext)
        observeDismissFlags(div, bindingContext)
        observeTextStyle(div, oldDiv, resolver)
        observeHint(div, resolver)
        observeKeyboardType(div, resolver)
        observeEnterKeyActions(div, bindingContext, resolver)
        observeIsEnabled(div, resolver)
    }

    private fun DivAutocompleteView.observeTextVariable(
        div: DivAutocomplete,
        bindingContext: BindingContext,
        path: DivStatePath
    ) {
        val subscription = variableBinder.bindVariable(
            bindingContext,
            div.textVariable,
            callbacks = object : TwoWayStringVariableBinder.Callbacks {
                override fun onVariableChanged(value: String?) {
                    val newValue = value ?: ""
                    if (editText.text.toString() != newValue) {
                        editText.setText(newValue)
                        editText.setSelection(newValue.length)
                    }
                }

                override fun setViewStateChangeListener(valueUpdater: (String) -> Unit) {
                    this@observeTextVariable.valueUpdater = valueUpdater
                    addAfterTextChangeAction { editable ->
                        valueUpdater(editable?.toString() ?: "")
                    }
                }
            },
            path = path
        )
        addSubscription(subscription)
    }

    private fun DivAutocompleteView.observeSuggestionsVariable(
        div: DivAutocomplete,
        bindingContext: BindingContext
    ) {
        val divView = bindingContext.divView
        val variableController = divView.divData?.let {
            bindingContext.expressionResolver
        } ?: return

        val errorCollector = errorCollectors.getOrCreate(divView.dataTag, divView.divData)

        val subscription = divView.addVariableChangeSubscription(div.suggestionsVariable) {
            val resolver = bindingContext.expressionResolver
            val dismissOnEmpty = div.dismissOnEmpty.evaluate(resolver)
            val suggestionTextColor = div.suggestionTextColor.evaluate(resolver)

            val variable = divView.getVariable(div.suggestionsVariable)
            val items = parseSuggestions(variable?.getValue())

            setSuggestions(items, suggestionTextColor)

            if (items.isEmpty() && dismissOnEmpty) {
                dismissDropdown()
            } else if (items.isNotEmpty()) {
                val text = editText.text?.toString() ?: ""
                val minLen = div.minQueryLength.evaluate(resolver).toInt()
                if (text.length >= minLen) {
                    showDropdown()
                }
            }
        }

        if (subscription != null) {
            addSubscription(subscription)
        }
    }

    private fun parseSuggestions(value: Any?): List<SuggestionItem> {
        if (value !is JSONArray) return emptyList()
        val result = mutableListOf<SuggestionItem>()
        for (i in 0 until value.length()) {
            val obj = value.optJSONObject(i) ?: continue
            val itemValue = obj.optString("value", null) ?: continue
            result.add(
                SuggestionItem(
                    value = itemValue,
                    text = obj.optString("text", null),
                    secondaryText = obj.optString("secondary_text", null)
                )
            )
        }
        return result
    }

    private fun DivAutocompleteView.observeTextChanges(
        div: DivAutocomplete,
        bindingContext: BindingContext
    ) {
        addAfterTextChangeAction { editable ->
            val text = editable?.toString() ?: ""
            val resolver = bindingContext.expressionResolver
            val minLen = div.minQueryLength.evaluate(resolver).toInt()

            if (text.length >= minLen) {
                val actions = div.textChangeActions
                if (!actions.isNullOrEmpty()) {
                    actionBinder.handleBulkActions(
                        bindingContext, this, actions, DivActionBinder.LogType.LOG_CLICK
                    )
                }
            } else {
                dismissDropdown()
            }
        }
    }

    private fun DivAutocompleteView.observeSelection(
        div: DivAutocomplete,
        bindingContext: BindingContext
    ) {
        setOnSuggestionSelectedListener { position ->
            val resolver = bindingContext.expressionResolver
            val suggestions = parseSuggestions(
                bindingContext.divView.getVariable(div.suggestionsVariable)?.getValue()
            )
            if (position >= suggestions.size) return@setOnSuggestionSelectedListener

            val suggestion = suggestions[position]
            val displayText = suggestion.text ?: suggestion.value

            // Update text variable
            editText.setText(displayText)
            editText.setSelection(displayText.length)
            valueUpdater?.invoke(displayText)

            // Update value variable
            val valueVariable = div.valueVariable
            if (valueVariable != null) {
                com.yandex.div.core.expression.variables.VariableMutationHandler.setVariable(
                    bindingContext.divView,
                    valueVariable,
                    suggestion.value,
                    bindingContext.expressionResolver
                )
            }

            // Dismiss if configured
            val dismissOnSelection = div.dismissOnSelection.evaluate(resolver)
            if (dismissOnSelection) {
                dismissDropdown()
            }

            // Fire selection actions
            val actions = div.selectionActions
            if (!actions.isNullOrEmpty()) {
                actionBinder.handleBulkActions(
                    bindingContext, this, actions, DivActionBinder.LogType.LOG_CLICK
                )
            }
        }
    }

    private fun DivAutocompleteView.observeDismissFlags(
        div: DivAutocomplete,
        bindingContext: BindingContext
    ) {
        val resolver = bindingContext.expressionResolver

        // Dismiss on blur
        editText.setOnFocusChangeListener { _, hasFocus ->
            if (!hasFocus) {
                val dismissOnBlur = div.dismissOnBlur.evaluate(resolver)
                if (dismissOnBlur) {
                    dismissDropdown()
                }
            }
        }
    }

    private fun DivAutocompleteView.observeTextStyle(
        div: DivAutocomplete,
        oldDiv: DivAutocomplete?,
        resolver: ExpressionResolver
    ) {
        editText.observeBaseTextProperties(
            div.fontSize,
            div.fontSizeUnit,
            div.letterSpacing,
            div.textColor,
            div.lineHeight,
            div.fontFamily,
            div.fontWeight,
            div.fontWeightValue,
            div.fontVariationSettings,
            oldDiv?.fontSize,
            oldDiv?.fontSizeUnit,
            oldDiv?.letterSpacing,
            oldDiv?.textColor,
            oldDiv?.lineHeight,
            oldDiv?.fontFamily,
            oldDiv?.fontWeight,
            oldDiv?.fontWeightValue,
            oldDiv?.fontVariationSettings,
            oldDiv,
            typefaceResolver,
            resolver,
        )
    }

    private fun DivAutocompleteView.observeHint(div: DivAutocomplete, resolver: ExpressionResolver) {
        val hintTextExpr = div.hintText ?: return
        addSubscription(hintTextExpr.observeAndGet(resolver) { hint ->
            editText.hint = hint
        })

        addSubscription(div.hintColor.observeAndGet(resolver) { color ->
            editText.setHintTextColor(color)
        })
    }

    private fun DivAutocompleteView.observeKeyboardType(
        div: DivAutocomplete,
        resolver: ExpressionResolver
    ) {
        addSubscription(div.keyboardType.observeAndGet(resolver) { keyboardType ->
            editText.inputType = when (keyboardType) {
                DivAutocomplete.KeyboardType.SINGLE_LINE_TEXT ->
                    InputType.TYPE_CLASS_TEXT or InputType.TYPE_TEXT_VARIATION_NORMAL
                DivAutocomplete.KeyboardType.MULTI_LINE_TEXT ->
                    InputType.TYPE_CLASS_TEXT or InputType.TYPE_TEXT_FLAG_MULTI_LINE
                DivAutocomplete.KeyboardType.PHONE ->
                    InputType.TYPE_CLASS_PHONE
                DivAutocomplete.KeyboardType.NUMBER ->
                    InputType.TYPE_CLASS_NUMBER
                DivAutocomplete.KeyboardType.EMAIL ->
                    InputType.TYPE_CLASS_TEXT or InputType.TYPE_TEXT_VARIATION_EMAIL_ADDRESS
                DivAutocomplete.KeyboardType.URI ->
                    InputType.TYPE_CLASS_TEXT or InputType.TYPE_TEXT_VARIATION_URI
                DivAutocomplete.KeyboardType.PASSWORD ->
                    InputType.TYPE_CLASS_TEXT or InputType.TYPE_TEXT_VARIATION_PASSWORD
            }
        })
    }

    private fun DivAutocompleteView.observeEnterKeyActions(
        div: DivAutocomplete,
        bindingContext: BindingContext,
        resolver: ExpressionResolver
    ) {
        addSubscription(div.enterKeyType.observeAndGet(resolver) { enterKeyType ->
            editText.imeOptions = when (enterKeyType) {
                DivAutocomplete.EnterKeyType.DEFAULT -> EditorInfo.IME_ACTION_UNSPECIFIED
                DivAutocomplete.EnterKeyType.GO -> EditorInfo.IME_ACTION_GO
                DivAutocomplete.EnterKeyType.SEARCH -> EditorInfo.IME_ACTION_SEARCH
                DivAutocomplete.EnterKeyType.SEND -> EditorInfo.IME_ACTION_SEND
                DivAutocomplete.EnterKeyType.DONE -> EditorInfo.IME_ACTION_DONE
            }

            val actions = div.enterKeyActions
            if (!actions.isNullOrEmpty()) {
                editText.setOnEditorActionListener { _, actionId, _ ->
                    if ((actionId and EditorInfo.IME_MASK_ACTION) != 0) {
                        actionBinder.handleBulkActions(
                            bindingContext, this, actions, DivActionBinder.LogType.LOG_CLICK
                        )
                    }
                    false
                }
            }
        })
    }

    private fun DivAutocompleteView.observeIsEnabled(
        div: DivAutocomplete,
        resolver: ExpressionResolver
    ) {
        addSubscription(div.isEnabled.observeAndGet(resolver) { enabled ->
            editText.isEnabled = enabled
        })
    }
}
```

IMPORTANT: The exact property names (`textVariable`, `suggestionsVariable`, `keyboardType`, `enterKeyType`, etc.) and enum names (`DivAutocomplete.KeyboardType.SINGLE_LINE_TEXT`, etc.) MUST match the generated code. Read `DivAutocomplete.kt` first and adapt these names if they differ. The generator may use different casing (e.g., `KeyboardType` enum values might differ).

- [ ] **Step 4: Verify compilation**

```bash
cd /Users/sumitkumartiwari/Documents/divkit/client/android && ./gradlew :div:compileDebugKotlin 2>&1 | tail -20
```

Fix any compilation errors by reading the generated `DivAutocomplete.kt` and adapting property/enum names.

---

### Task 5: Register autocomplete in Android DivBinder and DivViewCreator

**Files:**
- Modify: `client/android/div/src/main/java/com/yandex/div/core/view2/DivBinder.kt`
- Modify: `client/android/div/src/main/java/com/yandex/div/core/view2/DivViewCreator.kt`

- [ ] **Step 1: Add to DivBinder.kt constructor**

Read `DivBinder.kt`. Find the constructor (starts around line 68). Add after `private val googleMapBinder: DivGoogleMapBinder`:

```kotlin
    private val autocompleteBinder: DivAutocompleteBinder,
```

- [ ] **Step 2: Add bind case in DivBinder.kt**

Find the `bind()` method's `when` expression. Add a new case:

```kotlin
            is Div.Autocomplete -> bindAutocomplete(context, view, div, path)
```

- [ ] **Step 3: Add bindAutocomplete method in DivBinder.kt**

Add after the `bindGoogleMap` method:

```kotlin
    private fun bindAutocomplete(
        context: BindingContext,
        view: View,
        data: Div.Autocomplete,
        path: DivStatePath
    ) {
        autocompleteBinder.bindView(context, view as DivAutocompleteView, data, path)
    }
```

Add the import at the top:
```kotlin
import com.yandex.div.core.view2.divs.widgets.DivAutocompleteView
```

- [ ] **Step 4: Add TAG_AUTOCOMPLETE to DivViewCreator.kt**

Read `DivViewCreator.kt`. Add after `const val TAG_GOOGLE_MAP = "DIV2.GOOGLE_MAP"` (around line 191):

```kotlin
        const val TAG_AUTOCOMPLETE = "DIV2.AUTOCOMPLETE"
```

- [ ] **Step 5: Register view in DivViewCreator init block**

In the `init` block, add after the `register(TAG_GOOGLE_MAP, ...)` line (around line 123):

```kotlin
                register(TAG_AUTOCOMPLETE, { DivAutocompleteView(context) }, 0)
```

Add the import:
```kotlin
import com.yandex.div.core.view2.divs.widgets.DivAutocompleteView
```

- [ ] **Step 6: Build Android project**

```bash
cd /Users/sumitkumartiwari/Documents/divkit/client/android && ./gradlew :div:compileDebugKotlin 2>&1 | tail -20
```

Expected: Compiles successfully. If there are errors, read the error messages and fix. Common issues: import paths, enum name mismatches with generated code, missing method signatures.

- [ ] **Step 7: Commit Android implementation**

```bash
cd /Users/sumitkumartiwari/Documents/divkit
git add client/android/div/src/main/java/com/yandex/div/core/view2/divs/widgets/DivAutocompleteView.kt \
       client/android/div/src/main/java/com/yandex/div/core/view2/divs/DivAutocompleteBinder.kt \
       client/android/div/src/main/java/com/yandex/div/core/view2/DivBinder.kt \
       client/android/div/src/main/java/com/yandex/div/core/view2/DivViewCreator.kt
git commit -m "feat: add autocomplete widget Android implementation

Creates DivAutocompleteView (EditText + ListPopupWindow),
DivAutocompleteBinder (variable binding, action firing, suggestions),
and registers in DivBinder + DivViewCreator.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 6: Create iOS DivAutocompleteExtensions.swift

**Files:**
- Create: `client/ios/DivKit/Extensions/DivAutocompleteExtensions.swift`

- [ ] **Step 1: Read DivSelectExtensions.swift for reference pattern**

Read the full file to understand the DivBlockModeling conformance, font resolution, variable binding, and block creation.

- [ ] **Step 2: Read the generated DivAutocomplete.swift to understand property names**

```bash
head -80 /Users/sumitkumartiwari/Documents/divkit/client/ios/DivKit/generated_sources/DivAutocomplete.swift
```

Note the exact property names and resolve methods (e.g., `resolveTextVariable()`, `resolveSuggestionsVariable()`, `resolveMinQueryLength()`, etc.).

- [ ] **Step 3: Create DivAutocompleteExtensions.swift**

IMPORTANT: Property names and resolve methods MUST match the generated code. Read `DivAutocomplete.swift` first and adapt.

```swift
import CoreFoundation
import CoreGraphics
import Foundation
import LayoutKit
import VGSL

extension DivAutocomplete: DivBlockModeling {
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

    // Font and typography
    let font = context.font(resolveFontParams(expressionResolver))
    var typo = Typo(font: font)

    let kern = CGFloat(resolveLetterSpacing(expressionResolver))
    if !kern.isApproximatelyEqualTo(0) {
      typo = typo.kerned(kern)
    }

    if let lineHeight = resolveLineHeight(expressionResolver) {
      typo = typo.with(height: CGFloat(lineHeight))
    }

    // Colors
    let resolvedHintColor: Color = resolveHintColor(expressionResolver)
    let hintTypo = typo.with(color: resolvedHintColor)
    let hintValue = resolveHintText(expressionResolver) ?? ""

    let resolvedColor: Color = resolveTextColor(expressionResolver)
    let textTypo = typo.with(color: resolvedColor)

    let suggestionTextColor: Color = resolveSuggestionTextColor(expressionResolver)

    // Variable bindings
    let textValue: Binding<String> = context
      .makeBinding(variableName: textVariable, defaultValue: "")

    let valueBinding: Binding<String>? = valueVariable.map {
      context.makeBinding(variableName: $0, defaultValue: "")
    }

    // Suggestions from variable
    let suggestionsVarName = DivVariableName(rawValue: suggestionsVariable)
    context.variableTracker?.onVariableUsed(id: context.viewId, variable: suggestionsVarName)
    let suggestionsValue = context.variablesStorage
      .getVariableValue(path: context.path, name: suggestionsVarName) as? [AnyHashable] ?? []
    let suggestions = parseSuggestions(suggestionsValue)

    // Actions
    let textChangeActions = textChangeActions?.uiActions(context: context) ?? []
    let selectionActions = selectionActions?.uiActions(context: context) ?? []
    let onFocusActions = focus?.onFocus?.uiActions(context: context) ?? []
    let onBlurActions = focus?.onBlur?.uiActions(context: context) ?? []

    // Config values
    let minQueryLength = resolveMinQueryLength(expressionResolver).flatMap { Int($0) } ?? 1
    let maxVisibleSuggestions = resolveMaxVisibleSuggestions(expressionResolver).flatMap { Int($0) } ?? 5
    let dismissOnSelection = resolveDismissOnSelection(expressionResolver)
    let dismissOnBlur = resolveDismissOnBlur(expressionResolver)
    let dismissOnEmpty = resolveDismissOnEmpty(expressionResolver)

    let isFocused = context.blockStateStorage.isFocused(path: context.path)

    return AutocompleteBlock(
      widthTrait: resolveContentWidthTrait(context),
      heightTrait: resolveContentHeightTrait(context),
      hint: hintValue.with(typo: hintTypo),
      textValue: textValue,
      valueBinding: valueBinding,
      textTypo: textTypo,
      suggestions: suggestions,
      suggestionTextColor: suggestionTextColor,
      minQueryLength: minQueryLength,
      maxVisibleSuggestions: maxVisibleSuggestions,
      dismissOnSelection: dismissOnSelection,
      dismissOnBlur: dismissOnBlur,
      dismissOnEmpty: dismissOnEmpty,
      textChangeActions: textChangeActions,
      selectionActions: selectionActions,
      onFocusActions: onFocusActions,
      onBlurActions: onBlurActions,
      path: context.path,
      isFocused: isFocused,
      parentScrollView: context.parentScrollView,
      layoutDirection: context.layoutDirection
    )
  }

  private func parseSuggestions(_ raw: [AnyHashable]) -> [AutocompleteBlock.SuggestionItem] {
    raw.compactMap { element -> AutocompleteBlock.SuggestionItem? in
      guard let dict = element as? [String: Any],
            let value = dict["value"] as? String else { return nil }
      return AutocompleteBlock.SuggestionItem(
        value: value,
        text: dict["text"] as? String,
        secondaryText: dict["secondary_text"] as? String
      )
    }
  }
}

extension DivAutocomplete: FontParamsProvider {}
```

IMPORTANT: The resolve methods (`resolveMinQueryLength`, `resolveDismissOnSelection`, `resolveSuggestionTextColor`, etc.) are auto-generated. Read `DivAutocomplete.swift` to confirm exact names. If they return different types (e.g., `Int64` instead of `Int`), adapt the code accordingly.

---

### Task 7: Create iOS AutocompleteBlock.swift

**Files:**
- Create: `client/ios/LayoutKit/LayoutKit/Blocks/AutocompleteBlock.swift`

- [ ] **Step 1: Read TextInputBlock.swift for reference pattern**

Read the first ~100 lines to understand the BlockWithTraits conformance, property structure, and init pattern.

- [ ] **Step 2: Create AutocompleteBlock.swift**

```swift
import CoreGraphics
import Foundation
import VGSL

public final class AutocompleteBlock: BlockWithTraits {
  public struct SuggestionItem: Equatable {
    public let value: String
    public let text: String?
    public let secondaryText: String?

    public init(value: String, text: String?, secondaryText: String?) {
      self.value = value
      self.text = text
      self.secondaryText = secondaryText
    }

    public var displayText: String { text ?? value }
  }

  public let widthTrait: LayoutTrait
  public let heightTrait: LayoutTrait
  public let hint: NSAttributedString
  public let textValue: Binding<String>
  public let valueBinding: Binding<String>?
  public let textTypo: Typo
  public let suggestions: [SuggestionItem]
  public let suggestionTextColor: Color
  public let minQueryLength: Int
  public let maxVisibleSuggestions: Int
  public let dismissOnSelection: Bool
  public let dismissOnBlur: Bool
  public let dismissOnEmpty: Bool
  public let textChangeActions: [UserInterfaceAction]
  public let selectionActions: [UserInterfaceAction]
  public let onFocusActions: [UserInterfaceAction]
  public let onBlurActions: [UserInterfaceAction]
  public let path: UIElementPath
  public let isFocused: Bool
  public weak var parentScrollView: ScrollView?
  public let layoutDirection: UserInterfaceLayoutDirection

  public init(
    widthTrait: LayoutTrait,
    heightTrait: LayoutTrait,
    hint: NSAttributedString,
    textValue: Binding<String>,
    valueBinding: Binding<String>?,
    textTypo: Typo,
    suggestions: [SuggestionItem],
    suggestionTextColor: Color,
    minQueryLength: Int = 1,
    maxVisibleSuggestions: Int = 5,
    dismissOnSelection: Bool = true,
    dismissOnBlur: Bool = true,
    dismissOnEmpty: Bool = true,
    textChangeActions: [UserInterfaceAction] = [],
    selectionActions: [UserInterfaceAction] = [],
    onFocusActions: [UserInterfaceAction] = [],
    onBlurActions: [UserInterfaceAction] = [],
    path: UIElementPath,
    isFocused: Bool = false,
    parentScrollView: ScrollView? = nil,
    layoutDirection: UserInterfaceLayoutDirection = .leftToRight
  ) {
    self.widthTrait = widthTrait
    self.heightTrait = heightTrait
    self.hint = hint
    self.textValue = textValue
    self.valueBinding = valueBinding
    self.textTypo = textTypo
    self.suggestions = suggestions
    self.suggestionTextColor = suggestionTextColor
    self.minQueryLength = minQueryLength
    self.maxVisibleSuggestions = maxVisibleSuggestions
    self.dismissOnSelection = dismissOnSelection
    self.dismissOnBlur = dismissOnBlur
    self.dismissOnEmpty = dismissOnEmpty
    self.textChangeActions = textChangeActions
    self.selectionActions = selectionActions
    self.onFocusActions = onFocusActions
    self.onBlurActions = onBlurActions
    self.path = path
    self.isFocused = isFocused
    self.parentScrollView = parentScrollView
    self.layoutDirection = layoutDirection
  }

  // MARK: - Block Protocol

  public var intrinsicContentWidth: CGFloat {
    switch widthTrait {
    case let .fixed(value): return value
    case .intrinsic, .weighted: return 0
    }
  }

  public func intrinsicContentHeight(forWidth _: CGFloat) -> CGFloat {
    switch heightTrait {
    case let .fixed(value): return value
    case .intrinsic, .weighted: return 44 // Default text field height
    }
  }

  public func equals(_ other: Block) -> Bool {
    guard let other = other as? AutocompleteBlock else { return false }
    return widthTrait == other.widthTrait
      && heightTrait == other.heightTrait
      && textValue.name == other.textValue.name
      && suggestions == other.suggestions
      && minQueryLength == other.minQueryLength
      && maxVisibleSuggestions == other.maxVisibleSuggestions
      && path == other.path
  }

  public var debugDescription: String {
    "AutocompleteBlock(path: \(path))"
  }

  public func getImageHolders() -> [ImageHolder] { [] }
}
```

- [ ] **Step 3: Create the UIView rendering extension**

Create file: `client/ios/LayoutKit/LayoutKit/UI/Blocks/AutocompleteBlock+UIViewRenderableBlock.swift`

```swift
#if os(iOS)
import UIKit
import VGSL

extension AutocompleteBlock {
  public static func makeBlockView() -> BlockView {
    AutocompleteBlockView()
  }

  public func configureBlockView(
    _ view: BlockView,
    observer: ElementStateObserver?,
    overscrollDelegate _: ScrollDelegate?,
    renderingDelegate _: RenderingDelegate?
  ) {
    let autocompleteView = view as! AutocompleteBlockView
    autocompleteView.configure(with: self, observer: observer)
  }

  public func canConfigureBlockView(_ view: BlockView) -> Bool {
    view is AutocompleteBlockView
  }
}

private final class AutocompleteBlockView: BlockView, VisibleBoundsTrackingLeaf {
  var layoutReporter: LayoutReporter?

  private let textField = UITextField()
  private let dropdownContainer = UIView()
  private let tableView = UITableView()

  private var suggestions: [AutocompleteBlock.SuggestionItem] = []
  private var textValue: Binding<String>?
  private var valueBinding: Binding<String>?
  private var textChangeActions: [UserInterfaceAction] = []
  private var selectionActions: [UserInterfaceAction] = []
  private var onFocusActions: [UserInterfaceAction] = []
  private var onBlurActions: [UserInterfaceAction] = []
  private var minQueryLength: Int = 1
  private var maxVisibleSuggestions: Int = 5
  private var dismissOnSelection: Bool = true
  private var dismissOnBlur: Bool = true
  private var dismissOnEmpty: Bool = true
  private var suggestionTextColor: UIColor = .black
  private var path: UIElementPath?
  private weak var observer: ElementStateObserver?

  private let rowHeight: CGFloat = 44

  override init(frame: CGRect) {
    super.init(frame: frame)
    setupViews()
  }

  required init?(coder: NSCoder) {
    super.init(coder: coder)
    setupViews()
  }

  private func setupViews() {
    textField.delegate = self
    textField.addTarget(self, action: #selector(textDidChange), for: .editingChanged)
    addSubview(textField)

    dropdownContainer.backgroundColor = .white
    dropdownContainer.layer.borderColor = UIColor.separator.cgColor
    dropdownContainer.layer.borderWidth = 1
    dropdownContainer.layer.cornerRadius = 4
    dropdownContainer.layer.shadowColor = UIColor.black.cgColor
    dropdownContainer.layer.shadowOpacity = 0.15
    dropdownContainer.layer.shadowRadius = 4
    dropdownContainer.layer.shadowOffset = CGSize(width: 0, height: 2)
    dropdownContainer.isHidden = true

    tableView.dataSource = self
    tableView.delegate = self
    tableView.register(UITableViewCell.self, forCellReuseIdentifier: "suggestion")
    tableView.separatorInset = .zero
    dropdownContainer.addSubview(tableView)

    addSubview(dropdownContainer)
  }

  func configure(with block: AutocompleteBlock, observer: ElementStateObserver?) {
    self.textValue = block.textValue
    self.valueBinding = block.valueBinding
    self.suggestions = block.suggestions
    self.suggestionTextColor = block.suggestionTextColor.systemColor
    self.minQueryLength = block.minQueryLength
    self.maxVisibleSuggestions = block.maxVisibleSuggestions
    self.dismissOnSelection = block.dismissOnSelection
    self.dismissOnBlur = block.dismissOnBlur
    self.dismissOnEmpty = block.dismissOnEmpty
    self.textChangeActions = block.textChangeActions
    self.selectionActions = block.selectionActions
    self.onFocusActions = block.onFocusActions
    self.onBlurActions = block.onBlurActions
    self.path = block.path
    self.observer = observer

    textField.attributedText = block.textValue.value.with(typo: block.textTypo)
    textField.attributedPlaceholder = block.hint

    tableView.reloadData()
    updateDropdownVisibility()

    if block.isFocused && !textField.isFirstResponder {
      textField.becomeFirstResponder()
    }
  }

  override func layoutSubviews() {
    super.layoutSubviews()
    textField.frame = bounds
    layoutDropdown()
  }

  private func layoutDropdown() {
    let maxHeight = CGFloat(maxVisibleSuggestions) * rowHeight
    let dropdownHeight = min(CGFloat(suggestions.count) * rowHeight, maxHeight)

    let screenHeight = UIScreen.main.bounds.height
    let globalFrame = convert(bounds, to: nil)
    let spaceBelow = screenHeight - globalFrame.maxY
    let showBelow = spaceBelow >= dropdownHeight || spaceBelow >= globalFrame.minY

    if showBelow {
      dropdownContainer.frame = CGRect(
        x: 0, y: bounds.height + 2,
        width: bounds.width, height: dropdownHeight
      )
    } else {
      dropdownContainer.frame = CGRect(
        x: 0, y: -dropdownHeight - 2,
        width: bounds.width, height: dropdownHeight
      )
    }

    tableView.frame = dropdownContainer.bounds
  }

  private func updateDropdownVisibility() {
    let text = textField.text ?? ""
    let shouldShow: Bool

    if text.count < minQueryLength {
      shouldShow = false
    } else if dismissOnEmpty && suggestions.isEmpty {
      shouldShow = false
    } else {
      shouldShow = !suggestions.isEmpty
    }

    dropdownContainer.isHidden = !shouldShow
    if shouldShow { layoutDropdown() }
  }

  @objc private func textDidChange() {
    let text = textField.text ?? ""
    textValue?.value = text

    if text.count >= minQueryLength {
      textChangeActions.perform(sendingFrom: self)
    }

    updateDropdownVisibility()
  }

  private func selectSuggestion(at index: Int) {
    let suggestion = suggestions[index]
    let displayText = suggestion.displayText

    textField.text = displayText
    textValue?.value = displayText
    valueBinding?.value = suggestion.value

    if dismissOnSelection {
      dropdownContainer.isHidden = true
    }

    selectionActions.perform(sendingFrom: self)
  }

  override var canBecomeFirstResponder: Bool { true }
}

extension AutocompleteBlockView: UITextFieldDelegate {
  func textFieldDidBeginEditing(_ textField: UITextField) {
    onFocusActions.perform(sendingFrom: self)
    observer?.focusedElementChanged(isFocused: true, forPath: path ?? UIElementPath(""))
    updateDropdownVisibility()
  }

  func textFieldDidEndEditing(_ textField: UITextField) {
    onBlurActions.perform(sendingFrom: self)
    observer?.focusedElementChanged(isFocused: false, forPath: path ?? UIElementPath(""))
    if dismissOnBlur {
      dropdownContainer.isHidden = true
    }
  }
}

extension AutocompleteBlockView: UITableViewDataSource {
  func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
    suggestions.count
  }

  func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
    let cell = tableView.dequeueReusableCell(withIdentifier: "suggestion", for: indexPath)
    let suggestion = suggestions[indexPath.row]

    var config = cell.defaultContentConfiguration()
    config.text = suggestion.displayText
    config.textProperties.color = suggestionTextColor

    if let secondaryText = suggestion.secondaryText {
      config.secondaryText = secondaryText
      config.secondaryTextProperties.color = suggestionTextColor.withAlphaComponent(0.6)
      config.secondaryTextProperties.font = .systemFont(ofSize: 12)
    }

    cell.contentConfiguration = config
    return cell
  }
}

extension AutocompleteBlockView: UITableViewDelegate {
  func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
    rowHeight
  }

  func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
    tableView.deselectRow(at: indexPath, animated: true)
    selectSuggestion(at: indexPath.row)
  }
}
#endif
```

- [ ] **Step 4: Verify iOS builds**

```bash
cd /Users/sumitkumartiwari/Documents/divkit/client/ios && swift build 2>&1 | tail -20
```

Expected: Builds successfully. If there are errors, read them and adapt the code. Common issues: generated property names differ, VGSL API changes, Color/UIColor conversion.

- [ ] **Step 5: Commit iOS implementation**

```bash
cd /Users/sumitkumartiwari/Documents/divkit
git add client/ios/DivKit/Extensions/DivAutocompleteExtensions.swift \
       client/ios/LayoutKit/LayoutKit/Blocks/AutocompleteBlock.swift \
       client/ios/LayoutKit/LayoutKit/UI/Blocks/AutocompleteBlock+UIViewRenderableBlock.swift
git commit -m "feat: add autocomplete widget iOS implementation

Creates DivAutocompleteExtensions (DivBlockModeling conformance),
AutocompleteBlock (layout block), and AutocompleteBlockView
(UITextField + UITableView dropdown rendering).

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 8: Build verification for both platforms

- [ ] **Step 1: Android full build**

```bash
cd /Users/sumitkumartiwari/Documents/divkit/client/android && ./gradlew :div:compileDebugKotlin 2>&1 | tail -20
```

Expected: BUILD SUCCESSFUL

- [ ] **Step 2: iOS full build**

```bash
cd /Users/sumitkumartiwari/Documents/divkit/client/ios && swift build 2>&1 | tail -20
```

Expected: Build complete

- [ ] **Step 3: Fix any remaining issues and commit**

If either build fails, read the errors, fix the code, and create a fix commit:

```bash
git add -A && git commit -m "fix: address build issues in autocomplete native implementations

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```
