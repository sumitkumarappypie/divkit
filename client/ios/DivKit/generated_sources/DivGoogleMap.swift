// Generated code. Do not modify.

import Foundation
import Serialization
import VGSL

public final class DivGoogleMap: DivBase, Sendable {
  @frozen
  public enum MapType: String, CaseIterable, Sendable {
    case normal = "normal"
    case satellite = "satellite"
    case terrain = "terrain"
    case hybrid = "hybrid"
  }

  public static let type: String = "google_map"
  public let accessibility: DivAccessibility?
  public let alignmentHorizontal: Expression<DivAlignmentHorizontal>?
  public let alignmentVertical: Expression<DivAlignmentVertical>?
  public let allowScroll: Expression<Bool> // default value: true
  public let allowZoom: Expression<Bool> // default value: true
  public let alpha: Expression<Double> // constraint: number >= 0.0 && number <= 1.0; default value: 1.0
  public let animators: [DivAnimator]?
  public let apiKey: Expression<String>?
  public let apiKeyIos: Expression<String>?
  public let aspect: DivAspect?
  public let background: [DivBackground]?
  public let border: DivBorder?
  public let columnSpan: Expression<Int>? // constraint: number >= 0
  public let disappearActions: [DivDisappearAction]?
  public let extensions: [DivExtension]?
  public let focus: DivFocus?
  public let functions: [DivFunction]?
  public let height: DivSize // default value: .divWrapContentSize(DivWrapContentSize())
  public let id: String?
  public let latitude: Expression<Double>
  public let layoutProvider: DivLayoutProvider?
  public let longitude: Expression<Double>
  public let mapType: Expression<MapType> // default value: normal
  public let margins: DivEdgeInsets?
  public let markers: [DivGoogleMapMarker]?
  public let onErrorActions: [DivAction]?
  public let onReadyActions: [DivAction]?
  public let paddings: DivEdgeInsets?
  public let reuseId: Expression<String>?
  public let rowSpan: Expression<Int>? // constraint: number >= 0
  public let selectedActions: [DivAction]?
  public let showUserLocation: Expression<Bool> // default value: false
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
  public let zoom: Expression<Double> // default value: 10

  public func resolveAlignmentHorizontal(_ resolver: ExpressionResolver) -> DivAlignmentHorizontal? {
    resolver.resolveEnum(alignmentHorizontal)
  }

  public func resolveAlignmentVertical(_ resolver: ExpressionResolver) -> DivAlignmentVertical? {
    resolver.resolveEnum(alignmentVertical)
  }

  public func resolveAllowScroll(_ resolver: ExpressionResolver) -> Bool {
    resolver.resolveNumeric(allowScroll) ?? true
  }

  public func resolveAllowZoom(_ resolver: ExpressionResolver) -> Bool {
    resolver.resolveNumeric(allowZoom) ?? true
  }

  public func resolveAlpha(_ resolver: ExpressionResolver) -> Double {
    resolver.resolveNumeric(alpha) ?? 1.0
  }

  public func resolveApiKey(_ resolver: ExpressionResolver) -> String? {
    resolver.resolveString(apiKey)
  }

  public func resolveApiKeyIos(_ resolver: ExpressionResolver) -> String? {
    resolver.resolveString(apiKeyIos)
  }

  public func resolveColumnSpan(_ resolver: ExpressionResolver) -> Int? {
    resolver.resolveNumeric(columnSpan)
  }

  public func resolveLatitude(_ resolver: ExpressionResolver) -> Double? {
    resolver.resolveNumeric(latitude)
  }

  public func resolveLongitude(_ resolver: ExpressionResolver) -> Double? {
    resolver.resolveNumeric(longitude)
  }

  public func resolveMapType(_ resolver: ExpressionResolver) -> MapType {
    resolver.resolveEnum(mapType) ?? MapType.normal
  }

  public func resolveReuseId(_ resolver: ExpressionResolver) -> String? {
    resolver.resolveString(reuseId)
  }

