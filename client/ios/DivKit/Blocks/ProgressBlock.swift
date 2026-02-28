import CoreGraphics
import LayoutKit
import VGSL

public final class ProgressBlock: BlockWithTraits {
  public enum Style: Equatable {
    case linear
    case circular
  }

  public let progressValue: Double
  public let activeColor: Color
  public let inactiveColor: Color
  public let trackThickness: CGFloat
  public let style: Style
  public let isIndeterminate: Bool
  public let widthTrait: LayoutTrait
  public let heightTrait: LayoutTrait

  public init(
    progressValue: Double,
    activeColor: Color,
    inactiveColor: Color,
    trackThickness: CGFloat,
    style: Style,
    isIndeterminate: Bool,
    widthTrait: LayoutTrait,
    heightTrait: LayoutTrait
  ) {
    self.progressValue = progressValue
    self.activeColor = activeColor
    self.inactiveColor = inactiveColor
    self.trackThickness = trackThickness
    self.style = style
    self.isIndeterminate = isIndeterminate
    self.widthTrait = widthTrait
    self.heightTrait = heightTrait
  }

  public var intrinsicContentWidth: CGFloat {
    switch style {
    case .linear:
      return widthTrait.intrinsicSize
    case .circular:
      return 48
    }
  }

  public func intrinsicContentHeight(forWidth _: CGFloat) -> CGFloat {
    switch style {
    case .linear:
      return trackThickness
    case .circular:
      return 48
    }
  }

  public func equals(_ other: Block) -> Bool {
    guard let other = other as? ProgressBlock else { return false }
    return progressValue == other.progressValue
      && activeColor == other.activeColor
      && inactiveColor == other.inactiveColor
      && trackThickness == other.trackThickness
      && style == other.style
      && isIndeterminate == other.isIndeterminate
      && widthTrait == other.widthTrait
      && heightTrait == other.heightTrait
  }

  public func getImageHolders() -> [ImageHolder] { [] }

  public var debugDescription: String {
    "ProgressBlock(value: \(progressValue), style: \(style), indeterminate: \(isIndeterminate))"
  }
}

extension ProgressBlock: LayoutCachingDefaultImpl {}
extension ProgressBlock: ElementStateUpdatingDefaultImpl {}

extension LayoutTrait {
  fileprivate var intrinsicSize: CGFloat {
    switch self {
    case let .fixed(value):
      value
    case let .intrinsic(_, minSize, _):
      minSize
    case .weighted:
      0
    }
  }
}
