// Generated code. Do not modify.

import Foundation
import Serialization
import VGSL

public final class DivBreadcrumb: DivBase, Sendable {
  public final class Crumb: Sendable {
    public let action: DivAction?
    public let title: Expression<String>

    public func resolveTitle(_ resolver: ExpressionResolver) -> String? {
      resolver.resolveString(title)
    }

    public convenience init(dictionary: [String: Any], context: ParsingContext) throws {
      self.init(
        action: try dictionary.getOptionalField("action", transform: { (dict: [String: Any]) in try DivAction(dictionary: dict, context: context) }),
        title: try dictionary.getExpressionField("title", context: context)
      )
    }

    init(
      action: DivAction? = nil,
      title: Expression<String>
    ) {
      self.action = action
      self.title = title
    }
  }

  public final class ItemBuilder: @unchecked Sendable {
    public final class Prototype: Sendable {
      public let action: DivAction?
      public let selector: Expression<Bool> // default value: true
      public let title: Expression<String>

      public func resolveSelector(_ resolver: ExpressionResolver) -> Bool {
        resolver.resolveNumeric(selector) ?? true
      }

      public func resolveTitle(_ resolver: ExpressionResolver) -> String? {
        resolver.resolveString(title)
      }

      public convenience init(dictionary: [String: Any], context: ParsingContext) throws {
        self.init(
          action: try dictionary.getOptionalField("action", transform: { (dict: [String: Any]) in try DivAction(dictionary: dict, context: context) }),
          selector: try dictionary.getOptionalExpressionField("selector", context: context),
          title: try dictionary.getExpressionField("title", context: context)
        )
      }

      init(
        action: DivAction? = nil,
        selector: Expression<Bool>? = nil,
        title: Expression<String>
      ) {
        self.action = action
        self.selector = selector ?? .value(true)
        self.title = title
      }
    }

    public let data: Expression<[Any]>
    public let dataElementName: String // default value: it
    public let prototypes: [Prototype] // at least 1 elements

    public func resolveData(_ resolver: ExpressionResolver) -> [Any]? {
      resolver.resolveArray(data)
    }

    static let prototypesValidator: AnyArrayValueValidator<DivBreadcrumb.ItemBuilder.Prototype> =
      makeArrayValidator(minItems: 1)

    public convenience init(dictionary: [String: Any], context: ParsingContext) throws {
      self.init(
        data: try dictionary.getExpressionField("data", context: context),
        dataElementName: try dictionary.getOptionalField("data_element_name", context: context),
        prototypes: try dictionary.getArray("prototypes", transform: { (dict: [String: Any]) in try? DivBreadcrumb.ItemBuilder.Prototype(dictionary: dict, context: context) }, validator: Self.prototypesValidator, context: context)
      )
    }

    init(
      data: Expression<[Any]>,
      dataElementName: String? = nil,
      prototypes: [Prototype]
    ) {
      self.data = data
      self.dataElementName = dataElementName ?? "it"
      self.prototypes = prototypes
    }
  }

  public static let type: String = "breadcrumb"
  public let accessibility: DivAccessibility?
  public let activeTextColor: Expression<Color>?
  public let alignmentHorizontal: Expression<DivAlignmentHorizontal>?
  public let alignmentVertical: Expression<DivAlignmentVertical>?
  public let alpha: Expression<Double> // constraint: number >= 0.0 && number <= 1.0; default value: 1.0
  public let animators: [DivAnimator]?
  public let background: [DivBackground]?
  public let border: DivBorder?
  public let columnSpan: Expression<Int>? // constraint: number >= 0
  public let crumbs: [Crumb]? // at least 1 elements
  public let disappearActions: [DivDisappearAction]?
  public let extensions: [DivExtension]?
  public let focus: DivFocus?
  public let functions: [DivFunction]?
  public let height: DivSize // default value: .divWrapContentSize(DivWrapContentSize())
  public let id: String?
  public let itemBuilder: ItemBuilder?
  public let itemFontSize: Expression<Int> // constraint: number >= 0; default value: 14
  public let itemTextColor: Expression<Color>?
  public let layoutProvider: DivLayoutProvider?
  public let margins: DivEdgeInsets?
  public let paddings: DivEdgeInsets?
  public let reuseId: Expression<String>?
  public let rowSpan: Expression<Int>? // constraint: number >= 0
  public let selectedActions: [DivAction]?
  public let separator: Expression<String> // default value: /
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