  public func resolveRowSpan(_ resolver: ExpressionResolver) -> Int? {
    resolver.resolveNumeric(rowSpan)
  }

  public func resolveShowUserLocation(_ resolver: ExpressionResolver) -> Bool {
    resolver.resolveNumeric(showUserLocation) ?? false
  }

  public func resolveVisibility(_ resolver: ExpressionResolver) -> DivVisibility {
    resolver.resolveEnum(visibility) ?? DivVisibility.visible
  }

  public func resolveZoom(_ resolver: ExpressionResolver) -> Double {
    resolver.resolveNumeric(zoom) ?? 10
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
      alignmentHorizontal: try dictionary.getOptionalExpressionField("alignment_horizontal", context: context),
      alignmentVertical: try dictionary.getOptionalExpressionField("alignment_vertical", context: context),
      allowScroll: try dictionary.getOptionalExpressionField("allow_scroll", context: context),
      allowZoom: try dictionary.getOptionalExpressionField("allow_zoom", context: context),
      alpha: try dictionary.getOptionalExpressionField("alpha", validator: Self.alphaValidator, context: context),
      animators: try dictionary.getOptionalArray("animators", transform: { (dict: [String: Any]) in try? DivAnimator(dictionary: dict, context: context) }),
      apiKey: try dictionary.getOptionalExpressionField("api_key", context: context),
      apiKeyIos: try dictionary.getOptionalExpressionField("api_key_ios", context: context),
      aspect: try dictionary.getOptionalField("aspect", transform: { (dict: [String: Any]) in try DivAspect(dictionary: dict, context: context) }),
      background: try dictionary.getOptionalArray("background", transform: { (dict: [String: Any]) in try? DivBackground(dictionary: dict, context: context) }),
      border: try dictionary.getOptionalField("border", transform: { (dict: [String: Any]) in try DivBorder(dictionary: dict, context: context) }),
      columnSpan: try dictionary.getOptionalExpressionField("column_span", validator: Self.columnSpanValidator, context: context),
      disappearActions: try dictionary.getOptionalArray("disappear_actions", transform: { (dict: [String: Any]) in try? DivDisappearAction(dictionary: dict, context: context) }),
      extensions: try dictionary.getOptionalArray("extensions", transform: { (dict: [String: Any]) in try? DivExtension(dictionary: dict, context: context) }),
      focus: try dictionary.getOptionalField("focus", transform: { (dict: [String: Any]) in try DivFocus(dictionary: dict, context: context) }),
      functions: try dictionary.getOptionalArray("functions", transform: { (dict: [String: Any]) in try? DivFunction(dictionary: dict, context: context) }),
      height: try dictionary.getOptionalField("height", transform: { (dict: [String: Any]) in try DivSize(dictionary: dict, context: context) }),
      id: try dictionary.getOptionalField("id", context: context),
      latitude: try dictionary.getExpressionField("latitude", context: context),
      layoutProvider: try dictionary.getOptionalField("layout_provider", transform: { (dict: [String: Any]) in try DivLayoutProvider(dictionary: dict, context: context) }),
      longitude: try dictionary.getExpressionField("longitude", context: context),
      mapType: try dictionary.getOptionalExpressionField("map_type", context: context),
      margins: try dictionary.getOptionalField("margins", transform: { (dict: [String: Any]) in try DivEdgeInsets(dictionary: dict, context: context) }),
      markers: try dictionary.getOptionalArray("markers", transform: { (dict: [String: Any]) in try? DivGoogleMapMarker(dictionary: dict, context: context) }),
      onErrorActions: try dictionary.getOptionalArray("on_error_actions", transform: { (dict: [String: Any]) in try? DivAction(dictionary: dict, context: context) }),
      onReadyActions: try dictionary.getOptionalArray("on_ready_actions", transform: { (dict: [String: Any]) in try? DivAction(dictionary: dict, context: context) }),
      paddings: try dictionary.getOptionalField("paddings", transform: { (dict: [String: Any]) in try DivEdgeInsets(dictionary: dict, context: context) }),
      reuseId: try dictionary.getOptionalExpressionField("reuse_id", context: context),
      rowSpan: try dictionary.getOptionalExpressionField("row_span", validator: Self.rowSpanValidator, context: context),
      selectedActions: try dictionary.getOptionalArray("selected_actions", transform: { (dict: [String: Any]) in try? DivAction(dictionary: dict, context: context) }),
      showUserLocation: try dictionary.getOptionalExpressionField("show_user_location", context: context),
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
      width: try dictionary.getOptionalField("width", transform: { (dict: [String: Any]) in try DivSize(dictionary: dict, context: context) }),
      zoom: try dictionary.getOptionalExpressionField("zoom", context: context)
    )
  }

  init(
    accessibility: DivAccessibility? = nil,
    alignmentHorizontal: Expression<DivAlignmentHorizontal>? = nil,
    alignmentVertical: Expression<DivAlignmentVertical>? = nil,
    allowScroll: Expression<Bool>? = nil,
    allowZoom: Expression<Bool>? = nil,
    alpha: Expression<Double>? = nil,
    animators: [DivAnimator]? = nil,
    apiKey: Expression<String>? = nil,
    apiKeyIos: Expression<String>? = nil,
    aspect: DivAspect? = nil,
    background: [DivBackground]? = nil,
    border: DivBorder? = nil,
    columnSpan: Expression<Int>? = nil,
    disappearActions: [DivDisappearAction]? = nil,
    extensions: [DivExtension]? = nil,
    focus: DivFocus? = nil,
    functions: [DivFunction]? = nil,
    height: DivSize? = nil,
    id: String? = nil,
    latitude: Expression<Double>,
    layoutProvider: DivLayoutProvider? = nil,
    longitude: Expression<Double>,
    mapType: Expression<MapType>? = nil,
    margins: DivEdgeInsets? = nil,
    markers: [DivGoogleMapMarker]? = nil,
    onErrorActions: [DivAction]? = nil,
    onReadyActions: [DivAction]? = nil,
    paddings: DivEdgeInsets? = nil,
    reuseId: Expression<String>? = nil,
    rowSpan: Expression<Int>? = nil,
    selectedActions: [DivAction]? = nil,
    showUserLocation: Expression<Bool>? = nil,
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
    width: DivSize? = nil,
    zoom: Expression<Double>? = nil
  ) {
    self.accessibility = accessibility
    self.alignmentHorizontal = alignmentHorizontal
    self.alignmentVertical = alignmentVertical
    self.allowScroll = allowScroll ?? .value(true)
    self.allowZoom = allowZoom ?? .value(true)
    self.alpha = alpha ?? .value(1.0)
    self.animators = animators
    self.apiKey = apiKey
    self.apiKeyIos = apiKeyIos
    self.aspect = aspect
    self.background = background
    self.border = border
    self.columnSpan = columnSpan
    self.disappearActions = disappearActions
    self.extensions = extensions
    self.focus = focus
    self.functions = functions
    self.height = height ?? .divWrapContentSize(DivWrapContentSize())
    self.id = id
    self.latitude = latitude
    self.layoutProvider = layoutProvider
    self.longitude = longitude
    self.mapType = mapType ?? .value(.normal)
    self.margins = margins
    self.markers = markers
    self.onErrorActions = onErrorActions
    self.onReadyActions = onReadyActions
    self.paddings = paddings
    self.reuseId = reuseId
    self.rowSpan = rowSpan
    self.selectedActions = selectedActions
    self.showUserLocation = showUserLocation ?? .value(false)
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
    self.zoom = zoom ?? .value(10)
  }
}

