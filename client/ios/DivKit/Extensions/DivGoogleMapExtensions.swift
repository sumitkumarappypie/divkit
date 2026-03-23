import CoreGraphics
import LayoutKit
import VGSL

extension DivGoogleMap: DivBlockModeling {
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
    let aspectRatio = aspect.resolveAspectRatio(resolver)

    let resolvedLatitude = resolveLatitude(resolver) ?? 0
    let resolvedLongitude = resolveLongitude(resolver) ?? 0
    let resolvedZoom = resolveZoom(resolver)
    let resolvedMapType = resolveMapType(resolver)
    let resolvedAllowZoom = resolveAllowZoom(resolver)
    let resolvedAllowScroll = resolveAllowScroll(resolver)
    let resolvedShowUserLocation = resolveShowUserLocation(resolver)

    let resolvedMarkers: [GoogleMapBlock.Marker] = (markers ?? []).compactMap { marker in
      guard let lat = marker.resolveLatitude(resolver),
            let lon = marker.resolveLongitude(resolver) else {
        return nil
      }
      return GoogleMapBlock.Marker(
        latitude: lat,
        longitude: lon,
        title: marker.resolveTitle(resolver),
        color: marker.resolveColor(resolver),
        onClickActions: []
      )
    }

    let blockMapType: GoogleMapBlock.MapType
    switch resolvedMapType {
    case .normal:
      blockMapType = .normal
    case .satellite:
      blockMapType = .satellite
    case .terrain:
      blockMapType = .terrain
    case .hybrid:
      blockMapType = .hybrid
    }

    let googleMapBlock = GoogleMapBlock(
      latitude: resolvedLatitude,
      longitude: resolvedLongitude,
      zoom: resolvedZoom,
      mapType: blockMapType,
      allowZoom: resolvedAllowZoom,
      allowScroll: resolvedAllowScroll,
      showUserLocation: resolvedShowUserLocation,
      markers: resolvedMarkers,
      widthTrait: width.resolveLayoutTrait(resolver),
      heightTrait: height.resolveHeightLayoutTrait(resolver, aspectRatio: aspectRatio),
      onReadyActions: [],
      onErrorActions: []
    )

    if let aspectRatio {
      return AspectBlock(content: googleMapBlock, aspectRatio: aspectRatio)
    }

    return googleMapBlock
  }
}
