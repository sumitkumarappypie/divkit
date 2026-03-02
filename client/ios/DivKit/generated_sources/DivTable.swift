// Generated code. Do not modify.

import Foundation
import Serialization
import VGSL

public final class DivTable: DivBase, Sendable {
  public final class Column: Sendable {
    public let contentAlignmentHorizontal: Expression<DivAlignmentHorizontal>?
    public let contentAlignmentVertical: Expression<DivAlignmentVertical>?
    public let width: DivSize?

    public func resolveContentAlignmentHorizontal(_ resolver: ExpressionResolver) -> DivAlignmentHorizontal? {
      resolver.resolveEnum(contentAlignmentHorizontal)
    }

    public func resolveContentAlignmentVertical(_ resolver: ExpressionResolver) -> DivAlignmentVertical? {
      resolver.resolveEnum(contentAlignmentVertical)
    }

    public convenience init(dictionary: [String: Any], context: ParsingContext) throws {
      self.init(
        contentAlignmentHorizontal: try dictionary.getOptionalExpressionField("content_alignment_horizontal", context: context),
        contentAlignmentVertical: try dictionary.getOptionalExpressionField("content_alignment_vertical", context: context),
        width: try dictionary.getOptionalField("width", transform: { (dict: [String: Any]) in try DivSize(dictionary: dict, context: context) })
      )
    }

    init(
      contentAlignmentHorizontal: Expression<DivAlignmentHorizontal>? = nil,
      contentAlignmentVertical: Expression<DivAlignmentVertical>? = nil,
      width: DivSize? = nil
    ) {
      self.contentAlignmentHorizontal = contentAlignmentHorizontal
      self.contentAlignmentVertical = contentAlignmentVertical
      self.width = width
    }
  }

  public final class Row: Sendable {
    public final class Cell: Sendable {
      public let background: [DivBackground]?
      public let columnSpan: Expression<Int> // constraint: number >= 0; default value: 1
      public let contentAlignmentHorizontal: Expression<DivAlignmentHorizontal>?
      public let contentAlignmentVertical: Expression<DivAlignmentVertical>?
      public let div: Div
      public let rowSpan: Expression<Int> // constraint: number >= 0; default value: 1

      public func resolveColumnSpan(_ resolver: ExpressionResolver) -> Int {
        resolver.resolveNumeric(columnSpan) ?? 1
      }

      public func resolveContentAlignmentHorizontal(_ resolver: ExpressionResolver) -> DivAlignmentHorizontal? {
        resolver.resolveEnum(contentAlignmentHorizontal)
      }

      public func resolveContentAlignmentVertical(_ resolver: ExpressionResolver) -> DivAlignmentVertical? {
        resolver.resolveEnum(contentAlignmentVertical)
      }

      public func resolveRowSpan(_ resolver: ExpressionResolver) -> Int {
        resolver.resolveNumeric(rowSpan) ?? 1
      }

      static let columnSpanValidator: AnyValueValidator<Int> =
        makeValueValidator(valueValidator: { $0 >= 0 })

      static let rowSpanValidator: AnyValueValidator<Int> =
        makeValueValidator(valueValidator: { $0 >= 0 })

      public convenience init(dictionary: [String: Any], context: ParsingContext) throws {
        self.init(
          background: try dictionary.getOptionalArray("background", transform: { (dict: [String: Any]) in try? DivBackground(dictionary: dict, context: context) }),
          columnSpan: try dictionary.getOptionalExpressionField("column_span", validator: Self.columnSpanValidator, context: context),
          contentAlignmentHorizontal: try dictionary.getOptionalExpressionField("content_alignment_horizontal", context: context),
          contentAlignmentVertical: try dictionary.getOptionalExpressionField("content_alignment_vertical", context: context),
          div: try dictionary.getField("div", transform: { (dict: [String: Any]) in try Div(dictionary: dict, context: context) }, context: context),
          rowSpan: try dictionary.getOptionalExpressionField("row_span", validator: Self.rowSpanValidator, context: context)
        )
      }

