// Generated code. Do not modify.

import Foundation
import Serialization
import VGSL

public final class DivGoogleMapMarker: Sendable {
  public let color: Expression<Color>?
  public let latitude: Expression<Double>
  public let longitude: Expression<Double>
  public let onClickActions: [DivAction]?
  public let title: Expression<String>?

  public func resolveColor(_ resolver: ExpressionResolver) -> Color? {
    resolver.resolveColor(color)
  }

  public func resolveLatitude(_ resolver: ExpressionResolver) -> Double? {
    resolver.resolveNumeric(latitude)
  }

  public func resolveLongitude(_ resolver: ExpressionResolver) -> Double? {
    resolver.resolveNumeric(longitude)
  }

  public func resolveTitle(_ resolver: ExpressionResolver) -> String? {
    resolver.resolveString(title)
  }

  public convenience init(dictionary: [String: Any], context: ParsingContext) throws {
    self.init(
      color: try dictionary.getOptionalExpressionField("color", transform: Color.color(withHexString:), context: context),
      latitude: try dictionary.getOptionalExpressionField("latitude", context: context),
      longitude: try dictionary.getOptionalExpressionField("longitude", context: context),
      onClickActions: try dictionary.getOptionalArray("on_click_actions", transform: { (dict: [String: Any]) in try? DivAction(dictionary: dict, context: context) }),
      title: try dictionary.getOptionalExpressionField("title", context: context)
    )
  }

  init(
    color: Expression<Color>? = nil,
    latitude: Expression<Double>,
    longitude: Expression<Double>,
    onClickActions: [DivAction]? = nil,
    title: Expression<String>? = nil
  ) {
    self.color = color
    self.latitude = latitude
    self.longitude = longitude
    self.onClickActions = onClickActions
    self.title = title
  }
}

#if DEBUG
extension DivGoogleMapMarker: Equatable {
  public static func ==(lhs: DivGoogleMapMarker, rhs: DivGoogleMapMarker) -> Bool {
    guard
      lhs.color == rhs.color,
      lhs.latitude == rhs.latitude,
      lhs.longitude == rhs.longitude
    else {
      return false
    }
    guard
      lhs.onClickActions == rhs.onClickActions,
      lhs.title == rhs.title
    else {
      return false
    }
    return true
  }
}
#endif

extension DivGoogleMapMarker: Serializable {
  @_optimize(size)
  public func toDictionary() -> [String: ValidSerializationValue] {
    var result: [String: ValidSerializationValue] = [:]
    result["color"] = color?.toValidSerializationValue()
    result["latitude"] = latitude.toValidSerializationValue()
    result["longitude"] = longitude.toValidSerializationValue()
    result["on_click_actions"] = onClickActions?.map { $0.toDictionary() }
    result["title"] = title?.toValidSerializationValue()
    return result
  }
}
