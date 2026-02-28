import CoreGraphics
import LayoutKit
import VGSL

extension DivProgress: DivBlockModeling {
  public func makeBlock(context: DivBlockModelingContext) throws -> Block {
    let context = modifiedContextParentPath(context)
    return try applyBaseProperties(
      to: { try makeBaseBlock(context: context) },
      context: context,
      actionsHolder: nil
    )
  }

  private func makeBaseBlock(context: DivBlockModelingContext) throws -> Block {
    let resolver = context.expressionResolver

    let progressValue = resolveValue(resolver) ?? 0
    let clampedValue = min(max(progressValue, 0), 1)
    let activeColor = resolveActiveColor(resolver) ?? Color.colorWithARGBHexCode(0xFF0000FF)
    let inactiveColor = resolveInactiveColor(resolver) ?? Color.colorWithARGBHexCode(0xFFCCCCCC)
    let thickness = CGFloat(resolveTrackThickness(resolver) ?? 4)

    let widthTrait = resolveContentWidthTrait(context)
    let heightTrait: LayoutTrait = .fixed(thickness)

    let activeWeight = LayoutTrait.Weight(floatLiteral: max(clampedValue, 0.001))
    let inactiveWeight = LayoutTrait.Weight(floatLiteral: max(1 - clampedValue, 0.001))

    let activeBlock = EmptyBlock(
      widthTrait: .weighted(activeWeight),
      heightTrait: heightTrait
    ).addingDecorations(backgroundColor: activeColor)

    let inactiveBlock = EmptyBlock(
      widthTrait: .weighted(inactiveWeight),
      heightTrait: heightTrait
    ).addingDecorations(backgroundColor: inactiveColor)

    return try ContainerBlock(
      layoutDirection: .horizontal,
      widthTrait: widthTrait,
      heightTrait: heightTrait,
      children: [
        ContainerBlock.Child(content: activeBlock),
        ContainerBlock.Child(content: inactiveBlock),
      ]
    )
  }
}
