package com.yandex.div.core.view2.divs

import com.yandex.div.core.dagger.DivScope
import com.yandex.div.core.state.DivStatePath
import com.yandex.div.core.view2.BindingContext
import com.yandex.div.core.view2.DivViewBinder
import com.yandex.div.core.view2.divs.widgets.DivProgressView
import com.yandex.div.json.expressions.ExpressionResolver
import com.yandex.div.json.expressions.equalsToConstant
import com.yandex.div.json.expressions.isConstant
import com.yandex.div.json.expressions.isConstantOrNull
import com.yandex.div2.Div
import com.yandex.div2.DivProgress
import javax.inject.Inject

@DivScope
internal class DivProgressBinder @Inject constructor(
    baseBinder: DivBaseBinder,
) : DivViewBinder<Div.Progress, DivProgress, DivProgressView>(baseBinder) {

    override fun DivProgressView.bind(
        bindingContext: BindingContext,
        div: DivProgress,
        oldDiv: DivProgress?,
        path: DivStatePath
    ) {
        val resolver = bindingContext.expressionResolver

        bindStyle(div, oldDiv, resolver)
        bindValue(div, oldDiv, resolver)
        bindIsIndeterminate(div, oldDiv, resolver)
        bindActiveColor(div, oldDiv, resolver)
        bindInactiveColor(div, oldDiv, resolver)
        bindTrackThickness(div, oldDiv, resolver)
    }

    private fun DivProgressView.bindStyle(div: DivProgress, oldDiv: DivProgress?, resolver: ExpressionResolver) {
        if (div.style.equalsToConstant(oldDiv?.style)) {
            return
        }
        applyStyle(div, resolver)
        if (div.style.isConstant()) {
            return
        }
        val callback = { _: Any -> applyStyle(div, resolver) }
        addSubscription(div.style.observe(resolver, callback))
    }

    private fun DivProgressView.applyStyle(div: DivProgress, resolver: ExpressionResolver) {
        isCircular = div.style.evaluate(resolver) == DivProgress.Style.CIRCULAR
    }

    private fun DivProgressView.bindValue(div: DivProgress, oldDiv: DivProgress?, resolver: ExpressionResolver) {
        if (div.value.equalsToConstant(oldDiv?.value)) {
            return
        }
        progressValue = div.value.evaluate(resolver).toFloat()
        if (div.value.isConstant()) {
            return
        }
        val callback = { _: Any -> progressValue = div.value.evaluate(resolver).toFloat() }
        addSubscription(div.value.observe(resolver, callback))
    }

    private fun DivProgressView.bindIsIndeterminate(div: DivProgress, oldDiv: DivProgress?, resolver: ExpressionResolver) {
        if (div.isIndeterminate.equalsToConstant(oldDiv?.isIndeterminate)) {
            return
        }
        isIndeterminate = div.isIndeterminate.evaluate(resolver)
        if (div.isIndeterminate.isConstant()) {
            return
        }
        val callback = { _: Any -> isIndeterminate = div.isIndeterminate.evaluate(resolver) }
        addSubscription(div.isIndeterminate.observe(resolver, callback))
    }

    private fun DivProgressView.bindActiveColor(div: DivProgress, oldDiv: DivProgress?, resolver: ExpressionResolver) {
        if (div.activeColor.equalsToConstant(oldDiv?.activeColor)) {
            return
        }
        div.activeColor?.evaluate(resolver)?.let { activeColor = it }
        if (div.activeColor.isConstantOrNull()) {
            return
        }
        val callback: (Any) -> Unit = { _ -> div.activeColor?.evaluate(resolver)?.let { activeColor = it } }
        addSubscription(div.activeColor?.observe(resolver, callback))
    }

    private fun DivProgressView.bindInactiveColor(div: DivProgress, oldDiv: DivProgress?, resolver: ExpressionResolver) {
        if (div.inactiveColor.equalsToConstant(oldDiv?.inactiveColor)) {
            return
        }
        div.inactiveColor?.evaluate(resolver)?.let { inactiveColor = it }
        if (div.inactiveColor.isConstantOrNull()) {
            return
        }
        val callback: (Any) -> Unit = { _ -> div.inactiveColor?.evaluate(resolver)?.let { inactiveColor = it } }
        addSubscription(div.inactiveColor?.observe(resolver, callback))
    }

    private fun DivProgressView.bindTrackThickness(div: DivProgress, oldDiv: DivProgress?, resolver: ExpressionResolver) {
        if (div.trackThickness.equalsToConstant(oldDiv?.trackThickness)) {
            return
        }
        trackThickness = div.trackThickness.evaluate(resolver).dpToPx(resources.displayMetrics)
        if (div.trackThickness.isConstant()) {
            return
        }
        val callback = { _: Any ->
            trackThickness = div.trackThickness.evaluate(resolver).dpToPx(resources.displayMetrics)
        }
        addSubscription(div.trackThickness.observe(resolver, callback))
    }
}
