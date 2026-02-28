// Generated code. Do not modify.

@file:Suppress("DEPRECATION", "TYPEALIAS_EXPANSION_DEPRECATION")

package com.yandex.div2

import android.graphics.Color
import android.net.Uri
import androidx.annotation.ColorInt
import com.yandex.div.data.*
import com.yandex.div.internal.parser.*
import com.yandex.div.internal.template.*
import com.yandex.div.internal.util.*
import com.yandex.div.json.*
import com.yandex.div.json.expressions.*
import com.yandex.div.serialization.*
import org.json.JSONArray
import org.json.JSONObject

class DivRadioTemplate @DivModelInternalApi constructor (
    @JvmField val accessibility: Field<DivAccessibilityTemplate>,
    @JvmField val alignmentHorizontal: Field<Expression<DivAlignmentHorizontal>>,
    @JvmField val alignmentVertical: Field<Expression<DivAlignmentVertical>>,
    @JvmField val alpha: Field<Expression<Double>>,
    @JvmField val animators: Field<List<DivAnimatorTemplate>>,
    @JvmField val background: Field<List<DivBackgroundTemplate>>,
    @JvmField val border: Field<DivBorderTemplate>,
    @JvmField val columnSpan: Field<Expression<Long>>,
    @JvmField val defaultColor: Field<Expression<Int>>,
    @JvmField val disappearActions: Field<List<DivDisappearActionTemplate>>,
    @JvmField val extensions: Field<List<DivExtensionTemplate>>,
    @JvmField val focus: Field<DivFocusTemplate>,
    @JvmField val fontFamily: Field<Expression<String>>,
    @JvmField val fontSize: Field<Expression<Long>>,
    @JvmField val fontWeight: Field<Expression<DivFontWeight>>,
    @JvmField val functions: Field<List<DivFunctionTemplate>>,
    @JvmField val height: Field<DivSizeTemplate>,
    @JvmField val id: Field<String>,
    @JvmField val isEnabled: Field<Expression<Boolean>>,
    @JvmField val itemSpacing: Field<Expression<Long>>,
    @JvmField val layoutProvider: Field<DivLayoutProviderTemplate>,
    @JvmField val margins: Field<DivEdgeInsetsTemplate>,
    @JvmField val options: Field<List<OptionTemplate>>,
    @JvmField val orientation: Field<Expression<DivRadio.Orientation>>,
    @JvmField val paddings: Field<DivEdgeInsetsTemplate>,
    @JvmField val reuseId: Field<Expression<String>>,
    @JvmField val rowSpan: Field<Expression<Long>>,
    @JvmField val selectedActions: Field<List<DivActionTemplate>>,
    @JvmField val selectedColor: Field<Expression<Int>>,
    @JvmField val textColor: Field<Expression<Int>>,
    @JvmField val tooltips: Field<List<DivTooltipTemplate>>,
    @JvmField val transform: Field<DivTransformTemplate>,
    @JvmField val transformations: Field<List<DivTransformationTemplate>>,
    @JvmField val transitionChange: Field<DivChangeTransitionTemplate>,
    @JvmField val transitionIn: Field<DivAppearanceTransitionTemplate>,
    @JvmField val transitionOut: Field<DivAppearanceTransitionTemplate>,
    @JvmField val transitionTriggers: Field<List<DivTransitionTrigger>>,
    @JvmField val valueVariable: Field<String>,
    @JvmField val variableTriggers: Field<List<DivTriggerTemplate>>,
    @JvmField val variables: Field<List<DivVariableTemplate>>,
    @JvmField val visibility: Field<Expression<DivVisibility>>,
    @JvmField val visibilityAction: Field<DivVisibilityActionTemplate>,
    @JvmField val visibilityActions: Field<List<DivVisibilityActionTemplate>>,
    @JvmField val width: Field<DivSizeTemplate>,
) : JSONSerializable, JsonTemplate<DivRadio> {

    constructor(
        env: ParsingEnvironment,
        parent: DivRadioTemplate? = null,
        topLevel: Boolean = false,
        json: JSONObject
    ) : this(
        accessibility = Field.nullField(false),
        alignmentHorizontal = Field.nullField(false),
        alignmentVertical = Field.nullField(false),
        alpha = Field.nullField(false),
        animators = Field.nullField(false),
        background = Field.nullField(false),
        border = Field.nullField(false),
        columnSpan = Field.nullField(false),
        defaultColor = Field.nullField(false),
        disappearActions = Field.nullField(false),
        extensions = Field.nullField(false),
        focus = Field.nullField(false),
        fontFamily = Field.nullField(false),
        fontSize = Field.nullField(false),
        fontWeight = Field.nullField(false),
        functions = Field.nullField(false),
        height = Field.nullField(false),
        id = Field.nullField(false),
        isEnabled = Field.nullField(false),
        itemSpacing = Field.nullField(false),
        layoutProvider = Field.nullField(false),
        margins = Field.nullField(false),
        options = Field.nullField(false),
        orientation = Field.nullField(false),
        paddings = Field.nullField(false),
        reuseId = Field.nullField(false),
        rowSpan = Field.nullField(false),
        selectedActions = Field.nullField(false),
        selectedColor = Field.nullField(false),
        textColor = Field.nullField(false),
        tooltips = Field.nullField(false),
        transform = Field.nullField(false),
        transformations = Field.nullField(false),
        transitionChange = Field.nullField(false),
        transitionIn = Field.nullField(false),
        transitionOut = Field.nullField(false),
        transitionTriggers = Field.nullField(false),
        valueVariable = Field.nullField(false),
        variableTriggers = Field.nullField(false),
        variables = Field.nullField(false),
        visibility = Field.nullField(false),
        visibilityAction = Field.nullField(false),
        visibilityActions = Field.nullField(false),
        width = Field.nullField(false),
    ) {
        throw UnsupportedOperationException("Do not use this constructor directly.")
    }

    override fun resolve(env: ParsingEnvironment, data: JSONObject): DivRadio {
        return builtInParserComponent.divRadioJsonTemplateResolver
            .value
            .resolve(context = env, template = this, data = data)
    }

    override fun writeToJSON(): JSONObject {
        return builtInParserComponent.divRadioJsonTemplateParser
            .value
            .serialize(context = builtInParsingContext, value = this)
    }

    companion object {
        const val TYPE = "radio"

        private val ALPHA_DEFAULT_VALUE = Expression.constant(1.0)
        private val HEIGHT_DEFAULT_VALUE = DivSize.WrapContent(DivWrapContentSize())
        private val IS_ENABLED_DEFAULT_VALUE = Expression.constant(true)
        private val ITEM_SPACING_DEFAULT_VALUE = Expression.constant(8L)
        private val ORIENTATION_DEFAULT_VALUE = Expression.constant(DivRadio.Orientation.VERTICAL)
        private val VISIBILITY_DEFAULT_VALUE = Expression.constant(DivVisibility.VISIBLE)
        private val WIDTH_DEFAULT_VALUE = DivSize.MatchParent(DivMatchParentSize())

        val CREATOR = { env: ParsingEnvironment, it: JSONObject -> DivRadioTemplate(env, json = it) }
    }

    class OptionTemplate @DivModelInternalApi constructor (
        @JvmField val text: Field<Expression<String>>,
        @JvmField val value: Field<Expression<String>>,
    ) : JSONSerializable, JsonTemplate<DivRadio.Option> {

        constructor(
            env: ParsingEnvironment,
            parent: OptionTemplate? = null,
            topLevel: Boolean = false,
            json: JSONObject
        ) : this(
            text = Field.nullField(false),
            value = Field.nullField(false),
        ) {
            throw UnsupportedOperationException("Do not use this constructor directly.")
        }

        override fun resolve(env: ParsingEnvironment, data: JSONObject): DivRadio.Option {
            return builtInParserComponent.divRadioOptionJsonTemplateResolver
                .value
                .resolve(context = env, template = this, data = data)
        }

        override fun writeToJSON(): JSONObject {
            return builtInParserComponent.divRadioOptionJsonTemplateParser
                .value
                .serialize(context = builtInParsingContext, value = this)
        }

        companion object {
            val CREATOR = { env: ParsingEnvironment, it: JSONObject -> OptionTemplate(env, json = it) }
        }
    }
}
