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

class DivRadio @DivModelInternalApi constructor (
    override val accessibility: DivAccessibility? = null,
    override val alignmentHorizontal: Expression<DivAlignmentHorizontal>? = null,
    override val alignmentVertical: Expression<DivAlignmentVertical>? = null,
    override val alpha: Expression<Double> = ALPHA_DEFAULT_VALUE, // constraint: number >= 0.0 && number <= 1.0; default value: 1.0
    override val animators: List<DivAnimator>? = null,
    override val background: List<DivBackground>? = null,
    override val border: DivBorder? = null,
    override val columnSpan: Expression<Long>? = null, // constraint: number >= 0
    @JvmField val defaultColor: Expression<Int>? = null,
    override val disappearActions: List<DivDisappearAction>? = null,
    override val extensions: List<DivExtension>? = null,
    override val focus: DivFocus? = null,
    @JvmField val fontFamily: Expression<String>? = null,
    @JvmField val fontSize: Expression<Long>? = null, // constraint: number >= 0
    @JvmField val fontWeight: Expression<DivFontWeight>? = null,
    override val functions: List<DivFunction>? = null,
    override val height: DivSize = HEIGHT_DEFAULT_VALUE, // default value: DivSize.WrapContent(DivWrapContentSize())
    override val id: String? = null,
    @JvmField val isEnabled: Expression<Boolean> = IS_ENABLED_DEFAULT_VALUE, // default value: true
    @JvmField val itemSpacing: Expression<Long> = ITEM_SPACING_DEFAULT_VALUE, // constraint: number >= 0; default value: 8
    override val layoutProvider: DivLayoutProvider? = null,
    override val margins: DivEdgeInsets? = null,
    @JvmField val options: List<Option>, // at least 1 elements
    @JvmField val orientation: Expression<Orientation> = ORIENTATION_DEFAULT_VALUE, // default value: vertical
    override val paddings: DivEdgeInsets? = null,
    override val reuseId: Expression<String>? = null,
    override val rowSpan: Expression<Long>? = null, // constraint: number >= 0
    override val selectedActions: List<DivAction>? = null,
    @JvmField val selectedColor: Expression<Int>? = null,
    @JvmField val textColor: Expression<Int>? = null,
    override val tooltips: List<DivTooltip>? = null,
    override val transform: DivTransform? = null,
    override val transformations: List<DivTransformation>? = null,
    override val transitionChange: DivChangeTransition? = null,
    override val transitionIn: DivAppearanceTransition? = null,
    override val transitionOut: DivAppearanceTransition? = null,
    override val transitionTriggers: List<DivTransitionTrigger>? = null, // at least 1 elements
    @JvmField val valueVariable: String,
    override val variableTriggers: List<DivTrigger>? = null,
    override val variables: List<DivVariable>? = null,
    override val visibility: Expression<DivVisibility> = VISIBILITY_DEFAULT_VALUE, // default value: visible
    override val visibilityAction: DivVisibilityAction? = null,
    override val visibilityActions: List<DivVisibilityAction>? = null,
    override val width: DivSize = WIDTH_DEFAULT_VALUE, // default value: DivSize.MatchParent(DivMatchParentSize())
) : JSONSerializable, Hashable, DivBase {

    private var _hash: Int? = null 

    override fun hash(): Int {
        _hash?.let {
            return it
        }
        val hash = 
            this::class.hashCode() +
            (accessibility?.hash() ?: 0) +
            (alignmentHorizontal?.hashCode() ?: 0) +
            (alignmentVertical?.hashCode() ?: 0) +
            alpha.hashCode() +
            (animators?.sumOf { it.hash() } ?: 0) +
            (background?.sumOf { it.hash() } ?: 0) +
            (border?.hash() ?: 0) +
            (columnSpan?.hashCode() ?: 0) +
            (defaultColor?.hashCode() ?: 0) +
            (disappearActions?.sumOf { it.hash() } ?: 0) +
            (extensions?.sumOf { it.hash() } ?: 0) +
            (focus?.hash() ?: 0) +
            (fontFamily?.hashCode() ?: 0) +
            (fontSize?.hashCode() ?: 0) +
            (fontWeight?.hashCode() ?: 0) +
            (functions?.sumOf { it.hash() } ?: 0) +
            height.hash() +
            (id?.hashCode() ?: 0) +
            isEnabled.hashCode() +
            itemSpacing.hashCode() +
            (layoutProvider?.hash() ?: 0) +
            (margins?.hash() ?: 0) +
            options.sumOf { it.hash() } +
            orientation.hashCode() +
            (paddings?.hash() ?: 0) +
            (reuseId?.hashCode() ?: 0) +
            (rowSpan?.hashCode() ?: 0) +
            (selectedActions?.sumOf { it.hash() } ?: 0) +
            (selectedColor?.hashCode() ?: 0) +
            (textColor?.hashCode() ?: 0) +
            (tooltips?.sumOf { it.hash() } ?: 0) +
            (transform?.hash() ?: 0) +
            (transformations?.sumOf { it.hash() } ?: 0) +
            (transitionChange?.hash() ?: 0) +
            (transitionIn?.hash() ?: 0) +
            (transitionOut?.hash() ?: 0) +
            (transitionTriggers?.hashCode() ?: 0) +
            valueVariable.hashCode() +
            (variableTriggers?.sumOf { it.hash() } ?: 0) +
            (variables?.sumOf { it.hash() } ?: 0) +
            visibility.hashCode() +
            (visibilityAction?.hash() ?: 0) +
            (visibilityActions?.sumOf { it.hash() } ?: 0) +
            width.hash()
        _hash = hash
        return hash
    }

    fun equals(other: DivRadio?, resolver: ExpressionResolver, otherResolver: ExpressionResolver): Boolean {
        other ?: return false
        return (accessibility?.equals(other.accessibility, resolver, otherResolver) ?: (other.accessibility == null)) &&
            alignmentHorizontal?.evaluate(resolver) == other.alignmentHorizontal?.evaluate(otherResolver) &&
            alignmentVertical?.evaluate(resolver) == other.alignmentVertical?.evaluate(otherResolver) &&
            alpha.evaluate(resolver) == other.alpha.evaluate(otherResolver) &&
            (animators?.compareWith(other.animators ?: return false) { a, b -> a.equals(b, resolver, otherResolver) } ?: (other.animators == null)) &&
            (background?.compareWith(other.background ?: return false) { a, b -> a.equals(b, resolver, otherResolver) } ?: (other.background == null)) &&
            (border?.equals(other.border, resolver, otherResolver) ?: (other.border == null)) &&
            columnSpan?.evaluate(resolver) == other.columnSpan?.evaluate(otherResolver) &&
            defaultColor?.evaluate(resolver) == other.defaultColor?.evaluate(otherResolver) &&
            (disappearActions?.compareWith(other.disappearActions ?: return false) { a, b -> a.equals(b, resolver, otherResolver) } ?: (other.disappearActions == null)) &&
            (extensions?.compareWith(other.extensions ?: return false) { a, b -> a.equals(b, resolver, otherResolver) } ?: (other.extensions == null)) &&
            (focus?.equals(other.focus, resolver, otherResolver) ?: (other.focus == null)) &&
            fontFamily?.evaluate(resolver) == other.fontFamily?.evaluate(otherResolver) &&
            fontSize?.evaluate(resolver) == other.fontSize?.evaluate(otherResolver) &&
            fontWeight?.evaluate(resolver) == other.fontWeight?.evaluate(otherResolver) &&
            (functions?.compareWith(other.functions ?: return false) { a, b -> a.equals(b, resolver, otherResolver) } ?: (other.functions == null)) &&
            height.equals(other.height, resolver, otherResolver) &&
            id == other.id &&
            isEnabled.evaluate(resolver) == other.isEnabled.evaluate(otherResolver) &&
            itemSpacing.evaluate(resolver) == other.itemSpacing.evaluate(otherResolver) &&
            (layoutProvider?.equals(other.layoutProvider, resolver, otherResolver) ?: (other.layoutProvider == null)) &&
            (margins?.equals(other.margins, resolver, otherResolver) ?: (other.margins == null)) &&
            options.compareWith(other.options) { a, b -> a.equals(b, resolver, otherResolver) } &&
            orientation.evaluate(resolver) == other.orientation.evaluate(otherResolver) &&
            (paddings?.equals(other.paddings, resolver, otherResolver) ?: (other.paddings == null)) &&
            reuseId?.evaluate(resolver) == other.reuseId?.evaluate(otherResolver) &&
            rowSpan?.evaluate(resolver) == other.rowSpan?.evaluate(otherResolver) &&
            (selectedActions?.compareWith(other.selectedActions ?: return false) { a, b -> a.equals(b, resolver, otherResolver) } ?: (other.selectedActions == null)) &&
            selectedColor?.evaluate(resolver) == other.selectedColor?.evaluate(otherResolver) &&
            textColor?.evaluate(resolver) == other.textColor?.evaluate(otherResolver) &&
            (tooltips?.compareWith(other.tooltips ?: return false) { a, b -> a.equals(b, resolver, otherResolver) } ?: (other.tooltips == null)) &&
            (transform?.equals(other.transform, resolver, otherResolver) ?: (other.transform == null)) &&
            (transformations?.compareWith(other.transformations ?: return false) { a, b -> a.equals(b, resolver, otherResolver) } ?: (other.transformations == null)) &&
            (transitionChange?.equals(other.transitionChange, resolver, otherResolver) ?: (other.transitionChange == null)) &&
            (transitionIn?.equals(other.transitionIn, resolver, otherResolver) ?: (other.transitionIn == null)) &&
            (transitionOut?.equals(other.transitionOut, resolver, otherResolver) ?: (other.transitionOut == null)) &&
            (transitionTriggers?.compareWith(other.transitionTriggers ?: return false) { a, b -> a == b } ?: (other.transitionTriggers == null)) &&
            valueVariable == other.valueVariable &&
            (variableTriggers?.compareWith(other.variableTriggers ?: return false) { a, b -> a.equals(b, resolver, otherResolver) } ?: (other.variableTriggers == null)) &&
            (variables?.compareWith(other.variables ?: return false) { a, b -> a.equals(b, resolver, otherResolver) } ?: (other.variables == null)) &&
            visibility.evaluate(resolver) == other.visibility.evaluate(otherResolver) &&
            (visibilityAction?.equals(other.visibilityAction, resolver, otherResolver) ?: (other.visibilityAction == null)) &&
            (visibilityActions?.compareWith(other.visibilityActions ?: return false) { a, b -> a.equals(b, resolver, otherResolver) } ?: (other.visibilityActions == null)) &&
            width.equals(other.width, resolver, otherResolver)
    }

    fun copy(
        accessibility: DivAccessibility? = this.accessibility,
        alignmentHorizontal: Expression<DivAlignmentHorizontal>? = this.alignmentHorizontal,
        alignmentVertical: Expression<DivAlignmentVertical>? = this.alignmentVertical,
        alpha: Expression<Double> = this.alpha,
        animators: List<DivAnimator>? = this.animators,
        background: List<DivBackground>? = this.background,
        border: DivBorder? = this.border,
        columnSpan: Expression<Long>? = this.columnSpan,
        defaultColor: Expression<Int>? = this.defaultColor,
        disappearActions: List<DivDisappearAction>? = this.disappearActions,
        extensions: List<DivExtension>? = this.extensions,
        focus: DivFocus? = this.focus,
        fontFamily: Expression<String>? = this.fontFamily,
        fontSize: Expression<Long>? = this.fontSize,
        fontWeight: Expression<DivFontWeight>? = this.fontWeight,
        functions: List<DivFunction>? = this.functions,
        height: DivSize = this.height,
        id: String? = this.id,
        isEnabled: Expression<Boolean> = this.isEnabled,
        itemSpacing: Expression<Long> = this.itemSpacing,
        layoutProvider: DivLayoutProvider? = this.layoutProvider,
        margins: DivEdgeInsets? = this.margins,
        options: List<Option> = this.options,
        orientation: Expression<Orientation> = this.orientation,
        paddings: DivEdgeInsets? = this.paddings,
        reuseId: Expression<String>? = this.reuseId,
        rowSpan: Expression<Long>? = this.rowSpan,
        selectedActions: List<DivAction>? = this.selectedActions,
        selectedColor: Expression<Int>? = this.selectedColor,
        textColor: Expression<Int>? = this.textColor,
        tooltips: List<DivTooltip>? = this.tooltips,
        transform: DivTransform? = this.transform,
        transformations: List<DivTransformation>? = this.transformations,
        transitionChange: DivChangeTransition? = this.transitionChange,
        transitionIn: DivAppearanceTransition? = this.transitionIn,
        transitionOut: DivAppearanceTransition? = this.transitionOut,
        transitionTriggers: List<DivTransitionTrigger>? = this.transitionTriggers,
        valueVariable: String = this.valueVariable,
        variableTriggers: List<DivTrigger>? = this.variableTriggers,
        variables: List<DivVariable>? = this.variables,
        visibility: Expression<DivVisibility> = this.visibility,
        visibilityAction: DivVisibilityAction? = this.visibilityAction,
        visibilityActions: List<DivVisibilityAction>? = this.visibilityActions,
        width: DivSize = this.width,
    ) = DivRadio(
        accessibility = accessibility,
        alignmentHorizontal = alignmentHorizontal,
        alignmentVertical = alignmentVertical,
        alpha = alpha,
        animators = animators,
        background = background,
        border = border,
        columnSpan = columnSpan,
        defaultColor = defaultColor,
        disappearActions = disappearActions,
        extensions = extensions,
        focus = focus,
        fontFamily = fontFamily,
        fontSize = fontSize,
        fontWeight = fontWeight,
        functions = functions,
        height = height,
        id = id,
        isEnabled = isEnabled,
        itemSpacing = itemSpacing,
        layoutProvider = layoutProvider,
        margins = margins,
        options = options,
        orientation = orientation,
        paddings = paddings,
        reuseId = reuseId,
        rowSpan = rowSpan,
        selectedActions = selectedActions,
        selectedColor = selectedColor,
        textColor = textColor,
        tooltips = tooltips,
        transform = transform,
        transformations = transformations,
        transitionChange = transitionChange,
        transitionIn = transitionIn,
        transitionOut = transitionOut,
        transitionTriggers = transitionTriggers,
        valueVariable = valueVariable,
        variableTriggers = variableTriggers,
        variables = variables,
        visibility = visibility,
        visibilityAction = visibilityAction,
        visibilityActions = visibilityActions,
        width = width,
    )

    override fun writeToJSON(): JSONObject {
        return builtInParserComponent.divRadioJsonEntityParser
            .value
            .serialize(context = builtInParsingContext, value = this)
    }

    companion object {
        const val TYPE = "radio"

        private val ALPHA_DEFAULT_VALUE = Expression.constant(1.0)
        private val HEIGHT_DEFAULT_VALUE = DivSize.WrapContent(DivWrapContentSize())
        private val IS_ENABLED_DEFAULT_VALUE = Expression.constant(true)
        private val ITEM_SPACING_DEFAULT_VALUE = Expression.constant(8L)
        private val ORIENTATION_DEFAULT_VALUE = Expression.constant(Orientation.VERTICAL)
        private val VISIBILITY_DEFAULT_VALUE = Expression.constant(DivVisibility.VISIBLE)
        private val WIDTH_DEFAULT_VALUE = DivSize.MatchParent(DivMatchParentSize())

        @JvmStatic
        @JvmName("fromJson")
        operator fun invoke(env: ParsingEnvironment, json: JSONObject): DivRadio {
            return builtInParserComponent.divRadioJsonEntityParser
                .value
                .deserialize(context = env, data = json)
        }

        val CREATOR = { env: ParsingEnvironment, it: JSONObject -> DivRadio(env, json = it) }
    }

    class Option @DivModelInternalApi constructor (
        @JvmField val text: Expression<String>? = null,
        @JvmField val value: Expression<String>,
    ) : JSONSerializable, Hashable {

        private var _hash: Int? = null 

        override fun hash(): Int {
            _hash?.let {
                return it
            }
            val hash = 
                this::class.hashCode() +
                (text?.hashCode() ?: 0) +
                value.hashCode()
            _hash = hash
            return hash
        }

        fun equals(other: Option?, resolver: ExpressionResolver, otherResolver: ExpressionResolver): Boolean {
            other ?: return false
            return text?.evaluate(resolver) == other.text?.evaluate(otherResolver) &&
                value.evaluate(resolver) == other.value.evaluate(otherResolver)
        }

        fun copy(
            text: Expression<String>? = this.text,
            value: Expression<String> = this.value,
        ) = Option(
            text = text,
            value = value,
        )

        override fun writeToJSON(): JSONObject {
            return builtInParserComponent.divRadioOptionJsonEntityParser
                .value
                .serialize(context = builtInParsingContext, value = this)
        }

        companion object {
            @JvmStatic
            @JvmName("fromJson")
            operator fun invoke(env: ParsingEnvironment, json: JSONObject): Option {
                return builtInParserComponent.divRadioOptionJsonEntityParser
                    .value
                    .deserialize(context = env, data = json)
            }

            val CREATOR = { env: ParsingEnvironment, it: JSONObject -> Option(env, json = it) }
        }
    }

    enum class Orientation(private val value: String) {
        VERTICAL("vertical"),
        HORIZONTAL("horizontal");

        companion object Converter {

            fun toString(obj: Orientation): String {
                return obj.value
            }

            fun fromString(value: String): Orientation? {
                return when (value) {
                    VERTICAL.value -> VERTICAL
                    HORIZONTAL.value -> HORIZONTAL
                    else -> null
                }
            }

            @JvmField
            val TO_STRING = { value: Orientation -> toString(value) }

            @JvmField
            val FROM_STRING = { value: String -> fromString(value) }
        }
    }
}
