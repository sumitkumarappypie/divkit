package com.yandex.div.core.view2.divs

import com.yandex.div.core.dagger.DivScope
import com.yandex.div.core.expression.variables.TwoWayStringVariableBinder
import com.yandex.div.core.state.DivStatePath
import com.yandex.div.core.view2.BindingContext
import com.yandex.div.core.view2.DivTypefaceResolver
import com.yandex.div.core.view2.DivViewBinder
import com.yandex.div.core.view2.divs.widgets.DivRadioView
import com.yandex.div.core.view2.getTypeface
import com.yandex.div.json.expressions.ExpressionResolver
import com.yandex.div.json.expressions.equalsToConstant
import com.yandex.div.json.expressions.isConstant
import com.yandex.div.json.expressions.isConstantOrNull
import com.yandex.div2.Div
import com.yandex.div2.DivRadio
import javax.inject.Inject

@DivScope
internal class DivRadioBinder @Inject constructor(
    baseBinder: DivBaseBinder,
    private val typefaceResolver: DivTypefaceResolver,
    private val variableBinder: TwoWayStringVariableBinder
) : DivViewBinder<Div.Radio, DivRadio, DivRadioView>(baseBinder) {

    override fun DivRadioView.bind(
        bindingContext: BindingContext,
        div: DivRadio,
        oldDiv: DivRadio?,
        path: DivStatePath
    ) {
        val resolver = bindingContext.expressionResolver

        bindOptions(div, oldDiv, resolver)
        bindIsEnabled(div, oldDiv, resolver)
        bindSelectedColor(div, oldDiv, resolver)
        bindDefaultColor(div, oldDiv, resolver)
        bindTextColor(div, oldDiv, resolver)
        bindTextSize(div, oldDiv, resolver)
        bindTypeface(div, oldDiv, resolver)

        observeVariable(div, bindingContext, path)
    }

    private fun DivRadioView.bindOptions(div: DivRadio, oldDiv: DivRadio?, resolver: ExpressionResolver) {
        val options = div.options.map { option ->
            val value = option.value.evaluate(resolver)
            val text = option.text?.evaluate(resolver) ?: value
            value to text
        }
        val spacing = div.itemSpacing.evaluate(resolver).dpToPx(resources.displayMetrics)
        val isHorizontal = div.orientation.evaluate(resolver) == DivRadio.Orientation.HORIZONTAL
        setOptions(options, spacing, isHorizontal)
    }

    private fun DivRadioView.bindIsEnabled(div: DivRadio, oldDiv: DivRadio?, resolver: ExpressionResolver) {
        if (div.isEnabled.equalsToConstant(oldDiv?.isEnabled)) {
            return
        }
        isEnabled = div.isEnabled.evaluate(resolver)
        if (div.isEnabled.isConstant()) {
            return
        }
        val callback = { _: Any -> isEnabled = div.isEnabled.evaluate(resolver) }
        addSubscription(div.isEnabled.observe(resolver, callback))
    }

    private fun DivRadioView.bindSelectedColor(div: DivRadio, oldDiv: DivRadio?, resolver: ExpressionResolver) {
        if (div.selectedColor.equalsToConstant(oldDiv?.selectedColor)) {
            return
        }
        selectedColor = div.selectedColor?.evaluate(resolver)
        if (div.selectedColor.isConstantOrNull()) {
            return
        }
        val callback = { _: Any -> selectedColor = div.selectedColor?.evaluate(resolver) }
        addSubscription(div.selectedColor?.observe(resolver, callback))
    }

    private fun DivRadioView.bindDefaultColor(div: DivRadio, oldDiv: DivRadio?, resolver: ExpressionResolver) {
        if (div.defaultColor.equalsToConstant(oldDiv?.defaultColor)) {
            return
        }
        defaultColor = div.defaultColor?.evaluate(resolver)
        if (div.defaultColor.isConstantOrNull()) {
            return
        }
        val callback = { _: Any -> defaultColor = div.defaultColor?.evaluate(resolver) }
        addSubscription(div.defaultColor?.observe(resolver, callback))
    }

    private fun DivRadioView.bindTextColor(div: DivRadio, oldDiv: DivRadio?, resolver: ExpressionResolver) {
        if (div.textColor.equalsToConstant(oldDiv?.textColor)) {
            return
        }
        textColor = div.textColor?.evaluate(resolver)
        if (div.textColor.isConstantOrNull()) {
            return
        }
        val callback = { _: Any -> textColor = div.textColor?.evaluate(resolver) }
        addSubscription(div.textColor?.observe(resolver, callback))
    }

    private fun DivRadioView.bindTextSize(div: DivRadio, oldDiv: DivRadio?, resolver: ExpressionResolver) {
        if (div.fontSize.equalsToConstant(oldDiv?.fontSize)) {
            return
        }
        div.fontSize?.evaluate(resolver)?.let { sp ->
            textSizePx = sp.spToPxF(resources.displayMetrics)
        }
        if (div.fontSize.isConstantOrNull()) {
            return
        }
        val callback = { _: Any ->
            div.fontSize?.evaluate(resolver)?.let { sp ->
                textSizePx = sp.spToPxF(resources.displayMetrics)
            }
        }
        addSubscription(div.fontSize?.observe(resolver, callback))
    }

    private fun DivRadioView.bindTypeface(div: DivRadio, oldDiv: DivRadio?, resolver: ExpressionResolver) {
        if (div.fontFamily.equalsToConstant(oldDiv?.fontFamily) &&
            div.fontWeight.equalsToConstant(oldDiv?.fontWeight)) {
            return
        }
        applyTypeface(div, resolver)
        if (div.fontFamily.isConstantOrNull() && div.fontWeight.isConstantOrNull()) {
            return
        }
        val callback = { _: Any -> applyTypeface(div, resolver) }
        div.fontFamily?.observe(resolver, callback)?.let { addSubscription(it) }
        div.fontWeight?.observe(resolver, callback)?.let { addSubscription(it) }
    }

    private fun DivRadioView.applyTypeface(div: DivRadio, resolver: ExpressionResolver) {
        val family = div.fontFamily?.evaluate(resolver)
        val weight = div.fontWeight?.evaluate(resolver)
        val provider = typefaceResolver.getTypefaceProvider(family)
        typeface = getTypeface(weight, null, provider)
    }

    private fun DivRadioView.observeVariable(
        div: DivRadio,
        bindingContext: BindingContext,
        path: DivStatePath,
    ) {
        val callbacks = object : TwoWayStringVariableBinder.Callbacks {
            override fun onVariableChanged(value: String?) {
                value?.let {
                    selectedValue = it
                }
            }

            override fun setViewStateChangeListener(valueUpdater: (String) -> Unit) {
                setOnValueChangedListener(valueUpdater)
            }
        }

        val subscription = variableBinder.bindVariable(bindingContext, div.valueVariable, callbacks, path)
        addSubscription(subscription)
    }
}
