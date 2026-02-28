import CoreGraphics
import Foundation
import LayoutKit
import Serialization
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

    let indicatorSize: CGFloat = 20
    let indicatorRadius = indicatorSize / 2
    let indicatorBorderWidth: CGFloat = 2
    let innerDotSize: CGFloat = 10
    let innerDotRadius = innerDotSize / 2
    let indicatorTextGap: CGFloat = 8

    let optionBlocks: [Block] = try options.map { option in
      let value = option.resolveValue(expressionResolver) ?? ""
      let text = option.resolveText(expressionResolver) ?? value
      let isSelected = value == selectedValue

      let indicatorBlock: Block
      if isSelected {
        let outerRing = EmptyBlock(
          widthTrait: .fixed(indicatorSize),
          heightTrait: .fixed(indicatorSize)
        ).addingDecorations(
          boundary: .cornerRadius(indicatorRadius),
          border: BlockBorder(
            color: resolvedSelectedColor,
            width: indicatorBorderWidth
          )
        )
        let innerDot = EmptyBlock(
          widthTrait: .fixed(innerDotSize),
          heightTrait: .fixed(innerDotSize)
        ).addingDecorations(
          boundary: .cornerRadius(innerDotRadius),
          backgroundColor: resolvedSelectedColor
        )
        indicatorBlock = LayeredBlock(
          widthTrait: .fixed(indicatorSize),
          heightTrait: .fixed(indicatorSize),
          horizontalChildrenAlignment: .center,
          verticalChildrenAlignment: .center,
          children: [outerRing, innerDot]
        )
      } else {
        indicatorBlock = EmptyBlock(
          widthTrait: .fixed(indicatorSize),
          heightTrait: .fixed(indicatorSize)
        ).addingDecorations(
          boundary: .cornerRadius(indicatorRadius),
          border: BlockBorder(
            color: resolvedDefaultColor,
            width: indicatorBorderWidth
          )
        )
      }

      let textBlock = TextBlock(
        widthTrait: .intrinsic,
        text: text.with(typo: Typo(size: FontSize(rawValue: 14), weight: .regular).with(color: resolvedTextColor))
      )

      let encodedName = valueVariable.addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed) ?? valueVariable
      let encodedValue = value.addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed) ?? value
      let actionURLString = "div-action://set_variable?name=\(encodedName)&value=\(encodedValue)"
      let actionURL = URL(string: actionURLString)!

      let actionJSON: JSONObject = .object([
        "log_id": .string("radio_select_\(value)"),
        "url": .string(actionURLString),
      ])

      let tapAction = UserInterfaceAction(
        payload: .divAction(
          params: UserInterfaceAction.DivActionParams(
            action: actionJSON,
            path: context.path,
            source: .tap,
            url: actionURL
          )
        ),
        path: context.path + "option_\(value)"
      )

      let optionRow = try ContainerBlock(
        layoutDirection: .horizontal,
        widthTrait: .intrinsic,
        heightTrait: .intrinsic,
        verticalChildrenAlignment: .center,
        gaps: [0, indicatorTextGap, 0],
        children: [indicatorBlock, textBlock]
      )

      return optionRow.addingDecorations(
        actions: NonEmptyArray(tapAction)
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
