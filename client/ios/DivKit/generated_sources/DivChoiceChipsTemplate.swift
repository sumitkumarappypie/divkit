// Generated code. Do not modify.

import Foundation
import Serialization
import VGSL

public final class DivChoiceChipsTemplate: TemplateValue, Sendable {
  public typealias ChipStyle = DivChoiceChips.ChipStyle

  public typealias LayoutMode = DivChoiceChips.LayoutMode

  public typealias SelectionMode = DivChoiceChips.SelectionMode

  public static let type: String = "choice_chips"
  public let parent: String?
  public let accessibility: Field<DivAccessibilityTemplate>?
  public let alignmentHorizontal: Field<Expression<DivAlignmentHorizontal>>?
  public let alignmentVertical: Field<Expression<DivAlignmentVertical>>?
  public let alpha: Field<Expression<Double>>? // constraint: number >= 0.0 && number <= 1.0; default value: 1.0
  public let animators: Field<[DivAnimatorTemplate]>?
  public let background: Field<[DivBackgroundTemplate]>?
  public let border: Field<DivBorderTemplate>?
  public let chipHeight: Field<Expression<Int>>? // constraint: number >= 0; default value: 36
  public let chipPadding: Field<DivEdgeInsetsTemplate>?
  public let chipSpacing: Field<Expression<Int>>? // constraint: number >= 0; default value: 8
  public let chipStyle: Field<Expression<ChipStyle>>? // default value: outlined
  public let columnSpan: Field<Expression<Int>>? // constraint: number >= 0
  public let cornerRadius: Field<Expression<Int>>? // constraint: number >= 0; default value: 16
  public let defaultBackgroundColor: Field<Expression<Color>>?
  public let defaultBorderColor: Field<Expression<Color>>?
  public let defaultTextColor: Field<Expression<Color>>?
  public let disabledBackgroundColor: Field<Expression<Color>>?
  public let disabledBorderColor: Field<Expression<Color>>?
  public let disabledTextColor: Field<Expression<Color>>?
  public let disappearActions: Field<[DivDisappearActionTemplate]>?
  public let extensions: Field<[DivExtensionTemplate]>?
  public let focus: Field<DivFocusTemplate>?
  public let fontFamily: Field<Expression<String>>?
  public let fontSize: Field<Expression<Int>>? // constraint: number >= 0; default value: 14
  public let fontWeight: Field<Expression<DivFontWeight>>?
  public let functions: Field<[DivFunctionTemplate]>?
  public let height: Field<DivSizeTemplate>? // default value: .divWrapContentSize(DivWrapContentSize())
  public let iconSize: Field<Expression<Int>>? // constraint: number >= 0; default value: 18
  public let id: Field<String>?
  public let chipItems: Field<[DivChoiceChipsItemTemplate]>?
  public let itemsVariable: Field<String>?
  public let layoutMode: Field<Expression<LayoutMode>>? // default value: wrap
  public let layoutProvider: Field<DivLayoutProviderTemplate>?
  public let margins: Field<DivEdgeInsetsTemplate>?
  public let paddings: Field<DivEdgeInsetsTemplate>?
  public let reuseId: Field<Expression<String>>?
  public let rowSpacing: Field<Expression<Int>>? // constraint: number >= 0; default value: 8
  public let rowSpan: Field<Expression<Int>>? // constraint: number >= 0
  public let selectedActions: Field<[DivActionTemplate]>?
  public let selectedBackgroundColor: Field<Expression<Color>>?
  public let selectedBorderColor: Field<Expression<Color>>?
  public let selectedTextColor: Field<Expression<Color>>?
  public let selectedValueVariable: Field<String>?
  public let selectionActions: Field<[DivActionTemplate]>?
  public let selectionMode: Field<Expression<SelectionMode>>? // default value: single
  public let showCheckmark: Field<Expression<Bool>>? // default value: false
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
      alignmentHorizontal: dictionary.getOptionalExpressionField("alignment_horizontal"),
      alignmentVertical: dictionary.getOptionalExpressionField("alignment_vertical"),
      alpha: dictionary.getOptionalExpressionField("alpha"),
      animators: dictionary.getOptionalArray("animators", templateToType: templateToType),
      background: dictionary.getOptionalArray("background", templateToType: templateToType),
      border: dictionary.getOptionalField("border", templateToType: templateToType),
      chipHeight: dictionary.getOptionalExpressionField("chip_height"),
      chipPadding: dictionary.getOptionalField("chip_padding", templateToType: templateToType),
      chipSpacing: dictionary.getOptionalExpressionField("chip_spacing"),
      chipStyle: dictionary.getOptionalExpressionField("chip_style"),
      columnSpan: dictionary.getOptionalExpressionField("column_span"),
      cornerRadius: dictionary.getOptionalExpressionField("corner_radius"),
      defaultBackgroundColor: dictionary.getOptionalExpressionField("default_background_color", transform: Color.color(withHexString:)),
      defaultBorderColor: dictionary.getOptionalExpressionField("default_border_color", transform: Color.color(withHexString:)),
      defaultTextColor: dictionary.getOptionalExpressionField("default_text_color", transform: Color.color(withHexString:)),
      disabledBackgroundColor: dictionary.getOptionalExpressionField("disabled_background_color", transform: Color.color(withHexString:)),
      disabledBorderColor: dictionary.getOptionalExpressionField("disabled_border_color", transform: Color.color(withHexString:)),
      disabledTextColor: dictionary.getOptionalExpressionField("disabled_text_color", transform: Color.color(withHexString:)),
      disappearActions: dictionary.getOptionalArray("disappear_actions", templateToType: templateToType),
      extensions: dictionary.getOptionalArray("extensions", templateToType: templateToType),
      focus: dictionary.getOptionalField("focus", templateToType: templateToType),
      fontFamily: dictionary.getOptionalExpressionField("font_family"),
      fontSize: dictionary.getOptionalExpressionField("font_size"),
      fontWeight: dictionary.getOptionalExpressionField("font_weight"),
      functions: dictionary.getOptionalArray("functions", templateToType: templateToType),
      height: dictionary.getOptionalField("height", templateToType: templateToType),
      iconSize: dictionary.getOptionalExpressionField("icon_size"),
      id: dictionary.getOptionalField("id"),
      chipItems: dictionary.getOptionalArray("chip_items", templateToType: templateToType),
      itemsVariable: dictionary.getOptionalField("items_variable"),
      layoutMode: dictionary.getOptionalExpressionField("layout_mode"),
      layoutProvider: dictionary.getOptionalField("layout_provider", templateToType: templateToType),
      margins: dictionary.getOptionalField("margins", templateToType: templateToType),
      paddings: dictionary.getOptionalField("paddings", templateToType: templateToType),
      reuseId: dictionary.getOptionalExpressionField("reuse_id"),
      rowSpacing: dictionary.getOptionalExpressionField("row_spacing"),
      rowSpan: dictionary.getOptionalExpressionField("row_span"),
      selectedActions: dictionary.getOptionalArray("selected_actions", templateToType: templateToType),
      selectedBackgroundColor: dictionary.getOptionalExpressionField("selected_background_color", transform: Color.color(withHexString:)),
      selectedBorderColor: dictionary.getOptionalExpressionField("selected_border_color", transform: Color.color(withHexString:)),
      selectedTextColor: dictionary.getOptionalExpressionField("selected_text_color", transform: Color.color(withHexString:)),
      selectedValueVariable: dictionary.getOptionalField("selected_value_variable"),
      selectionActions: dictionary.getOptionalArray("selection_actions", templateToType: templateToType),
      selectionMode: dictionary.getOptionalExpressionField("selection_mode"),
      showCheckmark: dictionary.getOptionalExpressionField("show_checkmark"),
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
    alignmentHorizontal: Field<Expression<DivAlignmentHorizontal>>? = nil,
    alignmentVertical: Field<Expression<DivAlignmentVertical>>? = nil,
    alpha: Field<Expression<Double>>? = nil,
    animators: Field<[DivAnimatorTemplate]>? = nil,
    background: Field<[DivBackgroundTemplate]>? = nil,
    border: Field<DivBorderTemplate>? = nil,
    chipHeight: Field<Expression<Int>>? = nil,
    chipPadding: Field<DivEdgeInsetsTemplate>? = nil,
    chipSpacing: Field<Expression<Int>>? = nil,
    chipStyle: Field<Expression<ChipStyle>>? = nil,
    columnSpan: Field<Expression<Int>>? = nil,
    cornerRadius: Field<Expression<Int>>? = nil,
    defaultBackgroundColor: Field<Expression<Color>>? = nil,
    defaultBorderColor: Field<Expression<Color>>? = nil,
    defaultTextColor: Field<Expression<Color>>? = nil,
    disabledBackgroundColor: Field<Expression<Color>>? = nil,
    disabledBorderColor: Field<Expression<Color>>? = nil,
    disabledTextColor: Field<Expression<Color>>? = nil,
    disappearActions: Field<[DivDisappearActionTemplate]>? = nil,
    extensions: Field<[DivExtensionTemplate]>? = nil,
    focus: Field<DivFocusTemplate>? = nil,
    fontFamily: Field<Expression<String>>? = nil,
    fontSize: Field<Expression<Int>>? = nil,
    fontWeight: Field<Expression<DivFontWeight>>? = nil,
    functions: Field<[DivFunctionTemplate]>? = nil,
    height: Field<DivSizeTemplate>? = nil,
    iconSize: Field<Expression<Int>>? = nil,
    id: Field<String>? = nil,
    chipItems: Field<[DivChoiceChipsItemTemplate]>? = nil,
    itemsVariable: Field<String>? = nil,
    layoutMode: Field<Expression<LayoutMode>>? = nil,
    layoutProvider: Field<DivLayoutProviderTemplate>? = nil,
    margins: Field<DivEdgeInsetsTemplate>? = nil,
    paddings: Field<DivEdgeInsetsTemplate>? = nil,
    reuseId: Field<Expression<String>>? = nil,
    rowSpacing: Field<Expression<Int>>? = nil,
    rowSpan: Field<Expression<Int>>? = nil,
    selectedActions: Field<[DivActionTemplate]>? = nil,
    selectedBackgroundColor: Field<Expression<Color>>? = nil,
    selectedBorderColor: Field<Expression<Color>>? = nil,
    selectedTextColor: Field<Expression<Color>>? = nil,
    selectedValueVariable: Field<String>? = nil,
    selectionActions: Field<[DivActionTemplate]>? = nil,
    selectionMode: Field<Expression<SelectionMode>>? = nil,
    showCheckmark: Field<Expression<Bool>>? = nil,
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
    self.alignmentHorizontal = alignmentHorizontal
    self.alignmentVertical = alignmentVertical
    self.alpha = alpha
    self.animators = animators
    self.background = background
    self.border = border
    self.chipHeight = chipHeight
    self.chipPadding = chipPadding
    self.chipSpacing = chipSpacing
    self.chipStyle = chipStyle
    self.columnSpan = columnSpan
    self.cornerRadius = cornerRadius
    self.defaultBackgroundColor = defaultBackgroundColor
    self.defaultBorderColor = defaultBorderColor
    self.defaultTextColor = defaultTextColor
    self.disabledBackgroundColor = disabledBackgroundColor
    self.disabledBorderColor = disabledBorderColor
    self.disabledTextColor = disabledTextColor
    self.disappearActions = disappearActions
    self.extensions = extensions
    self.focus = focus
    self.fontFamily = fontFamily
    self.fontSize = fontSize
    self.fontWeight = fontWeight
    self.functions = functions
    self.height = height
    self.iconSize = iconSize
    self.id = id
    self.chipItems = chipItems
    self.itemsVariable = itemsVariable
    self.layoutMode = layoutMode
    self.layoutProvider = layoutProvider
    self.margins = margins
    self.paddings = paddings
    self.reuseId = reuseId
    self.rowSpacing = rowSpacing
    self.rowSpan = rowSpan
    self.selectedActions = selectedActions
    self.selectedBackgroundColor = selectedBackgroundColor
    self.selectedBorderColor = selectedBorderColor
    self.selectedTextColor = selectedTextColor
    self.selectedValueVariable = selectedValueVariable
    self.selectionActions = selectionActions
    self.selectionMode = selectionMode
    self.showCheckmark = showCheckmark
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

