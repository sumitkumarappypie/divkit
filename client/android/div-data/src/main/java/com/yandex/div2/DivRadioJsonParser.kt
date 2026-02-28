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

internal class DivRadioJsonParser(
    private val component: JsonParserComponent
) {

    class EntityParserImpl(
        private val component: JsonParserComponent
    ) : Parser<JSONObject, DivRadio> {

        @Throws(ParsingException::class)
        override fun deserialize(context: ParsingContext, data: JSONObject): DivRadio {
            return DivRadio(
                accessibility = JsonPropertyParser.readOptional(context, data, "accessibility", component.divAccessibilityJsonEntityParser),
                alignmentHorizontal = JsonExpressionParser.readOptionalExpression(context, data, "alignment_horizontal", TYPE_HELPER_ALIGNMENT_HORIZONTAL, DivAlignmentHorizontal.FROM_STRING),
                alignmentVertical = JsonExpressionParser.readOptionalExpression(context, data, "alignment_vertical", TYPE_HELPER_ALIGNMENT_VERTICAL, DivAlignmentVertical.FROM_STRING),
                alpha = JsonExpressionParser.readOptionalExpression(context, data, "alpha", TYPE_HELPER_DOUBLE, NUMBER_TO_DOUBLE, ALPHA_VALIDATOR, ALPHA_DEFAULT_VALUE) ?: ALPHA_DEFAULT_VALUE,
                animators = JsonPropertyParser.readOptionalList(context, data, "animators", component.divAnimatorJsonEntityParser),
                background = JsonPropertyParser.readOptionalList(context, data, "background", component.divBackgroundJsonEntityParser),
                border = JsonPropertyParser.readOptional(context, data, "border", component.divBorderJsonEntityParser),
                columnSpan = JsonExpressionParser.readOptionalExpression(context, data, "column_span", TYPE_HELPER_INT, NUMBER_TO_INT, COLUMN_SPAN_VALIDATOR),
                defaultColor = JsonExpressionParser.readOptionalExpression(context, data, "default_color", TYPE_HELPER_COLOR, STRING_TO_COLOR_INT),
                disappearActions = JsonPropertyParser.readOptionalList(context, data, "disappear_actions", component.divDisappearActionJsonEntityParser),
                extensions = JsonPropertyParser.readOptionalList(context, data, "extensions", component.divExtensionJsonEntityParser),
                focus = JsonPropertyParser.readOptional(context, data, "focus", component.divFocusJsonEntityParser),
                fontFamily = JsonExpressionParser.readOptionalExpression(context, data, "font_family", TYPE_HELPER_STRING),
                fontSize = JsonExpressionParser.readOptionalExpression(context, data, "font_size", TYPE_HELPER_INT, NUMBER_TO_INT, FONT_SIZE_VALIDATOR),
                fontWeight = JsonExpressionParser.readOptionalExpression(context, data, "font_weight", TYPE_HELPER_FONT_WEIGHT, DivFontWeight.FROM_STRING),
                functions = JsonPropertyParser.readOptionalList(context, data, "functions", component.divFunctionJsonEntityParser),
                height = JsonPropertyParser.readOptional(context, data, "height", component.divSizeJsonEntityParser) ?: HEIGHT_DEFAULT_VALUE,
                id = JsonPropertyParser.readOptional(context, data, "id"),
                isEnabled = JsonExpressionParser.readOptionalExpression(context, data, "is_enabled", TYPE_HELPER_BOOLEAN, ANY_TO_BOOLEAN, IS_ENABLED_DEFAULT_VALUE) ?: IS_ENABLED_DEFAULT_VALUE,
                itemSpacing = JsonExpressionParser.readOptionalExpression(context, data, "item_spacing", TYPE_HELPER_INT, NUMBER_TO_INT, ITEM_SPACING_VALIDATOR, ITEM_SPACING_DEFAULT_VALUE) ?: ITEM_SPACING_DEFAULT_VALUE,
                layoutProvider = JsonPropertyParser.readOptional(context, data, "layout_provider", component.divLayoutProviderJsonEntityParser),
                margins = JsonPropertyParser.readOptional(context, data, "margins", component.divEdgeInsetsJsonEntityParser),
                options = JsonPropertyParser.readList(context, data, "options", component.divRadioOptionJsonEntityParser, OPTIONS_VALIDATOR),
                orientation = JsonExpressionParser.readOptionalExpression(context, data, "orientation", TYPE_HELPER_ORIENTATION, DivRadio.Orientation.FROM_STRING, ORIENTATION_DEFAULT_VALUE) ?: ORIENTATION_DEFAULT_VALUE,
                paddings = JsonPropertyParser.readOptional(context, data, "paddings", component.divEdgeInsetsJsonEntityParser),
                reuseId = JsonExpressionParser.readOptionalExpression(context, data, "reuse_id", TYPE_HELPER_STRING),
                rowSpan = JsonExpressionParser.readOptionalExpression(context, data, "row_span", TYPE_HELPER_INT, NUMBER_TO_INT, ROW_SPAN_VALIDATOR),
                selectedActions = JsonPropertyParser.readOptionalList(context, data, "selected_actions", component.divActionJsonEntityParser),
                selectedColor = JsonExpressionParser.readOptionalExpression(context, data, "selected_color", TYPE_HELPER_COLOR, STRING_TO_COLOR_INT),
                textColor = JsonExpressionParser.readOptionalExpression(context, data, "text_color", TYPE_HELPER_COLOR, STRING_TO_COLOR_INT),
                tooltips = JsonPropertyParser.readOptionalList(context, data, "tooltips", component.divTooltipJsonEntityParser),
                transform = JsonPropertyParser.readOptional(context, data, "transform", component.divTransformJsonEntityParser),
                transformations = JsonPropertyParser.readOptionalList(context, data, "transformations", component.divTransformationJsonEntityParser),
                transitionChange = JsonPropertyParser.readOptional(context, data, "transition_change", component.divChangeTransitionJsonEntityParser),
                transitionIn = JsonPropertyParser.readOptional(context, data, "transition_in", component.divAppearanceTransitionJsonEntityParser),
                transitionOut = JsonPropertyParser.readOptional(context, data, "transition_out", component.divAppearanceTransitionJsonEntityParser),
                transitionTriggers = JsonPropertyParser.readOptionalList(context, data, "transition_triggers", DivTransitionTrigger.FROM_STRING, TRANSITION_TRIGGERS_VALIDATOR),
                valueVariable = JsonPropertyParser.read(context, data, "value_variable"),
                variableTriggers = JsonPropertyParser.readOptionalList(context, data, "variable_triggers", component.divTriggerJsonEntityParser),
                variables = JsonPropertyParser.readOptionalList(context, data, "variables", component.divVariableJsonEntityParser),
                visibility = JsonExpressionParser.readOptionalExpression(context, data, "visibility", TYPE_HELPER_VISIBILITY, DivVisibility.FROM_STRING, VISIBILITY_DEFAULT_VALUE) ?: VISIBILITY_DEFAULT_VALUE,
                visibilityAction = JsonPropertyParser.readOptional(context, data, "visibility_action", component.divVisibilityActionJsonEntityParser),
                visibilityActions = JsonPropertyParser.readOptionalList(context, data, "visibility_actions", component.divVisibilityActionJsonEntityParser),
                width = JsonPropertyParser.readOptional(context, data, "width", component.divSizeJsonEntityParser) ?: WIDTH_DEFAULT_VALUE,
            )
        }

        @Throws(ParsingException::class)
        override fun serialize(context: ParsingContext, value: DivRadio): JSONObject {
            val data = JSONObject()
            JsonPropertyParser.write(context, data, "accessibility", value.accessibility, component.divAccessibilityJsonEntityParser)
            JsonExpressionParser.writeExpression(context, data, "alignment_horizontal", value.alignmentHorizontal, DivAlignmentHorizontal.TO_STRING)
            JsonExpressionParser.writeExpression(context, data, "alignment_vertical", value.alignmentVertical, DivAlignmentVertical.TO_STRING)
            JsonExpressionParser.writeExpression(context, data, "alpha", value.alpha)
            JsonPropertyParser.writeList(context, data, "animators", value.animators, component.divAnimatorJsonEntityParser)
            JsonPropertyParser.writeList(context, data, "background", value.background, component.divBackgroundJsonEntityParser)
            JsonPropertyParser.write(context, data, "border", value.border, component.divBorderJsonEntityParser)
            JsonExpressionParser.writeExpression(context, data, "column_span", value.columnSpan)
            JsonExpressionParser.writeExpression(context, data, "default_color", value.defaultColor, COLOR_INT_TO_STRING)
            JsonPropertyParser.writeList(context, data, "disappear_actions", value.disappearActions, component.divDisappearActionJsonEntityParser)
            JsonPropertyParser.writeList(context, data, "extensions", value.extensions, component.divExtensionJsonEntityParser)
            JsonPropertyParser.write(context, data, "focus", value.focus, component.divFocusJsonEntityParser)
            JsonExpressionParser.writeExpression(context, data, "font_family", value.fontFamily)
            JsonExpressionParser.writeExpression(context, data, "font_size", value.fontSize)
            JsonExpressionParser.writeExpression(context, data, "font_weight", value.fontWeight, DivFontWeight.TO_STRING)
            JsonPropertyParser.writeList(context, data, "functions", value.functions, component.divFunctionJsonEntityParser)
            JsonPropertyParser.write(context, data, "height", value.height, component.divSizeJsonEntityParser)
            JsonPropertyParser.write(context, data, "id", value.id)
            JsonExpressionParser.writeExpression(context, data, "is_enabled", value.isEnabled)
            JsonExpressionParser.writeExpression(context, data, "item_spacing", value.itemSpacing)
            JsonPropertyParser.write(context, data, "layout_provider", value.layoutProvider, component.divLayoutProviderJsonEntityParser)
            JsonPropertyParser.write(context, data, "margins", value.margins, component.divEdgeInsetsJsonEntityParser)
            JsonPropertyParser.writeList(context, data, "options", value.options, component.divRadioOptionJsonEntityParser)
            JsonExpressionParser.writeExpression(context, data, "orientation", value.orientation, DivRadio.Orientation.TO_STRING)
            JsonPropertyParser.write(context, data, "paddings", value.paddings, component.divEdgeInsetsJsonEntityParser)
            JsonExpressionParser.writeExpression(context, data, "reuse_id", value.reuseId)
            JsonExpressionParser.writeExpression(context, data, "row_span", value.rowSpan)
            JsonPropertyParser.writeList(context, data, "selected_actions", value.selectedActions, component.divActionJsonEntityParser)
            JsonExpressionParser.writeExpression(context, data, "selected_color", value.selectedColor, COLOR_INT_TO_STRING)
            JsonExpressionParser.writeExpression(context, data, "text_color", value.textColor, COLOR_INT_TO_STRING)
            JsonPropertyParser.writeList(context, data, "tooltips", value.tooltips, component.divTooltipJsonEntityParser)
            JsonPropertyParser.write(context, data, "transform", value.transform, component.divTransformJsonEntityParser)
            JsonPropertyParser.writeList(context, data, "transformations", value.transformations, component.divTransformationJsonEntityParser)
            JsonPropertyParser.write(context, data, "transition_change", value.transitionChange, component.divChangeTransitionJsonEntityParser)
            JsonPropertyParser.write(context, data, "transition_in", value.transitionIn, component.divAppearanceTransitionJsonEntityParser)
            JsonPropertyParser.write(context, data, "transition_out", value.transitionOut, component.divAppearanceTransitionJsonEntityParser)
            JsonPropertyParser.writeList(context, data, "transition_triggers", value.transitionTriggers, DivTransitionTrigger.TO_STRING)
            JsonPropertyParser.write(context, data, "type", DivRadio.TYPE)
            JsonPropertyParser.write(context, data, "value_variable", value.valueVariable)
            JsonPropertyParser.writeList(context, data, "variable_triggers", value.variableTriggers, component.divTriggerJsonEntityParser)
            JsonPropertyParser.writeList(context, data, "variables", value.variables, component.divVariableJsonEntityParser)
            JsonExpressionParser.writeExpression(context, data, "visibility", value.visibility, DivVisibility.TO_STRING)
            JsonPropertyParser.write(context, data, "visibility_action", value.visibilityAction, component.divVisibilityActionJsonEntityParser)
            JsonPropertyParser.writeList(context, data, "visibility_actions", value.visibilityActions, component.divVisibilityActionJsonEntityParser)
            JsonPropertyParser.write(context, data, "width", value.width, component.divSizeJsonEntityParser)
            return data
        }
    }

    class TemplateParserImpl(
        private val component: JsonParserComponent
    ) : TemplateParser<JSONObject, DivRadioTemplate> {

        @Throws(ParsingException::class)
        override fun deserialize(context: ParsingContext, parent: DivRadioTemplate?, data: JSONObject): DivRadioTemplate {
            val allowOverride = context.allowPropertyOverride
            @Suppress("NAME_SHADOWING") val context = context.restrictPropertyOverride()
            return DivRadioTemplate(
                accessibility = JsonFieldParser.readOptionalField(context, data, "accessibility", allowOverride, parent?.accessibility, component.divAccessibilityJsonTemplateParser),
                alignmentHorizontal = JsonFieldParser.readOptionalFieldWithExpression(context, data, "alignment_horizontal", TYPE_HELPER_ALIGNMENT_HORIZONTAL, allowOverride, parent?.alignmentHorizontal, DivAlignmentHorizontal.FROM_STRING),
                alignmentVertical = JsonFieldParser.readOptionalFieldWithExpression(context, data, "alignment_vertical", TYPE_HELPER_ALIGNMENT_VERTICAL, allowOverride, parent?.alignmentVertical, DivAlignmentVertical.FROM_STRING),
                alpha = JsonFieldParser.readOptionalFieldWithExpression(context, data, "alpha", TYPE_HELPER_DOUBLE, allowOverride, parent?.alpha, NUMBER_TO_DOUBLE, ALPHA_VALIDATOR),
                animators = JsonFieldParser.readOptionalListField(context, data, "animators", allowOverride, parent?.animators, component.divAnimatorJsonTemplateParser),
                background = JsonFieldParser.readOptionalListField(context, data, "background", allowOverride, parent?.background, component.divBackgroundJsonTemplateParser),
                border = JsonFieldParser.readOptionalField(context, data, "border", allowOverride, parent?.border, component.divBorderJsonTemplateParser),
                columnSpan = JsonFieldParser.readOptionalFieldWithExpression(context, data, "column_span", TYPE_HELPER_INT, allowOverride, parent?.columnSpan, NUMBER_TO_INT, COLUMN_SPAN_VALIDATOR),
                defaultColor = JsonFieldParser.readOptionalFieldWithExpression(context, data, "default_color", TYPE_HELPER_COLOR, allowOverride, parent?.defaultColor, STRING_TO_COLOR_INT),
                disappearActions = JsonFieldParser.readOptionalListField(context, data, "disappear_actions", allowOverride, parent?.disappearActions, component.divDisappearActionJsonTemplateParser),
                extensions = JsonFieldParser.readOptionalListField(context, data, "extensions", allowOverride, parent?.extensions, component.divExtensionJsonTemplateParser),
                focus = JsonFieldParser.readOptionalField(context, data, "focus", allowOverride, parent?.focus, component.divFocusJsonTemplateParser),
                fontFamily = JsonFieldParser.readOptionalFieldWithExpression(context, data, "font_family", TYPE_HELPER_STRING, allowOverride, parent?.fontFamily),
                fontSize = JsonFieldParser.readOptionalFieldWithExpression(context, data, "font_size", TYPE_HELPER_INT, allowOverride, parent?.fontSize, NUMBER_TO_INT, FONT_SIZE_VALIDATOR),
                fontWeight = JsonFieldParser.readOptionalFieldWithExpression(context, data, "font_weight", TYPE_HELPER_FONT_WEIGHT, allowOverride, parent?.fontWeight, DivFontWeight.FROM_STRING),
                functions = JsonFieldParser.readOptionalListField(context, data, "functions", allowOverride, parent?.functions, component.divFunctionJsonTemplateParser),
                height = JsonFieldParser.readOptionalField(context, data, "height", allowOverride, parent?.height, component.divSizeJsonTemplateParser),
                id = JsonFieldParser.readOptionalField(context, data, "id", allowOverride, parent?.id),
                isEnabled = JsonFieldParser.readOptionalFieldWithExpression(context, data, "is_enabled", TYPE_HELPER_BOOLEAN, allowOverride, parent?.isEnabled, ANY_TO_BOOLEAN),
                itemSpacing = JsonFieldParser.readOptionalFieldWithExpression(context, data, "item_spacing", TYPE_HELPER_INT, allowOverride, parent?.itemSpacing, NUMBER_TO_INT, ITEM_SPACING_VALIDATOR),
                layoutProvider = JsonFieldParser.readOptionalField(context, data, "layout_provider", allowOverride, parent?.layoutProvider, component.divLayoutProviderJsonTemplateParser),
                margins = JsonFieldParser.readOptionalField(context, data, "margins", allowOverride, parent?.margins, component.divEdgeInsetsJsonTemplateParser),
                options = JsonFieldParser.readListField(context, data, "options", allowOverride, parent?.options, component.divRadioOptionJsonTemplateParser, OPTIONS_VALIDATOR.cast()),
                orientation = JsonFieldParser.readOptionalFieldWithExpression(context, data, "orientation", TYPE_HELPER_ORIENTATION, allowOverride, parent?.orientation, DivRadio.Orientation.FROM_STRING),
                paddings = JsonFieldParser.readOptionalField(context, data, "paddings", allowOverride, parent?.paddings, component.divEdgeInsetsJsonTemplateParser),
                reuseId = JsonFieldParser.readOptionalFieldWithExpression(context, data, "reuse_id", TYPE_HELPER_STRING, allowOverride, parent?.reuseId),
                rowSpan = JsonFieldParser.readOptionalFieldWithExpression(context, data, "row_span", TYPE_HELPER_INT, allowOverride, parent?.rowSpan, NUMBER_TO_INT, ROW_SPAN_VALIDATOR),
                selectedActions = JsonFieldParser.readOptionalListField(context, data, "selected_actions", allowOverride, parent?.selectedActions, component.divActionJsonTemplateParser),
                selectedColor = JsonFieldParser.readOptionalFieldWithExpression(context, data, "selected_color", TYPE_HELPER_COLOR, allowOverride, parent?.selectedColor, STRING_TO_COLOR_INT),
                textColor = JsonFieldParser.readOptionalFieldWithExpression(context, data, "text_color", TYPE_HELPER_COLOR, allowOverride, parent?.textColor, STRING_TO_COLOR_INT),
                tooltips = JsonFieldParser.readOptionalListField(context, data, "tooltips", allowOverride, parent?.tooltips, component.divTooltipJsonTemplateParser),
                transform = JsonFieldParser.readOptionalField(context, data, "transform", allowOverride, parent?.transform, component.divTransformJsonTemplateParser),
                transformations = JsonFieldParser.readOptionalListField(context, data, "transformations", allowOverride, parent?.transformations, component.divTransformationJsonTemplateParser),
                transitionChange = JsonFieldParser.readOptionalField(context, data, "transition_change", allowOverride, parent?.transitionChange, component.divChangeTransitionJsonTemplateParser),
                transitionIn = JsonFieldParser.readOptionalField(context, data, "transition_in", allowOverride, parent?.transitionIn, component.divAppearanceTransitionJsonTemplateParser),
                transitionOut = JsonFieldParser.readOptionalField(context, data, "transition_out", allowOverride, parent?.transitionOut, component.divAppearanceTransitionJsonTemplateParser),
                transitionTriggers = JsonFieldParser.readOptionalListField(context, data, "transition_triggers", allowOverride, parent?.transitionTriggers, DivTransitionTrigger.FROM_STRING, TRANSITION_TRIGGERS_VALIDATOR.cast()),
                valueVariable = JsonFieldParser.readField(context, data, "value_variable", allowOverride, parent?.valueVariable),
                variableTriggers = JsonFieldParser.readOptionalListField(context, data, "variable_triggers", allowOverride, parent?.variableTriggers, component.divTriggerJsonTemplateParser),
                variables = JsonFieldParser.readOptionalListField(context, data, "variables", allowOverride, parent?.variables, component.divVariableJsonTemplateParser),
                visibility = JsonFieldParser.readOptionalFieldWithExpression(context, data, "visibility", TYPE_HELPER_VISIBILITY, allowOverride, parent?.visibility, DivVisibility.FROM_STRING),
                visibilityAction = JsonFieldParser.readOptionalField(context, data, "visibility_action", allowOverride, parent?.visibilityAction, component.divVisibilityActionJsonTemplateParser),
                visibilityActions = JsonFieldParser.readOptionalListField(context, data, "visibility_actions", allowOverride, parent?.visibilityActions, component.divVisibilityActionJsonTemplateParser),
                width = JsonFieldParser.readOptionalField(context, data, "width", allowOverride, parent?.width, component.divSizeJsonTemplateParser),
            )
        }

        @Throws(ParsingException::class)
        override fun serialize(context: ParsingContext, value: DivRadioTemplate): JSONObject {
            val data = JSONObject()
            JsonFieldParser.writeField(context, data, "accessibility", value.accessibility, component.divAccessibilityJsonTemplateParser)
            JsonFieldParser.writeExpressionField(context, data, "alignment_horizontal", value.alignmentHorizontal, DivAlignmentHorizontal.TO_STRING)
            JsonFieldParser.writeExpressionField(context, data, "alignment_vertical", value.alignmentVertical, DivAlignmentVertical.TO_STRING)
            JsonFieldParser.writeExpressionField(context, data, "alpha", value.alpha)
            JsonFieldParser.writeListField(context, data, "animators", value.animators, component.divAnimatorJsonTemplateParser)
            JsonFieldParser.writeListField(context, data, "background", value.background, component.divBackgroundJsonTemplateParser)
            JsonFieldParser.writeField(context, data, "border", value.border, component.divBorderJsonTemplateParser)
            JsonFieldParser.writeExpressionField(context, data, "column_span", value.columnSpan)
            JsonFieldParser.writeExpressionField(context, data, "default_color", value.defaultColor, COLOR_INT_TO_STRING)
            JsonFieldParser.writeListField(context, data, "disappear_actions", value.disappearActions, component.divDisappearActionJsonTemplateParser)
            JsonFieldParser.writeListField(context, data, "extensions", value.extensions, component.divExtensionJsonTemplateParser)
            JsonFieldParser.writeField(context, data, "focus", value.focus, component.divFocusJsonTemplateParser)
            JsonFieldParser.writeExpressionField(context, data, "font_family", value.fontFamily)
            JsonFieldParser.writeExpressionField(context, data, "font_size", value.fontSize)
            JsonFieldParser.writeExpressionField(context, data, "font_weight", value.fontWeight, DivFontWeight.TO_STRING)
            JsonFieldParser.writeListField(context, data, "functions", value.functions, component.divFunctionJsonTemplateParser)
            JsonFieldParser.writeField(context, data, "height", value.height, component.divSizeJsonTemplateParser)
            JsonFieldParser.writeField(context, data, "id", value.id)
            JsonFieldParser.writeExpressionField(context, data, "is_enabled", value.isEnabled)
            JsonFieldParser.writeExpressionField(context, data, "item_spacing", value.itemSpacing)
            JsonFieldParser.writeField(context, data, "layout_provider", value.layoutProvider, component.divLayoutProviderJsonTemplateParser)
            JsonFieldParser.writeField(context, data, "margins", value.margins, component.divEdgeInsetsJsonTemplateParser)
            JsonFieldParser.writeListField(context, data, "options", value.options, component.divRadioOptionJsonTemplateParser)
            JsonFieldParser.writeExpressionField(context, data, "orientation", value.orientation, DivRadio.Orientation.TO_STRING)
            JsonFieldParser.writeField(context, data, "paddings", value.paddings, component.divEdgeInsetsJsonTemplateParser)
            JsonFieldParser.writeExpressionField(context, data, "reuse_id", value.reuseId)
            JsonFieldParser.writeExpressionField(context, data, "row_span", value.rowSpan)
            JsonFieldParser.writeListField(context, data, "selected_actions", value.selectedActions, component.divActionJsonTemplateParser)
            JsonFieldParser.writeExpressionField(context, data, "selected_color", value.selectedColor, COLOR_INT_TO_STRING)
            JsonFieldParser.writeExpressionField(context, data, "text_color", value.textColor, COLOR_INT_TO_STRING)
            JsonFieldParser.writeListField(context, data, "tooltips", value.tooltips, component.divTooltipJsonTemplateParser)
            JsonFieldParser.writeField(context, data, "transform", value.transform, component.divTransformJsonTemplateParser)
            JsonFieldParser.writeListField(context, data, "transformations", value.transformations, component.divTransformationJsonTemplateParser)
            JsonFieldParser.writeField(context, data, "transition_change", value.transitionChange, component.divChangeTransitionJsonTemplateParser)
            JsonFieldParser.writeField(context, data, "transition_in", value.transitionIn, component.divAppearanceTransitionJsonTemplateParser)
            JsonFieldParser.writeField(context, data, "transition_out", value.transitionOut, component.divAppearanceTransitionJsonTemplateParser)
            JsonFieldParser.writeListField(context, data, "transition_triggers", value.transitionTriggers, DivTransitionTrigger.TO_STRING)
            JsonPropertyParser.write(context, data, "type", DivRadio.TYPE)
            JsonFieldParser.writeField(context, data, "value_variable", value.valueVariable)
            JsonFieldParser.writeListField(context, data, "variable_triggers", value.variableTriggers, component.divTriggerJsonTemplateParser)
            JsonFieldParser.writeListField(context, data, "variables", value.variables, component.divVariableJsonTemplateParser)
            JsonFieldParser.writeExpressionField(context, data, "visibility", value.visibility, DivVisibility.TO_STRING)
            JsonFieldParser.writeField(context, data, "visibility_action", value.visibilityAction, component.divVisibilityActionJsonTemplateParser)
            JsonFieldParser.writeListField(context, data, "visibility_actions", value.visibilityActions, component.divVisibilityActionJsonTemplateParser)
            JsonFieldParser.writeField(context, data, "width", value.width, component.divSizeJsonTemplateParser)
          return data
        }
    }

    class TemplateResolverImpl(
        private val component: JsonParserComponent
    ) : TemplateResolver<JSONObject, DivRadioTemplate, DivRadio> {

        @Throws(ParsingException::class)
        override fun resolve(context: ParsingContext, template: DivRadioTemplate, data: JSONObject): DivRadio {
            return DivRadio(
                accessibility = JsonFieldResolver.resolveOptional(context, template.accessibility, data, "accessibility", component.divAccessibilityJsonTemplateResolver, component.divAccessibilityJsonEntityParser),
                alignmentHorizontal = JsonFieldResolver.resolveOptionalExpression(context, template.alignmentHorizontal, data, "alignment_horizontal", TYPE_HELPER_ALIGNMENT_HORIZONTAL, DivAlignmentHorizontal.FROM_STRING),
                alignmentVertical = JsonFieldResolver.resolveOptionalExpression(context, template.alignmentVertical, data, "alignment_vertical", TYPE_HELPER_ALIGNMENT_VERTICAL, DivAlignmentVertical.FROM_STRING),
                alpha = JsonFieldResolver.resolveOptionalExpression(context, template.alpha, data, "alpha", TYPE_HELPER_DOUBLE, NUMBER_TO_DOUBLE, ALPHA_VALIDATOR, ALPHA_DEFAULT_VALUE) ?: ALPHA_DEFAULT_VALUE,
                animators = JsonFieldResolver.resolveOptionalList(context, template.animators, data, "animators", component.divAnimatorJsonTemplateResolver, component.divAnimatorJsonEntityParser),
                background = JsonFieldResolver.resolveOptionalList(context, template.background, data, "background", component.divBackgroundJsonTemplateResolver, component.divBackgroundJsonEntityParser),
                border = JsonFieldResolver.resolveOptional(context, template.border, data, "border", component.divBorderJsonTemplateResolver, component.divBorderJsonEntityParser),
                columnSpan = JsonFieldResolver.resolveOptionalExpression(context, template.columnSpan, data, "column_span", TYPE_HELPER_INT, NUMBER_TO_INT, COLUMN_SPAN_VALIDATOR),
                defaultColor = JsonFieldResolver.resolveOptionalExpression(context, template.defaultColor, data, "default_color", TYPE_HELPER_COLOR, STRING_TO_COLOR_INT),
                disappearActions = JsonFieldResolver.resolveOptionalList(context, template.disappearActions, data, "disappear_actions", component.divDisappearActionJsonTemplateResolver, component.divDisappearActionJsonEntityParser),
                extensions = JsonFieldResolver.resolveOptionalList(context, template.extensions, data, "extensions", component.divExtensionJsonTemplateResolver, component.divExtensionJsonEntityParser),
                focus = JsonFieldResolver.resolveOptional(context, template.focus, data, "focus", component.divFocusJsonTemplateResolver, component.divFocusJsonEntityParser),
                fontFamily = JsonFieldResolver.resolveOptionalExpression(context, template.fontFamily, data, "font_family", TYPE_HELPER_STRING),
                fontSize = JsonFieldResolver.resolveOptionalExpression(context, template.fontSize, data, "font_size", TYPE_HELPER_INT, NUMBER_TO_INT, FONT_SIZE_VALIDATOR),
                fontWeight = JsonFieldResolver.resolveOptionalExpression(context, template.fontWeight, data, "font_weight", TYPE_HELPER_FONT_WEIGHT, DivFontWeight.FROM_STRING),
                functions = JsonFieldResolver.resolveOptionalList(context, template.functions, data, "functions", component.divFunctionJsonTemplateResolver, component.divFunctionJsonEntityParser),
                height = JsonFieldResolver.resolveOptional(context, template.height, data, "height", component.divSizeJsonTemplateResolver, component.divSizeJsonEntityParser) ?: HEIGHT_DEFAULT_VALUE,
                id = JsonFieldResolver.resolveOptional(context, template.id, data, "id"),
                isEnabled = JsonFieldResolver.resolveOptionalExpression(context, template.isEnabled, data, "is_enabled", TYPE_HELPER_BOOLEAN, ANY_TO_BOOLEAN, IS_ENABLED_DEFAULT_VALUE) ?: IS_ENABLED_DEFAULT_VALUE,
                itemSpacing = JsonFieldResolver.resolveOptionalExpression(context, template.itemSpacing, data, "item_spacing", TYPE_HELPER_INT, NUMBER_TO_INT, ITEM_SPACING_VALIDATOR, ITEM_SPACING_DEFAULT_VALUE) ?: ITEM_SPACING_DEFAULT_VALUE,
                layoutProvider = JsonFieldResolver.resolveOptional(context, template.layoutProvider, data, "layout_provider", component.divLayoutProviderJsonTemplateResolver, component.divLayoutProviderJsonEntityParser),
                margins = JsonFieldResolver.resolveOptional(context, template.margins, data, "margins", component.divEdgeInsetsJsonTemplateResolver, component.divEdgeInsetsJsonEntityParser),
                options = JsonFieldResolver.resolveList(context, template.options, data, "options", component.divRadioOptionJsonTemplateResolver, component.divRadioOptionJsonEntityParser, OPTIONS_VALIDATOR),
                orientation = JsonFieldResolver.resolveOptionalExpression(context, template.orientation, data, "orientation", TYPE_HELPER_ORIENTATION, DivRadio.Orientation.FROM_STRING, ORIENTATION_DEFAULT_VALUE) ?: ORIENTATION_DEFAULT_VALUE,
                paddings = JsonFieldResolver.resolveOptional(context, template.paddings, data, "paddings", component.divEdgeInsetsJsonTemplateResolver, component.divEdgeInsetsJsonEntityParser),
                reuseId = JsonFieldResolver.resolveOptionalExpression(context, template.reuseId, data, "reuse_id", TYPE_HELPER_STRING),
                rowSpan = JsonFieldResolver.resolveOptionalExpression(context, template.rowSpan, data, "row_span", TYPE_HELPER_INT, NUMBER_TO_INT, ROW_SPAN_VALIDATOR),
                selectedActions = JsonFieldResolver.resolveOptionalList(context, template.selectedActions, data, "selected_actions", component.divActionJsonTemplateResolver, component.divActionJsonEntityParser),
                selectedColor = JsonFieldResolver.resolveOptionalExpression(context, template.selectedColor, data, "selected_color", TYPE_HELPER_COLOR, STRING_TO_COLOR_INT),
                textColor = JsonFieldResolver.resolveOptionalExpression(context, template.textColor, data, "text_color", TYPE_HELPER_COLOR, STRING_TO_COLOR_INT),
                tooltips = JsonFieldResolver.resolveOptionalList(context, template.tooltips, data, "tooltips", component.divTooltipJsonTemplateResolver, component.divTooltipJsonEntityParser),
                transform = JsonFieldResolver.resolveOptional(context, template.transform, data, "transform", component.divTransformJsonTemplateResolver, component.divTransformJsonEntityParser),
                transformations = JsonFieldResolver.resolveOptionalList(context, template.transformations, data, "transformations", component.divTransformationJsonTemplateResolver, component.divTransformationJsonEntityParser),
                transitionChange = JsonFieldResolver.resolveOptional(context, template.transitionChange, data, "transition_change", component.divChangeTransitionJsonTemplateResolver, component.divChangeTransitionJsonEntityParser),
                transitionIn = JsonFieldResolver.resolveOptional(context, template.transitionIn, data, "transition_in", component.divAppearanceTransitionJsonTemplateResolver, component.divAppearanceTransitionJsonEntityParser),
                transitionOut = JsonFieldResolver.resolveOptional(context, template.transitionOut, data, "transition_out", component.divAppearanceTransitionJsonTemplateResolver, component.divAppearanceTransitionJsonEntityParser),
                transitionTriggers = JsonFieldResolver.resolveOptionalList(context, template.transitionTriggers, data, "transition_triggers", DivTransitionTrigger.FROM_STRING, TRANSITION_TRIGGERS_VALIDATOR),
                valueVariable = JsonFieldResolver.resolve(context, template.valueVariable, data, "value_variable"),
                variableTriggers = JsonFieldResolver.resolveOptionalList(context, template.variableTriggers, data, "variable_triggers", component.divTriggerJsonTemplateResolver, component.divTriggerJsonEntityParser),
                variables = JsonFieldResolver.resolveOptionalList(context, template.variables, data, "variables", component.divVariableJsonTemplateResolver, component.divVariableJsonEntityParser),
                visibility = JsonFieldResolver.resolveOptionalExpression(context, template.visibility, data, "visibility", TYPE_HELPER_VISIBILITY, DivVisibility.FROM_STRING, VISIBILITY_DEFAULT_VALUE) ?: VISIBILITY_DEFAULT_VALUE,
                visibilityAction = JsonFieldResolver.resolveOptional(context, template.visibilityAction, data, "visibility_action", component.divVisibilityActionJsonTemplateResolver, component.divVisibilityActionJsonEntityParser),
                visibilityActions = JsonFieldResolver.resolveOptionalList(context, template.visibilityActions, data, "visibility_actions", component.divVisibilityActionJsonTemplateResolver, component.divVisibilityActionJsonEntityParser),
                width = JsonFieldResolver.resolveOptional(context, template.width, data, "width", component.divSizeJsonTemplateResolver, component.divSizeJsonEntityParser) ?: WIDTH_DEFAULT_VALUE,
            )
        }
    }

    private companion object {

        @JvmField val ALPHA_DEFAULT_VALUE = Expression.constant(1.0)
        @JvmField val HEIGHT_DEFAULT_VALUE = DivSize.WrapContent(DivWrapContentSize())
        @JvmField val IS_ENABLED_DEFAULT_VALUE = Expression.constant(true)
        @JvmField val ITEM_SPACING_DEFAULT_VALUE = Expression.constant(8L)
        @JvmField val ORIENTATION_DEFAULT_VALUE = Expression.constant(DivRadio.Orientation.VERTICAL)
        @JvmField val VISIBILITY_DEFAULT_VALUE = Expression.constant(DivVisibility.VISIBLE)
        @JvmField val WIDTH_DEFAULT_VALUE = DivSize.MatchParent(DivMatchParentSize())

        @JvmField val TYPE_HELPER_ALIGNMENT_HORIZONTAL = TypeHelper.from(default = DivAlignmentHorizontal.values().first()) { it is DivAlignmentHorizontal }
        @JvmField val TYPE_HELPER_ALIGNMENT_VERTICAL = TypeHelper.from(default = DivAlignmentVertical.values().first()) { it is DivAlignmentVertical }
        @JvmField val TYPE_HELPER_FONT_WEIGHT = TypeHelper.from(default = DivFontWeight.values().first()) { it is DivFontWeight }
        @JvmField val TYPE_HELPER_ORIENTATION = TypeHelper.from(default = DivRadio.Orientation.VERTICAL) { it is DivRadio.Orientation }
        @JvmField val TYPE_HELPER_VISIBILITY = TypeHelper.from(default = DivVisibility.VISIBLE) { it is DivVisibility }

        @JvmField val ALPHA_VALIDATOR = ValueValidator<Double> { it: Double -> it >= 0.0 && it <= 1.0 }
        @JvmField val COLUMN_SPAN_VALIDATOR = ValueValidator<Long> { it: Long -> it >= 0 }
        @JvmField val FONT_SIZE_VALIDATOR = ValueValidator<Long> { it: Long -> it >= 0 }
        @JvmField val ITEM_SPACING_VALIDATOR = ValueValidator<Long> { it: Long -> it >= 0 }
        @JvmField val OPTIONS_VALIDATOR = ListValidator<DivRadio.Option> { it: List<*> -> it.size >= 1 }
        @JvmField val ROW_SPAN_VALIDATOR = ValueValidator<Long> { it: Long -> it >= 0 }
        @JvmField val TRANSITION_TRIGGERS_VALIDATOR = ListValidator<DivTransitionTrigger> { it: List<*> -> it.size >= 1 }
    }
}

