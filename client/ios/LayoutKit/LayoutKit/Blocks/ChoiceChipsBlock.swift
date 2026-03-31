import CoreGraphics
import Foundation
import VGSL

public final class ChoiceChipsBlock: BlockWithTraits {
  public struct ChipItem: Equatable {
    public let value: String
    public let text: String?
    public let iconUrl: URL?
    public let isEnabled: Bool
    public let isSelectedByDefault: Bool

    public init(
      value: String,
      text: String? = nil,
      iconUrl: URL? = nil,
      isEnabled: Bool = true,
      isSelectedByDefault: Bool = false
    ) {
      self.value = value
      self.text = text
      self.iconUrl = iconUrl
      self.isEnabled = isEnabled
      self.isSelectedByDefault = isSelectedByDefault
    }

    public var displayText: String {
      text ?? value
    }
  }

  public enum SelectionMode: Equatable {
    case single
    case multi
  }

  public enum LayoutMode: Equatable {
    case wrap
    case scroll
  }

  public enum ChipStyle: Equatable {
    case outlined
    case filled
    case elevated
  }

  public struct ChipColors: Equatable {
    public let selectedBackground: Color
    public let selectedText: Color
    public let selectedBorder: Color
    public let defaultBackground: Color
    public let defaultText: Color
    public let defaultBorder: Color
    public let disabledBackground: Color
    public let disabledText: Color
    public let disabledBorder: Color
    public let hasShadow: Bool

    public init(
      selectedBackground: Color,
      selectedText: Color,
      selectedBorder: Color,
      defaultBackground: Color,
      defaultText: Color,
      defaultBorder: Color,
      disabledBackground: Color,
      disabledText: Color,
      disabledBorder: Color,
      hasShadow: Bool = false
    ) {
      self.selectedBackground = selectedBackground
      self.selectedText = selectedText
      self.selectedBorder = selectedBorder
      self.defaultBackground = defaultBackground
      self.defaultText = defaultText
      self.defaultBorder = defaultBorder
      self.disabledBackground = disabledBackground
      self.disabledText = disabledText
      self.disabledBorder = disabledBorder
      self.hasShadow = hasShadow
    }
  }

  public let widthTrait: LayoutTrait
  public let heightTrait: LayoutTrait
  public let selectionMode: SelectionMode
  public let layoutMode: LayoutMode
  public let chipStyle: ChipStyle
  public let chipColors: ChipColors
  public let items: [ChipItem]
  public let selectedValue: Binding<String>
  public let selectedValues: Binding<String>?
  public let selectionActions: [UserInterfaceAction]
  public let chipSpacing: CGFloat
  public let rowSpacing: CGFloat
  public let cornerRadius: CGFloat
  public let chipHeight: CGFloat
  public let chipPadding: EdgeInsets?
  public let fontSize: CGFloat
  public let fontWeight: Int
  public let fontFamily: String?
  public let showCheckmark: Bool
  public let iconSize: CGFloat
  public let path: UIElementPath

  public init(
    widthTrait: LayoutTrait = .resizable,
    heightTrait: LayoutTrait = .intrinsic,
    selectionMode: SelectionMode = .single,
    layoutMode: LayoutMode = .wrap,
    chipStyle: ChipStyle = .outlined,
    chipColors: ChipColors,
    items: [ChipItem] = [],
    selectedValue: Binding<String>,
    selectedValues: Binding<String>? = nil,
    selectionActions: [UserInterfaceAction] = [],
    chipSpacing: CGFloat = 8,
    rowSpacing: CGFloat = 8,
    cornerRadius: CGFloat = 8,
    chipHeight: CGFloat = 32,
    chipPadding: EdgeInsets? = nil,
    fontSize: CGFloat = 14,
    fontWeight: Int = 400,
    fontFamily: String? = nil,
    showCheckmark: Bool = false,
    iconSize: CGFloat = 18,
    path: UIElementPath
  ) {
    self.widthTrait = widthTrait
    self.heightTrait = heightTrait
    self.selectionMode = selectionMode
    self.layoutMode = layoutMode
    self.chipStyle = chipStyle
    self.chipColors = chipColors
    self.items = items
    self.selectedValue = selectedValue
    self.selectedValues = selectedValues
    self.selectionActions = selectionActions
    self.chipSpacing = chipSpacing
    self.rowSpacing = rowSpacing
    self.cornerRadius = cornerRadius
    self.chipHeight = chipHeight
    self.chipPadding = chipPadding
    self.fontSize = fontSize
    self.fontWeight = fontWeight
    self.fontFamily = fontFamily
    self.showCheckmark = showCheckmark
    self.iconSize = iconSize
    self.path = path
  }

