package com.yandex.div.core.view2.divs

import com.yandex.div.core.expression.variables.TwoWayBooleanVariableBinder
import com.yandex.div.core.expression.variables.TwoWayVariableBinder
import com.yandex.div.core.state.DivStatePath
import com.yandex.div.core.view2.divs.widgets.DivCheckboxView
import com.yandex.div.data.DivParsingEnvironment
import com.yandex.div.json.ParsingErrorLogger
import com.yandex.div.json.expressions.ExpressionResolver
import com.yandex.div2.Div
import org.json.JSONObject
import org.junit.Assert
import org.junit.Test
import org.junit.runner.RunWith
import org.mockito.kotlin.any
import org.mockito.kotlin.argumentCaptor
import org.mockito.kotlin.doReturn
import org.mockito.kotlin.eq
import org.mockito.kotlin.mock
import org.mockito.kotlin.verify
import org.mockito.kotlin.verifyNoMoreInteractions
import org.robolectric.RobolectricTestRunner

@RunWith(RobolectricTestRunner::class)
class DivCheckboxBinderTest : DivBinderTest() {
    private val variableBinder = mock<TwoWayBooleanVariableBinder> {
        on { bindVariable(any(), any(), any(), any()) } doReturn mock()
    }

    private val captor = argumentCaptor<TwoWayVariableBinder.Callbacks<Boolean>>()
    private val underTest = DivCheckboxBinder(baseBinder, variableBinder)
    private val path = DivStatePath(0)

    @Test
    fun `bind is_checked_variable`() {
        val (divCheckbox, view) = createDivAndView(CHECKBOX_WITH_ON_COLOR)
        underTest.bindView(bindingContext, view, divCheckbox, path)

        verify(variableBinder).bindVariable(any(), eq(divCheckbox.value.isCheckedVariable), any(), any())
        verifyNoMoreInteractions(variableBinder)
    }

    @Test
    fun `update isChecked after variable changed`() {
        val (divCheckbox, view) = createDivAndView(CHECKBOX_WITH_ON_COLOR)
        underTest.bindView(bindingContext, view, divCheckbox, path)
        verify(variableBinder).bindVariable(any(), any(), captor.capture(), any())

        val checked = true
        view.assertCheckedApplied(checked) {
            val callbacks = captor.allValues.single()
            callbacks.onVariableChanged(checked)
        }

        verifyNoMoreInteractions(variableBinder)
    }

    @Test
    fun `update variable after checkbox checked`() {
        val (divCheckbox, view) = createDivAndView(CHECKBOX_WITH_ON_COLOR)
        val viewStateChangeListener = mock<(Boolean) -> Unit>()

        underTest.bindView(bindingContext, view, divCheckbox, path)
        verify(variableBinder).bindVariable(any(), any(), captor.capture(), any())

        val checked = true

        view.assertCheckedApplied(checked) {
            val callbacks = captor.allValues.single()
            callbacks.setViewStateChangeListener(viewStateChangeListener)

            view.isChecked = checked
        }

        verify(viewStateChangeListener).invoke(checked)
        verifyNoMoreInteractions(viewStateChangeListener)

        verifyNoMoreInteractions(variableBinder)
    }

    @Test
    fun `on_color bound if provided`() {
        val (divCheckbox, view) = createDivAndView(CHECKBOX_WITH_ON_COLOR)
        underTest.bindView(bindingContext, view, divCheckbox, path)
        Assert.assertNotNull(view.colorOn)
    }

    @Test
    fun `on_color not bound if not provided`() {
        val (divCheckbox, view) = createDivAndView(CHECKBOX_WITHOUT_COLORS)
        underTest.bindView(bindingContext, view, divCheckbox, path)
        Assert.assertNull(view.colorOn)
    }

    @Test
    fun `off_color bound if provided`() {
        val (divCheckbox, view) = createDivAndView(CHECKBOX_WITH_ON_COLOR)
        underTest.bindView(bindingContext, view, divCheckbox, path)
        Assert.assertNotNull(view.colorOff)
    }

    @Test
    fun `check_mark_color bound if provided`() {
        val (divCheckbox, view) = createDivAndView(CHECKBOX_WITH_ON_COLOR)
        underTest.bindView(bindingContext, view, divCheckbox, path)
        Assert.assertNotNull(view.checkMarkColor)
    }

    private fun DivCheckboxView.assertCheckedApplied(expectedValue: Boolean, body: () -> Unit) {
        Assert.assertNotEquals(expectedValue, isChecked)
        body()
        Assert.assertEquals(expectedValue, isChecked)
    }

    private fun createDivAndView(jsonString: String): Pair<Div.Checkbox, DivCheckboxView> {
        val environment = DivParsingEnvironment(ParsingErrorLogger.LOG)
        val div = Div(environment, JSONObject(jsonString)) as Div.Checkbox
        val view = (viewCreator.create(div, ExpressionResolver.EMPTY) as DivCheckboxView).apply {
            layoutParams = defaultLayoutParams()
        }
        return div to view
    }

    companion object {

        private val CHECKBOX_WITH_ON_COLOR = """
            {
              "type": "checkbox",
              "is_checked_variable": "checked_var",
              "on_color": "#ff0000",
              "off_color": "#cccccc",
              "check_mark_color": "#ffffff",
              "width": {
                "type": "wrap_content"
              }
            }
        """.trimIndent()

        private val CHECKBOX_WITHOUT_COLORS = """
            {
              "type": "checkbox",
              "is_checked_variable": "checked_var",
              "width": {
                "type": "wrap_content"
              }
            }
        """.trimIndent()
    }
}
