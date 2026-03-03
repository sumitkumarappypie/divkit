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
      parent: dictionary["type"] as? String,
      accessibility: dictionary.getOptionalField("accessibility", templateToType: templateToType),
      alignmentHorizontal: dictionary.getOptionalExpressionField("alignment_horizontal"),
      alignmentVertical: dictionary.getOptionalExpressionField("alignment_vertical"),
      alpha: dictionary.getOptionalExpressionField("alpha"),
      animators: dictionary.getOptionalArray("animators", templateToType: templateToType),
      background: dictionary.getOptionalArray("background", templateToType: templateToType),
      backgroundColor: dictionary.getOptionalExpressionField("background_color", transform: Color.color(withHexString:)),
      border: dictionary.getOptionalField("border", templateToType: templateToType),
      borderColor: dictionary.getOptionalExpressionField("border_color", transform: Color.color(withHexString:)),
      borderWidth: dictionary.getOptionalExpressionField("border_width"),
      buttonColor: dictionary.getOptionalExpressionField("button_color", transform: Color.color(withHexString:)),
      buttonSize: dictionary.getOptionalExpressionField("button_size"),
      columnSpan: dictionary.getOptionalExpressionField("column_span"),
      cornerRadius: dictionary.getOptionalExpressionField("corner_radius"),
      counterValueVariable: dictionary.getOptionalField("counter_value_variable"),
      disappearActions: dictionary.getOptionalArray("disappear_actions", templateToType: templateToType),
      disabledButtonColor: dictionary.getOptionalExpressionField("disabled_button_color", transform: Color.color(withHexString:)),
      extensions: dictionary.getOptionalArray("extensions", templateToType: templateToType),
      focus: dictionary.getOptionalField("focus", templateToType: templateToType),
      fontSize: dictionary.getOptionalExpressionField("font_size"),
      fontWeight: dictionary.getOptionalExpressionField("font_weight"),
      functions: dictionary.getOptionalArray("functions", templateToType: templateToType),
      height: dictionary.getOptionalField("height", templateToType: templateToType),
      iconColor: dictionary.getOptionalExpressionField("icon_color", transform: Color.color(withHexString:)),
      id: dictionary.getOptionalField("id"),
      isEnabled: dictionary.getOptionalExpressionField("is_enabled"),
      layoutProvider: dictionary.getOptionalField("layout_provider", templateToType: templateToType),
      margins: dictionary.getOptionalField("margins", templateToType: templateToType),
      maxValue: dictionary.getOptionalExpressionField("max_value"),
      minValue: dictionary.getOptionalExpressionField("min_value"),
      onDecrementActions: dictionary.getOptionalArray("on_decrement_actions", templateToType: templateToType),
      onIncrementActions: dictionary.getOptionalArray("on_increment_actions", templateToType: templateToType),
      onValueChangeActions: dictionary.getOptionalArray("on_value_change_actions", templateToType: templateToType),
      padding: dictionary.getOptionalExpressionField("padding"),
      paddings: dictionary.getOptionalField("paddings", templateToType: templateToType),
      reuseId: dictionary.getOptionalExpressionField("reuse_id"),
      rowSpan: dictionary.getOptionalExpressionField("row_span"),
      selectedActions: dictionary.getOptionalArray("selected_actions", templateToType: templateToType),
      step: dictionary.getOptionalExpressionField("step"),
      textColor: dictionary.getOptionalExpressionField("text_color", transform: Color.color(withHexString:)),
      tooltips: dictionary.getOptionalArray("tooltips", templateToType: templateToType),
      transform: dictionary.getOptionalField("transform", templateToType: templateToType),
      transformations: dictionary.getOptionalArray("transformations", templateToType: templateToType),
      transitionChange: dictionary.getOptionalField("transition_change", templateToType: templateToType),
      transitionIn: dictionary.getOptionalField("transition_in", templateToType: templateToType),
      transitionOut: dictionary.getOptionalField("transition_out", templateToType: templateToType),
      transitionTriggers: dictionary.getOptionalArray("transition_triggers"),
      valueWidth: dictionary.getOptionalExpressionField("value_width"),
      variableTriggers: dictionary.getOptionalArray("variable_triggers", templateToType: templateToType),
      variables: dictionary.getOptionalArray("variables", templateToType: templateToType),
      visibility: dictionary.getOptionalExpressionField("visibility"),
      visibilityAction: dictionary.getOptionalField("visibility_action", templateToType: templateToType),
      visibilityActions: dictionary.getOptionalArray("visibility_actions", templateToType: templateToType),
      width: dictionary.getOptionalField("width", templateToType: templateToType)
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

  private static func resolveOnlyLinks(context: TemplatesContext, parent: DivCounterTemplate?) -> DeserializationResult<DivCounter> {
    let accessibilityValue = parent?.accessibility?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let alignmentHorizontalValue = parent?.alignmentHorizontal?.resolveOptionalValue(context: context) ?? .noValue
    let alignmentVerticalValue = parent?.alignmentVertical?.resolveOptionalValue(context: context) ?? .noValue
    let alphaValue = parent?.alpha?.resolveOptionalValue(context: context, validator: ResolvedValue.alphaValidator) ?? .noValue
    let animatorsValue = parent?.animators?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let backgroundValue = parent?.background?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let backgroundColorValue = parent?.backgroundColor?.resolveOptionalValue(context: context, transform: Color.color(withHexString:)) ?? .noValue
    let borderValue = parent?.border?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let borderColorValue = parent?.borderColor?.resolveOptionalValue(context: context, transform: Color.color(withHexString:)) ?? .noValue
    let borderWidthValue = parent?.borderWidth?.resolveOptionalValue(context: context, validator: ResolvedValue.borderWidthValidator) ?? .noValue
    let buttonColorValue = parent?.buttonColor?.resolveOptionalValue(context: context, transform: Color.color(withHexString:)) ?? .noValue
    let buttonSizeValue = parent?.buttonSize?.resolveOptionalValue(context: context, validator: ResolvedValue.buttonSizeValidator) ?? .noValue
    let columnSpanValue = parent?.columnSpan?.resolveOptionalValue(context: context, validator: ResolvedValue.columnSpanValidator) ?? .noValue
    let cornerRadiusValue = parent?.cornerRadius?.resolveOptionalValue(context: context, validator: ResolvedValue.cornerRadiusValidator) ?? .noValue
    let counterValueVariableValue = parent?.counterValueVariable?.resolveValue(context: context) ?? .noValue
    let disappearActionsValue = parent?.disappearActions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let disabledButtonColorValue = parent?.disabledButtonColor?.resolveOptionalValue(context: context, transform: Color.color(withHexString:)) ?? .noValue
    let extensionsValue = parent?.extensions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let focusValue = parent?.focus?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let fontSizeValue = parent?.fontSize?.resolveOptionalValue(context: context, validator: ResolvedValue.fontSizeValidator) ?? .noValue
    let fontWeightValue = parent?.fontWeight?.resolveOptionalValue(context: context) ?? .noValue
    let functionsValue = parent?.functions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let heightValue = parent?.height?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let iconColorValue = parent?.iconColor?.resolveOptionalValue(context: context, transform: Color.color(withHexString:)) ?? .noValue
    let idValue = parent?.id?.resolveOptionalValue(context: context) ?? .noValue
    let isEnabledValue = parent?.isEnabled?.resolveOptionalValue(context: context) ?? .noValue
    let layoutProviderValue = parent?.layoutProvider?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let marginsValue = parent?.margins?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let maxValueValue = parent?.maxValue?.resolveOptionalValue(context: context) ?? .noValue
    let minValueValue = parent?.minValue?.resolveOptionalValue(context: context) ?? .noValue
    let onDecrementActionsValue = parent?.onDecrementActions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let onIncrementActionsValue = parent?.onIncrementActions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let onValueChangeActionsValue = parent?.onValueChangeActions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let paddingValue = parent?.padding?.resolveOptionalValue(context: context, validator: ResolvedValue.paddingValidator) ?? .noValue
    let paddingsValue = parent?.paddings?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let reuseIdValue = parent?.reuseId?.resolveOptionalValue(context: context) ?? .noValue
    let rowSpanValue = parent?.rowSpan?.resolveOptionalValue(context: context, validator: ResolvedValue.rowSpanValidator) ?? .noValue
    let selectedActionsValue = parent?.selectedActions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let stepValue = parent?.step?.resolveOptionalValue(context: context, validator: ResolvedValue.stepValidator) ?? .noValue
    let textColorValue = parent?.textColor?.resolveOptionalValue(context: context, transform: Color.color(withHexString:)) ?? .noValue
    let tooltipsValue = parent?.tooltips?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let transformValue = parent?.transform?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let transformationsValue = parent?.transformations?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let transitionChangeValue = parent?.transitionChange?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let transitionInValue = parent?.transitionIn?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let transitionOutValue = parent?.transitionOut?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let transitionTriggersValue = parent?.transitionTriggers?.resolveOptionalValue(context: context, validator: ResolvedValue.transitionTriggersValidator) ?? .noValue
    let valueWidthValue = parent?.valueWidth?.resolveOptionalValue(context: context, validator: ResolvedValue.valueWidthValidator) ?? .noValue
    let variableTriggersValue = parent?.variableTriggers?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let variablesValue = parent?.variables?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let visibilityValue = parent?.visibility?.resolveOptionalValue(context: context) ?? .noValue
    let visibilityActionValue = parent?.visibilityAction?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let visibilityActionsValue = parent?.visibilityActions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let widthValue = parent?.width?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    var errors = mergeErrors(
      accessibilityValue.errorsOrWarnings?.map { .nestedObjectError(field: "accessibility", error: $0) },
      alignmentHorizontalValue.errorsOrWarnings?.map { .nestedObjectError(field: "alignment_horizontal", error: $0) },
      alignmentVerticalValue.errorsOrWarnings?.map { .nestedObjectError(field: "alignment_vertical", error: $0) },
      alphaValue.errorsOrWarnings?.map { .nestedObjectError(field: "alpha", error: $0) },
      animatorsValue.errorsOrWarnings?.map { .nestedObjectError(field: "animators", error: $0) },
      backgroundValue.errorsOrWarnings?.map { .nestedObjectError(field: "background", error: $0) },
      backgroundColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "background_color", error: $0) },
      borderValue.errorsOrWarnings?.map { .nestedObjectError(field: "border", error: $0) },
      borderColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "border_color", error: $0) },
      borderWidthValue.errorsOrWarnings?.map { .nestedObjectError(field: "border_width", error: $0) },
      buttonColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "button_color", error: $0) },
      buttonSizeValue.errorsOrWarnings?.map { .nestedObjectError(field: "button_size", error: $0) },
      columnSpanValue.errorsOrWarnings?.map { .nestedObjectError(field: "column_span", error: $0) },
      cornerRadiusValue.errorsOrWarnings?.map { .nestedObjectError(field: "corner_radius", error: $0) },
      counterValueVariableValue.errorsOrWarnings?.map { .nestedObjectError(field: "counter_value_variable", error: $0) },
      disappearActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "disappear_actions", error: $0) },
      disabledButtonColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "disabled_button_color", error: $0) },
      extensionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "extensions", error: $0) },
      focusValue.errorsOrWarnings?.map { .nestedObjectError(field: "focus", error: $0) },
      fontSizeValue.errorsOrWarnings?.map { .nestedObjectError(field: "font_size", error: $0) },
      fontWeightValue.errorsOrWarnings?.map { .nestedObjectError(field: "font_weight", error: $0) },
      functionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "functions", error: $0) },
      heightValue.errorsOrWarnings?.map { .nestedObjectError(field: "height", error: $0) },
      iconColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "icon_color", error: $0) },
      idValue.errorsOrWarnings?.map { .nestedObjectError(field: "id", error: $0) },
      isEnabledValue.errorsOrWarnings?.map { .nestedObjectError(field: "is_enabled", error: $0) },
      layoutProviderValue.errorsOrWarnings?.map { .nestedObjectError(field: "layout_provider", error: $0) },
      marginsValue.errorsOrWarnings?.map { .nestedObjectError(field: "margins", error: $0) },
      maxValueValue.errorsOrWarnings?.map { .nestedObjectError(field: "max_value", error: $0) },
      minValueValue.errorsOrWarnings?.map { .nestedObjectError(field: "min_value", error: $0) },
      onDecrementActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "on_decrement_actions", error: $0) },
      onIncrementActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "on_increment_actions", error: $0) },
      onValueChangeActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "on_value_change_actions", error: $0) },
      paddingValue.errorsOrWarnings?.map { .nestedObjectError(field: "padding", error: $0) },
      paddingsValue.errorsOrWarnings?.map { .nestedObjectError(field: "paddings", error: $0) },
      reuseIdValue.errorsOrWarnings?.map { .nestedObjectError(field: "reuse_id", error: $0) },
      rowSpanValue.errorsOrWarnings?.map { .nestedObjectError(field: "row_span", error: $0) },
      selectedActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "selected_actions", error: $0) },
      stepValue.errorsOrWarnings?.map { .nestedObjectError(field: "step", error: $0) },
      textColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "text_color", error: $0) },
      tooltipsValue.errorsOrWarnings?.map { .nestedObjectError(field: "tooltips", error: $0) },
      transformValue.errorsOrWarnings?.map { .nestedObjectError(field: "transform", error: $0) },
      transformationsValue.errorsOrWarnings?.map { .nestedObjectError(field: "transformations", error: $0) },
      transitionChangeValue.errorsOrWarnings?.map { .nestedObjectError(field: "transition_change", error: $0) },
      transitionInValue.errorsOrWarnings?.map { .nestedObjectError(field: "transition_in", error: $0) },
      transitionOutValue.errorsOrWarnings?.map { .nestedObjectError(field: "transition_out", error: $0) },
      transitionTriggersValue.errorsOrWarnings?.map { .nestedObjectError(field: "transition_triggers", error: $0) },
      valueWidthValue.errorsOrWarnings?.map { .nestedObjectError(field: "value_width", error: $0) },
      variableTriggersValue.errorsOrWarnings?.map { .nestedObjectError(field: "variable_triggers", error: $0) },
      variablesValue.errorsOrWarnings?.map { .nestedObjectError(field: "variables", error: $0) },
      visibilityValue.errorsOrWarnings?.map { .nestedObjectError(field: "visibility", error: $0) },
      visibilityActionValue.errorsOrWarnings?.map { .nestedObjectError(field: "visibility_action", error: $0) },
      visibilityActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "visibility_actions", error: $0) },
      widthValue.errorsOrWarnings?.map { .nestedObjectError(field: "width", error: $0) }
    )
    if case .noValue = counterValueVariableValue {
      errors.append(.requiredFieldIsMissing(field: "counter_value_variable"))
    }
    guard
      let counterValueVariableNonNil = counterValueVariableValue.value
    else {
      return .failure(NonEmptyArray(errors)!)
    }
    let result = DivCounter(
      accessibility: accessibilityValue.value,
      alignmentHorizontal: alignmentHorizontalValue.value,
      alignmentVertical: alignmentVerticalValue.value,
      alpha: alphaValue.value,
      animators: animatorsValue.value,
      background: backgroundValue.value,
      backgroundColor: backgroundColorValue.value,
      border: borderValue.value,
      borderColor: borderColorValue.value,
      borderWidth: borderWidthValue.value,
      buttonColor: buttonColorValue.value,
      buttonSize: buttonSizeValue.value,
      columnSpan: columnSpanValue.value,
      cornerRadius: cornerRadiusValue.value,
      counterValueVariable: counterValueVariableNonNil,
      disappearActions: disappearActionsValue.value,
      disabledButtonColor: disabledButtonColorValue.value,
      extensions: extensionsValue.value,
      focus: focusValue.value,
      fontSize: fontSizeValue.value,
      fontWeight: fontWeightValue.value,
      functions: functionsValue.value,
      height: heightValue.value,
      iconColor: iconColorValue.value,
      id: idValue.value,
      isEnabled: isEnabledValue.value,
      layoutProvider: layoutProviderValue.value,
      margins: marginsValue.value,
      maxValue: maxValueValue.value,
      minValue: minValueValue.value,
      onDecrementActions: onDecrementActionsValue.value,
      onIncrementActions: onIncrementActionsValue.value,
      onValueChangeActions: onValueChangeActionsValue.value,
      padding: paddingValue.value,
      paddings: paddingsValue.value,
      reuseId: reuseIdValue.value,
      rowSpan: rowSpanValue.value,
      selectedActions: selectedActionsValue.value,
      step: stepValue.value,
      textColor: textColorValue.value,
      tooltips: tooltipsValue.value,
      transform: transformValue.value,
      transformations: transformationsValue.value,
      transitionChange: transitionChangeValue.value,
      transitionIn: transitionInValue.value,
      transitionOut: transitionOutValue.value,
      transitionTriggers: transitionTriggersValue.value,
      valueWidth: valueWidthValue.value,
      variableTriggers: variableTriggersValue.value,
      variables: variablesValue.value,
      visibility: visibilityValue.value,
      visibilityAction: visibilityActionValue.value,
      visibilityActions: visibilityActionsValue.value,
      width: widthValue.value
    )
    return errors.isEmpty ? .success(result) : .partialSuccess(result, warnings: NonEmptyArray(errors)!)
  }

  public static func resolveValue(context: TemplatesContext, parent: DivCounterTemplate?, useOnlyLinks: Bool) -> DeserializationResult<DivCounter> {
    if useOnlyLinks {
      return resolveOnlyLinks(context: context, parent: parent)
    }
    var accessibilityValue: DeserializationResult<DivAccessibility> = .noValue
    var alignmentHorizontalValue: DeserializationResult<Expression<DivAlignmentHorizontal>> = parent?.alignmentHorizontal?.value() ?? .noValue
    var alignmentVerticalValue: DeserializationResult<Expression<DivAlignmentVertical>> = parent?.alignmentVertical?.value() ?? .noValue
    var alphaValue: DeserializationResult<Expression<Double>> = parent?.alpha?.value() ?? .noValue
    var animatorsValue: DeserializationResult<[DivAnimator]> = .noValue
    var backgroundValue: DeserializationResult<[DivBackground]> = .noValue
    var backgroundColorValue: DeserializationResult<Expression<Color>> = parent?.backgroundColor?.value() ?? .noValue
    var borderValue: DeserializationResult<DivBorder> = .noValue
    var borderColorValue: DeserializationResult<Expression<Color>> = parent?.borderColor?.value() ?? .noValue
    var borderWidthValue: DeserializationResult<Expression<Int>> = parent?.borderWidth?.value() ?? .noValue
    var buttonColorValue: DeserializationResult<Expression<Color>> = parent?.buttonColor?.value() ?? .noValue
    var buttonSizeValue: DeserializationResult<Expression<Int>> = parent?.buttonSize?.value() ?? .noValue
    var columnSpanValue: DeserializationResult<Expression<Int>> = parent?.columnSpan?.value() ?? .noValue
    var cornerRadiusValue: DeserializationResult<Expression<Int>> = parent?.cornerRadius?.value() ?? .noValue
    var counterValueVariableValue: DeserializationResult<String> = parent?.counterValueVariable?.value() ?? .noValue
    var disappearActionsValue: DeserializationResult<[DivDisappearAction]> = .noValue
    var disabledButtonColorValue: DeserializationResult<Expression<Color>> = parent?.disabledButtonColor?.value() ?? .noValue
    var extensionsValue: DeserializationResult<[DivExtension]> = .noValue
    var focusValue: DeserializationResult<DivFocus> = .noValue
    var fontSizeValue: DeserializationResult<Expression<Int>> = parent?.fontSize?.value() ?? .noValue
    var fontWeightValue: DeserializationResult<Expression<DivFontWeight>> = parent?.fontWeight?.value() ?? .noValue
    var functionsValue: DeserializationResult<[DivFunction]> = .noValue
    var heightValue: DeserializationResult<DivSize> = .noValue
    var iconColorValue: DeserializationResult<Expression<Color>> = parent?.iconColor?.value() ?? .noValue
    var idValue: DeserializationResult<String> = parent?.id?.value() ?? .noValue
    var isEnabledValue: DeserializationResult<Expression<Bool>> = parent?.isEnabled?.value() ?? .noValue
    var layoutProviderValue: DeserializationResult<DivLayoutProvider> = .noValue
    var marginsValue: DeserializationResult<DivEdgeInsets> = .noValue
    var maxValueValue: DeserializationResult<Expression<Int>> = parent?.maxValue?.value() ?? .noValue
    var minValueValue: DeserializationResult<Expression<Int>> = parent?.minValue?.value() ?? .noValue
    var onDecrementActionsValue: DeserializationResult<[DivAction]> = .noValue
    var onIncrementActionsValue: DeserializationResult<[DivAction]> = .noValue
    var onValueChangeActionsValue: DeserializationResult<[DivAction]> = .noValue
    var paddingValue: DeserializationResult<Expression<Int>> = parent?.padding?.value() ?? .noValue
    var paddingsValue: DeserializationResult<DivEdgeInsets> = .noValue
    var reuseIdValue: DeserializationResult<Expression<String>> = parent?.reuseId?.value() ?? .noValue
    var rowSpanValue: DeserializationResult<Expression<Int>> = parent?.rowSpan?.value() ?? .noValue
    var selectedActionsValue: DeserializationResult<[DivAction]> = .noValue
    var stepValue: DeserializationResult<Expression<Int>> = parent?.step?.value() ?? .noValue
    var textColorValue: DeserializationResult<Expression<Color>> = parent?.textColor?.value() ?? .noValue
    var tooltipsValue: DeserializationResult<[DivTooltip]> = .noValue
    var transformValue: DeserializationResult<DivTransform> = .noValue
    var transformationsValue: DeserializationResult<[DivTransformation]> = .noValue
    var transitionChangeValue: DeserializationResult<DivChangeTransition> = .noValue
    var transitionInValue: DeserializationResult<DivAppearanceTransition> = .noValue
    var transitionOutValue: DeserializationResult<DivAppearanceTransition> = .noValue
    var transitionTriggersValue: DeserializationResult<[DivTransitionTrigger]> = parent?.transitionTriggers?.value(validatedBy: ResolvedValue.transitionTriggersValidator) ?? .noValue
    var valueWidthValue: DeserializationResult<Expression<Int>> = parent?.valueWidth?.value() ?? .noValue
    var variableTriggersValue: DeserializationResult<[DivTrigger]> = .noValue
    var variablesValue: DeserializationResult<[DivVariable]> = .noValue
    var visibilityValue: DeserializationResult<Expression<DivVisibility>> = parent?.visibility?.value() ?? .noValue
    var visibilityActionValue: DeserializationResult<DivVisibilityAction> = .noValue
    var visibilityActionsValue: DeserializationResult<[DivVisibilityAction]> = .noValue
    var widthValue: DeserializationResult<DivSize> = .noValue
    context.templateData.forEach { key, __dictValue in
      switch key {
      case "accessibility":
        accessibilityValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivAccessibilityTemplate.self).merged(with: accessibilityValue)
      case "alignment_horizontal":
        alignmentHorizontalValue = deserialize(__dictValue).merged(with: alignmentHorizontalValue)
      case "alignment_vertical":
        alignmentVerticalValue = deserialize(__dictValue).merged(with: alignmentVerticalValue)
      case "alpha":
        alphaValue = deserialize(__dictValue, validator: ResolvedValue.alphaValidator).merged(with: alphaValue)
      case "animators":
        animatorsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivAnimatorTemplate.self).merged(with: animatorsValue)
      case "background":
        backgroundValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivBackgroundTemplate.self).merged(with: backgroundValue)
      case "background_color":
        backgroundColorValue = deserialize(__dictValue, transform: Color.color(withHexString:)).merged(with: backgroundColorValue)
      case "border":
        borderValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivBorderTemplate.self).merged(with: borderValue)
      case "border_color":
        borderColorValue = deserialize(__dictValue, transform: Color.color(withHexString:)).merged(with: borderColorValue)
      case "border_width":
        borderWidthValue = deserialize(__dictValue, validator: ResolvedValue.borderWidthValidator).merged(with: borderWidthValue)
      case "button_color":
        buttonColorValue = deserialize(__dictValue, transform: Color.color(withHexString:)).merged(with: buttonColorValue)
      case "button_size":
        buttonSizeValue = deserialize(__dictValue, validator: ResolvedValue.buttonSizeValidator).merged(with: buttonSizeValue)
      case "column_span":
        columnSpanValue = deserialize(__dictValue, validator: ResolvedValue.columnSpanValidator).merged(with: columnSpanValue)
      case "corner_radius":
        cornerRadiusValue = deserialize(__dictValue, validator: ResolvedValue.cornerRadiusValidator).merged(with: cornerRadiusValue)
      case "counter_value_variable":
        counterValueVariableValue = deserialize(__dictValue).merged(with: counterValueVariableValue)
      case "disappear_actions":
        disappearActionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivDisappearActionTemplate.self).merged(with: disappearActionsValue)
      case "disabled_button_color":
        disabledButtonColorValue = deserialize(__dictValue, transform: Color.color(withHexString:)).merged(with: disabledButtonColorValue)
      case "extensions":
        extensionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivExtensionTemplate.self).merged(with: extensionsValue)
      case "focus":
        focusValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivFocusTemplate.self).merged(with: focusValue)
      case "font_size":
        fontSizeValue = deserialize(__dictValue, validator: ResolvedValue.fontSizeValidator).merged(with: fontSizeValue)
      case "font_weight":
        fontWeightValue = deserialize(__dictValue).merged(with: fontWeightValue)
      case "functions":
        functionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivFunctionTemplate.self).merged(with: functionsValue)
      case "height":
        heightValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivSizeTemplate.self).merged(with: heightValue)
      case "icon_color":
        iconColorValue = deserialize(__dictValue, transform: Color.color(withHexString:)).merged(with: iconColorValue)
      case "id":
        idValue = deserialize(__dictValue).merged(with: idValue)
      case "is_enabled":
        isEnabledValue = deserialize(__dictValue).merged(with: isEnabledValue)
      case "layout_provider":
        layoutProviderValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivLayoutProviderTemplate.self).merged(with: layoutProviderValue)
      case "margins":
        marginsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivEdgeInsetsTemplate.self).merged(with: marginsValue)
      case "max_value":
        maxValueValue = deserialize(__dictValue).merged(with: maxValueValue)
      case "min_value":
        minValueValue = deserialize(__dictValue).merged(with: minValueValue)
      case "on_decrement_actions":
        onDecrementActionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self).merged(with: onDecrementActionsValue)
      case "on_increment_actions":
        onIncrementActionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self).merged(with: onIncrementActionsValue)
      case "on_value_change_actions":
        onValueChangeActionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self).merged(with: onValueChangeActionsValue)
      case "padding":
        paddingValue = deserialize(__dictValue, validator: ResolvedValue.paddingValidator).merged(with: paddingValue)
      case "paddings":
        paddingsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivEdgeInsetsTemplate.self).merged(with: paddingsValue)
      case "reuse_id":
        reuseIdValue = deserialize(__dictValue).merged(with: reuseIdValue)
      case "row_span":
        rowSpanValue = deserialize(__dictValue, validator: ResolvedValue.rowSpanValidator).merged(with: rowSpanValue)
      case "selected_actions":
        selectedActionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self).merged(with: selectedActionsValue)
      case "step":
        stepValue = deserialize(__dictValue, validator: ResolvedValue.stepValidator).merged(with: stepValue)
      case "text_color":
        textColorValue = deserialize(__dictValue, transform: Color.color(withHexString:)).merged(with: textColorValue)
      case "tooltips":
        tooltipsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTooltipTemplate.self).merged(with: tooltipsValue)
      case "transform":
        transformValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTransformTemplate.self).merged(with: transformValue)
      case "transformations":
        transformationsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTransformationTemplate.self).merged(with: transformationsValue)
      case "transition_change":
        transitionChangeValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivChangeTransitionTemplate.self).merged(with: transitionChangeValue)
      case "transition_in":
        transitionInValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivAppearanceTransitionTemplate.self).merged(with: transitionInValue)
      case "transition_out":
        transitionOutValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivAppearanceTransitionTemplate.self).merged(with: transitionOutValue)
      case "transition_triggers":
        transitionTriggersValue = deserialize(__dictValue, validator: ResolvedValue.transitionTriggersValidator).merged(with: transitionTriggersValue)
      case "value_width":
        valueWidthValue = deserialize(__dictValue, validator: ResolvedValue.valueWidthValidator).merged(with: valueWidthValue)
      case "variable_triggers":
        variableTriggersValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTriggerTemplate.self).merged(with: variableTriggersValue)
      case "variables":
        variablesValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivVariableTemplate.self).merged(with: variablesValue)
      case "visibility":
        visibilityValue = deserialize(__dictValue).merged(with: visibilityValue)
      case "visibility_action":
        visibilityActionValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivVisibilityActionTemplate.self).merged(with: visibilityActionValue)
      case "visibility_actions":
        visibilityActionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivVisibilityActionTemplate.self).merged(with: visibilityActionsValue)
      case "width":
        widthValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivSizeTemplate.self).merged(with: widthValue)
      case parent?.accessibility?.link:
        accessibilityValue = accessibilityValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivAccessibilityTemplate.self) })
      case parent?.alignmentHorizontal?.link:
        alignmentHorizontalValue = alignmentHorizontalValue.merged(with: { deserialize(__dictValue) })
      case parent?.alignmentVertical?.link:
        alignmentVerticalValue = alignmentVerticalValue.merged(with: { deserialize(__dictValue) })
      case parent?.alpha?.link:
        alphaValue = alphaValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.alphaValidator) })
      case parent?.animators?.link:
        animatorsValue = animatorsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivAnimatorTemplate.self) })
      case parent?.background?.link:
        backgroundValue = backgroundValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivBackgroundTemplate.self) })
      case parent?.backgroundColor?.link:
        backgroundColorValue = backgroundColorValue.merged(with: { deserialize(__dictValue, transform: Color.color(withHexString:)) })
      case parent?.border?.link:
        borderValue = borderValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivBorderTemplate.self) })
      case parent?.borderColor?.link:
        borderColorValue = borderColorValue.merged(with: { deserialize(__dictValue, transform: Color.color(withHexString:)) })
      case parent?.borderWidth?.link:
        borderWidthValue = borderWidthValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.borderWidthValidator) })
      case parent?.buttonColor?.link:
        buttonColorValue = buttonColorValue.merged(with: { deserialize(__dictValue, transform: Color.color(withHexString:)) })
      case parent?.buttonSize?.link:
        buttonSizeValue = buttonSizeValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.buttonSizeValidator) })
      case parent?.columnSpan?.link:
        columnSpanValue = columnSpanValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.columnSpanValidator) })
      case parent?.cornerRadius?.link:
        cornerRadiusValue = cornerRadiusValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.cornerRadiusValidator) })
      case parent?.counterValueVariable?.link:
        counterValueVariableValue = counterValueVariableValue.merged(with: { deserialize(__dictValue) })
      case parent?.disappearActions?.link:
        disappearActionsValue = disappearActionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivDisappearActionTemplate.self) })
      case parent?.disabledButtonColor?.link:
        disabledButtonColorValue = disabledButtonColorValue.merged(with: { deserialize(__dictValue, transform: Color.color(withHexString:)) })
      case parent?.extensions?.link:
        extensionsValue = extensionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivExtensionTemplate.self) })
      case parent?.focus?.link:
        focusValue = focusValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivFocusTemplate.self) })
      case parent?.fontSize?.link:
        fontSizeValue = fontSizeValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.fontSizeValidator) })
      case parent?.fontWeight?.link:
        fontWeightValue = fontWeightValue.merged(with: { deserialize(__dictValue) })
      case parent?.functions?.link:
        functionsValue = functionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivFunctionTemplate.self) })
      case parent?.height?.link:
        heightValue = heightValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivSizeTemplate.self) })
      case parent?.iconColor?.link:
        iconColorValue = iconColorValue.merged(with: { deserialize(__dictValue, transform: Color.color(withHexString:)) })
      case parent?.id?.link:
        idValue = idValue.merged(with: { deserialize(__dictValue) })
      case parent?.isEnabled?.link:
        isEnabledValue = isEnabledValue.merged(with: { deserialize(__dictValue) })
      case parent?.layoutProvider?.link:
        layoutProviderValue = layoutProviderValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivLayoutProviderTemplate.self) })
      case parent?.margins?.link:
        marginsValue = marginsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivEdgeInsetsTemplate.self) })
      case parent?.maxValue?.link:
        maxValueValue = maxValueValue.merged(with: { deserialize(__dictValue) })
      case parent?.minValue?.link:
        minValueValue = minValueValue.merged(with: { deserialize(__dictValue) })
      case parent?.onDecrementActions?.link:
        onDecrementActionsValue = onDecrementActionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self) })
      case parent?.onIncrementActions?.link:
        onIncrementActionsValue = onIncrementActionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self) })
      case parent?.onValueChangeActions?.link:
        onValueChangeActionsValue = onValueChangeActionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self) })
      case parent?.padding?.link:
        paddingValue = paddingValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.paddingValidator) })
      case parent?.paddings?.link:
        paddingsValue = paddingsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivEdgeInsetsTemplate.self) })
      case parent?.reuseId?.link:
        reuseIdValue = reuseIdValue.merged(with: { deserialize(__dictValue) })
      case parent?.rowSpan?.link:
        rowSpanValue = rowSpanValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.rowSpanValidator) })
      case parent?.selectedActions?.link:
        selectedActionsValue = selectedActionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self) })
      case parent?.step?.link:
        stepValue = stepValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.stepValidator) })
      case parent?.textColor?.link:
        textColorValue = textColorValue.merged(with: { deserialize(__dictValue, transform: Color.color(withHexString:)) })
      case parent?.tooltips?.link:
        tooltipsValue = tooltipsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTooltipTemplate.self) })
      case parent?.transform?.link:
        transformValue = transformValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTransformTemplate.self) })
      case parent?.transformations?.link:
        transformationsValue = transformationsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTransformationTemplate.self) })
      case parent?.transitionChange?.link:
        transitionChangeValue = transitionChangeValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivChangeTransitionTemplate.self) })
      case parent?.transitionIn?.link:
        transitionInValue = transitionInValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivAppearanceTransitionTemplate.self) })
      case parent?.transitionOut?.link:
        transitionOutValue = transitionOutValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivAppearanceTransitionTemplate.self) })
      case parent?.transitionTriggers?.link:
        transitionTriggersValue = transitionTriggersValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.transitionTriggersValidator) })
      case parent?.valueWidth?.link:
        valueWidthValue = valueWidthValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.valueWidthValidator) })
      case parent?.variableTriggers?.link:
        variableTriggersValue = variableTriggersValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTriggerTemplate.self) })
      case parent?.variables?.link:
        variablesValue = variablesValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivVariableTemplate.self) })
      case parent?.visibility?.link:
        visibilityValue = visibilityValue.merged(with: { deserialize(__dictValue) })
      case parent?.visibilityAction?.link:
        visibilityActionValue = visibilityActionValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivVisibilityActionTemplate.self) })
      case parent?.visibilityActions?.link:
        visibilityActionsValue = visibilityActionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivVisibilityActionTemplate.self) })
      case parent?.width?.link:
        widthValue = widthValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivSizeTemplate.self) })
      default: break
      }
    }
    if let parent = parent {
      _ = accessibilityValue = accessibilityValue.merged(with: { parent.accessibility?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = animatorsValue = animatorsValue.merged(with: { parent.animators?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = backgroundValue = backgroundValue.merged(with: { parent.background?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = borderValue = borderValue.merged(with: { parent.border?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = disappearActionsValue = disappearActionsValue.merged(with: { parent.disappearActions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = extensionsValue = extensionsValue.merged(with: { parent.extensions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = focusValue = focusValue.merged(with: { parent.focus?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = functionsValue = functionsValue.merged(with: { parent.functions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = heightValue = heightValue.merged(with: { parent.height?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = layoutProviderValue = layoutProviderValue.merged(with: { parent.layoutProvider?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = marginsValue = marginsValue.merged(with: { parent.margins?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = onDecrementActionsValue = onDecrementActionsValue.merged(with: { parent.onDecrementActions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = onIncrementActionsValue = onIncrementActionsValue.merged(with: { parent.onIncrementActions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = onValueChangeActionsValue = onValueChangeActionsValue.merged(with: { parent.onValueChangeActions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = paddingsValue = paddingsValue.merged(with: { parent.paddings?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = selectedActionsValue = selectedActionsValue.merged(with: { parent.selectedActions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = tooltipsValue = tooltipsValue.merged(with: { parent.tooltips?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = transformValue = transformValue.merged(with: { parent.transform?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = transformationsValue = transformationsValue.merged(with: { parent.transformations?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = transitionChangeValue = transitionChangeValue.merged(with: { parent.transitionChange?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = transitionInValue = transitionInValue.merged(with: { parent.transitionIn?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = transitionOutValue = transitionOutValue.merged(with: { parent.transitionOut?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = variableTriggersValue = variableTriggersValue.merged(with: { parent.variableTriggers?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = variablesValue = variablesValue.merged(with: { parent.variables?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = visibilityActionValue = visibilityActionValue.merged(with: { parent.visibilityAction?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = visibilityActionsValue = visibilityActionsValue.merged(with: { parent.visibilityActions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = widthValue = widthValue.merged(with: { parent.width?.resolveOptionalValue(context: context, useOnlyLinks: true) })
    }
    var errors = mergeErrors(
      accessibilityValue.errorsOrWarnings?.map { .nestedObjectError(field: "accessibility", error: $0) },
      alignmentHorizontalValue.errorsOrWarnings?.map { .nestedObjectError(field: "alignment_horizontal", error: $0) },
      alignmentVerticalValue.errorsOrWarnings?.map { .nestedObjectError(field: "alignment_vertical", error: $0) },
      alphaValue.errorsOrWarnings?.map { .nestedObjectError(field: "alpha", error: $0) },
      animatorsValue.errorsOrWarnings?.map { .nestedObjectError(field: "animators", error: $0) },
      backgroundValue.errorsOrWarnings?.map { .nestedObjectError(field: "background", error: $0) },
      backgroundColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "background_color", error: $0) },
      borderValue.errorsOrWarnings?.map { .nestedObjectError(field: "border", error: $0) },
      borderColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "border_color", error: $0) },
      borderWidthValue.errorsOrWarnings?.map { .nestedObjectError(field: "border_width", error: $0) },
      buttonColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "button_color", error: $0) },
      buttonSizeValue.errorsOrWarnings?.map { .nestedObjectError(field: "button_size", error: $0) },
      columnSpanValue.errorsOrWarnings?.map { .nestedObjectError(field: "column_span", error: $0) },
      cornerRadiusValue.errorsOrWarnings?.map { .nestedObjectError(field: "corner_radius", error: $0) },
      counterValueVariableValue.errorsOrWarnings?.map { .nestedObjectError(field: "counter_value_variable", error: $0) },
      disappearActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "disappear_actions", error: $0) },
      disabledButtonColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "disabled_button_color", error: $0) },
      extensionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "extensions", error: $0) },
      focusValue.errorsOrWarnings?.map { .nestedObjectError(field: "focus", error: $0) },
      fontSizeValue.errorsOrWarnings?.map { .nestedObjectError(field: "font_size", error: $0) },
      fontWeightValue.errorsOrWarnings?.map { .nestedObjectError(field: "font_weight", error: $0) },
      functionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "functions", error: $0) },
      heightValue.errorsOrWarnings?.map { .nestedObjectError(field: "height", error: $0) },
      iconColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "icon_color", error: $0) },
      idValue.errorsOrWarnings?.map { .nestedObjectError(field: "id", error: $0) },
      isEnabledValue.errorsOrWarnings?.map { .nestedObjectError(field: "is_enabled", error: $0) },
      layoutProviderValue.errorsOrWarnings?.map { .nestedObjectError(field: "layout_provider", error: $0) },
      marginsValue.errorsOrWarnings?.map { .nestedObjectError(field: "margins", error: $0) },
      maxValueValue.errorsOrWarnings?.map { .nestedObjectError(field: "max_value", error: $0) },
      minValueValue.errorsOrWarnings?.map { .nestedObjectError(field: "min_value", error: $0) },
      onDecrementActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "on_decrement_actions", error: $0) },
      onIncrementActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "on_increment_actions", error: $0) },
      onValueChangeActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "on_value_change_actions", error: $0) },
      paddingValue.errorsOrWarnings?.map { .nestedObjectError(field: "padding", error: $0) },
      paddingsValue.errorsOrWarnings?.map { .nestedObjectError(field: "paddings", error: $0) },
      reuseIdValue.errorsOrWarnings?.map { .nestedObjectError(field: "reuse_id", error: $0) },
      rowSpanValue.errorsOrWarnings?.map { .nestedObjectError(field: "row_span", error: $0) },
      selectedActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "selected_actions", error: $0) },
      stepValue.errorsOrWarnings?.map { .nestedObjectError(field: "step", error: $0) },
      textColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "text_color", error: $0) },
      tooltipsValue.errorsOrWarnings?.map { .nestedObjectError(field: "tooltips", error: $0) },
      transformValue.errorsOrWarnings?.map { .nestedObjectError(field: "transform", error: $0) },
      transformationsValue.errorsOrWarnings?.map { .nestedObjectError(field: "transformations", error: $0) },
      transitionChangeValue.errorsOrWarnings?.map { .nestedObjectError(field: "transition_change", error: $0) },
      transitionInValue.errorsOrWarnings?.map { .nestedObjectError(field: "transition_in", error: $0) },
      transitionOutValue.errorsOrWarnings?.map { .nestedObjectError(field: "transition_out", error: $0) },
      transitionTriggersValue.errorsOrWarnings?.map { .nestedObjectError(field: "transition_triggers", error: $0) },
      valueWidthValue.errorsOrWarnings?.map { .nestedObjectError(field: "value_width", error: $0) },
      variableTriggersValue.errorsOrWarnings?.map { .nestedObjectError(field: "variable_triggers", error: $0) },
      variablesValue.errorsOrWarnings?.map { .nestedObjectError(field: "variables", error: $0) },
      visibilityValue.errorsOrWarnings?.map { .nestedObjectError(field: "visibility", error: $0) },
      visibilityActionValue.errorsOrWarnings?.map { .nestedObjectError(field: "visibility_action", error: $0) },
      visibilityActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "visibility_actions", error: $0) },
      widthValue.errorsOrWarnings?.map { .nestedObjectError(field: "width", error: $0) }
    )
    if case .noValue = counterValueVariableValue {
      errors.append(.requiredFieldIsMissing(field: "counter_value_variable"))
    }
    guard
      let counterValueVariableNonNil = counterValueVariableValue.value
    else {
      return .failure(NonEmptyArray(errors)!)
    }
    let result = DivCounter(
      accessibility: accessibilityValue.value,
      alignmentHorizontal: alignmentHorizontalValue.value,
      alignmentVertical: alignmentVerticalValue.value,
      alpha: alphaValue.value,
      animators: animatorsValue.value,
      background: backgroundValue.value,
      backgroundColor: backgroundColorValue.value,
      border: borderValue.value,
      borderColor: borderColorValue.value,
      borderWidth: borderWidthValue.value,
      buttonColor: buttonColorValue.value,
      buttonSize: buttonSizeValue.value,
      columnSpan: columnSpanValue.value,
      cornerRadius: cornerRadiusValue.value,
      counterValueVariable: counterValueVariableNonNil,
      disappearActions: disappearActionsValue.value,
      disabledButtonColor: disabledButtonColorValue.value,
      extensions: extensionsValue.value,
      focus: focusValue.value,
      fontSize: fontSizeValue.value,
      fontWeight: fontWeightValue.value,
      functions: functionsValue.value,
      height: heightValue.value,
      iconColor: iconColorValue.value,
      id: idValue.value,
      isEnabled: isEnabledValue.value,
      layoutProvider: layoutProviderValue.value,
      margins: marginsValue.value,
      maxValue: maxValueValue.value,
      minValue: minValueValue.value,
      onDecrementActions: onDecrementActionsValue.value,
      onIncrementActions: onIncrementActionsValue.value,
      onValueChangeActions: onValueChangeActionsValue.value,
      padding: paddingValue.value,
      paddings: paddingsValue.value,
      reuseId: reuseIdValue.value,
      rowSpan: rowSpanValue.value,
      selectedActions: selectedActionsValue.value,
      step: stepValue.value,
      textColor: textColorValue.value,
      tooltips: tooltipsValue.value,
      transform: transformValue.value,
      transformations: transformationsValue.value,
      transitionChange: transitionChangeValue.value,
      transitionIn: transitionInValue.value,
      transitionOut: transitionOutValue.value,
      transitionTriggers: transitionTriggersValue.value,
      valueWidth: valueWidthValue.value,
      variableTriggers: variableTriggersValue.value,
      variables: variablesValue.value,
      visibility: visibilityValue.value,
      visibilityAction: visibilityActionValue.value,
      visibilityActions: visibilityActionsValue.value,
      width: widthValue.value
    )
    return errors.isEmpty ? .success(result) : .partialSuccess(result, warnings: NonEmptyArray(errors)!)
  }

  private func mergedWithParent(templates: [TemplateName: Any]) throws -> DivCounterTemplate {
    guard let parent = parent, parent != Self.type else { return self }
    guard let parentTemplate = templates[parent] as? DivCounterTemplate else {
      throw DeserializationError.unknownType(type: parent)
    }
    let mergedParent = try parentTemplate.mergedWithParent(templates: templates)

    return DivCounterTemplate(
      parent: nil,
      accessibility: accessibility ?? mergedParent.accessibility,
      alignmentHorizontal: alignmentHorizontal ?? mergedParent.alignmentHorizontal,
      alignmentVertical: alignmentVertical ?? mergedParent.alignmentVertical,
      alpha: alpha ?? mergedParent.alpha,
      animators: animators ?? mergedParent.animators,
      background: background ?? mergedParent.background,
      backgroundColor: backgroundColor ?? mergedParent.backgroundColor,
      border: border ?? mergedParent.border,
      borderColor: borderColor ?? mergedParent.borderColor,
      borderWidth: borderWidth ?? mergedParent.borderWidth,
      buttonColor: buttonColor ?? mergedParent.buttonColor,
      buttonSize: buttonSize ?? mergedParent.buttonSize,
      columnSpan: columnSpan ?? mergedParent.columnSpan,
      cornerRadius: cornerRadius ?? mergedParent.cornerRadius,
      counterValueVariable: counterValueVariable ?? mergedParent.counterValueVariable,
      disappearActions: disappearActions ?? mergedParent.disappearActions,
      disabledButtonColor: disabledButtonColor ?? mergedParent.disabledButtonColor,
      extensions: extensions ?? mergedParent.extensions,
      focus: focus ?? mergedParent.focus,
      fontSize: fontSize ?? mergedParent.fontSize,
      fontWeight: fontWeight ?? mergedParent.fontWeight,
      functions: functions ?? mergedParent.functions,
      height: height ?? mergedParent.height,
      iconColor: iconColor ?? mergedParent.iconColor,
      id: id ?? mergedParent.id,
      isEnabled: isEnabled ?? mergedParent.isEnabled,
      layoutProvider: layoutProvider ?? mergedParent.layoutProvider,
      margins: margins ?? mergedParent.margins,
      maxValue: maxValue ?? mergedParent.maxValue,
      minValue: minValue ?? mergedParent.minValue,
      onDecrementActions: onDecrementActions ?? mergedParent.onDecrementActions,
      onIncrementActions: onIncrementActions ?? mergedParent.onIncrementActions,
      onValueChangeActions: onValueChangeActions ?? mergedParent.onValueChangeActions,
      padding: padding ?? mergedParent.padding,
      paddings: paddings ?? mergedParent.paddings,
      reuseId: reuseId ?? mergedParent.reuseId,
      rowSpan: rowSpan ?? mergedParent.rowSpan,
      selectedActions: selectedActions ?? mergedParent.selectedActions,
      step: step ?? mergedParent.step,
      textColor: textColor ?? mergedParent.textColor,
      tooltips: tooltips ?? mergedParent.tooltips,
      transform: transform ?? mergedParent.transform,
      transformations: transformations ?? mergedParent.transformations,
      transitionChange: transitionChange ?? mergedParent.transitionChange,
      transitionIn: transitionIn ?? mergedParent.transitionIn,
      transitionOut: transitionOut ?? mergedParent.transitionOut,
      transitionTriggers: transitionTriggers ?? mergedParent.transitionTriggers,
      valueWidth: valueWidth ?? mergedParent.valueWidth,
      variableTriggers: variableTriggers ?? mergedParent.variableTriggers,
      variables: variables ?? mergedParent.variables,
      visibility: visibility ?? mergedParent.visibility,
      visibilityAction: visibilityAction ?? mergedParent.visibilityAction,
      visibilityActions: visibilityActions ?? mergedParent.visibilityActions,
      width: width ?? mergedParent.width
    )
  }

  public func resolveParent(templates: [TemplateName: Any]) throws -> DivCounterTemplate {
    let merged = try mergedWithParent(templates: templates)

    return DivCounterTemplate(
      parent: nil,
      accessibility: merged.accessibility?.tryResolveParent(templates: templates),
      alignmentHorizontal: merged.alignmentHorizontal,
      alignmentVertical: merged.alignmentVertical,
      alpha: merged.alpha,
      animators: merged.animators?.tryResolveParent(templates: templates),
      background: merged.background?.tryResolveParent(templates: templates),
      backgroundColor: merged.backgroundColor,
      border: merged.border?.tryResolveParent(templates: templates),
      borderColor: merged.borderColor,
      borderWidth: merged.borderWidth,
      buttonColor: merged.buttonColor,
      buttonSize: merged.buttonSize,
      columnSpan: merged.columnSpan,
      cornerRadius: merged.cornerRadius,
      counterValueVariable: merged.counterValueVariable,
      disappearActions: merged.disappearActions?.tryResolveParent(templates: templates),
      disabledButtonColor: merged.disabledButtonColor,
      extensions: merged.extensions?.tryResolveParent(templates: templates),
      focus: merged.focus?.tryResolveParent(templates: templates),
      fontSize: merged.fontSize,
      fontWeight: merged.fontWeight,
      functions: merged.functions?.tryResolveParent(templates: templates),
      height: merged.height?.tryResolveParent(templates: templates),
      iconColor: merged.iconColor,
      id: merged.id,
      isEnabled: merged.isEnabled,
      layoutProvider: merged.layoutProvider?.tryResolveParent(templates: templates),
      margins: merged.margins?.tryResolveParent(templates: templates),
      maxValue: merged.maxValue,
      minValue: merged.minValue,
      onDecrementActions: merged.onDecrementActions?.tryResolveParent(templates: templates),
      onIncrementActions: merged.onIncrementActions?.tryResolveParent(templates: templates),
      onValueChangeActions: merged.onValueChangeActions?.tryResolveParent(templates: templates),
      padding: merged.padding,
      paddings: merged.paddings?.tryResolveParent(templates: templates),
      reuseId: merged.reuseId,
      rowSpan: merged.rowSpan,
      selectedActions: merged.selectedActions?.tryResolveParent(templates: templates),
      step: merged.step,
      textColor: merged.textColor,
      tooltips: merged.tooltips?.tryResolveParent(templates: templates),
      transform: merged.transform?.tryResolveParent(templates: templates),
      transformations: merged.transformations?.tryResolveParent(templates: templates),
      transitionChange: merged.transitionChange?.tryResolveParent(templates: templates),
      transitionIn: merged.transitionIn?.tryResolveParent(templates: templates),
      transitionOut: merged.transitionOut?.tryResolveParent(templates: templates),
      transitionTriggers: merged.transitionTriggers,
      valueWidth: merged.valueWidth,
      variableTriggers: merged.variableTriggers?.tryResolveParent(templates: templates),
      variables: merged.variables?.tryResolveParent(templates: templates),
      visibility: merged.visibility,
      visibilityAction: merged.visibilityAction?.tryResolveParent(templates: templates),
      visibilityActions: merged.visibilityActions?.tryResolveParent(templates: templates),
      width: merged.width?.tryResolveParent(templates: templates)
    )
  }
}
