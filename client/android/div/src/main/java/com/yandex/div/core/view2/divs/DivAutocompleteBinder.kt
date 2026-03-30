package com.yandex.div.core.view2.divs

import android.text.InputType
import android.view.inputmethod.EditorInfo
import android.widget.TextView
import com.yandex.div.core.dagger.DivScope
import com.yandex.div.core.expression.local.variableController
import com.yandex.div.core.expression.variables.TwoWayStringVariableBinder
import com.yandex.div.core.state.DivStatePath
import com.yandex.div.core.util.toIntSafely
import com.yandex.div.core.view2.BindingContext
import com.yandex.div.core.view2.DivTypefaceResolver
import com.yandex.div.core.view2.DivViewBinder
import com.yandex.div.core.view2.divs.DivActionBinder.LogType.Companion.LOG_CLICK
import com.yandex.div.core.view2.divs.DivActionBinder.LogType.Companion.LOG_ENTER
import com.yandex.div.core.view2.divs.widgets.DivAutocompleteView
import com.yandex.div.core.view2.errors.ErrorCollectors
import com.yandex.div.data.Variable
import com.yandex.div.json.expressions.ExpressionResolver
import com.yandex.div2.Div
import com.yandex.div2.DivAutocomplete
import com.yandex.div2.DivAutocompleteSuggestion
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
        val expressionResolver = bindingContext.expressionResolver

        editText.textAlignment = TextView.TEXT_ALIGNMENT_VIEW_START

        observeTextVariable(div, bindingContext, path)
        observeSuggestionsVariable(div, bindingContext)
        observeTextChanges(div, bindingContext, expressionResolver)
        observeSelection(div, bindingContext, expressionResolver)
        observeDismissFlags(div, expressionResolver)

        observeBaseTextProperties(div, oldDiv, expressionResolver)
        observeHintText(div, expressionResolver)
        observeHintColor(div, expressionResolver)
        observeHighlightColor(div, expressionResolver)
        observeKeyboardType(div, expressionResolver)
        observeEnterKeyActions(div, bindingContext, expressionResolver)
        observeIsEnabled(div, expressionResolver)
        observeSuggestionTextColor(div, expressionResolver)
        observeMaxVisibleSuggestions(div, expressionResolver)
        observeSelectAllOnFocus(div, expressionResolver)
    }

    private fun DivAutocompleteView.observeTextVariable(
        div: DivAutocomplete,
        bindingContext: BindingContext,
        path: DivStatePath
    ) {
        removeAfterTextChangeListener()

        val callbacks = object : TwoWayStringVariableBinder.Callbacks {
            override fun onVariableChanged(value: String?) {
                val currentText = editText.text?.toString() ?: ""
                if (currentText != value) {
                    editText.setText(value ?: "")
                    editText.setSelection(editText.text?.length ?: 0)
                }
            }

            override fun setViewStateChangeListener(valueUpdater: (String) -> Unit) {
                addAfterTextChangeAction { editable ->
                    valueUpdater(editable?.toString() ?: "")
                }
            }
        }

        val subscription = variableBinder.bindVariable(
            bindingContext,
            div.textVariable,
            callbacks,
            path
        )
        addSubscription(subscription)
    }

    private fun DivAutocompleteView.observeSuggestionsVariable(
        div: DivAutocomplete,
        bindingContext: BindingContext
    ) {
        val variableController = bindingContext.expressionResolver.variableController ?: return
        val divView = bindingContext.divView
        val data = divView.divData ?: return
        val errorCollector = errorCollectors.getOrCreate(divView.dataTag, data)

        val subscription = variableController.subscribeToVariableChange(
            div.suggestionsVariable,
            errorCollector,
            invokeOnSubscription = true
        ) { variable: Variable ->
            val value = variable.getValue() as? String ?: return@subscribeToVariableChange
            val items = parseSuggestions(value)
            setSuggestions(items)
        }
        addSubscription(subscription)
    }

    private fun parseSuggestions(jsonString: String): List<DivAutocompleteView.SuggestionItem> {
        return try {
            val array = JSONArray(jsonString)
            (0 until array.length()).mapNotNull { i ->
                val obj = array.optJSONObject(i) ?: run {
                    // Support simple string array
                    val str = array.optString(i) ?: return@mapNotNull null
                    return@mapNotNull DivAutocompleteView.SuggestionItem(
                        value = str,
                        text = null,
                        secondaryText = null
                    )
                }
                val itemValue = obj.optString("value") ?: return@mapNotNull null
                DivAutocompleteView.SuggestionItem(
                    value = itemValue,
                    text = obj.optString("text", null),
                    secondaryText = obj.optString("secondary_text", null)
                )
            }
        } catch (_: Exception) {
            emptyList()
        }
    }

    private fun DivAutocompleteView.observeTextChanges(
        div: DivAutocomplete,
        bindingContext: BindingContext,
        resolver: ExpressionResolver
    ) {
        val actions = div.textChangeActions ?: return

        addAfterTextChangeAction { editable ->
            val text = editable?.toString() ?: ""
            val minLen = div.minQueryLength.evaluate(resolver).toIntSafely()
            if (text.length >= minLen) {
                actionBinder.handleBulkActions(bindingContext, this, actions, LOG_CLICK)
            }
        }
    }

    private fun DivAutocompleteView.observeSelection(
        div: DivAutocomplete,
        bindingContext: BindingContext,
        resolver: ExpressionResolver
    ) {
        setOnSuggestionSelectedListener { item ->
            // Set value_variable if present
            div.valueVariable?.let { valueVar ->
                val variableController = bindingContext.expressionResolver.variableController
                variableController?.let {
                    com.yandex.div.internal.core.VariableMutationHandler.setVariable(
                        bindingContext.divView,
                        valueVar,
                        item.value,
                        bindingContext.expressionResolver
                    )
                }
            }

            // Fire selection actions
            div.selectionActions?.let { actions ->
                actionBinder.handleBulkActions(bindingContext, this, actions, LOG_CLICK)
            }

            // Dismiss if configured
            if (div.dismissOnSelection.evaluate(resolver)) {
                dismissDropdown()
            }
        }
    }

    private fun DivAutocompleteView.observeDismissFlags(
        div: DivAutocomplete,
        resolver: ExpressionResolver
    ) {
        // Dismiss on empty: hide popup when text becomes empty
        addAfterTextChangeAction { editable ->
            val text = editable?.toString() ?: ""
            if (text.isEmpty() && div.dismissOnEmpty.evaluate(resolver)) {
                dismissDropdown()
            } else if (text.length >= div.minQueryLength.evaluate(resolver).toIntSafely()) {
                showDropdown()
            }
        }

        // Dismiss on blur: hide popup when focus is lost
        editText.setOnFocusChangeListener { _, hasFocus ->
            if (!hasFocus && div.dismissOnBlur.evaluate(resolver)) {
                dismissDropdown()
            }
        }
    }

    private fun DivAutocompleteView.observeBaseTextProperties(
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

    private fun DivAutocompleteView.observeHintText(
        div: DivAutocomplete,
        resolver: ExpressionResolver
    ) {
        val hintTextExpr = div.hintText ?: return
        addSubscription(hintTextExpr.observeAndGet(resolver) { hint ->
            editText.hint = hint
        })
    }

    private fun DivAutocompleteView.observeHintColor(
        div: DivAutocomplete,
        resolver: ExpressionResolver
    ) {
        addSubscription(div.hintColor.observeAndGet(resolver) { hintColor ->
            editText.setHintTextColor(hintColor)
        })
    }

    private fun DivAutocompleteView.observeHighlightColor(
        div: DivAutocomplete,
        resolver: ExpressionResolver
    ) {
        val highlightColorExpr = div.highlightColor ?: return
        val callback = { _: Any -> editText.highlightColor = highlightColorExpr.evaluate(resolver) }
        addSubscription(highlightColorExpr.observeAndGet(resolver, callback))
    }

    private fun DivAutocompleteView.observeKeyboardType(
        div: DivAutocomplete,
        resolver: ExpressionResolver
    ) {
        val callback = { _: Any ->
            val type = div.keyboardType.evaluate(resolver)
            editText.inputType = getKeyboardType(type)
            editText.setHorizontallyScrolling(type != DivAutocomplete.KeyboardType.MULTI_LINE_TEXT)
        }
        addSubscription(div.keyboardType.observeAndGet(resolver, callback))
    }

    private fun getKeyboardType(type: DivAutocomplete.KeyboardType): Int {
        return when (type) {
            DivAutocomplete.KeyboardType.SINGLE_LINE_TEXT -> InputType.TYPE_CLASS_TEXT
            DivAutocomplete.KeyboardType.MULTI_LINE_TEXT ->
                InputType.TYPE_CLASS_TEXT or InputType.TYPE_TEXT_FLAG_MULTI_LINE
            DivAutocomplete.KeyboardType.EMAIL ->
                InputType.TYPE_CLASS_TEXT or InputType.TYPE_TEXT_VARIATION_EMAIL_ADDRESS
            DivAutocomplete.KeyboardType.URI ->
                InputType.TYPE_CLASS_TEXT or InputType.TYPE_TEXT_VARIATION_URI
            DivAutocomplete.KeyboardType.NUMBER ->
                InputType.TYPE_CLASS_NUMBER or InputType.TYPE_NUMBER_FLAG_DECIMAL or InputType.TYPE_NUMBER_FLAG_SIGNED
            DivAutocomplete.KeyboardType.PHONE -> InputType.TYPE_CLASS_PHONE
            DivAutocomplete.KeyboardType.PASSWORD ->
                InputType.TYPE_CLASS_TEXT or InputType.TYPE_TEXT_VARIATION_PASSWORD
        }
    }

    private fun DivAutocompleteView.observeEnterKeyActions(
        div: DivAutocomplete,
        bindingContext: BindingContext,
        resolver: ExpressionResolver
    ) {
        val callback = { _: Any ->
            val enterKeyType = div.enterKeyType.evaluate(resolver)
            editText.imeOptions = getImeAction(enterKeyType)

            val actions = div.enterKeyActions
            if (!actions.isNullOrEmpty()) {
                editText.setOnEditorActionListener { _, actionId, _ ->
                    if ((actionId and EditorInfo.IME_MASK_ACTION) != 0) {
                        actionBinder.handleBulkActions(bindingContext, this, actions, LOG_ENTER)
                    }
                    false
                }
            } else {
                editText.setOnEditorActionListener(null)
            }
        }
        addSubscription(div.enterKeyType.observeAndGet(resolver, callback))
    }

    private fun getImeAction(type: DivAutocomplete.EnterKeyType): Int {
        return when (type) {
            DivAutocomplete.EnterKeyType.DEFAULT -> EditorInfo.IME_ACTION_UNSPECIFIED
            DivAutocomplete.EnterKeyType.SEND -> EditorInfo.IME_ACTION_SEND
            DivAutocomplete.EnterKeyType.DONE -> EditorInfo.IME_ACTION_DONE
            DivAutocomplete.EnterKeyType.SEARCH -> EditorInfo.IME_ACTION_SEARCH
            DivAutocomplete.EnterKeyType.GO -> EditorInfo.IME_ACTION_GO
        }
    }

    private fun DivAutocompleteView.observeIsEnabled(
        div: DivAutocomplete,
        resolver: ExpressionResolver
    ) {
        val callback = { isEnabled: Boolean ->
            editText.enabled = isEnabled
        }
        addSubscription(div.isEnabled.observeAndGet(resolver, callback))
    }

    private fun DivAutocompleteView.observeSuggestionTextColor(
        div: DivAutocomplete,
        resolver: ExpressionResolver
    ) {
        addSubscription(div.suggestionTextColor.observeAndGet(resolver) { color ->
            setSuggestionTextColor(color)
        })
    }

    private fun DivAutocompleteView.observeMaxVisibleSuggestions(
        div: DivAutocomplete,
        resolver: ExpressionResolver
    ) {
        addSubscription(div.maxVisibleSuggestions.observeAndGet(resolver) { max ->
            setMaxVisibleSuggestions(max.toIntSafely())
        })
    }

    private fun DivAutocompleteView.observeSelectAllOnFocus(
        div: DivAutocomplete,
        resolver: ExpressionResolver
    ) {
        val callback = { _: Any -> editText.setSelectAllOnFocus(div.selectAllOnFocus.evaluate(resolver)) }
        addSubscription(div.selectAllOnFocus.observeAndGet(resolver, callback))
    }
}
