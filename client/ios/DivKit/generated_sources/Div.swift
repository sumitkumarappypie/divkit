// Generated code. Do not modify.

import Foundation
import Serialization
import VGSL

@frozen
public enum Div: Sendable {
  case divImage(DivImage)
  case divGifImage(DivGifImage)
  case divText(DivText)
  case divSeparator(DivSeparator)
  case divContainer(DivContainer)
  case divGrid(DivGrid)
  case divGallery(DivGallery)
  case divPager(DivPager)
  case divTabs(DivTabs)
  case divTable(DivTable)
  case divState(DivState)
  case divCustom(DivCustom)
  case divIndicator(DivIndicator)
  case divSlider(DivSlider)
  case divSwitch(DivSwitch)
  case divInput(DivInput)
  case divSelect(DivSelect)
  case divVideo(DivVideo)
  case divCheckbox(DivCheckbox)
  case divCounter(DivCounter)
  case divRadio(DivRadio)
  case divProgress(DivProgress)
  case divWebview(DivWebview)
  case divBreadcrumb(DivBreadcrumb)
  case divGoogleMap(DivGoogleMap)
  case divAutocomplete(DivAutocomplete)
  case divChoiceChips(DivChoiceChips)
  case divRating(DivRating)

  public var value: Serializable & DivBase {
    switch self {
    case let .divImage(value):
      return value
    case let .divGifImage(value):
      return value
    case let .divText(value):
      return value
    case let .divSeparator(value):
      return value
    case let .divContainer(value):
      return value
    case let .divGrid(value):
      return value
    case let .divGallery(value):
      return value
    case let .divPager(value):
      return value
    case let .divTabs(value):
      return value
    case let .divTable(value):
      return value
    case let .divState(value):
      return value
    case let .divCustom(value):
      return value
    case let .divIndicator(value):
      return value
    case let .divSlider(value):
      return value
    case let .divSwitch(value):
      return value
    case let .divInput(value):
      return value
    case let .divSelect(value):
      return value
    case let .divVideo(value):
      return value
    case let .divCheckbox(value):
      return value
    case let .divCounter(value):
      return value
    case let .divRadio(value):
      return value
    case let .divProgress(value):
      return value
    case let .divWebview(value):
      return value
    case let .divBreadcrumb(value):
      return value
    case let .divGoogleMap(value):
      return value
    case let .divAutocomplete(value):
      return value
    case let .divChoiceChips(value):
      return value
    case let .divRating(value):
      return value
    }
  }

  public var id: String? {
    switch self {
    case let .divImage(value):
      return value.id
    case let .divGifImage(value):
      return value.id
    case let .divText(value):
      return value.id
    case let .divSeparator(value):
      return value.id
    case let .divContainer(value):
      return value.id
    case let .divGrid(value):
      return value.id
    case let .divGallery(value):
      return value.id
    case let .divPager(value):
      return value.id
    case let .divTabs(value):
      return value.id
    case let .divTable(value):
      return value.id
    case let .divState(value):
      return value.id
    case let .divCustom(value):
      return value.id
    case let .divIndicator(value):
      return value.id
    case let .divSlider(value):
      return value.id
    case let .divSwitch(value):
      return value.id
    case let .divInput(value):
      return value.id
    case let .divSelect(value):
      return value.id
    case let .divVideo(value):
      return value.id
    case let .divCheckbox(value):
      return value.id
    case let .divCounter(value):
      return value.id
    case let .divRadio(value):
      return value.id
    case let .divProgress(value):
      return value.id
    case let .divWebview(value):
      return value.id
    case let .divBreadcrumb(value):
      return value.id
    case let .divGoogleMap(value):
      return value.id
    case let .divAutocomplete(value):
      return value.id
    case let .divChoiceChips(value):
      return value.id
    case let .divRating(value):
      return value.id
    }
  }
}

