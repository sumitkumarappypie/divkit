import CoreGraphics
import LayoutKit
import VGSL

extension DivProgress: DivBlockModeling {
  public func makeBlock(context: DivBlockModelingContext) throws -> Block {
    let context = modifiedContextParentPath(context)
    return try applyBaseProperties(
      to: { makeBaseBlock(context: context) },
      context: context,
      actionsHolder: nil
    )
  }

  private func makeBaseBlock(context: DivBlockModelingContext) -> Block {
    let resolver = context.expressionResolver

    let progressValue = resolveValue(resolver)
    let clampedValue = min(max(progressValue, 0), 1)
    let activeColor = resolveActiveColor(resolver) ?? Color.colorWithARGBHexCode(0xFF129386)
    let inactiveColor = resolveInactiveColor(resolver) ?? Color.colorWithARGBHexCode(0x4D000000)
    let thickness = CGFloat(resolveTrackThickness(resolver))
    let isCircular = resolveStyle(resolver) == .circular
    let isIndeterminate = resolveIsIndeterminate(resolver)

    let style: ProgressBlock.Style = isCircular ? .circular : .linear

    let widthTrait: LayoutTrait
    let heightTrait: LayoutTrait

    if isCircular {
      widthTrait = resolveContentWidthTrait(context)
      heightTrait = resolveContentHeightTrait(context)
    } else {
      widthTrait = resolveContentWidthTrait(context)
      heightTrait = .fixed(thickness)
    }

    return ProgressBlock(
      progressValue: clampedValue,
      activeColor: activeColor,
      inactiveColor: inactiveColor,
      trackThickness: thickness,
      style: style,
      isIndeterminate: isIndeterminate,
      widthTrait: widthTrait,
      heightTrait: heightTrait
    )
  }
}
