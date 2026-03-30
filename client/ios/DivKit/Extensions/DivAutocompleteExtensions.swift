import CoreFoundation
import CoreGraphics
import Foundation
import LayoutKit
import VGSL

extension DivAutocomplete: DivBlockModeling {
  public func makeBlock(context: DivBlockModelingContext) throws -> Block {
    let context = modifiedContextParentPath(context)
    return try applyBaseProperties(
      to: { try makeBaseBlock(context: context) },
      context: context,
      actionsHolder: nil
    )
  }

  private func makeBaseBlock(context: DivBlockModelingContext) throws -> Block {
    let expressionResolver = context.expressionResolver

    let font = context.font(resolveFontParams(expressionResolver))
    var typo = Typo(font: font)

    let kern = CGFloat(resolveLetterSpacing(expressionResolver))
    if !kern.isApproximatelyEqualTo(0) {
      typo = typo.kerned(kern)
    }

    if let lineHeight = resolveLineHeight(expressionResolver) {
      typo = typo.with(height: CGFloat(lineHeight))
    }

    let resolvedHintColor: Color = resolveHintColor(expressionResolver)
    let hintTypo = typo.with(color: resolvedHintColor)
    let hintValue = resolveHintText(expressionResolver) ?? ""

    let resolvedColor: Color = resolveTextColor(expressionResolver)
    let textTypo = typo.with(color: resolvedColor)

    let textBinding: Binding<String> = context
      .makeBinding(variableName: textVariable, defaultValue: "")

    let valueBinding: Binding<String>? = valueVariable.map {
      context.makeBinding(variableName: $0, defaultValue: "")
    }

    let onFocusActions = focus?.onFocus?.uiActions(context: context) ?? []
    let onBlurActions = focus?.onBlur?.uiActions(context: context) ?? []
    let resolvedEnterKeyActions = enterKeyActions?.uiActions(context: context) ?? []
    let resolvedTextChangeActions = textChangeActions?.uiActions(context: context) ?? []
    let resolvedSelectionActions = selectionActions?.uiActions(context: context) ?? []

    let isFocused = context.blockStateStorage.isFocused(path: context.path)

    let suggestions = parseSuggestions(context: context)

    let keyboardType = resolveKeyboardType(expressionResolver)

    let blockStateStorage = context.blockStateStorage
    if isFocused { blockStateStorage.setInputFocused() }
    let shouldClearFocus = Variable<Bool> { [weak blockStateStorage] in
      blockStateStorage.map { !$0.isInputFocused } ?? true
    }

    return AutocompleteBlock(
      widthTrait: resolveContentWidthTrait(context),
      heightTrait: resolveContentHeightTrait(context),
      hint: hintValue.with(typo: hintTypo),
      textValue: textBinding,
      textTypo: textTypo,
      suggestionTextColor: resolveSuggestionTextColor(expressionResolver),
      highlightColor: resolveHighlightColor(expressionResolver),
      suggestions: suggestions,
      maxVisibleSuggestions: resolveMaxVisibleSuggestions(expressionResolver),
      minQueryLength: resolveMinQueryLength(expressionResolver),
      dismissOnSelection: resolveDismissOnSelection(expressionResolver),
      dismissOnBlur: resolveDismissOnBlur(expressionResolver),
      dismissOnEmpty: resolveDismissOnEmpty(expressionResolver),
      selectAllOnFocus: resolveSelectAllOnFocus(expressionResolver),
      enterKeyType: resolveEnterKeyType(expressionResolver).blockEnterKeyType,
      inputType: keyboardType.autocompleteInputType,
      path: context.path,
      isFocused: isFocused,
      isEnabled: resolveIsEnabled(expressionResolver),
      onFocusActions: onFocusActions,
      onBlurActions: onBlurActions,
      enterKeyActions: resolvedEnterKeyActions,
      textChangeActions: resolvedTextChangeActions,
      selectionActions: resolvedSelectionActions,
      parentScrollView: context.parentScrollView,
      layoutDirection: context.layoutDirection,
      paddings: paddings?.resolve(context),
      maxLength: resolveMaxLength(expressionResolver),
      valueBinding: valueBinding,
      shouldClearFocus: shouldClearFocus
    )
  }

  private func parseSuggestions(
    context: DivBlockModelingContext
  ) -> [AutocompleteBlock.SuggestionItem] {
    let variableName = DivVariableName(rawValue: suggestionsVariable)
    guard let suggestionsArray: DivArray = context.variablesStorage.getVariableValue(
      path: context.path,
      name: variableName
    ) else {
      return []
    }

    return suggestionsArray.compactMap { item -> AutocompleteBlock.SuggestionItem? in
      guard let dict = item as? [String: Any] else { return nil }
      let value = dict["value"] as? String
      guard let value else { return nil }
      let text = dict["text"] as? String
      let secondaryText = dict["secondary_text"] as? String
      return AutocompleteBlock.SuggestionItem(
        value: value,
        text: text,
        secondaryText: secondaryText
      )
    }
  }
}

extension DivAutocomplete: FontParamsProvider {}

extension DivAutocomplete.EnterKeyType {
  fileprivate var blockEnterKeyType: AutocompleteBlock.EnterKeyType {
    switch self {
    case .default: .default
    case .go: .go
    case .search: .search
    case .send: .send
    case .done: .done
    }
  }
}

extension DivAutocomplete.KeyboardType {
  fileprivate var autocompleteInputType: TextInputBlock.InputType {
    switch self {
    case .singleLineText, .multiLineText, .password:
      .default
    case .phone:
      .keyboard(.phonePad)
    case .number:
      .keyboard(.decimalPad)
    case .email:
      .keyboard(.emailAddress)
    case .uri:
      .keyboard(.URL)
    }
  }
}