extension Div {
  public init(dictionary: [String: Any], context: ParsingContext) throws {
    let dictionary = context.templateResolver?(dictionary) ?? dictionary
    let blockType = try dictionary.getField("type") as String
    switch blockType {
    case DivImage.type:
      self = .divImage(try DivImage(dictionary: dictionary, context: context))
    case DivGifImage.type:
      self = .divGifImage(try DivGifImage(dictionary: dictionary, context: context))
    case DivText.type:
      self = .divText(try DivText(dictionary: dictionary, context: context))
    case DivSeparator.type:
      self = .divSeparator(try DivSeparator(dictionary: dictionary, context: context))
    case DivContainer.type:
      self = .divContainer(try DivContainer(dictionary: dictionary, context: context))
    case DivGrid.type:
      self = .divGrid(try DivGrid(dictionary: dictionary, context: context))
    case DivGallery.type:
      self = .divGallery(try DivGallery(dictionary: dictionary, context: context))
    case DivPager.type:
      self = .divPager(try DivPager(dictionary: dictionary, context: context))
    case DivTabs.type:
      self = .divTabs(try DivTabs(dictionary: dictionary, context: context))
    case DivTable.type:
      self = .divTable(try DivTable(dictionary: dictionary, context: context))
    case DivState.type:
      self = .divState(try DivState(dictionary: dictionary, context: context))
    case DivCustom.type:
      self = .divCustom(try DivCustom(dictionary: dictionary, context: context))
    case DivIndicator.type:
      self = .divIndicator(try DivIndicator(dictionary: dictionary, context: context))
    case DivSlider.type:
      self = .divSlider(try DivSlider(dictionary: dictionary, context: context))
    case DivSwitch.type:
      self = .divSwitch(try DivSwitch(dictionary: dictionary, context: context))
    case DivInput.type:
      self = .divInput(try DivInput(dictionary: dictionary, context: context))
    case DivSelect.type:
      self = .divSelect(try DivSelect(dictionary: dictionary, context: context))
    case DivVideo.type:
      self = .divVideo(try DivVideo(dictionary: dictionary, context: context))
    case DivCheckbox.type:
      self = .divCheckbox(try DivCheckbox(dictionary: dictionary, context: context))
    case DivCounter.type:
      self = .divCounter(try DivCounter(dictionary: dictionary, context: context))
    case DivRadio.type:
      self = .divRadio(try DivRadio(dictionary: dictionary, context: context))
    case DivProgress.type:
      self = .divProgress(try DivProgress(dictionary: dictionary, context: context))
    case DivWebview.type:
      self = .divWebview(try DivWebview(dictionary: dictionary, context: context))
    case DivBreadcrumb.type:
      self = .divBreadcrumb(try DivBreadcrumb(dictionary: dictionary, context: context))
    case DivGoogleMap.type:
      self = .divGoogleMap(try DivGoogleMap(dictionary: dictionary, context: context))
    case DivAutocomplete.type:
      self = .divAutocomplete(try DivAutocomplete(dictionary: dictionary, context: context))
    case DivChoiceChips.type:
      self = .divChoiceChips(try DivChoiceChips(dictionary: dictionary, context: context))
    case DivRating.type:
      self = .divRating(try DivRating(dictionary: dictionary, context: context))
    default:
      throw DeserializationError.requiredFieldIsMissing(field: "type")
    }
  }
}

#if DEBUG
extension Div: Equatable {
  public static func ==(lhs: Div, rhs: Div) -> Bool {
    switch (lhs, rhs) {
    case let (.divImage(l), .divImage(r)):
      return l == r
    case let (.divGifImage(l), .divGifImage(r)):
      return l == r
    case let (.divText(l), .divText(r)):
      return l == r
    case let (.divSeparator(l), .divSeparator(r)):
      return l == r
    case let (.divContainer(l), .divContainer(r)):
      return l == r
    case let (.divGrid(l), .divGrid(r)):
      return l == r
    case let (.divGallery(l), .divGallery(r)):
      return l == r
    case let (.divPager(l), .divPager(r)):
      return l == r
    case let (.divTabs(l), .divTabs(r)):
      return l == r
    case let (.divTable(l), .divTable(r)):
      return l == r
    case let (.divState(l), .divState(r)):
      return l == r
    case let (.divCustom(l), .divCustom(r)):
      return l == r
    case let (.divIndicator(l), .divIndicator(r)):
      return l == r
    case let (.divSlider(l), .divSlider(r)):
      return l == r
    case let (.divSwitch(l), .divSwitch(r)):
      return l == r
    case let (.divInput(l), .divInput(r)):
      return l == r
    case let (.divSelect(l), .divSelect(r)):
      return l == r
    case let (.divVideo(l), .divVideo(r)):
      return l == r
    case let (.divCheckbox(l), .divCheckbox(r)):
      return l == r
    case let (.divCounter(l), .divCounter(r)):
      return l == r
    case let (.divRadio(l), .divRadio(r)):
      return l == r
    case let (.divProgress(l), .divProgress(r)):
      return l == r
    case let (.divWebview(l), .divWebview(r)):
      return l == r
    case let (.divBreadcrumb(l), .divBreadcrumb(r)):
      return l == r
    case let (.divGoogleMap(l), .divGoogleMap(r)):
      return l == r
    case let (.divAutocomplete(l), .divAutocomplete(r)):
      return l == r
    case let (.divChoiceChips(l), .divChoiceChips(r)):
      return l == r
    case let (.divRating(l), .divRating(r)):
      return l == r
    default:
      return false
    }
  }
}
#endif

extension Div: Serializable {
  @_optimize(size)
  public func toDictionary() -> [String: ValidSerializationValue] {
    return value.toDictionary()
  }
}
