package com.yandex.div.core.view2.divs

import com.yandex.div.core.dagger.DivScope
import com.yandex.div.core.expression.local.variableController
import com.yandex.div.core.state.DivStatePath
import com.yandex.div.core.util.toIntSafely
import com.yandex.div.core.view2.BindingContext
import com.yandex.div.core.view2.DivViewBinder
import com.yandex.div.core.view2.divs.DivActionBinder.LogType.Companion.LOG_CLICK
import com.yandex.div.core.view2.divs.widgets.DivRatingView
import com.yandex.div.core.view2.errors.ErrorCollectors
import com.yandex.div.data.Variable
import com.yandex.div.json.expressions.ExpressionResolver
import com.yandex.div2.Div
import com.yandex.div2.DivRating
import javax.inject.Inject

@DivScope
internal class DivRatingBinder @Inject constructor(
    baseBinder: DivBaseBinder,
    private val actionBinder: DivActionBinder,
    private val errorCollectors: ErrorCollectors
) : DivViewBinder<Div.Rating, DivRating, DivRatingView>(baseBinder) {

    override fun DivRatingView.bind(
        bindingContext: BindingContext,
        div: DivRating,
        oldDiv: DivRating?,
        path: DivStatePath
    ) {
        val expressionResolver = bindingContext.expressionResolver

        observeMaxRating(div, expressionResolver)
        observeStep(div, expressionResolver)
        observeIsInteractive(div, expressionResolver)
        observeIconSize(div, expressionResolver)
        observeIconSpacing(div, expressionResolver)
        observeActiveColor(div, expressionResolver)
        observeInactiveColor(div, expressionResolver)
        observeBorderColor(div, expressionResolver)
        observeDisabledColor(div, expressionResolver)
        observeRatingVariable(div, bindingContext, expressionResolver)
    }

    private fun DivRatingView.observeMaxRating(
        div: DivRating,
        resolver: ExpressionResolver
    ) {
        addSubscription(div.maxRating.observeAndGet(resolver) { maxRating ->
            setMaxRating(maxRating.toIntSafely())
        })
    }

    private fun DivRatingView.observeStep(
        div: DivRating,
        resolver: ExpressionResolver
    ) {
        addSubscription(div.step.observeAndGet(resolver) { step ->
            setStep(step.toFloat())
        })
    }

    private fun DivRatingView.observeIsInteractive(
        div: DivRating,
        resolver: ExpressionResolver
    ) {
        addSubscription(div.isInteractive.observeAndGet(resolver) { interactive ->
            setIsInteractive(interactive)
        })
    }

    private fun DivRatingView.observeIconSize(
        div: DivRating,
        resolver: ExpressionResolver
    ) {
        addSubscription(div.iconSize.observeAndGet(resolver) { size ->
            setIconSize(size.toIntSafely().dpToPx(resources.displayMetrics))
        })
    }

    private fun DivRatingView.observeIconSpacing(
        div: DivRating,
        resolver: ExpressionResolver
    ) {
        addSubscription(div.iconSpacing.observeAndGet(resolver) { spacing ->
            setIconSpacing(spacing.toIntSafely().dpToPx(resources.displayMetrics))
        })
    }

    private fun DivRatingView.observeActiveColor(
        div: DivRating,
        resolver: ExpressionResolver
    ) {
        addSubscription(div.activeColor.observeAndGet(resolver) { color ->
            setActiveColor(color)
        })
    }

    private fun DivRatingView.observeInactiveColor(
        div: DivRating,
        resolver: ExpressionResolver
    ) {
        addSubscription(div.inactiveColor.observeAndGet(resolver) { color ->
            setInactiveColor(color)
        })
    }

    private fun DivRatingView.observeBorderColor(
        div: DivRating,
        resolver: ExpressionResolver
    ) {
        div.borderColor?.let { borderColorExpr ->
            addSubscription(borderColorExpr.observeAndGet(resolver) { color ->
                setBorderColor(color)
            })
        }
    }

    private fun DivRatingView.observeDisabledColor(
        div: DivRating,
        resolver: ExpressionResolver
    ) {
        div.disabledColor?.let { disabledColorExpr ->
            addSubscription(disabledColorExpr.observeAndGet(resolver) { color ->
                setDisabledColor(color)
            })
        }
    }

    private fun DivRatingView.observeRatingVariable(
        div: DivRating,
        bindingContext: BindingContext,
        resolver: ExpressionResolver
    ) {
        val variableController = bindingContext.expressionResolver.variableController ?: return
        val divView = bindingContext.divView
        val data = divView.divData ?: return
        val errorCollector = errorCollectors.getOrCreate(divView.dataTag, data)

        val subscription = variableController.subscribeToVariableChange(
            div.ratingVariable,
            errorCollector,
            invokeOnSubscription = true
        ) { variable: Variable ->
            val rawValue = variable.getValue()
            val rating = rawValue.toString().toFloatOrNull() ?: 0f
            setRating(rating)
        }
        addSubscription(subscription)

        // Set up touch callback to update variable and fire actions
        onRatingChangeListener = { newRating ->
            com.yandex.div.internal.core.VariableMutationHandler.setVariable(
                bindingContext.divView,
                div.ratingVariable,
                newRating.toString(),
                bindingContext.expressionResolver
            )

            // Fire rating change actions
            div.ratingChangeActions?.let { actions ->
                actionBinder.handleBulkActions(bindingContext, this, actions, LOG_CLICK)
            }
        }
    }
}
