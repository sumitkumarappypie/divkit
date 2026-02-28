import CoreGraphics
import Foundation
import LayoutKit
import VGSL

extension DivRadio: DivBlockModeling {
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

    let textBinding: Binding<String> = context
      .makeBinding(variableName: valueVariable, defaultValue: "")
    let selectedValue = textBinding.value

    let resolvedSelectedColor = resolveSelectedColor(expressionResolver)
    let resolvedDefaultColor = resolveDefaultColor(expressionResolver)
    let resolvedTextColor = resolveTextColor(expressionResolver) ?? Color.colorWithARGBHexCode(0xFF000000)
    let isHorizontal = resolveOrientation(expressionResolver) == .horizontal
    let spacing = CGFloat(resolveItemSpacing(expressionResolver))

    let optionBlocks: [Block] = try options.map { option in
      let value = option.resolveValue(expressionResolver) ?? ""
      let text = option.resolveText(expressionResolver) ?? value
      let isSelected = value == selectedValue
      let indicatorColor = isSelected ? resolvedSelectedColor : resolvedDefaultColor

      let indicatorBlock = EmptyBlock(
        widthTrait: .fixed(16),
        heightTrait: .fixed(16)
      ).addingDecorations(backgroundColor: indicatorColor)

      let textBlock = TextBlock(
        widthTrait: .resizable,
        text: text.with(typo: Typo(size: FontSize(rawValue: 14), weight: .regular).with(color: resolvedTextColor))
      )

      return try ContainerBlock(
        layoutDirection: .horizontal,
        widthTrait: isHorizontal ? .intrinsic : .resizable,
        verticalChildrenAlignment: .center,
        children: [indicatorBlock, textBlock]
      )
    }

    let gaps = [CGFloat(0)] + [CGFloat](repeating: spacing, count: max(optionBlocks.count - 1, 0)) + [CGFloat(0)]

    return try ContainerBlock(
      layoutDirection: isHorizontal ? .horizontal : .vertical,
      widthTrait: resolveContentWidthTrait(context),
      heightTrait: resolveContentHeightTrait(context),
      gaps: gaps,
      children: optionBlocks
    )
  }
}
