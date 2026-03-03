import CoreGraphics
import LayoutKit
import VGSL

extension DivWebview: DivBlockModeling {
  public func makeBlock(context: DivBlockModelingContext) throws -> Block {
    let context = modifiedContextParentPath(context)
    return try applyBaseProperties(
      to: { try makeBaseBlock(context: context) },
      context: context,
      actionsHolder: nil
    )
  }

  private func makeBaseBlock(context: DivBlockModelingContext) throws -> Block {
    let resolver = context.expressionResolver
    let aspectRatio = aspect.resolveAspectRatio(resolver)

    let resolvedUrl = resolveUrl(resolver)
    let resolvedHtml = resolveHtml(resolver)
    let resolvedJavascriptEnabled = resolveJavascriptEnabled(resolver)
    let resolvedAllowScrolling = resolveAllowScrolling(resolver)
    let resolvedAllowNavigation = resolveAllowNavigation(resolver)
    let resolvedScaleToFit = resolveScaleToFit(resolver)

    let webviewBlock = WebviewBlock(
      url: resolvedUrl,
      html: resolvedHtml,
      javascriptEnabled: resolvedJavascriptEnabled,
      allowScrolling: resolvedAllowScrolling,
      allowNavigation: resolvedAllowNavigation,
      scaleToFit: resolvedScaleToFit,
      widthTrait: width.resolveLayoutTrait(resolver),
      heightTrait: height.resolveHeightLayoutTrait(resolver, aspectRatio: aspectRatio)
    )

    if let aspectRatio {
      return AspectBlock(content: webviewBlock, aspectRatio: aspectRatio)
    }

    return webviewBlock
  }
}
