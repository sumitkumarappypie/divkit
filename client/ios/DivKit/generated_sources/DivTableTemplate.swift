// Generated code. Do not modify.

import Foundation
import Serialization
import VGSL

public final class DivTableTemplate: TemplateValue, Sendable {
  public final class ColumnTemplate: TemplateValue, Sendable {
    public let contentAlignmentHorizontal: Field<Expression<DivAlignmentHorizontal>>?
    public let contentAlignmentVertical: Field<Expression<DivAlignmentVertical>>?
    public let width: Field<DivSizeTemplate>?

    public convenience init(dictionary: [String: Any], templateToType: [TemplateName: String]) throws {
      self.init(
        contentAlignmentHorizontal: dictionary.getOptionalExpressionField("content_alignment_horizontal"),
        contentAlignmentVertical: dictionary.getOptionalExpressionField("content_alignment_vertical"),
        width: dictionary.getOptionalField("width", templateToType: templateToType)
      )
    }

    init(
      contentAlignmentHorizontal: Field<Expression<DivAlignmentHorizontal>>? = nil,
      contentAlignmentVertical: Field<Expression<DivAlignmentVertical>>? = nil,
      width: Field<DivSizeTemplate>? = nil
    ) {
      self.contentAlignmentHorizontal = contentAlignmentHorizontal
      self.contentAlignmentVertical = contentAlignmentVertical
      self.width = width
    }

    private static func resolveOnlyLinks(context: TemplatesContext, parent: ColumnTemplate?) -> DeserializationResult<DivTable.Column> {
      let contentAlignmentHorizontalValue = parent?.contentAlignmentHorizontal?.resolveOptionalValue(context: context) ?? .noValue
      let contentAlignmentVerticalValue = parent?.contentAlignmentVertical?.resolveOptionalValue(context: context) ?? .noValue
      let widthValue = parent?.width?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
      let errors = mergeErrors(
        contentAlignmentHorizontalValue.errorsOrWarnings?.map { .nestedObjectError(field: "content_alignment_horizontal", error: $0) },
        contentAlignmentVerticalValue.errorsOrWarnings?.map { .nestedObjectError(field: "content_alignment_vertical", error: $0) },
        widthValue.errorsOrWarnings?.map { .nestedObjectError(field: "width", error: $0) }
      )
      let result = DivTable.Column(
        contentAlignmentHorizontal: contentAlignmentHorizontalValue.value,
        contentAlignmentVertical: contentAlignmentVerticalValue.value,
        width: widthValue.value
      )
      return errors.isEmpty ? .success(result) : .partialSuccess(result, warnings: NonEmptyArray(errors)!)
    }

