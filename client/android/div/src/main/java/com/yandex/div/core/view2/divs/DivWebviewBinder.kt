package com.yandex.div.core.view2.divs

import com.yandex.div.core.dagger.DivScope
import com.yandex.div.core.state.DivStatePath
import com.yandex.div.core.view2.BindingContext
import com.yandex.div.core.view2.DivViewBinder
import com.yandex.div.core.view2.divs.DivActionBinder.LogType.Companion.LOG_CLICK
import com.yandex.div.core.view2.divs.widgets.DivWebviewView
import com.yandex.div.json.expressions.ExpressionResolver
import com.yandex.div.json.expressions.equalsToConstant
import com.yandex.div.json.expressions.isConstant
import com.yandex.div.json.expressions.isConstantOrNull
import com.yandex.div2.Div
import com.yandex.div2.DivWebview
import javax.inject.Inject

@DivScope
internal class DivWebviewBinder @Inject constructor(
    baseBinder: DivBaseBinder,
    private val actionBinder: DivActionBinder
) : DivViewBinder<Div.Webview, DivWebview, DivWebviewView>(baseBinder) {

    override fun DivWebviewView.bind(
        bindingContext: BindingContext,
        div: DivWebview,
        oldDiv: DivWebview?,
        path: DivStatePath
    ) {
        val resolver = bindingContext.expressionResolver

        bindWebview(div, oldDiv, bindingContext, resolver)
    }

    private fun DivWebviewView.bindWebview(
        div: DivWebview,
        oldDiv: DivWebview?,
        bindingContext: BindingContext,
        resolver: ExpressionResolver
    ) {
        val urlChanged = !div.url.equalsToConstant(oldDiv?.url)
        val htmlChanged = !div.html.equalsToConstant(oldDiv?.html)
        val jsChanged = !div.javascriptEnabled.equalsToConstant(oldDiv?.javascriptEnabled)
        val scrollChanged = !div.allowScrolling.equalsToConstant(oldDiv?.allowScrolling)
        val navChanged = !div.allowNavigation.equalsToConstant(oldDiv?.allowNavigation)
        val scaleChanged = !div.scaleToFit.equalsToConstant(oldDiv?.scaleToFit)

        if (urlChanged || htmlChanged || jsChanged || scrollChanged || navChanged || scaleChanged) {
            applyWebview(div, resolver)
        }

        if (!div.url.isConstantOrNull()) {
            addSubscription(div.url?.observe(resolver) { applyWebview(div, resolver) } ?: return)
        }
        if (!div.html.isConstantOrNull()) {
            addSubscription(div.html?.observe(resolver) { applyWebview(div, resolver) } ?: return)
        }
        if (!div.javascriptEnabled.isConstant()) {
            addSubscription(div.javascriptEnabled.observe(resolver) { applyWebview(div, resolver) })
        }
        if (!div.allowScrolling.isConstant()) {
            addSubscription(div.allowScrolling.observe(resolver) { applyWebview(div, resolver) })
        }
        if (!div.allowNavigation.isConstant()) {
            addSubscription(div.allowNavigation.observe(resolver) { applyWebview(div, resolver) })
        }
        if (!div.scaleToFit.isConstant()) {
            addSubscription(div.scaleToFit.observe(resolver) { applyWebview(div, resolver) })
        }

        bindCallbacks(div, bindingContext)
    }

    private fun DivWebviewView.applyWebview(div: DivWebview, resolver: ExpressionResolver) {
        configure(
            url = div.url?.evaluate(resolver)?.toString(),
            html = div.html?.evaluate(resolver),
            jsEnabled = div.javascriptEnabled.evaluate(resolver),
            allowScrolling = div.allowScrolling.evaluate(resolver),
            allowNavigation = div.allowNavigation.evaluate(resolver),
            scaleToFit = div.scaleToFit.evaluate(resolver)
        )
    }

    private fun DivWebviewView.bindCallbacks(
        div: DivWebview,
        bindingContext: BindingContext
    ) {
        onLoadCallback = {
            div.onLoadActions?.let { actions ->
                actionBinder.handleBulkActions(bindingContext, this, actions, LOG_CLICK)
            }
        }
        onErrorCallback = {
            div.onErrorActions?.let { actions ->
                actionBinder.handleBulkActions(bindingContext, this, actions, LOG_CLICK)
            }
        }
    }
}
