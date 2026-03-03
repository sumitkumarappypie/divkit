// Generated code. Do not modify.

import Foundation
import Serialization
import VGSL

public final class DivCounter: DivBase, Sendable {
  public static let type: String = "counter"
  public let accessibility: DivAccessibility?
  public let alignmentHorizontal: Expression<DivAlignmentHorizontal>?
  public let alignmentVertical: Expression<DivAlignmentVertical>?
  public let alpha: Expression<Double> // constraint: number >= 0.0 && number <= 1.0; default value: 1.0
  public let animators: [DivAnimator]?
  public let background: [DivBackground]?
  public let backgroundColor: Expression<Color> // default value: #F5F5F5
  public let border: DivBorder?
  public let borderColor: Expression<Color> // default value: #E0E0E0
  public let borderWidth: Expression<Int> // constraint: number >= 0; default value: 1
  public let buttonColor: Expression<Color> // default value: #4CAF50
  public let buttonSize: Expression<Int> // constraint: number >= 0; default value: 20
  public let columnSpan: Expression<Int>? // constraint: number >= 0
  public let cornerRadius: Expression<Int> // constraint: number >= 0; default value: 999
  public let counterValueVariable: String
  public let disappearActions: [DivDisappearAction]?
  public let disabledButtonColor: Expression<Color> // default value: #CCCCCC
  public let extensions: [DivExtension]?
  public let focus: DivFocus?
  public let fontSize: Expression<Int> // constraint: number >= 0; default value: 16
  public let fontWeight: Expression<DivFontWeight> // default value: bold
  public let functions: [DivFunction]?
  public let height: DivSize // default value: .divWrapContentSize(DivWrapContentSize())
  public let iconColor: Expression<Color> // default value: #FFFFFF
  public let id: String?
  public let isEnabled: Expression<Bool> // default value: true
  public let layoutProvider: DivLayoutProvider?
  public let margins: DivEdgeInsets?
  public let maxValue: Expression<Int> // default value: 99
  public let minValue: Expression<Int> // default value: 0
  public let onDecrementActions: [DivAction]?
  public let onIncrementActions: [DivAction]?
  public let onValueChangeActions: [DivAction]?
  public let padding: Expression<Int> // constraint: number >= 0; default value: 4
  public let paddings: DivEdgeInsets?
  public let reuseId: Expression<String>?
  public let rowSpan: Expression<Int>? // constraint: number >= 0
  public let selectedActions: [DivAction]?
  public let step: Expression<Int> // constraint: number >= 0; default value: 1
  public let textColor: Expression<Color> // default value: #1B2630
  public let tooltips: [DivTooltip]?
  public let transform: DivTransform?
  public let transformations: [DivTransformation]?
  public let transitionChange: DivChangeTransition?
  public let transitionIn: DivAppearanceTransition?
  public let transitionOut: DivAppearanceTransition?
  public let transitionTriggers: [DivTransitionTrigger]? // at least 1 elements
  public let valueWidth: Expression<Int> // constraint: number >= 0; default value: 20
  public let variableTriggers: [DivTrigger]?
  public let variables: [DivVariable]?
  public let visibility: Expression<DivVisibility> // default value: visible
  public let visibilityAction: DivVisibilityAction?
  public let visibilityActions: [DivVisibilityAction]?
  public let width: DivSize // default value: .divMatchParentSize(DivMatchParentSize())

  public func resolveAlignmentHorizontal(_ resolver: ExpressionResolver) -> DivAlignmentHorizontal? {
    resolver.resolveEnum(alignmentHorizontal)
  }

  public func resolveAlignmentVertical(_ resolver: ExpressionResolver) -> DivAlignmentVertical? {
    resolver.resolveEnum(alignmentVertical)
  }

  public func resolveAlpha(_ resolver: ExpressionResolver) -> Double {
    resolver.resolveNumeric(alpha) ?? 1.0
  }

  public func resolveBackgroundColor(_ resolver: ExpressionResolver) -> Color {
    resolver.resolveColor(backgroundColor) ?? Color.colorWithARGBHexCode(0xFFF5F5F5)
  }

