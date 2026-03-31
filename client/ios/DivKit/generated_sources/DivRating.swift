// Generated code. Do not modify.

import Foundation
import Serialization
import VGSL

public final class DivRating: DivBase, Sendable {
  public static let type: String = "rating"
  public let accessibility: DivAccessibility?
  public let activeColor: Expression<Color> // default value: #FFFFC107
  public let alignmentHorizontal: Expression<DivAlignmentHorizontal>?
  public let alignmentVertical: Expression<DivAlignmentVertical>?
  public let alpha: Expression<Double> // constraint: number >= 0.0 && number <= 1.0; default value: 1.0
  public let animators: [DivAnimator]?
  public let background: [DivBackground]?
  public let border: DivBorder?
  public let borderColor: Expression<Color>?
  public let columnSpan: Expression<Int>? // constraint: number >= 0
  public let disabledColor: Expression<Color> // default value: #FFBDBDBD
  public let disappearActions: [DivDisappearAction]?
  public let extensions: [DivExtension]?
  public let focus: DivFocus?
  public let functions: [DivFunction]?
  public let height: DivSize // default value: .divWrapContentSize(DivWrapContentSize())
  public let iconPadding: DivEdgeInsets?
  public let iconSize: Expression<Int> // constraint: number >= 0; default value: 32
  public let iconSpacing: Expression<Int> // constraint: number >= 0; default value: 4
  public let id: String?
  public let inactiveColor: Expression<Color> // default value: #FFE0E0E0
  public let isInteractive: Expression<Bool> // default value: true
  public let layoutProvider: DivLayoutProvider?
  public let margins: DivEdgeInsets?
  public let maxRating: Expression<Int> // constraint: number >= 0; default value: 5
  public let paddings: DivEdgeInsets?
  public let ratingChangeActions: [DivAction]?
  public let ratingIcon: DivImageBackground?
  public let ratingVariable: String
  public let reuseId: Expression<String>?
  public let rowSpan: Expression<Int>? // constraint: number >= 0
  public let selectedActions: [DivAction]?
  public let step: Expression<Double> // default value: 1
  public let tooltips: [DivTooltip]?
  public let transform: DivTransform?
  public let transformations: [DivTransformation]?
  public let transitionChange: DivChangeTransition?
  public let transitionIn: DivAppearanceTransition?
  public let transitionOut: DivAppearanceTransition?
  public let transitionTriggers: [DivTransitionTrigger]? // at least 1 elements
  public let variableTriggers: [DivTrigger]?
  public let variables: [DivVariable]?
  public let visibility: Expression<DivVisibility> // default value: visible
  public let visibilityAction: DivVisibilityAction?
  public let visibilityActions: [DivVisibilityAction]?
  public let width: DivSize // default value: .divMatchParentSize(DivMatchParentSize())

  public func resolveActiveColor(_ resolver: ExpressionResolver) -> Color {
    resolver.resolveColor(activeColor) ?? Color.colorWithARGBHexCode(0xFFFFC107)
  }

  public func resolveAlignmentHorizontal(_ resolver: ExpressionResolver) -> DivAlignmentHorizontal? {
    resolver.resolveEnum(alignmentHorizontal)
  }

  public func resolveAlignmentVertical(_ resolver: ExpressionResolver) -> DivAlignmentVertical? {
    resolver.resolveEnum(alignmentVertical)
  }

  public func resolveAlpha(_ resolver: ExpressionResolver) -> Double {
    resolver.resolveNumeric(alpha) ?? 1.0
  }

  public func resolveBorderColor(_ resolver: ExpressionResolver) -> Color? {
    resolver.resolveColor(borderColor)
  }

  public func resolveColumnSpan(_ resolver: ExpressionResolver) -> Int? {
    resolver.resolveNumeric(columnSpan)
  }

  public func resolveDisabledColor(_ resolver: ExpressionResolver) -> Color {
    resolver.resolveColor(disabledColor) ?? Color.colorWithARGBHexCode(0xFFBDBDBD)
  }

  public func resolveIconSize(_ resolver: ExpressionResolver) -> Int {
    resolver.resolveNumeric(iconSize) ?? 32
  }

  public func resolveIconSpacing(_ resolver: ExpressionResolver) -> Int {
    resolver.resolveNumeric(iconSpacing) ?? 4
  }

  public func resolveInactiveColor(_ resolver: ExpressionResolver) -> Color {
    resolver.resolveColor(inactiveColor) ?? Color.colorWithARGBHexCode(0xFFE0E0E0)
  }

