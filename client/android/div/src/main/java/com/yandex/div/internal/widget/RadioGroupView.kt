package com.yandex.div.internal.widget

import android.content.Context
import android.content.res.ColorStateList
import android.graphics.Typeface
import android.util.TypedValue
import android.view.View
import android.view.ViewGroup.LayoutParams.MATCH_PARENT
import android.view.ViewGroup.LayoutParams.WRAP_CONTENT
import android.widget.LinearLayout
import android.widget.RadioButton
import android.widget.RadioGroup
import androidx.core.view.AccessibilityDelegateCompat
import androidx.core.view.ViewCompat
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat

internal open class RadioGroupView(context: Context) : LinearLayout(context) {

    private val radioGroup = RadioGroup(context)
    private var onValueChangedListener: ((String) -> Unit)? = null
    private val optionButtons = mutableListOf<Pair<RadioButton, String>>()

    var selectedColor: Int? = null
        set(value) {
            field = value
            updateButtonTints()
        }

    var defaultColor: Int? = null
        set(value) {
            field = value
            updateButtonTints()
        }

    var textColor: Int? = null
        set(value) {
            field = value
            optionButtons.forEach { (button, _) ->
                value?.let { button.setTextColor(it) }
            }
        }

    var textSizePx: Float? = null
        set(value) {
            field = value
            optionButtons.forEach { (button, _) ->
                value?.let { button.setTextSize(TypedValue.COMPLEX_UNIT_PX, it) }
            }
        }

    var typeface: Typeface? = null
        set(value) {
            field = value
            optionButtons.forEach { (button, _) ->
                value?.let { button.typeface = it }
            }
        }

    var selectedValue: String
        get() = optionButtons.find { it.first.isChecked }?.second ?: ""
        set(value) {
            optionButtons.forEach { (button, optionValue) ->
                button.isChecked = optionValue == value
            }
        }

    init {
        this.addView(radioGroup, LayoutParams(MATCH_PARENT, WRAP_CONTENT))

        radioGroup.setOnCheckedChangeListener { _, checkedId ->
            val selected = optionButtons.find { it.first.id == checkedId }
            selected?.let { onValueChangedListener?.invoke(it.second) }
        }

        ViewCompat.setAccessibilityDelegate(this, object : AccessibilityDelegateCompat() {
            override fun onInitializeAccessibilityNodeInfo(
                host: View,
                info: AccessibilityNodeInfoCompat
            ) {
                super.onInitializeAccessibilityNodeInfo(host, info)
                info.roleDescription = "radio group"
            }
        })
    }

    override fun getAccessibilityClassName(): CharSequence = "android.widget.RadioGroup"

    override fun isEnabled(): Boolean = radioGroup.isEnabled
    override fun setEnabled(enabled: Boolean) {
        radioGroup.isEnabled = enabled
        optionButtons.forEach { it.first.isEnabled = enabled }
    }

    fun setOptions(options: List<Pair<String, String>>, spacing: Int, isHorizontal: Boolean) {
        radioGroup.removeAllViews()
        optionButtons.clear()

        radioGroup.orientation = if (isHorizontal) HORIZONTAL else VERTICAL

        options.forEachIndexed { index, (value, text) ->
            val button = RadioButton(context).apply {
                id = View.generateViewId()
                this.text = text.ifEmpty { value }
                this@RadioGroupView.textColor?.let { setTextColor(it) }
                this@RadioGroupView.textSizePx?.let { setTextSize(TypedValue.COMPLEX_UNIT_PX, it) }
                this@RadioGroupView.typeface?.let { typeface = it }
            }
            val params = RadioGroup.LayoutParams(WRAP_CONTENT, WRAP_CONTENT).apply {
                if (index > 0) {
                    if (isHorizontal) marginStart = spacing else topMargin = spacing
                }
            }
            radioGroup.addView(button, params)
            optionButtons.add(button to value)
        }
        updateButtonTints()
    }

    fun setOnValueChangedListener(listener: (String) -> Unit) {
        onValueChangedListener = listener
    }

    private fun updateButtonTints() {
        val checkedColor = selectedColor ?: return
        val uncheckedColor = defaultColor ?: getThemeDefaultColor()
        val tintList = ColorStateList(
            arrayOf(
                intArrayOf(android.R.attr.state_checked),
                intArrayOf()
            ),
            intArrayOf(
                checkedColor,
                uncheckedColor
            )
        )
        optionButtons.forEach { (button, _) ->
            button.buttonTintList = tintList
        }
    }

    private fun getThemeDefaultColor(): Int {
        val typedValue = TypedValue()
        val resolved = context.theme.resolveAttribute(android.R.attr.colorControlNormal, typedValue, true)
        return if (resolved) typedValue.data else 0
    }
}