  private static func resolveOnlyLinks(context: TemplatesContext, parent: DivChoiceChipsTemplate?) -> DeserializationResult<DivChoiceChips> {
    let accessibilityValue = parent?.accessibility?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let alignmentHorizontalValue = parent?.alignmentHorizontal?.resolveOptionalValue(context: context) ?? .noValue
    let alignmentVerticalValue = parent?.alignmentVertical?.resolveOptionalValue(context: context) ?? .noValue
    let alphaValue = parent?.alpha?.resolveOptionalValue(context: context, validator: ResolvedValue.alphaValidator) ?? .noValue
    let animatorsValue = parent?.animators?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let backgroundValue = parent?.background?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let borderValue = parent?.border?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let chipHeightValue = parent?.chipHeight?.resolveOptionalValue(context: context, validator: ResolvedValue.chipHeightValidator) ?? .noValue
    let chipPaddingValue = parent?.chipPadding?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let chipSpacingValue = parent?.chipSpacing?.resolveOptionalValue(context: context, validator: ResolvedValue.chipSpacingValidator) ?? .noValue
    let chipStyleValue = parent?.chipStyle?.resolveOptionalValue(context: context) ?? .noValue
    let columnSpanValue = parent?.columnSpan?.resolveOptionalValue(context: context, validator: ResolvedValue.columnSpanValidator) ?? .noValue
    let cornerRadiusValue = parent?.cornerRadius?.resolveOptionalValue(context: context, validator: ResolvedValue.cornerRadiusValidator) ?? .noValue
    let defaultBackgroundColorValue = parent?.defaultBackgroundColor?.resolveOptionalValue(context: context, transform: Color.color(withHexString:)) ?? .noValue
    let defaultBorderColorValue = parent?.defaultBorderColor?.resolveOptionalValue(context: context, transform: Color.color(withHexString:)) ?? .noValue
    let defaultTextColorValue = parent?.defaultTextColor?.resolveOptionalValue(context: context, transform: Color.color(withHexString:)) ?? .noValue
    let disabledBackgroundColorValue = parent?.disabledBackgroundColor?.resolveOptionalValue(context: context, transform: Color.color(withHexString:)) ?? .noValue
    let disabledBorderColorValue = parent?.disabledBorderColor?.resolveOptionalValue(context: context, transform: Color.color(withHexString:)) ?? .noValue
    let disabledTextColorValue = parent?.disabledTextColor?.resolveOptionalValue(context: context, transform: Color.color(withHexString:)) ?? .noValue
    let disappearActionsValue = parent?.disappearActions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let extensionsValue = parent?.extensions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let focusValue = parent?.focus?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let fontFamilyValue = parent?.fontFamily?.resolveOptionalValue(context: context) ?? .noValue
    let fontSizeValue = parent?.fontSize?.resolveOptionalValue(context: context, validator: ResolvedValue.fontSizeValidator) ?? .noValue
    let fontWeightValue = parent?.fontWeight?.resolveOptionalValue(context: context) ?? .noValue
    let functionsValue = parent?.functions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let heightValue = parent?.height?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let iconSizeValue = parent?.iconSize?.resolveOptionalValue(context: context, validator: ResolvedValue.iconSizeValidator) ?? .noValue
    let idValue = parent?.id?.resolveOptionalValue(context: context) ?? .noValue
    let chipItemsValue = parent?.chipItems?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let itemsVariableValue = parent?.itemsVariable?.resolveOptionalValue(context: context) ?? .noValue
    let layoutModeValue = parent?.layoutMode?.resolveOptionalValue(context: context) ?? .noValue
    let layoutProviderValue = parent?.layoutProvider?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let marginsValue = parent?.margins?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let paddingsValue = parent?.paddings?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let reuseIdValue = parent?.reuseId?.resolveOptionalValue(context: context) ?? .noValue
    let rowSpacingValue = parent?.rowSpacing?.resolveOptionalValue(context: context, validator: ResolvedValue.rowSpacingValidator) ?? .noValue
    let rowSpanValue = parent?.rowSpan?.resolveOptionalValue(context: context, validator: ResolvedValue.rowSpanValidator) ?? .noValue
    let selectedActionsValue = parent?.selectedActions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let selectedBackgroundColorValue = parent?.selectedBackgroundColor?.resolveOptionalValue(context: context, transform: Color.color(withHexString:)) ?? .noValue
    let selectedBorderColorValue = parent?.selectedBorderColor?.resolveOptionalValue(context: context, transform: Color.color(withHexString:)) ?? .noValue
    let selectedTextColorValue = parent?.selectedTextColor?.resolveOptionalValue(context: context, transform: Color.color(withHexString:)) ?? .noValue
    let selectedValueVariableValue = parent?.selectedValueVariable?.resolveValue(context: context) ?? .noValue
    let selectionActionsValue = parent?.selectionActions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue
    let selectionModeValue = parent?.selectionMode?.resolveOptionalValue(context: context) ?? .noValue
    let showCheckmarkValue = parent?.showCheckmark?.resolveOptionalValue(context: context) ?? .noValue
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
      alignmentHorizontalValue.errorsOrWarnings?.map { .nestedObjectError(field: "alignment_horizontal", error: $0) },
      alignmentVerticalValue.errorsOrWarnings?.map { .nestedObjectError(field: "alignment_vertical", error: $0) },
      alphaValue.errorsOrWarnings?.map { .nestedObjectError(field: "alpha", error: $0) },
      animatorsValue.errorsOrWarnings?.map { .nestedObjectError(field: "animators", error: $0) },
      backgroundValue.errorsOrWarnings?.map { .nestedObjectError(field: "background", error: $0) },
      borderValue.errorsOrWarnings?.map { .nestedObjectError(field: "border", error: $0) },
      chipHeightValue.errorsOrWarnings?.map { .nestedObjectError(field: "chip_height", error: $0) },
      chipPaddingValue.errorsOrWarnings?.map { .nestedObjectError(field: "chip_padding", error: $0) },
      chipSpacingValue.errorsOrWarnings?.map { .nestedObjectError(field: "chip_spacing", error: $0) },
      chipStyleValue.errorsOrWarnings?.map { .nestedObjectError(field: "chip_style", error: $0) },
      columnSpanValue.errorsOrWarnings?.map { .nestedObjectError(field: "column_span", error: $0) },
      cornerRadiusValue.errorsOrWarnings?.map { .nestedObjectError(field: "corner_radius", error: $0) },
      defaultBackgroundColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "default_background_color", error: $0) },
      defaultBorderColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "default_border_color", error: $0) },
      defaultTextColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "default_text_color", error: $0) },
      disabledBackgroundColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "disabled_background_color", error: $0) },
      disabledBorderColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "disabled_border_color", error: $0) },
      disabledTextColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "disabled_text_color", error: $0) },
      disappearActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "disappear_actions", error: $0) },
      extensionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "extensions", error: $0) },
      focusValue.errorsOrWarnings?.map { .nestedObjectError(field: "focus", error: $0) },
      fontFamilyValue.errorsOrWarnings?.map { .nestedObjectError(field: "font_family", error: $0) },
      fontSizeValue.errorsOrWarnings?.map { .nestedObjectError(field: "font_size", error: $0) },
      fontWeightValue.errorsOrWarnings?.map { .nestedObjectError(field: "font_weight", error: $0) },
      functionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "functions", error: $0) },
      heightValue.errorsOrWarnings?.map { .nestedObjectError(field: "height", error: $0) },
      iconSizeValue.errorsOrWarnings?.map { .nestedObjectError(field: "icon_size", error: $0) },
      idValue.errorsOrWarnings?.map { .nestedObjectError(field: "id", error: $0) },
      chipItemsValue.errorsOrWarnings?.map { .nestedObjectError(field: "chip_items", error: $0) },
      itemsVariableValue.errorsOrWarnings?.map { .nestedObjectError(field: "items_variable", error: $0) },
      layoutModeValue.errorsOrWarnings?.map { .nestedObjectError(field: "layout_mode", error: $0) },
      layoutProviderValue.errorsOrWarnings?.map { .nestedObjectError(field: "layout_provider", error: $0) },
      marginsValue.errorsOrWarnings?.map { .nestedObjectError(field: "margins", error: $0) },
      paddingsValue.errorsOrWarnings?.map { .nestedObjectError(field: "paddings", error: $0) },
      reuseIdValue.errorsOrWarnings?.map { .nestedObjectError(field: "reuse_id", error: $0) },
      rowSpacingValue.errorsOrWarnings?.map { .nestedObjectError(field: "row_spacing", error: $0) },
      rowSpanValue.errorsOrWarnings?.map { .nestedObjectError(field: "row_span", error: $0) },
      selectedActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "selected_actions", error: $0) },
      selectedBackgroundColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "selected_background_color", error: $0) },
      selectedBorderColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "selected_border_color", error: $0) },
      selectedTextColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "selected_text_color", error: $0) },
      selectedValueVariableValue.errorsOrWarnings?.map { .nestedObjectError(field: "selected_value_variable", error: $0) },
      selectionActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "selection_actions", error: $0) },
      selectionModeValue.errorsOrWarnings?.map { .nestedObjectError(field: "selection_mode", error: $0) },
      showCheckmarkValue.errorsOrWarnings?.map { .nestedObjectError(field: "show_checkmark", error: $0) },
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
    if case .noValue = selectedValueVariableValue {
      errors.append(.requiredFieldIsMissing(field: "selected_value_variable"))
    }
    guard
      let selectedValueVariableNonNil = selectedValueVariableValue.value
    else {
      return .failure(NonEmptyArray(errors)!)
    }
    let result = DivChoiceChips(
      accessibility: accessibilityValue.value,
      alignmentHorizontal: alignmentHorizontalValue.value,
      alignmentVertical: alignmentVerticalValue.value,
      alpha: alphaValue.value,
      animators: animatorsValue.value,
      background: backgroundValue.value,
      border: borderValue.value,
      chipHeight: chipHeightValue.value,
      chipPadding: chipPaddingValue.value,
      chipSpacing: chipSpacingValue.value,
      chipStyle: chipStyleValue.value,
      columnSpan: columnSpanValue.value,
      cornerRadius: cornerRadiusValue.value,
      defaultBackgroundColor: defaultBackgroundColorValue.value,
      defaultBorderColor: defaultBorderColorValue.value,
      defaultTextColor: defaultTextColorValue.value,
      disabledBackgroundColor: disabledBackgroundColorValue.value,
      disabledBorderColor: disabledBorderColorValue.value,
      disabledTextColor: disabledTextColorValue.value,
      disappearActions: disappearActionsValue.value,
      extensions: extensionsValue.value,
      focus: focusValue.value,
      fontFamily: fontFamilyValue.value,
      fontSize: fontSizeValue.value,
      fontWeight: fontWeightValue.value,
      functions: functionsValue.value,
      height: heightValue.value,
      iconSize: iconSizeValue.value,
      id: idValue.value,
      chipItems: chipItemsValue.value,
      itemsVariable: itemsVariableValue.value,
      layoutMode: layoutModeValue.value,
      layoutProvider: layoutProviderValue.value,
      margins: marginsValue.value,
      paddings: paddingsValue.value,
      reuseId: reuseIdValue.value,
      rowSpacing: rowSpacingValue.value,
      rowSpan: rowSpanValue.value,
      selectedActions: selectedActionsValue.value,
      selectedBackgroundColor: selectedBackgroundColorValue.value,
      selectedBorderColor: selectedBorderColorValue.value,
      selectedTextColor: selectedTextColorValue.value,
      selectedValueVariable: selectedValueVariableNonNil,
      selectionActions: selectionActionsValue.value,
      selectionMode: selectionModeValue.value,
      showCheckmark: showCheckmarkValue.value,
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

  public static func resolveValue(context: TemplatesContext, parent: DivChoiceChipsTemplate?, useOnlyLinks: Bool) -> DeserializationResult<DivChoiceChips> {
    if useOnlyLinks {
      return resolveOnlyLinks(context: context, parent: parent)
    }
    var accessibilityValue: DeserializationResult<DivAccessibility> = .noValue
    var alignmentHorizontalValue: DeserializationResult<Expression<DivAlignmentHorizontal>> = parent?.alignmentHorizontal?.value() ?? .noValue
    var alignmentVerticalValue: DeserializationResult<Expression<DivAlignmentVertical>> = parent?.alignmentVertical?.value() ?? .noValue
    var alphaValue: DeserializationResult<Expression<Double>> = parent?.alpha?.value() ?? .noValue
    var animatorsValue: DeserializationResult<[DivAnimator]> = .noValue
    var backgroundValue: DeserializationResult<[DivBackground]> = .noValue
    var borderValue: DeserializationResult<DivBorder> = .noValue
    var chipHeightValue: DeserializationResult<Expression<Int>> = parent?.chipHeight?.value() ?? .noValue
    var chipPaddingValue: DeserializationResult<DivEdgeInsets> = .noValue
    var chipSpacingValue: DeserializationResult<Expression<Int>> = parent?.chipSpacing?.value() ?? .noValue
    var chipStyleValue: DeserializationResult<Expression<DivChoiceChips.ChipStyle>> = parent?.chipStyle?.value() ?? .noValue
    var columnSpanValue: DeserializationResult<Expression<Int>> = parent?.columnSpan?.value() ?? .noValue
    var cornerRadiusValue: DeserializationResult<Expression<Int>> = parent?.cornerRadius?.value() ?? .noValue
    var defaultBackgroundColorValue: DeserializationResult<Expression<Color>> = parent?.defaultBackgroundColor?.value() ?? .noValue
    var defaultBorderColorValue: DeserializationResult<Expression<Color>> = parent?.defaultBorderColor?.value() ?? .noValue
    var defaultTextColorValue: DeserializationResult<Expression<Color>> = parent?.defaultTextColor?.value() ?? .noValue
    var disabledBackgroundColorValue: DeserializationResult<Expression<Color>> = parent?.disabledBackgroundColor?.value() ?? .noValue
    var disabledBorderColorValue: DeserializationResult<Expression<Color>> = parent?.disabledBorderColor?.value() ?? .noValue
    var disabledTextColorValue: DeserializationResult<Expression<Color>> = parent?.disabledTextColor?.value() ?? .noValue
    var disappearActionsValue: DeserializationResult<[DivDisappearAction]> = .noValue
    var extensionsValue: DeserializationResult<[DivExtension]> = .noValue
    var focusValue: DeserializationResult<DivFocus> = .noValue
    var fontFamilyValue: DeserializationResult<Expression<String>> = parent?.fontFamily?.value() ?? .noValue
    var fontSizeValue: DeserializationResult<Expression<Int>> = parent?.fontSize?.value() ?? .noValue
    var fontWeightValue: DeserializationResult<Expression<DivFontWeight>> = parent?.fontWeight?.value() ?? .noValue
    var functionsValue: DeserializationResult<[DivFunction]> = .noValue
    var heightValue: DeserializationResult<DivSize> = .noValue
    var iconSizeValue: DeserializationResult<Expression<Int>> = parent?.iconSize?.value() ?? .noValue
    var idValue: DeserializationResult<String> = parent?.id?.value() ?? .noValue
    var chipItemsValue: DeserializationResult<[DivChoiceChipsItem]> = .noValue
    var itemsVariableValue: DeserializationResult<String> = parent?.itemsVariable?.value() ?? .noValue
    var layoutModeValue: DeserializationResult<Expression<DivChoiceChips.LayoutMode>> = parent?.layoutMode?.value() ?? .noValue
    var layoutProviderValue: DeserializationResult<DivLayoutProvider> = .noValue
    var marginsValue: DeserializationResult<DivEdgeInsets> = .noValue
    var paddingsValue: DeserializationResult<DivEdgeInsets> = .noValue
    var reuseIdValue: DeserializationResult<Expression<String>> = parent?.reuseId?.value() ?? .noValue
    var rowSpacingValue: DeserializationResult<Expression<Int>> = parent?.rowSpacing?.value() ?? .noValue
    var rowSpanValue: DeserializationResult<Expression<Int>> = parent?.rowSpan?.value() ?? .noValue
    var selectedActionsValue: DeserializationResult<[DivAction]> = .noValue
    var selectedBackgroundColorValue: DeserializationResult<Expression<Color>> = parent?.selectedBackgroundColor?.value() ?? .noValue
    var selectedBorderColorValue: DeserializationResult<Expression<Color>> = parent?.selectedBorderColor?.value() ?? .noValue
    var selectedTextColorValue: DeserializationResult<Expression<Color>> = parent?.selectedTextColor?.value() ?? .noValue
    var selectedValueVariableValue: DeserializationResult<String> = parent?.selectedValueVariable?.value() ?? .noValue
    var selectionActionsValue: DeserializationResult<[DivAction]> = .noValue
    var selectionModeValue: DeserializationResult<Expression<DivChoiceChips.SelectionMode>> = parent?.selectionMode?.value() ?? .noValue
    var showCheckmarkValue: DeserializationResult<Expression<Bool>> = parent?.showCheckmark?.value() ?? .noValue
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
      case "chip_height":
        chipHeightValue = deserialize(__dictValue, validator: ResolvedValue.chipHeightValidator).merged(with: chipHeightValue)
      case "chip_padding":
        chipPaddingValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivEdgeInsetsTemplate.self).merged(with: chipPaddingValue)
      case "chip_spacing":
        chipSpacingValue = deserialize(__dictValue, validator: ResolvedValue.chipSpacingValidator).merged(with: chipSpacingValue)
      case "chip_style":
        chipStyleValue = deserialize(__dictValue).merged(with: chipStyleValue)
      case "column_span":
        columnSpanValue = deserialize(__dictValue, validator: ResolvedValue.columnSpanValidator).merged(with: columnSpanValue)
      case "corner_radius":
        cornerRadiusValue = deserialize(__dictValue, validator: ResolvedValue.cornerRadiusValidator).merged(with: cornerRadiusValue)
      case "default_background_color":
        defaultBackgroundColorValue = deserialize(__dictValue, transform: Color.color(withHexString:)).merged(with: defaultBackgroundColorValue)
      case "default_border_color":
        defaultBorderColorValue = deserialize(__dictValue, transform: Color.color(withHexString:)).merged(with: defaultBorderColorValue)
      case "default_text_color":
        defaultTextColorValue = deserialize(__dictValue, transform: Color.color(withHexString:)).merged(with: defaultTextColorValue)
      case "disabled_background_color":
        disabledBackgroundColorValue = deserialize(__dictValue, transform: Color.color(withHexString:)).merged(with: disabledBackgroundColorValue)
      case "disabled_border_color":
        disabledBorderColorValue = deserialize(__dictValue, transform: Color.color(withHexString:)).merged(with: disabledBorderColorValue)
      case "disabled_text_color":
        disabledTextColorValue = deserialize(__dictValue, transform: Color.color(withHexString:)).merged(with: disabledTextColorValue)
      case "disappear_actions":
        disappearActionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivDisappearActionTemplate.self).merged(with: disappearActionsValue)
      case "extensions":
        extensionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivExtensionTemplate.self).merged(with: extensionsValue)
      case "focus":
        focusValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivFocusTemplate.self).merged(with: focusValue)
      case "font_family":
        fontFamilyValue = deserialize(__dictValue).merged(with: fontFamilyValue)
      case "font_size":
        fontSizeValue = deserialize(__dictValue, validator: ResolvedValue.fontSizeValidator).merged(with: fontSizeValue)
      case "font_weight":
        fontWeightValue = deserialize(__dictValue).merged(with: fontWeightValue)
      case "functions":
        functionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivFunctionTemplate.self).merged(with: functionsValue)
      case "height":
        heightValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivSizeTemplate.self).merged(with: heightValue)
      case "icon_size":
        iconSizeValue = deserialize(__dictValue, validator: ResolvedValue.iconSizeValidator).merged(with: iconSizeValue)
      case "id":
        idValue = deserialize(__dictValue).merged(with: idValue)
      case "chip_items":
        chipItemsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivChoiceChipsItemTemplate.self).merged(with: chipItemsValue)
      case "items_variable":
        itemsVariableValue = deserialize(__dictValue).merged(with: itemsVariableValue)
      case "layout_mode":
        layoutModeValue = deserialize(__dictValue).merged(with: layoutModeValue)
      case "layout_provider":
        layoutProviderValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivLayoutProviderTemplate.self).merged(with: layoutProviderValue)
      case "margins":
        marginsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivEdgeInsetsTemplate.self).merged(with: marginsValue)
      case "paddings":
        paddingsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivEdgeInsetsTemplate.self).merged(with: paddingsValue)
      case "reuse_id":
        reuseIdValue = deserialize(__dictValue).merged(with: reuseIdValue)
      case "row_spacing":
        rowSpacingValue = deserialize(__dictValue, validator: ResolvedValue.rowSpacingValidator).merged(with: rowSpacingValue)
      case "row_span":
        rowSpanValue = deserialize(__dictValue, validator: ResolvedValue.rowSpanValidator).merged(with: rowSpanValue)
      case "selected_actions":
        selectedActionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self).merged(with: selectedActionsValue)
      case "selected_background_color":
        selectedBackgroundColorValue = deserialize(__dictValue, transform: Color.color(withHexString:)).merged(with: selectedBackgroundColorValue)
      case "selected_border_color":
        selectedBorderColorValue = deserialize(__dictValue, transform: Color.color(withHexString:)).merged(with: selectedBorderColorValue)
      case "selected_text_color":
        selectedTextColorValue = deserialize(__dictValue, transform: Color.color(withHexString:)).merged(with: selectedTextColorValue)
      case "selected_value_variable":
        selectedValueVariableValue = deserialize(__dictValue).merged(with: selectedValueVariableValue)
      case "selection_actions":
        selectionActionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self).merged(with: selectionActionsValue)
      case "selection_mode":
        selectionModeValue = deserialize(__dictValue).merged(with: selectionModeValue)
      case "show_checkmark":
        showCheckmarkValue = deserialize(__dictValue).merged(with: showCheckmarkValue)
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
      case parent?.chipHeight?.link:
        chipHeightValue = chipHeightValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.chipHeightValidator) })
      case parent?.chipPadding?.link:
        chipPaddingValue = chipPaddingValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivEdgeInsetsTemplate.self) })
      case parent?.chipSpacing?.link:
        chipSpacingValue = chipSpacingValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.chipSpacingValidator) })
      case parent?.chipStyle?.link:
        chipStyleValue = chipStyleValue.merged(with: { deserialize(__dictValue) })
      case parent?.columnSpan?.link:
        columnSpanValue = columnSpanValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.columnSpanValidator) })
      case parent?.cornerRadius?.link:
        cornerRadiusValue = cornerRadiusValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.cornerRadiusValidator) })
      case parent?.defaultBackgroundColor?.link:
        defaultBackgroundColorValue = defaultBackgroundColorValue.merged(with: { deserialize(__dictValue, transform: Color.color(withHexString:)) })
      case parent?.defaultBorderColor?.link:
        defaultBorderColorValue = defaultBorderColorValue.merged(with: { deserialize(__dictValue, transform: Color.color(withHexString:)) })
      case parent?.defaultTextColor?.link:
        defaultTextColorValue = defaultTextColorValue.merged(with: { deserialize(__dictValue, transform: Color.color(withHexString:)) })
      case parent?.disabledBackgroundColor?.link:
        disabledBackgroundColorValue = disabledBackgroundColorValue.merged(with: { deserialize(__dictValue, transform: Color.color(withHexString:)) })
      case parent?.disabledBorderColor?.link:
        disabledBorderColorValue = disabledBorderColorValue.merged(with: { deserialize(__dictValue, transform: Color.color(withHexString:)) })
      case parent?.disabledTextColor?.link:
        disabledTextColorValue = disabledTextColorValue.merged(with: { deserialize(__dictValue, transform: Color.color(withHexString:)) })
      case parent?.disappearActions?.link:
        disappearActionsValue = disappearActionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivDisappearActionTemplate.self) })
      case parent?.extensions?.link:
        extensionsValue = extensionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivExtensionTemplate.self) })
      case parent?.focus?.link:
        focusValue = focusValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivFocusTemplate.self) })
      case parent?.fontFamily?.link:
        fontFamilyValue = fontFamilyValue.merged(with: { deserialize(__dictValue) })
      case parent?.fontSize?.link:
        fontSizeValue = fontSizeValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.fontSizeValidator) })
      case parent?.fontWeight?.link:
        fontWeightValue = fontWeightValue.merged(with: { deserialize(__dictValue) })
      case parent?.functions?.link:
        functionsValue = functionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivFunctionTemplate.self) })
      case parent?.height?.link:
        heightValue = heightValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivSizeTemplate.self) })
      case parent?.iconSize?.link:
        iconSizeValue = iconSizeValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.iconSizeValidator) })
      case parent?.id?.link:
        idValue = idValue.merged(with: { deserialize(__dictValue) })
      case parent?.chipItems?.link:
        chipItemsValue = chipItemsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivChoiceChipsItemTemplate.self) })
      case parent?.itemsVariable?.link:
        itemsVariableValue = itemsVariableValue.merged(with: { deserialize(__dictValue) })
      case parent?.layoutMode?.link:
        layoutModeValue = layoutModeValue.merged(with: { deserialize(__dictValue) })
      case parent?.layoutProvider?.link:
        layoutProviderValue = layoutProviderValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivLayoutProviderTemplate.self) })
      case parent?.margins?.link:
        marginsValue = marginsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivEdgeInsetsTemplate.self) })
      case parent?.paddings?.link:
        paddingsValue = paddingsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivEdgeInsetsTemplate.self) })
      case parent?.reuseId?.link:
        reuseIdValue = reuseIdValue.merged(with: { deserialize(__dictValue) })
      case parent?.rowSpacing?.link:
        rowSpacingValue = rowSpacingValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.rowSpacingValidator) })
      case parent?.rowSpan?.link:
        rowSpanValue = rowSpanValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.rowSpanValidator) })
      case parent?.selectedActions?.link:
        selectedActionsValue = selectedActionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self) })
      case parent?.selectedBackgroundColor?.link:
        selectedBackgroundColorValue = selectedBackgroundColorValue.merged(with: { deserialize(__dictValue, transform: Color.color(withHexString:)) })
      case parent?.selectedBorderColor?.link:
        selectedBorderColorValue = selectedBorderColorValue.merged(with: { deserialize(__dictValue, transform: Color.color(withHexString:)) })
      case parent?.selectedTextColor?.link:
        selectedTextColorValue = selectedTextColorValue.merged(with: { deserialize(__dictValue, transform: Color.color(withHexString:)) })
      case parent?.selectedValueVariable?.link:
        selectedValueVariableValue = selectedValueVariableValue.merged(with: { deserialize(__dictValue) })
      case parent?.selectionActions?.link:
        selectionActionsValue = selectionActionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self) })
      case parent?.selectionMode?.link:
        selectionModeValue = selectionModeValue.merged(with: { deserialize(__dictValue) })
      case parent?.showCheckmark?.link:
        showCheckmarkValue = showCheckmarkValue.merged(with: { deserialize(__dictValue) })
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
      _ = chipPaddingValue = chipPaddingValue.merged(with: { parent.chipPadding?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = disappearActionsValue = disappearActionsValue.merged(with: { parent.disappearActions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = extensionsValue = extensionsValue.merged(with: { parent.extensions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = focusValue = focusValue.merged(with: { parent.focus?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = functionsValue = functionsValue.merged(with: { parent.functions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = heightValue = heightValue.merged(with: { parent.height?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = chipItemsValue = chipItemsValue.merged(with: { parent.chipItems?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = layoutProviderValue = layoutProviderValue.merged(with: { parent.layoutProvider?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = marginsValue = marginsValue.merged(with: { parent.margins?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = paddingsValue = paddingsValue.merged(with: { parent.paddings?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = selectedActionsValue = selectedActionsValue.merged(with: { parent.selectedActions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
      _ = selectionActionsValue = selectionActionsValue.merged(with: { parent.selectionActions?.resolveOptionalValue(context: context, useOnlyLinks: true) })
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
      alignmentHorizontalValue.errorsOrWarnings?.map { .nestedObjectError(field: "alignment_horizontal", error: $0) },
      alignmentVerticalValue.errorsOrWarnings?.map { .nestedObjectError(field: "alignment_vertical", error: $0) },
      alphaValue.errorsOrWarnings?.map { .nestedObjectError(field: "alpha", error: $0) },
      animatorsValue.errorsOrWarnings?.map { .nestedObjectError(field: "animators", error: $0) },
      backgroundValue.errorsOrWarnings?.map { .nestedObjectError(field: "background", error: $0) },
      borderValue.errorsOrWarnings?.map { .nestedObjectError(field: "border", error: $0) },
      chipHeightValue.errorsOrWarnings?.map { .nestedObjectError(field: "chip_height", error: $0) },
      chipPaddingValue.errorsOrWarnings?.map { .nestedObjectError(field: "chip_padding", error: $0) },
      chipSpacingValue.errorsOrWarnings?.map { .nestedObjectError(field: "chip_spacing", error: $0) },
      chipStyleValue.errorsOrWarnings?.map { .nestedObjectError(field: "chip_style", error: $0) },
      columnSpanValue.errorsOrWarnings?.map { .nestedObjectError(field: "column_span", error: $0) },
      cornerRadiusValue.errorsOrWarnings?.map { .nestedObjectError(field: "corner_radius", error: $0) },
      defaultBackgroundColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "default_background_color", error: $0) },
      defaultBorderColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "default_border_color", error: $0) },
      defaultTextColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "default_text_color", error: $0) },
      disabledBackgroundColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "disabled_background_color", error: $0) },
      disabledBorderColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "disabled_border_color", error: $0) },
      disabledTextColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "disabled_text_color", error: $0) },
      disappearActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "disappear_actions", error: $0) },
      extensionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "extensions", error: $0) },
      focusValue.errorsOrWarnings?.map { .nestedObjectError(field: "focus", error: $0) },
      fontFamilyValue.errorsOrWarnings?.map { .nestedObjectError(field: "font_family", error: $0) },
      fontSizeValue.errorsOrWarnings?.map { .nestedObjectError(field: "font_size", error: $0) },
      fontWeightValue.errorsOrWarnings?.map { .nestedObjectError(field: "font_weight", error: $0) },
      functionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "functions", error: $0) },
      heightValue.errorsOrWarnings?.map { .nestedObjectError(field: "height", error: $0) },
      iconSizeValue.errorsOrWarnings?.map { .nestedObjectError(field: "icon_size", error: $0) },
      idValue.errorsOrWarnings?.map { .nestedObjectError(field: "id", error: $0) },
      chipItemsValue.errorsOrWarnings?.map { .nestedObjectError(field: "chip_items", error: $0) },
      itemsVariableValue.errorsOrWarnings?.map { .nestedObjectError(field: "items_variable", error: $0) },
      layoutModeValue.errorsOrWarnings?.map { .nestedObjectError(field: "layout_mode", error: $0) },
      layoutProviderValue.errorsOrWarnings?.map { .nestedObjectError(field: "layout_provider", error: $0) },
      marginsValue.errorsOrWarnings?.map { .nestedObjectError(field: "margins", error: $0) },
      paddingsValue.errorsOrWarnings?.map { .nestedObjectError(field: "paddings", error: $0) },
      reuseIdValue.errorsOrWarnings?.map { .nestedObjectError(field: "reuse_id", error: $0) },
      rowSpacingValue.errorsOrWarnings?.map { .nestedObjectError(field: "row_spacing", error: $0) },
      rowSpanValue.errorsOrWarnings?.map { .nestedObjectError(field: "row_span", error: $0) },
      selectedActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "selected_actions", error: $0) },
      selectedBackgroundColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "selected_background_color", error: $0) },
      selectedBorderColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "selected_border_color", error: $0) },
      selectedTextColorValue.errorsOrWarnings?.map { .nestedObjectError(field: "selected_text_color", error: $0) },
      selectedValueVariableValue.errorsOrWarnings?.map { .nestedObjectError(field: "selected_value_variable", error: $0) },
      selectionActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "selection_actions", error: $0) },
      selectionModeValue.errorsOrWarnings?.map { .nestedObjectError(field: "selection_mode", error: $0) },
      showCheckmarkValue.errorsOrWarnings?.map { .nestedObjectError(field: "show_checkmark", error: $0) },
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
    if case .noValue = selectedValueVariableValue {
      errors.append(.requiredFieldIsMissing(field: "selected_value_variable"))
    }
    guard
      let selectedValueVariableNonNil = selectedValueVariableValue.value
    else {
      return .failure(NonEmptyArray(errors)!)
    }
    let result = DivChoiceChips(
      accessibility: accessibilityValue.value,
      alignmentHorizontal: alignmentHorizontalValue.value,
      alignmentVertical: alignmentVerticalValue.value,
      alpha: alphaValue.value,
      animators: animatorsValue.value,
      background: backgroundValue.value,
      border: borderValue.value,
      chipHeight: chipHeightValue.value,
      chipPadding: chipPaddingValue.value,
      chipSpacing: chipSpacingValue.value,
      chipStyle: chipStyleValue.value,
      columnSpan: columnSpanValue.value,
      cornerRadius: cornerRadiusValue.value,
      defaultBackgroundColor: defaultBackgroundColorValue.value,
      defaultBorderColor: defaultBorderColorValue.value,
      defaultTextColor: defaultTextColorValue.value,
      disabledBackgroundColor: disabledBackgroundColorValue.value,
      disabledBorderColor: disabledBorderColorValue.value,
      disabledTextColor: disabledTextColorValue.value,
      disappearActions: disappearActionsValue.value,
      extensions: extensionsValue.value,
      focus: focusValue.value,
      fontFamily: fontFamilyValue.value,
      fontSize: fontSizeValue.value,
      fontWeight: fontWeightValue.value,
      functions: functionsValue.value,
      height: heightValue.value,
      iconSize: iconSizeValue.value,
      id: idValue.value,
      chipItems: chipItemsValue.value,
      itemsVariable: itemsVariableValue.value,
      layoutMode: layoutModeValue.value,
      layoutProvider: layoutProviderValue.value,
      margins: marginsValue.value,
      paddings: paddingsValue.value,
      reuseId: reuseIdValue.value,
      rowSpacing: rowSpacingValue.value,
      rowSpan: rowSpanValue.value,
      selectedActions: selectedActionsValue.value,
      selectedBackgroundColor: selectedBackgroundColorValue.value,
      selectedBorderColor: selectedBorderColorValue.value,
      selectedTextColor: selectedTextColorValue.value,
      selectedValueVariable: selectedValueVariableNonNil,
      selectionActions: selectionActionsValue.value,
      selectionMode: selectionModeValue.value,
      showCheckmark: showCheckmarkValue.value,
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

  private func mergedWithParent(templates: [TemplateName: Any]) throws -> DivChoiceChipsTemplate {
    guard let parent = parent, parent != Self.type else { return self }
    guard let parentTemplate = templates[parent] as? DivChoiceChipsTemplate else {
      throw DeserializationError.unknownType(type: parent)
    }
    let mergedParent = try parentTemplate.mergedWithParent(templates: templates)

    return DivChoiceChipsTemplate(
      parent: nil,
      accessibility: accessibility ?? mergedParent.accessibility,
      alignmentHorizontal: alignmentHorizontal ?? mergedParent.alignmentHorizontal,
      alignmentVertical: alignmentVertical ?? mergedParent.alignmentVertical,
      alpha: alpha ?? mergedParent.alpha,
      animators: animators ?? mergedParent.animators,
      background: background ?? mergedParent.background,
      border: border ?? mergedParent.border,
      chipHeight: chipHeight ?? mergedParent.chipHeight,
      chipPadding: chipPadding ?? mergedParent.chipPadding,
      chipSpacing: chipSpacing ?? mergedParent.chipSpacing,
      chipStyle: chipStyle ?? mergedParent.chipStyle,
      columnSpan: columnSpan ?? mergedParent.columnSpan,
      cornerRadius: cornerRadius ?? mergedParent.cornerRadius,
      defaultBackgroundColor: defaultBackgroundColor ?? mergedParent.defaultBackgroundColor,
      defaultBorderColor: defaultBorderColor ?? mergedParent.defaultBorderColor,
      defaultTextColor: defaultTextColor ?? mergedParent.defaultTextColor,
      disabledBackgroundColor: disabledBackgroundColor ?? mergedParent.disabledBackgroundColor,
      disabledBorderColor: disabledBorderColor ?? mergedParent.disabledBorderColor,
      disabledTextColor: disabledTextColor ?? mergedParent.disabledTextColor,
      disappearActions: disappearActions ?? mergedParent.disappearActions,
      extensions: extensions ?? mergedParent.extensions,
      focus: focus ?? mergedParent.focus,
      fontFamily: fontFamily ?? mergedParent.fontFamily,
      fontSize: fontSize ?? mergedParent.fontSize,
      fontWeight: fontWeight ?? mergedParent.fontWeight,
      functions: functions ?? mergedParent.functions,
      height: height ?? mergedParent.height,
      iconSize: iconSize ?? mergedParent.iconSize,
      id: id ?? mergedParent.id,
      chipItems: chipItems ?? mergedParent.chipItems,
      itemsVariable: itemsVariable ?? mergedParent.itemsVariable,
      layoutMode: layoutMode ?? mergedParent.layoutMode,
      layoutProvider: layoutProvider ?? mergedParent.layoutProvider,
      margins: margins ?? mergedParent.margins,
      paddings: paddings ?? mergedParent.paddings,
      reuseId: reuseId ?? mergedParent.reuseId,
      rowSpacing: rowSpacing ?? mergedParent.rowSpacing,
      rowSpan: rowSpan ?? mergedParent.rowSpan,
      selectedActions: selectedActions ?? mergedParent.selectedActions,
      selectedBackgroundColor: selectedBackgroundColor ?? mergedParent.selectedBackgroundColor,
      selectedBorderColor: selectedBorderColor ?? mergedParent.selectedBorderColor,
      selectedTextColor: selectedTextColor ?? mergedParent.selectedTextColor,
      selectedValueVariable: selectedValueVariable ?? mergedParent.selectedValueVariable,
      selectionActions: selectionActions ?? mergedParent.selectionActions,
      selectionMode: selectionMode ?? mergedParent.selectionMode,
      showCheckmark: showCheckmark ?? mergedParent.showCheckmark,
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

  public func resolveParent(templates: [TemplateName: Any]) throws -> DivChoiceChipsTemplate {
    let merged = try mergedWithParent(templates: templates)

    return DivChoiceChipsTemplate(
      parent: nil,
      accessibility: merged.accessibility?.tryResolveParent(templates: templates),
      alignmentHorizontal: merged.alignmentHorizontal,
      alignmentVertical: merged.alignmentVertical,
      alpha: merged.alpha,
      animators: merged.animators?.tryResolveParent(templates: templates),
      background: merged.background?.tryResolveParent(templates: templates),
      border: merged.border?.tryResolveParent(templates: templates),
      chipHeight: merged.chipHeight,
      chipPadding: merged.chipPadding?.tryResolveParent(templates: templates),
      chipSpacing: merged.chipSpacing,
      chipStyle: merged.chipStyle,
      columnSpan: merged.columnSpan,
      cornerRadius: merged.cornerRadius,
      defaultBackgroundColor: merged.defaultBackgroundColor,
      defaultBorderColor: merged.defaultBorderColor,
      defaultTextColor: merged.defaultTextColor,
      disabledBackgroundColor: merged.disabledBackgroundColor,
      disabledBorderColor: merged.disabledBorderColor,
      disabledTextColor: merged.disabledTextColor,
      disappearActions: merged.disappearActions?.tryResolveParent(templates: templates),
      extensions: merged.extensions?.tryResolveParent(templates: templates),
      focus: merged.focus?.tryResolveParent(templates: templates),
      fontFamily: merged.fontFamily,
      fontSize: merged.fontSize,
      fontWeight: merged.fontWeight,
      functions: merged.functions?.tryResolveParent(templates: templates),
      height: merged.height?.tryResolveParent(templates: templates),
      iconSize: merged.iconSize,
      id: merged.id,
      chipItems: merged.chipItems?.tryResolveParent(templates: templates),
      itemsVariable: merged.itemsVariable,
      layoutMode: merged.layoutMode,
      layoutProvider: merged.layoutProvider?.tryResolveParent(templates: templates),
      margins: merged.margins?.tryResolveParent(templates: templates),
      paddings: merged.paddings?.tryResolveParent(templates: templates),
      reuseId: merged.reuseId,
      rowSpacing: merged.rowSpacing,
      rowSpan: merged.rowSpan,
      selectedActions: merged.selectedActions?.tryResolveParent(templates: templates),
      selectedBackgroundColor: merged.selectedBackgroundColor,
      selectedBorderColor: merged.selectedBorderColor,
      selectedTextColor: merged.selectedTextColor,
      selectedValueVariable: merged.selectedValueVariable,
      selectionActions: merged.selectionActions?.tryResolveParent(templates: templates),
      selectionMode: merged.selectionMode,
      showCheckmark: merged.showCheckmark,
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
