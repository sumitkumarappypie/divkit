import CoreGraphics
import Foundation
import VGSL

public final class AutocompleteBlock: BlockWithTraits {
  public struct SuggestionItem: Equatable {
    public let value: String
    public let text: String?
    public let secondaryText: String?

    public init(value: String, text: String? = nil, secondaryText: String? = nil) {
      self.value = value
      self.text = text
      self.secondaryText = secondaryText
    }

    public var displayText: String {
      text ?? value
    }
  }

  public enum EnterKeyType: Equatable {
    case `default`
    case go
    case search
    case send
    case done
  }

  public let widthTrait: LayoutTrait
  public let heightTrait: LayoutTrait
  public let hint: NSAttributedString
  public let textValue: Binding<String>
  public let textTypo: Typo
  public let suggestionTextColor: Color
  public let highlightColor: Color?
  public let suggestions: [SuggestionItem]
  public let maxVisibleSuggestions: Int
  public let minQueryLength: Int
  public let dismissOnSelection: Bool
  public let dismissOnBlur: Bool
  public let dismissOnEmpty: Bool
  public let selectAllOnFocus: Bool
  public let enterKeyType: EnterKeyType
  public let inputType: TextInputBlock.InputType
  public let path: UIElementPath
  public let isFocused: Bool
  public let isEnabled: Bool
  public let onFocusActions: [UserInterfaceAction]
  public let onBlurActions: [UserInterfaceAction]
  public let enterKeyActions: [UserInterfaceAction]
  public let textChangeActions: [UserInterfaceAction]
  public let selectionActions: [UserInterfaceAction]
  public weak var parentScrollView: ScrollView?
  public let layoutDirection: UserInterfaceLayoutDirection
  public let paddings: EdgeInsets?
  public let maxLength: Int?

  public let valueBinding: Binding<String>?

  let shouldClearFocus: Variable<Bool>

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

  private var textForMeasuring: NSAttributedString {
    let text = textValue.value
    if text.isEmpty {
      if hint.length == 0 {
        return defaultTextForMeasuring.with(typo: textTypo)
      }
      return hint
    }
    return text.with(typo: textTypo)
  }

  public init(
    widthTrait: LayoutTrait = .resizable,
    heightTrait: LayoutTrait = .intrinsic,
    hint: NSAttributedString,
    textValue: Binding<String>,
    textTypo: Typo,
    suggestionTextColor: Color,
    highlightColor: Color? = nil,
    suggestions: [SuggestionItem] = [],
    maxVisibleSuggestions: Int = 5,
    minQueryLength: Int = 1,
    dismissOnSelection: Bool = true,
    dismissOnBlur: Bool = true,
    dismissOnEmpty: Bool = true,
    selectAllOnFocus: Bool = false,
    enterKeyType: EnterKeyType = .default,
    inputType: TextInputBlock.InputType = .default,
    path: UIElementPath,
    isFocused: Bool = false,
    isEnabled: Bool = true,
    onFocusActions: [UserInterfaceAction] = [],
    onBlurActions: [UserInterfaceAction] = [],
    enterKeyActions: [UserInterfaceAction] = [],
    textChangeActions: [UserInterfaceAction] = [],
    selectionActions: [UserInterfaceAction] = [],
    parentScrollView: ScrollView? = nil,
    layoutDirection: UserInterfaceLayoutDirection,
    paddings: EdgeInsets? = nil,
    maxLength: Int? = nil,
    valueBinding: Binding<String>? = nil,
    shouldClearFocus: Variable<Bool> = .constant(true)
  ) {
    self.widthTrait = widthTrait
    self.heightTrait = heightTrait
    self.hint = hint
    self.textValue = textValue
    self.textTypo = textTypo
    self.suggestionTextColor = suggestionTextColor
    self.highlightColor = highlightColor
    self.suggestions = suggestions
    self.maxVisibleSuggestions = maxVisibleSuggestions
    self.minQueryLength = minQueryLength
    self.dismissOnSelection = dismissOnSelection
    self.dismissOnBlur = dismissOnBlur
    self.dismissOnEmpty = dismissOnEmpty
    self.selectAllOnFocus = selectAllOnFocus
    self.enterKeyType = enterKeyType
    self.inputType = inputType
    self.path = path
    self.isFocused = isFocused
    self.isEnabled = isEnabled
    self.onFocusActions = onFocusActions
    self.onBlurActions = onBlurActions
    self.enterKeyActions = enterKeyActions
    self.textChangeActions = textChangeActions
    self.selectionActions = selectionActions
    self.parentScrollView = parentScrollView
    self.layoutDirection = layoutDirection
    self.paddings = paddings
    self.maxLength = maxLength
    self.valueBinding = valueBinding
    self.shouldClearFocus = shouldClearFocus
  }

