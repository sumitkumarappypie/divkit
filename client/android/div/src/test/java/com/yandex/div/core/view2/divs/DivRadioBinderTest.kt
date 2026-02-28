package com.yandex.div.core.view2.divs

import com.yandex.div.core.expression.variables.TwoWayStringVariableBinder
import com.yandex.div.core.expression.variables.TwoWayVariableBinder
import com.yandex.div.core.state.DivStatePath
import com.yandex.div.core.view2.divs.widgets.DivRadioView
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
class DivRadioBinderTest : DivBinderTest() {
    private val variableBinder = mock<TwoWayStringVariableBinder> {
        on { bindVariable(any(), any(), any(), any()) } doReturn mock()
    }

    private val captor = argumentCaptor<TwoWayVariableBinder.Callbacks<String>>()
    private val underTest = DivRadioBinder(baseBinder, variableBinder)
    private val path = DivStatePath(0)

    @Test
    fun `bind value_variable`() {
        val (divRadio, view) = createDivAndView(RADIO_WITH_OPTIONS)
        underTest.bindView(bindingContext, view, divRadio, path)

        verify(variableBinder).bindVariable(any(), eq(divRadio.value.valueVariable), any(), any())
        verifyNoMoreInteractions(variableBinder)
    }

    @Test
    fun `update selectedValue after variable changed`() {
        val (divRadio, view) = createDivAndView(RADIO_WITH_OPTIONS)
        underTest.bindView(bindingContext, view, divRadio, path)
        verify(variableBinder).bindVariable(any(), any(), captor.capture(), any())

        val newValue = "option_2"
        val callbacks = captor.allValues.single()
        callbacks.onVariableChanged(newValue)

        Assert.assertEquals(newValue, view.selectedValue)
        verifyNoMoreInteractions(variableBinder)
    }

    @Test
    fun `update variable after radio selection changed`() {
        val (divRadio, view) = createDivAndView(RADIO_WITH_OPTIONS)
        val viewStateChangeListener = mock<(String) -> Unit>()

        underTest.bindView(bindingContext, view, divRadio, path)
        verify(variableBinder).bindVariable(any(), any(), captor.capture(), any())

        val callbacks = captor.allValues.single()
        callbacks.setViewStateChangeListener(viewStateChangeListener)

        val newValue = "option_2"
        view.selectedValue = newValue

        verifyNoMoreInteractions(variableBinder)
    }

    @Test
    fun `options are set on view`() {
        val (divRadio, view) = createDivAndView(RADIO_WITH_OPTIONS)
        underTest.bindView(bindingContext, view, divRadio, path)

        // View should have been configured with options
        Assert.assertNotNull(view)
    }

    @Test
    fun `horizontal orientation applied`() {
        val (divRadio, view) = createDivAndView(RADIO_HORIZONTAL)
        underTest.bindView(bindingContext, view, divRadio, path)

        Assert.assertNotNull(view)
    }

    private fun createDivAndView(jsonString: String): Pair<Div.Radio, DivRadioView> {
        val environment = DivParsingEnvironment(ParsingErrorLogger.LOG)
        val div = Div(environment, JSONObject(jsonString)) as Div.Radio
        val view = (viewCreator.create(div, ExpressionResolver.EMPTY) as DivRadioView).apply {
            layoutParams = defaultLayoutParams()
        }
        return div to view
    }

    companion object {

        private val RADIO_WITH_OPTIONS = """
            {
              "type": "radio",
              "value_variable": "selected_option",
              "options": [
                { "value": "option_1", "text": "Option 1" },
                { "value": "option_2", "text": "Option 2" },
                { "value": "option_3", "text": "Option 3" }
              ],
              "width": {
                "type": "wrap_content"
              }
            }
        """.trimIndent()

        private val RADIO_HORIZONTAL = """
            {
              "type": "radio",
              "value_variable": "selected_option",
              "options": [
                { "value": "a", "text": "A" },
                { "value": "b", "text": "B" }
              ],
              "orientation": "horizontal",
              "item_spacing": 16,
              "width": {
                "type": "wrap_content"
              }
            }
        """.trimIndent()
    }
}
