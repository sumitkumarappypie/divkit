// Generated code. Do not modify.

import Foundation
import Serialization
import VGSL

public final class DivChoiceChipsItem: Sendable {
  public let icon: DivImageBackground?
  public let isEnabled: Expression<Bool> // default value: true
  public let isSelectedByDefault: Expression<Bool> // default value: false
  public let text: Expression<String>?
  public let value: Expression<String>

  public func resolveIsEnabled(_ resolver: ExpressionResolver) -> Bool {
    resolver.resolveNumeric(isEnabled) ?? true
  }

  public func resolveIsSelectedByDefault(_ resolver: ExpressionResolver) -> Bool {
    resolver.resolveNumeric(isSelectedByDefault) ?? false
  }

  public func resolveText(_ resolver: ExpressionResolver) -> String? {
    resolver.resolveString(text)
  }

  public func resolveValue(_ resolver: ExpressionResolver) -> String? {
    resolver.resolveString(value)
  }

  public convenience init(dictionary: [String: Any], context: ParsingContext) throws {
    self.init(
      icon: try dictionary.getOptionalField("icon", transform: { (dict: [String: Any]) in try DivImageBackground(dictionary: dict, context: context) }),
      isEnabled: try dictionary.getOptionalExpressionField("is_enabled", context: context),
      isSelectedByDefault: try dictionary.getOptionalExpressionField("is_selected_by_default", context: context),
      text: try dictionary.getOptionalExpressionField("text", context: context),
      value: try dictionary.getExpressionField("value", context: context)
    )
  }

  init(
    icon: DivImageBackground? = nil,
    isEnabled: Expression<Bool>? = nil,
    isSelectedByDefault: Expression<Bool>? = nil,
    text: Expression<String>? = nil,
    value: Expression<String>
  ) {
    self.icon = icon
    self.isEnabled = isEnabled ?? .value(true)
    self.isSelectedByDefault = isSelectedByDefault ?? .value(false)
    self.text = text
    self.value = value
  }
}

#if DEBUG
extension DivChoiceChipsItem: Equatable {
  public static func ==(lhs: DivChoiceChipsItem, rhs: DivChoiceChipsItem) -> Bool {
    guard
      lhs.icon == rhs.icon,
      lhs.isEnabled == rhs.isEnabled,
      lhs.isSelectedByDefault == rhs.isSelectedByDefault
    else {
      return false
    }
    guard
      lhs.text == rhs.text,
      lhs.value == rhs.value
    else {
      return false
    }
    return true
  }
}
#endif

extension DivChoiceChipsItem: Serializable {
  @_optimize(size)
  public func toDictionary() -> [String: ValidSerializationValue] {
    var result: [String: ValidSerializationValue] = [:]
    result["icon"] = icon?.toDictionary()
    result["is_enabled"] = isEnabled.toValidSerializationValue()
    result["is_selected_by_default"] = isSelectedByDefault.toValidSerializationValue()
    result["text"] = text?.toValidSerializationValue()
    result["value"] = value.toValidSerializationValue()
    return result
  }
}
