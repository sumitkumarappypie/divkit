// Generated code. Do not modify.

import Foundation
import Serialization
import VGSL

public final class DivCounterTemplate: TemplateValue, Sendable {
  public static let type: String = "counter"
  public let parent: String?
  public let accessibility: Field<DivAccessibilityTemplate>?
  public let alignmentHorizontal: Field<Expression<DivAlignmentHorizontal>>?
  public let alignmentVertical: Field<Expression<DivAlignmentVertical>>?
  public let alpha: Field<Expression<Double>>? // constraint: number >= 0.0 && number <= 1.0; default value: 1.0
  public let animators: Field<[DivAnimatorTemplate]>?
  public let background: Field<[DivBackgroundTemplate]>?
  public let backgroundColor: Field<Expression<Color>>? // default value: #F5F5F5
  public let border: Field<DivBorderTemplate>?
  public let borderColor: Field<Expression<Color>>? // default value: #E0E0E0
  public let borderWidth: Field<Expression<Int>>? // constraint: number >= 0; default value: 1
  public let buttonColor: Field<Expression<Color>>? // default value: #4CAF50
  public let buttonSize: Field<Expression<Int>>? // constraint: number >= 0; default value: 48
  public let columnSpan: Field<Expression<Int>>? // constraint: number >= 0
  public let cornerRadius: Field<Expression<Int>>? // constraint: number >= 0; default value: 999
  public let counterValueVariable: Field<String>?
  public let disappearActions: Field<[DivDisappearActionTemplate]>?
  public let disabledButtonColor: Field<Expression<Color>>? // default value: #CCCCCC
  public let extensions: Field<[DivExtensionTemplate]>?
  public let focus: Field<DivFocusTemplate>?
  public let fontSize: Field<Expression<Int>>? // constraint: number >= 0; default value: 24
  public let fontWeight: Field<Expression<DivFontWeight>>? // default value: medium
  public let functions: Field<[DivFunctionTemplate]>?
  public let height: Field<DivSizeTemplate>? // default value: .divWrapContentSize(DivWrapContentSize())
  public let iconColor: Field<Expression<Color>>? // default value: #FFFFFF
  public let id: Field<String>?
  public let isEnabled: Field<Expression<Bool>>? // default value: true
  public let layoutProvider: Field<DivLayoutProviderTemplate>?
  public let margins: Field<DivEdgeInsetsTemplate>?
  public let maxValue: Field<Expression<Int>>? // default value: 99
  public let minValue: Field<Expression<Int>>? // default value: 0
  public let onDecrementActions: Field<[DivActionTemplate]>?
  public let onIncrementActions: Field<[DivActionTemplate]>?
  public let onValueChangeActions: Field<[DivActionTemplate]>?
  public let padding: Field<Expression<Int>>? // constraint: number >= 0; default value: 4
  public let paddings: Field<DivEdgeInsetsTemplate>?
  public let reuseId: Field<Expression<String>>?
  public let rowSpan: Field<Expression<Int>>? // constraint: number >= 0
  public let selectedActions: Field<[DivActionTemplate]>?
  public let step: Field<Expression<Int>>? // constraint: number >= 0; default value: 1
  public let textColor: Field<Expression<Color>>? // default value: #1B2630
  public let tooltips: Field<[DivTooltipTemplate]>?
  public let transform: Field<DivTransformTemplate>?
  public let transformations: Field<[DivTransformationTemplate]>?
  public let transitionChange: Field<DivChangeTransitionTemplate>?
  public let transitionIn: Field<DivAppearanceTransitionTemplate>?
  public let transitionOut: Field<DivAppearanceTransitionTemplate>?
  public let transitionTriggers: Field<[DivTransitionTrigger]>? // at least 1 elements
  public let valueWidth: Field<Expression<Int>>? // constraint: number >= 0; default value: 48
  public let variableTriggers: Field<[DivTriggerTemplate]>?
  public let variables: Field<[DivVariableTemplate]>?
  public let visibility: Field<Expression<DivVisibility>>? // default value: visible
  public let visibilityAction: Field<DivVisibilityActionTemplate>?
  public let visibilityActions: Field<[DivVisibilityActionTemplate]>?
  public let width: Field<DivSizeTemplate>? // default value: .divMatchParentSize(DivMatchParentSize())