      init(
        background: [DivBackground]? = nil,
        columnSpan: Expression<Int>? = nil,
        contentAlignmentHorizontal: Expression<DivAlignmentHorizontal>? = nil,
        contentAlignmentVertical: Expression<DivAlignmentVertical>? = nil,
        div: Div,
        rowSpan: Expression<Int>? = nil
      ) {
        self.background = background
        self.columnSpan = columnSpan ?? .value(1)
        self.contentAlignmentHorizontal = contentAlignmentHorizontal
        self.contentAlignmentVertical = contentAlignmentVertical
        self.div = div
        self.rowSpan = rowSpan ?? .value(1)
      }
    }

    public let background: [DivBackground]?
    public let cells: [Cell]
    public let id: String?

    public convenience init(dictionary: [String: Any], context: ParsingContext) throws {
      self.init(
        background: try dictionary.getOptionalArray("background", transform: { (dict: [String: Any]) in try? DivBackground(dictionary: dict, context: context) }),
        cells: try dictionary.getArray("cells", transform: { (dict: [String: Any]) in try? DivTable.Row.Cell(dictionary: dict, context: context) }, context: context),
        id: try dictionary.getOptionalField("id", context: context)
      )
    }

    init(
      background: [DivBackground]? = nil,
      cells: [Cell],
      id: String? = nil
    ) {
      self.background = background
      self.cells = cells
      self.id = id
    }
  }

  public final class Separator: Sendable {
    public let margins: DivEdgeInsets?
    public let showAtEnd: Expression<Bool> // default value: false
    public let showAtStart: Expression<Bool> // default value: false
    public let showBetween: Expression<Bool> // default value: true
    public let style: DivDrawable

    public func resolveShowAtEnd(_ resolver: ExpressionResolver) -> Bool {
      resolver.resolveNumeric(showAtEnd) ?? false
    }

    public func resolveShowAtStart(_ resolver: ExpressionResolver) -> Bool {
      resolver.resolveNumeric(showAtStart) ?? false
    }

    public func resolveShowBetween(_ resolver: ExpressionResolver) -> Bool {
      resolver.resolveNumeric(showBetween) ?? true
    }

    public convenience init(dictionary: [String: Any], context: ParsingContext) throws {
      self.init(
        margins: try dictionary.getOptionalField("margins", transform: { (dict: [String: Any]) in try DivEdgeInsets(dictionary: dict, context: context) }),
        showAtEnd: try dictionary.getOptionalExpressionField("show_at_end", context: context),
        showAtStart: try dictionary.getOptionalExpressionField("show_at_start", context: context),
        showBetween: try dictionary.getOptionalExpressionField("show_between", context: context),
        style: try dictionary.getField("style", transform: { (dict: [String: Any]) in try DivDrawable(dictionary: dict, context: context) }, context: context)
      )
    }

    init(
      margins: DivEdgeInsets? = nil,
      showAtEnd: Expression<Bool>? = nil,
      showAtStart: Expression<Bool>? = nil,
      showBetween: Expression<Bool>? = nil,
      style: DivDrawable
    ) {
      self.margins = margins
      self.showAtEnd = showAtEnd ?? .value(false)
      self.showAtStart = showAtStart ?? .value(false)
      self.showBetween = showBetween ?? .value(true)
      self.style = style
    }
  }

  public final class Striped: Sendable {
    public let evenRowBackground: [DivBackground]?
    public let oddRowBackground: [DivBackground]?

    public convenience init(dictionary: [String: Any], context: ParsingContext) throws {
      self.init(
        evenRowBackground: try dictionary.getOptionalArray("even_row_background", transform: { (dict: [String: Any]) in try? DivBackground(dictionary: dict, context: context) }),
        oddRowBackground: try dictionary.getOptionalArray("odd_row_background", transform: { (dict: [String: Any]) in try? DivBackground(dictionary: dict, context: context) })
      )
    }

