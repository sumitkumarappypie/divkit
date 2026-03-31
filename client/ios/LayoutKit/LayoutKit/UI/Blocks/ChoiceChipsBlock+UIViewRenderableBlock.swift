#if os(iOS)
import UIKit
import VGSL

extension ChoiceChipsBlock {
  public static func makeBlockView() -> BlockView {
    ChoiceChipsBlockView()
  }

  public func configureBlockView(
    _ view: BlockView,
    observer: ElementStateObserver?,
    overscrollDelegate _: ScrollDelegate?,
    renderingDelegate _: RenderingDelegate?
  ) {
    let chipsView = view as! ChoiceChipsBlockView
    chipsView.configure(with: self, observer: observer)
  }

  public func canConfigureBlockView(_ view: BlockView) -> Bool {
    view is ChoiceChipsBlockView
  }
}

private final class ChoiceChipsBlockView: BlockView, VisibleBoundsTrackingLeaf {
  var layoutReporter: LayoutReporter?

  var effectiveBackgroundColor: UIColor? { backgroundColor }

  private var block: ChoiceChipsBlock?
  private weak var observer: ElementStateObserver?
  private var chipViews: [ChipView] = []
  private var scrollView: UIScrollView?

  override init(frame: CGRect) {
    super.init(frame: frame)
    clipsToBounds = true
  }

  @available(*, unavailable)
  required init?(coder _: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }

  func configure(with block: ChoiceChipsBlock, observer: ElementStateObserver?) {
    self.block = block
    self.observer = observer
    rebuildChipViews()
    setNeedsLayout()
  }

  private func rebuildChipViews() {
    chipViews.forEach { $0.removeFromSuperview() }
    chipViews.removeAll()
    scrollView?.removeFromSuperview()
    scrollView = nil

    guard let block else { return }

    let selectedValues = resolveSelectedValues()

    for (index, item) in block.items.enumerated() {
      let isSelected = selectedValues.contains(item.value)
      let chipView = ChipView(
        item: item,
        isSelected: isSelected,
        block: block,
        index: index
      )
      chipView.onTap = { [weak self] in
        self?.handleChipTap(item: item)
      }
      chipViews.append(chipView)
    }

    if block.layoutMode == .scroll {
      let sv = UIScrollView()
      sv.showsHorizontalScrollIndicator = false
      sv.showsVerticalScrollIndicator = false
      sv.clipsToBounds = false
      scrollView = sv
      addSubview(sv)
      chipViews.forEach { sv.addSubview($0) }
    } else {
      chipViews.forEach { addSubview($0) }
    }
  }

  override func layoutSubviews() {
    super.layoutSubviews()
    layoutReporter?.willLayoutSubviews()

    guard let block else { return }

    let chipSizes = chipViews.map { $0.sizeThatFits(bounds.size) }

    switch block.layoutMode {
    case .wrap:
      layoutWrap(chipSizes: chipSizes, block: block)
    case .scroll:
      layoutScroll(chipSizes: chipSizes, block: block)
    }

    layoutReporter?.didLayoutSubviews()
  }

  private func layoutWrap(chipSizes: [CGSize], block: ChoiceChipsBlock) {
    var x: CGFloat = 0
    var y: CGFloat = 0

    for (index, chipView) in chipViews.enumerated() {
      let size = chipSizes[index]
      let chipWidth = size.width

      if x + chipWidth > bounds.width, x > 0 {
        x = 0
        y += block.chipHeight + block.rowSpacing
      }

      chipView.frame = CGRect(
        x: x,
        y: y,
        width: chipWidth,
        height: block.chipHeight
      )
      x += chipWidth + block.chipSpacing
    }
  }

  private func layoutScroll(chipSizes: [CGSize], block: ChoiceChipsBlock) {
    guard let scrollView else { return }
    scrollView.frame = bounds

    var x: CGFloat = 0
    for (index, chipView) in chipViews.enumerated() {
      let size = chipSizes[index]
      chipView.frame = CGRect(
        x: x,
        y: 0,
        width: size.width,
        height: block.chipHeight
      )
      x += size.width + block.chipSpacing
    }
    scrollView.contentSize = CGSize(
      width: max(0, x - block.chipSpacing),
      height: block.chipHeight
    )
  }

  private func resolveSelectedValues() -> Set<String> {
    guard let block else { return [] }
    switch block.selectionMode {
    case .single:
      let val = block.selectedValue.value
      return val.isEmpty ? [] : [val]
    case .multi:
      if let multiBinding = block.selectedValues {
        let csvString = multiBinding.value
        if csvString.isEmpty { return [] }
        let values = csvString.components(separatedBy: ",")
          .map { $0.trimmingCharacters(in: .whitespaces) }
          .filter { !$0.isEmpty }
        return Set(values)
      }
      return []
    }
  }

  private func handleChipTap(item: ChoiceChipsBlock.ChipItem) {
    guard let block, item.isEnabled else { return }

    switch block.selectionMode {
    case .single:
      if block.selectedValue.value == item.value {
        block.selectedValue.value = ""
      } else {
        block.selectedValue.value = item.value
      }
    case .multi:
      if let multiBinding = block.selectedValues {
        var currentValues: [String]
        let csvString = multiBinding.value
        if csvString.isEmpty {
          currentValues = []
        } else {
          currentValues = csvString.components(separatedBy: ",")
            .map { $0.trimmingCharacters(in: .whitespaces) }
            .filter { !$0.isEmpty }
        }
        if let idx = currentValues.firstIndex(of: item.value) {
          currentValues.remove(at: idx)
        } else {
          currentValues.append(item.value)
        }
        multiBinding.value = currentValues.joined(separator: ",")
      }
    }

    block.selectionActions.perform(sendingFrom: self)
    updateChipStates()
  }