  public func intrinsicContentHeight(forWidth width: CGFloat) -> CGFloat {
    switch heightTrait {
    case let .fixed(value):
      return value
    case let .intrinsic(_, minSize, maxSize):
      let width = width - (paddings?.horizontal.sum ?? 0)
      let verticalPaddings = paddings?.vertical.sum ?? 0
      let textHeight = ceil(textForMeasuring.sizeForWidth(width).height)
      return clamp(textHeight + verticalPaddings, min: minSize, max: maxSize)
    case .weighted:
      return 0
    }
  }

  public func equals(_ other: Block) -> Bool {
    guard let other = other as? AutocompleteBlock else {
      return false
    }
    return self == other
  }

  public func getImageHolders() -> [ImageHolder] { [] }

  public var debugDescription: String {
    "AutocompleteBlock \(widthTrait) x \(heightTrait) suggestions: \(suggestions.count)"
  }
}

extension AutocompleteBlock {
  public static func ==(lhs: AutocompleteBlock, rhs: AutocompleteBlock) -> Bool {
    lhs.widthTrait == rhs.widthTrait
      && lhs.heightTrait == rhs.heightTrait
      && lhs.hint == rhs.hint
      && lhs.textValue.value == rhs.textValue.value
      && lhs.textTypo == rhs.textTypo
      && lhs.suggestions == rhs.suggestions
      && lhs.maxVisibleSuggestions == rhs.maxVisibleSuggestions
      && lhs.minQueryLength == rhs.minQueryLength
      && lhs.dismissOnSelection == rhs.dismissOnSelection
      && lhs.dismissOnBlur == rhs.dismissOnBlur
      && lhs.dismissOnEmpty == rhs.dismissOnEmpty
      && lhs.selectAllOnFocus == rhs.selectAllOnFocus
      && lhs.enterKeyType == rhs.enterKeyType
      && lhs.inputType == rhs.inputType
      && lhs.isFocused == rhs.isFocused
      && lhs.isEnabled == rhs.isEnabled
      && lhs.layoutDirection == rhs.layoutDirection
      && lhs.paddings == rhs.paddings
  }
}

extension AutocompleteBlock: LayoutCachingDefaultImpl {}
extension AutocompleteBlock: ElementStateUpdatingDefaultImpl {}
extension AutocompleteBlock: ElementFocusUpdating {
  public func updated(path: UIElementPath, isFocused: Bool) throws -> AutocompleteBlock {
    guard path == self.path,
          isFocused != self.isFocused else {
      return self
    }

    return AutocompleteBlock(
      widthTrait: widthTrait,
      heightTrait: heightTrait,
      hint: hint,
      textValue: textValue,
      textTypo: textTypo,
      suggestionTextColor: suggestionTextColor,
      highlightColor: highlightColor,
      suggestions: suggestions,
      maxVisibleSuggestions: maxVisibleSuggestions,
      minQueryLength: minQueryLength,
      dismissOnSelection: dismissOnSelection,
      dismissOnBlur: dismissOnBlur,
      dismissOnEmpty: dismissOnEmpty,
      selectAllOnFocus: selectAllOnFocus,
      enterKeyType: enterKeyType,
      inputType: inputType,
      path: path,
      isFocused: isFocused,
      isEnabled: isEnabled,
      onFocusActions: onFocusActions,
      onBlurActions: onBlurActions,
      enterKeyActions: enterKeyActions,
      textChangeActions: textChangeActions,
      selectionActions: selectionActions,
      parentScrollView: parentScrollView,
      layoutDirection: layoutDirection,
      paddings: paddings,
      maxLength: maxLength,
      valueBinding: valueBinding,
      shouldClearFocus: shouldClearFocus
    )
  }
}

private let defaultTextForMeasuring = "A"
