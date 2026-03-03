import CoreGraphics
import Foundation
import LayoutKit
import Serialization
import VGSL

extension DivCounter: DivBlockModeling {
  public func makeBlock(context: DivBlockModelingContext) throws -> Block {
    let context = modifiedContextParentPath(context)
    let resolver = context.expressionResolver

    return try applyBaseProperties(
      to: { try makeBaseBlock(context: context) },
      context: context,
      actionsHolder: nil,
      customAccessibilityParams: CustomAccessibilityParams(
        defaultTraits: .button
      ) { [unowned self] in
        accessibility?.resolveDescription(resolver)
      }
    )
  }

  private func makeBaseBlock(context: DivBlockModelingContext) throws -> Block {
    let resolver = context.expressionResolver

    // Bind to integer variable
    let valueBinding: Binding<Int> = context.makeBinding(
      variableName: counterValueVariable,
      defaultValue: 0
    )
    let currentValue = valueBinding.value

    // Resolve all styling properties
    let minVal = resolveMinValue(resolver)
    let maxVal = resolveMaxValue(resolver)
    let stepVal = resolveStep(resolver)
    let btnColor = resolveButtonColor(resolver)
    let btnSize = CGFloat(resolveButtonSize(resolver))
    let icnColor = resolveIconColor(resolver)
    let disabledBtnColor = resolveDisabledButtonColor(resolver)
    let txtColor = resolveTextColor(resolver)
    let fntSize = CGFloat(resolveFontSize(resolver))
    let fntWeight = resolveFontWeight(resolver)
    let valWidth = CGFloat(resolveValueWidth(resolver))
    let bgColor = resolveBackgroundColor(resolver)
    let bdrColor = resolveBorderColor(resolver)
    let bdrWidth = CGFloat(resolveBorderWidth(resolver))
    let crnRadius = CGFloat(resolveCornerRadius(resolver))
    let pdng = CGFloat(resolvePadding(resolver))
    let enabled = resolveIsEnabled(resolver)

    let isAtMin = currentValue <= minVal
    let isAtMax = currentValue >= maxVal

    // Create minus button
    let minusButtonBlock = makeButtonBlock(
      text: "\u{2212}",
      size: btnSize,
      color: (isAtMin || !enabled) ? disabledBtnColor : btnColor,
      iconColor: icnColor
    )

    // Create value display
    let typo = Typo(size: FontSize(rawValue: fntSize), weight: divFontWeightToFontWeight(fntWeight))
      .with(alignment: .center)
      .with(color: txtColor)
    let valueBlock = TextBlock(
      widthTrait: .fixed(valWidth),
      text: String(currentValue).with(typo: typo)
    )

    // Create plus button
    let plusButtonBlock = makeButtonBlock(
      text: "+",
      size: btnSize,
      color: (isAtMax || !enabled) ? disabledBtnColor : btnColor,
      iconColor: icnColor
    )

    // Add tap actions
    let decrementValue = max(currentValue - stepVal, minVal)
    let incrementValue = min(currentValue + stepVal, maxVal)

    let minusWithAction: Block
    if !isAtMin && enabled {
      var decrementActions = [UserInterfaceAction]()
      decrementActions.append(makeSetVariableAction(
        variableName: counterValueVariable,
        value: String(decrementValue),
        logId: "counter_decrement",
        context: context
      ))
      if let actions = onDecrementActions {
        decrementActions.append(contentsOf: actions.uiActions(context: context))
      }
      if let actions = onValueChangeActions {
        decrementActions.append(contentsOf: actions.uiActions(context: context))
      }
      minusWithAction = minusButtonBlock.addingDecorations(
        actions: NonEmptyArray(decrementActions)!
      )
    } else {
      minusWithAction = minusButtonBlock
    }

    let plusWithAction: Block
    if !isAtMax && enabled {
      var incrementActions = [UserInterfaceAction]()
      incrementActions.append(makeSetVariableAction(
        variableName: counterValueVariable,
        value: String(incrementValue),
        logId: "counter_increment",
        context: context
      ))
      if let actions = onIncrementActions {
        incrementActions.append(contentsOf: actions.uiActions(context: context))
      }
      if let actions = onValueChangeActions {
        incrementActions.append(contentsOf: actions.uiActions(context: context))
      }
      plusWithAction = plusButtonBlock.addingDecorations(
        actions: NonEmptyArray(incrementActions)!
      )
    } else {
      plusWithAction = plusButtonBlock
    }

    // Compose into horizontal container
    let container = try ContainerBlock(
      layoutDirection: .horizontal,
      widthTrait: .intrinsic,
      heightTrait: .fixed(btnSize + pdng * 2),
      verticalChildrenAlignment: .center,
      gaps: [pdng, 4, 4, pdng],
      children: [minusWithAction, valueBlock, plusWithAction]
    )

    // Add container background with pill shape
    return container.addingDecorations(
      boundary: .cornerRadius(crnRadius),
      border: BlockBorder(color: bdrColor, width: bdrWidth),
      backgroundColor: bgColor
    )
  }

  private func makeButtonBlock(
    text: String,
    size: CGFloat,
    color: Color,
    iconColor: Color
  ) -> Block {
    let typo = Typo(size: FontSize(rawValue: size * 0.5), weight: .bold)
      .with(alignment: .center)
      .with(color: iconColor)
    let textBlock = TextBlock(
      widthTrait: .fixed(size),
      text: text.with(typo: typo)
    )

    return LayeredBlock(
      widthTrait: .fixed(size),
      heightTrait: .fixed(size),
      horizontalChildrenAlignment: .center,
      verticalChildrenAlignment: .center,
      children: [
        EmptyBlock(
          widthTrait: .fixed(size),
          heightTrait: .fixed(size)
        ).addingDecorations(
          boundary: .cornerRadius(size / 2),
          backgroundColor: color
        ),
        textBlock,
      ]
    )
  }

  private func makeSetVariableAction(
    variableName: String,
    value: String,
    logId: String,
    context: DivBlockModelingContext
  ) -> UserInterfaceAction {
    let encodedName = variableName.addingPercentEncoding(
      withAllowedCharacters: .urlQueryAllowed
    ) ?? variableName
    let encodedValue = value.addingPercentEncoding(
      withAllowedCharacters: .urlQueryAllowed
    ) ?? value
    let actionURLString = "div-action://set_variable?name=\(encodedName)&value=\(encodedValue)"
    let actionURL = Foundation.URL(string: actionURLString)!

    let actionJSON: JSONObject = .object([
      "log_id": .string(logId),
      "url": .string(actionURLString),
    ])

    return UserInterfaceAction(
      payload: .divAction(
        params: UserInterfaceAction.DivActionParams(
          action: actionJSON,
          path: context.path,
          source: .tap,
          url: actionURL
        )
      ),
      path: context.path + logId
    )
  }

  private func divFontWeightToFontWeight(_ weight: DivFontWeight) -> FontWeight {
    switch weight {
    case .light:
      return .light
    case .regular:
      return .regular
    case .medium:
      return .medium
    case .bold:
      return .bold
    }
  }
}
