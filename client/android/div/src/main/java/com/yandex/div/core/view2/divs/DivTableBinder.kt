package com.yandex.div.core.view2.divs

import android.graphics.drawable.ColorDrawable
import android.graphics.drawable.Drawable
import android.graphics.drawable.LayerDrawable
import android.view.View
import com.yandex.div.core.dagger.DivScope
import com.yandex.div.core.downloader.DivPatchManager
import com.yandex.div.core.state.DivPathUtils.getIds
import com.yandex.div.core.state.DivStatePath
import com.yandex.div.core.util.evaluateGravity
import com.yandex.div.core.util.hasSightActions
import com.yandex.div.core.util.toDrawable
import com.yandex.div.core.util.toIntSafely
import com.yandex.div.core.view2.BindingContext
import com.yandex.div.core.view2.DivBinder
import com.yandex.div.core.view2.DivViewBinder
import com.yandex.div.core.view2.DivViewCreator
import com.yandex.div.core.view2.divs.widgets.DivTableLayout
import com.yandex.div.core.view2.reuse.util.tryRebindPlainContainerChildren
import com.yandex.div.core.widget.TableContainer
import com.yandex.div.internal.core.ExpressionSubscriber
import com.yandex.div.internal.core.toDivItemBuilderResult
import com.yandex.div.internal.widget.DivLayoutParams
import com.yandex.div.json.expressions.Expression
import com.yandex.div.json.expressions.ExpressionResolver
import com.yandex.div2.Div
import com.yandex.div2.DivAlignmentHorizontal
import com.yandex.div2.DivAlignmentVertical
import com.yandex.div2.DivBackground
import com.yandex.div2.DivBase
import com.yandex.div2.DivSize
import com.yandex.div2.DivTable
import javax.inject.Inject
import javax.inject.Provider

