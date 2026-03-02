package com.yandex.div.internal.widget

import android.content.Context
import android.graphics.Canvas
import android.graphics.Paint
import android.graphics.RectF
import android.graphics.Typeface
import android.util.TypedValue
import android.view.Gravity
import android.view.View
import android.view.ViewGroup.LayoutParams.MATCH_PARENT
import android.view.ViewGroup.LayoutParams.WRAP_CONTENT
import android.widget.FrameLayout
import android.widget.LinearLayout
import android.widget.TextView
import androidx.annotation.ColorInt
import androidx.core.view.AccessibilityDelegateCompat
import androidx.core.view.ViewCompat
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat

internal open class CounterView(context: Context) : FrameLayout(context) {

    private val container = LinearLayout(context).apply {
        orientation = LinearLayout.HORIZONTAL
        gravity = Gravity.CENTER_VERTICAL
    }

    private val minusButton = CircleButton(context)
    private val plusButton = CircleButton(context)
    private val valueText = TextView(context).apply {
        gravity = Gravity.CENTER
        textAlignment = View.TEXT_ALIGNMENT_CENTER
    }

    var counterValue: Int = 0
        set(value) {
            val clamped = value.coerceIn(minValue, maxValue)
            field = clamped
            valueText.text = clamped.toString()
            updateButtonStates()
        }

    @get:ColorInt
    var buttonColor: Int = DEFAULT_BUTTON_COLOR
        set(value) {
            field = value
            minusButton.circleColor = value
            plusButton.circleColor = value
            updateButtonStates()
        }

    var buttonSizePx: Int = dpToPx(DEFAULT_BUTTON_SIZE_DP)
        set(value) {
            field = value
            updateButtonSizes()
        }

    @get:ColorInt
    var iconColor: Int = DEFAULT_ICON_COLOR
        set(value) {
            field = value
            minusButton.iconColor = value
            plusButton.iconColor = value
        }

    @get:ColorInt
    var disabledButtonColor: Int = DEFAULT_DISABLED_BUTTON_COLOR
        set(value) {
            field = value
            updateButtonStates()
        }

    @get:ColorInt
    var textColor: Int = DEFAULT_TEXT_COLOR
        set(value) {
            field = value
            valueText.setTextColor(value)
        }

    var fontSizePx: Float = spToPx(DEFAULT_FONT_SIZE_SP).toFloat()
        set(value) {
            field = value
            valueText.setTextSize(TypedValue.COMPLEX_UNIT_PX, value)
        }

    var fontWeight: Typeface = Typeface.create(Typeface.DEFAULT, Typeface.BOLD)
        set(value) {
            field = value
            valueText.typeface = value
        }

    var valueWidthPx: Int = dpToPx(DEFAULT_VALUE_WIDTH_DP)
        set(value) {
            field = value
            updateValueTextWidth()
        }

    @get:ColorInt
    var containerBackgroundColor: Int = DEFAULT_BACKGROUND_COLOR
        set(value) {
            field = value
            container.invalidate()
            invalidate()
        }

    @get:ColorInt
    var containerBorderColor: Int = DEFAULT_BORDER_COLOR
        set(value) {
            field = value
            container.invalidate()
            invalidate()
        }

    var containerBorderWidthPx: Int = dpToPx(DEFAULT_BORDER_WIDTH_DP)
        set(value) {
            field = value
            container.invalidate()
            invalidate()
        }

    var containerCornerRadiusPx: Float = dpToPx(DEFAULT_CORNER_RADIUS_DP).toFloat()
        set(value) {
            field = value
            container.invalidate()
            invalidate()
        }

    var containerPaddingPx: Int = dpToPx(DEFAULT_PADDING_DP)
        set(value) {
            field = value
            container.setPadding(value, value, value, value)
            requestLayout()
        }

    var minValue: Int = DEFAULT_MIN_VALUE
        set(value) {
            field = value
            counterValue = counterValue.coerceIn(minValue, maxValue)
            updateButtonStates()
        }

    var maxValue: Int = DEFAULT_MAX_VALUE
        set(value) {
            field = value
            counterValue = counterValue.coerceIn(minValue, maxValue)
            updateButtonStates()
        }

