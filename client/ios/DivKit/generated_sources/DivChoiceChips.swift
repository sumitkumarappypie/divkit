// Generated code. Do not modify.

import Foundation
import Serialization
import VGSL

public final class DivChoiceChips: DivBase, Sendable {
  @frozen
  public enum ChipStyle: String, CaseIterable, Sendable {
    case outlined = "outlined"
    case filled = "filled"
    case elevated = "elevated"
  }

  @frozen
  public enum LayoutMode: String, CaseIterable, Sendable {
    case wrap = "wrap"
    case scroll = "scroll"
  }

  @frozen
  public enum SelectionMode: String, CaseIterable, Sendable {
    case single = "single"
    case multi = "multi"
  }

  public static let type: String = "choice_chips"
  public let accessibility: DivAccessibility?
  public let alignmentHorizontal: Expression<DivAlignmentHorizontal>?
  public let alignmentVertical: Expression<DivAlignmentVertical>?
  public let alpha: Expression<Double> // constraint: number >= 0.0 && number <= 1.0; default value: 1.0
  public let animators: [DivAnimator]?
  public let background: [DivBackground]?
  public let border: DivBorder?
  public let chipHeight: Expression<Int> // constraint: number >= 0; default value: 36
  public let chipPadding: DivEdgeInsets?
  public let chipSpacing: Expression<Int> // constraint: number >= 0; default value: 8
  public let chipStyle: Expression<ChipStyle> // default value: outlined
  public let columnSpan: Expression<Int>? // constraint: number >= 0
  public let cornerRadius: Expression<Int> // constraint: number >= 0; default value: 16
  public let defaultBackgroundColor: Expression<Color>?
  public let defaultBorderColor: Expression<Color>?
  public let defaultTextColor: Expression<Color>?
  public let disabledBackgroundColor: Expression<Color>?
  public let disabledBorderColor: Expression<Color>?
  public let disabledTextColor: Expression<Color>?
  public let disappearActions: [DivDisappearAction]?
  public let extensions: [DivExtension]?
  public let focus: DivFocus?
  public let fontFamily: Expression<String>?
  public let fontSize: Expression<Int> // constraint: number >= 0; default value: 14
  public let fontWeight: Expression<DivFontWeight>?
  public let functions: [DivFunction]?
  public let height: DivSize // default value: .divWrapContentSize(DivWrapContentSize())
  public let iconSize: Expression<Int> // constraint: number >= 0; default value: 18
  public let id: String?
  public let chipItems: [DivChoiceChipsItem]?
  public let itemsVariable: String?
  public let layoutMode: Expression<LayoutMode> // default value: wrap
  public let layoutProvider: DivLayoutProvider?
  public let margins: DivEdgeInsets?
  public let paddings: DivEdgeInsets?
  public let reuseId: Expression<String>?
  public let rowSpacing: Expression<Int> // constraint: number >= 0; default value: 8
  public let rowSpan: Expression<Int>? // constraint: number >= 0
  public let selectedActions: [DivAction]?
  public let selectedBackgroundColor: Expression<Color>?
  public let selectedBorderColor: Expression<Color>?
  public let selectedTextColor: Expression<Color>?
  public let selectedValueVariable: String
  public let selectionActions: [DivAction]?
  public let selectionMode: Expression<SelectionMode> // default value: single
  public let showCheckmark: Expression<Bool> // default value: false
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

  public func resolveAlignmentHorizontal(_ resolver: ExpressionResolver) -> DivAlignmentHorizontal? {
    resolver.resolveEnum(alignmentHorizontal)
  }

  public func resolveAlignmentVertical(_ resolver: ExpressionResolver) -> DivAlignmentVertical? {
    resolver.resolveEnum(alignmentVertical)
  }

  public func resolveAlpha(_ resolver: ExpressionResolver) -> Double {
    resolver.resolveNumeric(alpha) ?? 1.0
  }

  public func resolveChipHeight(_ resolver: ExpressionResolver) -> Int {
    resolver.resolveNumeric(chipHeight) ?? 36
  }

  public func resolveChipSpacing(_ resolver: ExpressionResolver) -> Int {
    resolver.resolveNumeric(chipSpacing) ?? 8
  }

