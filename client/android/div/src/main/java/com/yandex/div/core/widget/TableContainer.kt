@file:Suppress("NOTHING_TO_INLINE")

package com.yandex.div.core.widget

import android.annotation.SuppressLint
import android.content.Context
import android.graphics.Canvas
import android.graphics.drawable.Drawable
import android.os.SystemClock
import android.util.AttributeSet
import android.view.Gravity
import android.view.View
import com.yandex.div.internal.KLog
import com.yandex.div.internal.widget.DivLayoutParams
import com.yandex.div.internal.widget.DivLayoutParams.Companion.DEFAULT_GRAVITY
import com.yandex.div.internal.widget.DivViewGroup
import kotlin.math.ceil
import kotlin.math.max
import kotlin.math.min

@SuppressLint("RtlHardcoded")
internal open class TableContainer @JvmOverloads constructor(
    context: Context,
    attrs: AttributeSet? = null,
    defStyleAttr: Int = 0
) : DivViewGroup(context, attrs, defStyleAttr) {

    var columnCount: Int
        get() = table.columnCount
        set(value) {
            table.columnCount = value
            invalidateStructure()
            requestLayout()
        }

    val rowCount: Int
        get() = table.rowCount

    var columnWidths: List<ColumnWidth> = emptyList()
        set(value) {
            field = value
            invalidateStructure()
            requestLayout()
        }

    var rowSeparatorDrawable: Drawable? = null
    var rowSeparatorShowAtStart: Boolean = false
    var rowSeparatorShowBetween: Boolean = true
    var rowSeparatorShowAtEnd: Boolean = false

    var columnSeparatorDrawable: Drawable? = null
    var columnSeparatorShowAtStart: Boolean = false
    var columnSeparatorShowBetween: Boolean = true
    var columnSeparatorShowAtEnd: Boolean = false

    var headerSeparatorDrawable: Drawable? = null
    var headerSeparatorShowAtStart: Boolean = false
    var headerSeparatorShowBetween: Boolean = true
    var headerSeparatorShowAtEnd: Boolean = false

    var headerRowCount: Int = 0

    var headerBackground: Drawable? = null

    var stripedEvenBackground: Drawable? = null
    var stripedOddBackground: Drawable? = null

    var rowBackgrounds: Map<Int, Drawable> = emptyMap()
    var cellBackgrounds: Map<Int, Drawable> = emptyMap()

    private val table = Table()
    private var lastLayoutHashCode = UNINITIALIZED_HASH
    private var initialized = false

    private val paddingHorizontal: Int
        get() = paddingLeft + paddingRight

    private val paddingVertical: Int
        get() = paddingTop + paddingBottom

    init {
        setWillNotDraw(false)
        initialized = true
    }

    override fun onViewAdded(child: View) {
        super.onViewAdded(child)
        invalidateStructure()
    }

    override fun onViewRemoved(child: View) {
        super.onViewRemoved(child)
        invalidateStructure()
    }

    override fun requestLayout() {
        super.requestLayout()
        if (initialized) {
            invalidateMeasurement()
        }
    }

    override fun onMeasure(widthMeasureSpec: Int, heightMeasureSpec: Int) {
        val start = SystemClock.elapsedRealtime()

        checkConsistency()
        invalidateMeasurement()

        val paddingHorizontal = paddingHorizontal
        val paddingVertical = paddingVertical

        val widthSpecWithoutPadding = MeasureSpec.makeMeasureSpec(
            MeasureSpec.getSize(widthMeasureSpec - paddingHorizontal),
            MeasureSpec.getMode(widthMeasureSpec)
        )
        val heightSpecWithoutPadding = MeasureSpec.makeMeasureSpec(
            MeasureSpec.getSize(heightMeasureSpec - paddingVertical),
            MeasureSpec.getMode(heightMeasureSpec)
        )

        measureChildrenInitial(widthSpecWithoutPadding, heightSpecWithoutPadding)

        val contentWidth = table.measureWidth(widthSpecWithoutPadding)
        remeasureChildrenWidth(widthSpecWithoutPadding, heightSpecWithoutPadding)

        val contentHeight = table.measureHeight(heightSpecWithoutPadding)
        remeasureChildrenHeight(widthSpecWithoutPadding, heightSpecWithoutPadding)

        val measuredWidth = max(contentWidth + paddingHorizontal, suggestedMinimumWidth)
        val measuredHeight = max(contentHeight + paddingVertical, suggestedMinimumHeight)

        setMeasuredDimension(
            resolveSizeAndState(measuredWidth, widthMeasureSpec, 0),
            resolveSizeAndState(measuredHeight, heightMeasureSpec, 0)
        )

        val duration = SystemClock.elapsedRealtime() - start
        KLog.i(TAG) { "onMeasure() performed in $duration ms" }
    }

    private fun measureChildrenInitial(widthSpec: Int, heightSpec: Int) {
        forEach(significantOnly = true) { child ->
            val params = child.lp
            val width = if (params.width == LayoutParams.MATCH_PARENT) LayoutParams.WRAP_CONTENT else params.width
            val height = if (params.height == LayoutParams.MATCH_PARENT) LayoutParams.WRAP_CONTENT else params.height
            measureChild(child, widthSpec, heightSpec, width, height)
        }
    }

    private fun measureChild(
        child: View,
        parentWidthSpec: Int,
        parentHeightSpec: Int,
        childWidth: Int,
        childHeight: Int
    ) {
        val childWidthSpec = getChildMeasureSpec(parentWidthSpec, 0,
            childWidth, child.minimumWidth, child.lp.maxWidth)
        val childHeightSpec = getChildMeasureSpec(parentHeightSpec, 0,
            childHeight, child.minimumHeight, child.lp.maxHeight)
        child.measure(childWidthSpec, childHeightSpec)
    }

    private fun remeasureChildrenWidth(widthSpec: Int, heightSpec: Int) {
        val cells = table.cells
        val columns = table.columns

        var index = 0
        forEach(significantOnly = true) { child ->
            val params = child.lp
            if (params.width != LayoutParams.MATCH_PARENT) {
                index++
                return@forEach
            }

            val cell = cells[index]
            val cellWidth = cell.width(columns) - params.horizontalMargins
            measureMatchParentChild(child, widthSpec, heightSpec, params.width, params.height, cellWidth, 0)
            index++
        }
    }

    private fun remeasureChildrenHeight(widthSpec: Int, heightSpec: Int) {
        val cells = table.cells
        val columns = table.columns
        val rows = table.rows

        var index = 0
        forEach(significantOnly = true) { child ->
            val params = child.lp
            if (params.height != LayoutParams.MATCH_PARENT) {
                index++
                return@forEach
            }

            val cell = cells[index]
            val cellWidth = cell.width(columns) - params.horizontalMargins
            val cellHeight = cell.height(rows) - params.verticalMargins
            measureMatchParentChild(child, widthSpec, heightSpec, params.width, params.height, cellWidth, cellHeight)
            index++
        }
    }

    private fun measureMatchParentChild(
        child: View,
        parentWidthSpec: Int,
        parentHeightSpec: Int,
        childWidth: Int,
        childHeight: Int,
        cellWidth: Int,
        cellHeight: Int
    ) {
        val childWidthSpec = if (childWidth == LayoutParams.MATCH_PARENT) {
            MeasureSpec.makeMeasureSpec(cellWidth, MeasureSpec.EXACTLY)
        } else {
            getChildMeasureSpec(parentWidthSpec, 0, childWidth, child.minimumWidth, child.lp.maxWidth)
        }
        val childHeightSpec = if (childHeight == LayoutParams.MATCH_PARENT) {
            MeasureSpec.makeMeasureSpec(cellHeight, MeasureSpec.EXACTLY)
        } else {
            getChildMeasureSpec(parentHeightSpec, 0, childHeight, child.minimumHeight, child.lp.maxHeight)
        }
        child.measure(childWidthSpec, childHeightSpec)
    }

    override fun onLayout(changed: Boolean, left: Int, top: Int, right: Int, bottom: Int) {
        val start = SystemClock.elapsedRealtime()

        checkConsistency()

        val columns = table.columns
        val rows = table.rows
        val cells = table.cells

        val offsetLeft = calculateGridHorizontalPosition()
        val offsetTop = calculateGridVerticalPosition()

        var index = 0
        forEach(significantOnly = true) { child ->
            val params = child.lp
            val cell = cells[index]

            val cellLeft = cell.left(columns) + params.leftMargin
            val cellTop = cell.top(rows) + params.topMargin
            val cellWidth = cell.right(columns) - cellLeft - params.rightMargin
            val cellHeight = cell.bottom(rows) - cellTop - params.bottomMargin

            var childLeft = calculateChildHorizontalPosition(cellLeft, cellWidth, child.measuredWidth, params.gravity)
            var childTop = calculateChildVerticalPosition(cellTop, cellHeight, child.measuredHeight, params.gravity)

            childLeft += offsetLeft
            childTop += offsetTop

            child.layout(childLeft, childTop, childLeft + child.measuredWidth, childTop + child.measuredHeight)
            index++
        }

        val duration = SystemClock.elapsedRealtime() - start
        KLog.i(TAG) { "onLayout() performed in $duration ms" }
    }

    override fun onDraw(canvas: Canvas) {
        super.onDraw(canvas)

        val columns = table.columns
        val rows = table.rows
        if (columns.isEmpty() || rows.isEmpty()) return

        val offsetLeft = calculateGridHorizontalPosition()
        val offsetTop = calculateGridVerticalPosition()

        drawHeaderBackground(canvas, columns, rows, offsetLeft, offsetTop)
        drawStripedBackgrounds(canvas, columns, rows, offsetLeft, offsetTop)
        drawRowBackgrounds(canvas, columns, rows, offsetLeft, offsetTop)
        drawCellBackgrounds(canvas, columns, rows, offsetLeft, offsetTop)
        drawRowSeparators(canvas, columns, rows, offsetLeft, offsetTop)
        drawColumnSeparators(canvas, columns, rows, offsetLeft, offsetTop)
        drawHeaderSeparator(canvas, columns, rows, offsetLeft, offsetTop)
    }

    private fun drawHeaderBackground(
        canvas: Canvas,
        columns: List<Line>,
        rows: List<Line>,
        offsetLeft: Int,
        offsetTop: Int
    ) {
        val bg = headerBackground ?: return
        if (headerRowCount <= 0 || rows.isEmpty()) return

        val headerEndRow = min(headerRowCount, rows.size) - 1
        val left = offsetLeft + columns.first().offset
        val top = offsetTop + rows.first().offset
        val right = offsetLeft + columns.last().let { it.offset + it.size }
        val bottom = offsetTop + rows[headerEndRow].let { it.offset + it.size }

        bg.setBounds(left, top, right, bottom)
        bg.draw(canvas)
    }

    private fun drawStripedBackgrounds(
        canvas: Canvas,
        columns: List<Line>,
        rows: List<Line>,
        offsetLeft: Int,
        offsetTop: Int
    ) {
        val evenBg = stripedEvenBackground
        val oddBg = stripedOddBackground
        if (evenBg == null && oddBg == null) return

        val bodyStartRow = headerRowCount
        val left = offsetLeft + columns.first().offset
        val right = offsetLeft + columns.last().let { it.offset + it.size }

        for (i in bodyStartRow until rows.size) {
            val bodyRowIndex = i - bodyStartRow
            val bg = if (bodyRowIndex % 2 == 0) evenBg else oddBg
            bg ?: continue

            val row = rows[i]
            val top = offsetTop + row.offset
            val bottom = top + row.size

            bg.setBounds(left, top, right, bottom)
            bg.draw(canvas)
        }
    }

    private fun drawRowBackgrounds(
        canvas: Canvas,
        columns: List<Line>,
        rows: List<Line>,
        offsetLeft: Int,
        offsetTop: Int
    ) {
        if (rowBackgrounds.isEmpty()) return

        val left = offsetLeft + columns.first().offset
        val right = offsetLeft + columns.last().let { it.offset + it.size }

        rowBackgrounds.forEach { (rowIndex, bg) ->
            if (rowIndex in rows.indices) {
                val row = rows[rowIndex]
                val top = offsetTop + row.offset
                val bottom = top + row.size
                bg.setBounds(left, top, right, bottom)
                bg.draw(canvas)
            }
        }
    }

    private fun drawCellBackgrounds(
        canvas: Canvas,
        columns: List<Line>,
        rows: List<Line>,
        offsetLeft: Int,
        offsetTop: Int
    ) {
        if (cellBackgrounds.isEmpty()) return

        val cells = table.cells

        cellBackgrounds.forEach { (cellIndex, bg) ->
            if (cellIndex in cells.indices) {
                val cell = cells[cellIndex]
                val left = offsetLeft + cell.left(columns)
                val top = offsetTop + cell.top(rows)
                val right = offsetLeft + cell.right(columns)
                val bottom = offsetTop + cell.bottom(rows)
                bg.setBounds(left, top, right, bottom)
                bg.draw(canvas)
            }
        }
    }

    private fun drawRowSeparators(
        canvas: Canvas,
        columns: List<Line>,
        rows: List<Line>,
        offsetLeft: Int,
        offsetTop: Int
    ) {
        val drawable = rowSeparatorDrawable ?: return
        val separatorHeight = drawable.intrinsicHeight

        val left = offsetLeft + columns.first().offset
        val right = offsetLeft + columns.last().let { it.offset + it.size }

        if (rowSeparatorShowAtStart && rows.isNotEmpty()) {
            val top = offsetTop + rows.first().offset - separatorHeight
            drawable.setBounds(left, top, right, top + separatorHeight)
            drawable.draw(canvas)
        }

        if (rowSeparatorShowBetween) {
            for (i in 0 until rows.size - 1) {
                if (i == headerRowCount - 1) continue
                val row = rows[i]
                val top = offsetTop + row.offset + row.size
                drawable.setBounds(left, top, right, top + separatorHeight)
                drawable.draw(canvas)
            }
        }

        if (rowSeparatorShowAtEnd && rows.isNotEmpty()) {
            val lastRow = rows.last()
            val top = offsetTop + lastRow.offset + lastRow.size
            drawable.setBounds(left, top, right, top + separatorHeight)
            drawable.draw(canvas)
        }
    }

    private fun drawColumnSeparators(
        canvas: Canvas,
        columns: List<Line>,
        rows: List<Line>,
        offsetLeft: Int,
        offsetTop: Int
    ) {
        val drawable = columnSeparatorDrawable ?: return
        val separatorWidth = drawable.intrinsicWidth

        val top = offsetTop + rows.first().offset
        val bottom = offsetTop + rows.last().let { it.offset + it.size }

        if (columnSeparatorShowAtStart && columns.isNotEmpty()) {
            val left = offsetLeft + columns.first().offset - separatorWidth
            drawable.setBounds(left, top, left + separatorWidth, bottom)
            drawable.draw(canvas)
        }

        if (columnSeparatorShowBetween) {
            for (i in 0 until columns.size - 1) {
                val col = columns[i]
                val left = offsetLeft + col.offset + col.size
                drawable.setBounds(left, top, left + separatorWidth, bottom)
                drawable.draw(canvas)
            }
        }

        if (columnSeparatorShowAtEnd && columns.isNotEmpty()) {
            val lastCol = columns.last()
            val left = offsetLeft + lastCol.offset + lastCol.size
            drawable.setBounds(left, top, left + separatorWidth, bottom)
            drawable.draw(canvas)
        }
    }

    private fun drawHeaderSeparator(
        canvas: Canvas,
        columns: List<Line>,
        rows: List<Line>,
        offsetLeft: Int,
        offsetTop: Int
    ) {
        val drawable = headerSeparatorDrawable ?: return
        if (headerRowCount <= 0 || headerRowCount >= rows.size) return

        val separatorHeight = drawable.intrinsicHeight
        val left = offsetLeft + columns.first().offset
        val right = offsetLeft + columns.last().let { it.offset + it.size }
        val headerEndRow = rows[headerRowCount - 1]
        val top = offsetTop + headerEndRow.offset + headerEndRow.size

        drawable.setBounds(left, top, right, top + separatorHeight)
        drawable.draw(canvas)
    }

    private fun calculateGridHorizontalPosition(): Int {
        val horizontalGravity = gravity and Gravity.HORIZONTAL_GRAVITY_MASK
        val gridWidth = table.measuredWidth
        val widthWithoutPaddings = measuredWidth - paddingLeft - paddingRight
        return when (horizontalGravity) {
            Gravity.RIGHT -> paddingLeft + widthWithoutPaddings - gridWidth
            Gravity.CENTER_HORIZONTAL -> paddingLeft + (widthWithoutPaddings - gridWidth) / 2
            else -> paddingLeft
        }
    }

    private fun calculateGridVerticalPosition(): Int {
        val verticalGravity = gravity and Gravity.VERTICAL_GRAVITY_MASK
        val gridHeight = table.measuredHeight
        val heightWithoutPaddings = measuredHeight - paddingTop - paddingBottom
        return when (verticalGravity) {
            Gravity.BOTTOM -> paddingTop + heightWithoutPaddings - gridHeight
            Gravity.CENTER_VERTICAL -> paddingTop + (heightWithoutPaddings - gridHeight) / 2
            else -> paddingTop
        }
    }

    private fun calculateChildHorizontalPosition(cellLeft: Int, cellWidth: Int, childWidth: Int, gravity: Int): Int {
        return when (gravity and Gravity.HORIZONTAL_GRAVITY_MASK) {
            Gravity.RIGHT -> cellLeft + cellWidth - childWidth
            Gravity.CENTER_HORIZONTAL -> cellLeft + (cellWidth - childWidth) / 2
            else -> cellLeft
        }
    }

    private fun calculateChildVerticalPosition(cellTop: Int, cellHeight: Int, childHeight: Int, gravity: Int): Int {
        return when (gravity and Gravity.VERTICAL_GRAVITY_MASK) {
            Gravity.BOTTOM -> cellTop + cellHeight - childHeight
            Gravity.CENTER_VERTICAL -> cellTop + (cellHeight - childHeight) / 2
            else -> cellTop
        }
    }

    private fun invalidateStructure() {
        lastLayoutHashCode = UNINITIALIZED_HASH
        table.invalidateStructure()
    }

    private fun invalidateMeasurement() = table.invalidateMeasurement()

    private fun checkConsistency() {
        if (lastLayoutHashCode == UNINITIALIZED_HASH) {
            validateLayoutParams()
            lastLayoutHashCode = computeLayoutHashCode()
        } else if (lastLayoutHashCode != computeLayoutHashCode()) {
            invalidateStructure()
            checkConsistency()
        }
    }

    private fun computeLayoutHashCode(): Int {
        var result = 223
        forEach(significantOnly = true) { child ->
            result = 31 * result + child.lp.hashCode()
        }
        return result
    }

    private fun validateLayoutParams() {
        val childCount = childCount
        for (i in 0 until childCount) {
            val child = getChildAt(i)
            val params = child.lp
            if (params.columnSpan < 0 || params.rowSpan < 0) {
                throw IllegalStateException("Negative spans are not supported.")
            }
        }
    }

    sealed class ColumnWidth {
        data class Fixed(val valuePx: Int) : ColumnWidth()
        data class Weight(val weight: Float) : ColumnWidth()
        object WrapContent : ColumnWidth()
    }

    companion object {
        private const val TAG = "TableContainer"
        private const val MAX_SIZE = 32768
        private const val UNINITIALIZED_HASH = 0
    }

    private class Cell(
        @JvmField val viewIndex: Int,
        @JvmField val columnIndex: Int,
        @JvmField val rowIndex: Int,
        @JvmField var columnSpan: Int,
        @JvmField var rowSpan: Int
    )

    private fun Cell.left(columns: List<Line>): Int {
        val firstColumn = columns[columnIndex]
        return firstColumn.offset
    }

    private fun Cell.right(columns: List<Line>): Int {
        val lastColumn = columns[columnIndex + columnSpan - 1]
        return lastColumn.offset + lastColumn.size
    }

    private fun Cell.top(rows: List<Line>): Int {
        val firstRow = rows[rowIndex]
        return firstRow.offset
    }

    private fun Cell.bottom(rows: List<Line>): Int {
        val lastRow = rows[rowIndex + rowSpan - 1]
        return lastRow.offset + lastRow.size
    }

    private fun Cell.width(columns: List<Line>): Int = right(columns) - left(columns)

    private fun Cell.height(rows: List<Line>): Int = bottom(rows) - top(rows)

    private class CellList(
        val cells: List<Cell>,
        val rowCount: Int
    ) : List<Cell> by cells {
        init {
            require(rowCount >= 0) { "Row count can not be negative: $rowCount." }
        }

        companion object {
            fun empty(): CellList {
                return CellList(emptyList(), 0)
            }
        }
    }

    private class CellProjection(
        @JvmField val lineIndex: Int,
        @JvmField val contentSize: Int,
        @JvmField val marginStart: Int,
        @JvmField val marginEnd: Int,
        @JvmField val span: Int,
        @JvmField val weight: Float
    ) {
        val size get() = contentSize + marginStart + marginEnd
        val specificSize get() = size / span
    }

    internal class Line {
        var offset: Int = 0
        var contentSize: Int = 0
            private set
        var size: Int = 0
            private set
        var weight: Float = 0.0f
            private set

        val marginSize: Int get() = size - contentSize

        val isFlexible: Boolean get() = weight > DivLayoutParams.DEFAULT_WEIGHT

        fun include(
            contentSize: Int = 0,
            size: Int = 0,
            weight: Float = 0.0f
        ) {
            this.contentSize = max(this.contentSize, contentSize)
            this.size = max(this.size, size)
            this.weight = max(this.weight, weight)
        }

        fun resize(contentSize: Int, size: Int) {
            this.contentSize = contentSize
            this.size = size
        }
    }

    private class SizeConstraint(
        @JvmField var min: Int = 0,
        @JvmField var max: Int = MAX_SIZE
    ) {
        fun set(measureSpec: Int) {
            val mode = MeasureSpec.getMode(measureSpec)
            val size = MeasureSpec.getSize(measureSpec)
            when (mode) {
                MeasureSpec.UNSPECIFIED -> apply { min = 0; max = MAX_SIZE }
                MeasureSpec.EXACTLY -> apply { min = size; max = size }
                MeasureSpec.AT_MOST -> apply { min = 0; max = size }
            }
        }
    }

    private inner class Table {

        var columnCount: Int = 1
            set(value) {
                if (value > 0 && field != value) {
                    field = value
                    invalidateStructure()
                }
            }

        val rowCount: Int get() = _cells.get().rowCount

        val cells: List<Cell> get() = _cells.get()

        val columns: List<Line> get() = _columns.get()

        val rows: List<Line> get() = _rows.get()

        val measuredWidth: Int
            get() = if (_columns.initialized) calculateSize(_columns.get()) else 0

        val measuredHeight: Int
            get() = if (_rows.initialized) calculateSize(_rows.get()) else 0

        private val _cells = TableResettable { distributeCells() }
        private val _columns = TableResettable { measureColumns() }
        private val _rows = TableResettable { measureRows() }

        private val widthConstraint = SizeConstraint()
        private val heightConstraint = SizeConstraint()

        private val width: Int get() = calculateSize(columns)
        private val height: Int get() = calculateSize(rows)

        fun invalidateStructure() {
            _cells.reset()
            invalidateMeasurement()
        }

        fun invalidateMeasurement() {
            _columns.reset()
            _rows.reset()
        }

        fun measureWidth(widthSpec: Int): Int {
            widthConstraint.set(widthSpec)
            return max(widthConstraint.min, min(width, widthConstraint.max))
        }

        fun measureHeight(heightSpec: Int): Int {
            heightConstraint.set(heightSpec)
            return max(heightConstraint.min, min(height, heightConstraint.max))
        }

        private fun calculateSize(lines: List<Line>): Int {
            if (lines.isEmpty()) return 0
            val lastLine = lines.last()
            return lastLine.offset + lastLine.size
        }

        private fun distributeCells(): CellList {
            if (childCount == 0) return CellList.empty()

            val columnCount = columnCount
            val cells = ArrayList<Cell>(childCount)

            // Track absolute row height per column (no normalization)
            val cellHeights = IntArray(columnCount)

            forEachIndexed(significantOnly = true) { child, index ->
                val minHeight = cellHeights.minOrNull() ?: 0
                val column = cellHeights.indexOf(minHeight)
                val row = minHeight

                val params = child.lp
                val columnSpan = min(params.columnSpan, columnCount - column)
                val rowSpan = params.rowSpan

                cells.add(Cell(index, column, row, columnSpan, rowSpan))
                for (i in column until column + columnSpan) {
                    cellHeights[i] = row + rowSpan
                }
            }

            val rowCount = cellHeights.maxOrNull() ?: 0
            return CellList(cells, rowCount)
        }

        private fun measureColumns(): List<Line> {
            return measureAxis(columnCount, widthConstraint, applyColumnWidths = true) { cell, view ->
                val params = view.lp
                CellProjection(
                    lineIndex = cell.columnIndex,
                    contentSize = view.measuredWidth,
                    marginStart = params.leftMargin,
                    marginEnd = params.rightMargin,
                    span = cell.columnSpan,
                    weight = params.columnWeight
                )
            }
        }

        private fun measureRows(): List<Line> {
            return measureAxis(rowCount, heightConstraint, applyColumnWidths = false) { cell, view ->
                val params = view.lp
                CellProjection(
                    lineIndex = cell.rowIndex,
                    contentSize = view.measuredHeight,
                    marginStart = params.topMargin,
                    marginEnd = params.bottomMargin,
                    span = cell.rowSpan,
                    weight = params.rowWeight
                )
            }
        }

        private fun measureAxis(
            count: Int,
            constraint: SizeConstraint,
            applyColumnWidths: Boolean,
            projection: (Cell, View) -> CellProjection
        ): List<Line> {
            val cells = _cells.get()
            val result = List(count) { Line() }

            if (applyColumnWidths) {
                applyColumnWidthsIfApplicable(result, constraint)
            }
            applyFixedParamsToLines(cells, result, projection)
            applySpansToLines(cells, result, projection)
            adjustWeightedLines(result, constraint)
            align(result)

            return result
        }

        private fun applyColumnWidthsIfApplicable(lines: List<Line>, constraint: SizeConstraint) {
            if (lines.isEmpty()) return
            val widths = columnWidths
            if (widths.isEmpty()) return

            val availableWidth = constraint.max
            var totalWeight = 0f
            var fixedTotal = 0

            for (i in lines.indices) {
                if (i >= widths.size) break
                when (val w = widths[i]) {
                    is ColumnWidth.Fixed -> {
                        lines[i].include(contentSize = w.valuePx, size = w.valuePx)
                        fixedTotal += w.valuePx
                    }
                    is ColumnWidth.Weight -> totalWeight += w.weight
                    is ColumnWidth.WrapContent -> Unit
                }
            }

            if (totalWeight > 0f && availableWidth < MAX_SIZE) {
                val remainingWidth = max(0, availableWidth - fixedTotal)
                for (i in lines.indices) {
                    if (i >= widths.size) break
                    val w = widths[i]
                    if (w is ColumnWidth.Weight) {
                        val size = ceil(w.weight / totalWeight * remainingWidth).toInt()
                        lines[i].include(contentSize = size, size = size, weight = w.weight)
                    }
                }
            }
        }

        private fun applyFixedParamsToLines(
            cells: List<Cell>,
            lines: List<Line>,
            projection: (Cell, View) -> CellProjection
        ) {
            cells.iterate { cell ->
                val child = getChildAt(cell.viewIndex)
                val projected = projection(cell, child)
                if (projected.span == 1) {
                    val measurement = lines[projected.lineIndex]
                    measurement.include(
                        contentSize = projected.contentSize,
                        size = projected.size,
                        weight = projected.weight
                    )
                } else {
                    val weight = projected.weight / projected.span
                    for (i in 0 until projected.span) {
                        val measurement = lines[projected.lineIndex + i]
                        measurement.include(weight = weight)
                    }
                }
            }
        }

        private fun applySpansToLines(
            cells: List<Cell>,
            lines: List<Line>,
            projection: (Cell, View) -> CellProjection
        ) {
            val spannedCells = ArrayList<CellProjection>()
            cells.iterate { cell ->
                val child = getChildAt(cell.viewIndex)
                val projected = projection(cell, child)
                if (projected.span > 1) {
                    spannedCells.add(projected)
                }
            }
            spannedCells.sortWith(SpannedCellComparator)

            spannedCells.iterate { projected ->
                val first = projected.lineIndex
                val last = projected.lineIndex + projected.span - 1

                var undistributedSize = projected.size
                var flexibleSize = undistributedSize
                var totalWeight = 0.0f
                var unusedLineCount = 0
                for (i in first..last) {
                    val line = lines[i]
                    undistributedSize -= line.size
                    if (line.isFlexible) {
                        totalWeight += line.weight
                    } else {
                        if (line.contentSize == 0) unusedLineCount++
                        flexibleSize -= line.size
                    }
                }
                if (totalWeight > 0.0f) {
                    for (i in first..last) {
                        val line = lines[i]
                        if (line.isFlexible) {
                            val size = ceil(line.weight / totalWeight * flexibleSize).toInt()
                            line.include(contentSize = size - line.marginSize, size = size)
                        }
                    }
                } else if (undistributedSize > 0) {
                    for (i in first..last) {
                        val line = lines[i]
                        if (unusedLineCount > 0) {
                            if (line.contentSize == 0 && !line.isFlexible) {
                                val extraSize = undistributedSize / unusedLineCount
                                line.include(contentSize = line.contentSize + extraSize, size = line.size + extraSize)
                            }
                        } else {
                            val extraSize = undistributedSize / projected.span
                            line.include(contentSize = line.contentSize + extraSize, size = line.size + extraSize)
                        }
                    }
                }
            }
        }

        private fun adjustWeightedLines(
            lines: List<Line>,
            constraint: SizeConstraint
        ) {
            var totalFixedSize = 0
            var totalWeight = 0.0f
            var maxWeightedSize = 0.0f
            lines.iterate { line ->
                if (line.isFlexible) {
                    totalWeight += line.weight
                    maxWeightedSize = max(maxWeightedSize, line.size / line.weight)
                } else {
                    totalFixedSize += line.size
                }
            }

            var maxTotalSize = 0
            lines.iterate { line ->
                maxTotalSize += if (line.isFlexible) {
                    ceil((line.weight * maxWeightedSize)).toInt()
                } else {
                    line.size
                }
            }

            val desiredTotalSize = min(max(constraint.min, maxTotalSize), constraint.max)
            val totalWeightedSize = max(0, desiredTotalSize - totalFixedSize)
            if (totalWeight <= 0f) return
            val weightedSize = totalWeightedSize / totalWeight
            lines.iterate { line ->
                if (line.isFlexible) {
                    val size = ceil((line.weight * weightedSize)).toInt()
                    line.resize(contentSize = max(0, size - line.marginSize), size = size)
                }
            }
        }

        private fun align(lines: List<Line>) {
            var totalOffset = 0
            for (i in lines.indices) {
                val measurement = lines[i]
                measurement.offset = totalOffset
                totalOffset += measurement.size
            }
        }
    }

    private object SpannedCellComparator : Comparator<CellProjection> {
        override fun compare(lhs: CellProjection, rhs: CellProjection): Int {
            return when {
                lhs.specificSize < rhs.specificSize -> 1
                lhs.specificSize > rhs.specificSize -> -1
                else -> 0
            }
        }
    }
}

private class TableResettable<T>(private val initializer: () -> T) {
    val initialized: Boolean get() = value != null
    private var value: T? = null

    fun get(): T {
        if (value == null) {
            value = initializer()
        }
        return value ?: throw ConcurrentModificationException("Set to null by another thread")
    }

    fun reset() {
        value = null
    }
}

private val DivLayoutParams.rowWeight: Float
    get() = verticalWeight

private val DivLayoutParams.columnWeight: Float
    get() = horizontalWeight