  public convenience init(dictionary: [String: Any], templateToType: [TemplateName: String]) throws {
    self.init(
      parent: try dictionary.getOptionalField("type"),
      accessibility: try dictionary.getOptionalField("accessibility", templateToType: templateToType),
      alignmentHorizontal: try dictionary.getOptionalExpressionField("alignment_horizontal"),
      alignmentVertical: try dictionary.getOptionalExpressionField("alignment_vertical"),
      alpha: try dictionary.getOptionalExpressionField("alpha"),
      animators: try dictionary.getOptionalArray("animators", templateToType: templateToType),
      background: try dictionary.getOptionalArray("background", templateToType: templateToType),
      backgroundColor: try dictionary.getOptionalExpressionField("background_color", transform: Color.color(withHexString:)),
      border: try dictionary.getOptionalField("border", templateToType: templateToType),
      borderColor: try dictionary.getOptionalExpressionField("border_color", transform: Color.color(withHexString:)),
      borderWidth: try dictionary.getOptionalExpressionField("border_width"),
      buttonColor: try dictionary.getOptionalExpressionField("button_color", transform: Color.color(withHexString:)),
      buttonSize: try dictionary.getOptionalExpressionField("button_size"),
      columnSpan: try dictionary.getOptionalExpressionField("column_span"),
      cornerRadius: try dictionary.getOptionalExpressionField("corner_radius"),
      counterValueVariable: try dictionary.getOptionalField("counter_value_variable"),
      disappearActions: try dictionary.getOptionalArray("disappear_actions", templateToType: templateToType),
      disabledButtonColor: try dictionary.getOptionalExpressionField("disabled_button_color", transform: Color.color(withHexString:)),
      extensions: try dictionary.getOptionalArray("extensions", templateToType: templateToType),
      focus: try dictionary.getOptionalField("focus", templateToType: templateToType),
      fontSize: try dictionary.getOptionalExpressionField("font_size"),
      fontWeight: try dictionary.getOptionalExpressionField("font_weight"),
      functions: try dictionary.getOptionalArray("functions", templateToType: templateToType),
      height: try dictionary.getOptionalField("height", templateToType: templateToType),
      iconColor: try dictionary.getOptionalExpressionField("icon_color", transform: Color.color(withHexString:)),
      id: try dictionary.getOptionalField("id"),
      isEnabled: try dictionary.getOptionalExpressionField("is_enabled"),
      layoutProvider: try dictionary.getOptionalField("layout_provider", templateToType: templateToType),
      margins: try dictionary.getOptionalField("margins", templateToType: templateToType),
      maxValue: try dictionary.getOptionalExpressionField("max_value"),
      minValue: try dictionary.getOptionalExpressionField("min_value"),
      onDecrementActions: try dictionary.getOptionalArray("on_decrement_actions", templateToType: templateToType),
      onIncrementActions: try dictionary.getOptionalArray("on_increment_actions", templateToType: templateToType),
      onValueChangeActions: try dictionary.getOptionalArray("on_value_change_actions", templateToType: templateToType),
      padding: try dictionary.getOptionalExpressionField("padding"),
      paddings: try dictionary.getOptionalField("paddings", templateToType: templateToType),
      reuseId: try dictionary.getOptionalExpressionField("reuse_id"),
      rowSpan: try dictionary.getOptionalExpressionField("row_span"),
      selectedActions: try dictionary.getOptionalArray("selected_actions", templateToType: templateToType),
      step: try dictionary.getOptionalExpressionField("step"),
      textColor: try dictionary.getOptionalExpressionField("text_color", transform: Color.color(withHexString:)),
      tooltips: try dictionary.getOptionalArray("tooltips", templateToType: templateToType),
      transform: try dictionary.getOptionalField("transform", templateToType: templateToType),
      transformations: try dictionary.getOptionalArray("transformations", templateToType: templateToType),
      transitionChange: try dictionary.getOptionalField("transition_change", templateToType: templateToType),
      transitionIn: try dictionary.getOptionalField("transition_in", templateToType: templateToType),
      transitionOut: try dictionary.getOptionalField("transition_out", templateToType: templateToType),
      transitionTriggers: try dictionary.getOptionalArray("transition_triggers"),
      valueWidth: try dictionary.getOptionalExpressionField("value_width"),
      variableTriggers: try dictionary.getOptionalArray("variable_triggers", templateToType: templateToType),
      variables: try dictionary.getOptionalArray("variables", templateToType: templateToType),
      visibility: try dictionary.getOptionalExpressionField("visibility"),
      visibilityAction: try dictionary.getOptionalField("visibility_action", templateToType: templateToType),
      visibilityActions: try dictionary.getOptionalArray("visibility_actions", templateToType: templateToType),
      width: try dictionary.getOptionalField("width", templateToType: templateToType)
    )
  }

