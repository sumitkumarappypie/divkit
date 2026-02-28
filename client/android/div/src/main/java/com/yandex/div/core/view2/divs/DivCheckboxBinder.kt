package com.yandex.div.core.view2.divs

import com.yandex.div.core.dagger.DivScope
import com.yandex.div.core.expression.variables.TwoWayBooleanVariableBinder
import com.yandex.div.core.state.DivStatePath
import com.yandex.div.core.view2.BindingContext
import com.yandex.div.core.view2.DivViewBinder
import com.yandex.div.core.view2.divs.widgets.DivCheckboxView
import com.yandex.div.json.expressions.ExpressionResolver
import com.yandex.div.json.expressions.equalsToConstant
import com.yandex.div.json.expressions.isConstant
import com.yandex.div.json.expressions.isConstantOrNull
import com.yandex.div2.Div
import com.yandex.div2.DivCheckbox
import javax.inject.Inject

@DivScope
internal class DivCheckboxBinder @Inject constructor(
    baseBinder: DivBaseBinder,
    private val variableBinder: TwoWayBooleanVariableBinder
) : DivViewBinder<Div.Checkbox, DivCheckbox, DivCheckboxView>(baseBinder) {

    override fun DivCheckboxView.bind(
        bindingContext: BindingContext,
        div: DivCheckbox,
        oldDiv: DivCheckbox?,
        path: DivStatePath
    ) {
        bindIsEnabled(div, oldDiv, bindingContext.expressionResolver)
        bindOnColor(div, oldDiv, bindingContext.expressionResolver)
        bindOffColor(div, oldDiv, bindingContext.expressionResolver)
        bindCheckMarkColor(div, oldDiv, bindingContext.expressionResolver)

        observeVariable(div, bindingContext, path)
    }

    private fun DivCheckboxView.bindIsEnabled(div: DivCheckbox, oldDiv: DivCheckbox?, resolver: ExpressionResolver) {
        if (div.isEnabled.equalsToConstant(oldDiv?.isEnabled)) {
            return
        }
        applyIsEnabled(div, resolver)
        if (div.isEnabled.isConstant()) {
            return
        }
        val callback = { _: Any -> applyIsEnabled(div, resolver) }
        addSubscription(div.isEnabled.observe(resolver, callback))
    }

    private fun DivCheckboxView.applyIsEnabled(div: DivCheckbox, resolver: ExpressionResolver) {
        isEnabled = div.isEnabled.evaluate(resolver)
    }

    private fun DivCheckboxView.bindOnColor(div: DivCheckbox, oldDiv: DivCheckbox?, resolver: ExpressionResolver) {
        if (div.onColor.equalsToConstant(oldDiv?.onColor)) {
            return
        }
        applyOnColor(div, resolver)
        if (div.onColor.isConstantOrNull()) {
            return
        }
        val callback = { _: Any -> applyOnColor(div, resolver) }
        addSubscription(div.onColor?.observe(resolver, callback))
    }

    private fun DivCheckboxView.applyOnColor(div: DivCheckbox, resolver: ExpressionResolver) {
        colorOn = div.onColor?.evaluate(resolver)
    }

    private fun DivCheckboxView.bindOffColor(div: DivCheckbox, oldDiv: DivCheckbox?, resolver: ExpressionResolver) {
        if (div.offColor.equalsToConstant(oldDiv?.offColor)) {
            return
        }
        applyOffColor(div, resolver)
        if (div.offColor.isConstantOrNull()) {
            return
        }
        val callback = { _: Any -> applyOffColor(div, resolver) }
        addSubscription(div.offColor?.observe(resolver, callback))
    }

    private fun DivCheckboxView.applyOffColor(div: DivCheckbox, resolver: ExpressionResolver) {
        colorOff = div.offColor?.evaluate(resolver)
    }

    private fun DivCheckboxView.bindCheckMarkColor(div: DivCheckbox, oldDiv: DivCheckbox?, resolver: ExpressionResolver) {
        if (div.checkMarkColor.equalsToConstant(oldDiv?.checkMarkColor)) {
            return
        }
        applyCheckMarkColor(div, resolver)
        if (div.checkMarkColor.isConstantOrNull()) {
            return
        }
        val callback = { _: Any -> applyCheckMarkColor(div, resolver) }
        addSubscription(div.checkMarkColor?.observe(resolver, callback))
    }

    private fun DivCheckboxView.applyCheckMarkColor(div: DivCheckbox, resolver: ExpressionResolver) {
        checkMarkColor = div.checkMarkColor?.evaluate(resolver)
    }

    private fun DivCheckboxView.observeVariable(
        div: DivCheckbox,
        bindingContext: BindingContext,
        path: DivStatePath,
    ) {
        val callbacks = object : TwoWayBooleanVariableBinder.Callbacks {
            override fun onVariableChanged(value: Boolean?) {
                value?.let {
                    isChecked = it
                }
            }

            override fun setViewStateChangeListener(valueUpdater: (Boolean) -> Unit) {
                setOnCheckedChangeListener(valueUpdater)
            }
        }

        val subscription = variableBinder.bindVariable(bindingContext, div.isCheckedVariable, callbacks, path)
        addSubscription(subscription)
    }
}
