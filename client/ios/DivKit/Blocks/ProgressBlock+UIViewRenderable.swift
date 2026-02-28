#if os(iOS)

import CoreGraphics
import LayoutKit
import UIKit
import VGSL

extension ProgressBlock: UIViewRenderable {
  public static func makeBlockView() -> BlockView {
    ProgressBlockView()
  }

  public func configureBlockView(
    _ view: BlockView,
    observer _: ElementStateObserver?,
    overscrollDelegate _: ScrollDelegate?,
    renderingDelegate _: RenderingDelegate?
  ) {
    let progressView = view as! ProgressBlockView
    progressView.configure(
      progressValue: progressValue,
      activeColor: activeColor.systemColor,
      inactiveColor: inactiveColor.systemColor,
      trackThickness: trackThickness,
      style: style,
      isIndeterminate: isIndeterminate
    )
  }

  public func canConfigureBlockView(_ view: BlockView) -> Bool {
    view is ProgressBlockView
  }
}

final class ProgressBlockView: UIView, BlockViewProtocol, VisibleBoundsTrackingLeaf {
  var effectiveBackgroundColor: UIColor? { backgroundColor }

  private let trackLayer = CAShapeLayer()
  private let progressLayer = CAShapeLayer()
  private var currentStyle: ProgressBlock.Style = .linear
  private var isIndeterminate = false

  override init(frame: CGRect) {
    super.init(frame: frame)
    isUserInteractionEnabled = false
    layer.addSublayer(trackLayer)
    layer.addSublayer(progressLayer)
  }

  @available(*, unavailable)
  required init?(coder _: NSCoder) { fatalError() }

  func configure(
    progressValue: Double,
    activeColor: UIColor,
    inactiveColor: UIColor,
    trackThickness: CGFloat,
    style: ProgressBlock.Style,
    isIndeterminate: Bool
  ) {
    currentStyle = style
    self.isIndeterminate = isIndeterminate

    trackLayer.fillColor = nil
    trackLayer.strokeColor = inactiveColor.cgColor
    trackLayer.lineWidth = trackThickness
    trackLayer.lineCap = .round

    progressLayer.fillColor = nil
    progressLayer.strokeColor = activeColor.cgColor
    progressLayer.lineWidth = trackThickness
    progressLayer.lineCap = .round

    if isIndeterminate {
      progressLayer.strokeStart = 0
      progressLayer.strokeEnd = 0.25
    } else {
      progressLayer.strokeStart = 0
      progressLayer.strokeEnd = CGFloat(min(max(progressValue, 0), 1))
    }

    setNeedsLayout()
    updateAnimation()
  }

  override func layoutSubviews() {
    super.layoutSubviews()
    trackLayer.frame = bounds
    progressLayer.frame = bounds
    updatePaths()
  }

  private func updatePaths() {
    switch currentStyle {
    case .linear:
      updateLinearPaths()
    case .circular:
      updateCircularPaths()
    }
  }

  private func updateLinearPaths() {
    let midY = bounds.midY
    let linePath = UIBezierPath()
    linePath.move(to: CGPoint(x: trackLayer.lineWidth / 2, y: midY))
    linePath.addLine(to: CGPoint(x: bounds.width - trackLayer.lineWidth / 2, y: midY))

    trackLayer.path = linePath.cgPath
    progressLayer.path = linePath.cgPath
  }

  private func updateCircularPaths() {
    let center = CGPoint(x: bounds.midX, y: bounds.midY)
    let radius = (min(bounds.width, bounds.height) - trackLayer.lineWidth) / 2
    let startAngle = -CGFloat.pi / 2

    let circlePath = UIBezierPath(
      arcCenter: center,
      radius: radius,
      startAngle: startAngle,
      endAngle: startAngle + 2 * .pi,
      clockwise: true
    )

    trackLayer.path = circlePath.cgPath
    progressLayer.path = circlePath.cgPath
  }

  private func updateAnimation() {
    progressLayer.removeAnimation(forKey: "indeterminate")
    progressLayer.removeAnimation(forKey: "indeterminateStroke")

    guard isIndeterminate else { return }

    switch currentStyle {
    case .circular:
      addCircularIndeterminateAnimation()
    case .linear:
      addLinearIndeterminateAnimation()
    }
  }

  private func addCircularIndeterminateAnimation() {
    let rotation = CABasicAnimation(keyPath: "transform.rotation.z")
    rotation.fromValue = 0
    rotation.toValue = 2 * Double.pi
    rotation.duration = 1.2
    rotation.repeatCount = .infinity
    rotation.timingFunction = CAMediaTimingFunction(name: .linear)
    progressLayer.add(rotation, forKey: "indeterminate")

    let strokeStart = CAKeyframeAnimation(keyPath: "strokeStart")
    strokeStart.values = [0, 0.25, 0]
    strokeStart.keyTimes = [0, 0.5, 1]
    strokeStart.duration = 1.5
    strokeStart.repeatCount = .infinity
    strokeStart.timingFunction = CAMediaTimingFunction(name: .easeInEaseOut)

    let strokeEnd = CAKeyframeAnimation(keyPath: "strokeEnd")
    strokeEnd.values = [0.25, 0.75, 0.25]
    strokeEnd.keyTimes = [0, 0.5, 1]
    strokeEnd.duration = 1.5
    strokeEnd.repeatCount = .infinity
    strokeEnd.timingFunction = CAMediaTimingFunction(name: .easeInEaseOut)

    let group = CAAnimationGroup()
    group.animations = [strokeStart, strokeEnd]
    group.duration = 1.5
    group.repeatCount = .infinity
    progressLayer.add(group, forKey: "indeterminateStroke")
  }

  private func addLinearIndeterminateAnimation() {
    progressLayer.strokeStart = 0
    progressLayer.strokeEnd = 0.3

    let strokeStart = CAKeyframeAnimation(keyPath: "strokeStart")
    strokeStart.values = [0, 0.5, 1.0]
    strokeStart.keyTimes = [0, 0.5, 1]

    let strokeEnd = CAKeyframeAnimation(keyPath: "strokeEnd")
    strokeEnd.values = [0.3, 0.8, 1.0]
    strokeEnd.keyTimes = [0, 0.5, 1]

    let group = CAAnimationGroup()
    group.animations = [strokeStart, strokeEnd]
    group.duration = 1.5
    group.repeatCount = .infinity
    group.timingFunction = CAMediaTimingFunction(name: .easeInEaseOut)
    progressLayer.add(group, forKey: "indeterminate")
  }

  override func willMove(toWindow newWindow: UIWindow?) {
    super.willMove(toWindow: newWindow)
    if newWindow != nil, isIndeterminate {
      updateAnimation()
    }
  }

  override func didMoveToWindow() {
    super.didMoveToWindow()
    if window == nil {
      progressLayer.removeAllAnimations()
    }
  }
}

#endif