  public func resolveIsInteractive(_ resolver: ExpressionResolver) -> Bool {
    resolver.resolveNumeric(isInteractive) ?? true
  }

  public func resolveMaxRating(_ resolver: ExpressionResolver) -> Int {
    resolver.resolveNumeric(maxRating) ?? 5
  }

  public func resolveReuseId(_ resolver: ExpressionResolver) -> String? {
    resolver.resolveString(reuseId)
  }

  public func resolveRowSpan(_ resolver: ExpressionResolver) -> Int? {
    resolver.resolveNumeric(rowSpan)
  }

  public func resolveStep(_ resolver: ExpressionResolver) -> Double {
    resolver.resolveNumeric(step) ?? 1
  }

  public func resolveVisibility(_ resolver: ExpressionResolver) -> DivVisibility {
    resolver.resolveEnum(visibility) ?? DivVisibility.visible
  }

  static let alphaValidator: AnyValueValidator<Double> =
    makeValueValidator(valueValidator: { $0 >= 0.0 && $0 <= 1.0 })

  static let columnSpanValidator: AnyValueValidator<Int> =
    makeValueValidator(valueValidator: { $0 >= 0 })

  static let iconSizeValidator: AnyValueValidator<Int> =
    makeValueValidator(valueValidator: { $0 >= 0 })

  static let iconSpacingValidator: AnyValueValidator<Int> =
    makeValueValidator(valueValidator: { $0 >= 0 })

  static let maxRatingValidator: AnyValueValidator<Int> =
    makeValueValidator(valueValidator: { $0 >= 0 })

  static let rowSpanValidator: AnyValueValidator<Int> =
    makeValueValidator(valueValidator: { $0 >= 0 })

  static let transitionTriggersValidator: AnyArrayValueValidator<DivTransitionTrigger> =
    makeArrayValidator(minItems: 1)

