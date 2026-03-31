#if os(iOS)
import UIKit
import VGSL

extension RatingBlock {
  public static func makeBlockView() -> BlockView {
    RatingBlockView()
  }

  public func configureBlockView(
    _ view: BlockView,
    observer: ElementStateObserver?,
    overscrollDelegate _: ScrollDelegate?,
    renderingDelegate _: RenderingDelegate?
  ) {
    let ratingView = view as! RatingBlockView
    ratingView.configure(with: self, observer: observer)
  }

  public func canConfigureBlockView(_ view: BlockView) -> Bool {
    view is RatingBlockView
  }
}

private final class RatingBlockView: BlockView, VisibleBoundsTrackingLeaf {
  var layoutReporter: LayoutReporter?

  var effectiveBackgroundColor: UIColor? { backgroundColor }

  private var block: RatingBlock?
  private weak var observer: ElementStateObserver?
  private var iconViews: [RatingIconView] = []

  override init(frame: CGRect) {
    super.init(frame: frame)
    clipsToBounds = true
  }

  @available(*, unavailable)
  required init?(coder _: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }

  func configure(with block: RatingBlock, observer: ElementStateObserver?) {
    self.block = block
    self.observer = observer
    rebuildIconViews()
    setNeedsLayout()
  }

  private func rebuildIconViews() {
    iconViews.forEach { $0.removeFromSuperview() }
    iconViews.removeAll()

    guard let block else { return }

    let rating = currentRating()

    for position in 1...block.maxRating {
      let fillPercent = fillPercent(rating: rating, position: position)
      let iconView = RatingIconView(
        size: block.iconSize,
        fillPercent: fillPercent,
        activeColor: block.isInteractive ? block.activeColor : block.disabledColor,
        inactiveColor: block.inactiveColor,
        borderColor: block.borderColor
      )
      iconViews.append(iconView)
      addSubview(iconView)
    }

    if block.isInteractive {
      let tap = UITapGestureRecognizer(target: self, action: #selector(handleTap(_:)))
      addGestureRecognizer(tap)
      isUserInteractionEnabled = true
    } else {
      gestureRecognizers?.forEach { removeGestureRecognizer($0) }
      isUserInteractionEnabled = false
    }
  }

  override func layoutSubviews() {
    super.layoutSubviews()
    layoutReporter?.willLayoutSubviews()

    guard let block else { return }

    var x: CGFloat = 0
    for iconView in iconViews {
      iconView.frame = CGRect(
        x: x,
        y: (bounds.height - block.iconSize) / 2,
        width: block.iconSize,
        height: block.iconSize
      )
      x += block.iconSize + block.iconSpacing
    }

    layoutReporter?.didLayoutSubviews()
  }

  @objc private func handleTap(_ gesture: UITapGestureRecognizer) {
    guard let block, block.isInteractive else { return }

    let location = gesture.location(in: self)
    let totalIconWidth = block.iconSize + block.iconSpacing
    let tappedIndex = Int(location.x / totalIconWidth)
    let clampedIndex = max(0, min(tappedIndex, block.maxRating - 1))

    var newRating = CGFloat(clampedIndex + 1)

    if block.step < 1 {
      let offsetInIcon = location.x - CGFloat(clampedIndex) * totalIconWidth
      let fraction = offsetInIcon / block.iconSize
      let steppedFraction = (fraction / block.step).rounded(.down) * block.step
      newRating = CGFloat(clampedIndex) + min(max(steppedFraction, block.step), 1.0)
    }

    newRating = min(newRating, CGFloat(block.maxRating))
    newRating = max(newRating, 0)

    let formattedRating: String
    if block.step == block.step.rounded() {
      formattedRating = String(Int(newRating))
    } else {
      formattedRating = String(format: "%.1f", newRating)
    }

    block.ratingValue.value = formattedRating
    block.ratingChangeActions.perform(sendingFrom: self)
    updateIconStates()
  }

  private func currentRating() -> CGFloat {
    guard let block else { return 0 }
    return CGFloat(Double(block.ratingValue.value) ?? 0)
  }

  private func fillPercent(rating: CGFloat, position: Int) -> CGFloat {
    let pos = CGFloat(position)
    if rating >= pos {
      return 1.0
    } else if rating > pos - 1 {
      return rating - (pos - 1)
    } else {
      return 0.0
    }
  }

  private func updateIconStates() {
    guard let block else { return }
    let rating = currentRating()
    for (index, iconView) in iconViews.enumerated() {
      let position = index + 1
      let fill = fillPercent(rating: rating, position: position)
      iconView.updateFill(
        fillPercent: fill,
        activeColor: block.isInteractive ? block.activeColor : block.disabledColor,
        inactiveColor: block.inactiveColor,
        borderColor: block.borderColor
      )
    }
  }
}

private final class RatingIconView: UIView {
  private let inactiveLayer = CAShapeLayer()
  private let activeLayer = CAShapeLayer()
  private let maskLayer = CALayer()
  private var iconSize: CGFloat

