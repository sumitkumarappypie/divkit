// Generated code. Do not modify.

import Foundation
import Serialization
import VGSL

public final class DivAutocompleteSuggestionTemplate: TemplateValue, Sendable {
  public let secondaryText: Field<Expression<String>>?
  public let text: Field<Expression<String>>?
  public let value: Field<Expression<String>>?

  public convenience init(dictionary: [String: Any], templateToType: [TemplateName: String]) throws {
    self.init(
      secondaryText: dictionary.getOptionalExpressionField("secondary_text"),
      text: dictionary.getOptionalExpressionField("text"),
      value: dictionary.getOptionalExpressionField("value")
    )
  }

  init(
    secondaryText: Field<Expression<String>>? = nil,
    text: Field<Expression<String>>? = nil,
    value: Field<Expression<String>>? = nil
  ) {
    self.secondaryText = secondaryText
    self.text = text
    self.value = value
  }

  private static func resolveOnlyLinks(context: TemplatesContext, parent: DivAutocompleteSuggestionTemplate?) -> DeserializationResult<DivAutocompleteSuggestion> {
    let secondaryTextValue = parent?.secondaryText?.resolveOptionalValue(context: context) ?? .noValue
    let textValue = parent?.text?.resolveOptionalValue(context: context) ?? .noValue
    let valueValue = parent?.value?.resolveValue(context: context) ?? .noValue
    var errors = mergeErrors(
      secondaryTextValue.errorsOrWarnings?.map { .nestedObjectError(field: "secondary_text", error: $0) },
      textValue.errorsOrWarnings?.map { .nestedObjectError(field: "text", error: $0) },
      valueValue.errorsOrWarnings?.map { .nestedObjectError(field: "value", error: $0) }
    )
    if case .noValue = valueValue {
      errors.append(.requiredFieldIsMissing(field: "value"))
    }
    guard
      let valueNonNil = valueValue.value
    else {
      return .failure(NonEmptyArray(errors)!)
    }
    let result = DivAutocompleteSuggestion(
      secondaryText: secondaryTextValue.value,
      text: textValue.value,
      value: valueNonNil
    )
    return errors.isEmpty ? .success(result) : .partialSuccess(result, warnings: NonEmptyArray(errors)!)
  }

  public static func resolveValue(context: TemplatesContext, parent: DivAutocompleteSuggestionTemplate?, useOnlyLinks: Bool) -> DeserializationResult<DivAutocompleteSuggestion> {
    if useOnlyLinks {
      return resolveOnlyLinks(context: context, parent: parent)
    }
    var secondaryTextValue: DeserializationResult<Expression<String>> = parent?.secondaryText?.value() ?? .noValue
    var textValue: DeserializationResult<Expression<String>> = parent?.text?.value() ?? .noValue
    var valueValue: DeserializationResult<Expression<String>> = parent?.value?.value() ?? .noValue
    context.templateData.forEach { key, __dictValue in
      switch key {
      case "secondary_text":
        secondaryTextValue = deserialize(__dictValue).merged(with: secondaryTextValue)
      case "text":
        textValue = deserialize(__dictValue).merged(with: textValue)
      case "value":
        valueValue = deserialize(__dictValue).merged(with: valueValue)
      case parent?.secondaryText?.link:
        secondaryTextValue = secondaryTextValue.merged(with: { deserialize(__dictValue) })
      case parent?.text?.link:
        textValue = textValue.merged(with: { deserialize(__dictValue) })
      case parent?.value?.link:
        valueValue = valueValue.merged(with: { deserialize(__dictValue) })
      default: break
      }
    }
    var errors = mergeErrors(
      secondaryTextValue.errorsOrWarnings?.map { .nestedObjectError(field: "secondary_text", error: $0) },
      textValue.errorsOrWarnings?.map { .nestedObjectError(field: "text", error: $0) },
      valueValue.errorsOrWarnings?.map { .nestedObjectError(field: "value", error: $0) }
    )
    if case .noValue = valueValue {
      errors.append(.requiredFieldIsMissing(field: "value"))
    }
    guard
      let valueNonNil = valueValue.value
    else {
      return .failure(NonEmptyArray(errors)!)
    }
    let result = DivAutocompleteSuggestion(
      secondaryText: secondaryTextValue.value,
      text: textValue.value,
      value: valueNonNil
    )
    return errors.isEmpty ? .success(result) : .partialSuccess(result, warnings: NonEmptyArray(errors)!)
  }

  private func mergedWithParent(templates: [TemplateName: Any]) throws -> DivAutocompleteSuggestionTemplate {
    return self
  }

  public func resolveParent(templates: [TemplateName: Any]) throws -> DivAutocompleteSuggestionTemplate {
    return try mergedWithParent(templates: templates)
  }
}