    init(
      evenRowBackground: [DivBackground]? = nil,
      oddRowBackground: [DivBackground]? = nil
    ) {
      self.evenRowBackground = evenRowBackground
      self.oddRowBackground = oddRowBackground
    }
  }

  public static let type: String = "table"
  public let accessibility: DivAccessibility?
  public let action: DivAction?
  public let actionAnimation: DivAnimation // default value: DivAnimation(duration: .value(100), endValue: .value(0.6), name: .value(.fade), startValue: .value(1))
  public let actions: [DivAction]?
  public let alignmentHorizontal: Expression<DivAlignmentHorizontal>?
  public let alignmentVertical: Expression<DivAlignmentVertical>?
  public let alpha: Expression<Double> // constraint: number >= 0.0 && number <= 1.0; default value: 1.0
  public let animators: [DivAnimator]?
  public let background: [DivBackground]?
  public let border: DivBorder?
  public let captureFocusOnAction: Expression<Bool> // default value: true
  public let columnSeparator: Separator?
  public let columnSpan: Expression<Int>? // constraint: number >= 0
  public let columns: [Column]
  public let contentAlignmentHorizontal: Expression<DivAlignmentHorizontal> // default value: start
  public let contentAlignmentVertical: Expression<DivAlignmentVertical> // default value: top
  public let disappearActions: [DivDisappearAction]?
  public let doubletapActions: [DivAction]?
  public let extensions: [DivExtension]?
  public let focus: DivFocus?
  public let functions: [DivFunction]?
  public let headerBackground: [DivBackground]?
  public let headerRow: Row?
  public let headerSeparator: Separator?
  public let height: DivSize // default value: .divWrapContentSize(DivWrapContentSize())
  public let hoverEndActions: [DivAction]?
  public let hoverStartActions: [DivAction]?
  public let id: String?
  public let layoutProvider: DivLayoutProvider?
  public let longtapActions: [DivAction]?
  public let margins: DivEdgeInsets?
  public let paddings: DivEdgeInsets?
  public let pressEndActions: [DivAction]?
  public let pressStartActions: [DivAction]?
  public let reuseId: Expression<String>?
  public let rowBuilder: DivCollectionItemBuilder?
  public let rowSeparator: Separator?
  public let rowSpan: Expression<Int>? // constraint: number >= 0
  public let rows: [Row]?
  public let selectedActions: [DivAction]?
  public let striped: Striped?
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

  public func resolveCaptureFocusOnAction(_ resolver: ExpressionResolver) -> Bool {
    resolver.resolveNumeric(captureFocusOnAction) ?? true
  }

  public func resolveColumnSpan(_ resolver: ExpressionResolver) -> Int? {
    resolver.resolveNumeric(columnSpan)
  }

  public func resolveContentAlignmentHorizontal(_ resolver: ExpressionResolver) -> DivAlignmentHorizontal {
    resolver.resolveEnum(contentAlignmentHorizontal) ?? DivAlignmentHorizontal.start
  }

  public func resolveContentAlignmentVertical(_ resolver: ExpressionResolver) -> DivAlignmentVertical {
    resolver.resolveEnum(contentAlignmentVertical) ?? DivAlignmentVertical.top
  }

  public func resolveReuseId(_ resolver: ExpressionResolver) -> String? {
    resolver.resolveString(reuseId)
  }

  public func resolveRowSpan(_ resolver: ExpressionResolver) -> Int? {
    resolver.resolveNumeric(rowSpan)
  }

  public func resolveVisibility(_ resolver: ExpressionResolver) -> DivVisibility {
    resolver.resolveEnum(visibility) ?? DivVisibility.visible
  }

  static let alphaValidator: AnyValueValidator<Double> =
    makeValueValidator(valueValidator: { $0 >= 0.0 && $0 <= 1.0 })

  static let columnSpanValidator: AnyValueValidator<Int> =
    makeValueValidator(valueValidator: { $0 >= 0 })

  static let rowSpanValidator: AnyValueValidator<Int> =
    makeValueValidator(valueValidator: { $0 >= 0 })

