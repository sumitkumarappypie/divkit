import LayoutKit

extension DivCheckbox: DivBlockModeling {
  public func makeBlock(context: DivBlockModelingContext) throws -> Block {
    let context = modifiedContextParentPath(context)
    let resolver = context.expressionResolver
    let checkedVariable = context.makeBinding(
      variableName: isCheckedVariable,
      defaultValue: false
    )

    return try applyBaseProperties(
      to: {
        SwitchBlock(
          widthTrait: resolveWidthTrait(context),
          heightTrait: resolveHeightTrait(context),
          on: checkedVariable,
          enabled: resolveIsEnabled(resolver),
          action: nil,
          onTintColor: resolveOnColor(resolver)
        )
      },
      context: context,
      actionsHolder: nil,
      customAccessibilityParams: CustomAccessibilityParams(
        defaultTraits: .button
      ) { [unowned self] in
        accessibility?.resolveDescription(resolver)
      }
    )
  }
}