  public convenience init(dictionary: [String: Any], context: ParsingContext) throws {
    self.init(
      accessibility: try dictionary.getOptionalField("accessibility", transform: { (dict: [String: Any]) in try DivAccessibility(dictionary: dict, context: context) }),
      activeColor: try dictionary.getOptionalExpressionField("active_color", transform: Color.color(withHexString:), context: context),
      alignmentHorizontal: try dictionary.getOptionalExpressionField("alignment_horizontal", context: context),
      alignmentVertical: try dictionary.getOptionalExpressionField("alignment_vertical", context: context),
      alpha: try dictionary.getOptionalExpressionField("alpha", validator: Self.alphaValidator, context: context),
      animators: try dictionary.getOptionalArray("animators", transform: { (dict: [String: Any]) in try? DivAnimator(dictionary: dict, context: context) }),
      background: try dictionary.getOptionalArray("background", transform: { (dict: [String: Any]) in try? DivBackground(dictionary: dict, context: context) }),
      border: try dictionary.getOptionalField("border", transform: { (dict: [String: Any]) in try DivBorder(dictionary: dict, context: context) }),
      borderColor: try dictionary.getOptionalExpressionField("border_color", transform: Color.color(withHexString:), context: context),
      columnSpan: try dictionary.getOptionalExpressionField("column_span", validator: Self.columnSpanValidator, context: context),
      disabledColor: try dictionary.getOptionalExpressionField("disabled_color", transform: Color.color(withHexString:), context: context),
      disappearActions: try dictionary.getOptionalArray("disappear_actions", transform: { (dict: [String: Any]) in try? DivDisappearAction(dictionary: dict, context: context) }),
      extensions: try dictionary.getOptionalArray("extensions", transform: { (dict: [String: Any]) in try? DivExtension(dictionary: dict, context: context) }),
      focus: try dictionary.getOptionalField("focus", transform: { (dict: [String: Any]) in try DivFocus(dictionary: dict, context: context) }),
      functions: try dictionary.getOptionalArray("functions", transform: { (dict: [String: Any]) in try? DivFunction(dictionary: dict, context: context) }),
      height: try dictionary.getOptionalField("height", transform: { (dict: [String: Any]) in try DivSize(dictionary: dict, context: context) }),
      iconPadding: try dictionary.getOptionalField("icon_padding", transform: { (dict: [String: Any]) in try DivEdgeInsets(dictionary: dict, context: context) }),
      iconSize: try dictionary.getOptionalExpressionField("icon_size", validator: Self.iconSizeValidator, context: context),
      iconSpacing: try dictionary.getOptionalExpressionField("icon_spacing", validator: Self.iconSpacingValidator, context: context),
      id: try dictionary.getOptionalField("id", context: context),
      inactiveColor: try dictionary.getOptionalExpressionField("inactive_color", transform: Color.color(withHexString:), context: context),
      isInteractive: try dictionary.getOptionalExpressionField("is_interactive", context: context),
      layoutProvider: try dictionary.getOptionalField("layout_provider", transform: { (dict: [String: Any]) in try DivLayoutProvider(dictionary: dict, context: context) }),
      margins: try dictionary.getOptionalField("margins", transform: { (dict: [String: Any]) in try DivEdgeInsets(dictionary: dict, context: context) }),
      maxRating: try dictionary.getOptionalExpressionField("max_rating", validator: Self.maxRatingValidator, context: context),
      paddings: try dictionary.getOptionalField("paddings", transform: { (dict: [String: Any]) in try DivEdgeInsets(dictionary: dict, context: context) }),
      ratingChangeActions: try dictionary.getOptionalArray("rating_change_actions", transform: { (dict: [String: Any]) in try? DivAction(dictionary: dict, context: context) }),
      ratingIcon: try dictionary.getOptionalField("rating_icon", transform: { (dict: [String: Any]) in try DivImageBackground(dictionary: dict, context: context) }),
      ratingVariable: try dictionary.getField("rating_variable", context: context),
      reuseId: try dictionary.getOptionalExpressionField("reuse_id", context: context),
      rowSpan: try dictionary.getOptionalExpressionField("row_span", validator: Self.rowSpanValidator, context: context),
      selectedActions: try dictionary.getOptionalArray("selected_actions", transform: { (dict: [String: Any]) in try? DivAction(dictionary: dict, context: context) }),
      step: try dictionary.getOptionalExpressionField("step", context: context),
      tooltips: try dictionary.getOptionalArray("tooltips", transform: { (dict: [String: Any]) in try? DivTooltip(dictionary: dict, context: context) }),
      transform: try dictionary.getOptionalField("transform", transform: { (dict: [String: Any]) in try DivTransform(dictionary: dict, context: context) }),
      transformations: try dictionary.getOptionalArray("transformations", transform: { (dict: [String: Any]) in try? DivTransformation(dictionary: dict, context: context) }),
      transitionChange: try dictionary.getOptionalField("transition_change", transform: { (dict: [String: Any]) in try DivChangeTransition(dictionary: dict, context: context) }),
      transitionIn: try dictionary.getOptionalField("transition_in", transform: { (dict: [String: Any]) in try DivAppearanceTransition(dictionary: dict, context: context) }),
      transitionOut: try dictionary.getOptionalField("transition_out", transform: { (dict: [String: Any]) in try DivAppearanceTransition(dictionary: dict, context: context) }),
      transitionTriggers: try dictionary.getOptionalArray("transition_triggers", validator: Self.transitionTriggersValidator, context: context),
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
    activeColor: Expression<Color>? = nil,
    alignmentHorizontal: Expression<DivAlignmentHorizontal>? = nil,
    alignmentVertical: Expression<DivAlignmentVertical>? = nil,
    alpha: Expression<Double>? = nil,
    animators: [DivAnimator]? = nil,
    background: [DivBackground]? = nil,
    border: DivBorder? = nil,
    borderColor: Expression<Color>? = nil,
    columnSpan: Expression<Int>? = nil,
    disabledColor: Expression<Color>? = nil,
    disappearActions: [DivDisappearAction]? = nil,
    extensions: [DivExtension]? = nil,
    focus: DivFocus? = nil,
    functions: [DivFunction]? = nil,
    height: DivSize? = nil,
    iconPadding: DivEdgeInsets? = nil,
    iconSize: Expression<Int>? = nil,
    iconSpacing: Expression<Int>? = nil,
    id: String? = nil,
    inactiveColor: Expression<Color>? = nil,
    isInteractive: Expression<Bool>? = nil,
    layoutProvider: DivLayoutProvider? = nil,
    margins: DivEdgeInsets? = nil,
    maxRating: Expression<Int>? = nil,
    paddings: DivEdgeInsets? = nil,
    ratingChangeActions: [DivAction]? = nil,
    ratingIcon: DivImageBackground? = nil,
    ratingVariable: String,
    reuseId: Expression<String>? = nil,
    rowSpan: Expression<Int>? = nil,
    selectedActions: [DivAction]? = nil,
    step: Expression<Double>? = nil,
    tooltips: [DivTooltip]? = nil,
    transform: DivTransform? = nil,
    transformations: [DivTransformation]? = nil,
    transitionChange: DivChangeTransition? = nil,
    transitionIn: DivAppearanceTransition? = nil,
    transitionOut: DivAppearanceTransition? = nil,
    transitionTriggers: [DivTransitionTrigger]? = nil,
    variableTriggers: [DivTrigger]? = nil,
    variables: [DivVariable]? = nil,
    visibility: Expression<DivVisibility>? = nil,
    visibilityAction: DivVisibilityAction? = nil,
    visibilityActions: [DivVisibilityAction]? = nil,
    width: DivSize? = nil
  ) {
    self.accessibility = accessibility
    self.activeColor = activeColor ?? .value(Color.colorWithARGBHexCode(0xFFFFC107))
    self.alignmentHorizontal = alignmentHorizontal
    self.alignmentVertical = alignmentVertical
    self.alpha = alpha ?? .value(1.0)
    self.animators = animators
    self.background = background
    self.border = border
    self.borderColor = borderColor
    self.columnSpan = columnSpan
    self.disabledColor = disabledColor ?? .value(Color.colorWithARGBHexCode(0xFFBDBDBD))
    self.disappearActions = disappearActions
    self.extensions = extensions
    self.focus = focus
    self.functions = functions
    self.height = height ?? .divWrapContentSize(DivWrapContentSize())
    self.iconPadding = iconPadding
    self.iconSize = iconSize ?? .value(32)
    self.iconSpacing = iconSpacing ?? .value(4)
    self.id = id
    self.inactiveColor = inactiveColor ?? .value(Color.colorWithARGBHexCode(0xFFE0E0E0))
    self.isInteractive = isInteractive ?? .value(true)
    self.layoutProvider = layoutProvider
    self.margins = margins
    self.maxRating = maxRating ?? .value(5)
    self.paddings = paddings
    self.ratingChangeActions = ratingChangeActions
    self.ratingIcon = ratingIcon
    self.ratingVariable = ratingVariable
    self.reuseId = reuseId
    self.rowSpan = rowSpan
    self.selectedActions = selectedActions
    self.step = step ?? .value(1)
    self.tooltips = tooltips
    self.transform = transform
    self.transformations = transformations
    self.transitionChange = transitionChange
    self.transitionIn = transitionIn
    self.transitionOut = transitionOut
    self.transitionTriggers = transitionTriggers
    self.variableTriggers = variableTriggers
    self.variables = variables
    self.visibility = visibility ?? .value(.visible)
    self.visibilityAction = visibilityAction
    self.visibilityActions = visibilityActions
    self.width = width ?? .divMatchParentSize(DivMatchParentSize())
  }
}

#if DEBUG
extension DivRating: Equatable {
  public static func ==(lhs: DivRating, rhs: DivRating) -> Bool {
    guard
      lhs.accessibility == rhs.accessibility,
      lhs.activeColor == rhs.activeColor,
      lhs.alignmentHorizontal == rhs.alignmentHorizontal
    else {
      return false
    }
    guard
      lhs.alignmentVertical == rhs.alignmentVertical,
      lhs.alpha == rhs.alpha,
      lhs.animators == rhs.animators
    else {
      return false
    }
    guard
      lhs.background == rhs.background,
      lhs.border == rhs.border,
      lhs.borderColor == rhs.borderColor
    else {
      return false
    }
    guard
      lhs.columnSpan == rhs.columnSpan,
      lhs.disabledColor == rhs.disabledColor,
      lhs.disappearActions == rhs.disappearActions
    else {
      return false
    }
    guard
      lhs.extensions == rhs.extensions,
      lhs.focus == rhs.focus,
      lhs.functions == rhs.functions
    else {
      return false
    }
    guard
      lhs.height == rhs.height,
      lhs.iconPadding == rhs.iconPadding,
      lhs.iconSize == rhs.iconSize
    else {
      return false
    }
    guard
      lhs.iconSpacing == rhs.iconSpacing,
      lhs.id == rhs.id,
      lhs.inactiveColor == rhs.inactiveColor
    else {
      return false
    }
    guard
      lhs.isInteractive == rhs.isInteractive,
      lhs.layoutProvider == rhs.layoutProvider,
      lhs.margins == rhs.margins
    else {
      return false
    }
    guard
      lhs.maxRating == rhs.maxRating,
      lhs.paddings == rhs.paddings,
      lhs.ratingChangeActions == rhs.ratingChangeActions
    else {
      return false
    }
    guard
      lhs.ratingIcon == rhs.ratingIcon,
      lhs.ratingVariable == rhs.ratingVariable,
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
      lhs.tooltips == rhs.tooltips,
      lhs.transform == rhs.transform,
      lhs.transformations == rhs.transformations
    else {
      return false
    }
    guard
      lhs.transitionChange == rhs.transitionChange,
      lhs.transitionIn == rhs.transitionIn,
      lhs.transitionOut == rhs.transitionOut
    else {
      return false
    }
    guard
      lhs.transitionTriggers == rhs.transitionTriggers,
      lhs.variableTriggers == rhs.variableTriggers,
      lhs.variables == rhs.variables
    else {
      return false
    }
    guard
      lhs.visibility == rhs.visibility,
      lhs.visibilityAction == rhs.visibilityAction,
      lhs.visibilityActions == rhs.visibilityActions
    else {
      return false
    }
    guard
      lhs.width == rhs.width
    else {
      return false
    }
    return true
  }
}
#endif

extension DivRating: Serializable {
  @_optimize(size)
  public func toDictionary() -> [String: ValidSerializationValue] {
    var result: [String: ValidSerializationValue] = [:]
    result["type"] = Self.type
    result["accessibility"] = accessibility?.toDictionary()
    result["active_color"] = activeColor.toValidSerializationValue()
    result["alignment_horizontal"] = alignmentHorizontal?.toValidSerializationValue()
    result["alignment_vertical"] = alignmentVertical?.toValidSerializationValue()
    result["alpha"] = alpha.toValidSerializationValue()
    result["animators"] = animators?.map { $0.toDictionary() }
    result["background"] = background?.map { $0.toDictionary() }
    result["border"] = border?.toDictionary()
    result["border_color"] = borderColor?.toValidSerializationValue()
    result["column_span"] = columnSpan?.toValidSerializationValue()
    result["disabled_color"] = disabledColor.toValidSerializationValue()
    result["disappear_actions"] = disappearActions?.map { $0.toDictionary() }
    result["extensions"] = extensions?.map { $0.toDictionary() }
    result["focus"] = focus?.toDictionary()
    result["functions"] = functions?.map { $0.toDictionary() }
    result["height"] = height.toDictionary()
    result["icon_padding"] = iconPadding?.toDictionary()
    result["icon_size"] = iconSize.toValidSerializationValue()
    result["icon_spacing"] = iconSpacing.toValidSerializationValue()
    result["id"] = id
    result["inactive_color"] = inactiveColor.toValidSerializationValue()
    result["is_interactive"] = isInteractive.toValidSerializationValue()
    result["layout_provider"] = layoutProvider?.toDictionary()
    result["margins"] = margins?.toDictionary()
    result["max_rating"] = maxRating.toValidSerializationValue()
    result["paddings"] = paddings?.toDictionary()
    result["rating_change_actions"] = ratingChangeActions?.map { $0.toDictionary() }
    result["rating_icon"] = ratingIcon?.toDictionary()
    result["rating_variable"] = ratingVariable
    result["reuse_id"] = reuseId?.toValidSerializationValue()
    result["row_span"] = rowSpan?.toValidSerializationValue()
    result["selected_actions"] = selectedActions?.map { $0.toDictionary() }
    result["step"] = step.toValidSerializationValue()
    result["tooltips"] = tooltips?.map { $0.toDictionary() }
    result["transform"] = transform?.toDictionary()
    result["transformations"] = transformations?.map { $0.toDictionary() }
    result["transition_change"] = transitionChange?.toDictionary()
    result["transition_in"] = transitionIn?.toDictionary()
    result["transition_out"] = transitionOut?.toDictionary()
    result["transition_triggers"] = transitionTriggers?.map { $0.rawValue }
    result["variable_triggers"] = variableTriggers?.map { $0.toDictionary() }
    result["variables"] = variables?.map { $0.toDictionary() }
    result["visibility"] = visibility.toValidSerializationValue()
    result["visibility_action"] = visibilityAction?.toDictionary()
    result["visibility_actions"] = visibilityActions?.map { $0.toDictionary() }
    result["width"] = width.toDictionary()
    return result
  }
}
