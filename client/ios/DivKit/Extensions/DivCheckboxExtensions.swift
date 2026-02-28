import CoreGraphics
import Foundation
import LayoutKit
import Serialization
import VGSL

extension DivCheckbox: DivBlockModeling {
  public func makeBlock(context: DivBlockModelingContext) throws -> Block {
    let context = modifiedContextParentPath(context)
    let resolver = context.expressionResolver

    return try applyBaseProperties(
      to: { makeBaseBlock(context: context) },
      context: context,
      actionsHolder: nil,
      customAccessibilityParams: CustomAccessibilityParams(
        defaultTraits: .button
      ) { [unowned self] in
        accessibility?.resolveDescription(resolver)
      }
    )
  }

  private func makeBaseBlock(context: DivBlockModelingContext) -> Block {
    let resolver = context.expressionResolver

    let checkedBinding: Binding<Bool> = context.makeBinding(
      variableName: isCheckedVariable,
      defaultValue: false
    )
    let isChecked = checkedBinding.value

    let onColor = resolveOnColor(resolver)
    let offColor = resolveOffColor(resolver)
    let checkMarkColor = resolveCheckMarkColor(resolver)

    let boxSize: CGFloat = 22
    let cornerRadius: CGFloat = 4
    let borderWidth: CGFloat = 2

    let checkboxBlock: Block
    if isChecked {
      let checkmark = TextBlock(
        widthTrait: .intrinsic,
        text: "\u{2713}".with(
          typo: Typo(size: FontSize(rawValue: 14), weight: .bold)
            .with(color: checkMarkColor)
        )
      )

      checkboxBlock = LayeredBlock(
        widthTrait: .fixed(boxSize),
        heightTrait: .fixed(boxSize),
        horizontalChildrenAlignment: .center,
        verticalChildrenAlignment: .center,
        children: [
          EmptyBlock(
            widthTrait: .fixed(boxSize),
            heightTrait: .fixed(boxSize)
          ).addingDecorations(
            boundary: .cornerRadius(cornerRadius),
            backgroundColor: onColor
          ),
          checkmark,
        ]
      )
    } else {
      checkboxBlock = EmptyBlock(
        widthTrait: .fixed(boxSize),
        heightTrait: .fixed(boxSize)
      ).addingDecorations(
        boundary: .cornerRadius(cornerRadius),
        border: BlockBorder(
          color: offColor,
          width: borderWidth
        )
      )
    }

    let newValue = isChecked ? "false" : "true"
    let encodedName = isCheckedVariable.addingPercentEncoding(
      withAllowedCharacters: .urlQueryAllowed
    ) ?? isCheckedVariable
    let actionURLString = "div-action://set_variable?name=\(encodedName)&value=\(newValue)"
    let actionURL = Foundation.URL(string: actionURLString)!

    let actionJSON: JSONObject = .object([
      "log_id": .string("checkbox_toggle"),
      "url": .string(actionURLString),
    ])

    let tapAction = UserInterfaceAction(
      payload: .divAction(
        params: UserInterfaceAction.DivActionParams(
          action: actionJSON,
          path: context.path,
          source: .tap,
          url: actionURL
        )
      ),
      path: context.path + "checkbox_toggle"
    )

    return checkboxBlock.addingDecorations(
      actions: NonEmptyArray(tapAction)
    )
  }
}