#if DEBUG
extension DivGoogleMap: Equatable {
  public static func ==(lhs: DivGoogleMap, rhs: DivGoogleMap) -> Bool {
    guard
      lhs.accessibility == rhs.accessibility,
      lhs.alignmentHorizontal == rhs.alignmentHorizontal,
      lhs.alignmentVertical == rhs.alignmentVertical
    else {
      return false
    }
    guard
      lhs.allowScroll == rhs.allowScroll,
      lhs.allowZoom == rhs.allowZoom,
      lhs.alpha == rhs.alpha
    else {
      return false
    }
    guard
      lhs.animators == rhs.animators,
      lhs.apiKey == rhs.apiKey,
      lhs.apiKeyIos == rhs.apiKeyIos
    else {
      return false
    }
    guard
      lhs.aspect == rhs.aspect,
      lhs.background == rhs.background,
      lhs.border == rhs.border
    else {
      return false
    }
    guard
      lhs.columnSpan == rhs.columnSpan,
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
      lhs.latitude == rhs.latitude,
      lhs.layoutProvider == rhs.layoutProvider
    else {
      return false
    }
    guard
      lhs.longitude == rhs.longitude,
      lhs.mapType == rhs.mapType,
      lhs.margins == rhs.margins
    else {
      return false
    }
    guard
      lhs.markers == rhs.markers,
      lhs.onErrorActions == rhs.onErrorActions,
      lhs.onReadyActions == rhs.onReadyActions
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
      lhs.showUserLocation == rhs.showUserLocation,
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
    guard
      lhs.zoom == rhs.zoom
    else {
      return false
    }
    return true
  }
}
#endif