internal class DivRadioOptionJsonParser(
    private val component: JsonParserComponent
) {

    class EntityParserImpl(
        private val component: JsonParserComponent
    ) : Parser<JSONObject, DivRadio.Option> {

        @Throws(ParsingException::class)
        override fun deserialize(context: ParsingContext, data: JSONObject): DivRadio.Option {
            return DivRadio.Option(
                text = JsonExpressionParser.readOptionalExpression(context, data, "text", TYPE_HELPER_STRING),
                value = JsonExpressionParser.readExpression(context, data, "value", TYPE_HELPER_STRING),
            )
        }

        @Throws(ParsingException::class)
        override fun serialize(context: ParsingContext, value: DivRadio.Option): JSONObject {
            val data = JSONObject()
            JsonExpressionParser.writeExpression(context, data, "text", value.text)
            JsonExpressionParser.writeExpression(context, data, "value", value.value)
            return data
        }
    }

    class TemplateParserImpl(
        private val component: JsonParserComponent
    ) : TemplateParser<JSONObject, DivRadioTemplate.OptionTemplate> {

        @Throws(ParsingException::class)
        override fun deserialize(context: ParsingContext, parent: DivRadioTemplate.OptionTemplate?, data: JSONObject): DivRadioTemplate.OptionTemplate {
            val allowOverride = context.allowPropertyOverride
            @Suppress("NAME_SHADOWING") val context = context.restrictPropertyOverride()
            return DivRadioTemplate.OptionTemplate(
                text = JsonFieldParser.readOptionalFieldWithExpression(context, data, "text", TYPE_HELPER_STRING, allowOverride, parent?.text),
                value = JsonFieldParser.readFieldWithExpression(context, data, "value", TYPE_HELPER_STRING, allowOverride, parent?.value),
            )
        }

        @Throws(ParsingException::class)
        override fun serialize(context: ParsingContext, value: DivRadioTemplate.OptionTemplate): JSONObject {
            val data = JSONObject()
            JsonFieldParser.writeExpressionField(context, data, "text", value.text)
            JsonFieldParser.writeExpressionField(context, data, "value", value.value)
          return data
        }
    }

    class TemplateResolverImpl(
        private val component: JsonParserComponent
    ) : TemplateResolver<JSONObject, DivRadioTemplate.OptionTemplate, DivRadio.Option> {

        @Throws(ParsingException::class)
        override fun resolve(context: ParsingContext, template: DivRadioTemplate.OptionTemplate, data: JSONObject): DivRadio.Option {
            return DivRadio.Option(
                text = JsonFieldResolver.resolveOptionalExpression(context, template.text, data, "text", TYPE_HELPER_STRING),
                value = JsonFieldResolver.resolveExpression(context, template.value, data, "value", TYPE_HELPER_STRING),
            )
        }
    }
}
