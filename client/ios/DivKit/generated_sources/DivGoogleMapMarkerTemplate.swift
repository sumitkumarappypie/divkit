// Generated code. Do not modify.

import Foundation
import Serialization
import VGSL

public final class DivGoogleMapMarkerTemplate: TemplateValue, Sendable {
  public let color: Field<Expression<Color>>?
  public let latitude: Field<Expression<Double>>?
  public let longitude: Field<Expression<Double>>?
  public let onClickActions: Field<[DivActionTemplate]>?
  public let title: Field<Expression<String>>?

  public convenience init(dictionary: [String: Any], templateToType: [TemplateName: String]) throws {
    self.init(
      color: dictionary.getOptionalExpressionField("color", transform: Color.color(withHexString:)),
      latitude: dictionary.getOptionalExpressionField("latitude"),
      longitude: dictionary.getOptionalExpressionField("longitude"),
      onClickActions: dictionary.getOptionalArray("on_click_actions", templateToType: templateToType),
      title: dictionary.getOptionalExpressionField("title")
    )
  }

  init(
    color: Field<Expression<Color>>? = nil,
    latitude: Field<Expression<Double>>? = nil,
    longitude: Field<Expression<Double>>? = nil,
    onClickActions: Field<[DivActionTemplate]>? = nil,
    title: Field<Expression<String>>? = nil
  ) {
    self.color = color
    self.latitude = latitude
    self.longitude = longitude
    self.onClickActions = onClickActions
    self.title = title
  }

  private static func resolveOnlyLinks(context: TemplatesContext, parent: DivGoogleMapMarkerTemplate?) -> DeserializationResult<DivGoogleMapMarker> {
    let colorValue = parent?.color?.resolveOptionalValue(context: context, transform: Color.color(withHexString:)) ?? .noValue
    let latitudeValue = parent?.latitude?.resolveValue(context: context) ?? .noValue
    let longitudeValue = parent?.longitude?.resolveValue(context: context) ?? .noValue
    let onClickActionsValue = parent?.onClickActions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let titleValue = parent?.title?.resolveOptionalValue(context: context) ?? .noValue
    var errors = mergeErrors(
      colorValue.errorsOrWarnings?.map { .nestedObjectError(field: "color", error: $0) },
      latitudeValue.errorsOrWarnings?.map { .nestedObjectError(field: "latitude", error: $0) },
      longitudeValue.errorsOrWarnings?.map { .nestedObjectError(field: "longitude", error: $0) },
      onClickActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "on_click_actions", error: $0) },
      titleValue.errorsOrWarnings?.map { .nestedObjectError(field: "title", error: $0) }
    )
    if case .noValue = latitudeValue {
      errors.append(.requiredFieldIsMissing(field: "latitude"))
    }
    if case .noValue = longitudeValue {
      errors.append(.requiredFieldIsMissing(field: "longitude"))
    }
    guard
      let latitudeNonNil = latitudeValue.value,
      let longitudeNonNil = longitudeValue.value
    else {
      return .failure(NonEmptyArray(errors)!)
    }
    let result = DivGoogleMapMarker(
      color: colorValue.value,
      latitude: latitudeNonNil,
      longitude: longitudeNonNil,
      onClickActions: onClickActionsValue.value,
      title: titleValue.value
    )
    return errors.isEmpty ? .success(result) : .partialSuccess(result, warnings: NonEmptyArray(errors)!)
  }

  public static func resolveValue(context: TemplatesContext, parent: DivGoogleMapMarkerTemplate?, useOnlyLinks: Bool) -> DeserializationResult<DivGoogleMapMarker> {
    if useOnlyLinks {
      return resolveOnlyLinks(context: context, parent: parent)
    }
    var colorValue: DeserializationResult<Expression<Color>> = parent?.color?.value() ?? .noValue
    var latitudeValue: DeserializationResult<Expression<Double>> = parent?.latitude?.value() ?? .noValue
    var longitudeValue: DeserializationResult<Expression<Double>> = parent?.longitude?.value() ?? .noValue
    var onClickActionsValue: DeserializationResult<[DivAction]> = .noValue
    var titleValue: DeserializationResult<Expression<String>> = parent?.title?.value() ?? .noValue
    context.templateData.forEach { key, __dictValue in
      switch key {
      case "color":
        colorValue = deserialize(__dictValue, transform: Color.color(withHexString:)).merged(with: colorValue)
      case "latitude":
        latitudeValue = deserialize(__dictValue).merged(with: latitudeValue)
      case "longitude":
        longitudeValue = deserialize(__dictValue).merged(with: longitudeValue)
      case "on_click_actions":
        onClickActionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self).merged(with: onClickActionsValue)
      case "title":
        titleValue = deserialize(__dictValue).merged(with: titleValue)
      case parent?.color?.link:
        colorValue = colorValue.merged(with: { deserialize(__dictValue, transform: Color.color(withHexString:)) })
      case parent?.latitude?.link:
        latitudeValue = latitudeValue.merged(with: { deserialize(__dictValue) })
      case parent?.longitude?.link:
        longitudeValue = longitudeValue.merged(with: { deserialize(__dictValue) })
      case parent?.onClickActions?.link:
        onClickActionsValue = onClickActionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self) })
      case parent?.title?.link:
        titleValue = titleValue.merged(with: { deserialize(__dictValue) })
      default: break
      }
    }
    if let parent = parent {
      _ = onClickActionsValue = onClickActionsValue.merged(with: { parent.onClickActions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
    }
    var errors = mergeErrors(
      colorValue.errorsOrWarnings?.map { .nestedObjectError(field: "color", error: $0) },
      latitudeValue.errorsOrWarnings?.map { .nestedObjectError(field: "latitude", error: $0) },
      longitudeValue.errorsOrWarnings?.map { .nestedObjectError(field: "longitude", error: $0) },
      onClickActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "on_click_actions", error: $0) },
      titleValue.errorsOrWarnings?.map { .nestedObjectError(field: "title", error: $0) }
    )
    if case .noValue = latitudeValue {
      errors.append(.requiredFieldIsMissing(field: "latitude"))
    }
    if case .noValue = longitudeValue {
      errors.append(.requiredFieldIsMissing(field: "longitude"))
    }
    guard
      let latitudeNonNil = latitudeValue.value,
      let longitudeNonNil = longitudeValue.value
    else {
      return .failure(NonEmptyArray(errors)!)
    }
    let result = DivGoogleMapMarker(
      color: colorValue.value,
      latitude: latitudeNonNil,
      longitude: longitudeNonNil,
      onClickActions: onClickActionsValue.value,
      title: titleValue.value
    )
    return errors.isEmpty ? .success(result) : .partialSuccess(result, warnings: NonEmptyArray(errors)!)
  }

  private func mergedWithParent(templates: [TemplateName: Any]) throws -> DivGoogleMapMarkerTemplate {
    return self
  }

  public func resolveParent(templates: [TemplateName: Any]) throws -> DivGoogleMapMarkerTemplate {
    return try mergedWithParent(templates: templates)
  }
}