  static let transitionTriggersValidator: AnyArrayValueValidator<DivTransitionTrigger> =
    makeArrayValidator(minItems: 1)

  public convenience init(dictionary: [String: Any], context: ParsingContext) throws {
    self.init(
      accessibility: try dictionary.getOptionalField("accessibility", transform: { (dict: [String: Any]) in try DivAccessibility(dictionary: dict, context: context) }),
      action: try dictionary.getOptionalField("action", transform: { (dict: [String: Any]) in try DivAction(dictionary: dict, context: context) }),
      actionAnimation: try dictionary.getOptionalField("action_animation", transform: { (dict: [String: Any]) in try DivAnimation(dictionary: dict, context: context) }),
      actions: try dictionary.getOptionalArray("actions", transform: { (dict: [String: Any]) in try? DivAction(dictionary: dict, context: context) }),
      alignmentHorizontal: try dictionary.getOptionalExpressionField("alignment_horizontal", context: context),
      alignmentVertical: try dictionary.getOptionalExpressionField("alignment_vertical", context: context),
      alpha: try dictionary.getOptionalExpressionField("alpha", validator: Self.alphaValidator, context: context),
      animators: try dictionary.getOptionalArray("animators", transform: { (dict: [String: Any]) in try? DivAnimator(dictionary: dict, context: context) }),
      background: try dictionary.getOptionalArray("background", transform: { (dict: [String: Any]) in try? DivBackground(dictionary: dict, context: context) }),
      border: try dictionary.getOptionalField("border", transform: { (dict: [String: Any]) in try DivBorder(dictionary: dict, context: context) }),
      captureFocusOnAction: try dictionary.getOptionalExpressionField("capture_focus_on_action", context: context),
      columnSeparator: try dictionary.getOptionalField("column_separator", transform: { (dict: [String: Any]) in try DivTable.Separator(dictionary: dict, context: context) }),
      columnSpan: try dictionary.getOptionalExpressionField("column_span", validator: Self.columnSpanValidator, context: context),
      columns: try dictionary.getArray("columns", transform: { (dict: [String: Any]) in try? DivTable.Column(dictionary: dict, context: context) }, context: context),
      contentAlignmentHorizontal: try dictionary.getOptionalExpressionField("content_alignment_horizontal", context: context),
      contentAlignmentVertical: try dictionary.getOptionalExpressionField("content_alignment_vertical", context: context),
      disappearActions: try dictionary.getOptionalArray("disappear_actions", transform: { (dict: [String: Any]) in try? DivDisappearAction(dictionary: dict, context: context) }),
      doubletapActions: try dictionary.getOptionalArray("doubletap_actions", transform: { (dict: [String: Any]) in try? DivAction(dictionary: dict, context: context) }),
      extensions: try dictionary.getOptionalArray("extensions", transform: { (dict: [String: Any]) in try? DivExtension(dictionary: dict, context: context) }),
      focus: try dictionary.getOptionalField("focus", transform: { (dict: [String: Any]) in try DivFocus(dictionary: dict, context: context) }),
      functions: try dictionary.getOptionalArray("functions", transform: { (dict: [String: Any]) in try? DivFunction(dictionary: dict, context: context) }),
      headerBackground: try dictionary.getOptionalArray("header_background", transform: { (dict: [String: Any]) in try? DivBackground(dictionary: dict, context: context) }),
      headerRow: try dictionary.getOptionalField("header_row", transform: { (dict: [String: Any]) in try DivTable.Row(dictionary: dict, context: context) }),
      headerSeparator: try dictionary.getOptionalField("header_separator", transform: { (dict: [String: Any]) in try DivTable.Separator(dictionary: dict, context: context) }),
      height: try dictionary.getOptionalField("height", transform: { (dict: [String: Any]) in try DivSize(dictionary: dict, context: context) }),
      hoverEndActions: try dictionary.getOptionalArray("hover_end_actions", transform: { (dict: [String: Any]) in try? DivAction(dictionary: dict, context: context) }),
      hoverStartActions: try dictionary.getOptionalArray("hover_start_actions", transform: { (dict: [String: Any]) in try? DivAction(dictionary: dict, context: context) }),
      id: try dictionary.getOptionalField("id", context: context),
      layoutProvider: try dictionary.getOptionalField("layout_provider", transform: { (dict: [String: Any]) in try DivLayoutProvider(dictionary: dict, context: context) }),
      longtapActions: try dictionary.getOptionalArray("longtap_actions", transform: { (dict: [String: Any]) in try? DivAction(dictionary: dict, context: context) }),
      margins: try dictionary.getOptionalField("margins", transform: { (dict: [String: Any]) in try DivEdgeInsets(dictionary: dict, context: context) }),
      paddings: try dictionary.getOptionalField("paddings", transform: { (dict: [String: Any]) in try DivEdgeInsets(dictionary: dict, context: context) }),
      pressEndActions: try dictionary.getOptionalArray("press_end_actions", transform: { (dict: [String: Any]) in try? DivAction(dictionary: dict, context: context) }),
      pressStartActions: try dictionary.getOptionalArray("press_start_actions", transform: { (dict: [String: Any]) in try? DivAction(dictionary: dict, context: context) }),
      reuseId: try dictionary.getOptionalExpressionField("reuse_id", context: context),
      rowBuilder: try dictionary.getOptionalField("row_builder", transform: { (dict: [String: Any]) in try DivCollectionItemBuilder(dictionary: dict, context: context) }),
      rowSeparator: try dictionary.getOptionalField("row_separator", transform: { (dict: [String: Any]) in try DivTable.Separator(dictionary: dict, context: context) }),
      rowSpan: try dictionary.getOptionalExpressionField("row_span", validator: Self.rowSpanValidator, context: context),
      rows: try dictionary.getOptionalArray("rows", transform: { (dict: [String: Any]) in try? DivTable.Row(dictionary: dict, context: context) }),
      selectedActions: try dictionary.getOptionalArray("selected_actions", transform: { (dict: [String: Any]) in try? DivAction(dictionary: dict, context: context) }),
      striped: try dictionary.getOptionalField("striped", transform: { (dict: [String: Any]) in try DivTable.Striped(dictionary: dict, context: context) }),
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
    accessibility: DivAccessibility?,
    action: DivAction?,
    actionAnimation: DivAnimation?,
    actions: [DivAction]?,
    alignmentHorizontal: Expression<DivAlignmentHorizontal>?,
    alignmentVertical: Expression<DivAlignmentVertical>?,
    alpha: Expression<Double>?,
    animators: [DivAnimator]?,
    background: [DivBackground]?,
    border: DivBorder?,
    captureFocusOnAction: Expression<Bool>?,
    columnSeparator: Separator?,
    columnSpan: Expression<Int>?,
    columns: [Column],
    contentAlignmentHorizontal: Expression<DivAlignmentHorizontal>?,
    contentAlignmentVertical: Expression<DivAlignmentVertical>?,
    disappearActions: [DivDisappearAction]?,
    doubletapActions: [DivAction]?,
    extensions: [DivExtension]?,
    focus: DivFocus?,
    functions: [DivFunction]?,
    headerBackground: [DivBackground]?,
    headerRow: Row?,
    headerSeparator: Separator?,
    height: DivSize?,
    hoverEndActions: [DivAction]?,
    hoverStartActions: [DivAction]?,
    id: String?,
    layoutProvider: DivLayoutProvider?,
    longtapActions: [DivAction]?,
    margins: DivEdgeInsets?,
    paddings: DivEdgeInsets?,
    pressEndActions: [DivAction]?,
    pressStartActions: [DivAction]?,
    reuseId: Expression<String>?,
    rowBuilder: DivCollectionItemBuilder?,
    rowSeparator: Separator?,
    rowSpan: Expression<Int>?,
    rows: [Row]?,
    selectedActions: [DivAction]?,
    striped: Striped?,
    tooltips: [DivTooltip]?,
    transform: DivTransform?,
    transformations: [DivTransformation]?,
    transitionChange: DivChangeTransition?,
    transitionIn: DivAppearanceTransition?,
    transitionOut: DivAppearanceTransition?,
    transitionTriggers: [DivTransitionTrigger]?,
    variableTriggers: [DivTrigger]?,
    variables: [DivVariable]?,
    visibility: Expression<DivVisibility>?,
    visibilityAction: DivVisibilityAction?,
    visibilityActions: [DivVisibilityAction]?,
    width: DivSize?
  ) {
    self.accessibility = accessibility
    self.action = action
    self.actionAnimation = actionAnimation ?? DivAnimation(duration: .value(100), endValue: .value(0.6), name: .value(.fade), startValue: .value(1))
    self.actions = actions
    self.alignmentHorizontal = alignmentHorizontal
    self.alignmentVertical = alignmentVertical
    self.alpha = alpha ?? .value(1.0)
    self.animators = animators
    self.background = background
    self.border = border
    self.captureFocusOnAction = captureFocusOnAction ?? .value(true)
    self.columnSeparator = columnSeparator
    self.columnSpan = columnSpan
    self.columns = columns
    self.contentAlignmentHorizontal = contentAlignmentHorizontal ?? .value(.start)
    self.contentAlignmentVertical = contentAlignmentVertical ?? .value(.top)
    self.disappearActions = disappearActions
    self.doubletapActions = doubletapActions
    self.extensions = extensions
    self.focus = focus
    self.functions = functions
    self.headerBackground = headerBackground
    self.headerRow = headerRow
    self.headerSeparator = headerSeparator
    self.height = height ?? .divWrapContentSize(DivWrapContentSize())
    self.hoverEndActions = hoverEndActions
    self.hoverStartActions = hoverStartActions
    self.id = id
    self.layoutProvider = layoutProvider
    self.longtapActions = longtapActions
    self.margins = margins
    self.paddings = paddings
    self.pressEndActions = pressEndActions
    self.pressStartActions = pressStartActions
    self.reuseId = reuseId
    self.rowBuilder = rowBuilder
    self.rowSeparator = rowSeparator
    self.rowSpan = rowSpan
    self.rows = rows
    self.selectedActions = selectedActions
    self.striped = striped
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
extension DivTable: Equatable {
  public static func ==(lhs: DivTable, rhs: DivTable) -> Bool {
    guard
      lhs.accessibility == rhs.accessibility,
      lhs.action == rhs.action,
      lhs.actionAnimation == rhs.actionAnimation
    else {
      return false
    }
    guard
      lhs.actions == rhs.actions,
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
      lhs.captureFocusOnAction == rhs.captureFocusOnAction,
      lhs.columnSeparator == rhs.columnSeparator
    else {
      return false
    }
    guard
      lhs.columnSpan == rhs.columnSpan,
      lhs.columns == rhs.columns,
      lhs.contentAlignmentHorizontal == rhs.contentAlignmentHorizontal
    else {
      return false
    }
    guard
      lhs.contentAlignmentVertical == rhs.contentAlignmentVertical,
      lhs.disappearActions == rhs.disappearActions,
      lhs.doubletapActions == rhs.doubletapActions
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
      lhs.headerBackground == rhs.headerBackground,
      lhs.headerRow == rhs.headerRow,
      lhs.headerSeparator == rhs.headerSeparator
    else {
      return false
    }
    guard
      lhs.height == rhs.height,
      lhs.hoverEndActions == rhs.hoverEndActions,
      lhs.hoverStartActions == rhs.hoverStartActions
    else {
      return false
    }
    guard
      lhs.id == rhs.id,
      lhs.layoutProvider == rhs.layoutProvider,
      lhs.longtapActions == rhs.longtapActions
    else {
      return false
    }
    guard
      lhs.margins == rhs.margins,
      lhs.paddings == rhs.paddings,
      lhs.pressEndActions == rhs.pressEndActions
    else {
      return false
    }
    guard
      lhs.pressStartActions == rhs.pressStartActions,
      lhs.reuseId == rhs.reuseId,
      lhs.rowBuilder == rhs.rowBuilder
    else {
      return false
    }
    guard
      lhs.rowSeparator == rhs.rowSeparator,
      lhs.rowSpan == rhs.rowSpan,
      lhs.rows == rhs.rows
    else {
      return false
    }
    guard
      lhs.selectedActions == rhs.selectedActions,
      lhs.striped == rhs.striped,
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

extension DivTable: Serializable {
  @_optimize(size)
  public func toDictionary() -> [String: ValidSerializationValue] {
    var result: [String: ValidSerializationValue] = [:]
    result["type"] = Self.type
    result["accessibility"] = accessibility?.toDictionary()
    result["action"] = action?.toDictionary()
    result["action_animation"] = actionAnimation.toDictionary()
    result["actions"] = actions?.map { $0.toDictionary() }
    result["alignment_horizontal"] = alignmentHorizontal?.toValidSerializationValue()
    result["alignment_vertical"] = alignmentVertical?.toValidSerializationValue()
    result["alpha"] = alpha.toValidSerializationValue()
    result["animators"] = animators?.map { $0.toDictionary() }
    result["background"] = background?.map { $0.toDictionary() }
    result["border"] = border?.toDictionary()
    result["capture_focus_on_action"] = captureFocusOnAction.toValidSerializationValue()
    result["column_separator"] = columnSeparator?.toDictionary()
    result["column_span"] = columnSpan?.toValidSerializationValue()
    result["columns"] = columns.map { $0.toDictionary() }
    result["content_alignment_horizontal"] = contentAlignmentHorizontal.toValidSerializationValue()
    result["content_alignment_vertical"] = contentAlignmentVertical.toValidSerializationValue()
    result["disappear_actions"] = disappearActions?.map { $0.toDictionary() }
    result["doubletap_actions"] = doubletapActions?.map { $0.toDictionary() }
    result["extensions"] = extensions?.map { $0.toDictionary() }
    result["focus"] = focus?.toDictionary()
    result["functions"] = functions?.map { $0.toDictionary() }
    result["header_background"] = headerBackground?.map { $0.toDictionary() }
    result["header_row"] = headerRow?.toDictionary()
    result["header_separator"] = headerSeparator?.toDictionary()
    result["height"] = height.toDictionary()
    result["hover_end_actions"] = hoverEndActions?.map { $0.toDictionary() }
    result["hover_start_actions"] = hoverStartActions?.map { $0.toDictionary() }
    result["id"] = id
    result["layout_provider"] = layoutProvider?.toDictionary()
    result["longtap_actions"] = longtapActions?.map { $0.toDictionary() }
    result["margins"] = margins?.toDictionary()
    result["paddings"] = paddings?.toDictionary()
    result["press_end_actions"] = pressEndActions?.map { $0.toDictionary() }
    result["press_start_actions"] = pressStartActions?.map { $0.toDictionary() }
    result["reuse_id"] = reuseId?.toValidSerializationValue()
    result["row_builder"] = rowBuilder?.toDictionary()
    result["row_separator"] = rowSeparator?.toDictionary()
    result["row_span"] = rowSpan?.toValidSerializationValue()
    result["rows"] = rows?.map { $0.toDictionary() }
    result["selected_actions"] = selectedActions?.map { $0.toDictionary() }
    result["striped"] = striped?.toDictionary()
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
extension DivTable.Column: Equatable {
  public static func ==(lhs: DivTable.Column, rhs: DivTable.Column) -> Bool {
    guard
      lhs.contentAlignmentHorizontal == rhs.contentAlignmentHorizontal,
      lhs.contentAlignmentVertical == rhs.contentAlignmentVertical,
      lhs.width == rhs.width
    else {
      return false
    }
    return true
  }
}
#endif

#if DEBUG
extension DivTable.Row.Cell: Equatable {
  public static func ==(lhs: DivTable.Row.Cell, rhs: DivTable.Row.Cell) -> Bool {
    guard
      lhs.background == rhs.background,
      lhs.columnSpan == rhs.columnSpan,
      lhs.contentAlignmentHorizontal == rhs.contentAlignmentHorizontal
    else {
      return false
    }
    guard
      lhs.contentAlignmentVertical == rhs.contentAlignmentVertical,
      lhs.div == rhs.div,
      lhs.rowSpan == rhs.rowSpan
    else {
      return false
    }
    return true
  }
}
#endif

#if DEBUG
extension DivTable.Row: Equatable {
  public static func ==(lhs: DivTable.Row, rhs: DivTable.Row) -> Bool {
    guard
      lhs.background == rhs.background,
      lhs.cells == rhs.cells,
      lhs.id == rhs.id
    else {
      return false
    }
    return true
  }
}
#endif

#if DEBUG
extension DivTable.Separator: Equatable {
  public static func ==(lhs: DivTable.Separator, rhs: DivTable.Separator) -> Bool {
    guard
      lhs.margins == rhs.margins,
      lhs.showAtEnd == rhs.showAtEnd,
      lhs.showAtStart == rhs.showAtStart
    else {
      return false
    }
    guard
      lhs.showBetween == rhs.showBetween,
      lhs.style == rhs.style
    else {
      return false
    }
    return true
  }
}
#endif

#if DEBUG
extension DivTable.Striped: Equatable {
  public static func ==(lhs: DivTable.Striped, rhs: DivTable.Striped) -> Bool {
    guard
      lhs.evenRowBackground == rhs.evenRowBackground,
      lhs.oddRowBackground == rhs.oddRowBackground
    else {
      return false
    }
    return true
  }
}
#endif

extension DivTable.Column: Serializable {
  @_optimize(size)
  public func toDictionary() -> [String: ValidSerializationValue] {
    var result: [String: ValidSerializationValue] = [:]
    result["content_alignment_horizontal"] = contentAlignmentHorizontal?.toValidSerializationValue()
    result["content_alignment_vertical"] = contentAlignmentVertical?.toValidSerializationValue()
    result["width"] = width?.toDictionary()
    return result
  }
}

extension DivTable.Row.Cell: Serializable {
  @_optimize(size)
  public func toDictionary() -> [String: ValidSerializationValue] {
    var result: [String: ValidSerializationValue] = [:]
    result["background"] = background?.map { $0.toDictionary() }
    result["column_span"] = columnSpan.toValidSerializationValue()
    result["content_alignment_horizontal"] = contentAlignmentHorizontal?.toValidSerializationValue()
    result["content_alignment_vertical"] = contentAlignmentVertical?.toValidSerializationValue()
    result["div"] = div.toDictionary()
    result["row_span"] = rowSpan.toValidSerializationValue()
    return result
  }
}

extension DivTable.Row: Serializable {
  @_optimize(size)
  public func toDictionary() -> [String: ValidSerializationValue] {
    var result: [String: ValidSerializationValue] = [:]
    result["background"] = background?.map { $0.toDictionary() }
    result["cells"] = cells.map { $0.toDictionary() }
    result["id"] = id
    return result
  }
}

extension DivTable.Separator: Serializable {
  @_optimize(size)
  public func toDictionary() -> [String: ValidSerializationValue] {
    var result: [String: ValidSerializationValue] = [:]
    result["margins"] = margins?.toDictionary()
    result["show_at_end"] = showAtEnd.toValidSerializationValue()
    result["show_at_start"] = showAtStart.toValidSerializationValue()
    result["show_between"] = showBetween.toValidSerializationValue()
    result["style"] = style.toDictionary()
    return result
  }
}

extension DivTable.Striped: Serializable {
  @_optimize(size)
  public func toDictionary() -> [String: ValidSerializationValue] {
    var result: [String: ValidSerializationValue] = [:]
    result["even_row_background"] = evenRowBackground?.map { $0.toDictionary() }
    result["odd_row_background"] = oddRowBackground?.map { $0.toDictionary() }
    return result
  }
}
