#if os(iOS)
import UIKit
import VGSL

extension AutocompleteBlock {
  public static func makeBlockView() -> BlockView {
    AutocompleteBlockView()
  }

  public func configureBlockView(
    _ view: BlockView,
    observer: ElementStateObserver?,
    overscrollDelegate _: ScrollDelegate?,
    renderingDelegate _: RenderingDelegate?
  ) {
    let autocompleteView = view as! AutocompleteBlockView
    autocompleteView.setLayoutDirection(layoutDirection)
    autocompleteView.setEnterKeyType(enterKeyType)
    autocompleteView.setInputType(inputType)
    autocompleteView.setHighlightColor(highlightColor)
    autocompleteView.setSelectAllOnFocus(selectAllOnFocus)
    autocompleteView.setParentScrollView(parentScrollView)
    autocompleteView.setText(
      textValue: textValue,
      typo: textTypo
    )
    autocompleteView.setHint(hint)
    autocompleteView.setSuggestions(
      suggestions,
      textColor: suggestionTextColor,
      maxVisible: maxVisibleSuggestions,
      minQueryLength: minQueryLength
    )
    autocompleteView.setDismissBehavior(
      onSelection: dismissOnSelection,
      onBlur: dismissOnBlur,
      onEmpty: dismissOnEmpty
    )
    autocompleteView.setIsFocused(isFocused, shouldClear: shouldClearFocus.value)
    autocompleteView.setOnFocusActions(onFocusActions)
    autocompleteView.setOnBlurActions(onBlurActions)
    autocompleteView.setEnterKeyActions(enterKeyActions)
    autocompleteView.setTextChangeActions(textChangeActions)
    autocompleteView.setSelectionActions(selectionActions)
    autocompleteView.setValueBinding(valueBinding)
    autocompleteView.setPath(path)
    autocompleteView.setObserver(observer)
    autocompleteView.setIsEnabled(isEnabled)
    autocompleteView.setMaxLength(maxLength)
    autocompleteView.paddings = paddings ?? .zero
  }

  public func canConfigureBlockView(_ view: BlockView) -> Bool {
    view is AutocompleteBlockView
  }
}

private final class AutocompleteBlockView: BlockView, VisibleBoundsTrackingLeaf {
  var paddings: EdgeInsets = .zero

  var layoutReporter: LayoutReporter?

  private let textField = UITextField()
  private let hintLabel = UILabel()
  private let dropdownTable = UITableView()
  private let dropdownContainer = UIView()

  private weak var parentScrollView: ScrollView?
  private var textValue: Binding<String> = .zero
  private var valueBinding: Binding<String>?
  private var selectAllOnFocus = false
  private var onFocusActions: [UserInterfaceAction] = []
  private var onBlurActions: [UserInterfaceAction] = []
  private var enterKeyActions: [UserInterfaceAction] = []
  private var textChangeActions: [UserInterfaceAction] = []
  private var selectionActions: [UserInterfaceAction] = []
  private var path: UIElementPath?
  private weak var observer: ElementStateObserver?
  private var typo: Typo?
  private var suggestionTextColor: Color = Color.colorWithARGBHexCode(0xFF000000)

  private var allSuggestions: [AutocompleteBlock.SuggestionItem] = []
  private var filteredSuggestions: [AutocompleteBlock.SuggestionItem] = []
  private var maxVisibleSuggestions: Int = 5
  private var minQueryLength: Int = 1
  private var dismissOnSelection = true
  private var dismissOnBlur = true
  private var dismissOnEmpty = true
  private var isInputFocused = false
  private var maxLength: Int?

  private static let cellReuseIdentifier = "AutocompleteSuggestionCell"
  private static let suggestionRowHeight: CGFloat = 44

  var effectiveBackgroundColor: UIColor? { backgroundColor }

