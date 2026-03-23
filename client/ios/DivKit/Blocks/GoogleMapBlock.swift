import CoreGraphics
import Foundation
import LayoutKit
import VGSL

public final class GoogleMapBlock: BlockWithTraits {
  public enum MapType {
    case normal
    case satellite
    case terrain
    case hybrid
  }

  public struct Marker {
    public let latitude: Double
    public let longitude: Double
    public let title: String?
    public let color: Color?
    public let onClickActions: [UserInterfaceAction]

    public init(
      latitude: Double,
      longitude: Double,
      title: String?,
      color: Color?,
      onClickActions: [UserInterfaceAction]
    ) {
      self.latitude = latitude
      self.longitude = longitude
      self.title = title
      self.color = color
      self.onClickActions = onClickActions
    }
  }

  public let latitude: Double
  public let longitude: Double
  public let zoom: Double
  public let mapType: MapType
  public let allowZoom: Bool
  public let allowScroll: Bool
  public let showUserLocation: Bool
  public let markers: [Marker]
  public let widthTrait: LayoutTrait
  public let heightTrait: LayoutTrait
  public let onReadyActions: [UserInterfaceAction]
  public let onErrorActions: [UserInterfaceAction]

  public init(
    latitude: Double,
    longitude: Double,
    zoom: Double,
    mapType: MapType,
    allowZoom: Bool,
    allowScroll: Bool,
    showUserLocation: Bool,
    markers: [Marker],
    widthTrait: LayoutTrait,
    heightTrait: LayoutTrait,
    onReadyActions: [UserInterfaceAction],
    onErrorActions: [UserInterfaceAction]
  ) {
    self.latitude = latitude
    self.longitude = longitude
    self.zoom = zoom
    self.mapType = mapType
    self.allowZoom = allowZoom
    self.allowScroll = allowScroll
    self.showUserLocation = showUserLocation
    self.markers = markers
    self.widthTrait = widthTrait
    self.heightTrait = heightTrait
    self.onReadyActions = onReadyActions
    self.onErrorActions = onErrorActions
  }

  public var intrinsicContentWidth: CGFloat {
    widthTrait.intrinsicSize
  }

  public func intrinsicContentHeight(forWidth _: CGFloat) -> CGFloat {
    heightTrait.intrinsicSize
  }

  public func equals(_ other: Block) -> Bool {
    guard let other = other as? GoogleMapBlock else { return false }
    return latitude == other.latitude
      && longitude == other.longitude
      && zoom == other.zoom
      && mapType == other.mapType
      && allowZoom == other.allowZoom
      && allowScroll == other.allowScroll
      && showUserLocation == other.showUserLocation
      && widthTrait == other.widthTrait
      && heightTrait == other.heightTrait
  }

  public func getImageHolders() -> [ImageHolder] { [] }

  public var debugDescription: String {
    "GoogleMapBlock(lat: \(latitude), lon: \(longitude), zoom: \(zoom))"
  }
}

extension GoogleMapBlock: LayoutCachingDefaultImpl {}
extension GoogleMapBlock: ElementStateUpdatingDefaultImpl {}

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
