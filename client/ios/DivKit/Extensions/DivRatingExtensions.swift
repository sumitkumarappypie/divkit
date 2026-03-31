import CoreFoundation
import CoreGraphics
import Foundation
import LayoutKit
import VGSL

extension DivRating: DivBlockModeling {
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

    let ratingValueBinding: Binding<String> = context
      .makeBinding(variableName: ratingVariable, defaultValue: "0")

    let resolvedRatingChangeActions = ratingChangeActions?.uiActions(context: context) ?? []

    let ratingIconUrl = ratingIcon?.resolveImageUrl(expressionResolver)

    return RatingBlock(
      widthTrait: resolveContentWidthTrait(context),
      heightTrait: resolveContentHeightTrait(context),
      ratingValue: ratingValueBinding,
      maxRating: resolveMaxRating(expressionResolver),
      step: CGFloat(resolveStep(expressionResolver)),
      isInteractive: resolveIsInteractive(expressionResolver),
      iconSize: CGFloat(resolveIconSize(expressionResolver)),
      iconSpacing: CGFloat(resolveIconSpacing(expressionResolver)),
      iconPadding: iconPadding?.resolve(context),
      activeColor: resolveActiveColor(expressionResolver),
      inactiveColor: resolveInactiveColor(expressionResolver),
      borderColor: resolveBorderColor(expressionResolver),
      disabledColor: resolveDisabledColor(expressionResolver),
      ratingChangeActions: resolvedRatingChangeActions,
      ratingIconUrl: ratingIconUrl,
      path: context.path
    )
  }
}
