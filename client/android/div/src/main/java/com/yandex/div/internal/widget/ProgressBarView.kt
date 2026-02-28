package com.yandex.div.internal.widget

import android.animation.ValueAnimator
import android.content.Context
import android.graphics.Canvas
import android.graphics.Paint
import android.graphics.RectF
import android.util.TypedValue
import android.view.View
import android.view.animation.LinearInterpolator
import androidx.core.view.AccessibilityDelegateCompat
import androidx.core.view.ViewCompat
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat

internal open class ProgressBarView(context: Context) : View(context) {

    var progressValue: Float = 0f
        set(value) {
            field = value.coerceIn(0f, 1f)
            invalidate()
        }

    var activeColor: Int = DEFAULT_ACTIVE_COLOR
        set(value) {
            field = value
            activePaint.color = value
            invalidate()
        }

    var inactiveColor: Int = DEFAULT_INACTIVE_COLOR
        set(value) {
            field = value
            inactivePaint.color = value
            invalidate()
        }

    var trackThickness: Int = dpToPx(DEFAULT_TRACK_THICKNESS_DP)
        set(value) {
            field = value
            activePaint.strokeWidth = value.toFloat()
            inactivePaint.strokeWidth = value.toFloat()
            invalidate()
        }

    var isCircular: Boolean = false
        set(value) {
            field = value
            invalidate()
        }

    var isIndeterminate: Boolean = false
        set(value) {
            field = value
            if (value) startIndeterminateAnimation() else stopIndeterminateAnimation()
            invalidate()
        }

    private val activePaint = Paint(Paint.ANTI_ALIAS_FLAG).apply {
        style = Paint.Style.STROKE
        strokeCap = Paint.Cap.ROUND
        color = DEFAULT_ACTIVE_COLOR
        strokeWidth = dpToPx(DEFAULT_TRACK_THICKNESS_DP).toFloat()
    }

    private val inactivePaint = Paint(Paint.ANTI_ALIAS_FLAG).apply {
        style = Paint.Style.STROKE
        strokeCap = Paint.Cap.ROUND
        color = DEFAULT_INACTIVE_COLOR
        strokeWidth = dpToPx(DEFAULT_TRACK_THICKNESS_DP).toFloat()
    }

    private val linearActivePaint = Paint(Paint.ANTI_ALIAS_FLAG).apply {
        style = Paint.Style.FILL
        color = DEFAULT_ACTIVE_COLOR
    }

    private val linearInactivePaint = Paint(Paint.ANTI_ALIAS_FLAG).apply {
        style = Paint.Style.FILL
        color = DEFAULT_INACTIVE_COLOR
    }

    private val circularRect = RectF()
    private var indeterminateAngle = 0f
    private var indeterminateAnimator: ValueAnimator? = null

    init {
        ViewCompat.setAccessibilityDelegate(this, object : AccessibilityDelegateCompat() {
            override fun onInitializeAccessibilityNodeInfo(
                host: View,
                info: AccessibilityNodeInfoCompat
            ) {
                super.onInitializeAccessibilityNodeInfo(host, info)
                info.roleDescription = "progress bar"
                if (!isIndeterminate) {
                    info.rangeInfo = AccessibilityNodeInfoCompat.RangeInfoCompat.obtain(
                        AccessibilityNodeInfoCompat.RangeInfoCompat.RANGE_TYPE_FLOAT,
                        0f, 1f, progressValue
                    )
                }
            }
        })
    }

    override fun onMeasure(widthMeasureSpec: Int, heightMeasureSpec: Int) {
        if (isCircular) {
            val defaultSize = dpToPx(DEFAULT_CIRCULAR_SIZE_DP)
            val width = resolveSize(defaultSize, widthMeasureSpec)
            val height = resolveSize(defaultSize, heightMeasureSpec)
            val size = minOf(width, height)
            setMeasuredDimension(size, size)
        } else {
            val desiredHeight = trackThickness + paddingTop + paddingBottom
            val width = resolveSize(0, widthMeasureSpec)
            val height = resolveSize(desiredHeight, heightMeasureSpec)
            setMeasuredDimension(width, height)
        }
    }

    override fun onDraw(canvas: Canvas) {
        super.onDraw(canvas)
        if (isCircular) {
            drawCircular(canvas)
        } else {
            drawLinear(canvas)
        }
    }

    private fun drawLinear(canvas: Canvas) {
        val halfThickness = trackThickness / 2f
        val trackTop = (height - trackThickness) / 2f
        val trackBottom = trackTop + trackThickness
        val radius = halfThickness

        linearInactivePaint.color = inactiveColor
        linearActivePaint.color = activeColor

        // Draw inactive track
        canvas.drawRoundRect(0f, trackTop, width.toFloat(), trackBottom, radius, radius, linearInactivePaint)

        if (isIndeterminate) {
            // Draw indeterminate sliding bar
            val barWidth = width * 0.3f
            val offset = (indeterminateAngle / 360f) * (width + barWidth) - barWidth
            canvas.drawRoundRect(
                offset.coerceAtLeast(0f), trackTop,
                (offset + barWidth).coerceAtMost(width.toFloat()), trackBottom,
                radius, radius, linearActivePaint
            )
        } else {
            // Draw active track
            val activeWidth = width * progressValue
            if (activeWidth > 0f) {
                canvas.drawRoundRect(0f, trackTop, activeWidth, trackBottom, radius, radius, linearActivePaint)
            }
        }
    }

    private fun drawCircular(canvas: Canvas) {
        val halfThickness = trackThickness / 2f
        val size = minOf(width, height).toFloat()
        circularRect.set(
            halfThickness,
            halfThickness,
            size - halfThickness,
            size - halfThickness
        )

        // Draw inactive track
        canvas.drawArc(circularRect, 0f, 360f, false, inactivePaint)

        if (isIndeterminate) {
            // Draw spinning arc
            canvas.drawArc(circularRect, indeterminateAngle - 90f, 90f, false, activePaint)
        } else {
            // Draw active arc
            val sweepAngle = 360f * progressValue
            canvas.drawArc(circularRect, -90f, sweepAngle, false, activePaint)
        }
    }

    private fun startIndeterminateAnimation() {
        stopIndeterminateAnimation()
        indeterminateAnimator = ValueAnimator.ofFloat(0f, 360f).apply {
            duration = 1200L
            repeatCount = ValueAnimator.INFINITE
            interpolator = LinearInterpolator()
            addUpdateListener { animation ->
                indeterminateAngle = animation.animatedValue as Float
                invalidate()
            }
            start()
        }
    }

    private fun stopIndeterminateAnimation() {
        indeterminateAnimator?.cancel()
        indeterminateAnimator = null
        indeterminateAngle = 0f
    }

    override fun onDetachedFromWindow() {
        super.onDetachedFromWindow()
        stopIndeterminateAnimation()
    }

    override fun onAttachedToWindow() {
        super.onAttachedToWindow()
        if (isIndeterminate) startIndeterminateAnimation()
    }

    private fun dpToPx(dp: Int): Int {
        return TypedValue.applyDimension(
            TypedValue.COMPLEX_UNIT_DIP,
            dp.toFloat(),
            resources.displayMetrics
        ).toInt()
    }

    companion object {
        private const val DEFAULT_TRACK_THICKNESS_DP = 4
        private const val DEFAULT_CIRCULAR_SIZE_DP = 48
        private const val DEFAULT_ACTIVE_COLOR = 0xFF1976D2.toInt() // Material Blue
        private const val DEFAULT_INACTIVE_COLOR = 0xFFE0E0E0.toInt() // Light Gray
    }
}