  init(
    parent: String?,
    accessibility: Field<DivAccessibilityTemplate>? = nil,
    alignmentHorizontal: Field<Expression<DivAlignmentHorizontal>>? = nil,
    alignmentVertical: Field<Expression<DivAlignmentVertical>>? = nil,
    alpha: Field<Expression<Double>>? = nil,
    animators: Field<[DivAnimatorTemplate]>? = nil,
    background: Field<[DivBackgroundTemplate]>? = nil,
    backgroundColor: Field<Expression<Color>>? = nil,
    border: Field<DivBorderTemplate>? = nil,
    borderColor: Field<Expression<Color>>? = nil,
    borderWidth: Field<Expression<Int>>? = nil,
    buttonColor: Field<Expression<Color>>? = nil,
    buttonSize: Field<Expression<Int>>? = nil,
    columnSpan: Field<Expression<Int>>? = nil,
    cornerRadius: Field<Expression<Int>>? = nil,
    counterValueVariable: Field<String>? = nil,
    disappearActions: Field<[DivDisappearActionTemplate]>? = nil,
    disabledButtonColor: Field<Expression<Color>>? = nil,
    extensions: Field<[DivExtensionTemplate]>? = nil,
    focus: Field<DivFocusTemplate>? = nil,
    fontSize: Field<Expression<Int>>? = nil,
    fontWeight: Field<Expression<DivFontWeight>>? = nil,
    functions: Field<[DivFunctionTemplate]>? = nil,
    height: Field<DivSizeTemplate>? = nil,
    iconColor: Field<Expression<Color>>? = nil,
    id: Field<String>? = nil,
    isEnabled: Field<Expression<Bool>>? = nil,
    layoutProvider: Field<DivLayoutProviderTemplate>? = nil,
    margins: Field<DivEdgeInsetsTemplate>? = nil,
    maxValue: Field<Expression<Int>>? = nil,
    minValue: Field<Expression<Int>>? = nil,
    onDecrementActions: Field<[DivActionTemplate]>? = nil,
    onIncrementActions: Field<[DivActionTemplate]>? = nil,
    onValueChangeActions: Field<[DivActionTemplate]>? = nil,
    padding: Field<Expression<Int>>? = nil,
    paddings: Field<DivEdgeInsetsTemplate>? = nil,
    reuseId: Field<Expression<String>>? = nil,
    rowSpan: Field<Expression<Int>>? = nil,
    selectedActions: Field<[DivActionTemplate]>? = nil,
    step: Field<Expression<Int>>? = nil,
    textColor: Field<Expression<Color>>? = nil,
    tooltips: Field<[DivTooltipTemplate]>? = nil,
    transform: Field<DivTransformTemplate>? = nil,
    transformations: Field<[DivTransformationTemplate]>? = nil,
    transitionChange: Field<DivChangeTransitionTemplate>? = nil,
    transitionIn: Field<DivAppearanceTransitionTemplate>? = nil,
    transitionOut: Field<DivAppearanceTransitionTemplate>? = nil,
    transitionTriggers: Field<[DivTransitionTrigger]>? = nil,
    valueWidth: Field<Expression<Int>>? = nil,
    variableTriggers: Field<[DivTriggerTemplate]>? = nil,
    variables: Field<[DivVariableTemplate]>? = nil,
    visibility: Field<Expression<DivVisibility>>? = nil,
    visibilityAction: Field<DivVisibilityActionTemplate>? = nil,
    visibilityActions: Field<[DivVisibilityActionTemplate]>? = nil,
    width: Field<DivSizeTemplate>? = nil
  ) {
    self.parent = parent
    self.accessibility = accessibility
    self.alignmentHorizontal = alignmentHorizontal
    self.alignmentVertical = alignmentVertical
    self.alpha = alpha
    self.animators = animators
    self.background = background
    self.backgroundColor = backgroundColor
    self.border = border
    self.borderColor = borderColor
    self.borderWidth = borderWidth
    self.buttonColor = buttonColor
    self.buttonSize = buttonSize
    self.columnSpan = columnSpan
    self.cornerRadius = cornerRadius
    self.counterValueVariable = counterValueVariable
    self.disappearActions = disappearActions
    self.disabledButtonColor = disabledButtonColor
    self.extensions = extensions
    self.focus = focus
    self.fontSize = fontSize
    self.fontWeight = fontWeight
    self.functions = functions
    self.height = height
    self.iconColor = iconColor
    self.id = id
    self.isEnabled = isEnabled
    self.layoutProvider = layoutProvider
    self.margins = margins
    self.maxValue = maxValue
    self.minValue = minValue
    self.onDecrementActions = onDecrementActions
    self.onIncrementActions = onIncrementActions
    self.onValueChangeActions = onValueChangeActions
    self.padding = padding
    self.paddings = paddings
    self.reuseId = reuseId
    self.rowSpan = rowSpan
    self.selectedActions = selectedActions
    self.step = step
    self.textColor = textColor
    self.tooltips = tooltips
    self.transform = transform
    self.transformations = transformations
    self.transitionChange = transitionChange
    self.transitionIn = transitionIn
    self.transitionOut = transitionOut
    self.transitionTriggers = transitionTriggers
    self.valueWidth = valueWidth
    self.variableTriggers = variableTriggers
    self.variables = variables
    self.visibility = visibility
    self.visibilityAction = visibilityAction
    self.visibilityActions = visibilityActions
    self.width = width
  }