  init(
    size: CGFloat,
    fillPercent: CGFloat,
    activeColor: Color,
    inactiveColor: Color,
    borderColor: Color?
  ) {
    self.iconSize = size
    super.init(frame: CGRect(x: 0, y: 0, width: size, height: size))

    let starPath = RatingIconView.starPath(size: size)

    inactiveLayer.path = starPath.cgPath
    inactiveLayer.fillColor = inactiveColor.systemColor.cgColor
    if let borderColor {
      inactiveLayer.strokeColor = borderColor.systemColor.cgColor
      inactiveLayer.lineWidth = 1.0
    }
    layer.addSublayer(inactiveLayer)

    activeLayer.path = starPath.cgPath
    activeLayer.fillColor = activeColor.systemColor.cgColor
    if let borderColor {
      activeLayer.strokeColor = borderColor.systemColor.cgColor
      activeLayer.lineWidth = 1.0
    }

    maskLayer.backgroundColor = UIColor.white.cgColor
    maskLayer.frame = CGRect(
      x: 0,
      y: 0,
      width: size * fillPercent,
      height: size
    )
    activeLayer.mask = maskLayer
    layer.addSublayer(activeLayer)
  }

  @available(*, unavailable)
  required init?(coder _: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }

  func updateFill(
    fillPercent: CGFloat,
    activeColor: Color,
    inactiveColor: Color,
    borderColor: Color?
  ) {
    CATransaction.begin()
    CATransaction.setDisableActions(true)

    inactiveLayer.fillColor = inactiveColor.systemColor.cgColor
    activeLayer.fillColor = activeColor.systemColor.cgColor

    if let borderColor {
      inactiveLayer.strokeColor = borderColor.systemColor.cgColor
      inactiveLayer.lineWidth = 1.0
      activeLayer.strokeColor = borderColor.systemColor.cgColor
      activeLayer.lineWidth = 1.0
    } else {
      inactiveLayer.strokeColor = nil
      inactiveLayer.lineWidth = 0
      activeLayer.strokeColor = nil
      activeLayer.lineWidth = 0
    }

    maskLayer.frame = CGRect(
      x: 0,
      y: 0,
      width: iconSize * fillPercent,
      height: iconSize
    )

    CATransaction.commit()
  }

  // Default star path: M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18
  // 3.25L7 14.14 2 9.27l6.91-1.01L12 2z (24x24 viewBox, scaled to iconSize)
  private static func starPath(size: CGFloat) -> UIBezierPath {
    let scale = size / 24.0
    let path = UIBezierPath()

    path.move(to: CGPoint(x: 12 * scale, y: 2 * scale))
    path.addLine(to: CGPoint(x: 15.09 * scale, y: 8.26 * scale))
    path.addLine(to: CGPoint(x: 22 * scale, y: 9.27 * scale))
    path.addLine(to: CGPoint(x: 17 * scale, y: 14.14 * scale))
    path.addLine(to: CGPoint(x: 18.18 * scale, y: 21.02 * scale))
    path.addLine(to: CGPoint(x: 12 * scale, y: 17.77 * scale))
    path.addLine(to: CGPoint(x: 5.82 * scale, y: 21.02 * scale))
    path.addLine(to: CGPoint(x: 7 * scale, y: 14.14 * scale))
    path.addLine(to: CGPoint(x: 2 * scale, y: 9.27 * scale))
    path.addLine(to: CGPoint(x: 8.91 * scale, y: 8.26 * scale))
    path.close()

    return path
  }
}
#endif
