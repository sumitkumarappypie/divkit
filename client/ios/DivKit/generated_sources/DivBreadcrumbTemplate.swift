// Generated code. Do not modify.

import Foundation
import Serialization
import VGSL

public final class DivBreadcrumbTemplate: TemplateValue, Sendable {
  public final class CrumbTemplate: TemplateValue, Sendable {
    public let action: Field<DivActionTemplate>?
    public let title: Field<Expression<String>>?

    public convenience init(dictionary: [String: Any], templateToType: [TemplateName: String]) throws {
      self.init(
        action: dictionary.getOptionalField("action", templateToType: templateToType),
        title: dictionary.getOptionalExpressionField("title")
      )
    }

    init(
      action: Field<DivActionTemplate>? = nil,
      title: Field<Expression<String>>? = nil
    ) {
      self.action = action
      self.title = title
    }

    private static func resolveOnlyLinks(context: TemplatesContext, parent: CrumbTemplate?) -> DeserializationResult<DivBreadcrumb.Crumb> {
      let actionValue = parent?.action?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
      let titleValue = parent?.title?.resolveValue(context: context) ?? .noValue
      var errors = mergeErrors(
        actionValue.errorsOrWarnings?.map { .nestedObjectError(field: "action", error: $0) },
        titleValue.errorsOrWarnings?.map { .nestedObjectError(field: "title", error: $0) }
      )
      if case .noValue = titleValue {
        errors.append(.requiredFieldIsMissing(field: "title"))
      }
      guard
        let titleNonNil = titleValue.value
      else {
        return .failure(NonEmptyArray(errors)!)
      }
      let result = DivBreadcrumb.Crumb(
        action: actionValue.value,
        title: titleNonNil
      )
      return errors.isEmpty ? .success(result) : .partialSuccess(result, warnings: NonEmptyArray(errors)!)
    }