  private static let counterValueVariableValidator: AnyValueValidator<String> =
    makeStringValidator(minLength: 1)

  public func resolveParent(templates: [TemplateName: Any]) throws -> DivCounterTemplate {
    let merged = try mergedWithParent(templates: templates)
    return DivCounterTemplate(
      parent: nil,
      accessibility: merged.accessibility,
      alignmentHorizontal: merged.alignmentHorizontal,
      alignmentVertical: merged.alignmentVertical,
      alpha: merged.alpha,
      animators: merged.animators,
      background: merged.background,
      backgroundColor: merged.backgroundColor,
      border: merged.border,
      borderColor: merged.borderColor,
      borderWidth: merged.borderWidth,
      buttonColor: merged.buttonColor,
      buttonSize: merged.buttonSize,
      columnSpan: merged.columnSpan,
      cornerRadius: merged.cornerRadius,
      counterValueVariable: merged.counterValueVariable,
      disappearActions: merged.disappearActions,
      disabledButtonColor: merged.disabledButtonColor,
      extensions: merged.extensions,
      focus: merged.focus,
      fontSize: merged.fontSize,
      fontWeight: merged.fontWeight,
      functions: merged.functions,
      height: merged.height,
      iconColor: merged.iconColor,
      id: merged.id,
      isEnabled: merged.isEnabled,
      layoutProvider: merged.layoutProvider,
      margins: merged.margins,
      maxValue: merged.maxValue,
      minValue: merged.minValue,
      onDecrementActions: merged.onDecrementActions,
      onIncrementActions: merged.onIncrementActions,
      onValueChangeActions: merged.onValueChangeActions,
      padding: merged.padding,
      paddings: merged.paddings,
      reuseId: merged.reuseId,
      rowSpan: merged.rowSpan,
      selectedActions: merged.selectedActions,
      step: merged.step,
      textColor: merged.textColor,
      tooltips: merged.tooltips,
      transform: merged.transform,
      transformations: merged.transformations,
      transitionChange: merged.transitionChange,
      transitionIn: merged.transitionIn,
      transitionOut: merged.transitionOut,
      transitionTriggers: merged.transitionTriggers,
      valueWidth: merged.valueWidth,
      variableTriggers: merged.variableTriggers,
      variables: merged.variables,
      visibility: merged.visibility,
      visibilityAction: merged.visibilityAction,
      visibilityActions: merged.visibilityActions,
      width: merged.width
    )
  }

  public static func resolveValue(context: TemplatesContext, parent: DivCounterTemplate?, useOnlyLinks: Bool) -> DeserializationResult<DivCounter> {
    let merged = parent ?? (try? DivCounterTemplate(dictionary: context.templateData, templateToType: context.templateToType))
    return DivCounter.resolveValue(context: context, template: merged, useOnlyLinks: useOnlyLinks)
  }
}