  public func resolveBorderColor(_ resolver: ExpressionResolver) -> Color {
    resolver.resolveColor(borderColor) ?? Color.colorWithARGBHexCode(0xFFE0E0E0)
  }

  public func resolveBorderWidth(_ resolver: ExpressionResolver) -> Int {
    resolver.resolveNumeric(borderWidth) ?? 1
  }

  public func resolveButtonColor(_ resolver: ExpressionResolver) -> Color {
    resolver.resolveColor(buttonColor) ?? Color.colorWithARGBHexCode(0xFF4CAF50)
  }

  public func resolveButtonSize(_ resolver: ExpressionResolver) -> Int {
    resolver.resolveNumeric(buttonSize) ?? 36
  }

  public func resolveColumnSpan(_ resolver: ExpressionResolver) -> Int? {
    resolver.resolveNumeric(columnSpan)
  }

  public func resolveCornerRadius(_ resolver: ExpressionResolver) -> Int {
    resolver.resolveNumeric(cornerRadius) ?? 999
  }

  public func resolveDisabledButtonColor(_ resolver: ExpressionResolver) -> Color {
    resolver.resolveColor(disabledButtonColor) ?? Color.colorWithARGBHexCode(0xFFCCCCCC)
  }

  public func resolveFontSize(_ resolver: ExpressionResolver) -> Int {
    resolver.resolveNumeric(fontSize) ?? 16
  }

  public func resolveFontWeight(_ resolver: ExpressionResolver) -> DivFontWeight {
    resolver.resolveEnum(fontWeight) ?? DivFontWeight.bold
  }

  public func resolveIconColor(_ resolver: ExpressionResolver) -> Color {
    resolver.resolveColor(iconColor) ?? Color.colorWithARGBHexCode(0xFFFFFFFF)
  }

  public func resolveIsEnabled(_ resolver: ExpressionResolver) -> Bool {
    resolver.resolveNumeric(isEnabled) ?? true
  }

  public func resolveMaxValue(_ resolver: ExpressionResolver) -> Int {
    resolver.resolveNumeric(maxValue) ?? 99
  }

  public func resolveMinValue(_ resolver: ExpressionResolver) -> Int {
    resolver.resolveNumeric(minValue) ?? 0
  }

  public func resolvePadding(_ resolver: ExpressionResolver) -> Int {
    resolver.resolveNumeric(padding) ?? 6
  }

  public func resolveReuseId(_ resolver: ExpressionResolver) -> String? {
    resolver.resolveString(reuseId)
  }

  public func resolveRowSpan(_ resolver: ExpressionResolver) -> Int? {
    resolver.resolveNumeric(rowSpan)
  }

  public func resolveStep(_ resolver: ExpressionResolver) -> Int {
    resolver.resolveNumeric(step) ?? 1
  }

  public func resolveTextColor(_ resolver: ExpressionResolver) -> Color {
    resolver.resolveColor(textColor) ?? Color.colorWithARGBHexCode(0xFF1B2630)
  }

  public func resolveValueWidth(_ resolver: ExpressionResolver) -> Int {
    resolver.resolveNumeric(valueWidth) ?? 40
  }

  public func resolveVisibility(_ resolver: ExpressionResolver) -> DivVisibility {
    resolver.resolveEnum(visibility) ?? DivVisibility.visible
  }

  static let alphaValidator: AnyValueValidator<Double> =
    makeValueValidator(valueValidator: { $0 >= 0.0 && $0 <= 1.0 })

  static let borderWidthValidator: AnyValueValidator<Int> =
    makeValueValidator(valueValidator: { $0 >= 0 })

  static let buttonSizeValidator: AnyValueValidator<Int> =
    makeValueValidator(valueValidator: { $0 >= 0 })

  static let columnSpanValidator: AnyValueValidator<Int> =
    makeValueValidator(valueValidator: { $0 >= 0 })

  static let cornerRadiusValidator: AnyValueValidator<Int> =
    makeValueValidator(valueValidator: { $0 >= 0 })

  static let fontSizeValidator: AnyValueValidator<Int> =
    makeValueValidator(valueValidator: { $0 >= 0 })