  override init(frame: CGRect) {
    super.init(frame: frame)

    textField.backgroundColor = .clear
    textField.delegate = self
    textField.addTarget(self, action: #selector(textFieldDidChange), for: .editingChanged)
    textField.contentVerticalAlignment = .center
    textField.returnKeyType = .default

    hintLabel.backgroundColor = .clear
    hintLabel.numberOfLines = 1
    hintLabel.isUserInteractionEnabled = false
    hintLabel.isHidden = true

    dropdownContainer.backgroundColor = .white
    dropdownContainer.layer.borderColor = UIColor.lightGray.cgColor
    dropdownContainer.layer.borderWidth = 1.0 / UIScreen.main.scale
    dropdownContainer.layer.shadowColor = UIColor.black.cgColor
    dropdownContainer.layer.shadowOpacity = 0.15
    dropdownContainer.layer.shadowOffset = CGSize(width: 0, height: 2)
    dropdownContainer.layer.shadowRadius = 4
    dropdownContainer.layer.cornerRadius = 4
    dropdownContainer.clipsToBounds = false
    dropdownContainer.isHidden = true

    dropdownTable.dataSource = self
    dropdownTable.delegate = self
    dropdownTable.separatorInset = .zero
    dropdownTable.register(UITableViewCell.self, forCellReuseIdentifier: Self.cellReuseIdentifier)
    dropdownTable.clipsToBounds = true
    dropdownTable.layer.cornerRadius = 4

    dropdownContainer.addSubview(dropdownTable)

    addSubview(textField)
    addSubview(hintLabel)
  }

  @available(*, unavailable)
  required init?(coder _: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }

  override func layoutSubviews() {
    super.layoutSubviews()
    layoutReporter?.willLayoutSubviews()

    let insetBounds = bounds.inset(by: UIEdgeInsets(
      top: paddings.top,
      left: paddings.left,
      bottom: paddings.bottom,
      right: paddings.right
    ))
    textField.frame = insetBounds

    hintLabel.frame.size = hintLabel.sizeThatFits(insetBounds.size)
    hintLabel.frame.origin = insetBounds.origin

    updateDropdownPosition()
    layoutReporter?.didLayoutSubviews()
  }

  override func didMoveToWindow() {
    if window != nil {
      if isInputFocused {
        DispatchQueue.main.async {
          self.textField.becomeFirstResponder()
        }
      }
    }
  }

  override func point(inside point: CGPoint, with event: UIEvent?) -> Bool {
    if !dropdownContainer.isHidden {
      let dropdownPoint = convert(point, to: dropdownContainer)
      if dropdownContainer.bounds.contains(dropdownPoint) {
        return true
      }
    }
    return super.point(inside: point, with: event)
  }

  override func hitTest(_ point: CGPoint, with event: UIEvent?) -> UIView? {
    if !dropdownContainer.isHidden {
      let dropdownPoint = convert(point, to: dropdownContainer)
      if let hitView = dropdownContainer.hitTest(dropdownPoint, with: event) {
        return hitView
      }
    }
    return super.hitTest(point, with: event)
  }

  func setLayoutDirection(_ layoutDirection: UserInterfaceLayoutDirection) {
    switch layoutDirection {
    case .leftToRight:
      textField.textAlignment = .left
    case .rightToLeft:
      textField.textAlignment = .right
    @unknown default:
      textField.textAlignment = .natural
    }
  }

  func setEnterKeyType(_ type: AutocompleteBlock.EnterKeyType) {
    let uiType: UIReturnKeyType
    switch type {
    case .default: uiType = .default
    case .go: uiType = .go
    case .search: uiType = .search
    case .send: uiType = .send
    case .done: uiType = .done
    }
    if textField.returnKeyType != uiType {
      textField.returnKeyType = uiType
      textField.reloadInputViews()
    }
  }

  func setInputType(_ type: TextInputBlock.InputType) {
    switch type {
    case let .keyboard(keyboardType):
      switch keyboardType {
      case .default:
        textField.keyboardType = .default
      case .URL:
        textField.keyboardType = .URL
      case .phonePad:
        textField.keyboardType = .phonePad
      case .namePhonePad:
        textField.keyboardType = .namePhonePad
      case .emailAddress:
        textField.keyboardType = .emailAddress
      case .decimalPad:
        textField.keyboardType = .decimalPad
      }
    case .selection:
      break
    }
  }

  func setHighlightColor(_ color: Color?) {
    textField.tintColor = color?.systemColor
  }

  func setSelectAllOnFocus(_ selectAllOnFocus: Bool) {
    self.selectAllOnFocus = selectAllOnFocus
  }

  func setParentScrollView(_ parentScrollView: ScrollView?) {
    self.parentScrollView = parentScrollView
  }

  func setText(
    textValue: Binding<String>,
    typo: Typo
  ) {
    self.textValue = textValue
    self.typo = typo

    let text = textValue.value
    textField.attributedText = text.with(typo: typo)
    updateHintVisibility()
  }

  func setHint(_ hint: NSAttributedString) {
    hintLabel.attributedText = hint
    updateHintVisibility()
  }

  func setSuggestions(
    _ suggestions: [AutocompleteBlock.SuggestionItem],
    textColor: Color,
    maxVisible: Int,
    minQueryLength: Int
  ) {
    allSuggestions = suggestions
    suggestionTextColor = textColor
    maxVisibleSuggestions = maxVisible
    self.minQueryLength = minQueryLength
    filterSuggestions()
  }

  func setDismissBehavior(onSelection: Bool, onBlur: Bool, onEmpty: Bool) {
    dismissOnSelection = onSelection
    dismissOnBlur = onBlur
    dismissOnEmpty = onEmpty
  }

  func setIsFocused(_ isFocused: Bool, shouldClear: Bool) {
    isInputFocused = isFocused
    if isFocused {
      textField.becomeFirstResponder()
    } else if shouldClear {
      textField.resignFirstResponder()
    }
  }

  func setOnFocusActions(_ actions: [UserInterfaceAction]) {
    onFocusActions = actions
  }

  func setOnBlurActions(_ actions: [UserInterfaceAction]) {
    onBlurActions = actions
  }

  func setEnterKeyActions(_ actions: [UserInterfaceAction]) {
    enterKeyActions = actions
  }

  func setTextChangeActions(_ actions: [UserInterfaceAction]) {
    textChangeActions = actions
  }

  func setSelectionActions(_ actions: [UserInterfaceAction]) {
    selectionActions = actions
  }

  func setValueBinding(_ binding: Binding<String>?) {
    valueBinding = binding
  }

  func setPath(_ path: UIElementPath) {
    self.path = path
  }

  func setObserver(_ observer: ElementStateObserver?) {
    self.observer = observer
  }

  func setIsEnabled(_ isEnabled: Bool) {
    textField.isEnabled = isEnabled
  }

  func setMaxLength(_ maxLength: Int?) {
    self.maxLength = maxLength
  }

  // MARK: - Dropdown Management

  private func filterSuggestions() {
    let query = textValue.value
    if query.count < minQueryLength {
      filteredSuggestions = []
    } else {
      let lowercasedQuery = query.lowercased()
      filteredSuggestions = allSuggestions.filter {
        $0.displayText.lowercased().contains(lowercasedQuery)
      }
    }
    dropdownTable.reloadData()
    updateDropdownVisibility()
  }

  private func updateDropdownVisibility() {
    let shouldShow = !filteredSuggestions.isEmpty && isInputFocused
    if shouldShow {
      showDropdown()
    } else {
      hideDropdown()
    }
  }

  private func showDropdown() {
    guard dropdownContainer.isHidden else { return }
    dropdownContainer.isHidden = false

    // Add dropdown to a parent that can show outside our bounds
    if dropdownContainer.superview == nil {
      if let windowScene = window?.windowScene,
         let keyWindow = windowScene.windows.first(where: { $0.isKeyWindow }) {
        keyWindow.addSubview(dropdownContainer)
      } else {
        superview?.addSubview(dropdownContainer)
      }
    }
    updateDropdownPosition()
  }

  private func hideDropdown() {
    dropdownContainer.isHidden = true
  }

  private func updateDropdownPosition() {
    guard !dropdownContainer.isHidden else { return }

    let rowCount = min(filteredSuggestions.count, maxVisibleSuggestions)
    let dropdownHeight = CGFloat(rowCount) * Self.suggestionRowHeight

    // Convert our frame to the coordinate space of the dropdown's superview
    guard let targetSuperview = dropdownContainer.superview else { return }
    let frameInTarget = convert(bounds, to: targetSuperview)

    let spaceBelow = targetSuperview.bounds.height - frameInTarget.maxY
    let showBelow = spaceBelow >= dropdownHeight || spaceBelow >= frameInTarget.minY

    let dropdownY: CGFloat
    if showBelow {
      dropdownY = frameInTarget.maxY
    } else {
      dropdownY = frameInTarget.minY - dropdownHeight
    }

    dropdownContainer.frame = CGRect(
      x: frameInTarget.minX,
      y: dropdownY,
      width: frameInTarget.width,
      height: dropdownHeight
    )
    dropdownTable.frame = dropdownContainer.bounds
  }

  private func updateHintVisibility() {
    let text = textField.attributedText?.string ?? ""
    hintLabel.isHidden = !text.isEmpty
  }

  private func handleTextChange() {
    let text = textField.attributedText?.string ?? ""
    textValue.value = text
    updateHintVisibility()
    filterSuggestions()

    if text.isEmpty && dismissOnEmpty {
      hideDropdown()
    }

    if text.count >= minQueryLength {
      fireActions(textChangeActions)
    }
  }

  private func selectSuggestion(_ suggestion: AutocompleteBlock.SuggestionItem) {
    let displayText = suggestion.displayText
    textValue.value = displayText

    if let typo {
      textField.attributedText = displayText.with(typo: typo)
    } else {
      textField.text = displayText
    }
    updateHintVisibility()

    valueBinding?.value = suggestion.value

    fireActions(selectionActions)

    if dismissOnSelection {
      hideDropdown()
      filteredSuggestions = []
      dropdownTable.reloadData()
    }
  }

  private func fireActions(_ actions: [UserInterfaceAction]) {
    guard let observer, let path else { return }
    for action in actions {
      observer.elementStateChanged(path, state: action)
    }
  }

  @objc private func textFieldDidChange() {
    handleTextChange()
  }
}

extension AutocompleteBlockView: UITextFieldDelegate {
  func textFieldDidBeginEditing(_: UITextField) {
    isInputFocused = true
    if selectAllOnFocus {
      textField.selectAll(nil)
    }
    filterSuggestions()

    guard let observer, let path else { return }
    for action in onFocusActions {
      observer.elementStateChanged(path, state: action)
    }
    observer.elementStateChanged(path, state: TextFieldFocusState(isFocused: true))
  }

