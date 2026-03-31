import CoreFoundation
import CoreGraphics
import Foundation
import LayoutKit
import VGSL

extension DivChoiceChips: DivBlockModeling {
  public func makeBlock(context: DivBlockModelingContext) throws -> Block {
    let context = modifiedContextParentPath(context)
    return try applyBaseProperties(
      to: { try makeBaseBlock(context: context) },
      context: context,
      actionsHolder: nil
    )
  }

  private func makeBaseBlock(context: DivBlockModelingContext) throws -> Block {
    let expressionResolver = context.expressionResolver

    let chipItems = resolveItems(context: context)

    let selectionMode = resolveSelectionMode(expressionResolver).blockSelectionMode
    let layoutMode = resolveLayoutMode(expressionResolver).blockLayoutMode
    let chipStyle = resolveChipStyle(expressionResolver).blockChipStyle

    let chipColors = resolveChipColors(
      style: chipStyle,
      resolver: expressionResolver
    )

    let selectedValueBinding: Binding<String> = context
      .makeBinding(variableName: selectedValueVariable, defaultValue: "")

    let selectedValuesBinding: Binding<String>? = selectedValuesVariable.map {
      context.makeBinding(variableName: $0, defaultValue: "")
    }

    let resolvedSelectionActions = selectionActions?.uiActions(context: context) ?? []

    return ChoiceChipsBlock(
      widthTrait: resolveContentWidthTrait(context),
      heightTrait: resolveContentHeightTrait(context),
      selectionMode: selectionMode,
      layoutMode: layoutMode,
      chipStyle: chipStyle,
      chipColors: chipColors,
      items: chipItems,
      selectedValue: selectedValueBinding,
      selectedValues: selectedValuesBinding,
      selectionActions: resolvedSelectionActions,
      chipSpacing: CGFloat(resolveChipSpacing(expressionResolver)),
      rowSpacing: CGFloat(resolveRowSpacing(expressionResolver)),
      cornerRadius: CGFloat(resolveCornerRadius(expressionResolver)),
      chipHeight: CGFloat(resolveChipHeight(expressionResolver)),
      chipPadding: chipPaddings?.resolve(context),
      fontSize: CGFloat(resolveFontSize(expressionResolver)),
      fontWeight: resolveFontWeightValue(expressionResolver)
        ?? resolveFontWeight(expressionResolver)?.toInt() ?? 400,
      fontFamily: resolveFontFamily(expressionResolver),
      showCheckmark: resolveShowCheckmark(expressionResolver),
      iconSize: CGFloat(resolveIconSize(expressionResolver)),
      path: context.path
    )
  }

  private func resolveItems(
    context: DivBlockModelingContext
  ) -> [ChoiceChipsBlock.ChipItem] {
    let expressionResolver = context.expressionResolver

    // Try itemsVariable first
    if let variableName = itemsVariable {
      let divVarName = DivVariableName(rawValue: variableName)
      if let itemsArray: DivArray = context.variablesStorage.getVariableValue(
        path: context.path,
        name: divVarName
      ) {
        return itemsArray.compactMap { element -> ChoiceChipsBlock.ChipItem? in
          guard let dict = element as? [String: Any] else { return nil }
          guard let value = dict["value"] as? String else { return nil }
          let text = dict["text"] as? String
          let iconUrlString = dict["icon_url"] as? String
          let iconUrl = iconUrlString.flatMap { URL(string: $0) }
          let isEnabled = dict["is_enabled"] as? Bool ?? true
          let isSelectedByDefault = dict["is_selected_by_default"] as? Bool ?? false
          return ChoiceChipsBlock.ChipItem(
            value: value,
            text: text,
            iconUrl: iconUrl,
            isEnabled: isEnabled,
            isSelectedByDefault: isSelectedByDefault
          )
        }
      }
    }

    // Fall back to static items
    guard let staticItems = items else { return [] }
    return staticItems.map { item in
      ChoiceChipsBlock.ChipItem(
        value: item.resolveValue(expressionResolver) ?? "",
        text: item.resolveText(expressionResolver),
        iconUrl: item.resolveIconUrl(expressionResolver),
        isEnabled: item.resolveIsEnabled(expressionResolver),
        isSelectedByDefault: item.resolveIsSelectedByDefault(expressionResolver)
      )
    }
  }