  public func resolveChipStyle(_ resolver: ExpressionResolver) -> ChipStyle {
    resolver.resolveEnum(chipStyle) ?? ChipStyle.outlined
  }

  public func resolveColumnSpan(_ resolver: ExpressionResolver) -> Int? {
    resolver.resolveNumeric(columnSpan)
  }

  public func resolveCornerRadius(_ resolver: ExpressionResolver) -> Int {
    resolver.resolveNumeric(cornerRadius) ?? 16
  }

  public func resolveDefaultBackgroundColor(_ resolver: ExpressionResolver) -> Color? {
    resolver.resolveColor(defaultBackgroundColor)
  }

  public func resolveDefaultBorderColor(_ resolver: ExpressionResolver) -> Color? {
    resolver.resolveColor(defaultBorderColor)
  }

  public func resolveDefaultTextColor(_ resolver: ExpressionResolver) -> Color? {
    resolver.resolveColor(defaultTextColor)
  }

  public func resolveDisabledBackgroundColor(_ resolver: ExpressionResolver) -> Color? {
    resolver.resolveColor(disabledBackgroundColor)
  }

  public func resolveDisabledBorderColor(_ resolver: ExpressionResolver) -> Color? {
    resolver.resolveColor(disabledBorderColor)
  }

  public func resolveDisabledTextColor(_ resolver: ExpressionResolver) -> Color? {
    resolver.resolveColor(disabledTextColor)
  }

  public func resolveFontFamily(_ resolver: ExpressionResolver) -> String? {
    resolver.resolveString(fontFamily)
  }

  public func resolveFontSize(_ resolver: ExpressionResolver) -> Int {
    resolver.resolveNumeric(fontSize) ?? 14
  }

  public func resolveFontWeight(_ resolver: ExpressionResolver) -> DivFontWeight? {
    resolver.resolveEnum(fontWeight)
  }

  public func resolveIconSize(_ resolver: ExpressionResolver) -> Int {
    resolver.resolveNumeric(iconSize) ?? 18
  }

  public func resolveLayoutMode(_ resolver: ExpressionResolver) -> LayoutMode {
    resolver.resolveEnum(layoutMode) ?? LayoutMode.wrap
  }

  public func resolveReuseId(_ resolver: ExpressionResolver) -> String? {
    resolver.resolveString(reuseId)
  }

  public func resolveRowSpacing(_ resolver: ExpressionResolver) -> Int {
    resolver.resolveNumeric(rowSpacing) ?? 8
  }

  public func resolveRowSpan(_ resolver: ExpressionResolver) -> Int? {
    resolver.resolveNumeric(rowSpan)
  }

  public func resolveSelectedBackgroundColor(_ resolver: ExpressionResolver) -> Color? {
    resolver.resolveColor(selectedBackgroundColor)
  }

  public func resolveSelectedBorderColor(_ resolver: ExpressionResolver) -> Color? {
    resolver.resolveColor(selectedBorderColor)
  }

  public func resolveSelectedTextColor(_ resolver: ExpressionResolver) -> Color? {
    resolver.resolveColor(selectedTextColor)
  }

  public func resolveSelectionMode(_ resolver: ExpressionResolver) -> SelectionMode {
    resolver.resolveEnum(selectionMode) ?? SelectionMode.single
  }

  public func resolveShowCheckmark(_ resolver: ExpressionResolver) -> Bool {
    resolver.resolveNumeric(showCheckmark) ?? false
  }

  public func resolveVisibility(_ resolver: ExpressionResolver) -> DivVisibility {
    resolver.resolveEnum(visibility) ?? DivVisibility.visible
  }

  static let alphaValidator: AnyValueValidator<Double> =
    makeValueValidator(valueValidator: { $0 >= 0.0 && $0 <= 1.0 })

  static let chipHeightValidator: AnyValueValidator<Int> =
    makeValueValidator(valueValidator: { $0 >= 0 })

  static let chipSpacingValidator: AnyValueValidator<Int> =
    makeValueValidator(valueValidator: { $0 >= 0 })

  static let columnSpanValidator: AnyValueValidator<Int> =
    makeValueValidator(valueValidator: { $0 >= 0 })

  static let cornerRadiusValidator: AnyValueValidator<Int> =
    makeValueValidator(valueValidator: { $0 >= 0 })