@DivScope
internal class DivTableBinder @Inject constructor(
    baseBinder: DivBaseBinder,
    private val divPatchManager: DivPatchManager,
    private val divBinder: Provider<DivBinder>,
    private val divViewCreator: Provider<DivViewCreator>,
) : DivViewBinder<Div.Table, DivTable, DivTableLayout>(baseBinder) {

    override fun bindView(context: BindingContext, view: DivTableLayout, div: Div.Table, path: DivStatePath) {
        super.bindView(context, view, div, path)
        view.bindTable(context, div.value, view.div?.value, path)
    }

    override fun DivTableLayout.bind(bindingContext: BindingContext, div: DivTable, oldDiv: DivTable?) {
        releaseViewVisitor = bindingContext.divView.releaseViewVisitor

        applyDivActions(
            bindingContext,
            div.action,
            div.actions,
            div.longtapActions,
            div.doubletapActions,
            div.hoverStartActions,
            div.hoverEndActions,
            div.pressStartActions,
            div.pressEndActions,
            div.actionAnimation,
            div.captureFocusOnAction,
        )

        val resolver = bindingContext.expressionResolver

        val columns = div.columns
        if (columns != null) {
            columnCount = columns.size
            columnWidths = columns.map { col ->
                val width = col.width
                if (width == null) {
                    TableContainer.ColumnWidth.WrapContent
                } else {
                    when (width) {
                        is DivSize.Fixed -> {
                            val px = width.value.toPx(resources.displayMetrics, resolver)
                            TableContainer.ColumnWidth.Fixed(px)
                        }
                        is DivSize.MatchParent -> {
                            val w = width.value.weight?.evaluate(resolver)?.toFloat() ?: 1f
                            TableContainer.ColumnWidth.Weight(w)
                        }
                        is DivSize.WrapContent -> TableContainer.ColumnWidth.WrapContent
                    }
                }
            }
        }

        observeContentAlignment(
            div.contentAlignmentHorizontal,
            div.contentAlignmentVertical,
            resolver
        )

        bindSeparators(div, resolver)
        bindBackgrounds(div, resolver)
    }

    private fun DivTableLayout.bindTable(
        bindingContext: BindingContext,
        div: DivTable,
        oldDiv: DivTable?,
        path: DivStatePath
    ) {
        val resolver = bindingContext.expressionResolver
        val allCellDivs = collectAllCellDivs(div)

        headerRowCount = if (div.headerRow != null) 1 else 0

        tryRebindPlainContainerChildren(
            bindingContext.divView,
            allCellDivs.toDivItemBuilderResult(resolver),
            divViewCreator
        )

        val dispatchedItems = dispatchBinding(bindingContext, allCellDivs, div, path)
        trackVisibilityActions(
            bindingContext.divView,
            dispatchedItems.toDivItemBuilderResult(resolver),
            oldDiv?.let { collectAllCellDivs(it) }?.toDivItemBuilderResult(resolver),
        )
    }

    private fun collectAllCellDivs(div: DivTable): List<Div> {
        val result = mutableListOf<Div>()

        div.headerRow?.cells?.forEach { cell ->
            result.add(cell.div)
        }

        div.rows?.forEach { row ->
            row.cells.forEach { cell ->
                result.add(cell.div)
            }
        }

        return result
    }

    private fun DivTableLayout.bindSeparators(div: DivTable, resolver: ExpressionResolver) {
        div.rowSeparator?.let { sep ->
            rowSeparatorDrawable = sep.style.toDrawable(resources.displayMetrics, resolver)
            rowSeparatorShowAtStart = sep.showAtStart.evaluate(resolver)
            rowSeparatorShowBetween = sep.showBetween.evaluate(resolver)
            rowSeparatorShowAtEnd = sep.showAtEnd.evaluate(resolver)
        } ?: run {
            rowSeparatorDrawable = null
        }

        div.columnSeparator?.let { sep ->
            columnSeparatorDrawable = sep.style.toDrawable(resources.displayMetrics, resolver)
            columnSeparatorShowAtStart = sep.showAtStart.evaluate(resolver)
            columnSeparatorShowBetween = sep.showBetween.evaluate(resolver)
            columnSeparatorShowAtEnd = sep.showAtEnd.evaluate(resolver)
        } ?: run {
            columnSeparatorDrawable = null
        }

        div.headerSeparator?.let { sep ->
            headerSeparatorDrawable = sep.style.toDrawable(resources.displayMetrics, resolver)
            headerSeparatorShowAtStart = sep.showAtStart.evaluate(resolver)
            headerSeparatorShowBetween = sep.showBetween.evaluate(resolver)
            headerSeparatorShowAtEnd = sep.showAtEnd.evaluate(resolver)
        } ?: run {
            headerSeparatorDrawable = null
        }
    }

    private fun DivTableLayout.bindBackgrounds(div: DivTable, resolver: ExpressionResolver) {
        headerBackground = div.headerBackground.toSimpleDrawable(resolver)

        div.striped?.let { striped ->
            stripedEvenBackground = striped.evenRowBackground.toSimpleDrawable(resolver)
            stripedOddBackground = striped.oddRowBackground.toSimpleDrawable(resolver)
        } ?: run {
            stripedEvenBackground = null
            stripedOddBackground = null
        }

        // Row backgrounds
        val rowBgMap = mutableMapOf<Int, Drawable>()
        val headerOffset = if (div.headerRow != null) 1 else 0
        div.rows?.forEachIndexed { rowIdx, row ->
            row.background?.toSimpleDrawable(resolver)?.let { drawable ->
                rowBgMap[rowIdx + headerOffset] = drawable
            }
        }
        rowBackgrounds = rowBgMap

        // Cell backgrounds
        val cellBgMap = mutableMapOf<Int, Drawable>()
        var cellIndex = 0
        div.headerRow?.cells?.forEach { cell ->
            cell.background?.toSimpleDrawable(resolver)?.let { drawable ->
                cellBgMap[cellIndex] = drawable
            }
            cellIndex++
        }
        div.rows?.forEach { row ->
            row.cells.forEach { cell ->
                cell.background?.toSimpleDrawable(resolver)?.let { drawable ->
                    cellBgMap[cellIndex] = drawable
                }
                cellIndex++
            }
        }
        cellBackgrounds = cellBgMap
    }

    private fun List<DivBackground>?.toSimpleDrawable(resolver: ExpressionResolver): Drawable? {
        if (this.isNullOrEmpty()) return null
        val drawables = mapNotNull { bg ->
            when (bg) {
                is DivBackground.Solid -> ColorDrawable(bg.value.color.evaluate(resolver))
                else -> null
            }
        }
        return when {
            drawables.isEmpty() -> null
            drawables.size == 1 -> drawables[0]
            else -> LayerDrawable(drawables.toTypedArray())
        }
    }

    private fun DivTableLayout.observeContentAlignment(
        horizontalAlignment: Expression<DivAlignmentHorizontal>,
        verticalAlignment: Expression<DivAlignmentVertical>,
        resolver: ExpressionResolver
    ) {
        gravity = evaluateGravity(horizontalAlignment.evaluate(resolver), verticalAlignment.evaluate(resolver))

        val callback = { _: Any ->
            gravity = evaluateGravity(horizontalAlignment.evaluate(resolver), verticalAlignment.evaluate(resolver))
        }
        addSubscription(horizontalAlignment.observe(resolver, callback))
        addSubscription(verticalAlignment.observe(resolver, callback))
    }

    private fun DivTableLayout.dispatchBinding(
        bindingContext: BindingContext,
        items: List<Div>,
        div: DivTable,
        path: DivStatePath
    ): List<Div> {
        val divView = bindingContext.divView
        val resolver = bindingContext.expressionResolver

        val ids = items.getIds()
        items.forEachIndexed { index, item ->
            val childView = getChildAt(index)
            val childDiv = item.value()
            val childPath = path.appendDiv(ids[index])

            divBinder.get().bind(bindingContext, childView, item, childPath)
            bindLayoutParams(childView, childDiv, div, index, resolver)
            if (childDiv.hasSightActions) {
                divView.bindViewToDiv(childView, item)
            } else {
                divView.unbindViewFromDiv(childView)
            }
        }
        return items
    }

    private fun bindLayoutParams(
        childView: View,
        childDiv: DivBase,
        tableDiv: DivTable,
        cellIndex: Int,
        resolver: ExpressionResolver
    ) {
        val cell = findCellForIndex(tableDiv, cellIndex)
        childView.applyTableLayoutParams(resolver, cell)

        if (childView !is ExpressionSubscriber) return
        if (cell != null) {
            val callback = { _: Any -> childView.applyTableLayoutParams(resolver, cell) }
            childView.addSubscription(cell.columnSpan.observe(resolver, callback))
            childView.addSubscription(cell.rowSpan.observe(resolver, callback))
        }
    }

    private fun View.applyTableLayoutParams(
        resolver: ExpressionResolver,
        cell: DivTable.Row.Cell?
    ) {
        val params = layoutParams as? DivLayoutParams ?: return
        val columnSpan = cell?.columnSpan?.evaluate(resolver)?.toIntSafely() ?: 1
        if (params.columnSpan != columnSpan) {
            params.columnSpan = columnSpan
            requestLayout()
        }
        val rowSpan = cell?.rowSpan?.evaluate(resolver)?.toIntSafely() ?: 1
        if (params.rowSpan != rowSpan) {
            params.rowSpan = rowSpan
            requestLayout()
        }
    }

    private fun findCellForIndex(tableDiv: DivTable, cellIndex: Int): DivTable.Row.Cell? {
        var idx = 0
        tableDiv.headerRow?.cells?.forEach { cell ->
            if (idx == cellIndex) return cell
            idx++
        }
        tableDiv.rows?.forEach { row ->
            row.cells.forEach { cell ->
                if (idx == cellIndex) return cell
                idx++
            }
        }
        return null
    }

    fun setDataWithoutBinding(bindingContext: BindingContext, view: DivTableLayout, div: Div.Table) {
        view.div = div
        val items = collectAllCellDivs(div.value)
        for (index in items.indices) {
            val childView = view.getChildAt(index)
            val context = childView.bindingContext ?: bindingContext
            divBinder.get().setDataWithoutBinding(context, childView, items[index])
        }
    }
}