  private func updateChipStates() {
    guard let block else { return }
    let selectedValues = resolveSelectedValues()
    for (index, chipView) in chipViews.enumerated() {
      guard index < block.items.count else { break }
      let item = block.items[index]
      chipView.updateSelection(isSelected: selectedValues.contains(item.value), block: block)
    }
  }
}

private final class ChipView: UIView {
  var onTap: (() -> Void)?

  private let label = UILabel()
  private let checkmarkView = UIImageView()
  private var item: ChoiceChipsBlock.ChipItem?

  init(
    item: ChoiceChipsBlock.ChipItem,
    isSelected: Bool,
    block: ChoiceChipsBlock,
    index _: Int
  ) {
    super.init(frame: .zero)
    self.item = item

    label.textAlignment = .center
    label.lineBreakMode = .byTruncatingTail
    addSubview(label)

    if block.showCheckmark {
      checkmarkView.contentMode = .scaleAspectFit
      if #available(iOS 13.0, *) {
        checkmarkView.image = UIImage(systemName: "checkmark")
      }
      checkmarkView.isHidden = !isSelected
      addSubview(checkmarkView)
    }

    let tap = UITapGestureRecognizer(target: self, action: #selector(handleTap))
    addGestureRecognizer(tap)
    isUserInteractionEnabled = item.isEnabled

    applyStyle(isSelected: isSelected, block: block)
  }

  @available(*, unavailable)
  required init?(coder _: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }

  override func sizeThatFits(_ size: CGSize) -> CGSize {
    let textSize = label.sizeThatFits(size)
    let padding = paddingForCurrentItem()
    var width = ceil(textSize.width) + padding.left + padding.right
    if !checkmarkView.isHidden {
      width += checkmarkView.frame.width + 4
    }
    return CGSize(width: width, height: size.height)
  }

  override func layoutSubviews() {
    super.layoutSubviews()
    let padding = paddingForCurrentItem()
    var labelX = padding.left
    let labelHeight = bounds.height
    var labelWidth = bounds.width - padding.left - padding.right

    if !checkmarkView.isHidden {
      let iconSize = checkmarkView.frame.width
      checkmarkView.frame = CGRect(
        x: padding.left,
        y: (bounds.height - iconSize) / 2,
        width: iconSize,
        height: iconSize
      )
      labelX = checkmarkView.frame.maxX + 4
      labelWidth = bounds.width - labelX - padding.right
    }

    label.frame = CGRect(
      x: labelX,
      y: 0,
      width: max(0, labelWidth),
      height: labelHeight
    )
  }

  func updateSelection(isSelected: Bool, block: ChoiceChipsBlock) {
    applyStyle(isSelected: isSelected, block: block)
    checkmarkView.isHidden = !isSelected || !block.showCheckmark
    setNeedsLayout()
  }

  @objc private func handleTap() {
    onTap?()
  }

  private func applyStyle(isSelected: Bool, block: ChoiceChipsBlock) {
    guard let item else { return }

    let colors = block.chipColors
    let bgColor: Color
    let textColor: Color
    let borderColor: Color

    if !item.isEnabled {
      bgColor = colors.disabledBackground
      textColor = colors.disabledText
      borderColor = colors.disabledBorder
    } else if isSelected {
      bgColor = colors.selectedBackground
      textColor = colors.selectedText
      borderColor = colors.selectedBorder
    } else {
      bgColor = colors.defaultBackground
      textColor = colors.defaultText
      borderColor = colors.defaultBorder
    }

    backgroundColor = bgColor.systemColor
    layer.cornerRadius = block.cornerRadius
    layer.borderWidth = 1.0 / UIScreen.main.scale
    layer.borderColor = borderColor.systemColor.cgColor

    if block.chipStyle == .elevated, colors.hasShadow {
      layer.shadowColor = UIColor.black.cgColor
      layer.shadowOpacity = 0.15
      layer.shadowOffset = CGSize(width: 0, height: 1)
      layer.shadowRadius = 2
      clipsToBounds = false
    } else {
      layer.shadowOpacity = 0
      clipsToBounds = true
    }

    let fontWeight: UIFont.Weight
    switch block.fontWeight {
    case ...299: fontWeight = .light
    case 300...499: fontWeight = .regular
    case 500...599: fontWeight = .medium
    case 600...699: fontWeight = .semibold
    case 700...: fontWeight = .bold
    default: fontWeight = .regular
    }

    let font: UIFont
    if let family = block.fontFamily {
      font = UIFont(name: family, size: block.fontSize) ?? UIFont.systemFont(
        ofSize: block.fontSize,
        weight: fontWeight
      )
    } else {
      font = UIFont.systemFont(ofSize: block.fontSize, weight: fontWeight)
    }

    label.font = font
    label.textColor = textColor.systemColor
    label.text = item.displayText

    let iconSize = block.iconSize
    checkmarkView.frame.size = CGSize(width: iconSize, height: iconSize)
    checkmarkView.tintColor = textColor.systemColor
  }

  private func paddingForCurrentItem() -> UIEdgeInsets {
    UIEdgeInsets(top: 0, left: 12, bottom: 0, right: 12)
  }
}
#endif