  static let fontSizeValidator: AnyValueValidator<Int> =
    makeValueValidator(valueValidator: { $0 >= 0 })

  static let iconSizeValidator: AnyValueValidator<Int> =
    makeValueValidator(valueValidator: { $0 >= 0 })

  static let rowSpacingValidator: AnyValueValidator<Int> =
    makeValueValidator(valueValidator: { $0 >= 0 })

  static let rowSpanValidator: AnyValueValidator<Int> =
    makeValueValidator(valueValidator: { $0 >= 0 })

  static let transitionTriggersValidator: AnyArrayValueValidator<DivTransitionTrigger> =
    makeArrayValidator(minItems: 1)

  public convenience init(dictionary: [String: Any], context: ParsingContext) throws {
    self.init(
      accessibility: try dictionary.getOptionalField("accessibility", transform: { (dict: [String: Any]) in try DivAccessibility(dictionary: dict, context: context) }),
      alignmentHorizontal: try dictionary.getOptionalExpressionField("alignment_horizontal", context: context),
      alignmentVertical: try dictionary.getOptionalExpressionField("alignment_vertical", context: context),
      alpha: try dictionary.getOptionalExpressionField("alpha", validator: Self.alphaValidator, context: context),
      animators: try dictionary.getOptionalArray("animators", transform: { (dict: [String: Any]) in try? DivAnimator(dictionary: dict, context: context) }),
      background: try dictionary.getOptionalArray("background", transform: { (dict: [String: Any]) in try? DivBackground(dictionary: dict, context: context) }),
      border: try dictionary.getOptionalField("border", transform: { (dict: [String: Any]) in try DivBorder(dictionary: dict, context: context) }),
      chipHeight: try dictionary.getOptionalExpressionField("chip_height", validator: Self.chipHeightValidator, context: context),
      chipPadding: try dictionary.getOptionalField("chip_padding", transform: { (dict: [String: Any]) in try DivEdgeInsets(dictionary: dict, context: context) }),
      chipSpacing: try dictionary.getOptionalExpressionField("chip_spacing", validator: Self.chipSpacingValidator, context: context),
      chipStyle: try dictionary.getOptionalExpressionField("chip_style", context: context),
      columnSpan: try dictionary.getOptionalExpressionField("column_span", validator: Self.columnSpanValidator, context: context),
      cornerRadius: try dictionary.getOptionalExpressionField("corner_radius", validator: Self.cornerRadiusValidator, context: context),
      defaultBackgroundColor: try dictionary.getOptionalExpressionField("default_background_color", transform: Color.color(withHexString:), context: context),
      defaultBorderColor: try dictionary.getOptionalExpressionField("default_border_color", transform: Color.color(withHexString:), context: context),
      defaultTextColor: try dictionary.getOptionalExpressionField("default_text_color", transform: Color.color(withHexString:), context: context),
      disabledBackgroundColor: try dictionary.getOptionalExpressionField("disabled_background_color", transform: Color.color(withHexString:), context: context),
      disabledBorderColor: try dictionary.getOptionalExpressionField("disabled_border_color", transform: Color.color(withHexString:), context: context),
      disabledTextColor: try dictionary.getOptionalExpressionField("disabled_text_color", transform: Color.color(withHexString:), context: context),
      disappearActions: try dictionary.getOptionalArray("disappear_actions", transform: { (dict: [String: Any]) in try? DivDisappearAction(dictionary: dict, context: context) }),
      extensions: try dictionary.getOptionalArray("extensions", transform: { (dict: [String: Any]) in try? DivExtension(dictionary: dict, context: context) }),
      focus: try dictionary.getOptionalField("focus", transform: { (dict: [String: Any]) in try DivFocus(dictionary: dict, context: context) }),
      fontFamily: try dictionary.getOptionalExpressionField("font_family", context: context),
      fontSize: try dictionary.getOptionalExpressionField("font_size", validator: Self.fontSizeValidator, context: context),
      fontWeight: try dictionary.getOptionalExpressionField("font_weight", context: context),
      functions: try dictionary.getOptionalArray("functions", transform: { (dict: [String: Any]) in try? DivFunction(dictionary: dict, context: context) }),
      height: try dictionary.getOptionalField("height", transform: { (dict: [String: Any]) in try DivSize(dictionary: dict, context: context) }),
      iconSize: try dictionary.getOptionalExpressionField("icon_size", validator: Self.iconSizeValidator, context: context),
      id: try dictionary.getOptionalField("id", context: context),
      chipItems: try dictionary.getOptionalArray("chip_items", transform: { (dict: [String: Any]) in try? DivChoiceChipsItem(dictionary: dict, context: context) }),
      itemsVariable: try dictionary.getOptionalField("items_variable", context: context),
      layoutMode: try dictionary.getOptionalExpressionField("layout_mode", context: context),
      layoutProvider: try dictionary.getOptionalField("layout_provider", transform: { (dict: [String: Any]) in try DivLayoutProvider(dictionary: dict, context: context) }),
      margins: try dictionary.getOptionalField("margins", transform: { (dict: [String: Any]) in try DivEdgeInsets(dictionary: dict, context: context) }),
      paddings: try dictionary.getOptionalField("paddings", transform: { (dict: [String: Any]) in try DivEdgeInsets(dictionary: dict, context: context) }),
      reuseId: try dictionary.getOptionalExpressionField("reuse_id", context: context),
      rowSpacing: try dictionary.getOptionalExpressionField("row_spacing", validator: Self.rowSpacingValidator, context: context),
      rowSpan: try dictionary.getOptionalExpressionField("row_span", validator: Self.rowSpanValidator, context: context),
      selectedActions: try dictionary.getOptionalArray("selected_actions", transform: { (dict: [String: Any]) in try? DivAction(dictionary: dict, context: context) }),
      selectedBackgroundColor: try dictionary.getOptionalExpressionField("selected_background_color", transform: Color.color(withHexString:), context: context),
      selectedBorderColor: try dictionary.getOptionalExpressionField("selected_border_color", transform: Color.color(withHexString:), context: context),
      selectedTextColor: try dictionary.getOptionalExpressionField("selected_text_color", transform: Color.color(withHexString:), context: context),
      selectedValueVariable: try dictionary.getField("selected_value_variable", context: context),
      selectionActions: try dictionary.getOptionalArray("selection_actions", transform: { (dict: [String: Any]) in try? DivAction(dictionary: dict, context: context) }),
      selectionMode: try dictionary.getOptionalExpressionField("selection_mode", context: context),
      showCheckmark: try dictionary.getOptionalExpressionField("show_checkmark", context: context),
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
    alignmentHorizontal: Expression<DivAlignmentHorizontal>? = nil,
    alignmentVertical: Expression<DivAlignmentVertical>? = nil,
    alpha: Expression<Double>? = nil,
    animators: [DivAnimator]? = nil,
    background: [DivBackground]? = nil,
    border: DivBorder? = nil,
    chipHeight: Expression<Int>? = nil,
    chipPadding: DivEdgeInsets? = nil,
    chipSpacing: Expression<Int>? = nil,
    chipStyle: Expression<ChipStyle>? = nil,
    columnSpan: Expression<Int>? = nil,
    cornerRadius: Expression<Int>? = nil,
    defaultBackgroundColor: Expression<Color>? = nil,
    defaultBorderColor: Expression<Color>? = nil,
    defaultTextColor: Expression<Color>? = nil,
    disabledBackgroundColor: Expression<Color>? = nil,
    disabledBorderColor: Expression<Color>? = nil,
    disabledTextColor: Expression<Color>? = nil,
    disappearActions: [DivDisappearAction]? = nil,
    extensions: [DivExtension]? = nil,
    focus: DivFocus? = nil,
    fontFamily: Expression<String>? = nil,
    fontSize: Expression<Int>? = nil,
    fontWeight: Expression<DivFontWeight>? = nil,
    functions: [DivFunction]? = nil,
    height: DivSize? = nil,
    iconSize: Expression<Int>? = nil,
    id: String? = nil,
    chipItems: [DivChoiceChipsItem]? = nil,
    itemsVariable: String? = nil,
    layoutMode: Expression<LayoutMode>? = nil,
    layoutProvider: DivLayoutProvider? = nil,
    margins: DivEdgeInsets? = nil,
    paddings: DivEdgeInsets? = nil,
    reuseId: Expression<String>? = nil,
    rowSpacing: Expression<Int>? = nil,
    rowSpan: Expression<Int>? = nil,
    selectedActions: [DivAction]? = nil,
    selectedBackgroundColor: Expression<Color>? = nil,
    selectedBorderColor: Expression<Color>? = nil,
    selectedTextColor: Expression<Color>? = nil,
    selectedValueVariable: String,
    selectionActions: [DivAction]? = nil,
    selectionMode: Expression<SelectionMode>? = nil,
    showCheckmark: Expression<Bool>? = nil,
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
    self.alignmentHorizontal = alignmentHorizontal
    self.alignmentVertical = alignmentVertical
    self.alpha = alpha ?? .value(1.0)
    self.animators = animators
    self.background = background
    self.border = border
    self.chipHeight = chipHeight ?? .value(36)
    self.chipPadding = chipPadding
    self.chipSpacing = chipSpacing ?? .value(8)
    self.chipStyle = chipStyle ?? .value(.outlined)
    self.columnSpan = columnSpan
    self.cornerRadius = cornerRadius ?? .value(16)
    self.defaultBackgroundColor = defaultBackgroundColor
    self.defaultBorderColor = defaultBorderColor
    self.defaultTextColor = defaultTextColor
    self.disabledBackgroundColor = disabledBackgroundColor
    self.disabledBorderColor = disabledBorderColor
    self.disabledTextColor = disabledTextColor
    self.disappearActions = disappearActions
    self.extensions = extensions
    self.focus = focus
    self.fontFamily = fontFamily
    self.fontSize = fontSize ?? .value(14)
    self.fontWeight = fontWeight
    self.functions = functions
    self.height = height ?? .divWrapContentSize(DivWrapContentSize())
    self.iconSize = iconSize ?? .value(18)
    self.id = id
    self.chipItems = chipItems
    self.itemsVariable = itemsVariable
    self.layoutMode = layoutMode ?? .value(.wrap)
    self.layoutProvider = layoutProvider
    self.margins = margins
    self.paddings = paddings
    self.reuseId = reuseId
    self.rowSpacing = rowSpacing ?? .value(8)
    self.rowSpan = rowSpan
    self.selectedActions = selectedActions
    self.selectedBackgroundColor = selectedBackgroundColor
    self.selectedBorderColor = selectedBorderColor
    self.selectedTextColor = selectedTextColor
    self.selectedValueVariable = selectedValueVariable
    self.selectionActions = selectionActions
    self.selectionMode = selectionMode ?? .value(.single)
    self.showCheckmark = showCheckmark ?? .value(false)
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
extension DivChoiceChips: Equatable {
  public static func ==(lhs: DivChoiceChips, rhs: DivChoiceChips) -> Bool {
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
      lhs.border == rhs.border,
      lhs.chipHeight == rhs.chipHeight,
      lhs.chipPadding == rhs.chipPadding
    else {
      return false
    }
    guard
      lhs.chipSpacing == rhs.chipSpacing,
      lhs.chipStyle == rhs.chipStyle,
      lhs.columnSpan == rhs.columnSpan
    else {
      return false
    }
    guard
      lhs.cornerRadius == rhs.cornerRadius,
      lhs.defaultBackgroundColor == rhs.defaultBackgroundColor,
      lhs.defaultBorderColor == rhs.defaultBorderColor
    else {
      return false
    }
    guard
      lhs.defaultTextColor == rhs.defaultTextColor,
      lhs.disabledBackgroundColor == rhs.disabledBackgroundColor,
      lhs.disabledBorderColor == rhs.disabledBorderColor
    else {
      return false
    }
    guard
      lhs.disabledTextColor == rhs.disabledTextColor,
      lhs.disappearActions == rhs.disappearActions,
      lhs.extensions == rhs.extensions
    else {
      return false
    }
    guard
      lhs.focus == rhs.focus,
      lhs.fontFamily == rhs.fontFamily,
      lhs.fontSize == rhs.fontSize
    else {
      return false
    }
    guard
      lhs.fontWeight == rhs.fontWeight,
      lhs.functions == rhs.functions,
      lhs.height == rhs.height
    else {
      return false
    }
    guard
      lhs.iconSize == rhs.iconSize,
      lhs.id == rhs.id,
      lhs.chipItems == rhs.chipItems
    else {
      return false
    }
    guard
      lhs.itemsVariable == rhs.itemsVariable,
      lhs.layoutMode == rhs.layoutMode,
      lhs.layoutProvider == rhs.layoutProvider
    else {
      return false
    }
    guard
      lhs.margins == rhs.margins,
      lhs.paddings == rhs.paddings,
      lhs.reuseId == rhs.reuseId
    else {
      return false
    }
    guard
      lhs.rowSpacing == rhs.rowSpacing,
      lhs.rowSpan == rhs.rowSpan,
      lhs.selectedActions == rhs.selectedActions
    else {
      return false
    }
    guard
      lhs.selectedBackgroundColor == rhs.selectedBackgroundColor,
      lhs.selectedBorderColor == rhs.selectedBorderColor,
      lhs.selectedTextColor == rhs.selectedTextColor
    else {
      return false
    }
    guard
      lhs.selectedValueVariable == rhs.selectedValueVariable,
      lhs.selectionActions == rhs.selectionActions,
      lhs.selectionMode == rhs.selectionMode
    else {
      return false
    }
    guard
      lhs.showCheckmark == rhs.showCheckmark,
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
      lhs.variableTriggers == rhs.variableTriggers
    else {
      return false
    }
    guard
      lhs.variables == rhs.variables,
      lhs.visibility == rhs.visibility,
      lhs.visibilityAction == rhs.visibilityAction
    else {
      return false
    }
    guard
      lhs.visibilityActions == rhs.visibilityActions,
      lhs.width == rhs.width
    else {
      return false
    }
    return true
  }
}
#endif

extension DivChoiceChips: Serializable {
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
    result["border"] = border?.toDictionary()
    result["chip_height"] = chipHeight.toValidSerializationValue()
    result["chip_padding"] = chipPadding?.toDictionary()
    result["chip_spacing"] = chipSpacing.toValidSerializationValue()
    result["chip_style"] = chipStyle.toValidSerializationValue()
    result["column_span"] = columnSpan?.toValidSerializationValue()
    result["corner_radius"] = cornerRadius.toValidSerializationValue()
    result["default_background_color"] = defaultBackgroundColor?.toValidSerializationValue()
    result["default_border_color"] = defaultBorderColor?.toValidSerializationValue()
    result["default_text_color"] = defaultTextColor?.toValidSerializationValue()
    result["disabled_background_color"] = disabledBackgroundColor?.toValidSerializationValue()
    result["disabled_border_color"] = disabledBorderColor?.toValidSerializationValue()
    result["disabled_text_color"] = disabledTextColor?.toValidSerializationValue()
    result["disappear_actions"] = disappearActions?.map { $0.toDictionary() }
    result["extensions"] = extensions?.map { $0.toDictionary() }
    result["focus"] = focus?.toDictionary()
    result["font_family"] = fontFamily?.toValidSerializationValue()
    result["font_size"] = fontSize.toValidSerializationValue()
    result["font_weight"] = fontWeight?.toValidSerializationValue()
    result["functions"] = functions?.map { $0.toDictionary() }
    result["height"] = height.toDictionary()
    result["icon_size"] = iconSize.toValidSerializationValue()
    result["id"] = id
    result["chip_items"] = chipItems?.map { $0.toDictionary() }
    result["items_variable"] = itemsVariable
    result["layout_mode"] = layoutMode.toValidSerializationValue()
    result["layout_provider"] = layoutProvider?.toDictionary()
    result["margins"] = margins?.toDictionary()
    result["paddings"] = paddings?.toDictionary()
    result["reuse_id"] = reuseId?.toValidSerializationValue()
    result["row_spacing"] = rowSpacing.toValidSerializationValue()
    result["row_span"] = rowSpan?.toValidSerializationValue()
    result["selected_actions"] = selectedActions?.map { $0.toDictionary() }
    result["selected_background_color"] = selectedBackgroundColor?.toValidSerializationValue()
    result["selected_border_color"] = selectedBorderColor?.toValidSerializationValue()
    result["selected_text_color"] = selectedTextColor?.toValidSerializationValue()
    result["selected_value_variable"] = selectedValueVariable
    result["selection_actions"] = selectionActions?.map { $0.toDictionary() }
    result["selection_mode"] = selectionMode.toValidSerializationValue()
    result["show_checkmark"] = showCheckmark.toValidSerializationValue()
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
