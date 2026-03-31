package com.yandex.div.core.view2.divs.widgets

import android.content.Context
import android.graphics.Canvas
import android.graphics.Color
import android.graphics.Path
import android.graphics.drawable.ClipDrawable
import android.graphics.drawable.ShapeDrawable
import android.graphics.drawable.shapes.PathShape
import android.util.TypedValue
import android.view.Gravity
import android.view.MotionEvent
import android.view.View
import android.view.ViewGroup
import android.widget.FrameLayout
import android.widget.ImageView
import android.widget.LinearLayout
import androidx.core.graphics.drawable.DrawableCompat
import com.yandex.div.core.annotations.Mockable
import com.yandex.div2.Div

@Mockable
internal class DivRatingView(context: Context) : LinearLayout(context),
    DivHolderView<Div.Rating> by DivHolderViewMixin(),
    DivAnimator {

    var onRatingChangeListener: ((Float) -> Unit)? = null

    private var maxRating: Int = 5
    private var currentRating: Float = 0f
    private var step: Float = 1f
    private var isInteractive: Boolean = true

    private var activeColor: Int = 0xFFFFD700.toInt()
    private var inactiveColor: Int = 0xFFCCCCCC.toInt()
    private var borderColor: Int = Color.TRANSPARENT
    private var disabledColor: Int = 0xFF999999.toInt()

    private var iconSizePx: Int = dpToPx(24f)
    private var iconSpacingPx: Int = dpToPx(4f)

    init {
        orientation = HORIZONTAL
        gravity = Gravity.CENTER_VERTICAL

        setOnTouchListener { _, event ->
            if (!isInteractive) return@setOnTouchListener false
            when (event.action) {
                MotionEvent.ACTION_DOWN,
                MotionEvent.ACTION_MOVE,
                MotionEvent.ACTION_UP -> {
                    val newRating = calculateRatingFromX(event.x)
                    if (newRating != currentRating) {
                        currentRating = newRating
                        updateIconStates()
                        if (event.action == MotionEvent.ACTION_UP) {
                            onRatingChangeListener?.invoke(currentRating)
                        }
                    }
                    if (event.action == MotionEvent.ACTION_UP) {
                        performClick()
                    }
                    true
                }
                else -> false
            }
        }
    }

    override fun performClick(): Boolean {
        return super.performClick()
    }

    fun setMaxRating(count: Int) {
        if (maxRating == count) return
        maxRating = count.coerceAtLeast(1)
        rebuildIcons()
    }

    fun setRating(value: Float) {
        val clamped = value.coerceIn(0f, maxRating.toFloat())
        if (currentRating == clamped) return
        currentRating = clamped
        updateIconStates()
    }

    fun setActiveColor(color: Int) {
        if (activeColor == color) return
        activeColor = color
        updateIconStates()
    }

    fun setInactiveColor(color: Int) {
        if (inactiveColor == color) return
        inactiveColor = color
        updateIconStates()
    }

    fun setBorderColor(color: Int) {
        if (borderColor == color) return
        borderColor = color
        updateIconStates()
    }

    fun setDisabledColor(color: Int) {
        if (disabledColor == color) return
        disabledColor = color
        updateIconStates()
    }

    fun setIconSize(sizePx: Int) {
        if (iconSizePx == sizePx) return
        iconSizePx = sizePx
        rebuildIcons()
    }

    fun setIconSpacing(spacingPx: Int) {
        if (iconSpacingPx == spacingPx) return
        iconSpacingPx = spacingPx
        rebuildIcons()
    }

    fun setIsInteractive(interactive: Boolean) {
        isInteractive = interactive
        updateIconStates()
    }

    fun setStep(step: Float) {
        this.step = step.coerceAtLeast(0.01f)
    }

    private fun rebuildIcons() {
        removeAllViews()
        for (i in 0 until maxRating) {
            val container = FrameLayout(context).apply {
                layoutParams = LayoutParams(iconSizePx, iconSizePx).apply {
                    if (i > 0) {
                        leftMargin = iconSpacingPx
                    }
                }
            }

            // Inactive layer (full icon, tinted with inactive color)
            val inactiveView = ImageView(context).apply {
                layoutParams = FrameLayout.LayoutParams(
                    ViewGroup.LayoutParams.MATCH_PARENT,
                    ViewGroup.LayoutParams.MATCH_PARENT
                )
                scaleType = ImageView.ScaleType.FIT_CENTER
                setImageDrawable(createStarDrawable(inactiveColor))
            }
            container.addView(inactiveView)

            // Active layer (clipped icon, tinted with active color)
            val activeView = ImageView(context).apply {
                layoutParams = FrameLayout.LayoutParams(
                    ViewGroup.LayoutParams.MATCH_PARENT,
                    ViewGroup.LayoutParams.MATCH_PARENT
                )
                scaleType = ImageView.ScaleType.FIT_CENTER
                val starDrawable = createStarDrawable(activeColor)
                val clipDrawable = ClipDrawable(starDrawable, Gravity.START, ClipDrawable.HORIZONTAL)
                setImageDrawable(clipDrawable)
            }
            container.addView(activeView)

            addView(container)
        }
        updateIconStates()
    }

    private fun updateIconStates() {
        for (i in 0 until childCount) {
            val container = getChildAt(i) as? FrameLayout ?: continue
            if (container.childCount < 2) continue

            val inactiveView = container.getChildAt(0) as? ImageView ?: continue
            val activeView = container.getChildAt(1) as? ImageView ?: continue

            val effectiveInactive = if (isInteractive) inactiveColor else disabledColor
            val effectiveActive = if (isInteractive) activeColor else disabledColor

            // Update inactive layer tint
            inactiveView.setImageDrawable(createStarDrawable(effectiveInactive))

            // Calculate fill for this icon
            val iconIndex = i + 1
            val fillPercent = when {
                currentRating >= iconIndex -> 1.0f
                currentRating > iconIndex - 1 -> currentRating - (iconIndex - 1)
                else -> 0f
            }

            val starDrawable = createStarDrawable(effectiveActive)
            val clipDrawable = ClipDrawable(starDrawable, Gravity.START, ClipDrawable.HORIZONTAL)
            activeView.setImageDrawable(clipDrawable)
            clipDrawable.level = (fillPercent * 10000).toInt()
        }
    }

    private fun calculateRatingFromX(x: Float): Float {
        if (childCount == 0) return 0f

        val totalWidth = childCount * iconSizePx + (childCount - 1) * iconSpacingPx
        val startX = (width - totalWidth) / 2f

        val relativeX = x - startX
        if (relativeX <= 0) return 0f
        if (relativeX >= totalWidth) return maxRating.toFloat()

        // Determine which icon was touched
        var accumulatedX = 0f
        for (i in 0 until childCount) {
            val iconStart = accumulatedX
            val iconEnd = iconStart + iconSizePx

            if (relativeX < iconEnd) {
                val fractionInIcon = (relativeX - iconStart) / iconSizePx
                val rawRating = i + fractionInIcon
                return snapToStep(rawRating)
            }

            accumulatedX = iconEnd + iconSpacingPx
        }

        return maxRating.toFloat()
    }

    private fun snapToStep(raw: Float): Float {
        if (step <= 0) return raw
        val snapped = (Math.round(raw / step) * step)
        return snapped.coerceIn(0f, maxRating.toFloat())
    }

    private fun createStarDrawable(color: Int): ShapeDrawable {
        val path = Path()
        // Star path: M12 2 l3.09 6.26 L22 9.27 l-5 4.87 1.18 6.88 L12 17.77 l-6.18 3.25 L7 14.14 2 9.27 l6.91-1.01 L12 2
        // Normalized to 24x24 coordinate space
        path.moveTo(12f, 2f)
        path.lineTo(15.09f, 8.26f)
        path.lineTo(22f, 9.27f)
        path.lineTo(17f, 14.14f)
        path.lineTo(18.18f, 21.02f)
        path.lineTo(12f, 17.77f)
        path.lineTo(5.82f, 21.02f)
        path.lineTo(7f, 14.14f)
        path.lineTo(2f, 9.27f)
        path.lineTo(8.91f, 8.26f)
        path.close()

        val shape = PathShape(path, 24f, 24f)
        return ShapeDrawable(shape).apply {
            paint.color = color
            intrinsicWidth = iconSizePx
            intrinsicHeight = iconSizePx
        }
    }

    private fun dpToPx(dp: Float): Int {
        return TypedValue.applyDimension(
            TypedValue.COMPLEX_UNIT_DIP,
            dp,
            resources.displayMetrics
        ).toInt()
    }

    override fun draw(canvas: Canvas) {
        drawBorderClipped(canvas) { super.draw(it) }
    }

    override fun onSizeChanged(width: Int, height: Int, oldWidth: Int, oldHeight: Int) {
        super.onSizeChanged(width, height, oldWidth, oldHeight)
        onBoundsChanged(width, height)
    }
}