  static let paddingValidator: AnyValueValidator<Int> =
    makeValueValidator(valueValidator: { $0 >= 0 })

  static let rowSpanValidator: AnyValueValidator<Int> =
    makeValueValidator(valueValidator: { $0 >= 0 })

  static let stepValidator: AnyValueValidator<Int> =
    makeValueValidator(valueValidator: { $0 >= 0 })

  static let transitionTriggersValidator: AnyArrayValueValidator<DivTransitionTrigger> =
    makeArrayValidator(minItems: 1)

  static let valueWidthValidator: AnyValueValidator<Int> =
    makeValueValidator(valueValidator: { $0 >= 0 })

  public convenience init(dictionary: [String: Any], context: ParsingContext) throws {
    self.init(
      accessibility: try dictionary.getOptionalField("accessibility", transform: { (dict: [String: Any]) in try DivAccessibility(dictionary: dict, context: context) }),
      alignmentHorizontal: try dictionary.getOptionalExpressionField("alignment_horizontal", context: context),
      alignmentVertical: try dictionary.getOptionalExpressionField("alignment_vertical", context: context),
      alpha: try dictionary.getOptionalExpressionField("alpha", validator: Self.alphaValidator, context: context),
      animators: try dictionary.getOptionalArray("animators", transform: { (dict: [String: Any]) in try? DivAnimator(dictionary: dict, context: context) }),
      background: try dictionary.getOptionalArray("background", transform: { (dict: [String: Any]) in try? DivBackground(dictionary: dict, context: context) }),
      backgroundColor: try dictionary.getOptionalExpressionField("background_color", transform: Color.color(withHexString:), context: context),
      border: try dictionary.getOptionalField("border", transform: { (dict: [String: Any]) in try DivBorder(dictionary: dict, context: context) }),
      borderColor: try dictionary.getOptionalExpressionField("border_color", transform: Color.color(withHexString:), context: context),
      borderWidth: try dictionary.getOptionalExpressionField("border_width", validator: Self.borderWidthValidator, context: context),
      buttonColor: try dictionary.getOptionalExpressionField("button_color", transform: Color.color(withHexString:), context: context),
      buttonSize: try dictionary.getOptionalExpressionField("button_size", validator: Self.buttonSizeValidator, context: context),
      columnSpan: try dictionary.getOptionalExpressionField("column_span", validator: Self.columnSpanValidator, context: context),
      cornerRadius: try dictionary.getOptionalExpressionField("corner_radius", validator: Self.cornerRadiusValidator, context: context),
      counterValueVariable: try dictionary.getField("counter_value_variable", context: context),
      disappearActions: try dictionary.getOptionalArray("disappear_actions", transform: { (dict: [String: Any]) in try? DivDisappearAction(dictionary: dict, context: context) }),
      disabledButtonColor: try dictionary.getOptionalExpressionField("disabled_button_color", transform: Color.color(withHexString:), context: context),
      extensions: try dictionary.getOptionalArray("extensions", transform: { (dict: [String: Any]) in try? DivExtension(dictionary: dict, context: context) }),
      focus: try dictionary.getOptionalField("focus", transform: { (dict: [String: Any]) in try DivFocus(dictionary: dict, context: context) }),
      fontSize: try dictionary.getOptionalExpressionField("font_size", validator: Self.fontSizeValidator, context: context),
      fontWeight: try dictionary.getOptionalExpressionField("font_weight", context: context),
      functions: try dictionary.getOptionalArray("functions", transform: { (dict: [String: Any]) in try? DivFunction(dictionary: dict, context: context) }),
      height: try dictionary.getOptionalField("height", transform: { (dict: [String: Any]) in try DivSize(dictionary: dict, context: context) }),
      iconColor: try dictionary.getOptionalExpressionField("icon_color", transform: Color.color(withHexString:), context: context),
      id: try dictionary.getOptionalField("id", context: context),
      isEnabled: try dictionary.getOptionalExpressionField("is_enabled", context: context),
      layoutProvider: try dictionary.getOptionalField("layout_provider", transform: { (dict: [String: Any]) in try DivLayoutProvider(dictionary: dict, context: context) }),
      margins: try dictionary.getOptionalField("margins", transform: { (dict: [String: Any]) in try DivEdgeInsets(dictionary: dict, context: context) }),
      maxValue: try dictionary.getOptionalExpressionField("max_value", context: context),
      minValue: try dictionary.getOptionalExpressionField("min_value", context: context),
      onDecrementActions: try dictionary.getOptionalArray("on_decrement_actions", transform: { (dict: [String: Any]) in try? DivAction(dictionary: dict, context: context) }),
      onIncrementActions: try dictionary.getOptionalArray("on_increment_actions", transform: { (dict: [String: Any]) in try? DivAction(dictionary: dict, context: context) }),
      onValueChangeActions: try dictionary.getOptionalArray("on_value_change_actions", transform: { (dict: [String: Any]) in try? DivAction(dictionary: dict, context: context) }),
      padding: try dictionary.getOptionalExpressionField("padding", validator: Self.paddingValidator, context: context),
      paddings: try dictionary.getOptionalField("paddings", transform: { (dict: [String: Any]) in try DivEdgeInsets(dictionary: dict, context: context) }),
      reuseId: try dictionary.getOptionalExpressionField("reuse_id", context: context),
      rowSpan: try dictionary.getOptionalExpressionField("row_span", validator: Self.rowSpanValidator, context: context),
      selectedActions: try dictionary.getOptionalArray("selected_actions", transform: { (dict: [String: Any]) in try? DivAction(dictionary: dict, context: context) }),
      step: try dictionary.getOptionalExpressionField("step", validator: Self.stepValidator, context: context),
      textColor: try dictionary.getOptionalExpressionField("text_color", transform: Color.color(withHexString:), context: context),
      tooltips: try dictionary.getOptionalArray("tooltips", transform: { (dict: [String: Any]) in try? DivTooltip(dictionary: dict, context: context) }),
      transform: try dictionary.getOptionalField("transform", transform: { (dict: [String: Any]) in try DivTransform(dictionary: dict, context: context) }),
      transformations: try dictionary.getOptionalArray("transformations", transform: { (dict: [String: Any]) in try? DivTransformation(dictionary: dict, context: context) }),
      transitionChange: try dictionary.getOptionalField("transition_change", transform: { (dict: [String: Any]) in try DivChangeTransition(dictionary: dict, context: context) }),
      transitionIn: try dictionary.getOptionalField("transition_in", transform: { (dict: [String: Any]) in try DivAppearanceTransition(dictionary: dict, context: context) }),
      transitionOut: try dictionary.getOptionalField("transition_out", transform: { (dict: [String: Any]) in try DivAppearanceTransition(dictionary: dict, context: context) }),
      transitionTriggers: try dictionary.getOptionalArray("transition_triggers", validator: Self.transitionTriggersValidator, context: context),
      valueWidth: try dictionary.getOptionalExpressionField("value_width", validator: Self.valueWidthValidator, context: context),
      variableTriggers: try dictionary.getOptionalArray("variable_triggers", transform: { (dict: [String: Any]) in try? DivTrigger(dictionary: dict, context: context) }),
      variables: try dictionary.getOptionalArray("variables", transform: { (dict: [String: Any]) in try? DivVariable(dictionary: dict, context: context) }),
      visibility: try dictionary.getOptionalExpressionField("visibility", context: context),
      visibilityAction: try dictionary.getOptionalField("visibility_action", transform: { (dict: [String: Any]) in try DivVisibilityAction(dictionary: dict, context: context) }),
      visibilityActions: try dictionary.getOptionalArray("visibility_actions", transform: { (dict: [String: Any]) in try? DivVisibilityAction(dictionary: dict, context: context) }),
      width: try dictionary.getOptionalField("width", transform: { (dict: [String: Any]) in try DivSize(dictionary: dict, context: context) })
    )
  }