extension DivGoogleMap: Serializable {
  @_optimize(size)
  public func toDictionary() -> [String: ValidSerializationValue] {
    var result: [String: ValidSerializationValue] = [:]
    result["type"] = Self.type
    result["accessibility"] = accessibility?.toDictionary()
    result["alignment_horizontal"] = alignmentHorizontal?.toValidSerializationValue()
    result["alignment_vertical"] = alignmentVertical?.toValidSerializationValue()
    result["allow_scroll"] = allowScroll.toValidSerializationValue()
    result["allow_zoom"] = allowZoom.toValidSerializationValue()
    result["alpha"] = alpha.toValidSerializationValue()
    result["animators"] = animators?.map { $0.toDictionary() }
    result["api_key"] = apiKey?.toValidSerializationValue()
    result["api_key_ios"] = apiKeyIos?.toValidSerializationValue()
    result["aspect"] = aspect?.toDictionary()
    result["background"] = background?.map { $0.toDictionary() }
    result["border"] = border?.toDictionary()
    result["column_span"] = columnSpan?.toValidSerializationValue()
    result["disappear_actions"] = disappearActions?.map { $0.toDictionary() }
    result["extensions"] = extensions?.map { $0.toDictionary() }
    result["focus"] = focus?.toDictionary()
    result["functions"] = functions?.map { $0.toDictionary() }
    result["height"] = height.toDictionary()
    result["id"] = id
    result["latitude"] = latitude.toValidSerializationValue()
    result["layout_provider"] = layoutProvider?.toDictionary()
    result["longitude"] = longitude.toValidSerializationValue()
    result["map_type"] = mapType.toValidSerializationValue()
    result["margins"] = margins?.toDictionary()
    result["markers"] = markers?.map { $0.toDictionary() }
    result["on_error_actions"] = onErrorActions?.map { $0.toDictionary() }
    result["on_ready_actions"] = onReadyActions?.map { $0.toDictionary() }
    result["paddings"] = paddings?.toDictionary()
    result["reuse_id"] = reuseId?.toValidSerializationValue()
    result["row_span"] = rowSpan?.toValidSerializationValue()
    result["selected_actions"] = selectedActions?.map { $0.toDictionary() }
    result["show_user_location"] = showUserLocation.toValidSerializationValue()
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
    result["zoom"] = zoom.toValidSerializationValue()
    return result
  }
}