  func textFieldDidEndEditing(_: UITextField) {
    isInputFocused = false
    if dismissOnBlur {
      hideDropdown()
    }

    guard let observer, let path else { return }
    for action in onBlurActions {
      observer.elementStateChanged(path, state: action)
    }
    observer.elementStateChanged(path, state: TextFieldFocusState(isFocused: false))
  }

  func textFieldShouldReturn(_: UITextField) -> Bool {
    guard let observer, let path else { return true }
    for action in enterKeyActions {
      observer.elementStateChanged(path, state: action)
    }
    return true
  }

  func textField(
    _ textField: UITextField,
    shouldChangeCharactersIn range: NSRange,
    replacementString string: String
  ) -> Bool {
    guard let maxLength else { return true }
    let currentText = textField.text ?? ""
    let newLength = currentText.count + string.count - range.length
    return newLength <= maxLength
  }
}

extension AutocompleteBlockView: UITableViewDataSource {
  func tableView(_: UITableView, numberOfRowsInSection _: Int) -> Int {
    min(filteredSuggestions.count, maxVisibleSuggestions)
  }

  func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
    let cell = tableView.dequeueReusableCell(
      withIdentifier: Self.cellReuseIdentifier,
      for: indexPath
    )
    let suggestion = filteredSuggestions[indexPath.row]
    cell.textLabel?.text = suggestion.displayText
    cell.textLabel?.textColor = suggestionTextColor.systemColor
    cell.detailTextLabel?.text = suggestion.secondaryText
    cell.backgroundColor = .white
    cell.selectionStyle = .gray
    return cell
  }
}

extension AutocompleteBlockView: UITableViewDelegate {
  func tableView(_: UITableView, didSelectRowAt indexPath: IndexPath) {
    let suggestion = filteredSuggestions[indexPath.row]
    selectSuggestion(suggestion)
  }

  func tableView(_: UITableView, heightForRowAt _: IndexPath) -> CGFloat {
    Self.suggestionRowHeight
  }
}

private struct TextFieldFocusState {
  let isFocused: Bool
}
#endif
