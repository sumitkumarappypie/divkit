import CoreGraphics
import Foundation
import LayoutKit
import VGSL

public final class WebviewBlock: BlockWithTraits {
  public let url: URL?
  public let html: String?
  public let javascriptEnabled: Bool
  public let allowScrolling: Bool
  public let allowNavigation: Bool
  public let scaleToFit: Bool
  public let widthTrait: LayoutTrait
  public let heightTrait: LayoutTrait

  public init(
    url: URL?,
    html: String?,
    javascriptEnabled: Bool,
    allowScrolling: Bool,
    allowNavigation: Bool,
    scaleToFit: Bool,
    widthTrait: LayoutTrait,
    heightTrait: LayoutTrait
  ) {
    self.url = url
    self.html = html
    self.javascriptEnabled = javascriptEnabled
    self.allowScrolling = allowScrolling
    self.allowNavigation = allowNavigation
    self.scaleToFit = scaleToFit
    self.widthTrait = widthTrait
    self.heightTrait = heightTrait
  }

  public var intrinsicContentWidth: CGFloat {
    widthTrait.intrinsicSize
  }

  public func intrinsicContentHeight(forWidth _: CGFloat) -> CGFloat {
    heightTrait.intrinsicSize
  }

  public func equals(_ other: Block) -> Bool {
    guard let other = other as? WebviewBlock else { return false }
    return url == other.url
      && html == other.html
      && javascriptEnabled == other.javascriptEnabled
      && allowScrolling == other.allowScrolling
      && allowNavigation == other.allowNavigation
      && scaleToFit == other.scaleToFit
      && widthTrait == other.widthTrait
      && heightTrait == other.heightTrait
  }

  public func getImageHolders() -> [ImageHolder] { [] }

  public var debugDescription: String {
    "WebviewBlock(url: \(url?.absoluteString ?? "nil"), html: \(html != nil ? "set" : "nil"))"
  }
}

extension WebviewBlock: LayoutCachingDefaultImpl {}
extension WebviewBlock: ElementStateUpdatingDefaultImpl {}

private extension LayoutTrait {
  var intrinsicSize: CGFloat {
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
