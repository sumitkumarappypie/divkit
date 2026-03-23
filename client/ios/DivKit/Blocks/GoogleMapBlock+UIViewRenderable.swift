#if os(iOS)

import CoreGraphics
import LayoutKit
import MapKit
import UIKit
import VGSL

extension GoogleMapBlock: UIViewRenderable {
  public static func makeBlockView() -> BlockView {
    GoogleMapBlockView()
  }

  public func configureBlockView(
    _ view: BlockView,
    observer _: ElementStateObserver?,
    overscrollDelegate _: ScrollDelegate?,
    renderingDelegate _: RenderingDelegate?
  ) {
    let mapView = view as! GoogleMapBlockView
    mapView.configure(
      latitude: latitude,
      longitude: longitude,
      zoom: zoom,
      mapType: mapType,
      allowZoom: allowZoom,
      allowScroll: allowScroll,
      showUserLocation: showUserLocation,
      markers: markers
    )
  }

  public func canConfigureBlockView(_ view: BlockView) -> Bool {
    view is GoogleMapBlockView
  }
}

final class GoogleMapBlockView: UIView, BlockViewProtocol, VisibleBoundsTrackingLeaf {
  var effectiveBackgroundColor: UIColor? { backgroundColor }

  private var mapView: MKMapView?
  private var currentLatitude: Double = 0
  private var currentLongitude: Double = 0
  private var currentZoom: Double = 10

  override init(frame: CGRect) {
    super.init(frame: frame)
    clipsToBounds = true
  }

  @available(*, unavailable)
  required init?(coder _: NSCoder) { fatalError() }

  func configure(
    latitude: Double,
    longitude: Double,
    zoom: Double,
    mapType: GoogleMapBlock.MapType,
    allowZoom: Bool,
    allowScroll: Bool,
    showUserLocation: Bool,
    markers: [GoogleMapBlock.Marker]
  ) {
    let needsRecreate = mapView == nil
    if needsRecreate {
      mapView?.removeFromSuperview()
      let mv = MKMapView(frame: bounds)
      mv.autoresizingMask = [.flexibleWidth, .flexibleHeight]
      addSubview(mv)
      mapView = mv
    }

    guard let mapView = mapView else { return }

    // Configure map type
    switch mapType {
    case .normal:
      mapView.mapType = .standard
    case .satellite:
      mapView.mapType = .satellite
    case .terrain:
      mapView.mapType = .mutedStandard
    case .hybrid:
      mapView.mapType = .hybrid
    }

    // Configure interaction
    mapView.isZoomEnabled = allowZoom
    mapView.isScrollEnabled = allowScroll
    mapView.showsUserLocation = showUserLocation

    // Set region
    let locationChanged = latitude != currentLatitude || longitude != currentLongitude || zoom != currentZoom
    if locationChanged || needsRecreate {
      currentLatitude = latitude
      currentLongitude = longitude
      currentZoom = zoom

      let coordinate = CLLocationCoordinate2D(latitude: latitude, longitude: longitude)
      let span = zoomToSpan(zoom)
      let region = MKCoordinateRegion(center: coordinate, span: span)
      mapView.setRegion(region, animated: !needsRecreate)
    }

    // Configure markers
    mapView.removeAnnotations(mapView.annotations)
    for marker in markers {
      let annotation = MKPointAnnotation()
      annotation.coordinate = CLLocationCoordinate2D(
        latitude: marker.latitude,
        longitude: marker.longitude
      )
      annotation.title = marker.title
      mapView.addAnnotation(annotation)
    }
  }

  override func layoutSubviews() {
    super.layoutSubviews()
    mapView?.frame = bounds
  }

  private func zoomToSpan(_ zoom: Double) -> MKCoordinateSpan {
    let delta = 360.0 / pow(2.0, zoom)
    return MKCoordinateSpan(latitudeDelta: delta, longitudeDelta: delta)
  }
}

#endif