    var step: Int = DEFAULT_STEP
        set(value) {
            field = value.coerceAtLeast(1)
        }

    var onValueChanged: ((Int) -> Unit)? = null
    var onIncrement: ((Int) -> Unit)? = null
    var onDecrement: ((Int) -> Unit)? = null

    private val containerPaint = Paint(Paint.ANTI_ALIAS_FLAG).apply {
        style = Paint.Style.FILL
    }

    private val borderPaint = Paint(Paint.ANTI_ALIAS_FLAG).apply {
        style = Paint.Style.STROKE
    }

    private val containerRect = RectF()

    init {
        addView(container, LayoutParams(WRAP_CONTENT, WRAP_CONTENT, Gravity.CENTER))

        container.setPadding(containerPaddingPx, containerPaddingPx, containerPaddingPx, containerPaddingPx)

        updateButtonSizes()
        updateValueTextWidth()

        container.addView(minusButton)
        container.addView(valueText)
        container.addView(plusButton)

        minusButton.iconType = CircleButton.IconType.MINUS
        plusButton.iconType = CircleButton.IconType.PLUS

        minusButton.setOnClickListener {
            if (isEnabled && counterValue > minValue) {
                counterValue = (counterValue - step).coerceAtLeast(minValue)
                onDecrement?.invoke(counterValue)
                onValueChanged?.invoke(counterValue)
            }
        }

        plusButton.setOnClickListener {
            if (isEnabled && counterValue < maxValue) {
                counterValue = (counterValue + step).coerceAtMost(maxValue)
                onIncrement?.invoke(counterValue)
                onValueChanged?.invoke(counterValue)
            }
        }

        valueText.text = counterValue.toString()
        valueText.setTextColor(textColor)
        valueText.setTextSize(TypedValue.COMPLEX_UNIT_PX, fontSizePx)
        valueText.typeface = fontWeight

        minusButton.circleColor = buttonColor
        plusButton.circleColor = buttonColor
        minusButton.iconColor = iconColor
        plusButton.iconColor = iconColor

        ViewCompat.setAccessibilityDelegate(this, object : AccessibilityDelegateCompat() {
            override fun onInitializeAccessibilityNodeInfo(
                host: View,
                info: AccessibilityNodeInfoCompat
            ) {
                super.onInitializeAccessibilityNodeInfo(host, info)
                info.roleDescription = "counter"
                info.rangeInfo = AccessibilityNodeInfoCompat.RangeInfoCompat.obtain(
                    AccessibilityNodeInfoCompat.RangeInfoCompat.RANGE_TYPE_INT,
                    minValue.toFloat(), maxValue.toFloat(), counterValue.toFloat()
                )
            }
        })
    }

    override fun dispatchDraw(canvas: Canvas) {
        // Draw background pill shape behind children
        containerRect.set(
            container.left.toFloat(),
            container.top.toFloat(),
            container.right.toFloat(),
            container.bottom.toFloat()
        )

        containerPaint.color = containerBackgroundColor
        canvas.drawRoundRect(containerRect, containerCornerRadiusPx, containerCornerRadiusPx, containerPaint)

        if (containerBorderWidthPx > 0) {
            borderPaint.color = containerBorderColor
            borderPaint.strokeWidth = containerBorderWidthPx.toFloat()
            val halfBorder = containerBorderWidthPx / 2f
            containerRect.inset(halfBorder, halfBorder)
            canvas.drawRoundRect(containerRect, containerCornerRadiusPx, containerCornerRadiusPx, borderPaint)
        }

        super.dispatchDraw(canvas)
    }

    override fun setEnabled(enabled: Boolean) {
        super.setEnabled(enabled)
        updateButtonStates()
    }

    private fun updateButtonStates() {
        val canDecrement = isEnabled && counterValue > minValue
        val canIncrement = isEnabled && counterValue < maxValue

        minusButton.isEnabled = canDecrement
        plusButton.isEnabled = canIncrement

        minusButton.circleColor = if (canDecrement) buttonColor else disabledButtonColor
        plusButton.circleColor = if (canIncrement) buttonColor else disabledButtonColor
    }

