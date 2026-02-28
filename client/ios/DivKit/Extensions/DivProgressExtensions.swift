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

    let progressValue = resolveValue(resolver)
    let clampedValue = min(max(progressValue, 0), 1)
    let activeColor = resolveActiveColor(resolver) ?? Color.colorWithARGBHexCode(0xFF129386)
    let inactiveColor = resolveInactiveColor(resolver) ?? Color.colorWithARGBHexCode(0x4D000000)
    let thickness = CGFloat(resolveTrackThickness(resolver))
    let isCircular = resolveStyle(resolver) == .circular

    if isCircular {
      return makeCircularBlock(
        clampedValue: clampedValue,
        activeColor: activeColor,
        inactiveColor: inactiveColor,
        thickness: thickness,
        context: context
      )
    } else {
      return try makeLinearBlock(
        clampedValue: clampedValue,
        activeColor: activeColor,
        inactiveColor: inactiveColor,
        thickness: thickness,
        context: context
      )
    }
  }

  private func makeCircularBlock(
    clampedValue: Double,
    activeColor: Color,
    inactiveColor: Color,
    thickness: CGFloat,
    context: DivBlockModelingContext
  ) -> Block {
    let defaultSize: CGFloat = 48
    let size = defaultSize

    return EmptyBlock(
      widthTrait: .fixed(size),
      heightTrait: .fixed(size)
    ).addingDecorations(
      boundary: .clipCorner(radius: .init(floatLiteral: size / 2)),
      border: BlockBorder(
        color: clampedValue > 0 ? activeColor : inactiveColor,
        width: thickness
      )
    )
  }

  private func makeLinearBlock(
    clampedValue: Double,
    activeColor: Color,
    inactiveColor: Color,
    thickness: CGFloat,
    context: DivBlockModelingContext
  ) throws -> Block {
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