  public func resolveActiveTextColor(_ resolver: ExpressionResolver) -> Color? {
    resolver.resolveColor(activeTextColor)
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

  public func resolveColumnSpan(_ resolver: ExpressionResolver) -> Int? {
    resolver.resolveNumeric(columnSpan)
  }

  public func resolveItemFontSize(_ resolver: ExpressionResolver) -> Int {
    resolver.resolveNumeric(itemFontSize) ?? 14
  }

  public func resolveItemTextColor(_ resolver: ExpressionResolver) -> Color? {
    resolver.resolveColor(itemTextColor)
  }

  public func resolveReuseId(_ resolver: ExpressionResolver) -> String? {
    resolver.resolveString(reuseId)
  }

  public func resolveRowSpan(_ resolver: ExpressionResolver) -> Int? {
    resolver.resolveNumeric(rowSpan)
  }

  public func resolveSeparator(_ resolver: ExpressionResolver) -> String {
    resolver.resolveString(separator) ?? "/"
  }

  public func resolveVisibility(_ resolver: ExpressionResolver) -> DivVisibility {
    resolver.resolveEnum(visibility) ?? DivVisibility.visible
  }

  static let alphaValidator: AnyValueValidator<Double> =
    makeValueValidator(valueValidator: { $0 >= 0.0 && $0 <= 1.0 })

  static let columnSpanValidator: AnyValueValidator<Int> =
    makeValueValidator(valueValidator: { $0 >= 0 })

  static let crumbsValidator: AnyArrayValueValidator<DivBreadcrumb.Crumb> =
    makeArrayValidator(minItems: 1)

  static let itemFontSizeValidator: AnyValueValidator<Int> =
    makeValueValidator(valueValidator: { $0 >= 0 })

  static let rowSpanValidator: AnyValueValidator<Int> =
    makeValueValidator(valueValidator: { $0 >= 0 })

  static let transitionTriggersValidator: AnyArrayValueValidator<DivTransitionTrigger> =
    makeArrayValidator(minItems: 1)

  public convenience init(dictionary: [String: Any], context: ParsingContext) throws {
    self.init(
      accessibility: try dictionary.getOptionalField("accessibility", transform: { (dict: [String: Any]) in try DivAccessibility(dictionary: dict, context: context) }),
      activeTextColor: try dictionary.getOptionalExpressionField("active_text_color", transform: Color.color(withHexString:), context: context),
      alignmentHorizontal: try dictionary.getOptionalExpressionField("alignment_horizontal", context: context),
      alignmentVertical: try dictionary.getOptionalExpressionField("alignment_vertical", context: context),
      alpha: try dictionary.getOptionalExpressionField("alpha", validator: Self.alphaValidator, context: context),
      animators: try dictionary.getOptionalArray("animators", transform: { (dict: [String: Any]) in try? DivAnimator(dictionary: dict, context: context) }),
      background: try dictionary.getOptionalArray("background", transform: { (dict: [String: Any]) in try? DivBackground(dictionary: dict, context: context) }),
      border: try dictionary.getOptionalField("border", transform: { (dict: [String: Any]) in try DivBorder(dictionary: dict, context: context) }),
      columnSpan: try dictionary.getOptionalExpressionField("column_span", validator: Self.columnSpanValidator, context: context),
      crumbs: try dictionary.getOptionalArray("crumbs", transform: { (dict: [String: Any]) in try? DivBreadcrumb.Crumb(dictionary: dict, context: context) }, validator: Self.crumbsValidator),
      disappearActions: try dictionary.getOptionalArray("disappear_actions", transform: { (dict: [String: Any]) in try? DivDisappearAction(dictionary: dict, context: context) }),
      extensions: try dictionary.getOptionalArray("extensions", transform: { (dict: [String: Any]) in try? DivExtension(dictionary: dict, context: context) }),
      focus: try dictionary.getOptionalField("focus", transform: { (dict: [String: Any]) in try DivFocus(dictionary: dict, context: context) }),
      functions: try dictionary.getOptionalArray("functions", transform: { (dict: [String: Any]) in try? DivFunction(dictionary: dict, context: context) }),
      height: try dictionary.getOptionalField("height", transform: { (dict: [String: Any]) in try DivSize(dictionary: dict, context: context) }),
      id: try dictionary.getOptionalField("id", context: context),
      itemBuilder: try dictionary.getOptionalField("item_builder", transform: { (dict: [String: Any]) in try DivBreadcrumb.ItemBuilder(dictionary: dict, context: context) }),
      itemFontSize: try dictionary.getOptionalExpressionField("item_font_size", validator: Self.itemFontSizeValidator, context: context),
      itemTextColor: try dictionary.getOptionalExpressionField("item_text_color", transform: Color.color(withHexString:), context: context),
      layoutProvider: try dictionary.getOptionalField("layout_provider", transform: { (dict: [String: Any]) in try DivLayoutProvider(dictionary: dict, context: context) }),
      margins: try dictionary.getOptionalField("margins", transform: { (dict: [String: Any]) in try DivEdgeInsets(dictionary: dict, context: context) }),
      paddings: try dictionary.getOptionalField("paddings", transform: { (dict: [String: Any]) in try DivEdgeInsets(dictionary: dict, context: context) }),
      reuseId: try dictionary.getOptionalExpressionField("reuse_id", context: context),
      rowSpan: try dictionary.getOptionalExpressionField("row_span", validator: Self.rowSpanValidator, context: context),
      selectedActions: try dictionary.getOptionalArray("selected_actions", transform: { (dict: [String: Any]) in try? DivAction(dictionary: dict, context: context) }),
      separator: try dictionary.getOptionalExpressionField("separator", context: context),
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
    activeTextColor: Expression<Color>? = nil,
    alignmentHorizontal: Expression<DivAlignmentHorizontal>? = nil,
    alignmentVertical: Expression<DivAlignmentVertical>? = nil,
    alpha: Expression<Double>? = nil,
    animators: [DivAnimator]? = nil,
    background: [DivBackground]? = nil,
    border: DivBorder? = nil,
    columnSpan: Expression<Int>? = nil,
    crumbs: [Crumb]? = nil,
    disappearActions: [DivDisappearAction]? = nil,
    extensions: [DivExtension]? = nil,
    focus: DivFocus? = nil,
    functions: [DivFunction]? = nil,
    height: DivSize? = nil,
    id: String? = nil,
    itemBuilder: ItemBuilder? = nil,
    itemFontSize: Expression<Int>? = nil,
    itemTextColor: Expression<Color>? = nil,
    layoutProvider: DivLayoutProvider? = nil,
    margins: DivEdgeInsets? = nil,
    paddings: DivEdgeInsets? = nil,
    reuseId: Expression<String>? = nil,
    rowSpan: Expression<Int>? = nil,
    selectedActions: [DivAction]? = nil,
    separator: Expression<String>? = nil,
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
    self.activeTextColor = activeTextColor
    self.alignmentHorizontal = alignmentHorizontal
    self.alignmentVertical = alignmentVertical
    self.alpha = alpha ?? .value(1.0)
    self.animators = animators
    self.background = background
    self.border = border
    self.columnSpan = columnSpan
    self.crumbs = crumbs
    self.disappearActions = disappearActions
    self.extensions = extensions
    self.focus = focus
    self.functions = functions
    self.height = height ?? .divWrapContentSize(DivWrapContentSize())
    self.id = id
    self.itemBuilder = itemBuilder
    self.itemFontSize = itemFontSize ?? .value(14)
    self.itemTextColor = itemTextColor
    self.layoutProvider = layoutProvider
    self.margins = margins
    self.paddings = paddings
    self.reuseId = reuseId
    self.rowSpan = rowSpan
    self.selectedActions = selectedActions
    self.separator = separator ?? .value("/")
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
extension DivBreadcrumb: Equatable {
  public static func ==(lhs: DivBreadcrumb, rhs: DivBreadcrumb) -> Bool {
    guard
      lhs.accessibility == rhs.accessibility,
      lhs.activeTextColor == rhs.activeTextColor,
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
      lhs.columnSpan == rhs.columnSpan
    else {
      return false
    }
    guard
      lhs.crumbs == rhs.crumbs,
      lhs.disappearActions == rhs.disappearActions,
      lhs.extensions == rhs.extensions
    else {
      return false
    }
    guard
      lhs.focus == rhs.focus,
      lhs.functions == rhs.functions,
      lhs.height == rhs.height
    else {
      return false
    }
    guard
      lhs.id == rhs.id,
      lhs.itemBuilder == rhs.itemBuilder,
      lhs.itemFontSize == rhs.itemFontSize
    else {
      return false
    }
    guard
      lhs.itemTextColor == rhs.itemTextColor,
      lhs.layoutProvider == rhs.layoutProvider,
      lhs.margins == rhs.margins
    else {
      return false
    }
    guard
      lhs.paddings == rhs.paddings,
      lhs.reuseId == rhs.reuseId,
      lhs.rowSpan == rhs.rowSpan
    else {
      return false
    }
    guard
      lhs.selectedActions == rhs.selectedActions,
      lhs.separator == rhs.separator,
      lhs.tooltips == rhs.tooltips
    else {
      return false
    }
    guard
      lhs.transform == rhs.transform,
      lhs.transformations == rhs.transformations,
      lhs.transitionChange == rhs.transitionChange
    else {
      return false
    }
    guard
      lhs.transitionIn == rhs.transitionIn,
      lhs.transitionOut == rhs.transitionOut,
      lhs.transitionTriggers == rhs.transitionTriggers
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

extension DivBreadcrumb: Serializable {
  @_optimize(size)
  public func toDictionary() -> [String: ValidSerializationValue] {
    var result: [String: ValidSerializationValue] = [:]
    result["type"] = Self.type
    result["accessibility"] = accessibility?.toDictionary()
    result["active_text_color"] = activeTextColor?.toValidSerializationValue()
    result["alignment_horizontal"] = alignmentHorizontal?.toValidSerializationValue()
    result["alignment_vertical"] = alignmentVertical?.toValidSerializationValue()
    result["alpha"] = alpha.toValidSerializationValue()
    result["animators"] = animators?.map { $0.toDictionary() }
    result["background"] = background?.map { $0.toDictionary() }
    result["border"] = border?.toDictionary()
    result["column_span"] = columnSpan?.toValidSerializationValue()
    result["crumbs"] = crumbs?.map { $0.toDictionary() }
    result["disappear_actions"] = disappearActions?.map { $0.toDictionary() }
    result["extensions"] = extensions?.map { $0.toDictionary() }
    result["focus"] = focus?.toDictionary()
    result["functions"] = functions?.map { $0.toDictionary() }
    result["height"] = height.toDictionary()
    result["id"] = id
    result["item_builder"] = itemBuilder?.toDictionary()
    result["item_font_size"] = itemFontSize.toValidSerializationValue()
    result["item_text_color"] = itemTextColor?.toValidSerializationValue()
    result["layout_provider"] = layoutProvider?.toDictionary()
    result["margins"] = margins?.toDictionary()
    result["paddings"] = paddings?.toDictionary()
    result["reuse_id"] = reuseId?.toValidSerializationValue()
    result["row_span"] = rowSpan?.toValidSerializationValue()
    result["selected_actions"] = selectedActions?.map { $0.toDictionary() }
    result["separator"] = separator.toValidSerializationValue()
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

#if DEBUG
// WARNING: this == is incomplete because of [String: Any] in class fields
extension DivBreadcrumb.ItemBuilder: Equatable {
  public static func ==(lhs: DivBreadcrumb.ItemBuilder, rhs: DivBreadcrumb.ItemBuilder) -> Bool {
    guard
      lhs.dataElementName == rhs.dataElementName,
      lhs.prototypes == rhs.prototypes
    else {
      return false
    }
    return true
  }
}
#endif

#if DEBUG
extension DivBreadcrumb.Crumb: Equatable {
  public static func ==(lhs: DivBreadcrumb.Crumb, rhs: DivBreadcrumb.Crumb) -> Bool {
    guard
      lhs.action == rhs.action,
      lhs.title == rhs.title
    else {
      return false
    }
    return true
  }
}
#endif

#if DEBUG
extension DivBreadcrumb.ItemBuilder.Prototype: Equatable {
  public static func ==(lhs: DivBreadcrumb.ItemBuilder.Prototype, rhs: DivBreadcrumb.ItemBuilder.Prototype) -> Bool {
    guard
      lhs.action == rhs.action,
      lhs.selector == rhs.selector,
      lhs.title == rhs.title
    else {
      return false
    }
    return true
  }
}
#endif

extension DivBreadcrumb.Crumb: Serializable {
  @_optimize(size)
  public func toDictionary() -> [String: ValidSerializationValue] {
    var result: [String: ValidSerializationValue] = [:]
    result["action"] = action?.toDictionary()
    result["title"] = title.toValidSerializationValue()
    return result
  }
}

extension DivBreadcrumb.ItemBuilder.Prototype: Serializable {
  @_optimize(size)
  public func toDictionary() -> [String: ValidSerializationValue] {
    var result: [String: ValidSerializationValue] = [:]
    result["action"] = action?.toDictionary()
    result["selector"] = selector.toValidSerializationValue()
    result["title"] = title.toValidSerializationValue()
    return result
  }
}

extension DivBreadcrumb.ItemBuilder: Serializable {
  @_optimize(size)
  public func toDictionary() -> [String: ValidSerializationValue] {
    var result: [String: ValidSerializationValue] = [:]
    result["data"] = data.toValidSerializationValue()
    result["data_element_name"] = dataElementName
    result["prototypes"] = prototypes.map { $0.toDictionary() }
    return result
  }
}
