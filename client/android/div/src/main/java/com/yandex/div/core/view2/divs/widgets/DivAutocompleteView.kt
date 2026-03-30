package com.yandex.div.core.view2.divs.widgets

import android.content.Context
import android.graphics.Canvas
import android.graphics.Color
import android.text.Editable
import android.text.InputType
import android.text.TextWatcher
import android.text.method.KeyListener
import android.view.KeyEvent
import android.view.View
import android.view.ViewGroup
import android.view.inputmethod.EditorInfo
import android.view.inputmethod.InputConnection
import android.view.inputmethod.InputConnectionWrapper
import android.widget.BaseAdapter
import android.widget.FrameLayout
import android.widget.TextView
import androidx.appcompat.widget.ListPopupWindow
import androidx.core.graphics.drawable.toDrawable
import androidx.core.widget.doAfterTextChanged
import com.yandex.div.R
import com.yandex.div.core.Disposable
import com.yandex.div.core.annotations.Mockable
import com.yandex.div.core.view2.divs.dpToPx
import com.yandex.div.internal.core.ExpressionSubscriber
import com.yandex.div.internal.widget.SuperLineHeightEditText
import com.yandex.div2.Div

private const val POPUP_ITEM_HEIGHT = 48

@Mockable
internal class DivAutocompleteView(context: Context) : FrameLayout(context),
    DivHolderView<Div.Autocomplete> by DivHolderViewMixin(),
    DivAnimator {

    data class SuggestionItem(
        val value: String,
        val text: String?,
        val secondaryText: String?
    )

    internal val editText = AutocompleteEditText(context)

    private val onTextChangedActions = mutableListOf<(Editable?) -> Unit>()
    private var textChangeWatcher: TextWatcher? = null

    private var onSuggestionSelectedListener: ((SuggestionItem) -> Unit)? = null

    private val suggestionAdapter = SuggestionAdapter()

    private val popupWindow = ListPopupWindow(context).apply {
        isModal = false
        anchorView = this@DivAutocompleteView
        setAdapter(suggestionAdapter)
        setBackgroundDrawable(Color.WHITE.toDrawable())
        setOnItemClickListener { _, _, position, _ ->
            val item = suggestionAdapter.getItem(position)
            onSuggestionSelectedListener?.invoke(item)
        }
    }

    private var suggestions: List<SuggestionItem> = emptyList()

    init {
        editText.layoutParams = LayoutParams(
            LayoutParams.MATCH_PARENT,
            LayoutParams.MATCH_PARENT
        )
        addView(editText)
    }

    fun addAfterTextChangeAction(action: (Editable?) -> Unit) {
        if (textChangeWatcher == null) {
            textChangeWatcher = editText.doAfterTextChanged { editable ->
                onTextChangedActions.forEach { it.invoke(editable) }
            }
        }
        onTextChangedActions.add(action)
    }

    fun removeAfterTextChangeListener() {
        editText.removeTextChangedListener(textChangeWatcher)
        onTextChangedActions.clear()
        textChangeWatcher = null
    }

    fun setOnSuggestionSelectedListener(listener: ((SuggestionItem) -> Unit)?) {
        onSuggestionSelectedListener = listener
    }

    fun setSuggestions(items: List<SuggestionItem>) {
        suggestions = items
        suggestionAdapter.setItems(items)
    }

    fun showDropdown() {
        if (suggestions.isNotEmpty() && !popupWindow.isShowing) {
            popupWindow.show()
        }
    }

    fun dismissDropdown() {
        if (popupWindow.isShowing) {
            popupWindow.dismiss()
        }
    }

    fun setMaxVisibleSuggestions(max: Int) {
        popupWindow.height = if (max > 0 && suggestions.size > max) {
            max * POPUP_ITEM_HEIGHT.dpToPx(resources.displayMetrics)
        } else {
            ListPopupWindow.WRAP_CONTENT
        }
    }

    fun setSuggestionTextColor(color: Int) {
        suggestionAdapter.textColor = color
    }

    override fun draw(canvas: Canvas) {
        drawBorderClipped(canvas) { super.draw(it) }
    }

    override fun onSizeChanged(width: Int, height: Int, oldWidth: Int, oldHeight: Int) {
        super.onSizeChanged(width, height, oldWidth, oldHeight)
        onBoundsChanged(width, height)
    }

    override fun onDetachedFromWindow() {
        super.onDetachedFromWindow()
        dismissDropdown()
    }

    override fun onVisibilityChanged(changedView: View, visibility: Int) {
        super.onVisibilityChanged(changedView, visibility)
        if (visibility != View.VISIBLE) {
            dismissDropdown()
        }
    }

    /**
     * Inner EditText that implements ExpressionSubscriber by delegating to the parent
     * DivAutocompleteView's subscriptions list, so that [observeBaseTextProperties]
     * extension function can be called on it.
     */
    inner class AutocompleteEditText(context: Context) : SuperLineHeightEditText(
        context, null, R.attr.divInputStyle
    ), ExpressionSubscriber {

        override val subscriptions: MutableList<Disposable>
            get() = this@DivAutocompleteView.subscriptions

        private var editorActionListener: TextView.OnEditorActionListener? = null

        var enabled = true
            internal set(value) {
                field = value
                isFocusable = value
                isFocusableInTouchMode = value
            }

        override fun setOnEditorActionListener(l: OnEditorActionListener?) {
            super.setOnEditorActionListener(l)
            editorActionListener = l
        }

        override fun onKeyDown(keyCode: Int, event: KeyEvent?): Boolean {
            if ((inputType and InputType.TYPE_TEXT_FLAG_MULTI_LINE) != 0 &&
                (keyCode == KeyEvent.KEYCODE_ENTER || keyCode == KeyEvent.KEYCODE_NUMPAD_ENTER)
            ) {
                val imeAction = imeOptions and EditorInfo.IME_MASK_ACTION
                editorActionListener?.onEditorAction(this, imeAction, event)?.let {
                    return it
                }
            }
            return super.onKeyDown(keyCode, event)
        }

        override fun onCreateInputConnection(outAttrs: EditorInfo): InputConnection? {
            val baseInputConnection = super.onCreateInputConnection(outAttrs) ?: return null
            if ((inputType and InputType.TYPE_TEXT_FLAG_MULTI_LINE) == 0) return baseInputConnection
            return object : InputConnectionWrapper(baseInputConnection, true) {
                override fun sendKeyEvent(event: KeyEvent): Boolean {
                    if ((event.keyCode == KeyEvent.KEYCODE_ENTER ||
                                event.keyCode == KeyEvent.KEYCODE_NUMPAD_ENTER) &&
                        event.action == KeyEvent.ACTION_DOWN
                    ) {
                        val imeAction = imeOptions and EditorInfo.IME_MASK_ACTION
                        editorActionListener?.onEditorAction(this@AutocompleteEditText, imeAction, event)?.let {
                            return it
                        }
                    }
                    return super.sendKeyEvent(event)
                }

                override fun commitText(text: CharSequence?, newCursorPosition: Int): Boolean {
                    if (text == "\n") {
                        val imeAction = imeOptions and EditorInfo.IME_MASK_ACTION
                        editorActionListener?.onEditorAction(this@AutocompleteEditText, imeAction, null)?.let {
                            return it
                        }
                    }
                    return super.commitText(text, newCursorPosition)
                }
            }
        }

        override fun setInputType(type: Int) {
            if (inputType == type) return
            super.setInputType(type)
        }

        override fun setKeyListener(keyListener: KeyListener?) {
            if (this.keyListener == keyListener) return
            super.setKeyListener(keyListener)
        }
    }

    private inner class SuggestionAdapter : BaseAdapter() {
        private var items: List<SuggestionItem> = emptyList()
        var textColor: Int = Color.BLACK

        fun setItems(newItems: List<SuggestionItem>) {
            items = newItems
            notifyDataSetChanged()
        }

        override fun getCount(): Int = items.size
        override fun getItem(position: Int): SuggestionItem = items[position]
        override fun getItemId(position: Int): Long = position.toLong()

        override fun getView(position: Int, convertView: View?, parent: ViewGroup?): View {
            val textView = (convertView ?: createView()) as TextView
            val item = getItem(position)
            textView.text = item.text ?: item.value
            textView.setTextColor(textColor)
            return textView
        }

        private fun createView(): TextView {
            return TextView(context, null, android.R.attr.spinnerDropDownItemStyle).apply {
                isSingleLine = true
                layoutParams = ViewGroup.LayoutParams(
                    ViewGroup.LayoutParams.MATCH_PARENT,
                    POPUP_ITEM_HEIGHT.dpToPx(resources.displayMetrics)
                )
                textAlignment = TextView.TEXT_ALIGNMENT_VIEW_START
            }
        }
    }
}