  init(
    accessibility: DivAccessibility? = nil,
    alignmentHorizontal: Expression<DivAlignmentHorizontal>? = nil,
    alignmentVertical: Expression<DivAlignmentVertical>? = nil,
    alpha: Expression<Double>? = nil,
    animators: [DivAnimator]? = nil,
    background: [DivBackground]? = nil,
    backgroundColor: Expression<Color>? = nil,
    border: DivBorder? = nil,
    borderColor: Expression<Color>? = nil,
    borderWidth: Expression<Int>? = nil,
    buttonColor: Expression<Color>? = nil,
    buttonSize: Expression<Int>? = nil,
    columnSpan: Expression<Int>? = nil,
    cornerRadius: Expression<Int>? = nil,
    counterValueVariable: String,
    disappearActions: [DivDisappearAction]? = nil,
    disabledButtonColor: Expression<Color>? = nil,
    extensions: [DivExtension]? = nil,
    focus: DivFocus? = nil,
    fontSize: Expression<Int>? = nil,
    fontWeight: Expression<DivFontWeight>? = nil,
    functions: [DivFunction]? = nil,
    height: DivSize? = nil,
    iconColor: Expression<Color>? = nil,
    id: String? = nil,
    isEnabled: Expression<Bool>? = nil,
    layoutProvider: DivLayoutProvider? = nil,
    margins: DivEdgeInsets? = nil,
    maxValue: Expression<Int>? = nil,
    minValue: Expression<Int>? = nil,
    onDecrementActions: [DivAction]? = nil,
    onIncrementActions: [DivAction]? = nil,
    onValueChangeActions: [DivAction]? = nil,
    padding: Expression<Int>? = nil,
    paddings: DivEdgeInsets? = nil,
    reuseId: Expression<String>? = nil,
    rowSpan: Expression<Int>? = nil,
    selectedActions: [DivAction]? = nil,
    step: Expression<Int>? = nil,
    textColor: Expression<Color>? = nil,
    tooltips: [DivTooltip]? = nil,
    transform: DivTransform? = nil,
    transformations: [DivTransformation]? = nil,
    transitionChange: DivChangeTransition? = nil,
    transitionIn: DivAppearanceTransition? = nil,
    transitionOut: DivAppearanceTransition? = nil,
    transitionTriggers: [DivTransitionTrigger]? = nil,
    valueWidth: Expression<Int>? = nil,
    variableTriggers: [DivTrigger]? = nil,
    variables: [DivVariable]? = nil,
    visibility: Expression<DivVisibility>? = nil,
    visibilityAction: DivVisibilityAction? = nil,
    visibilityActions: [DivVisibilityAction]? = nil,
    width: DivSize? = nil
  ) {
    self.accessibility = accessibility
    self.alignmentHorizontal = alignmentHorizontal
    self.alignmentVertical = alignmentVertical
    self.alpha = alpha ?? .value(1.0)
    self.animators = animators
    self.background = background
    self.backgroundColor = backgroundColor ?? .value(Color.colorWithARGBHexCode(0xFFF5F5F5))
    self.border = border
    self.borderColor = borderColor ?? .value(Color.colorWithARGBHexCode(0xFFE0E0E0))
    self.borderWidth = borderWidth ?? .value(1)
    self.buttonColor = buttonColor ?? .value(Color.colorWithARGBHexCode(0xFF4CAF50))
    self.buttonSize = buttonSize ?? .value(36)
    self.columnSpan = columnSpan
    self.cornerRadius = cornerRadius ?? .value(999)
    self.counterValueVariable = counterValueVariable
    self.disappearActions = disappearActions
    self.disabledButtonColor = disabledButtonColor ?? .value(Color.colorWithARGBHexCode(0xFFCCCCCC))
    self.extensions = extensions
    self.focus = focus
    self.fontSize = fontSize ?? .value(16)
    self.fontWeight = fontWeight ?? .value(.bold)
    self.functions = functions
    self.height = height ?? .divWrapContentSize(DivWrapContentSize())
    self.iconColor = iconColor ?? .value(Color.colorWithARGBHexCode(0xFFFFFFFF))
    self.id = id
    self.isEnabled = isEnabled ?? .value(true)
    self.layoutProvider = layoutProvider
    self.margins = margins
    self.maxValue = maxValue ?? .value(99)
    self.minValue = minValue ?? .value(0)
    self.onDecrementActions = onDecrementActions
    self.onIncrementActions = onIncrementActions
    self.onValueChangeActions = onValueChangeActions
    self.padding = padding ?? .value(6)
    self.paddings = paddings
    self.reuseId = reuseId
    self.rowSpan = rowSpan
    self.selectedActions = selectedActions
    self.step = step ?? .value(1)
    self.textColor = textColor ?? .value(Color.colorWithARGBHexCode(0xFF1B2630))
    self.tooltips = tooltips
    self.transform = transform
    self.transformations = transformations
    self.transitionChange = transitionChange
    self.transitionIn = transitionIn
    self.transitionOut = transitionOut
    self.transitionTriggers = transitionTriggers
    self.valueWidth = valueWidth ?? .value(40)
    self.variableTriggers = variableTriggers
    self.variables = variables
    self.visibility = visibility ?? .value(.visible)
    self.visibilityAction = visibilityAction
    self.visibilityActions = visibilityActions
    self.width = width ?? .divMatchParentSize(DivMatchParentSize())
  }
}