  private func resolveChipColors(
    style: ChoiceChipsBlock.ChipStyle,
    resolver: ExpressionResolver
  ) -> ChoiceChipsBlock.ChipColors {
    let defaultSelectedBg: Color
    let defaultSelectedText: Color
    let defaultSelectedBorder: Color
    let defaultBg: Color
    let defaultText: Color
    let defaultBorder: Color
    let hasShadow: Bool

    switch style {
    case .outlined:
      defaultSelectedBg = Color.colorWithARGBHexCode(0xFF1A73E8)
      defaultSelectedText = Color.colorWithARGBHexCode(0xFFFFFFFF)
      defaultSelectedBorder = Color.colorWithARGBHexCode(0xFF1A73E8)
      defaultBg = Color.colorWithARGBHexCode(0x00000000)
      defaultText = Color.colorWithARGBHexCode(0xFF1A73E8)
      defaultBorder = Color.colorWithARGBHexCode(0xFF9E9E9E)
      hasShadow = false
    case .filled:
      defaultSelectedBg = Color.colorWithARGBHexCode(0xFF1A73E8)
      defaultSelectedText = Color.colorWithARGBHexCode(0xFFFFFFFF)
      defaultSelectedBorder = Color.colorWithARGBHexCode(0x00000000)
      defaultBg = Color.colorWithARGBHexCode(0xFFE0E0E0)
      defaultText = Color.colorWithARGBHexCode(0xFF424242)
      defaultBorder = Color.colorWithARGBHexCode(0x00000000)
      hasShadow = false
    case .elevated:
      defaultSelectedBg = Color.colorWithARGBHexCode(0xFF1A73E8)
      defaultSelectedText = Color.colorWithARGBHexCode(0xFFFFFFFF)
      defaultSelectedBorder = Color.colorWithARGBHexCode(0x00000000)
      defaultBg = Color.colorWithARGBHexCode(0xFFFFFFFF)
      defaultText = Color.colorWithARGBHexCode(0xFF424242)
      defaultBorder = Color.colorWithARGBHexCode(0x00000000)
      hasShadow = true
    }

    return ChoiceChipsBlock.ChipColors(
      selectedBackground: resolveSelectedBackgroundColor(resolver) ?? defaultSelectedBg,
      selectedText: resolveSelectedTextColor(resolver) ?? defaultSelectedText,
      selectedBorder: resolveSelectedBorderColor(resolver) ?? defaultSelectedBorder,
      defaultBackground: resolveDefaultBackgroundColor(resolver) ?? defaultBg,
      defaultText: resolveDefaultTextColor(resolver) ?? defaultText,
      defaultBorder: resolveDefaultBorderColor(resolver) ?? defaultBorder,
      disabledBackground: resolveDisabledBackgroundColor(resolver)
        ?? Color.colorWithARGBHexCode(0xFFBDBDBD),
      disabledText: resolveDisabledTextColor(resolver)
        ?? Color.colorWithARGBHexCode(0xFF9E9E9E),
      disabledBorder: resolveDisabledBorderColor(resolver)
        ?? Color.colorWithARGBHexCode(0xFFBDBDBD),
      hasShadow: hasShadow
    )
  }
}

extension DivChoiceChips: FontParamsProvider {}

extension DivChoiceChips.SelectionMode {
  fileprivate var blockSelectionMode: ChoiceChipsBlock.SelectionMode {
    switch self {
    case .single: .single
    case .multi: .multi
    }
  }
}

extension DivChoiceChips.LayoutMode {
  fileprivate var blockLayoutMode: ChoiceChipsBlock.LayoutMode {
    switch self {
    case .wrap: .wrap
    case .scroll: .scroll
    }
  }
}

extension DivChoiceChips.ChipStyle {
  fileprivate var blockChipStyle: ChoiceChipsBlock.ChipStyle {
    switch self {
    case .outlined: .outlined
    case .filled: .filled
    case .elevated: .elevated
    }
  }
}
