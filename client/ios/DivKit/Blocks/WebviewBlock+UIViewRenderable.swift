#if os(iOS)

import CoreGraphics
import LayoutKit
import UIKit
import VGSL
import WebKit

extension WebviewBlock: UIViewRenderable {
  public static func makeBlockView() -> BlockView {
    WebviewBlockView()
  }

  public func configureBlockView(
    _ view: BlockView,
    observer _: ElementStateObserver?,
    overscrollDelegate _: ScrollDelegate?,
    renderingDelegate _: RenderingDelegate?
  ) {
    let webviewView = view as! WebviewBlockView
    webviewView.configure(
      url: url,
      html: html,
      javascriptEnabled: javascriptEnabled,
      allowScrolling: allowScrolling,
      allowNavigation: allowNavigation,
      scaleToFit: scaleToFit
    )
  }

  public func canConfigureBlockView(_ view: BlockView) -> Bool {
    view is WebviewBlockView
  }
}

final class WebviewBlockView: UIView, BlockViewProtocol, VisibleBoundsTrackingLeaf {
  var effectiveBackgroundColor: UIColor? { backgroundColor }

  private var webView: WKWebView?
  private var currentURL: URL?
  private var currentHTML: String?
  private var allowNavigation = false

  override init(frame: CGRect) {
    super.init(frame: frame)
    clipsToBounds = true
  }

  @available(*, unavailable)
  required init?(coder _: NSCoder) { fatalError() }

  func configure(
    url: URL?,
    html: String?,
    javascriptEnabled: Bool,
    allowScrolling: Bool,
    allowNavigation: Bool,
    scaleToFit: Bool
  ) {
    self.allowNavigation = allowNavigation

    let needsRecreate = webView == nil
    if needsRecreate {
      webView?.removeFromSuperview()
      let configuration = WKWebViewConfiguration()
      let preferences = WKPreferences()
      configuration.preferences = preferences
      let wv = WKWebView(frame: bounds, configuration: configuration)
      wv.navigationDelegate = self
      wv.autoresizingMask = [.flexibleWidth, .flexibleHeight]
      wv.isOpaque = false
      wv.backgroundColor = .clear
      addSubview(wv)
      webView = wv
    }

    guard let webView = webView else { return }

    webView.scrollView.isScrollEnabled = allowScrolling
    webView.scrollView.bounces = allowScrolling

    if scaleToFit {
      webView.scrollView.minimumZoomScale = 0.1
      webView.scrollView.maximumZoomScale = 1.0
    }

    let urlChanged = url != currentURL
    let htmlChanged = html != currentHTML

    if urlChanged || htmlChanged || needsRecreate {
      currentURL = url
      currentHTML = html
      if let url = url {
        webView.load(URLRequest(url: url))
      } else if let html = html {
        let viewport = scaleToFit
          ? "width=device-width, initial-scale=1.0, shrink-to-fit=yes"
          : "width=device-width, initial-scale=1.0"
        let wrappedHTML = """
          <html><head>\
          <meta name="viewport" content="\(viewport)">\
          <style>body { margin: 0; padding: 0; }</style>\
          </head><body>\(html)</body></html>
          """
        webView.loadHTMLString(wrappedHTML, baseURL: nil)
      }
    }
  }

  override func layoutSubviews() {
    super.layoutSubviews()
    webView?.frame = bounds
  }
}

extension WebviewBlockView: WKNavigationDelegate {
  func webView(
    _ webView: WKWebView,
    decidePolicyFor navigationAction: WKNavigationAction,
    decisionHandler: @escaping (WKNavigationActionPolicy) -> Void
  ) {
    if navigationAction.navigationType == .other {
      // Allow initial loads and programmatic loads
      decisionHandler(.allow)
      return
    }

    if allowNavigation {
      decisionHandler(.allow)
    } else {
      decisionHandler(.cancel)
    }
  }

  func webView(
    _ webView: WKWebView,
    didFinish navigation: WKNavigation!
  ) {
    // Load completed successfully
  }

  func webView(
    _ webView: WKWebView,
    didFail navigation: WKNavigation!,
    withError error: Error
  ) {
    // Navigation failed
  }

  func webView(
    _ webView: WKWebView,
    didFailProvisionalNavigation navigation: WKNavigation!,
    withError error: Error
  ) {
    // Provisional navigation failed
  }
}

#endif
