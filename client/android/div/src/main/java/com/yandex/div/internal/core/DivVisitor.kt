package com.yandex.div.internal.core

import com.yandex.div.json.expressions.ExpressionResolver
import com.yandex.div2.Div

abstract class DivVisitor<T> {
    protected fun visit(div: Div, resolver: ExpressionResolver): T {
        return when (div) {
            is Div.Text -> visit(div, resolver)
            is Div.Image -> visit(div, resolver)
            is Div.GifImage -> visit(div, resolver)
            is Div.Separator -> visit(div, resolver)
            is Div.Container -> visit(div, resolver)
            is Div.Grid -> visit(div, resolver)
            is Div.Gallery -> visit(div, resolver)
            is Div.Pager -> visit(div, resolver)
            is Div.Tabs -> visit(div, resolver)
            is Div.State -> visit(div, resolver)
            is Div.Custom -> visit(div, resolver)
            is Div.Indicator -> visit(div, resolver)
            is Div.Slider -> visit(div, resolver)
            is Div.Input -> visit(div, resolver)
            is Div.Select -> visit(div, resolver)
            is Div.Video -> visit(div, resolver)
            is Div.Switch -> visit(div, resolver)
            is Div.Checkbox -> visit(div, resolver)
            is Div.Radio -> visit(div, resolver)
            is Div.Progress -> visit(div, resolver)
            is Div.Table -> visit(div, resolver)
            is Div.Counter -> visit(div, resolver)
            is Div.Webview -> visit(div, resolver)
            is Div.GoogleMap -> visit(div, resolver)
            is Div.Autocomplete -> visit(div, resolver)
            is Div.Breadcrumb -> visit(div, resolver)
        }
    }

    protected abstract fun defaultVisit(data: Div, resolver: ExpressionResolver): T

    protected open fun visit(data: Div.Text, resolver: ExpressionResolver) = defaultVisit(data, resolver)

    protected open fun visit(data: Div.Image, resolver: ExpressionResolver) = defaultVisit(data, resolver)

    protected open fun visit(data: Div.GifImage, resolver: ExpressionResolver) = defaultVisit(data, resolver)

    protected open fun visit(data: Div.Separator, resolver: ExpressionResolver) = defaultVisit(data, resolver)

    protected open fun visit(data: Div.Container, resolver: ExpressionResolver) = defaultVisit(data, resolver)

    protected open fun visit(data: Div.Grid, resolver: ExpressionResolver) = defaultVisit(data, resolver)

    protected open fun visit(data: Div.Gallery, resolver: ExpressionResolver) = defaultVisit(data, resolver)

    protected open fun visit(data: Div.Pager, resolver: ExpressionResolver) = defaultVisit(data, resolver)

    protected open fun visit(data: Div.Tabs, resolver: ExpressionResolver) = defaultVisit(data, resolver)

    protected open fun visit(data: Div.State, resolver: ExpressionResolver) = defaultVisit(data, resolver)

    protected open fun visit(data: Div.Custom, resolver: ExpressionResolver) = defaultVisit(data, resolver)

    protected open fun visit(data: Div.Indicator, resolver: ExpressionResolver) = defaultVisit(data, resolver)

    protected open fun visit(data: Div.Slider, resolver: ExpressionResolver) = defaultVisit(data, resolver)

    protected open fun visit(data: Div.Input, resolver: ExpressionResolver) = defaultVisit(data, resolver)

    protected open fun visit(data: Div.Select, resolver: ExpressionResolver) = defaultVisit(data, resolver)

    protected open fun visit(data: Div.Video, resolver: ExpressionResolver) = defaultVisit(data, resolver)

    protected open fun visit(data: Div.Switch, resolver: ExpressionResolver) = defaultVisit(data, resolver)

    protected open fun visit(data: Div.Checkbox, resolver: ExpressionResolver) = defaultVisit(data, resolver)

    protected open fun visit(data: Div.Radio, resolver: ExpressionResolver) = defaultVisit(data, resolver)

    protected open fun visit(data: Div.Progress, resolver: ExpressionResolver) = defaultVisit(data, resolver)

    protected open fun visit(data: Div.Table, resolver: ExpressionResolver) = defaultVisit(data, resolver)

    protected open fun visit(data: Div.Counter, resolver: ExpressionResolver) = defaultVisit(data, resolver)

    protected open fun visit(data: Div.Webview, resolver: ExpressionResolver) = defaultVisit(data, resolver)

    protected open fun visit(data: Div.GoogleMap, resolver: ExpressionResolver) = defaultVisit(data, resolver)

    protected open fun visit(data: Div.Autocomplete, resolver: ExpressionResolver) = defaultVisit(data, resolver)

    protected open fun visit(data: Div.Breadcrumb, resolver: ExpressionResolver) = defaultVisit(data, resolver)
}
