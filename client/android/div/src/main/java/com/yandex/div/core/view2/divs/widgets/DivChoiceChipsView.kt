package com.yandex.div.core.view2.divs.widgets

import android.content.Context
import android.graphics.Canvas
import android.graphics.Color
import android.graphics.Typeface
import android.graphics.drawable.GradientDrawable
import android.util.TypedValue
import android.view.Gravity
import android.view.View
import android.view.ViewGroup
import android.widget.FrameLayout
import android.widget.HorizontalScrollView
import android.widget.LinearLayout
import android.widget.TextView
import com.yandex.div.core.annotations.Mockable
import com.yandex.div.core.view2.divs.dpToPx
import com.yandex.div2.Div

@Mockable
internal class DivChoiceChipsView(context: Context) : FrameLayout(context),
    DivHolderView<Div.ChoiceChips> by DivHolderViewMixin(),
    DivAnimator {

    data class ChipItem(
        val value: String,
        val text: String,
        val iconUrl: String?,
        val isEnabled: Boolean,
        val isSelectedByDefault: Boolean
    )

    data class ChipColors(
        val selectedBg: Int,
        val selectedText: Int,
        val selectedBorder: Int,
        val defaultBg: Int,
        val defaultText: Int,
        val defaultBorder: Int,
        val disabledBg: Int,
        val disabledText: Int,
        val disabledBorder: Int,
        val hasShadow: Boolean
    )

    enum class SelectionMode {
        SINGLE, MULTIPLE
    }

    enum class LayoutMode {
        SCROLL, WRAP
    }

    var onChipClickListener: ((String) -> Unit)? = null

    private var chipItems: List<ChipItem> = emptyList()
    private var selectedValues: MutableSet<String> = mutableSetOf()
    private var selectionMode: SelectionMode = SelectionMode.SINGLE
    private var layoutMode: LayoutMode = LayoutMode.SCROLL

    private var chipColors: ChipColors = ChipColors(
        selectedBg = 0x1F1976D2.toInt(),
        selectedText = 0xFF1976D2.toInt(),
        selectedBorder = 0xFF1976D2.toInt(),
        defaultBg = 0x00000000,
        defaultText = 0xFF000000.toInt(),
        defaultBorder = 0xFF757575.toInt(),
        disabledBg = 0x00000000,
        disabledText = 0xFFBDBDBD.toInt(),
        disabledBorder = 0xFFE0E0E0.toInt(),
        hasShadow = false
    )

    private var chipSpacingDp: Int = 8
    private var rowSpacingDp: Int = 8
    private var cornerRadiusDp: Float = 16f
    private var chipHeightDp: Int = 32
    private var chipPaddingHorizontalDp: Int = 12
    private var chipPaddingVerticalDp: Int = 4
    private var showCheckmark: Boolean = false
    private var iconSizeDp: Int = 18

    private var chipTextSizeSp: Float = 14f
    private var chipTypeface: Typeface = Typeface.DEFAULT
    private var chipFontWeight: Int = Typeface.NORMAL

    private val flowLayout = FlowLayout(context)
    private val scrollView = HorizontalScrollView(context).apply {
        isHorizontalScrollBarEnabled = false
        layoutParams = LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT)
    }
    private val scrollLinearLayout = LinearLayout(context).apply {
        orientation = LinearLayout.HORIZONTAL
        layoutParams = LinearLayout.LayoutParams(
            LinearLayout.LayoutParams.WRAP_CONTENT,
            LinearLayout.LayoutParams.WRAP_CONTENT
        )
    }

    init {
        scrollView.addView(scrollLinearLayout)
        addView(scrollView)
    }

    fun setLayoutMode(mode: LayoutMode) {
        if (layoutMode == mode) return
        layoutMode = mode
        rebuildChips()
    }

    fun setChipItems(items: List<ChipItem>) {
        chipItems = items
        // Apply default selections
        val defaults = items.filter { it.isSelectedByDefault }.map { it.value }.toSet()
        if (defaults.isNotEmpty() && selectedValues.isEmpty()) {
            selectedValues.addAll(defaults)
        }
        rebuildChips()
    }

    fun setSelectedValues(values: Any?) {
        selectedValues.clear()
        when (values) {
            is String -> {
                if (values.isNotEmpty()) {
                    selectedValues.add(values)
                }
            }
            is List<*> -> {
                values.forEach { v ->
                    v?.toString()?.let { selectedValues.add(it) }
                }
            }
            is org.json.JSONArray -> {
                for (i in 0 until values.length()) {
                    values.optString(i)?.let { selectedValues.add(it) }
                }
            }
        }
        updateChipStates()
    }

    fun setSelectionMode(mode: SelectionMode) {
        selectionMode = mode
    }

    fun setChipColors(colors: ChipColors) {
        chipColors = colors
        updateChipStates()
    }

    fun setChipSpacing(spacingDp: Int) {
        chipSpacingDp = spacingDp
        rebuildChips()
    }

    fun setRowSpacing(spacingDp: Int) {
        rowSpacingDp = spacingDp
        rebuildChips()
    }

    fun setCornerRadius(radiusDp: Float) {
        cornerRadiusDp = radiusDp
        updateChipStates()
    }

    fun setChipHeight(heightDp: Int) {
        chipHeightDp = heightDp
        rebuildChips()
    }

    fun setChipPadding(horizontalDp: Int, verticalDp: Int) {
        chipPaddingHorizontalDp = horizontalDp
        chipPaddingVerticalDp = verticalDp
        rebuildChips()
    }

    fun setShowCheckmark(show: Boolean) {
        showCheckmark = show
        updateChipStates()
    }

    fun setIconSize(sizeDp: Int) {
        iconSizeDp = sizeDp
        rebuildChips()
    }

    fun setFontProperties(textSizeSp: Float, typeface: Typeface, fontWeight: Int) {
        chipTextSizeSp = textSizeSp
        chipTypeface = typeface
        chipFontWeight = fontWeight
        rebuildChips()
    }

    private fun rebuildChips() {
        val container = getActiveContainer()
        container.removeAllViews()

        switchToActiveContainer()

        val spacingPx = chipSpacingDp.dpToPx(resources.displayMetrics)
        val heightPx = chipHeightDp.dpToPx(resources.displayMetrics)
        val hPaddingPx = chipPaddingHorizontalDp.dpToPx(resources.displayMetrics)
        val vPaddingPx = chipPaddingVerticalDp.dpToPx(resources.displayMetrics)

        chipItems.forEachIndexed { index, item ->
            val chip = createChipView(item, heightPx, hPaddingPx, vPaddingPx)

            when (layoutMode) {
                LayoutMode.SCROLL -> {
                    val lp = LinearLayout.LayoutParams(
                        LinearLayout.LayoutParams.WRAP_CONTENT,
                        heightPx
                    )
                    if (index > 0) {
                        lp.leftMargin = spacingPx
                    }
                    container.addView(chip, lp)
                }
                LayoutMode.WRAP -> {
                    val lp = ViewGroup.LayoutParams(
                        ViewGroup.LayoutParams.WRAP_CONTENT,
                        heightPx
                    )
                    container.addView(chip, lp)
                }
            }
        }

        if (layoutMode == LayoutMode.WRAP) {
            flowLayout.horizontalSpacing = spacingPx
            flowLayout.verticalSpacing = rowSpacingDp.dpToPx(resources.displayMetrics)
        }
    }

    private fun getActiveContainer(): ViewGroup {
        return when (layoutMode) {
            LayoutMode.SCROLL -> scrollLinearLayout
            LayoutMode.WRAP -> flowLayout
        }
    }

    private fun switchToActiveContainer() {
        removeAllViews()
        when (layoutMode) {
            LayoutMode.SCROLL -> {
                scrollLinearLayout.removeAllViews()
                if (scrollView.parent != null) {
                    (scrollView.parent as? ViewGroup)?.removeView(scrollView)
                }
                addView(scrollView)
            }
            LayoutMode.WRAP -> {
                flowLayout.removeAllViews()
                if (flowLayout.parent != null) {
                    (flowLayout.parent as? ViewGroup)?.removeView(flowLayout)
                }
                val lp = LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT)
                addView(flowLayout, lp)
            }
        }
    }

    private fun createChipView(
        item: ChipItem,
        heightPx: Int,
        hPaddingPx: Int,
        vPaddingPx: Int
    ): TextView {
        return TextView(context).apply {
            text = item.text
            tag = item.value
            gravity = Gravity.CENTER
            isSingleLine = true
            setTextSize(TypedValue.COMPLEX_UNIT_SP, chipTextSizeSp)
            typeface = Typeface.create(chipTypeface, chipFontWeight)
            setPadding(hPaddingPx, vPaddingPx, hPaddingPx, vPaddingPx)
            minHeight = heightPx

            isEnabled = item.isEnabled
            isClickable = item.isEnabled

            if (item.isEnabled) {
                setOnClickListener {
                    handleChipClick(item.value)
                }
            }

            applyChipStyle(this, item.value, item.isEnabled)
        }
    }

    private fun handleChipClick(value: String) {
        when (selectionMode) {
            SelectionMode.SINGLE -> {
                selectedValues.clear()
                selectedValues.add(value)
            }
            SelectionMode.MULTIPLE -> {
                if (selectedValues.contains(value)) {
                    selectedValues.remove(value)
                } else {
                    selectedValues.add(value)
                }
            }
        }
        updateChipStates()
        onChipClickListener?.invoke(value)
    }

    private fun updateChipStates() {
        val container = getActiveContainer()
        for (i in 0 until container.childCount) {
            val chip = container.getChildAt(i) as? TextView ?: continue
            val value = chip.tag as? String ?: continue
            val item = chipItems.find { it.value == value } ?: continue
            applyChipStyle(chip, value, item.isEnabled)
        }
    }

    private fun applyChipStyle(chip: TextView, value: String, isEnabled: Boolean) {
        val isSelected = selectedValues.contains(value)

        val bgColor: Int
        val textColor: Int
        val borderColor: Int

        when {
            !isEnabled -> {
                bgColor = chipColors.disabledBg
                textColor = chipColors.disabledText
                borderColor = chipColors.disabledBorder
            }
            isSelected -> {
                bgColor = chipColors.selectedBg
                textColor = chipColors.selectedText
                borderColor = chipColors.selectedBorder
            }
            else -> {
                bgColor = chipColors.defaultBg
                textColor = chipColors.defaultText
                borderColor = chipColors.defaultBorder
            }
        }

        chip.setTextColor(textColor)

        val radiusPx = cornerRadiusDp.dpToPx(resources.displayMetrics).toFloat()
        val borderWidthPx = 1.dpToPx(resources.displayMetrics)

        val background = GradientDrawable().apply {
            shape = GradientDrawable.RECTANGLE
            cornerRadius = radiusPx
            setColor(bgColor)
            setStroke(borderWidthPx, borderColor)
        }
        chip.background = background

        if (chipColors.hasShadow && isEnabled) {
            chip.elevation = 2.dpToPx(resources.displayMetrics).toFloat()
        } else {
            chip.elevation = 0f
        }

        // Checkmark handling
        if (showCheckmark && isSelected && isEnabled) {
            // Use a simple unicode checkmark as compound drawable text prefix
            // This avoids needing drawable resources
            val checkPrefix = "\u2713 "
            val currentText = chipItems.find { it.value == value }?.text ?: value
            if (!chip.text.startsWith(checkPrefix)) {
                chip.text = "$checkPrefix$currentText"
            }
        } else {
            val currentText = chipItems.find { it.value == value }?.text ?: value
            chip.text = currentText
        }
    }

    private fun Float.dpToPx(metrics: android.util.DisplayMetrics): Int {
        return TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, this, metrics).toInt()
    }

    override fun draw(canvas: Canvas) {
        drawBorderClipped(canvas) { super.draw(it) }
    }

    override fun onSizeChanged(width: Int, height: Int, oldWidth: Int, oldHeight: Int) {
        super.onSizeChanged(width, height, oldWidth, oldHeight)
        onBoundsChanged(width, height)
    }

    private inner class FlowLayout(context: Context) : ViewGroup(context) {
        var horizontalSpacing = 0
        var verticalSpacing = 0

        override fun onMeasure(widthMeasureSpec: Int, heightMeasureSpec: Int) {
            val maxWidth = MeasureSpec.getSize(widthMeasureSpec)
            var x = 0
            var y = 0
            var rowHeight = 0
            for (i in 0 until childCount) {
                val child = getChildAt(i)
                if (child.visibility == GONE) continue
                measureChild(child, widthMeasureSpec, heightMeasureSpec)
                if (x + child.measuredWidth > maxWidth && x > 0) {
                    x = 0
                    y += rowHeight + verticalSpacing
                    rowHeight = 0
                }
                x += child.measuredWidth + horizontalSpacing
                rowHeight = maxOf(rowHeight, child.measuredHeight)
            }
            setMeasuredDimension(
                resolveSize(maxWidth, widthMeasureSpec),
                resolveSize(y + rowHeight, heightMeasureSpec)
            )
        }

        override fun onLayout(changed: Boolean, l: Int, t: Int, r: Int, b: Int) {
            val maxWidth = r - l
            var x = 0
            var y = 0
            var rowHeight = 0
            for (i in 0 until childCount) {
                val child = getChildAt(i)
                if (child.visibility == GONE) continue
                if (x + child.measuredWidth > maxWidth && x > 0) {
                    x = 0
                    y += rowHeight + verticalSpacing
                    rowHeight = 0
                }
                child.layout(x, y, x + child.measuredWidth, y + child.measuredHeight)
                x += child.measuredWidth + horizontalSpacing
                rowHeight = maxOf(rowHeight, child.measuredHeight)
            }
        }
    }
}
