import CoreGraphics
import Foundation
import VGSL

public final class RatingBlock: BlockWithTraits {
  public let widthTrait: LayoutTrait
  public let heightTrait: LayoutTrait
  public let ratingValue: Binding<String>
  public let maxRating: Int
  public let step: CGFloat
  public let isInteractive: Bool
  public let iconSize: CGFloat
  public let iconSpacing: CGFloat
  public let iconPadding: EdgeInsets?
  public let activeColor: Color
  public let inactiveColor: Color
  public let borderColor: Color?
  public let disabledColor: Color
  public let ratingChangeActions: [UserInterfaceAction]
  public let ratingIconUrl: URL?
  public let path: UIElementPath

  public init(
    widthTrait: LayoutTrait = .resizable,
    heightTrait: LayoutTrait = .intrinsic,
    ratingValue: Binding<String>,
    maxRating: Int = 5,
    step: CGFloat = 1,
    isInteractive: Bool = true,
    iconSize: CGFloat = 32,
    iconSpacing: CGFloat = 4,
    iconPadding: EdgeInsets? = nil,
    activeColor: Color,
    inactiveColor: Color,
    borderColor: Color? = nil,
    disabledColor: Color,
    ratingChangeActions: [UserInterfaceAction] = [],
    ratingIconUrl: URL? = nil,
    path: UIElementPath
  ) {
    self.widthTrait = widthTrait
    self.heightTrait = heightTrait
    self.ratingValue = ratingValue
    self.maxRating = maxRating
    self.step = step
    self.isInteractive = isInteractive
    self.iconSize = iconSize
    self.iconSpacing = iconSpacing
    self.iconPadding = iconPadding
    self.activeColor = activeColor
    self.inactiveColor = inactiveColor
    self.borderColor = borderColor
    self.disabledColor = disabledColor
    self.ratingChangeActions = ratingChangeActions
    self.ratingIconUrl = ratingIconUrl
    self.path = path
  }

  public var intrinsicContentWidth: CGFloat {
    CGFloat(maxRating) * iconSize + CGFloat(maxRating - 1) * iconSpacing
  }

  public func intrinsicContentHeight(forWidth _: CGFloat) -> CGFloat {
    iconSize
  }

  public func equals(_ other: Block) -> Bool {
    guard let other = other as? RatingBlock else {
      return false
    }
    return self == other
  }

  public func getImageHolders() -> [ImageHolder] { [] }

  public var debugDescription: String {
    "RatingBlock \(widthTrait) x \(heightTrait) maxRating: \(maxRating)"
  }
}

extension RatingBlock {
  public static func ==(lhs: RatingBlock, rhs: RatingBlock) -> Bool {
    lhs.widthTrait == rhs.widthTrait
      && lhs.heightTrait == rhs.heightTrait
      && lhs.maxRating == rhs.maxRating
      && lhs.step == rhs.step
      && lhs.isInteractive == rhs.isInteractive
      && lhs.iconSize == rhs.iconSize
      && lhs.iconSpacing == rhs.iconSpacing
      && lhs.iconPadding == rhs.iconPadding
      && lhs.activeColor == rhs.activeColor
      && lhs.inactiveColor == rhs.inactiveColor
      && lhs.borderColor == rhs.borderColor
      && lhs.disabledColor == rhs.disabledColor
      && lhs.ratingChangeActions == rhs.ratingChangeActions
      && lhs.ratingIconUrl == rhs.ratingIconUrl
  }
}

extension RatingBlock: LayoutCachingDefaultImpl {}
extension RatingBlock: ElementStateUpdatingDefaultImpl {}