#if DEBUG
extension DivCounter: Equatable {
  public static func ==(lhs: DivCounter, rhs: DivCounter) -> Bool {
    guard
      lhs.accessibility == rhs.accessibility,
      lhs.alignmentHorizontal == rhs.alignmentHorizontal,
      lhs.alignmentVertical == rhs.alignmentVertical
    else {
      return false
    }
    guard
      lhs.alpha == rhs.alpha,
      lhs.animators == rhs.animators,
      lhs.background == rhs.background
    else {
      return false
    }
    guard
      lhs.backgroundColor == rhs.backgroundColor,
      lhs.border == rhs.border,
      lhs.borderColor == rhs.borderColor
    else {
      return false
    }
    guard
      lhs.borderWidth == rhs.borderWidth,
      lhs.buttonColor == rhs.buttonColor,
      lhs.buttonSize == rhs.buttonSize
    else {
      return false
    }
    guard
      lhs.columnSpan == rhs.columnSpan,
      lhs.cornerRadius == rhs.cornerRadius,
      lhs.counterValueVariable == rhs.counterValueVariable
    else {
      return false
    }
    guard
      lhs.disappearActions == rhs.disappearActions,
      lhs.disabledButtonColor == rhs.disabledButtonColor,
      lhs.extensions == rhs.extensions
    else {
      return false
    }
    guard
      lhs.focus == rhs.focus,
      lhs.fontSize == rhs.fontSize,
      lhs.fontWeight == rhs.fontWeight
    else {
      return false
    }
    guard
      lhs.functions == rhs.functions,
      lhs.height == rhs.height,
      lhs.iconColor == rhs.iconColor
    else {
      return false
    }
    guard
      lhs.id == rhs.id,
      lhs.isEnabled == rhs.isEnabled,
      lhs.layoutProvider == rhs.layoutProvider
    else {
      return false
    }
    guard
      lhs.margins == rhs.margins,
      lhs.maxValue == rhs.maxValue,
      lhs.minValue == rhs.minValue
    else {
      return false
    }
    guard
      lhs.onDecrementActions == rhs.onDecrementActions,
      lhs.onIncrementActions == rhs.onIncrementActions,
      lhs.onValueChangeActions == rhs.onValueChangeActions
    else {
      return false
    }
    guard
      lhs.padding == rhs.padding,
      lhs.paddings == rhs.paddings,
      lhs.reuseId == rhs.reuseId
    else {
      return false
    }
    guard
      lhs.rowSpan == rhs.rowSpan,
      lhs.selectedActions == rhs.selectedActions,
      lhs.step == rhs.step
    else {
      return false
    }
    guard
      lhs.textColor == rhs.textColor,
      lhs.tooltips == rhs.tooltips,
      lhs.transform == rhs.transform
    else {
      return false
    }
    guard
      lhs.transformations == rhs.transformations,
      lhs.transitionChange == rhs.transitionChange,
      lhs.transitionIn == rhs.transitionIn
    else {
      return false
    }
    guard
      lhs.transitionOut == rhs.transitionOut,
      lhs.transitionTriggers == rhs.transitionTriggers,
      lhs.valueWidth == rhs.valueWidth
    else {
      return false
    }
    guard
      lhs.variableTriggers == rhs.variableTriggers,
      lhs.variables == rhs.variables,
      lhs.visibility == rhs.visibility
    else {
      return false
    }
    guard
      lhs.visibilityAction == rhs.visibilityAction,
      lhs.visibilityActions == rhs.visibilityActions,
      lhs.width == rhs.width
    else {
      return false
    }
    return true
  }
}
#endif

