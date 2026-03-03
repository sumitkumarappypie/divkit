package com.yandex.div.core.view2.divs

import android.graphics.Typeface
import com.yandex.div.core.dagger.DivScope
import com.yandex.div.core.expression.variables.TwoWayIntegerVariableBinder
import com.yandex.div.core.state.DivStatePath
import com.yandex.div.core.view2.BindingContext
import com.yandex.div.core.view2.DivViewBinder
import com.yandex.div.core.view2.divs.DivActionBinder.LogType.Companion.LOG_CLICK
import com.yandex.div.core.view2.divs.widgets.DivCounterView
import com.yandex.div.json.expressions.ExpressionResolver
import com.yandex.div.json.expressions.equalsToConstant
import com.yandex.div.json.expressions.isConstant
import com.yandex.div.json.expressions.isConstantOrNull
import com.yandex.div2.Div
import com.yandex.div2.DivCounter
import com.yandex.div2.DivFontWeight
import androidx.annotation.ColorInt
import javax.inject.Inject

@DivScope
internal class DivCounterBinder @Inject constructor(
    baseBinder: DivBaseBinder,
    private val variableBinder: TwoWayIntegerVariableBinder,
    private val actionBinder: DivActionBinder
) : DivViewBinder<Div.Counter, DivCounter, DivCounterView>(baseBinder) {

    override fun DivCounterView.bind(
        bindingContext: BindingContext,
        div: DivCounter,
        oldDiv: DivCounter?,
        path: DivStatePath
    ) {
        val resolver = bindingContext.expressionResolver

        bindButtonColor(div, oldDiv, resolver)
        bindButtonSize(div, oldDiv, resolver)
        bindIconColor(div, oldDiv, resolver)
        bindDisabledButtonColor(div, oldDiv, resolver)
        bindTextColor(div, oldDiv, resolver)
        bindFontSize(div, oldDiv, resolver)
        bindFontWeight(div, oldDiv, resolver)
        bindValueWidth(div, oldDiv, resolver)
        bindBackgroundColor(div, oldDiv, resolver)
        bindBorderColor(div, oldDiv, resolver)
        bindBorderWidth(div, oldDiv, resolver)
        bindCornerRadius(div, oldDiv, resolver)
        bindPadding(div, oldDiv, resolver)
        bindMinValue(div, oldDiv, resolver)
        bindMaxValue(div, oldDiv, resolver)
        bindStep(div, oldDiv, resolver)
        bindIsEnabled(div, oldDiv, resolver)

        observeVariable(div, bindingContext, path)
    }

    private fun DivCounterView.bindButtonColor(div: DivCounter, oldDiv: DivCounter?, resolver: ExpressionResolver) {
        if (div.buttonColor.equalsToConstant(oldDiv?.buttonColor)) return
        applyButtonColor(div, resolver)
        if (div.buttonColor.isConstant()) return
        addSubscription(div.buttonColor.observe(resolver) { applyButtonColor(div, resolver) })
    }

    private fun DivCounterView.applyButtonColor(div: DivCounter, resolver: ExpressionResolver) {
        buttonColor = ensureAlpha(div.buttonColor.evaluate(resolver))
    }

    private fun DivCounterView.bindButtonSize(div: DivCounter, oldDiv: DivCounter?, resolver: ExpressionResolver) {
        if (div.buttonSize.equalsToConstant(oldDiv?.buttonSize)) return
        applyButtonSize(div, resolver)
        if (div.buttonSize.isConstant()) return
        addSubscription(div.buttonSize.observe(resolver) { applyButtonSize(div, resolver) })
    }

    private fun DivCounterView.applyButtonSize(div: DivCounter, resolver: ExpressionResolver) {
        buttonSizePx = div.buttonSize.evaluate(resolver).dpToPx(resources.displayMetrics)
    }

    private fun DivCounterView.bindIconColor(div: DivCounter, oldDiv: DivCounter?, resolver: ExpressionResolver) {
        if (div.iconColor.equalsToConstant(oldDiv?.iconColor)) return
        applyIconColor(div, resolver)
        if (div.iconColor.isConstant()) return
        addSubscription(div.iconColor.observe(resolver) { applyIconColor(div, resolver) })
    }

    private fun DivCounterView.applyIconColor(div: DivCounter, resolver: ExpressionResolver) {
        iconColor = ensureAlpha(div.iconColor.evaluate(resolver))
    }

    private fun DivCounterView.bindDisabledButtonColor(div: DivCounter, oldDiv: DivCounter?, resolver: ExpressionResolver) {
        if (div.disabledButtonColor.equalsToConstant(oldDiv?.disabledButtonColor)) return
        applyDisabledButtonColor(div, resolver)
        if (div.disabledButtonColor.isConstant()) return
        addSubscription(div.disabledButtonColor.observe(resolver) { applyDisabledButtonColor(div, resolver) })
    }

    private fun DivCounterView.applyDisabledButtonColor(div: DivCounter, resolver: ExpressionResolver) {
        disabledButtonColor = ensureAlpha(div.disabledButtonColor.evaluate(resolver))
    }

    private fun DivCounterView.bindTextColor(div: DivCounter, oldDiv: DivCounter?, resolver: ExpressionResolver) {
        if (div.textColor.equalsToConstant(oldDiv?.textColor)) return
        applyTextColor(div, resolver)
        if (div.textColor.isConstant()) return
        addSubscription(div.textColor.observe(resolver) { applyTextColor(div, resolver) })
    }

    private fun DivCounterView.applyTextColor(div: DivCounter, resolver: ExpressionResolver) {
        textColor = ensureAlpha(div.textColor.evaluate(resolver))
    }

    private fun DivCounterView.bindFontSize(div: DivCounter, oldDiv: DivCounter?, resolver: ExpressionResolver) {
        if (div.fontSize.equalsToConstant(oldDiv?.fontSize)) return
        applyFontSize(div, resolver)
        if (div.fontSize.isConstant()) return
        addSubscription(div.fontSize.observe(resolver) { applyFontSize(div, resolver) })
    }

    private fun DivCounterView.applyFontSize(div: DivCounter, resolver: ExpressionResolver) {
        fontSizePx = div.fontSize.evaluate(resolver).spToPx(resources.displayMetrics).toFloat()
    }

    private fun DivCounterView.bindFontWeight(div: DivCounter, oldDiv: DivCounter?, resolver: ExpressionResolver) {
        if (div.fontWeight.equalsToConstant(oldDiv?.fontWeight)) return
        applyFontWeight(div, resolver)
        if (div.fontWeight.isConstant()) return
        addSubscription(div.fontWeight.observe(resolver) { applyFontWeight(div, resolver) })
    }

    private fun DivCounterView.applyFontWeight(div: DivCounter, resolver: ExpressionResolver) {
        fontWeight = when (div.fontWeight.evaluate(resolver)) {
            DivFontWeight.LIGHT -> Typeface.create(Typeface.DEFAULT, Typeface.NORMAL)
            DivFontWeight.REGULAR -> Typeface.create(Typeface.DEFAULT, Typeface.NORMAL)
            DivFontWeight.MEDIUM -> Typeface.create(Typeface.DEFAULT, Typeface.BOLD)
            DivFontWeight.BOLD -> Typeface.create(Typeface.DEFAULT, Typeface.BOLD)
        }
    }

    private fun DivCounterView.bindValueWidth(div: DivCounter, oldDiv: DivCounter?, resolver: ExpressionResolver) {
        if (div.valueWidth.equalsToConstant(oldDiv?.valueWidth)) return
        applyValueWidth(div, resolver)
        if (div.valueWidth.isConstant()) return
        addSubscription(div.valueWidth.observe(resolver) { applyValueWidth(div, resolver) })
    }

    private fun DivCounterView.applyValueWidth(div: DivCounter, resolver: ExpressionResolver) {
        valueWidthPx = div.valueWidth.evaluate(resolver).dpToPx(resources.displayMetrics)
    }

    private fun DivCounterView.bindBackgroundColor(div: DivCounter, oldDiv: DivCounter?, resolver: ExpressionResolver) {
        if (div.backgroundColor.equalsToConstant(oldDiv?.backgroundColor)) return
        applyBackgroundColor(div, resolver)
        if (div.backgroundColor.isConstant()) return
        addSubscription(div.backgroundColor.observe(resolver) { applyBackgroundColor(div, resolver) })
    }

    private fun DivCounterView.applyBackgroundColor(div: DivCounter, resolver: ExpressionResolver) {
        containerBackgroundColor = ensureAlpha(div.backgroundColor.evaluate(resolver))
    }

    private fun DivCounterView.bindBorderColor(div: DivCounter, oldDiv: DivCounter?, resolver: ExpressionResolver) {
        if (div.borderColor.equalsToConstant(oldDiv?.borderColor)) return
        applyBorderColor(div, resolver)
        if (div.borderColor.isConstant()) return
        addSubscription(div.borderColor.observe(resolver) { applyBorderColor(div, resolver) })
    }

    private fun DivCounterView.applyBorderColor(div: DivCounter, resolver: ExpressionResolver) {
        containerBorderColor = ensureAlpha(div.borderColor.evaluate(resolver))
    }

    private fun DivCounterView.bindBorderWidth(div: DivCounter, oldDiv: DivCounter?, resolver: ExpressionResolver) {
        if (div.borderWidth.equalsToConstant(oldDiv?.borderWidth)) return
        applyBorderWidth(div, resolver)
        if (div.borderWidth.isConstant()) return
        addSubscription(div.borderWidth.observe(resolver) { applyBorderWidth(div, resolver) })
    }

    private fun DivCounterView.applyBorderWidth(div: DivCounter, resolver: ExpressionResolver) {
        containerBorderWidthPx = div.borderWidth.evaluate(resolver).dpToPx(resources.displayMetrics)
    }

    private fun DivCounterView.bindCornerRadius(div: DivCounter, oldDiv: DivCounter?, resolver: ExpressionResolver) {
        if (div.cornerRadius.equalsToConstant(oldDiv?.cornerRadius)) return
        applyCornerRadius(div, resolver)
        if (div.cornerRadius.isConstant()) return
        addSubscription(div.cornerRadius.observe(resolver) { applyCornerRadius(div, resolver) })
    }

    private fun DivCounterView.applyCornerRadius(div: DivCounter, resolver: ExpressionResolver) {
        containerCornerRadiusPx = div.cornerRadius.evaluate(resolver).dpToPx(resources.displayMetrics).toFloat()
    }

    private fun DivCounterView.bindPadding(div: DivCounter, oldDiv: DivCounter?, resolver: ExpressionResolver) {
        if (div.padding.equalsToConstant(oldDiv?.padding)) return
        applyPadding(div, resolver)
        if (div.padding.isConstant()) return
        addSubscription(div.padding.observe(resolver) { applyPadding(div, resolver) })
    }

    private fun DivCounterView.applyPadding(div: DivCounter, resolver: ExpressionResolver) {
        containerPaddingPx = div.padding.evaluate(resolver).dpToPx(resources.displayMetrics)
    }

    private fun DivCounterView.bindMinValue(div: DivCounter, oldDiv: DivCounter?, resolver: ExpressionResolver) {
        if (div.minValue.equalsToConstant(oldDiv?.minValue)) return
        applyMinValue(div, resolver)
        if (div.minValue.isConstant()) return
        addSubscription(div.minValue.observe(resolver) { applyMinValue(div, resolver) })
    }

    private fun DivCounterView.applyMinValue(div: DivCounter, resolver: ExpressionResolver) {
        minValue = div.minValue.evaluate(resolver).toInt()
    }

    private fun DivCounterView.bindMaxValue(div: DivCounter, oldDiv: DivCounter?, resolver: ExpressionResolver) {
        if (div.maxValue.equalsToConstant(oldDiv?.maxValue)) return
        applyMaxValue(div, resolver)
        if (div.maxValue.isConstant()) return
        addSubscription(div.maxValue.observe(resolver) { applyMaxValue(div, resolver) })
    }

    private fun DivCounterView.applyMaxValue(div: DivCounter, resolver: ExpressionResolver) {
        maxValue = div.maxValue.evaluate(resolver).toInt()
    }

    private fun DivCounterView.bindStep(div: DivCounter, oldDiv: DivCounter?, resolver: ExpressionResolver) {
        if (div.step.equalsToConstant(oldDiv?.step)) return
        applyStep(div, resolver)
        if (div.step.isConstant()) return
        addSubscription(div.step.observe(resolver) { applyStep(div, resolver) })
    }

    private fun DivCounterView.applyStep(div: DivCounter, resolver: ExpressionResolver) {
        step = div.step.evaluate(resolver).toInt()
    }

    private fun DivCounterView.bindIsEnabled(div: DivCounter, oldDiv: DivCounter?, resolver: ExpressionResolver) {
        if (div.isEnabled.equalsToConstant(oldDiv?.isEnabled)) return
        applyIsEnabled(div, resolver)
        if (div.isEnabled.isConstant()) return
        addSubscription(div.isEnabled.observe(resolver) { applyIsEnabled(div, resolver) })
    }

    private fun DivCounterView.applyIsEnabled(div: DivCounter, resolver: ExpressionResolver) {
        isEnabled = div.isEnabled.evaluate(resolver)
    }

    private fun DivCounterView.observeVariable(
        div: DivCounter,
        bindingContext: BindingContext,
        path: DivStatePath,
    ) {
        val callbacks = object : TwoWayIntegerVariableBinder.Callbacks {
            override fun onVariableChanged(value: Long?) {
                value?.let {
                    counterValue = it.toInt()
                }
            }

            override fun setViewStateChangeListener(valueUpdater: (Long) -> Unit) {
                onValueChanged = { newValue ->
                    valueUpdater(newValue.toLong())
                    div.onValueChangeActions?.let { actions ->
                        actionBinder.handleBulkActions(bindingContext, this@observeVariable, actions, LOG_CLICK)
                    }
                }
                onIncrement = { _ ->
                    div.onIncrementActions?.let { actions ->
                        actionBinder.handleBulkActions(bindingContext, this@observeVariable, actions, LOG_CLICK)
                    }
                }
                onDecrement = { _ ->
                    div.onDecrementActions?.let { actions ->
                        actionBinder.handleBulkActions(bindingContext, this@observeVariable, actions, LOG_CLICK)
                    }
                }
            }
        }

        val subscription = variableBinder.bindVariable(bindingContext, div.counterValueVariable, callbacks, path)
        addSubscription(subscription)
    }

    companion object {
        /** Ensures the alpha channel is set to fully opaque if it's zero. */
        @ColorInt
        private fun ensureAlpha(@ColorInt color: Int): Int =
            if (color and 0xFF000000.toInt() == 0) color or 0xFF000000.toInt() else color
    }
}