  public var intrinsicContentWidth: CGFloat {
    switch widthTrait {
    case let .fixed(value):
      value
    case let .intrinsic(_, minSize, _):
      minSize
    case .weighted:
      0
    }
  }

  public func intrinsicContentHeight(forWidth width: CGFloat) -> CGFloat {
    switch heightTrait {
    case let .fixed(value):
      return value
    case let .intrinsic(_, minSize, maxSize):
      let contentHeight = calculateWrapHeight(forWidth: width)
      return clamp(contentHeight, min: minSize, max: maxSize)
    case .weighted:
      return 0
    }
  }

  private func calculateWrapHeight(forWidth width: CGFloat) -> CGFloat {
    guard !items.isEmpty else { return chipHeight }

    let padding = chipPadding ?? EdgeInsets(
      top: 0, left: 12, bottom: 0, right: 12
    )
    let font = UIFont.systemFont(ofSize: fontSize)

    var currentX: CGFloat = 0
    var rowCount: CGFloat = 1

    for item in items {
      let textWidth = ceil(
        (item.displayText as NSString).size(
          withAttributes: [.font: font]
        ).width
      )
      var itemWidth = textWidth + padding.left + padding.right
      if showCheckmark {
        itemWidth += iconSize + 4
      }

      if currentX + itemWidth > width, currentX > 0 {
        rowCount += 1
        currentX = 0
      }
      currentX += itemWidth + chipSpacing
    }

    return rowCount * chipHeight + (rowCount - 1) * rowSpacing
  }

  public func equals(_ other: Block) -> Bool {
    guard let other = other as? ChoiceChipsBlock else {
      return false
    }
    return self == other
  }

  public func getImageHolders() -> [ImageHolder] { [] }

  public var debugDescription: String {
    "ChoiceChipsBlock \(widthTrait) x \(heightTrait) items: \(items.count)"
  }
}

extension ChoiceChipsBlock {
  public static func ==(lhs: ChoiceChipsBlock, rhs: ChoiceChipsBlock) -> Bool {
    lhs.widthTrait == rhs.widthTrait
      && lhs.heightTrait == rhs.heightTrait
      && lhs.selectionMode == rhs.selectionMode
      && lhs.layoutMode == rhs.layoutMode
      && lhs.chipStyle == rhs.chipStyle
      && lhs.chipColors == rhs.chipColors
      && lhs.items == rhs.items
      && lhs.selectedValue == rhs.selectedValue
      && lhs.selectedValues == rhs.selectedValues
      && lhs.selectionActions == rhs.selectionActions
      && lhs.chipSpacing == rhs.chipSpacing
      && lhs.rowSpacing == rhs.rowSpacing
      && lhs.cornerRadius == rhs.cornerRadius
      && lhs.chipHeight == rhs.chipHeight
      && lhs.chipPadding == rhs.chipPadding
      && lhs.fontSize == rhs.fontSize
      && lhs.fontWeight == rhs.fontWeight
      && lhs.fontFamily == rhs.fontFamily
      && lhs.showCheckmark == rhs.showCheckmark
      && lhs.iconSize == rhs.iconSize
  }
}

extension ChoiceChipsBlock: LayoutCachingDefaultImpl {}
extension ChoiceChipsBlock: ElementStateUpdatingDefaultImpl {}