    public static func resolveValue(context: TemplatesContext, parent: CrumbTemplate?, useOnlyLinks: Bool) -> DeserializationResult<DivBreadcrumb.Crumb> {
      if useOnlyLinks {
        return resolveOnlyLinks(context: context, parent: parent)
      }
      var actionValue: DeserializationResult<DivAction> = .noValue
      var titleValue: DeserializationResult<Expression<String>> = parent?.title?.value() ?? .noValue
      context.templateData.forEach { key, __dictValue in
        switch key {
        case "action":
          actionValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self).merged(with: actionValue)
        case "title":
          titleValue = deserialize(__dictValue).merged(with: titleValue)
        case parent?.action?.link:
          actionValue = actionValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self) })
        case parent?.title?.link:
          titleValue = titleValue.merged(with: { deserialize(__dictValue) })
        default: break
        }
      }
      if let parent = parent {
        _ = actionValue = actionValue.merged(with: { parent.action?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      }
      var errors = mergeErrors(
        actionValue.errorsOrWarnings?.map { .nestedObjectError(field: "action", error: $0) },
        titleValue.errorsOrWarnings?.map { .nestedObjectError(field: "title", error: $0) }
      )
      if case .noValue = titleValue {
        errors.append(.requiredFieldIsMissing(field: "title"))
      }
      guard
        let titleNonNil = titleValue.value
      else {
        return .failure(NonEmptyArray(errors)!)
      }
      let result = DivBreadcrumb.Crumb(
        action: actionValue.value,
        title: titleNonNil
      )
      return errors.isEmpty ? .success(result) : .partialSuccess(result, warnings: NonEmptyArray(errors)!)
    }

    private func mergedWithParent(templates: [TemplateName: Any]) throws -> CrumbTemplate {
      return self
    }

    public func resolveParent(templates: [TemplateName: Any]) throws -> CrumbTemplate {
      let merged = try mergedWithParent(templates: templates)

      return CrumbTemplate(
        action: merged.action?.tryResolveParent(templates: templates),
        title: merged.title
      )
    }
  }

  public final class ItemBuilderTemplate: TemplateValue, @unchecked Sendable {
    public final class PrototypeTemplate: TemplateValue, Sendable {
      public let action: Field<DivActionTemplate>?
      public let selector: Field<Expression<Bool>>? // default value: true
      public let title: Field<Expression<String>>?

      public convenience init(dictionary: [String: Any], templateToType: [TemplateName: String]) throws {
        self.init(
          action: dictionary.getOptionalField("action", templateToType: templateToType),
          selector: dictionary.getOptionalExpressionField("selector"),
          title: dictionary.getOptionalExpressionField("title")
        )
      }

      init(
        action: Field<DivActionTemplate>? = nil,
        selector: Field<Expression<Bool>>? = nil,
        title: Field<Expression<String>>? = nil
      ) {
        self.action = action
        self.selector = selector
        self.title = title
      }

      private static func resolveOnlyLinks(context: TemplatesContext, parent: PrototypeTemplate?) -> DeserializationResult<DivBreadcrumb.ItemBuilder.Prototype> {
        let actionValue = parent?.action?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
        let selectorValue = parent?.selector?.resolveOptionalValue(context: context) ?? .noValue
        let titleValue = parent?.title?.resolveValue(context: context) ?? .noValue
        var errors = mergeErrors(
          actionValue.errorsOrWarnings?.map { .nestedObjectError(field: "action", error: $0) },
          selectorValue.errorsOrWarnings?.map { .nestedObjectError(field: "selector", error: $0) },
          titleValue.errorsOrWarnings?.map { .nestedObjectError(field: "title", error: $0) }
        )
        if case .noValue = titleValue {
          errors.append(.requiredFieldIsMissing(field: "title"))
        }
        guard
          let titleNonNil = titleValue.value
        else {
          return .failure(NonEmptyArray(errors)!)
        }
        let result = DivBreadcrumb.ItemBuilder.Prototype(
          action: actionValue.value,
          selector: selectorValue.value,
          title: titleNonNil
        )
        return errors.isEmpty ? .success(result) : .partialSuccess(result, warnings: NonEmptyArray(errors)!)
      }

      public static func resolveValue(context: TemplatesContext, parent: PrototypeTemplate?, useOnlyLinks: Bool) -> DeserializationResult<DivBreadcrumb.ItemBuilder.Prototype> {
        if useOnlyLinks {
          return resolveOnlyLinks(context: context, parent: parent)
        }
        var actionValue: DeserializationResult<DivAction> = .noValue
        var selectorValue: DeserializationResult<Expression<Bool>> = parent?.selector?.value() ?? .noValue
        var titleValue: DeserializationResult<Expression<String>> = parent?.title?.value() ?? .noValue
        context.templateData.forEach { key, __dictValue in
          switch key {
          case "action":
            actionValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self).merged(with: actionValue)
          case "selector":
            selectorValue = deserialize(__dictValue).merged(with: selectorValue)
          case "title":
            titleValue = deserialize(__dictValue).merged(with: titleValue)
          case parent?.action?.link:
            actionValue = actionValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self) })
          case parent?.selector?.link:
            selectorValue = selectorValue.merged(with: { deserialize(__dictValue) })
          case parent?.title?.link:
            titleValue = titleValue.merged(with: { deserialize(__dictValue) })
          default: break
          }
        }
        if let parent = parent {
          _ = actionValue = actionValue.merged(with: { parent.action?.resolveOptionalValue(context: context, useOnlyLinks: true) })
        }
        var errors = mergeErrors(
          actionValue.errorsOrWarnings?.map { .nestedObjectError(field: "action", error: $0) },
          selectorValue.errorsOrWarnings?.map { .nestedObjectError(field: "selector", error: $0) },
          titleValue.errorsOrWarnings?.map { .nestedObjectError(field: "title", error: $0) }
        )
        if case .noValue = titleValue {
          errors.append(.requiredFieldIsMissing(field: "title"))
        }
        guard
          let titleNonNil = titleValue.value
        else {
          return .failure(NonEmptyArray(errors)!)
        }
        let result = DivBreadcrumb.ItemBuilder.Prototype(
          action: actionValue.value,
          selector: selectorValue.value,
          title: titleNonNil
        )
        return errors.isEmpty ? .success(result) : .partialSuccess(result, warnings: NonEmptyArray(errors)!)
      }

      private func mergedWithParent(templates: [TemplateName: Any]) throws -> PrototypeTemplate {
        return self
      }

      public func resolveParent(templates: [TemplateName: Any]) throws -> PrototypeTemplate {
        let merged = try mergedWithParent(templates: templates)

        return PrototypeTemplate(
          action: merged.action?.tryResolveParent(templates: templates),
          selector: merged.selector,
          title: merged.title
        )
      }
    }

    public let data: Field<Expression<[Any]>>?
    public let dataElementName: Field<String>? // default value: it
    public let prototypes: Field<[PrototypeTemplate]>? // at least 1 elements

    public convenience init(dictionary: [String: Any], templateToType: [TemplateName: String]) throws {
      self.init(
        data: dictionary.getOptionalExpressionField("data"),
        dataElementName: dictionary.getOptionalField("data_element_name"),
        prototypes: dictionary.getOptionalArray("prototypes", templateToType: templateToType)
      )
    }

    init(
      data: Field<Expression<[Any]>>? = nil,
      dataElementName: Field<String>? = nil,
      prototypes: Field<[PrototypeTemplate]>? = nil
    ) {
      self.data = data
      self.dataElementName = dataElementName
      self.prototypes = prototypes
    }

    private static func resolveOnlyLinks(context: TemplatesContext, parent: ItemBuilderTemplate?) -> DeserializationResult<DivBreadcrumb.ItemBuilder> {
      let dataValue = parent?.data?.resolveValue(context: context) ?? .noValue
      let dataElementNameValue = parent?.dataElementName?.resolveOptionalValue(context: context) ?? .noValue
      let prototypesValue = parent?.prototypes?.resolveValue(context: context, validator: ResolvedValue.prototypesValidator, useOnlyLinks: true) ?? .noValue
      var errors = mergeErrors(
        dataValue.errorsOrWarnings?.map { .nestedObjectError(field: "data", error: $0) },
        dataElementNameValue.errorsOrWarnings?.map { .nestedObjectError(field: "data_element_name", error: $0) },
        prototypesValue.errorsOrWarnings?.map { .nestedObjectError(field: "prototypes", error: $0) }
      )
      if case .noValue = dataValue {
        errors.append(.requiredFieldIsMissing(field: "data"))
      }
      if case .noValue = prototypesValue {
        errors.append(.requiredFieldIsMissing(field: "prototypes"))
      }
      guard
        let dataNonNil = dataValue.value,
        let prototypesNonNil = prototypesValue.value
      else {
        return .failure(NonEmptyArray(errors)!)
      }
      let result = DivBreadcrumb.ItemBuilder(
        data: dataNonNil,
        dataElementName: dataElementNameValue.value,
        prototypes: prototypesNonNil
      )
      return errors.isEmpty ? .success(result) : .partialSuccess(result, warnings: NonEmptyArray(errors)!)
    }

    public static func resolveValue(context: TemplatesContext, parent: ItemBuilderTemplate?, useOnlyLinks: Bool) -> DeserializationResult<DivBreadcrumb.ItemBuilder> {
      if useOnlyLinks {
        return resolveOnlyLinks(context: context, parent: parent)
      }
      var dataValue: DeserializationResult<Expression<[Any]>> = parent?.data?.value() ?? .noValue
      var dataElementNameValue: DeserializationResult<String> = parent?.dataElementName?.value() ?? .noValue
      var prototypesValue: DeserializationResult<[DivBreadcrumb.ItemBuilder.Prototype]> = .noValue
      context.templateData.forEach { key, __dictValue in
        switch key {
        case "data":
          dataValue = deserialize(__dictValue).merged(with: dataValue)
        case "data_element_name":
          dataElementNameValue = deserialize(__dictValue).merged(with: dataElementNameValue)
        case "prototypes":
          prototypesValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, validator: ResolvedValue.prototypesValidator, type: DivBreadcrumbTemplate.ItemBuilderTemplate.PrototypeTemplate.self).merged(with: prototypesValue)
        case parent?.data?.link:
          dataValue = dataValue.merged(with: { deserialize(__dictValue) })
        case parent?.dataElementName?.link:
          dataElementNameValue = dataElementNameValue.merged(with: { deserialize(__dictValue) })
        case parent?.prototypes?.link:
          prototypesValue = prototypesValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, validator: ResolvedValue.prototypesValidator, type: DivBreadcrumbTemplate.ItemBuilderTemplate.PrototypeTemplate.self) })
        default: break
        }
      }
      if let parent = parent {
        _ = prototypesValue = prototypesValue.merged(with: { parent.prototypes?.resolveValue(context: context, validator: ResolvedValue.prototypesValidator, useOnlyLinks: true) })
      }
      var errors = mergeErrors(
        dataValue.errorsOrWarnings?.map { .nestedObjectError(field: "data", error: $0) },
        dataElementNameValue.errorsOrWarnings?.map { .nestedObjectError(field: "data_element_name", error: $0) },
        prototypesValue.errorsOrWarnings?.map { .nestedObjectError(field: "prototypes", error: $0) }
      )
      if case .noValue = dataValue {
        errors.append(.requiredFieldIsMissing(field: "data"))
      }
      if case .noValue = prototypesValue {
        errors.append(.requiredFieldIsMissing(field: "prototypes"))
      }
      guard
        let dataNonNil = dataValue.value,
        let prototypesNonNil = prototypesValue.value
      else {
        return .failure(NonEmptyArray(errors)!)
      }
      let result = DivBreadcrumb.ItemBuilder(
        data: dataNonNil,
        dataElementName: dataElementNameValue.value,
        prototypes: prototypesNonNil
      )
      return errors.isEmpty ? .success(result) : .partialSuccess(result, warnings: NonEmptyArray(errors)!)
    }

    private func mergedWithParent(templates: [TemplateName: Any]) throws -> ItemBuilderTemplate {
      return self
    }

    public func resolveParent(templates: [TemplateName: Any]) throws -> ItemBuilderTemplate {
      let merged = try mergedWithParent(templates: templates)

      return ItemBuilderTemplate(
        data: merged.data,
        dataElementName: merged.dataElementName,
        prototypes: try merged.prototypes?.resolveParent(templates: templates)
      )
    }
  }

  public static let type: String = "breadcrumb"
  public let parent: String?
  public let accessibility: Field<DivAccessibilityTemplate>?
  public let activeTextColor: Field<Expression<Color>>?
  public let alignmentHorizontal: Field<Expression<DivAlignmentHorizontal>>?
  public let alignmentVertical: Field<Expression<DivAlignmentVertical>>?
  public let alpha: Field<Expression<Double>>? // constraint: number >= 0.0 && number <= 1.0; default value: 1.0
  public let animators: Field<[DivAnimatorTemplate]>?
  public let background: Field<[DivBackgroundTemplate]>?
  public let border: Field<DivBorderTemplate>?
  public let columnSpan: Field<Expression<Int>>? // constraint: number >= 0
  public let crumbs: Field<[CrumbTemplate]>? // at least 1 elements
  public let disappearActions: Field<[DivDisappearActionTemplate]>?
  public let extensions: Field<[DivExtensionTemplate]>?
  public let focus: Field<DivFocusTemplate>?
  public let functions: Field<[DivFunctionTemplate]>?
  public let height: Field<DivSizeTemplate>? // default value: .divWrapContentSize(DivWrapContentSize())
  public let id: Field<String>?
  public let itemBuilder: Field<ItemBuilderTemplate>?
  public let itemFontSize: Field<Expression<Int>>? // constraint: number >= 0; default value: 14
  public let itemTextColor: Field<Expression<Color>>?
  public let layoutProvider: Field<DivLayoutProviderTemplate>?
  public let margins: Field<DivEdgeInsetsTemplate>?
  public let paddings: Field<DivEdgeInsetsTemplate>?
  public let reuseId: Field<Expression<String>>?
  public let rowSpan: Field<Expression<Int>>? // constraint: number >= 0
  public let selectedActions: Field<[DivActionTemplate]>?
  public let separator: Field<Expression<String>>? // default value: /
  public let tooltips: Field<[DivTooltipTemplate]>?
  public let transform: Field<DivTransformTemplate>?
  public let transformations: Field<[DivTransformationTemplate]>?
  public let transitionChange: Field<DivChangeTransitionTemplate>?
  public let transitionIn: Field<DivAppearanceTransitionTemplate>?
  public let transitionOut: Field<DivAppearanceTransitionTemplate>?
  public let transitionTriggers: Field<[DivTransitionTrigger]>? // at least 1 elements
  public let variableTriggers: Field<[DivTriggerTemplate]>?
  public let variables: Field<[DivVariableTemplate]>?
  public let visibility: Field<Expression<DivVisibility>>? // default value: visible
  public let visibilityAction: Field<DivVisibilityActionTemplate>?
  public let visibilityActions: Field<[DivVisibilityActionTemplate]>?
  public let width: Field<DivSizeTemplate>? // default value: .divMatchParentSize(DivMatchParentSize())

  public convenience init(dictionary: [String: Any], templateToType: [TemplateName: String]) throws {
    self.init(
      parent: dictionary["type"] as? String,
      accessibility: dictionary.getOptionalField("accessibility", templateToType: templateToType),
      activeTextColor: dictionary.getOptionalExpressionField("active_text_color", transform: Color.color(withHexString:)),
      alignmentHorizontal: dictionary.getOptionalExpressionField("alignment_horizontal"),
      alignmentVertical: dictionary.getOptionalExpressionField("alignment_vertical"),
      alpha: dictionary.getOptionalExpressionField("alpha"),
      animators: dictionary.getOptionalArray("animators", templateToType: templateToType),
      background: dictionary.getOptionalArray("background", templateToType: templateToType),
      border: dictionary.getOptionalField("border", templateToType: templateToType),
      columnSpan: dictionary.getOptionalExpressionField("column_span"),
      crumbs: dictionary.getOptionalArray("crumbs", templateToType: templateToType),
      disappearActions: dictionary.getOptionalArray("disappear_actions", templateToType: templateToType),
      extensions: dictionary.getOptionalArray("extensions", templateToType: templateToType),
      focus: dictionary.getOptionalField("focus", templateToType: templateToType),
      functions: dictionary.getOptionalArray("functions", templateToType: templateToType),
      height: dictionary.getOptionalField("height", templateToType: templateToType),
      id: dictionary.getOptionalField("id"),
      itemBuilder: dictionary.getOptionalField("item_builder", templateToType: templateToType),
      itemFontSize: dictionary.getOptionalExpressionField("item_font_size"),
      itemTextColor: dictionary.getOptionalExpressionField("item_text_color", transform: Color.color(withHexString:)),
      layoutProvider: dictionary.getOptionalField("layout_provider", templateToType: templateToType),
      margins: dictionary.getOptionalField("margins", templateToType: templateToType),
      paddings: dictionary.getOptionalField("paddings", templateToType: templateToType),
      reuseId: dictionary.getOptionalExpressionField("reuse_id"),
      rowSpan: dictionary.getOptionalExpressionField("row_span"),
      selectedActions: dictionary.getOptionalArray("selected_actions", templateToType: templateToType),
      separator: dictionary.getOptionalExpressionField("separator"),
      tooltips: dictionary.getOptionalArray("tooltips", templateToType: templateToType),
      transform: dictionary.getOptionalField("transform", templateToType: templateToType),
      transformations: dictionary.getOptionalArray("transformations", templateToType: templateToType),
      transitionChange: dictionary.getOptionalField("transition_change", templateToType: templateToType),
      transitionIn: dictionary.getOptionalField("transition_in", templateToType: templateToType),
      transitionOut: dictionary.getOptionalField("transition_out", templateToType: templateToType),
      transitionTriggers: dictionary.getOptionalArray("transition_triggers"),
      variableTriggers: dictionary.getOptionalArray("variable_triggers", templateToType: templateToType),
      variables: dictionary.getOptionalArray("variables", templateToType: templateToType),
      visibility: dictionary.getOptionalExpressionField("visibility"),
      visibilityAction: dictionary.getOptionalField("visibility_action", templateToType: templateToType),
      visibilityActions: dictionary.getOptionalArray("visibility_actions", templateToType: templateToType),
      width: dictionary.getOptionalField("width", templateToType: templateToType)
    )
  }

  init(
    parent: String?,
    accessibility: Field<DivAccessibilityTemplate>? = nil,
    activeTextColor: Field<Expression<Color>>? = nil,
    alignmentHorizontal: Field<Expression<DivAlignmentHorizontal>>? = nil,
    alignmentVertical: Field<Expression<DivAlignmentVertical>>? = nil,
    alpha: Field<Expression<Double>>? = nil,
    animators: Field<[DivAnimatorTemplate]>? = nil,
    background: Field<[DivBackgroundTemplate]>? = nil,
    border: Field<DivBorderTemplate>? = nil,
    columnSpan: Field<Expression<Int>>? = nil,
    crumbs: Field<[CrumbTemplate]>? = nil,
    disappearActions: Field<[DivDisappearActionTemplate]>? = nil,
    extensions: Field<[DivExtensionTemplate]>? = nil,
    focus: Field<DivFocusTemplate>? = nil,
    functions: Field<[DivFunctionTemplate]>? = nil,
    height: Field<DivSizeTemplate>? = nil,
    id: Field<String>? = nil,
    itemBuilder: Field<ItemBuilderTemplate>? = nil,
    itemFontSize: Field<Expression<Int>>? = nil,
    itemTextColor: Field<Expression<Color>>? = nil,
    layoutProvider: Field<DivLayoutProviderTemplate>? = nil,
    margins: Field<DivEdgeInsetsTemplate>? = nil,
    paddings: Field<DivEdgeInsetsTemplate>? = nil,
    reuseId: Field<Expression<String>>? = nil,
    rowSpan: Field<Expression<Int>>? = nil,
    selectedActions: Field<[DivActionTemplate]>? = nil,
    separator: Field<Expression<String>>? = nil,
    tooltips: Field<[DivTooltipTemplate]>? = nil,
    transform: Field<DivTransformTemplate>? = nil,
    transformations: Field<[DivTransformationTemplate]>? = nil,
    transitionChange: Field<DivChangeTransitionTemplate>? = nil,
    transitionIn: Field<DivAppearanceTransitionTemplate>? = nil,
    transitionOut: Field<DivAppearanceTransitionTemplate>? = nil,
    transitionTriggers: Field<[DivTransitionTrigger]>? = nil,
    variableTriggers: Field<[DivTriggerTemplate]>? = nil,
    variables: Field<[DivVariableTemplate]>? = nil,
    visibility: Field<Expression<DivVisibility>>? = nil,
    visibilityAction: Field<DivVisibilityActionTemplate>? = nil,
    visibilityActions: Field<[DivVisibilityActionTemplate]>? = nil,
    width: Field<DivSizeTemplate>? = nil
  ) {
    self.parent = parent
    self.accessibility = accessibility
    self.activeTextColor = activeTextColor
    self.alignmentHorizontal = alignmentHorizontal
    self.alignmentVertical = alignmentVertical
    self.alpha = alpha
    self.animators = animators
    self.background = background
    self.border = border
    self.columnSpan = columnSpan
    self.crumbs = crumbs
    self.disappearActions = disappearActions
    self.extensions = extensions
    self.focus = focus
    self.functions = functions
    self.height = height
    self.id = id
    self.itemBuilder = itemBuilder
    self.itemFontSize = itemFontSize
    self.itemTextColor = itemTextColor
    self.layoutProvider = layoutProvider
    self.margins = margins
    self.paddings = paddings
    self.reuseId = reuseId
    self.rowSpan = rowSpan
    self.selectedActions = selectedActions
    self.separator = separator
    self.tooltips = tooltips
    self.transform = transform
    self.transformations = transformations
    self.transitionChange = transitionChange
    self.transitionIn = transitionIn
    self.transitionOut = transitionOut
    self.transitionTriggers = transitionTriggers
    self.variableTriggers = variableTriggers
    self.variables = variables
    self.visibility = visibility
    self.visibilityAction = visibilityAction
    self.visibilityActions = visibilityActions
    self.width = width
  }

  private static func resolveOnlyLinks(context: TemplatesContext, parent: DivBreadcrumbTemplate?) -> DeserializationResult<DivBreadcrumb> {
    let accessibilityValue = parent?.accessibility?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let activeTextColorValue = parent?.activeTextColor?.resolveOptionalValue(context: context, transform: Color.color(withHexString:)) ?? .noValue
    let alignmentHorizontalValue = parent?.alignmentHorizontal?.resolveOptionalValue(context: context) ?? .noValue
    let alignmentVerticalValue = parent?.alignmentVertical?.resolveOptionalValue(context: context) ?? .noValue
    let alphaValue = parent?.alpha?.resolveOptionalValue(context: context, validator: ResolvedValue.alphaValidator) ?? .noValue
    let animatorsValue = parent?.animators?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let backgroundValue = parent?.background?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let borderValue = parent?.border?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let columnSpanValue = parent?.columnSpan?.resolveOptionalValue(context: context, validator: ResolvedValue.columnSpanValidator) ?? .noValue
    let crumbsValue = parent?.crumbs?.resolveOptionalValue(context: context, validator: ResolvedValue.crumbsValidator, useOnlyLinks: true) ?? .noValue
    let disappearActionsValue = parent?.disappearActions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let extensionsValue = parent?.extensions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let focusValue = parent?.focus?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let functionsValue = parent?.functions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let heightValue = parent?.height?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let idValue = parent?.id?.resolveOptionalValue(context: context) ?? .noValue
    let itemBuilderValue = parent?.itemBuilder?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let itemFontSizeValue = parent?.itemFontSize?.resolveOptionalValue(context: context, validator: ResolvedValue.itemFontSizeValidator) ?? .noValue
    let itemTextColorValue = parent?.itemTextColor?.resolveOptionalValue(context: context, transform: Color.color(withHexString:)) ?? .noValue
    let layoutProviderValue = parent?.layoutProvider?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let marginsValue = parent?.margins?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let paddingsValue = parent?.paddings?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let reuseIdValue = parent?.reuseId?.resolveOptionalValue(context: context) ?? .noValue
    let rowSpanValue = parent?.rowSpan?.resolveOptionalValue(context: context, validator: ResolvedValue.rowSpanValidator) ?? .noValue
    let selectedActionsValue = parent?.selectedActions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let separatorValue = parent?.separator?.resolveOptionalValue(context: context) ?? .noValue
    let tooltipsValue = parent?.tooltips?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let transformValue = parent?.transform?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let transformationsValue = parent?.transformations?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let transitionChangeValue = parent?.transitionChange?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let transitionInValue = parent?.transitionIn?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let transitionOutValue = parent?.transitionOut?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let transitionTriggersValue = parent?.transitionTriggers?.resolveOptionalValue(context: context, validator: ResolvedValue.transitionTriggersValidator) ?? .noValue
    let variableTriggersValue = parent?.variableTriggers?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let variablesValue = parent?.variables?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let visibilityValue = parent?.visibility?.resolveOptionalValue(context: context) ?? .noValue
    let visibilityActionValue = parent?.visibilityAction?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let visibilityActionsValue = parent?.visibilityActions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let widthValue = parent?.width?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let errors = mergeErrors(
      accessibilityValue.errorsOrWarnings?.map { .nestedObjectError(field: "accessibility", error: $0) },
      activeTextColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "active_text_color", error: $0) },
      alignmentHorizontalValue.errorsOrWarnings?.map { .nestedObjectError(field: "alignment_horizontal", error: $0) },
      alignmentVerticalValue.errorsOrWarnings?.map { .nestedObjectError(field: "alignment_vertical", error: $0) },
      alphaValue.errorsOrWarnings?.map { .nestedObjectError(field: "alpha", error: $0) },
      animatorsValue.errorsOrWarnings?.map { .nestedObjectError(field: "animators", error: $0) },
      backgroundValue.errorsOrWarnings?.map { .nestedObjectError(field: "background", error: $0) },
      borderValue.errorsOrWarnings?.map { .nestedObjectError(field: "border", error: $0) },
      columnSpanValue.errorsOrWarnings?.map { .nestedObjectError(field: "column_span", error: $0) },
      crumbsValue.errorsOrWarnings?.map { .nestedObjectError(field: "crumbs", error: $0) },
      disappearActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "disappear_actions", error: $0) },
      extensionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "extensions", error: $0) },
      focusValue.errorsOrWarnings?.map { .nestedObjectError(field: "focus", error: $0) },
      functionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "functions", error: $0) },
      heightValue.errorsOrWarnings?.map { .nestedObjectError(field: "height", error: $0) },
      idValue.errorsOrWarnings?.map { .nestedObjectError(field: "id", error: $0) },
      itemBuilderValue.errorsOrWarnings?.map { .nestedObjectError(field: "item_builder", error: $0) },
      itemFontSizeValue.errorsOrWarnings?.map { .nestedObjectError(field: "item_font_size", error: $0) },
      itemTextColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "item_text_color", error: $0) },
      layoutProviderValue.errorsOrWarnings?.map { .nestedObjectError(field: "layout_provider", error: $0) },
      marginsValue.errorsOrWarnings?.map { .nestedObjectError(field: "margins", error: $0) },
      paddingsValue.errorsOrWarnings?.map { .nestedObjectError(field: "paddings", error: $0) },
      reuseIdValue.errorsOrWarnings?.map { .nestedObjectError(field: "reuse_id", error: $0) },
      rowSpanValue.errorsOrWarnings?.map { .nestedObjectError(field: "row_span", error: $0) },
      selectedActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "selected_actions", error: $0) },
      separatorValue.errorsOrWarnings?.map { .nestedObjectError(field: "separator", error: $0) },
      tooltipsValue.errorsOrWarnings?.map { .nestedObjectError(field: "tooltips", error: $0) },
      transformValue.errorsOrWarnings?.map { .nestedObjectError(field: "transform", error: $0) },
      transformationsValue.errorsOrWarnings?.map { .nestedObjectError(field: "transformations", error: $0) },
      transitionChangeValue.errorsOrWarnings?.map { .nestedObjectError(field: "transition_change", error: $0) },
      transitionInValue.errorsOrWarnings?.map { .nestedObjectError(field: "transition_in", error: $0) },
      transitionOutValue.errorsOrWarnings?.map { .nestedObjectError(field: "transition_out", error: $0) },
      transitionTriggersValue.errorsOrWarnings?.map { .nestedObjectError(field: "transition_triggers", error: $0) },
      variableTriggersValue.errorsOrWarnings?.map { .nestedObjectError(field: "variable_triggers", error: $0) },
      variablesValue.errorsOrWarnings?.map { .nestedObjectError(field: "variables", error: $0) },
      visibilityValue.errorsOrWarnings?.map { .nestedObjectError(field: "visibility", error: $0) },
      visibilityActionValue.errorsOrWarnings?.map { .nestedObjectError(field: "visibility_action", error: $0) },
      visibilityActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "visibility_actions", error: $0) },
      widthValue.errorsOrWarnings?.map { .nestedObjectError(field: "width", error: $0) }
    )
    let result = DivBreadcrumb(
      accessibility: accessibilityValue.value,
      activeTextColor: activeTextColorValue.value,
      alignmentHorizontal: alignmentHorizontalValue.value,
      alignmentVertical: alignmentVerticalValue.value,
      alpha: alphaValue.value,
      animators: animatorsValue.value,
      background: backgroundValue.value,
      border: borderValue.value,
      columnSpan: columnSpanValue.value,
      crumbs: crumbsValue.value,
      disappearActions: disappearActionsValue.value,
      extensions: extensionsValue.value,
      focus: focusValue.value,
      functions: functionsValue.value,
      height: heightValue.value,
      id: idValue.value,
      itemBuilder: itemBuilderValue.value,
      itemFontSize: itemFontSizeValue.value,
      itemTextColor: itemTextColorValue.value,
      layoutProvider: layoutProviderValue.value,
      margins: marginsValue.value,
      paddings: paddingsValue.value,
      reuseId: reuseIdValue.value,
      rowSpan: rowSpanValue.value,
      selectedActions: selectedActionsValue.value,
      separator: separatorValue.value,
      tooltips: tooltipsValue.value,
      transform: transformValue.value,
      transformations: transformationsValue.value,
      transitionChange: transitionChangeValue.value,
      transitionIn: transitionInValue.value,
      transitionOut: transitionOutValue.value,
      transitionTriggers: transitionTriggersValue.value,
      variableTriggers: variableTriggersValue.value,
      variables: variablesValue.value,
      visibility: visibilityValue.value,
      visibilityAction: visibilityActionValue.value,
      visibilityActions: visibilityActionsValue.value,
      width: widthValue.value
    )
    return errors.isEmpty ? .success(result) : .partialSuccess(result, warnings: NonEmptyArray(errors)!)
  }

  public static func resolveValue(context: TemplatesContext, parent: DivBreadcrumbTemplate?, useOnlyLinks: Bool) -> DeserializationResult<DivBreadcrumb> {
    if useOnlyLinks {
      return resolveOnlyLinks(context: context, parent: parent)
    }
    var accessibilityValue: DeserializationResult<DivAccessibility> = .noValue
    var activeTextColorValue: DeserializationResult<Expression<Color>> = parent?.activeTextColor?.value() ?? .noValue
    var alignmentHorizontalValue: DeserializationResult<Expression<DivAlignmentHorizontal>> = parent?.alignmentHorizontal?.value() ?? .noValue
    var alignmentVerticalValue: DeserializationResult<Expression<DivAlignmentVertical>> = parent?.alignmentVertical?.value() ?? .noValue
    var alphaValue: DeserializationResult<Expression<Double>> = parent?.alpha?.value() ?? .noValue
    var animatorsValue: DeserializationResult<[DivAnimator]> = .noValue
    var backgroundValue: DeserializationResult<[DivBackground]> = .noValue
    var borderValue: DeserializationResult<DivBorder> = .noValue
    var columnSpanValue: DeserializationResult<Expression<Int>> = parent?.columnSpan?.value() ?? .noValue
    var crumbsValue: DeserializationResult<[DivBreadcrumb.Crumb]> = .noValue
    var disappearActionsValue: DeserializationResult<[DivDisappearAction]> = .noValue
    var extensionsValue: DeserializationResult<[DivExtension]> = .noValue
    var focusValue: DeserializationResult<DivFocus> = .noValue
    var functionsValue: DeserializationResult<[DivFunction]> = .noValue
    var heightValue: DeserializationResult<DivSize> = .noValue
    var idValue: DeserializationResult<String> = parent?.id?.value() ?? .noValue
    var itemBuilderValue: DeserializationResult<DivBreadcrumb.ItemBuilder> = .noValue
    var itemFontSizeValue: DeserializationResult<Expression<Int>> = parent?.itemFontSize?.value() ?? .noValue
    var itemTextColorValue: DeserializationResult<Expression<Color>> = parent?.itemTextColor?.value() ?? .noValue
    var layoutProviderValue: DeserializationResult<DivLayoutProvider> = .noValue
    var marginsValue: DeserializationResult<DivEdgeInsets> = .noValue
    var paddingsValue: DeserializationResult<DivEdgeInsets> = .noValue
    var reuseIdValue: DeserializationResult<Expression<String>> = parent?.reuseId?.value() ?? .noValue
    var rowSpanValue: DeserializationResult<Expression<Int>> = parent?.rowSpan?.value() ?? .noValue
    var selectedActionsValue: DeserializationResult<[DivAction]> = .noValue
    var separatorValue: DeserializationResult<Expression<String>> = parent?.separator?.value() ?? .noValue
    var tooltipsValue: DeserializationResult<[DivTooltip]> = .noValue
    var transformValue: DeserializationResult<DivTransform> = .noValue
    var transformationsValue: DeserializationResult<[DivTransformation]> = .noValue
    var transitionChangeValue: DeserializationResult<DivChangeTransition> = .noValue
    var transitionInValue: DeserializationResult<DivAppearanceTransition> = .noValue
    var transitionOutValue: DeserializationResult<DivAppearanceTransition> = .noValue
    var transitionTriggersValue: DeserializationResult<[DivTransitionTrigger]> = parent?.transitionTriggers?.value(validatedBy: ResolvedValue.transitionTriggersValidator) ?? .noValue
    var variableTriggersValue: DeserializationResult<[DivTrigger]> = .noValue
    var variablesValue: DeserializationResult<[DivVariable]> = .noValue
    var visibilityValue: DeserializationResult<Expression<DivVisibility>> = parent?.visibility?.value() ?? .noValue
    var visibilityActionValue: DeserializationResult<DivVisibilityAction> = .noValue
    var visibilityActionsValue: DeserializationResult<[DivVisibilityAction]> = .noValue
    var widthValue: DeserializationResult<DivSize> = .noValue
    context.templateData.forEach { key, __dictValue in
      switch key {
      case "accessibility":
        accessibilityValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivAccessibilityTemplate.self).merged(with: accessibilityValue)
      case "active_text_color":
        activeTextColorValue = deserialize(__dictValue, transform: Color.color(withHexString:)).merged(with: activeTextColorValue)
      case "alignment_horizontal":
        alignmentHorizontalValue = deserialize(__dictValue).merged(with: alignmentHorizontalValue)
      case "alignment_vertical":
        alignmentVerticalValue = deserialize(__dictValue).merged(with: alignmentVerticalValue)
      case "alpha":
        alphaValue = deserialize(__dictValue, validator: ResolvedValue.alphaValidator).merged(with: alphaValue)
      case "animators":
        animatorsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivAnimatorTemplate.self).merged(with: animatorsValue)
      case "background":
        backgroundValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivBackgroundTemplate.self).merged(with: backgroundValue)
      case "border":
        borderValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivBorderTemplate.self).merged(with: borderValue)
      case "column_span":
        columnSpanValue = deserialize(__dictValue, validator: ResolvedValue.columnSpanValidator).merged(with: columnSpanValue)
      case "crumbs":
        crumbsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, validator: ResolvedValue.crumbsValidator, type: DivBreadcrumbTemplate.CrumbTemplate.self).merged(with: crumbsValue)
      case "disappear_actions":
        disappearActionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivDisappearActionTemplate.self).merged(with: disappearActionsValue)
      case "extensions":
        extensionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivExtensionTemplate.self).merged(with: extensionsValue)
      case "focus":
        focusValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivFocusTemplate.self).merged(with: focusValue)
      case "functions":
        functionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivFunctionTemplate.self).merged(with: functionsValue)
      case "height":
        heightValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivSizeTemplate.self).merged(with: heightValue)
      case "id":
        idValue = deserialize(__dictValue).merged(with: idValue)
      case "item_builder":
        itemBuilderValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivBreadcrumbTemplate.ItemBuilderTemplate.self).merged(with: itemBuilderValue)
      case "item_font_size":
        itemFontSizeValue = deserialize(__dictValue, validator: ResolvedValue.itemFontSizeValidator).merged(with: itemFontSizeValue)
      case "item_text_color":
        itemTextColorValue = deserialize(__dictValue, transform: Color.color(withHexString:)).merged(with: itemTextColorValue)
      case "layout_provider":
        layoutProviderValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivLayoutProviderTemplate.self).merged(with: layoutProviderValue)
      case "margins":
        marginsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivEdgeInsetsTemplate.self).merged(with: marginsValue)
      case "paddings":
        paddingsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivEdgeInsetsTemplate.self).merged(with: paddingsValue)
      case "reuse_id":
        reuseIdValue = deserialize(__dictValue).merged(with: reuseIdValue)
      case "row_span":
        rowSpanValue = deserialize(__dictValue, validator: ResolvedValue.rowSpanValidator).merged(with: rowSpanValue)
      case "selected_actions":
        selectedActionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self).merged(with: selectedActionsValue)
      case "separator":
        separatorValue = deserialize(__dictValue).merged(with: separatorValue)
      case "tooltips":
        tooltipsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTooltipTemplate.self).merged(with: tooltipsValue)
      case "transform":
        transformValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTransformTemplate.self).merged(with: transformValue)
      case "transformations":
        transformationsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTransformationTemplate.self).merged(with: transformationsValue)
      case "transition_change":
        transitionChangeValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivChangeTransitionTemplate.self).merged(with: transitionChangeValue)
      case "transition_in":
        transitionInValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivAppearanceTransitionTemplate.self).merged(with: transitionInValue)
      case "transition_out":
        transitionOutValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivAppearanceTransitionTemplate.self).merged(with: transitionOutValue)
      case "transition_triggers":
        transitionTriggersValue = deserialize(__dictValue, validator: ResolvedValue.transitionTriggersValidator).merged(with: transitionTriggersValue)
      case "variable_triggers":
        variableTriggersValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTriggerTemplate.self).merged(with: variableTriggersValue)
      case "variables":
        variablesValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivVariableTemplate.self).merged(with: variablesValue)
      case "visibility":
        visibilityValue = deserialize(__dictValue).merged(with: visibilityValue)
      case "visibility_action":
        visibilityActionValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivVisibilityActionTemplate.self).merged(with: visibilityActionValue)
      case "visibility_actions":
        visibilityActionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivVisibilityActionTemplate.self).merged(with: visibilityActionsValue)
      case "width":
        widthValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivSizeTemplate.self).merged(with: widthValue)
      case parent?.accessibility?.link:
        accessibilityValue = accessibilityValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivAccessibilityTemplate.self) })
      case parent?.activeTextColor?.link:
        activeTextColorValue = activeTextColorValue.merged(with: { deserialize(__dictValue, transform: Color.color(withHexString:)) })
      case parent?.alignmentHorizontal?.link:
        alignmentHorizontalValue = alignmentHorizontalValue.merged(with: { deserialize(__dictValue) })
      case parent?.alignmentVertical?.link:
        alignmentVerticalValue = alignmentVerticalValue.merged(with: { deserialize(__dictValue) })
      case parent?.alpha?.link:
        alphaValue = alphaValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.alphaValidator) })
      case parent?.animators?.link:
        animatorsValue = animatorsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivAnimatorTemplate.self) })
      case parent?.background?.link:
        backgroundValue = backgroundValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivBackgroundTemplate.self) })
      case parent?.border?.link:
        borderValue = borderValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivBorderTemplate.self) })
      case parent?.columnSpan?.link:
        columnSpanValue = columnSpanValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.columnSpanValidator) })
      case parent?.crumbs?.link:
        crumbsValue = crumbsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, validator: ResolvedValue.crumbsValidator, type: DivBreadcrumbTemplate.CrumbTemplate.self) })
      case parent?.disappearActions?.link:
        disappearActionsValue = disappearActionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivDisappearActionTemplate.self) })
      case parent?.extensions?.link:
        extensionsValue = extensionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivExtensionTemplate.self) })
      case parent?.focus?.link:
        focusValue = focusValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivFocusTemplate.self) })
      case parent?.functions?.link:
        functionsValue = functionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivFunctionTemplate.self) })
      case parent?.height?.link:
        heightValue = heightValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivSizeTemplate.self) })
      case parent?.id?.link:
        idValue = idValue.merged(with: { deserialize(__dictValue) })
      case parent?.itemBuilder?.link:
        itemBuilderValue = itemBuilderValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivBreadcrumbTemplate.ItemBuilderTemplate.self) })
      case parent?.itemFontSize?.link:
        itemFontSizeValue = itemFontSizeValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.itemFontSizeValidator) })
      case parent?.itemTextColor?.link:
        itemTextColorValue = itemTextColorValue.merged(with: { deserialize(__dictValue, transform: Color.color(withHexString:)) })
      case parent?.layoutProvider?.link:
        layoutProviderValue = layoutProviderValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivLayoutProviderTemplate.self) })
      case parent?.margins?.link:
        marginsValue = marginsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivEdgeInsetsTemplate.self) })
      case parent?.paddings?.link:
        paddingsValue = paddingsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivEdgeInsetsTemplate.self) })
      case parent?.reuseId?.link:
        reuseIdValue = reuseIdValue.merged(with: { deserialize(__dictValue) })
      case parent?.rowSpan?.link:
        rowSpanValue = rowSpanValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.rowSpanValidator) })
      case parent?.selectedActions?.link:
        selectedActionsValue = selectedActionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self) })
      case parent?.separator?.link:
        separatorValue = separatorValue.merged(with: { deserialize(__dictValue) })
      case parent?.tooltips?.link:
        tooltipsValue = tooltipsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTooltipTemplate.self) })
      case parent?.transform?.link:
        transformValue = transformValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTransformTemplate.self) })
      case parent?.transformations?.link:
        transformationsValue = transformationsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTransformationTemplate.self) })
      case parent?.transitionChange?.link:
        transitionChangeValue = transitionChangeValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivChangeTransitionTemplate.self) })
      case parent?.transitionIn?.link:
        transitionInValue = transitionInValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivAppearanceTransitionTemplate.self) })
      case parent?.transitionOut?.link:
        transitionOutValue = transitionOutValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivAppearanceTransitionTemplate.self) })
      case parent?.transitionTriggers?.link:
        transitionTriggersValue = transitionTriggersValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.transitionTriggersValidator) })
      case parent?.variableTriggers?.link:
        variableTriggersValue = variableTriggersValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTriggerTemplate.self) })
      case parent?.variables?.link:
        variablesValue = variablesValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivVariableTemplate.self) })
      case parent?.visibility?.link:
        visibilityValue = visibilityValue.merged(with: { deserialize(__dictValue) })
      case parent?.visibilityAction?.link:
        visibilityActionValue = visibilityActionValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivVisibilityActionTemplate.self) })
      case parent?.visibilityActions?.link:
        visibilityActionsValue = visibilityActionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivVisibilityActionTemplate.self) })
      case parent?.width?.link:
        widthValue = widthValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivSizeTemplate.self) })
      default: break
      }
    }
    if let parent = parent {
      _ = accessibilityValue = accessibilityValue.merged(with: { parent.accessibility?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = animatorsValue = animatorsValue.merged(with: { parent.animators?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = backgroundValue = backgroundValue.merged(with: { parent.background?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = borderValue = borderValue.merged(with: { parent.border?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = crumbsValue = crumbsValue.merged(with: { parent.crumbs?.resolveOptionalValue(context: context, validator: ResolvedValue.crumbsValidator, useOnlyLinks: true) })
      _ = disappearActionsValue = disappearActionsValue.merged(with: { parent.disappearActions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = extensionsValue = extensionsValue.merged(with: { parent.extensions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = focusValue = focusValue.merged(with: { parent.focus?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = functionsValue = functionsValue.merged(with: { parent.functions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = heightValue = heightValue.merged(with: { parent.height?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = itemBuilderValue = itemBuilderValue.merged(with: { parent.itemBuilder?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = layoutProviderValue = layoutProviderValue.merged(with: { parent.layoutProvider?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = marginsValue = marginsValue.merged(with: { parent.margins?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = paddingsValue = paddingsValue.merged(with: { parent.paddings?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = selectedActionsValue = selectedActionsValue.merged(with: { parent.selectedActions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = tooltipsValue = tooltipsValue.merged(with: { parent.tooltips?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = transformValue = transformValue.merged(with: { parent.transform?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = transformationsValue = transformationsValue.merged(with: { parent.transformations?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = transitionChangeValue = transitionChangeValue.merged(with: { parent.transitionChange?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = transitionInValue = transitionInValue.merged(with: { parent.transitionIn?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = transitionOutValue = transitionOutValue.merged(with: { parent.transitionOut?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = variableTriggersValue = variableTriggersValue.merged(with: { parent.variableTriggers?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = variablesValue = variablesValue.merged(with: { parent.variables?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = visibilityActionValue = visibilityActionValue.merged(with: { parent.visibilityAction?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = visibilityActionsValue = visibilityActionsValue.merged(with: { parent.visibilityActions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = widthValue = widthValue.merged(with: { parent.width?.resolveOptionalValue(context: context, useOnlyLinks: true) })
    }
    let errors = mergeErrors(
      accessibilityValue.errorsOrWarnings?.map { .nestedObjectError(field: "accessibility", error: $0) },
      activeTextColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "active_text_color", error: $0) },
      alignmentHorizontalValue.errorsOrWarnings?.map { .nestedObjectError(field: "alignment_horizontal", error: $0) },
      alignmentVerticalValue.errorsOrWarnings?.map { .nestedObjectError(field: "alignment_vertical", error: $0) },
      alphaValue.errorsOrWarnings?.map { .nestedObjectError(field: "alpha", error: $0) },
      animatorsValue.errorsOrWarnings?.map { .nestedObjectError(field: "animators", error: $0) },
      backgroundValue.errorsOrWarnings?.map { .nestedObjectError(field: "background", error: $0) },
      borderValue.errorsOrWarnings?.map { .nestedObjectError(field: "border", error: $0) },
      columnSpanValue.errorsOrWarnings?.map { .nestedObjectError(field: "column_span", error: $0) },
      crumbsValue.errorsOrWarnings?.map { .nestedObjectError(field: "crumbs", error: $0) },
      disappearActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "disappear_actions", error: $0) },
      extensionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "extensions", error: $0) },
      focusValue.errorsOrWarnings?.map { .nestedObjectError(field: "focus", error: $0) },
      functionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "functions", error: $0) },
      heightValue.errorsOrWarnings?.map { .nestedObjectError(field: "height", error: $0) },
      idValue.errorsOrWarnings?.map { .nestedObjectError(field: "id", error: $0) },
      itemBuilderValue.errorsOrWarnings?.map { .nestedObjectError(field: "item_builder", error: $0) },
      itemFontSizeValue.errorsOrWarnings?.map { .nestedObjectError(field: "item_font_size", error: $0) },
      itemTextColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "item_text_color", error: $0) },
      layoutProviderValue.errorsOrWarnings?.map { .nestedObjectError(field: "layout_provider", error: $0) },
      marginsValue.errorsOrWarnings?.map { .nestedObjectError(field: "margins", error: $0) },
      paddingsValue.errorsOrWarnings?.map { .nestedObjectError(field: "paddings", error: $0) },
      reuseIdValue.errorsOrWarnings?.map { .nestedObjectError(field: "reuse_id", error: $0) },
      rowSpanValue.errorsOrWarnings?.map { .nestedObjectError(field: "row_span", error: $0) },
      selectedActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "selected_actions", error: $0) },
      separatorValue.errorsOrWarnings?.map { .nestedObjectError(field: "separator", error: $0) },
      tooltipsValue.errorsOrWarnings?.map { .nestedObjectError(field: "tooltips", error: $0) },
      transformValue.errorsOrWarnings?.map { .nestedObjectError(field: "transform", error: $0) },
      transformationsValue.errorsOrWarnings?.map { .nestedObjectError(field: "transformations", error: $0) },
      transitionChangeValue.errorsOrWarnings?.map { .nestedObjectError(field: "transition_change", error: $0) },
      transitionInValue.errorsOrWarnings?.map { .nestedObjectError(field: "transition_in", error: $0) },
      transitionOutValue.errorsOrWarnings?.map { .nestedObjectError(field: "transition_out", error: $0) },
      transitionTriggersValue.errorsOrWarnings?.map { .nestedObjectError(field: "transition_triggers", error: $0) },
      variableTriggersValue.errorsOrWarnings?.map { .nestedObjectError(field: "variable_triggers", error: $0) },
      variablesValue.errorsOrWarnings?.map { .nestedObjectError(field: "variables", error: $0) },
      visibilityValue.errorsOrWarnings?.map { .nestedObjectError(field: "visibility", error: $0) },
      visibilityActionValue.errorsOrWarnings?.map { .nestedObjectError(field: "visibility_action", error: $0) },
      visibilityActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "visibility_actions", error: $0) },
      widthValue.errorsOrWarnings?.map { .nestedObjectError(field: "width", error: $0) }
    )
    let result = DivBreadcrumb(
      accessibility: accessibilityValue.value,
      activeTextColor: activeTextColorValue.value,
      alignmentHorizontal: alignmentHorizontalValue.value,
      alignmentVertical: alignmentVerticalValue.value,
      alpha: alphaValue.value,
      animators: animatorsValue.value,
      background: backgroundValue.value,
      border: borderValue.value,
      columnSpan: columnSpanValue.value,
      crumbs: crumbsValue.value,
      disappearActions: disappearActionsValue.value,
      extensions: extensionsValue.value,
      focus: focusValue.value,
      functions: functionsValue.value,
      height: heightValue.value,
      id: idValue.value,
      itemBuilder: itemBuilderValue.value,
      itemFontSize: itemFontSizeValue.value,
      itemTextColor: itemTextColorValue.value,
      layoutProvider: layoutProviderValue.value,
      margins: marginsValue.value,
      paddings: paddingsValue.value,
      reuseId: reuseIdValue.value,
      rowSpan: rowSpanValue.value,
      selectedActions: selectedActionsValue.value,
      separator: separatorValue.value,
      tooltips: tooltipsValue.value,
      transform: transformValue.value,
      transformations: transformationsValue.value,
      transitionChange: transitionChangeValue.value,
      transitionIn: transitionInValue.value,
      transitionOut: transitionOutValue.value,
      transitionTriggers: transitionTriggersValue.value,
      variableTriggers: variableTriggersValue.value,
      variables: variablesValue.value,
      visibility: visibilityValue.value,
      visibilityAction: visibilityActionValue.value,
      visibilityActions: visibilityActionsValue.value,
      width: widthValue.value
    )
    return errors.isEmpty ? .success(result) : .partialSuccess(result, warnings: NonEmptyArray(errors)!)
  }

  private func mergedWithParent(templates: [TemplateName: Any]) throws -> DivBreadcrumbTemplate {
    guard let parent = parent, parent != Self.type else { return self }
    guard let parentTemplate = templates[parent] as? DivBreadcrumbTemplate else {
      throw DeserializationError.unknownType(type: parent)
    }
    let mergedParent = try parentTemplate.mergedWithParent(templates: templates)

    return DivBreadcrumbTemplate(
      parent: nil,
      accessibility: accessibility ?? mergedParent.accessibility,
      activeTextColor: activeTextColor ?? mergedParent.activeTextColor,
      alignmentHorizontal: alignmentHorizontal ?? mergedParent.alignmentHorizontal,
      alignmentVertical: alignmentVertical ?? mergedParent.alignmentVertical,
      alpha: alpha ?? mergedParent.alpha,
      animators: animators ?? mergedParent.animators,
      background: background ?? mergedParent.background,
      border: border ?? mergedParent.border,
      columnSpan: columnSpan ?? mergedParent.columnSpan,
      crumbs: crumbs ?? mergedParent.crumbs,
      disappearActions: disappearActions ?? mergedParent.disappearActions,
      extensions: extensions ?? mergedParent.extensions,
      focus: focus ?? mergedParent.focus,
      functions: functions ?? mergedParent.functions,
      height: height ?? mergedParent.height,
      id: id ?? mergedParent.id,
      itemBuilder: itemBuilder ?? mergedParent.itemBuilder,
      itemFontSize: itemFontSize ?? mergedParent.itemFontSize,
      itemTextColor: itemTextColor ?? mergedParent.itemTextColor,
      layoutProvider: layoutProvider ?? mergedParent.layoutProvider,
      margins: margins ?? mergedParent.margins,
      paddings: paddings ?? mergedParent.paddings,
      reuseId: reuseId ?? mergedParent.reuseId,
      rowSpan: rowSpan ?? mergedParent.rowSpan,
      selectedActions: selectedActions ?? mergedParent.selectedActions,
      separator: separator ?? mergedParent.separator,
      tooltips: tooltips ?? mergedParent.tooltips,
      transform: transform ?? mergedParent.transform,
      transformations: transformations ?? mergedParent.transformations,
      transitionChange: transitionChange ?? mergedParent.transitionChange,
      transitionIn: transitionIn ?? mergedParent.transitionIn,
      transitionOut: transitionOut ?? mergedParent.transitionOut,
      transitionTriggers: transitionTriggers ?? mergedParent.transitionTriggers,
      variableTriggers: variableTriggers ?? mergedParent.variableTriggers,
      variables: variables ?? mergedParent.variables,
      visibility: visibility ?? mergedParent.visibility,
      visibilityAction: visibilityAction ?? mergedParent.visibilityAction,
      visibilityActions: visibilityActions ?? mergedParent.visibilityActions,
      width: width ?? mergedParent.width
    )
  }

  public func resolveParent(templates: [TemplateName: Any]) throws -> DivBreadcrumbTemplate {
    let merged = try mergedWithParent(templates: templates)

    return DivBreadcrumbTemplate(
      parent: nil,
      accessibility: merged.accessibility?.tryResolveParent(templates: templates),
      activeTextColor: merged.activeTextColor,
      alignmentHorizontal: merged.alignmentHorizontal,
      alignmentVertical: merged.alignmentVertical,
      alpha: merged.alpha,
      animators: merged.animators?.tryResolveParent(templates: templates),
      background: merged.background?.tryResolveParent(templates: templates),
      border: merged.border?.tryResolveParent(templates: templates),
      columnSpan: merged.columnSpan,
      crumbs: merged.crumbs?.tryResolveParent(templates: templates),
      disappearActions: merged.disappearActions?.tryResolveParent(templates: templates),
      extensions: merged.extensions?.tryResolveParent(templates: templates),
      focus: merged.focus?.tryResolveParent(templates: templates),
      functions: merged.functions?.tryResolveParent(templates: templates),
      height: merged.height?.tryResolveParent(templates: templates),
      id: merged.id,
      itemBuilder: merged.itemBuilder?.tryResolveParent(templates: templates),
      itemFontSize: merged.itemFontSize,
      itemTextColor: merged.itemTextColor,
      layoutProvider: merged.layoutProvider?.tryResolveParent(templates: templates),
      margins: merged.margins?.tryResolveParent(templates: templates),
      paddings: merged.paddings?.tryResolveParent(templates: templates),
      reuseId: merged.reuseId,
      rowSpan: merged.rowSpan,
      selectedActions: merged.selectedActions?.tryResolveParent(templates: templates),
      separator: merged.separator,
      tooltips: merged.tooltips?.tryResolveParent(templates: templates),
      transform: merged.transform?.tryResolveParent(templates: templates),
      transformations: merged.transformations?.tryResolveParent(templates: templates),
      transitionChange: merged.transitionChange?.tryResolveParent(templates: templates),
      transitionIn: merged.transitionIn?.tryResolveParent(templates: templates),
      transitionOut: merged.transitionOut?.tryResolveParent(templates: templates),
      transitionTriggers: merged.transitionTriggers,
      variableTriggers: merged.variableTriggers?.tryResolveParent(templates: templates),
      variables: merged.variables?.tryResolveParent(templates: templates),
      visibility: merged.visibility,
      visibilityAction: merged.visibilityAction?.tryResolveParent(templates: templates),
      visibilityActions: merged.visibilityActions?.tryResolveParent(templates: templates),
      width: merged.width?.tryResolveParent(templates: templates)
    )
  }
}
