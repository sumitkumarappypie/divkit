package com.yandex.div.core.view2.divs

import com.yandex.div.core.state.DivStatePath
import com.yandex.div.core.view2.divs.widgets.DivProgressView
import com.yandex.div.data.DivParsingEnvironment
import com.yandex.div.json.ParsingErrorLogger
import com.yandex.div.json.expressions.ExpressionResolver
import com.yandex.div2.Div
import org.json.JSONObject
import org.junit.Assert
import org.junit.Test
import org.junit.runner.RunWith
import org.robolectric.RobolectricTestRunner

@RunWith(RobolectricTestRunner::class)
class DivProgressBinderTest : DivBinderTest() {

    private val underTest = DivProgressBinder(baseBinder)
    private val path = DivStatePath(0)

    @Test
    fun `linear style applied by default`() {
        val (divProgress, view) = createDivAndView(PROGRESS_DEFAULT)
        underTest.bindView(bindingContext, view, divProgress, path)

        Assert.assertFalse(view.isCircular)
    }

    @Test
    fun `circular style applied when specified`() {
        val (divProgress, view) = createDivAndView(PROGRESS_CIRCULAR)
        underTest.bindView(bindingContext, view, divProgress, path)

        Assert.assertTrue(view.isCircular)
    }

    @Test
    fun `value applied`() {
        val (divProgress, view) = createDivAndView(PROGRESS_WITH_VALUE)
        underTest.bindView(bindingContext, view, divProgress, path)

        Assert.assertEquals(0.75f, view.progressValue, 0.001f)
    }

    @Test
    fun `default value is zero`() {
        val (divProgress, view) = createDivAndView(PROGRESS_DEFAULT)
        underTest.bindView(bindingContext, view, divProgress, path)

        Assert.assertEquals(0f, view.progressValue, 0.001f)
    }

    @Test
    fun `indeterminate mode applied`() {
        val (divProgress, view) = createDivAndView(PROGRESS_INDETERMINATE)
        underTest.bindView(bindingContext, view, divProgress, path)

        Assert.assertTrue(view.isIndeterminate)
    }

    @Test
    fun `indeterminate mode off by default`() {
        val (divProgress, view) = createDivAndView(PROGRESS_DEFAULT)
        underTest.bindView(bindingContext, view, divProgress, path)

        Assert.assertFalse(view.isIndeterminate)
    }

    @Test
    fun `active color applied`() {
        val (divProgress, view) = createDivAndView(PROGRESS_WITH_COLORS)
        underTest.bindView(bindingContext, view, divProgress, path)

        Assert.assertNotEquals(0, view.activeColor)
    }

    @Test
    fun `inactive color applied`() {
        val (divProgress, view) = createDivAndView(PROGRESS_WITH_COLORS)
        underTest.bindView(bindingContext, view, divProgress, path)

        Assert.assertNotEquals(0, view.inactiveColor)
    }

    private fun createDivAndView(jsonString: String): Pair<Div.Progress, DivProgressView> {
        val environment = DivParsingEnvironment(ParsingErrorLogger.LOG)
        val div = Div(environment, JSONObject(jsonString)) as Div.Progress
        val view = (viewCreator.create(div, ExpressionResolver.EMPTY) as DivProgressView).apply {
            layoutParams = defaultLayoutParams()
        }
        return div to view
    }

    companion object {

        private val PROGRESS_DEFAULT = """
            {
              "type": "progress",
              "width": {
                "type": "match_parent"
              }
            }
        """.trimIndent()

        private val PROGRESS_CIRCULAR = """
            {
              "type": "progress",
              "style": "circular",
              "value": 0.5,
              "width": {
                "type": "wrap_content"
              }
            }
        """.trimIndent()

        private val PROGRESS_WITH_VALUE = """
            {
              "type": "progress",
              "value": 0.75,
              "width": {
                "type": "match_parent"
              }
            }
        """.trimIndent()

        private val PROGRESS_INDETERMINATE = """
            {
              "type": "progress",
              "is_indeterminate": true,
              "width": {
                "type": "match_parent"
              }
            }
        """.trimIndent()

        private val PROGRESS_WITH_COLORS = """
            {
              "type": "progress",
              "value": 0.5,
              "active_color": "#00ff00",
              "inactive_color": "#eeeeee",
              "track_thickness": 8,
              "width": {
                "type": "match_parent"
              }
            }
        """.trimIndent()
    }
}
