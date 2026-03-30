// Generated code. Do not modify.

import Foundation
import Serialization
import VGSL

public final class DivAutocompleteSuggestion: Sendable {
  public let secondaryText: Expression<String>?
  public let text: Expression<String>?
  public let value: Expression<String>

  public func resolveSecondaryText(_ resolver: ExpressionResolver) -> String? {
    resolver.resolveString(secondaryText)
  }

  public func resolveText(_ resolver: ExpressionResolver) -> String? {
    resolver.resolveString(text)
  }

  public func resolveValue(_ resolver: ExpressionResolver) -> String? {
    resolver.resolveString(value)
  }

  public convenience init(dictionary: [String: Any], context: ParsingContext) throws {
    self.init(
      secondaryText: try dictionary.getOptionalExpressionField("secondary_text", context: context),
      text: try dictionary.getOptionalExpressionField("text", context: context),
      value: try dictionary.getExpressionField("value", context: context)
    )
  }

  init(
    secondaryText: Expression<String>? = nil,
    text: Expression<String>? = nil,
    value: Expression<String>
  ) {
    self.secondaryText = secondaryText
    self.text = text
    self.value = value
  }
}

#if DEBUG
extension DivAutocompleteSuggestion: Equatable {
  public static func ==(lhs: DivAutocompleteSuggestion, rhs: DivAutocompleteSuggestion) -> Bool {
    guard
      lhs.secondaryText == rhs.secondaryText,
      lhs.text == rhs.text,
      lhs.value == rhs.value
    else {
      return false
    }
    return true
  }
}
#endif

extension DivAutocompleteSuggestion: Serializable {
  @_optimize(size)
  public func toDictionary() -> [String: ValidSerializationValue] {
    var result: [String: ValidSerializationValue] = [:]
    result["secondary_text"] = secondaryText?.toValidSerializationValue()
    result["text"] = text?.toValidSerializationValue()
    result["value"] = value.toValidSerializationValue()
    return result
  }
}
