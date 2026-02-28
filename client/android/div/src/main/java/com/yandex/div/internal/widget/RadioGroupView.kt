package com.yandex.div.internal.widget

import android.content.Context
import android.content.res.ColorStateList
import android.util.TypedValue
import android.view.View
import android.view.ViewGroup.LayoutParams.MATCH_PARENT
import android.view.ViewGroup.LayoutParams.WRAP_CONTENT
import android.widget.LinearLayout
import android.widget.RadioButton
import android.widget.RadioGroup
import androidx.core.content.ContextCompat
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
        val color = selectedColor ?: return
        val tintList = ColorStateList(
            arrayOf(
                intArrayOf(android.R.attr.state_checked),
                intArrayOf()
            ),
            intArrayOf(
                color,
                getDefaultColor()
            )
        )
        optionButtons.forEach { (button, _) ->
            button.buttonTintList = tintList
        }
    }

    private fun getDefaultColor(): Int {
        val typedValue = TypedValue()
        val resolved = context.theme.resolveAttribute(android.R.attr.colorControlNormal, typedValue, true)
        return if (resolved) typedValue.data else 0
    }
}
