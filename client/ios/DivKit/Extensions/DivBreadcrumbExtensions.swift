import CoreGraphics
import LayoutKit
import VGSL

extension DivBreadcrumb: DivBlockModeling {
  public func makeBlock(context: DivBlockModelingContext) throws -> Block {
    let context = modifiedContextParentPath(context)
    return try applyBaseProperties(
      to: { try makeBaseBlock(context: context) },
      context: context,
      actionsHolder: nil
    )
  }

  private func makeBaseBlock(context: DivBlockModelingContext) throws -> Block {
    // Breadcrumb is not yet fully implemented; render as empty text placeholder
    let expressionResolver = context.expressionResolver
    let text = (crumbs ?? []).compactMap { $0.resolveTitle(expressionResolver) }
      .joined(separator: " > ")
    return TextBlock(
      widthTrait: resolveContentWidthTrait(context),
      text: text.with(typo: Typo(size: .textM, weight: .regular))
    )
  }
}