    private fun updateButtonSizes() {
        val buttonLp = LinearLayout.LayoutParams(buttonSizePx, buttonSizePx)
        minusButton.layoutParams = buttonLp
        plusButton.layoutParams = buttonLp
    }

    private fun updateValueTextWidth() {
        val textLp = LinearLayout.LayoutParams(valueWidthPx, WRAP_CONTENT).apply {
            gravity = Gravity.CENTER_VERTICAL
        }
        valueText.layoutParams = textLp
    }

    private fun dpToPx(dp: Int): Int {
        return TypedValue.applyDimension(
            TypedValue.COMPLEX_UNIT_DIP,
            dp.toFloat(),
            resources.displayMetrics
        ).toInt()
    }

    private fun spToPx(sp: Int): Int {
        return TypedValue.applyDimension(
            TypedValue.COMPLEX_UNIT_SP,
            sp.toFloat(),
            resources.displayMetrics
        ).toInt()
    }

    internal class CircleButton(context: Context) : View(context) {

        enum class IconType { MINUS, PLUS }

        var iconType: IconType = IconType.MINUS
            set(value) {
                field = value
                invalidate()
            }

        @get:ColorInt
        var circleColor: Int = DEFAULT_BUTTON_COLOR
            set(value) {
                field = value
                circlePaint.color = value
                invalidate()
            }

        @get:ColorInt
        var iconColor: Int = DEFAULT_ICON_COLOR
            set(value) {
                field = value
                iconPaint.color = value
                invalidate()
            }

        private val circlePaint = Paint(Paint.ANTI_ALIAS_FLAG).apply {
            style = Paint.Style.FILL
            color = DEFAULT_BUTTON_COLOR
        }

        private val iconPaint = Paint(Paint.ANTI_ALIAS_FLAG).apply {
            style = Paint.Style.STROKE
            strokeWidth = TypedValue.applyDimension(
                TypedValue.COMPLEX_UNIT_DIP, 2f, resources.displayMetrics
            )
            strokeCap = Paint.Cap.ROUND
            color = DEFAULT_ICON_COLOR
        }

        override fun onDraw(canvas: Canvas) {
            super.onDraw(canvas)
            val cx = width / 2f
            val cy = height / 2f
            val radius = minOf(cx, cy)

            // Draw circle
            canvas.drawCircle(cx, cy, radius, circlePaint)

            // Draw icon (minus or plus)
            val iconSize = radius * 0.5f
            // Horizontal line (common to both minus and plus)
            canvas.drawLine(cx - iconSize, cy, cx + iconSize, cy, iconPaint)

            if (iconType == IconType.PLUS) {
                // Vertical line for plus
                canvas.drawLine(cx, cy - iconSize, cx, cy + iconSize, iconPaint)
            }
        }
    }

    companion object {
        private const val DEFAULT_BUTTON_SIZE_DP = 20
        private const val DEFAULT_VALUE_WIDTH_DP = 20
        private const val DEFAULT_FONT_SIZE_SP = 16
        private const val DEFAULT_CORNER_RADIUS_DP = 999
        private const val DEFAULT_PADDING_DP = 4
        private const val DEFAULT_MIN_VALUE = 0
        private const val DEFAULT_MAX_VALUE = 99
        private const val DEFAULT_STEP = 1

        private const val DEFAULT_BUTTON_COLOR = 0xFF4CAF50.toInt()
        private const val DEFAULT_ICON_COLOR = 0xFFFFFFFF.toInt()
        private const val DEFAULT_DISABLED_BUTTON_COLOR = 0xFFCCCCCC.toInt()
        private const val DEFAULT_TEXT_COLOR = 0xFF1B2630.toInt()
        private const val DEFAULT_BACKGROUND_COLOR = 0xFFF5F5F5.toInt()
        private const val DEFAULT_BORDER_COLOR = 0xFFE0E0E0.toInt()
        private const val DEFAULT_BORDER_WIDTH_DP = 1
    }
}
