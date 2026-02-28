package com.yandex.div.internal.widget

import android.annotation.SuppressLint
import android.content.Context
import android.content.res.ColorStateList
import android.graphics.Color
import android.util.TypedValue
import android.view.Gravity
import android.view.View
import android.view.ViewGroup.LayoutParams.WRAP_CONTENT
import android.widget.FrameLayout
import androidx.appcompat.widget.AppCompatCheckBox
import androidx.core.content.ContextCompat
import androidx.core.graphics.ColorUtils
import androidx.core.view.AccessibilityDelegateCompat
import androidx.core.view.ViewCompat
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat
import com.yandex.div.core.view2.drawable.NoOpDrawable

internal open class CheckboxView(context: Context) : FrameLayout(context) {
    private val checkbox = AppCompatCheckBox(context)

    var colorOn: Int? = null
        set(value) {
            field = value
            changeTints()
        }

    var colorOff: Int? = null
        set(value) {
            field = value
            changeTints()
        }

    var checkMarkColor: Int? = null
        set(value) {
            field = value
            changeTints()
        }

    var isChecked: Boolean
        get() = checkbox.isChecked
        set(value) {
            checkbox.isChecked = value
        }

    private val buttonTintColors = IntArray(3)

    init {
        checkbox.apply {
            text = ""
            background = NoOpDrawable
            importantForAccessibility = View.IMPORTANT_FOR_ACCESSIBILITY_NO
            isFocusable = false
            isFocusableInTouchMode = false
        }
        this.addView(checkbox, LayoutParams(WRAP_CONTENT, WRAP_CONTENT, Gravity.CENTER))
        this.setOnClickListener { forwardClicksToCheckbox() }

        fillDefaultColors()
        updateTints()
    }

    override fun onAttachedToWindow() {
        super.onAttachedToWindow()
        if (ViewCompat.getAccessibilityDelegate(this) == null) {
            val defaultDelegate = object : AccessibilityDelegateCompat() {
                override fun onInitializeAccessibilityNodeInfo(
                    host: View,
                    info: AccessibilityNodeInfoCompat
                ) {
                    super.onInitializeAccessibilityNodeInfo(host, info)
                    info.className = "android.widget.CheckBox"
                    info.isCheckable = true
                    info.isChecked = (host as? CheckboxView)?.isChecked == true
                }
            }
            ViewCompat.setAccessibilityDelegate(this, defaultDelegate)
        }
    }

    override fun getAccessibilityClassName(): CharSequence = "android.widget.CheckBox"

    override fun isEnabled(): Boolean = checkbox.isEnabled
    override fun setEnabled(enabled: Boolean) {
        checkbox.isEnabled = enabled
    }

    fun setOnCheckedChangeListener(listener: (Boolean) -> Unit) {
        checkbox.setOnCheckedChangeListener { _, isChecked ->
            listener.invoke(isChecked)
        }
    }

    private fun changeTints() {
        colorOn?.let { buttonTintColors[CHECKED_INDEX] = it }
        colorOff?.let { buttonTintColors[UNCHECKED_INDEX] = it }
        updateTints()
    }

    private fun updateTints() {
        checkbox.buttonTintList = ColorStateList(STATES_ARRAY, buttonTintColors)
    }

    private fun fillDefaultColors() {
        val typedValue = TypedValue()

        val accentColor = getColorFromTheme(android.R.attr.colorControlActivated, typedValue, false)
        val normalColor = getColorFromTheme(android.R.attr.colorControlNormal, typedValue, false)

        buttonTintColors[CHECKED_INDEX] = accentColor
        buttonTintColors[UNCHECKED_INDEX] = normalColor
        buttonTintColors[DISABLED_INDEX] = normalColor.lightenColor(0.5f)
    }

    private fun getColorFromTheme(resId: Int, typedValue: TypedValue, outputIsResource: Boolean): Int {
        val resolved = context.theme.resolveAttribute(resId, typedValue, true)
        return when {
            !resolved -> 0
            outputIsResource && typedValue.resourceId != 0 -> ContextCompat.getColor(context, typedValue.resourceId)
            else -> typedValue.data
        }
    }

    private fun Int.lightenColor(value: Float): Int {
        return ColorUtils.blendARGB(this, Color.WHITE, value)
    }

    private fun forwardClicksToCheckbox() {
        if (isEnabled) {
            checkbox.performClick()
        }
    }

    companion object {
        private val DISABLED = intArrayOf(-android.R.attr.state_enabled)
        private val CHECKED = intArrayOf(android.R.attr.state_checked)
        private val DEFAULT = intArrayOf()

        private const val CHECKED_INDEX = 1
        private const val UNCHECKED_INDEX = 2
        private const val DISABLED_INDEX = 0

        private val STATES_ARRAY = arrayOf(DISABLED, CHECKED, DEFAULT)
    }
}
