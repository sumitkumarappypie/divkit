// Generated code. Do not modify.

import Foundation
import Serialization
import VGSL

public final class DivChoiceChipsItemTemplate: TemplateValue, Sendable {
  public let icon: Field<DivImageBackgroundTemplate>?
  public let isEnabled: Field<Expression<Bool>>? // default value: true
  public let isSelectedByDefault: Field<Expression<Bool>>? // default value: false
  public let text: Field<Expression<String>>?
  public let value: Field<Expression<String>>?

  public convenience init(dictionary: [String: Any], templateToType: [TemplateName: String]) throws {
    self.init(
      icon: dictionary.getOptionalField("icon", templateToType: templateToType),
      isEnabled: dictionary.getOptionalExpressionField("is_enabled"),
      isSelectedByDefault: dictionary.getOptionalExpressionField("is_selected_by_default"),
      text: dictionary.getOptionalExpressionField("text"),
      value: dictionary.getOptionalExpressionField("value")
    )
  }

  init(
    icon: Field<DivImageBackgroundTemplate>? = nil,
    isEnabled: Field<Expression<Bool>>? = nil,
    isSelectedByDefault: Field<Expression<Bool>>? = nil,
    text: Field<Expression<String>>? = nil,
    value: Field<Expression<String>>? = nil
  ) {
    self.icon = icon
    self.isEnabled = isEnabled
    self.isSelectedByDefault = isSelectedByDefault
    self.text = text
    self.value = value
  }

  private static func resolveOnlyLinks(context: TemplatesContext, parent: DivChoiceChipsItemTemplate?) -> DeserializationResult<DivChoiceChipsItem> {
    let iconValue = parent?.icon?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let isEnabledValue = parent?.isEnabled?.resolveOptionalValue(context: context) ?? .noValue
    let isSelectedByDefaultValue = parent?.isSelectedByDefault?.resolveOptionalValue(context: context) ?? .noValue
    let textValue = parent?.text?.resolveOptionalValue(context: context) ?? .noValue
    let valueValue = parent?.value?.resolveValue(context: context) ?? .noValue
    var errors = mergeErrors(
      iconValue.errorsOrWarnings?.map { .nestedObjectError(field: "icon", error: $0) },
      isEnabledValue.errorsOrWarnings?.map { .nestedObjectError(field: "is_enabled", error: $0) },
      isSelectedByDefaultValue.errorsOrWarnings?.map { .nestedObjectError(field: "is_selected_by_default", error: $0) },
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
    let result = DivChoiceChipsItem(
      icon: iconValue.value,
      isEnabled: isEnabledValue.value,
      isSelectedByDefault: isSelectedByDefaultValue.value,
      text: textValue.value,
      value: valueNonNil
    )
    return errors.isEmpty ? .success(result) : .partialSuccess(result, warnings: NonEmptyArray(errors)!)
  }

  public static func resolveValue(context: TemplatesContext, parent: DivChoiceChipsItemTemplate?, useOnlyLinks: Bool) -> DeserializationResult<DivChoiceChipsItem> {
    if useOnlyLinks {
      return resolveOnlyLinks(context: context, parent: parent)
    }
    var iconValue: DeserializationResult<DivImageBackground> = .noValue
    var isEnabledValue: DeserializationResult<Expression<Bool>> = parent?.isEnabled?.value() ?? .noValue
    var isSelectedByDefaultValue: DeserializationResult<Expression<Bool>> = parent?.isSelectedByDefault?.value() ?? .noValue
    var textValue: DeserializationResult<Expression<String>> = parent?.text?.value() ?? .noValue
    var valueValue: DeserializationResult<Expression<String>> = parent?.value?.value() ?? .noValue
    context.templateData.forEach { key, __dictValue in
      switch key {
      case "icon":
        iconValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivImageBackgroundTemplate.self).merged(with: iconValue)
      case "is_enabled":
        isEnabledValue = deserialize(__dictValue).merged(with: isEnabledValue)
      case "is_selected_by_default":
        isSelectedByDefaultValue = deserialize(__dictValue).merged(with: isSelectedByDefaultValue)
      case "text":
        textValue = deserialize(__dictValue).merged(with: textValue)
      case "value":
        valueValue = deserialize(__dictValue).merged(with: valueValue)
      case parent?.icon?.link:
        iconValue = iconValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivImageBackgroundTemplate.self) })
      case parent?.isEnabled?.link:
        isEnabledValue = isEnabledValue.merged(with: { deserialize(__dictValue) })
      case parent?.isSelectedByDefault?.link:
        isSelectedByDefaultValue = isSelectedByDefaultValue.merged(with: { deserialize(__dictValue) })
      case parent?.text?.link:
        textValue = textValue.merged(with: { deserialize(__dictValue) })
      case parent?.value?.link:
        valueValue = valueValue.merged(with: { deserialize(__dictValue) })
      default: break
      }
    }
    if let parent = parent {
      _ = iconValue = iconValue.merged(with: { parent.icon?.resolveOptionalValue(context: context, useOnlyLinks: true) })
    }
    var errors = mergeErrors(
      iconValue.errorsOrWarnings?.map { .nestedObjectError(field: "icon", error: $0) },
      isEnabledValue.errorsOrWarnings?.map { .nestedObjectError(field: "is_enabled", error: $0) },
      isSelectedByDefaultValue.errorsOrWarnings?.map { .nestedObjectError(field: "is_selected_by_default", error: $0) },
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
    let result = DivChoiceChipsItem(
      icon: iconValue.value,
      isEnabled: isEnabledValue.value,
      isSelectedByDefault: isSelectedByDefaultValue.value,
      text: textValue.value,
      value: valueNonNil
    )
    return errors.isEmpty ? .success(result) : .partialSuccess(result, warnings: NonEmptyArray(errors)!)
  }

  private func mergedWithParent(templates: [TemplateName: Any]) throws -> DivChoiceChipsItemTemplate {
    return self
  }

  public func resolveParent(templates: [TemplateName: Any]) throws -> DivChoiceChipsItemTemplate {
    let merged = try mergedWithParent(templates: templates)

    return DivChoiceChipsItemTemplate(
      icon: merged.icon?.tryResolveParent(templates: templates),
      isEnabled: merged.isEnabled,
      isSelectedByDefault: merged.isSelectedByDefault,
      text: merged.text,
      value: merged.value
    )
  }
}