extension DivCounter: Serializable {
  @_optimize(size)
  public func toDictionary() -> [String: ValidSerializationValue] {
    var result: [String: ValidSerializationValue] = [:]
    result["type"] = Self.type
    result["accessibility"] = accessibility?.toDictionary()
    result["alignment_horizontal"] = alignmentHorizontal?.toValidSerializationValue()
    result["alignment_vertical"] = alignmentVertical?.toValidSerializationValue()
    result["alpha"] = alpha.toValidSerializationValue()
    result["animators"] = animators?.map { $0.toDictionary() }
    result["background"] = background?.map { $0.toDictionary() }
    result["background_color"] = backgroundColor.toValidSerializationValue()
    result["border"] = border?.toDictionary()
    result["border_color"] = borderColor.toValidSerializationValue()
    result["border_width"] = borderWidth.toValidSerializationValue()
    result["button_color"] = buttonColor.toValidSerializationValue()
    result["button_size"] = buttonSize.toValidSerializationValue()
    result["column_span"] = columnSpan?.toValidSerializationValue()
    result["corner_radius"] = cornerRadius.toValidSerializationValue()
    result["counter_value_variable"] = counterValueVariable
    result["disappear_actions"] = disappearActions?.map { $0.toDictionary() }
    result["disabled_button_color"] = disabledButtonColor.toValidSerializationValue()
    result["extensions"] = extensions?.map { $0.toDictionary() }
    result["focus"] = focus?.toDictionary()
    result["font_size"] = fontSize.toValidSerializationValue()
    result["font_weight"] = fontWeight.toValidSerializationValue()
    result["functions"] = functions?.map { $0.toDictionary() }
    result["height"] = height.toDictionary()
    result["icon_color"] = iconColor.toValidSerializationValue()
    result["id"] = id
    result["is_enabled"] = isEnabled.toValidSerializationValue()
    result["layout_provider"] = layoutProvider?.toDictionary()
    result["margins"] = margins?.toDictionary()
    result["max_value"] = maxValue.toValidSerializationValue()
    result["min_value"] = minValue.toValidSerializationValue()
    result["on_decrement_actions"] = onDecrementActions?.map { $0.toDictionary() }
    result["on_increment_actions"] = onIncrementActions?.map { $0.toDictionary() }
    result["on_value_change_actions"] = onValueChangeActions?.map { $0.toDictionary() }
    result["padding"] = padding.toValidSerializationValue()
    result["paddings"] = paddings?.toDictionary()
    result["reuse_id"] = reuseId?.toValidSerializationValue()
    result["row_span"] = rowSpan?.toValidSerializationValue()
    result["selected_actions"] = selectedActions?.map { $0.toDictionary() }
    result["step"] = step.toValidSerializationValue()
    result["text_color"] = textColor.toValidSerializationValue()
    result["tooltips"] = tooltips?.map { $0.toDictionary() }
    result["transform"] = transform?.toDictionary()
    result["transformations"] = transformations?.map { $0.toDictionary() }
    result["transition_change"] = transitionChange?.toDictionary()
    result["transition_in"] = transitionIn?.toDictionary()
    result["transition_out"] = transitionOut?.toDictionary()
    result["transition_triggers"] = transitionTriggers?.map { $0.rawValue }
    result["value_width"] = valueWidth.toValidSerializationValue()
    result["variable_triggers"] = variableTriggers?.map { $0.toDictionary() }
    result["variables"] = variables?.map { $0.toDictionary() }
    result["visibility"] = visibility.toValidSerializationValue()
    result["visibility_action"] = visibilityAction?.toDictionary()
    result["visibility_actions"] = visibilityActions?.map { $0.toDictionary() }
    result["width"] = width.toDictionary()
    return result
  }
}