    public static func resolveValue(context: TemplatesContext, parent: ColumnTemplate?, useOnlyLinks: Bool) -> DeserializationResult<DivTable.Column> {
      if useOnlyLinks {
        return resolveOnlyLinks(context: context, parent: parent)
      }
      var contentAlignmentHorizontalValue: DeserializationResult<Expression<DivAlignmentHorizontal>> = parent?.contentAlignmentHorizontal?.value() ?? .noValue
      var contentAlignmentVerticalValue: DeserializationResult<Expression<DivAlignmentVertical>> = parent?.contentAlignmentVertical?.value() ?? .noValue
      var widthValue: DeserializationResult<DivSize> = .noValue
      context.templateData.forEach { key, __dictValue in
        switch key {
        case "content_alignment_horizontal":
          contentAlignmentHorizontalValue = deserialize(__dictValue).merged(with: contentAlignmentHorizontalValue)
        case "content_alignment_vertical":
          contentAlignmentVerticalValue = deserialize(__dictValue).merged(with: contentAlignmentVerticalValue)
        case "width":
          widthValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivSizeTemplate.self).merged(with: widthValue)
        case parent?.contentAlignmentHorizontal?.link:
          contentAlignmentHorizontalValue = contentAlignmentHorizontalValue.merged(with: { deserialize(__dictValue) })
        case parent?.contentAlignmentVertical?.link:
          contentAlignmentVerticalValue = contentAlignmentVerticalValue.merged(with: { deserialize(__dictValue) })
        case parent?.width?.link:
          widthValue = widthValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivSizeTemplate.self) })
        default: break
        }
      }
      if let parent = parent {
        _ = widthValue = widthValue.merged(with: { parent.width?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      }
      let errors = mergeErrors(
        contentAlignmentHorizontalValue.errorsOrWarnings?.map { .nestedObjectError(field: "content_alignment_horizontal", error: $0) },
        contentAlignmentVerticalValue.errorsOrWarnings?.map { .nestedObjectError(field: "content_alignment_vertical", error: $0) },
        widthValue.errorsOrWarnings?.map { .nestedObjectError(field: "width", error: $0) }
      )
      let result = DivTable.Column(
        contentAlignmentHorizontal: contentAlignmentHorizontalValue.value,
        contentAlignmentVertical: contentAlignmentVerticalValue.value,
        width: widthValue.value
      )
      return errors.isEmpty ? .success(result) : .partialSuccess(result, warnings: NonEmptyArray(errors)!)
    }

    private func mergedWithParent(templates: [TemplateName: Any]) throws -> ColumnTemplate {
      return self
    }

    public func resolveParent(templates: [TemplateName: Any]) throws -> ColumnTemplate {
      let merged = try mergedWithParent(templates: templates)

      return ColumnTemplate(
        contentAlignmentHorizontal: merged.contentAlignmentHorizontal,
        contentAlignmentVertical: merged.contentAlignmentVertical,
        width: merged.width?.tryResolveParent(templates: templates)
      )
    }
  }

  public final class RowTemplate: TemplateValue, Sendable {
    public final class CellTemplate: TemplateValue, Sendable {
      public let background: Field<[DivBackgroundTemplate]>?
      public let columnSpan: Field<Expression<Int>>? // constraint: number >= 0; default value: 1
      public let contentAlignmentHorizontal: Field<Expression<DivAlignmentHorizontal>>?
      public let contentAlignmentVertical: Field<Expression<DivAlignmentVertical>>?
      public let div: Field<DivTemplate>?
      public let rowSpan: Field<Expression<Int>>? // constraint: number >= 0; default value: 1

      public convenience init(dictionary: [String: Any], templateToType: [TemplateName: String]) throws {
        self.init(
          background: dictionary.getOptionalArray("background", templateToType: templateToType),
          columnSpan: dictionary.getOptionalExpressionField("column_span"),
          contentAlignmentHorizontal: dictionary.getOptionalExpressionField("content_alignment_horizontal"),
          contentAlignmentVertical: dictionary.getOptionalExpressionField("content_alignment_vertical"),
          div: dictionary.getOptionalField("div", templateToType: templateToType),
          rowSpan: dictionary.getOptionalExpressionField("row_span")
        )
      }

      init(
        background: Field<[DivBackgroundTemplate]>? = nil,
        columnSpan: Field<Expression<Int>>? = nil,
        contentAlignmentHorizontal: Field<Expression<DivAlignmentHorizontal>>? = nil,
        contentAlignmentVertical: Field<Expression<DivAlignmentVertical>>? = nil,
        div: Field<DivTemplate>? = nil,
        rowSpan: Field<Expression<Int>>? = nil
      ) {
        self.background = background
        self.columnSpan = columnSpan
        self.contentAlignmentHorizontal = contentAlignmentHorizontal
        self.contentAlignmentVertical = contentAlignmentVertical
        self.div = div
        self.rowSpan = rowSpan
      }

      private static func resolveOnlyLinks(context: TemplatesContext, parent: CellTemplate?) -> DeserializationResult<DivTable.Row.Cell> {
        let backgroundValue = parent?.background?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
        let columnSpanValue = parent?.columnSpan?.resolveOptionalValue(context: context, validator: ResolvedValue.columnSpanValidator) ?? .noValue
        let contentAlignmentHorizontalValue = parent?.contentAlignmentHorizontal?.resolveOptionalValue(context: context) ?? .noValue
        let contentAlignmentVerticalValue = parent?.contentAlignmentVertical?.resolveOptionalValue(context: context) ?? .noValue
        let divValue = parent?.div?.resolveValue(context: context, useOnlyLinks: true) ?? .noValue
        let rowSpanValue = parent?.rowSpan?.resolveOptionalValue(context: context, validator: ResolvedValue.rowSpanValidator) ?? .noValue
        var errors = mergeErrors(
          backgroundValue.errorsOrWarnings?.map { .nestedObjectError(field: "background", error: $0) },
          columnSpanValue.errorsOrWarnings?.map { .nestedObjectError(field: "column_span", error: $0) },
          contentAlignmentHorizontalValue.errorsOrWarnings?.map { .nestedObjectError(field: "content_alignment_horizontal", error: $0) },
          contentAlignmentVerticalValue.errorsOrWarnings?.map { .nestedObjectError(field: "content_alignment_vertical", error: $0) },
          divValue.errorsOrWarnings?.map { .nestedObjectError(field: "div", error: $0) },
          rowSpanValue.errorsOrWarnings?.map { .nestedObjectError(field: "row_span", error: $0) }
        )
        if case .noValue = divValue {
          errors.append(.requiredFieldIsMissing(field: "div"))
        }
        guard
          let divNonNil = divValue.value
        else {
          return .failure(NonEmptyArray(errors)!)
        }
        let result = DivTable.Row.Cell(
          background: backgroundValue.value,
          columnSpan: columnSpanValue.value,
          contentAlignmentHorizontal: contentAlignmentHorizontalValue.value,
          contentAlignmentVertical: contentAlignmentVerticalValue.value,
          div: divNonNil,
          rowSpan: rowSpanValue.value
        )
        return errors.isEmpty ? .success(result) : .partialSuccess(result, warnings: NonEmptyArray(errors)!)
      }

      public static func resolveValue(context: TemplatesContext, parent: CellTemplate?, useOnlyLinks: Bool) -> DeserializationResult<DivTable.Row.Cell> {
        if useOnlyLinks {
          return resolveOnlyLinks(context: context, parent: parent)
        }
        var backgroundValue: DeserializationResult<[DivBackground]> = .noValue
        var columnSpanValue: DeserializationResult<Expression<Int>> = parent?.columnSpan?.value() ?? .noValue
        var contentAlignmentHorizontalValue: DeserializationResult<Expression<DivAlignmentHorizontal>> = parent?.contentAlignmentHorizontal?.value() ?? .noValue
        var contentAlignmentVerticalValue: DeserializationResult<Expression<DivAlignmentVertical>> = parent?.contentAlignmentVertical?.value() ?? .noValue
        var divValue: DeserializationResult<Div> = .noValue
        var rowSpanValue: DeserializationResult<Expression<Int>> = parent?.rowSpan?.value() ?? .noValue
        context.templateData.forEach { key, __dictValue in
          switch key {
          case "background":
            backgroundValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivBackgroundTemplate.self).merged(with: backgroundValue)
          case "column_span":
            columnSpanValue = deserialize(__dictValue, validator: ResolvedValue.columnSpanValidator).merged(with: columnSpanValue)
          case "content_alignment_horizontal":
            contentAlignmentHorizontalValue = deserialize(__dictValue).merged(with: contentAlignmentHorizontalValue)
          case "content_alignment_vertical":
            contentAlignmentVerticalValue = deserialize(__dictValue).merged(with: contentAlignmentVerticalValue)
          case "div":
            divValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTemplate.self).merged(with: divValue)
          case "row_span":
            rowSpanValue = deserialize(__dictValue, validator: ResolvedValue.rowSpanValidator).merged(with: rowSpanValue)
          case parent?.background?.link:
            backgroundValue = backgroundValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivBackgroundTemplate.self) })
          case parent?.columnSpan?.link:
            columnSpanValue = columnSpanValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.columnSpanValidator) })
          case parent?.contentAlignmentHorizontal?.link:
            contentAlignmentHorizontalValue = contentAlignmentHorizontalValue.merged(with: { deserialize(__dictValue) })
          case parent?.contentAlignmentVertical?.link:
            contentAlignmentVerticalValue = contentAlignmentVerticalValue.merged(with: { deserialize(__dictValue) })
          case parent?.div?.link:
            divValue = divValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTemplate.self) })
          case parent?.rowSpan?.link:
            rowSpanValue = rowSpanValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.rowSpanValidator) })
          default: break
          }
        }
        if let parent = parent {
          _ = backgroundValue = backgroundValue.merged(with: { parent.background?.resolveOptionalValue(context: context, useOnlyLinks: true) })
          _ = divValue = divValue.merged(with: { parent.div?.resolveValue(context: context, useOnlyLinks: true) })
        }
        var errors = mergeErrors(
          backgroundValue.errorsOrWarnings?.map { .nestedObjectError(field: "background", error: $0) },
          columnSpanValue.errorsOrWarnings?.map { .nestedObjectError(field: "column_span", error: $0) },
          contentAlignmentHorizontalValue.errorsOrWarnings?.map { .nestedObjectError(field: "content_alignment_horizontal", error: $0) },
          contentAlignmentVerticalValue.errorsOrWarnings?.map { .nestedObjectError(field: "content_alignment_vertical", error: $0) },
          divValue.errorsOrWarnings?.map { .nestedObjectError(field: "div", error: $0) },
          rowSpanValue.errorsOrWarnings?.map { .nestedObjectError(field: "row_span", error: $0) }
        )
        if case .noValue = divValue {
          errors.append(.requiredFieldIsMissing(field: "div"))
        }
        guard
          let divNonNil = divValue.value
        else {
          return .failure(NonEmptyArray(errors)!)
        }
        let result = DivTable.Row.Cell(
          background: backgroundValue.value,
          columnSpan: columnSpanValue.value,
          contentAlignmentHorizontal: contentAlignmentHorizontalValue.value,
          contentAlignmentVertical: contentAlignmentVerticalValue.value,
          div: divNonNil,
          rowSpan: rowSpanValue.value
        )
        return errors.isEmpty ? .success(result) : .partialSuccess(result, warnings: NonEmptyArray(errors)!)
      }

      private func mergedWithParent(templates: [TemplateName: Any]) throws -> CellTemplate {
        return self
      }

      public func resolveParent(templates: [TemplateName: Any]) throws -> CellTemplate {
        let merged = try mergedWithParent(templates: templates)

        return CellTemplate(
          background: merged.background?.tryResolveParent(templates: templates),
          columnSpan: merged.columnSpan,
          contentAlignmentHorizontal: merged.contentAlignmentHorizontal,
          contentAlignmentVertical: merged.contentAlignmentVertical,
          div: try merged.div?.resolveParent(templates: templates),
          rowSpan: merged.rowSpan
        )
      }
    }

    public let background: Field<[DivBackgroundTemplate]>?
    public let cells: Field<[CellTemplate]>?
    public let id: Field<String>?

    public convenience init(dictionary: [String: Any], templateToType: [TemplateName: String]) throws {
      self.init(
        background: dictionary.getOptionalArray("background", templateToType: templateToType),
        cells: dictionary.getOptionalArray("cells", templateToType: templateToType),
        id: dictionary.getOptionalField("id")
      )
    }

    init(
      background: Field<[DivBackgroundTemplate]>? = nil,
      cells: Field<[CellTemplate]>? = nil,
      id: Field<String>? = nil
    ) {
      self.background = background
      self.cells = cells
      self.id = id
    }

    private static func resolveOnlyLinks(context: TemplatesContext, parent: RowTemplate?) -> DeserializationResult<DivTable.Row> {
      let backgroundValue = parent?.background?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
      let cellsValue = parent?.cells?.resolveValue(context: context, useOnlyLinks: true) ?? .noValue
      let idValue = parent?.id?.resolveOptionalValue(context: context) ?? .noValue
      var errors = mergeErrors(
        backgroundValue.errorsOrWarnings?.map { .nestedObjectError(field: "background", error: $0) },
        cellsValue.errorsOrWarnings?.map { .nestedObjectError(field: "cells", error: $0) },
        idValue.errorsOrWarnings?.map { .nestedObjectError(field: "id", error: $0) }
      )
      if case .noValue = cellsValue {
        errors.append(.requiredFieldIsMissing(field: "cells"))
      }
      guard
        let cellsNonNil = cellsValue.value
      else {
        return .failure(NonEmptyArray(errors)!)
      }
      let result = DivTable.Row(
        background: backgroundValue.value,
        cells: cellsNonNil,
        id: idValue.value
      )
      return errors.isEmpty ? .success(result) : .partialSuccess(result, warnings: NonEmptyArray(errors)!)
    }

    public static func resolveValue(context: TemplatesContext, parent: RowTemplate?, useOnlyLinks: Bool) -> DeserializationResult<DivTable.Row> {
      if useOnlyLinks {
        return resolveOnlyLinks(context: context, parent: parent)
      }
      var backgroundValue: DeserializationResult<[DivBackground]> = .noValue
      var cellsValue: DeserializationResult<[DivTable.Row.Cell]> = .noValue
      var idValue: DeserializationResult<String> = parent?.id?.value() ?? .noValue
      context.templateData.forEach { key, __dictValue in
        switch key {
        case "background":
          backgroundValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivBackgroundTemplate.self).merged(with: backgroundValue)
        case "cells":
          cellsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTableTemplate.RowTemplate.CellTemplate.self).merged(with: cellsValue)
        case "id":
          idValue = deserialize(__dictValue).merged(with: idValue)
        case parent?.background?.link:
          backgroundValue = backgroundValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivBackgroundTemplate.self) })
        case parent?.cells?.link:
          cellsValue = cellsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTableTemplate.RowTemplate.CellTemplate.self) })
        case parent?.id?.link:
          idValue = idValue.merged(with: { deserialize(__dictValue) })
        default: break
        }
      }
      if let parent = parent {
        _ = backgroundValue = backgroundValue.merged(with: { parent.background?.resolveOptionalValue(context: context, useOnlyLinks: true) })
        _ = cellsValue = cellsValue.merged(with: { parent.cells?.resolveValue(context: context, useOnlyLinks: true) })
      }
      var errors = mergeErrors(
        backgroundValue.errorsOrWarnings?.map { .nestedObjectError(field: "background", error: $0) },
        cellsValue.errorsOrWarnings?.map { .nestedObjectError(field: "cells", error: $0) },
        idValue.errorsOrWarnings?.map { .nestedObjectError(field: "id", error: $0) }
      )
      if case .noValue = cellsValue {
        errors.append(.requiredFieldIsMissing(field: "cells"))
      }
      guard
        let cellsNonNil = cellsValue.value
      else {
        return .failure(NonEmptyArray(errors)!)
      }
      let result = DivTable.Row(
        background: backgroundValue.value,
        cells: cellsNonNil,
        id: idValue.value
      )
      return errors.isEmpty ? .success(result) : .partialSuccess(result, warnings: NonEmptyArray(errors)!)
    }

    private func mergedWithParent(templates: [TemplateName: Any]) throws -> RowTemplate {
      return self
    }

    public func resolveParent(templates: [TemplateName: Any]) throws -> RowTemplate {
      let merged = try mergedWithParent(templates: templates)

      return RowTemplate(
        background: merged.background?.tryResolveParent(templates: templates),
        cells: try merged.cells?.resolveParent(templates: templates),
        id: merged.id
      )
    }
  }

  public final class SeparatorTemplate: TemplateValue, Sendable {
    public let margins: Field<DivEdgeInsetsTemplate>?
    public let showAtEnd: Field<Expression<Bool>>? // default value: false
    public let showAtStart: Field<Expression<Bool>>? // default value: false
    public let showBetween: Field<Expression<Bool>>? // default value: true
    public let style: Field<DivDrawableTemplate>?

    public convenience init(dictionary: [String: Any], templateToType: [TemplateName: String]) throws {
      self.init(
        margins: dictionary.getOptionalField("margins", templateToType: templateToType),
        showAtEnd: dictionary.getOptionalExpressionField("show_at_end"),
        showAtStart: dictionary.getOptionalExpressionField("show_at_start"),
        showBetween: dictionary.getOptionalExpressionField("show_between"),
        style: dictionary.getOptionalField("style", templateToType: templateToType)
      )
    }

    init(
      margins: Field<DivEdgeInsetsTemplate>? = nil,
      showAtEnd: Field<Expression<Bool>>? = nil,
      showAtStart: Field<Expression<Bool>>? = nil,
      showBetween: Field<Expression<Bool>>? = nil,
      style: Field<DivDrawableTemplate>? = nil
    ) {
      self.margins = margins
      self.showAtEnd = showAtEnd
      self.showAtStart = showAtStart
      self.showBetween = showBetween
      self.style = style
    }

    private static func resolveOnlyLinks(context: TemplatesContext, parent: SeparatorTemplate?) -> DeserializationResult<DivTable.Separator> {
      let marginsValue = parent?.margins?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
      let showAtEndValue = parent?.showAtEnd?.resolveOptionalValue(context: context) ?? .noValue
      let showAtStartValue = parent?.showAtStart?.resolveOptionalValue(context: context) ?? .noValue
      let showBetweenValue = parent?.showBetween?.resolveOptionalValue(context: context) ?? .noValue
      let styleValue = parent?.style?.resolveValue(context: context, useOnlyLinks: true) ?? .noValue
      var errors = mergeErrors(
        marginsValue.errorsOrWarnings?.map { .nestedObjectError(field: "margins", error: $0) },
        showAtEndValue.errorsOrWarnings?.map { .nestedObjectError(field: "show_at_end", error: $0) },
        showAtStartValue.errorsOrWarnings?.map { .nestedObjectError(field: "show_at_start", error: $0) },
        showBetweenValue.errorsOrWarnings?.map { .nestedObjectError(field: "show_between", error: $0) },
        styleValue.errorsOrWarnings?.map { .nestedObjectError(field: "style", error: $0) }
      )
      if case .noValue = styleValue {
        errors.append(.requiredFieldIsMissing(field: "style"))
      }
      guard
        let styleNonNil = styleValue.value
      else {
        return .failure(NonEmptyArray(errors)!)
      }
      let result = DivTable.Separator(
        margins: marginsValue.value,
        showAtEnd: showAtEndValue.value,
        showAtStart: showAtStartValue.value,
        showBetween: showBetweenValue.value,
        style: styleNonNil
      )
      return errors.isEmpty ? .success(result) : .partialSuccess(result, warnings: NonEmptyArray(errors)!)
    }

    public static func resolveValue(context: TemplatesContext, parent: SeparatorTemplate?, useOnlyLinks: Bool) -> DeserializationResult<DivTable.Separator> {
      if useOnlyLinks {
        return resolveOnlyLinks(context: context, parent: parent)
      }
      var marginsValue: DeserializationResult<DivEdgeInsets> = .noValue
      var showAtEndValue: DeserializationResult<Expression<Bool>> = parent?.showAtEnd?.value() ?? .noValue
      var showAtStartValue: DeserializationResult<Expression<Bool>> = parent?.showAtStart?.value() ?? .noValue
      var showBetweenValue: DeserializationResult<Expression<Bool>> = parent?.showBetween?.value() ?? .noValue
      var styleValue: DeserializationResult<DivDrawable> = .noValue
      context.templateData.forEach { key, __dictValue in
        switch key {
        case "margins":
          marginsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivEdgeInsetsTemplate.self).merged(with: marginsValue)
        case "show_at_end":
          showAtEndValue = deserialize(__dictValue).merged(with: showAtEndValue)
        case "show_at_start":
          showAtStartValue = deserialize(__dictValue).merged(with: showAtStartValue)
        case "show_between":
          showBetweenValue = deserialize(__dictValue).merged(with: showBetweenValue)
        case "style":
          styleValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivDrawableTemplate.self).merged(with: styleValue)
        case parent?.margins?.link:
          marginsValue = marginsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivEdgeInsetsTemplate.self) })
        case parent?.showAtEnd?.link:
          showAtEndValue = showAtEndValue.merged(with: { deserialize(__dictValue) })
        case parent?.showAtStart?.link:
          showAtStartValue = showAtStartValue.merged(with: { deserialize(__dictValue) })
        case parent?.showBetween?.link:
          showBetweenValue = showBetweenValue.merged(with: { deserialize(__dictValue) })
        case parent?.style?.link:
          styleValue = styleValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivDrawableTemplate.self) })
        default: break
        }
      }
      if let parent = parent {
        _ = marginsValue = marginsValue.merged(with: { parent.margins?.resolveOptionalValue(context: context, useOnlyLinks: true) })
        _ = styleValue = styleValue.merged(with: { parent.style?.resolveValue(context: context, useOnlyLinks: true) })
      }
      var errors = mergeErrors(
        marginsValue.errorsOrWarnings?.map { .nestedObjectError(field: "margins", error: $0) },
        showAtEndValue.errorsOrWarnings?.map { .nestedObjectError(field: "show_at_end", error: $0) },
        showAtStartValue.errorsOrWarnings?.map { .nestedObjectError(field: "show_at_start", error: $0) },
        showBetweenValue.errorsOrWarnings?.map { .nestedObjectError(field: "show_between", error: $0) },
        styleValue.errorsOrWarnings?.map { .nestedObjectError(field: "style", error: $0) }
      )
      if case .noValue = styleValue {
        errors.append(.requiredFieldIsMissing(field: "style"))
      }
      guard
        let styleNonNil = styleValue.value
      else {
        return .failure(NonEmptyArray(errors)!)
      }
      let result = DivTable.Separator(
        margins: marginsValue.value,
        showAtEnd: showAtEndValue.value,
        showAtStart: showAtStartValue.value,
        showBetween: showBetweenValue.value,
        style: styleNonNil
      )
      return errors.isEmpty ? .success(result) : .partialSuccess(result, warnings: NonEmptyArray(errors)!)
    }

    private func mergedWithParent(templates: [TemplateName: Any]) throws -> SeparatorTemplate {
      return self
    }

    public func resolveParent(templates: [TemplateName: Any]) throws -> SeparatorTemplate {
      let merged = try mergedWithParent(templates: templates)

      return SeparatorTemplate(
        margins: merged.margins?.tryResolveParent(templates: templates),
        showAtEnd: merged.showAtEnd,
        showAtStart: merged.showAtStart,
        showBetween: merged.showBetween,
        style: try merged.style?.resolveParent(templates: templates)
      )
    }
  }

  public final class StripedTemplate: TemplateValue, Sendable {
    public let evenRowBackground: Field<[DivBackgroundTemplate]>?
    public let oddRowBackground: Field<[DivBackgroundTemplate]>?

    public convenience init(dictionary: [String: Any], templateToType: [TemplateName: String]) throws {
      self.init(
        evenRowBackground: dictionary.getOptionalArray("even_row_background", templateToType: templateToType),
        oddRowBackground: dictionary.getOptionalArray("odd_row_background", templateToType: templateToType)
      )
    }

    init(
      evenRowBackground: Field<[DivBackgroundTemplate]>? = nil,
      oddRowBackground: Field<[DivBackgroundTemplate]>? = nil
    ) {
      self.evenRowBackground = evenRowBackground
      self.oddRowBackground = oddRowBackground
    }

    private static func resolveOnlyLinks(context: TemplatesContext, parent: StripedTemplate?) -> DeserializationResult<DivTable.Striped> {
      let evenRowBackgroundValue = parent?.evenRowBackground?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
      let oddRowBackgroundValue = parent?.oddRowBackground?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
      let errors = mergeErrors(
        evenRowBackgroundValue.errorsOrWarnings?.map { .nestedObjectError(field: "even_row_background", error: $0) },
        oddRowBackgroundValue.errorsOrWarnings?.map { .nestedObjectError(field: "odd_row_background", error: $0) }
      )
      let result = DivTable.Striped(
        evenRowBackground: evenRowBackgroundValue.value,
        oddRowBackground: oddRowBackgroundValue.value
      )
      return errors.isEmpty ? .success(result) : .partialSuccess(result, warnings: NonEmptyArray(errors)!)
    }

    public static func resolveValue(context: TemplatesContext, parent: StripedTemplate?, useOnlyLinks: Bool) -> DeserializationResult<DivTable.Striped> {
      if useOnlyLinks {
        return resolveOnlyLinks(context: context, parent: parent)
      }
      var evenRowBackgroundValue: DeserializationResult<[DivBackground]> = .noValue
      var oddRowBackgroundValue: DeserializationResult<[DivBackground]> = .noValue
      context.templateData.forEach { key, __dictValue in
        switch key {
        case "even_row_background":
          evenRowBackgroundValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivBackgroundTemplate.self).merged(with: evenRowBackgroundValue)
        case "odd_row_background":
          oddRowBackgroundValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivBackgroundTemplate.self).merged(with: oddRowBackgroundValue)
        case parent?.evenRowBackground?.link:
          evenRowBackgroundValue = evenRowBackgroundValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivBackgroundTemplate.self) })
        case parent?.oddRowBackground?.link:
          oddRowBackgroundValue = oddRowBackgroundValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivBackgroundTemplate.self) })
        default: break
        }
      }
      if let parent = parent {
        _ = evenRowBackgroundValue = evenRowBackgroundValue.merged(with: { parent.evenRowBackground?.resolveOptionalValue(context: context, useOnlyLinks: true) })
        _ = oddRowBackgroundValue = oddRowBackgroundValue.merged(with: { parent.oddRowBackground?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      }
      let errors = mergeErrors(
        evenRowBackgroundValue.errorsOrWarnings?.map { .nestedObjectError(field: "even_row_background", error: $0) },
        oddRowBackgroundValue.errorsOrWarnings?.map { .nestedObjectError(field: "odd_row_background", error: $0) }
      )
      let result = DivTable.Striped(
        evenRowBackground: evenRowBackgroundValue.value,
        oddRowBackground: oddRowBackgroundValue.value
      )
      return errors.isEmpty ? .success(result) : .partialSuccess(result, warnings: NonEmptyArray(errors)!)
    }

    private func mergedWithParent(templates: [TemplateName: Any]) throws -> StripedTemplate {
      return self
    }

    public func resolveParent(templates: [TemplateName: Any]) throws -> StripedTemplate {
      let merged = try mergedWithParent(templates: templates)

      return StripedTemplate(
        evenRowBackground: merged.evenRowBackground?.tryResolveParent(templates: templates),
        oddRowBackground: merged.oddRowBackground?.tryResolveParent(templates: templates)
      )
    }
  }

  public static let type: String = "table"
  public let parent: String?
  public let accessibility: Field<DivAccessibilityTemplate>?
  public let action: Field<DivActionTemplate>?
  public let actionAnimation: Field<DivAnimationTemplate>? // default value: DivAnimation(duration: .value(100), endValue: .value(0.6), name: .value(.fade), startValue: .value(1))
  public let actions: Field<[DivActionTemplate]>?
  public let alignmentHorizontal: Field<Expression<DivAlignmentHorizontal>>?
  public let alignmentVertical: Field<Expression<DivAlignmentVertical>>?
  public let alpha: Field<Expression<Double>>? // constraint: number >= 0.0 && number <= 1.0; default value: 1.0
  public let animators: Field<[DivAnimatorTemplate]>?
  public let background: Field<[DivBackgroundTemplate]>?
  public let border: Field<DivBorderTemplate>?
  public let captureFocusOnAction: Field<Expression<Bool>>? // default value: true
  public let columnSeparator: Field<SeparatorTemplate>?
  public let columnSpan: Field<Expression<Int>>? // constraint: number >= 0
  public let columns: Field<[ColumnTemplate]>?
  public let contentAlignmentHorizontal: Field<Expression<DivAlignmentHorizontal>>? // default value: start
  public let contentAlignmentVertical: Field<Expression<DivAlignmentVertical>>? // default value: top
  public let disappearActions: Field<[DivDisappearActionTemplate]>?
  public let doubletapActions: Field<[DivActionTemplate]>?
  public let extensions: Field<[DivExtensionTemplate]>?
  public let focus: Field<DivFocusTemplate>?
  public let functions: Field<[DivFunctionTemplate]>?
  public let headerBackground: Field<[DivBackgroundTemplate]>?
  public let headerRow: Field<RowTemplate>?
  public let headerSeparator: Field<SeparatorTemplate>?
  public let height: Field<DivSizeTemplate>? // default value: .divWrapContentSize(DivWrapContentSize())
  public let hoverEndActions: Field<[DivActionTemplate]>?
  public let hoverStartActions: Field<[DivActionTemplate]>?
  public let id: Field<String>?
  public let layoutProvider: Field<DivLayoutProviderTemplate>?
  public let longtapActions: Field<[DivActionTemplate]>?
  public let margins: Field<DivEdgeInsetsTemplate>?
  public let paddings: Field<DivEdgeInsetsTemplate>?
  public let pressEndActions: Field<[DivActionTemplate]>?
  public let pressStartActions: Field<[DivActionTemplate]>?
  public let reuseId: Field<Expression<String>>?
  public let rowBuilder: Field<DivCollectionItemBuilderTemplate>?
  public let rowSeparator: Field<SeparatorTemplate>?
  public let rowSpan: Field<Expression<Int>>? // constraint: number >= 0
  public let rows: Field<[RowTemplate]>?
  public let selectedActions: Field<[DivActionTemplate]>?
  public let striped: Field<StripedTemplate>?
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
      action: dictionary.getOptionalField("action", templateToType: templateToType),
      actionAnimation: dictionary.getOptionalField("action_animation", templateToType: templateToType),
      actions: dictionary.getOptionalArray("actions", templateToType: templateToType),
      alignmentHorizontal: dictionary.getOptionalExpressionField("alignment_horizontal"),
      alignmentVertical: dictionary.getOptionalExpressionField("alignment_vertical"),
      alpha: dictionary.getOptionalExpressionField("alpha"),
      animators: dictionary.getOptionalArray("animators", templateToType: templateToType),
      background: dictionary.getOptionalArray("background", templateToType: templateToType),
      border: dictionary.getOptionalField("border", templateToType: templateToType),
      captureFocusOnAction: dictionary.getOptionalExpressionField("capture_focus_on_action"),
      columnSeparator: dictionary.getOptionalField("column_separator", templateToType: templateToType),
      columnSpan: dictionary.getOptionalExpressionField("column_span"),
      columns: dictionary.getOptionalArray("columns", templateToType: templateToType),
      contentAlignmentHorizontal: dictionary.getOptionalExpressionField("content_alignment_horizontal"),
      contentAlignmentVertical: dictionary.getOptionalExpressionField("content_alignment_vertical"),
      disappearActions: dictionary.getOptionalArray("disappear_actions", templateToType: templateToType),
      doubletapActions: dictionary.getOptionalArray("doubletap_actions", templateToType: templateToType),
      extensions: dictionary.getOptionalArray("extensions", templateToType: templateToType),
      focus: dictionary.getOptionalField("focus", templateToType: templateToType),
      functions: dictionary.getOptionalArray("functions", templateToType: templateToType),
      headerBackground: dictionary.getOptionalArray("header_background", templateToType: templateToType),
      headerRow: dictionary.getOptionalField("header_row", templateToType: templateToType),
      headerSeparator: dictionary.getOptionalField("header_separator", templateToType: templateToType),
      height: dictionary.getOptionalField("height", templateToType: templateToType),
      hoverEndActions: dictionary.getOptionalArray("hover_end_actions", templateToType: templateToType),
      hoverStartActions: dictionary.getOptionalArray("hover_start_actions", templateToType: templateToType),
      id: dictionary.getOptionalField("id"),
      layoutProvider: dictionary.getOptionalField("layout_provider", templateToType: templateToType),
      longtapActions: dictionary.getOptionalArray("longtap_actions", templateToType: templateToType),
      margins: dictionary.getOptionalField("margins", templateToType: templateToType),
      paddings: dictionary.getOptionalField("paddings", templateToType: templateToType),
      pressEndActions: dictionary.getOptionalArray("press_end_actions", templateToType: templateToType),
      pressStartActions: dictionary.getOptionalArray("press_start_actions", templateToType: templateToType),
      reuseId: dictionary.getOptionalExpressionField("reuse_id"),
      rowBuilder: dictionary.getOptionalField("row_builder", templateToType: templateToType),
      rowSeparator: dictionary.getOptionalField("row_separator", templateToType: templateToType),
      rowSpan: dictionary.getOptionalExpressionField("row_span"),
      rows: dictionary.getOptionalArray("rows", templateToType: templateToType),
      selectedActions: dictionary.getOptionalArray("selected_actions", templateToType: templateToType),
      striped: dictionary.getOptionalField("striped", templateToType: templateToType),
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
    action: Field<DivActionTemplate>? = nil,
    actionAnimation: Field<DivAnimationTemplate>? = nil,
    actions: Field<[DivActionTemplate]>? = nil,
    alignmentHorizontal: Field<Expression<DivAlignmentHorizontal>>? = nil,
    alignmentVertical: Field<Expression<DivAlignmentVertical>>? = nil,
    alpha: Field<Expression<Double>>? = nil,
    animators: Field<[DivAnimatorTemplate]>? = nil,
    background: Field<[DivBackgroundTemplate]>? = nil,
    border: Field<DivBorderTemplate>? = nil,
    captureFocusOnAction: Field<Expression<Bool>>? = nil,
    columnSeparator: Field<SeparatorTemplate>? = nil,
    columnSpan: Field<Expression<Int>>? = nil,
    columns: Field<[ColumnTemplate]>? = nil,
    contentAlignmentHorizontal: Field<Expression<DivAlignmentHorizontal>>? = nil,
    contentAlignmentVertical: Field<Expression<DivAlignmentVertical>>? = nil,
    disappearActions: Field<[DivDisappearActionTemplate]>? = nil,
    doubletapActions: Field<[DivActionTemplate]>? = nil,
    extensions: Field<[DivExtensionTemplate]>? = nil,
    focus: Field<DivFocusTemplate>? = nil,
    functions: Field<[DivFunctionTemplate]>? = nil,
    headerBackground: Field<[DivBackgroundTemplate]>? = nil,
    headerRow: Field<RowTemplate>? = nil,
    headerSeparator: Field<SeparatorTemplate>? = nil,
    height: Field<DivSizeTemplate>? = nil,
    hoverEndActions: Field<[DivActionTemplate]>? = nil,
    hoverStartActions: Field<[DivActionTemplate]>? = nil,
    id: Field<String>? = nil,
    layoutProvider: Field<DivLayoutProviderTemplate>? = nil,
    longtapActions: Field<[DivActionTemplate]>? = nil,
    margins: Field<DivEdgeInsetsTemplate>? = nil,
    paddings: Field<DivEdgeInsetsTemplate>? = nil,
    pressEndActions: Field<[DivActionTemplate]>? = nil,
    pressStartActions: Field<[DivActionTemplate]>? = nil,
    reuseId: Field<Expression<String>>? = nil,
    rowBuilder: Field<DivCollectionItemBuilderTemplate>? = nil,
    rowSeparator: Field<SeparatorTemplate>? = nil,
    rowSpan: Field<Expression<Int>>? = nil,
    rows: Field<[RowTemplate]>? = nil,
    selectedActions: Field<[DivActionTemplate]>? = nil,
    striped: Field<StripedTemplate>? = nil,
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
    self.action = action
    self.actionAnimation = actionAnimation
    self.actions = actions
    self.alignmentHorizontal = alignmentHorizontal
    self.alignmentVertical = alignmentVertical
    self.alpha = alpha
    self.animators = animators
    self.background = background
    self.border = border
    self.captureFocusOnAction = captureFocusOnAction
    self.columnSeparator = columnSeparator
    self.columnSpan = columnSpan
    self.columns = columns
    self.contentAlignmentHorizontal = contentAlignmentHorizontal
    self.contentAlignmentVertical = contentAlignmentVertical
    self.disappearActions = disappearActions
    self.doubletapActions = doubletapActions
    self.extensions = extensions
    self.focus = focus
    self.functions = functions
    self.headerBackground = headerBackground
    self.headerRow = headerRow
    self.headerSeparator = headerSeparator
    self.height = height
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
    self.visibility = visibility
    self.visibilityAction = visibilityAction
    self.visibilityActions = visibilityActions
    self.width = width
  }

  private static func resolveOnlyLinks(context: TemplatesContext, parent: DivTableTemplate?) -> DeserializationResult<DivTable> {
    let accessibilityValue = parent?.accessibility?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let actionValue = parent?.action?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let actionAnimationValue = parent?.actionAnimation?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let actionsValue = parent?.actions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let alignmentHorizontalValue = parent?.alignmentHorizontal?.resolveOptionalValue(context: context) ?? .noValue
    let alignmentVerticalValue = parent?.alignmentVertical?.resolveOptionalValue(context: context) ?? .noValue
    let alphaValue = parent?.alpha?.resolveOptionalValue(context: context, validator: ResolvedValue.alphaValidator) ?? .noValue
    let animatorsValue = parent?.animators?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let backgroundValue = parent?.background?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let borderValue = parent?.border?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let captureFocusOnActionValue = parent?.captureFocusOnAction?.resolveOptionalValue(context: context) ?? .noValue
    let columnSeparatorValue = parent?.columnSeparator?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let columnSpanValue = parent?.columnSpan?.resolveOptionalValue(context: context, validator: ResolvedValue.columnSpanValidator) ?? .noValue
    let columnsValue = parent?.columns?.resolveValue(context: context, useOnlyLinks: true) ?? .noValue
    let contentAlignmentHorizontalValue = parent?.contentAlignmentHorizontal?.resolveOptionalValue(context: context) ?? .noValue
    let contentAlignmentVerticalValue = parent?.contentAlignmentVertical?.resolveOptionalValue(context: context) ?? .noValue
    let disappearActionsValue = parent?.disappearActions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let doubletapActionsValue = parent?.doubletapActions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let extensionsValue = parent?.extensions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let focusValue = parent?.focus?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let functionsValue = parent?.functions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let headerBackgroundValue = parent?.headerBackground?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let headerRowValue = parent?.headerRow?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let headerSeparatorValue = parent?.headerSeparator?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let heightValue = parent?.height?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let hoverEndActionsValue = parent?.hoverEndActions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let hoverStartActionsValue = parent?.hoverStartActions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let idValue = parent?.id?.resolveOptionalValue(context: context) ?? .noValue
    let layoutProviderValue = parent?.layoutProvider?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let longtapActionsValue = parent?.longtapActions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let marginsValue = parent?.margins?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let paddingsValue = parent?.paddings?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let pressEndActionsValue = parent?.pressEndActions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let pressStartActionsValue = parent?.pressStartActions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let reuseIdValue = parent?.reuseId?.resolveOptionalValue(context: context) ?? .noValue
    let rowBuilderValue = parent?.rowBuilder?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let rowSeparatorValue = parent?.rowSeparator?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let rowSpanValue = parent?.rowSpan?.resolveOptionalValue(context: context, validator: ResolvedValue.rowSpanValidator) ?? .noValue
    let rowsValue = parent?.rows?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let selectedActionsValue = parent?.selectedActions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let stripedValue = parent?.striped?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
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
    var errors = mergeErrors(
      accessibilityValue.errorsOrWarnings?.map { .nestedObjectError(field: "accessibility", error: $0) },
      actionValue.errorsOrWarnings?.map { .nestedObjectError(field: "action", error: $0) },
      actionAnimationValue.errorsOrWarnings?.map { .nestedObjectError(field: "action_animation", error: $0) },
      actionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "actions", error: $0) },
      alignmentHorizontalValue.errorsOrWarnings?.map { .nestedObjectError(field: "alignment_horizontal", error: $0) },
      alignmentVerticalValue.errorsOrWarnings?.map { .nestedObjectError(field: "alignment_vertical", error: $0) },
      alphaValue.errorsOrWarnings?.map { .nestedObjectError(field: "alpha", error: $0) },
      animatorsValue.errorsOrWarnings?.map { .nestedObjectError(field: "animators", error: $0) },
      backgroundValue.errorsOrWarnings?.map { .nestedObjectError(field: "background", error: $0) },
      borderValue.errorsOrWarnings?.map { .nestedObjectError(field: "border", error: $0) },
      captureFocusOnActionValue.errorsOrWarnings?.map { .nestedObjectError(field: "capture_focus_on_action", error: $0) },
      columnSeparatorValue.errorsOrWarnings?.map { .nestedObjectError(field: "column_separator", error: $0) },
      columnSpanValue.errorsOrWarnings?.map { .nestedObjectError(field: "column_span", error: $0) },
      columnsValue.errorsOrWarnings?.map { .nestedObjectError(field: "columns", error: $0) },
      contentAlignmentHorizontalValue.errorsOrWarnings?.map { .nestedObjectError(field: "content_alignment_horizontal", error: $0) },
      contentAlignmentVerticalValue.errorsOrWarnings?.map { .nestedObjectError(field: "content_alignment_vertical", error: $0) },
      disappearActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "disappear_actions", error: $0) },
      doubletapActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "doubletap_actions", error: $0) },
      extensionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "extensions", error: $0) },
      focusValue.errorsOrWarnings?.map { .nestedObjectError(field: "focus", error: $0) },
      functionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "functions", error: $0) },
      headerBackgroundValue.errorsOrWarnings?.map { .nestedObjectError(field: "header_background", error: $0) },
      headerRowValue.errorsOrWarnings?.map { .nestedObjectError(field: "header_row", error: $0) },
      headerSeparatorValue.errorsOrWarnings?.map { .nestedObjectError(field: "header_separator", error: $0) },
      heightValue.errorsOrWarnings?.map { .nestedObjectError(field: "height", error: $0) },
      hoverEndActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "hover_end_actions", error: $0) },
      hoverStartActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "hover_start_actions", error: $0) },
      idValue.errorsOrWarnings?.map { .nestedObjectError(field: "id", error: $0) },
      layoutProviderValue.errorsOrWarnings?.map { .nestedObjectError(field: "layout_provider", error: $0) },
      longtapActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "longtap_actions", error: $0) },
      marginsValue.errorsOrWarnings?.map { .nestedObjectError(field: "margins", error: $0) },
      paddingsValue.errorsOrWarnings?.map { .nestedObjectError(field: "paddings", error: $0) },
      pressEndActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "press_end_actions", error: $0) },
      pressStartActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "press_start_actions", error: $0) },
      reuseIdValue.errorsOrWarnings?.map { .nestedObjectError(field: "reuse_id", error: $0) },
      rowBuilderValue.errorsOrWarnings?.map { .nestedObjectError(field: "row_builder", error: $0) },
      rowSeparatorValue.errorsOrWarnings?.map { .nestedObjectError(field: "row_separator", error: $0) },
      rowSpanValue.errorsOrWarnings?.map { .nestedObjectError(field: "row_span", error: $0) },
      rowsValue.errorsOrWarnings?.map { .nestedObjectError(field: "rows", error: $0) },
      selectedActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "selected_actions", error: $0) },
      stripedValue.errorsOrWarnings?.map { .nestedObjectError(field: "striped", error: $0) },
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
    if case .noValue = columnsValue {
      errors.append(.requiredFieldIsMissing(field: "columns"))
    }
    guard
      let columnsNonNil = columnsValue.value
    else {
      return .failure(NonEmptyArray(errors)!)
    }
    let result = DivTable(
      accessibility: accessibilityValue.value,
      action: actionValue.value,
      actionAnimation: actionAnimationValue.value,
      actions: actionsValue.value,
      alignmentHorizontal: alignmentHorizontalValue.value,
      alignmentVertical: alignmentVerticalValue.value,
      alpha: alphaValue.value,
      animators: animatorsValue.value,
      background: backgroundValue.value,
      border: borderValue.value,
      captureFocusOnAction: captureFocusOnActionValue.value,
      columnSeparator: columnSeparatorValue.value,
      columnSpan: columnSpanValue.value,
      columns: columnsNonNil,
      contentAlignmentHorizontal: contentAlignmentHorizontalValue.value,
      contentAlignmentVertical: contentAlignmentVerticalValue.value,
      disappearActions: disappearActionsValue.value,
      doubletapActions: doubletapActionsValue.value,
      extensions: extensionsValue.value,
      focus: focusValue.value,
      functions: functionsValue.value,
      headerBackground: headerBackgroundValue.value,
      headerRow: headerRowValue.value,
      headerSeparator: headerSeparatorValue.value,
      height: heightValue.value,
      hoverEndActions: hoverEndActionsValue.value,
      hoverStartActions: hoverStartActionsValue.value,
      id: idValue.value,
      layoutProvider: layoutProviderValue.value,
      longtapActions: longtapActionsValue.value,
      margins: marginsValue.value,
      paddings: paddingsValue.value,
      pressEndActions: pressEndActionsValue.value,
      pressStartActions: pressStartActionsValue.value,
      reuseId: reuseIdValue.value,
      rowBuilder: rowBuilderValue.value,
      rowSeparator: rowSeparatorValue.value,
      rowSpan: rowSpanValue.value,
      rows: rowsValue.value,
      selectedActions: selectedActionsValue.value,
      striped: stripedValue.value,
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

  public static func resolveValue(context: TemplatesContext, parent: DivTableTemplate?, useOnlyLinks: Bool) -> DeserializationResult<DivTable> {
    if useOnlyLinks {
      return resolveOnlyLinks(context: context, parent: parent)
    }
    var accessibilityValue: DeserializationResult<DivAccessibility> = .noValue
    var actionValue: DeserializationResult<DivAction> = .noValue
    var actionAnimationValue: DeserializationResult<DivAnimation> = .noValue
    var actionsValue: DeserializationResult<[DivAction]> = .noValue
    var alignmentHorizontalValue: DeserializationResult<Expression<DivAlignmentHorizontal>> = parent?.alignmentHorizontal?.value() ?? .noValue
    var alignmentVerticalValue: DeserializationResult<Expression<DivAlignmentVertical>> = parent?.alignmentVertical?.value() ?? .noValue
    var alphaValue: DeserializationResult<Expression<Double>> = parent?.alpha?.value() ?? .noValue
    var animatorsValue: DeserializationResult<[DivAnimator]> = .noValue
    var backgroundValue: DeserializationResult<[DivBackground]> = .noValue
    var borderValue: DeserializationResult<DivBorder> = .noValue
    var captureFocusOnActionValue: DeserializationResult<Expression<Bool>> = parent?.captureFocusOnAction?.value() ?? .noValue
    var columnSeparatorValue: DeserializationResult<DivTable.Separator> = .noValue
    var columnSpanValue: DeserializationResult<Expression<Int>> = parent?.columnSpan?.value() ?? .noValue
    var columnsValue: DeserializationResult<[DivTable.Column]> = .noValue
    var contentAlignmentHorizontalValue: DeserializationResult<Expression<DivAlignmentHorizontal>> = parent?.contentAlignmentHorizontal?.value() ?? .noValue
    var contentAlignmentVerticalValue: DeserializationResult<Expression<DivAlignmentVertical>> = parent?.contentAlignmentVertical?.value() ?? .noValue
    var disappearActionsValue: DeserializationResult<[DivDisappearAction]> = .noValue
    var doubletapActionsValue: DeserializationResult<[DivAction]> = .noValue
    var extensionsValue: DeserializationResult<[DivExtension]> = .noValue
    var focusValue: DeserializationResult<DivFocus> = .noValue
    var functionsValue: DeserializationResult<[DivFunction]> = .noValue
    var headerBackgroundValue: DeserializationResult<[DivBackground]> = .noValue
    var headerRowValue: DeserializationResult<DivTable.Row> = .noValue
    var headerSeparatorValue: DeserializationResult<DivTable.Separator> = .noValue
    var heightValue: DeserializationResult<DivSize> = .noValue
    var hoverEndActionsValue: DeserializationResult<[DivAction]> = .noValue
    var hoverStartActionsValue: DeserializationResult<[DivAction]> = .noValue
    var idValue: DeserializationResult<String> = parent?.id?.value() ?? .noValue
    var layoutProviderValue: DeserializationResult<DivLayoutProvider> = .noValue
    var longtapActionsValue: DeserializationResult<[DivAction]> = .noValue
    var marginsValue: DeserializationResult<DivEdgeInsets> = .noValue
    var paddingsValue: DeserializationResult<DivEdgeInsets> = .noValue
    var pressEndActionsValue: DeserializationResult<[DivAction]> = .noValue
    var pressStartActionsValue: DeserializationResult<[DivAction]> = .noValue
    var reuseIdValue: DeserializationResult<Expression<String>> = parent?.reuseId?.value() ?? .noValue
    var rowBuilderValue: DeserializationResult<DivCollectionItemBuilder> = .noValue
    var rowSeparatorValue: DeserializationResult<DivTable.Separator> = .noValue
    var rowSpanValue: DeserializationResult<Expression<Int>> = parent?.rowSpan?.value() ?? .noValue
    var rowsValue: DeserializationResult<[DivTable.Row]> = .noValue
    var selectedActionsValue: DeserializationResult<[DivAction]> = .noValue
    var stripedValue: DeserializationResult<DivTable.Striped> = .noValue
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
      case "action":
        actionValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self).merged(with: actionValue)
      case "action_animation":
        actionAnimationValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivAnimationTemplate.self).merged(with: actionAnimationValue)
      case "actions":
        actionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self).merged(with: actionsValue)
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
      case "capture_focus_on_action":
        captureFocusOnActionValue = deserialize(__dictValue).merged(with: captureFocusOnActionValue)
      case "column_separator":
        columnSeparatorValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTableTemplate.SeparatorTemplate.self).merged(with: columnSeparatorValue)
      case "column_span":
        columnSpanValue = deserialize(__dictValue, validator: ResolvedValue.columnSpanValidator).merged(with: columnSpanValue)
      case "columns":
        columnsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTableTemplate.ColumnTemplate.self).merged(with: columnsValue)
      case "content_alignment_horizontal":
        contentAlignmentHorizontalValue = deserialize(__dictValue).merged(with: contentAlignmentHorizontalValue)
      case "content_alignment_vertical":
        contentAlignmentVerticalValue = deserialize(__dictValue).merged(with: contentAlignmentVerticalValue)
      case "disappear_actions":
        disappearActionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivDisappearActionTemplate.self).merged(with: disappearActionsValue)
      case "doubletap_actions":
        doubletapActionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self).merged(with: doubletapActionsValue)
      case "extensions":
        extensionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivExtensionTemplate.self).merged(with: extensionsValue)
      case "focus":
        focusValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivFocusTemplate.self).merged(with: focusValue)
      case "functions":
        functionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivFunctionTemplate.self).merged(with: functionsValue)
      case "header_background":
        headerBackgroundValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivBackgroundTemplate.self).merged(with: headerBackgroundValue)
      case "header_row":
        headerRowValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTableTemplate.RowTemplate.self).merged(with: headerRowValue)
      case "header_separator":
        headerSeparatorValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTableTemplate.SeparatorTemplate.self).merged(with: headerSeparatorValue)
      case "height":
        heightValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivSizeTemplate.self).merged(with: heightValue)
      case "hover_end_actions":
        hoverEndActionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self).merged(with: hoverEndActionsValue)
      case "hover_start_actions":
        hoverStartActionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self).merged(with: hoverStartActionsValue)
      case "id":
        idValue = deserialize(__dictValue).merged(with: idValue)
      case "layout_provider":
        layoutProviderValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivLayoutProviderTemplate.self).merged(with: layoutProviderValue)
      case "longtap_actions":
        longtapActionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self).merged(with: longtapActionsValue)
      case "margins":
        marginsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivEdgeInsetsTemplate.self).merged(with: marginsValue)
      case "paddings":
        paddingsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivEdgeInsetsTemplate.self).merged(with: paddingsValue)
      case "press_end_actions":
        pressEndActionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self).merged(with: pressEndActionsValue)
      case "press_start_actions":
        pressStartActionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self).merged(with: pressStartActionsValue)
      case "reuse_id":
        reuseIdValue = deserialize(__dictValue).merged(with: reuseIdValue)
      case "row_builder":
        rowBuilderValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivCollectionItemBuilderTemplate.self).merged(with: rowBuilderValue)
      case "row_separator":
        rowSeparatorValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTableTemplate.SeparatorTemplate.self).merged(with: rowSeparatorValue)
      case "row_span":
        rowSpanValue = deserialize(__dictValue, validator: ResolvedValue.rowSpanValidator).merged(with: rowSpanValue)
      case "rows":
        rowsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTableTemplate.RowTemplate.self).merged(with: rowsValue)
      case "selected_actions":
        selectedActionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self).merged(with: selectedActionsValue)
      case "striped":
        stripedValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTableTemplate.StripedTemplate.self).merged(with: stripedValue)
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
      case parent?.action?.link:
        actionValue = actionValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self) })
      case parent?.actionAnimation?.link:
        actionAnimationValue = actionAnimationValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivAnimationTemplate.self) })
      case parent?.actions?.link:
        actionsValue = actionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self) })
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
      case parent?.captureFocusOnAction?.link:
        captureFocusOnActionValue = captureFocusOnActionValue.merged(with: { deserialize(__dictValue) })
      case parent?.columnSeparator?.link:
        columnSeparatorValue = columnSeparatorValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTableTemplate.SeparatorTemplate.self) })
      case parent?.columnSpan?.link:
        columnSpanValue = columnSpanValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.columnSpanValidator) })
      case parent?.columns?.link:
        columnsValue = columnsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTableTemplate.ColumnTemplate.self) })
      case parent?.contentAlignmentHorizontal?.link:
        contentAlignmentHorizontalValue = contentAlignmentHorizontalValue.merged(with: { deserialize(__dictValue) })
      case parent?.contentAlignmentVertical?.link:
        contentAlignmentVerticalValue = contentAlignmentVerticalValue.merged(with: { deserialize(__dictValue) })
      case parent?.disappearActions?.link:
        disappearActionsValue = disappearActionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivDisappearActionTemplate.self) })
      case parent?.doubletapActions?.link:
        doubletapActionsValue = doubletapActionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self) })
      case parent?.extensions?.link:
        extensionsValue = extensionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivExtensionTemplate.self) })
      case parent?.focus?.link:
        focusValue = focusValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivFocusTemplate.self) })
      case parent?.functions?.link:
        functionsValue = functionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivFunctionTemplate.self) })
      case parent?.headerBackground?.link:
        headerBackgroundValue = headerBackgroundValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivBackgroundTemplate.self) })
      case parent?.headerRow?.link:
        headerRowValue = headerRowValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTableTemplate.RowTemplate.self) })
      case parent?.headerSeparator?.link:
        headerSeparatorValue = headerSeparatorValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTableTemplate.SeparatorTemplate.self) })
      case parent?.height?.link:
        heightValue = heightValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivSizeTemplate.self) })
      case parent?.hoverEndActions?.link:
        hoverEndActionsValue = hoverEndActionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self) })
      case parent?.hoverStartActions?.link:
        hoverStartActionsValue = hoverStartActionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self) })
      case parent?.id?.link:
        idValue = idValue.merged(with: { deserialize(__dictValue) })
      case parent?.layoutProvider?.link:
        layoutProviderValue = layoutProviderValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivLayoutProviderTemplate.self) })
      case parent?.longtapActions?.link:
        longtapActionsValue = longtapActionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self) })
      case parent?.margins?.link:
        marginsValue = marginsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivEdgeInsetsTemplate.self) })
      case parent?.paddings?.link:
        paddingsValue = paddingsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivEdgeInsetsTemplate.self) })
      case parent?.pressEndActions?.link:
        pressEndActionsValue = pressEndActionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self) })
      case parent?.pressStartActions?.link:
        pressStartActionsValue = pressStartActionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self) })
      case parent?.reuseId?.link:
        reuseIdValue = reuseIdValue.merged(with: { deserialize(__dictValue) })
      case parent?.rowBuilder?.link:
        rowBuilderValue = rowBuilderValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivCollectionItemBuilderTemplate.self) })
      case parent?.rowSeparator?.link:
        rowSeparatorValue = rowSeparatorValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTableTemplate.SeparatorTemplate.self) })
      case parent?.rowSpan?.link:
        rowSpanValue = rowSpanValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.rowSpanValidator) })
      case parent?.rows?.link:
        rowsValue = rowsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTableTemplate.RowTemplate.self) })
      case parent?.selectedActions?.link:
        selectedActionsValue = selectedActionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self) })
      case parent?.striped?.link:
        stripedValue = stripedValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivTableTemplate.StripedTemplate.self) })
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
      _ = actionValue = actionValue.merged(with: { parent.action?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = actionAnimationValue = actionAnimationValue.merged(with: { parent.actionAnimation?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = actionsValue = actionsValue.merged(with: { parent.actions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = animatorsValue = animatorsValue.merged(with: { parent.animators?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = backgroundValue = backgroundValue.merged(with: { parent.background?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = borderValue = borderValue.merged(with: { parent.border?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = columnSeparatorValue = columnSeparatorValue.merged(with: { parent.columnSeparator?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = columnsValue = columnsValue.merged(with: { parent.columns?.resolveValue(context: context, useOnlyLinks: true) })
      _ = disappearActionsValue = disappearActionsValue.merged(with: { parent.disappearActions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = doubletapActionsValue = doubletapActionsValue.merged(with: { parent.doubletapActions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = extensionsValue = extensionsValue.merged(with: { parent.extensions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = focusValue = focusValue.merged(with: { parent.focus?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = functionsValue = functionsValue.merged(with: { parent.functions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = headerBackgroundValue = headerBackgroundValue.merged(with: { parent.headerBackground?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = headerRowValue = headerRowValue.merged(with: { parent.headerRow?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = headerSeparatorValue = headerSeparatorValue.merged(with: { parent.headerSeparator?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = heightValue = heightValue.merged(with: { parent.height?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = hoverEndActionsValue = hoverEndActionsValue.merged(with: { parent.hoverEndActions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = hoverStartActionsValue = hoverStartActionsValue.merged(with: { parent.hoverStartActions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = layoutProviderValue = layoutProviderValue.merged(with: { parent.layoutProvider?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = longtapActionsValue = longtapActionsValue.merged(with: { parent.longtapActions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = marginsValue = marginsValue.merged(with: { parent.margins?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = paddingsValue = paddingsValue.merged(with: { parent.paddings?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = pressEndActionsValue = pressEndActionsValue.merged(with: { parent.pressEndActions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = pressStartActionsValue = pressStartActionsValue.merged(with: { parent.pressStartActions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = rowBuilderValue = rowBuilderValue.merged(with: { parent.rowBuilder?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = rowSeparatorValue = rowSeparatorValue.merged(with: { parent.rowSeparator?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = rowsValue = rowsValue.merged(with: { parent.rows?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = selectedActionsValue = selectedActionsValue.merged(with: { parent.selectedActions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = stripedValue = stripedValue.merged(with: { parent.striped?.resolveOptionalValue(context: context, useOnlyLinks: true) })
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
    var errors = mergeErrors(
      accessibilityValue.errorsOrWarnings?.map { .nestedObjectError(field: "accessibility", error: $0) },
      actionValue.errorsOrWarnings?.map { .nestedObjectError(field: "action", error: $0) },
      actionAnimationValue.errorsOrWarnings?.map { .nestedObjectError(field: "action_animation", error: $0) },
      actionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "actions", error: $0) },
      alignmentHorizontalValue.errorsOrWarnings?.map { .nestedObjectError(field: "alignment_horizontal", error: $0) },
      alignmentVerticalValue.errorsOrWarnings?.map { .nestedObjectError(field: "alignment_vertical", error: $0) },
      alphaValue.errorsOrWarnings?.map { .nestedObjectError(field: "alpha", error: $0) },
      animatorsValue.errorsOrWarnings?.map { .nestedObjectError(field: "animators", error: $0) },
      backgroundValue.errorsOrWarnings?.map { .nestedObjectError(field: "background", error: $0) },
      borderValue.errorsOrWarnings?.map { .nestedObjectError(field: "border", error: $0) },
      captureFocusOnActionValue.errorsOrWarnings?.map { .nestedObjectError(field: "capture_focus_on_action", error: $0) },
      columnSeparatorValue.errorsOrWarnings?.map { .nestedObjectError(field: "column_separator", error: $0) },
      columnSpanValue.errorsOrWarnings?.map { .nestedObjectError(field: "column_span", error: $0) },
      columnsValue.errorsOrWarnings?.map { .nestedObjectError(field: "columns", error: $0) },
      contentAlignmentHorizontalValue.errorsOrWarnings?.map { .nestedObjectError(field: "content_alignment_horizontal", error: $0) },
      contentAlignmentVerticalValue.errorsOrWarnings?.map { .nestedObjectError(field: "content_alignment_vertical", error: $0) },
      disappearActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "disappear_actions", error: $0) },
      doubletapActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "doubletap_actions", error: $0) },
      extensionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "extensions", error: $0) },
      focusValue.errorsOrWarnings?.map { .nestedObjectError(field: "focus", error: $0) },
      functionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "functions", error: $0) },
      headerBackgroundValue.errorsOrWarnings?.map { .nestedObjectError(field: "header_background", error: $0) },
      headerRowValue.errorsOrWarnings?.map { .nestedObjectError(field: "header_row", error: $0) },
      headerSeparatorValue.errorsOrWarnings?.map { .nestedObjectError(field: "header_separator", error: $0) },
      heightValue.errorsOrWarnings?.map { .nestedObjectError(field: "height", error: $0) },
      hoverEndActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "hover_end_actions", error: $0) },
      hoverStartActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "hover_start_actions", error: $0) },
      idValue.errorsOrWarnings?.map { .nestedObjectError(field: "id", error: $0) },
      layoutProviderValue.errorsOrWarnings?.map { .nestedObjectError(field: "layout_provider", error: $0) },
      longtapActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "longtap_actions", error: $0) },
      marginsValue.errorsOrWarnings?.map { .nestedObjectError(field: "margins", error: $0) },
      paddingsValue.errorsOrWarnings?.map { .nestedObjectError(field: "paddings", error: $0) },
      pressEndActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "press_end_actions", error: $0) },
      pressStartActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "press_start_actions", error: $0) },
      reuseIdValue.errorsOrWarnings?.map { .nestedObjectError(field: "reuse_id", error: $0) },
      rowBuilderValue.errorsOrWarnings?.map { .nestedObjectError(field: "row_builder", error: $0) },
      rowSeparatorValue.errorsOrWarnings?.map { .nestedObjectError(field: "row_separator", error: $0) },
      rowSpanValue.errorsOrWarnings?.map { .nestedObjectError(field: "row_span", error: $0) },
      rowsValue.errorsOrWarnings?.map { .nestedObjectError(field: "rows", error: $0) },
      selectedActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "selected_actions", error: $0) },
      stripedValue.errorsOrWarnings?.map { .nestedObjectError(field: "striped", error: $0) },
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
    if case .noValue = columnsValue {
      errors.append(.requiredFieldIsMissing(field: "columns"))
    }
    guard
      let columnsNonNil = columnsValue.value
    else {
      return .failure(NonEmptyArray(errors)!)
    }
    let result = DivTable(
      accessibility: accessibilityValue.value,
      action: actionValue.value,
      actionAnimation: actionAnimationValue.value,
      actions: actionsValue.value,
      alignmentHorizontal: alignmentHorizontalValue.value,
      alignmentVertical: alignmentVerticalValue.value,
      alpha: alphaValue.value,
      animators: animatorsValue.value,
      background: backgroundValue.value,
      border: borderValue.value,
      captureFocusOnAction: captureFocusOnActionValue.value,
      columnSeparator: columnSeparatorValue.value,
      columnSpan: columnSpanValue.value,
      columns: columnsNonNil,
      contentAlignmentHorizontal: contentAlignmentHorizontalValue.value,
      contentAlignmentVertical: contentAlignmentVerticalValue.value,
      disappearActions: disappearActionsValue.value,
      doubletapActions: doubletapActionsValue.value,
      extensions: extensionsValue.value,
      focus: focusValue.value,
      functions: functionsValue.value,
      headerBackground: headerBackgroundValue.value,
      headerRow: headerRowValue.value,
      headerSeparator: headerSeparatorValue.value,
      height: heightValue.value,
      hoverEndActions: hoverEndActionsValue.value,
      hoverStartActions: hoverStartActionsValue.value,
      id: idValue.value,
      layoutProvider: layoutProviderValue.value,
      longtapActions: longtapActionsValue.value,
      margins: marginsValue.value,
      paddings: paddingsValue.value,
      pressEndActions: pressEndActionsValue.value,
      pressStartActions: pressStartActionsValue.value,
      reuseId: reuseIdValue.value,
      rowBuilder: rowBuilderValue.value,
      rowSeparator: rowSeparatorValue.value,
      rowSpan: rowSpanValue.value,
      rows: rowsValue.value,
      selectedActions: selectedActionsValue.value,
      striped: stripedValue.value,
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

  private func mergedWithParent(templates: [TemplateName: Any]) throws -> DivTableTemplate {
    guard let parent = parent, parent != Self.type else { return self }
    guard let parentTemplate = templates[parent] as? DivTableTemplate else {
      throw DeserializationError.unknownType(type: parent)
    }
    let mergedParent = try parentTemplate.mergedWithParent(templates: templates)

    return DivTableTemplate(
      parent: nil,
      accessibility: accessibility ?? mergedParent.accessibility,
      action: action ?? mergedParent.action,
      actionAnimation: actionAnimation ?? mergedParent.actionAnimation,
      actions: actions ?? mergedParent.actions,
      alignmentHorizontal: alignmentHorizontal ?? mergedParent.alignmentHorizontal,
      alignmentVertical: alignmentVertical ?? mergedParent.alignmentVertical,
      alpha: alpha ?? mergedParent.alpha,
      animators: animators ?? mergedParent.animators,
      background: background ?? mergedParent.background,
      border: border ?? mergedParent.border,
      captureFocusOnAction: captureFocusOnAction ?? mergedParent.captureFocusOnAction,
      columnSeparator: columnSeparator ?? mergedParent.columnSeparator,
      columnSpan: columnSpan ?? mergedParent.columnSpan,
      columns: columns ?? mergedParent.columns,
      contentAlignmentHorizontal: contentAlignmentHorizontal ?? mergedParent.contentAlignmentHorizontal,
      contentAlignmentVertical: contentAlignmentVertical ?? mergedParent.contentAlignmentVertical,
      disappearActions: disappearActions ?? mergedParent.disappearActions,
      doubletapActions: doubletapActions ?? mergedParent.doubletapActions,
      extensions: extensions ?? mergedParent.extensions,
      focus: focus ?? mergedParent.focus,
      functions: functions ?? mergedParent.functions,
      headerBackground: headerBackground ?? mergedParent.headerBackground,
      headerRow: headerRow ?? mergedParent.headerRow,
      headerSeparator: headerSeparator ?? mergedParent.headerSeparator,
      height: height ?? mergedParent.height,
      hoverEndActions: hoverEndActions ?? mergedParent.hoverEndActions,
      hoverStartActions: hoverStartActions ?? mergedParent.hoverStartActions,
      id: id ?? mergedParent.id,
      layoutProvider: layoutProvider ?? mergedParent.layoutProvider,
      longtapActions: longtapActions ?? mergedParent.longtapActions,
      margins: margins ?? mergedParent.margins,
      paddings: paddings ?? mergedParent.paddings,
      pressEndActions: pressEndActions ?? mergedParent.pressEndActions,
      pressStartActions: pressStartActions ?? mergedParent.pressStartActions,
      reuseId: reuseId ?? mergedParent.reuseId,
      rowBuilder: rowBuilder ?? mergedParent.rowBuilder,
      rowSeparator: rowSeparator ?? mergedParent.rowSeparator,
      rowSpan: rowSpan ?? mergedParent.rowSpan,
      rows: rows ?? mergedParent.rows,
      selectedActions: selectedActions ?? mergedParent.selectedActions,
      striped: striped ?? mergedParent.striped,
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

  public func resolveParent(templates: [TemplateName: Any]) throws -> DivTableTemplate {
    let merged = try mergedWithParent(templates: templates)

    return DivTableTemplate(
      parent: nil,
      accessibility: merged.accessibility?.tryResolveParent(templates: templates),
      action: merged.action?.tryResolveParent(templates: templates),
      actionAnimation: merged.actionAnimation?.tryResolveParent(templates: templates),
      actions: merged.actions?.tryResolveParent(templates: templates),
      alignmentHorizontal: merged.alignmentHorizontal,
      alignmentVertical: merged.alignmentVertical,
      alpha: merged.alpha,
      animators: merged.animators?.tryResolveParent(templates: templates),
      background: merged.background?.tryResolveParent(templates: templates),
      border: merged.border?.tryResolveParent(templates: templates),
      captureFocusOnAction: merged.captureFocusOnAction,
      columnSeparator: merged.columnSeparator?.tryResolveParent(templates: templates),
      columnSpan: merged.columnSpan,
      columns: try merged.columns?.resolveParent(templates: templates),
      contentAlignmentHorizontal: merged.contentAlignmentHorizontal,
      contentAlignmentVertical: merged.contentAlignmentVertical,
      disappearActions: merged.disappearActions?.tryResolveParent(templates: templates),
      doubletapActions: merged.doubletapActions?.tryResolveParent(templates: templates),
      extensions: merged.extensions?.tryResolveParent(templates: templates),
      focus: merged.focus?.tryResolveParent(templates: templates),
      functions: merged.functions?.tryResolveParent(templates: templates),
      headerBackground: merged.headerBackground?.tryResolveParent(templates: templates),
      headerRow: merged.headerRow?.tryResolveParent(templates: templates),
      headerSeparator: merged.headerSeparator?.tryResolveParent(templates: templates),
      height: merged.height?.tryResolveParent(templates: templates),
      hoverEndActions: merged.hoverEndActions?.tryResolveParent(templates: templates),
      hoverStartActions: merged.hoverStartActions?.tryResolveParent(templates: templates),
      id: merged.id,
      layoutProvider: merged.layoutProvider?.tryResolveParent(templates: templates),
      longtapActions: merged.longtapActions?.tryResolveParent(templates: templates),
      margins: merged.margins?.tryResolveParent(templates: templates),
      paddings: merged.paddings?.tryResolveParent(templates: templates),
      pressEndActions: merged.pressEndActions?.tryResolveParent(templates: templates),
      pressStartActions: merged.pressStartActions?.tryResolveParent(templates: templates),
      reuseId: merged.reuseId,
      rowBuilder: merged.rowBuilder?.tryResolveParent(templates: templates),
      rowSeparator: merged.rowSeparator?.tryResolveParent(templates: templates),
      rowSpan: merged.rowSpan,
      rows: merged.rows?.tryResolveParent(templates: templates),
      selectedActions: merged.selectedActions?.tryResolveParent(templates: templates),
      striped: merged.striped?.tryResolveParent(templates: templates),
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
