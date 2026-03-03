package com.yandex.div.internal.widget

import android.annotation.SuppressLint
import android.content.Context
import android.net.Uri
import android.view.ViewGroup.LayoutParams.MATCH_PARENT
import android.webkit.WebResourceError
import android.webkit.WebResourceRequest
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import android.graphics.Color
import android.widget.FrameLayout

internal open class DivWebViewWidget(context: Context) : FrameLayout(context) {

    private var webView: WebView? = null

    var onLoadCallback: (() -> Unit)? = null
    var onErrorCallback: (() -> Unit)? = null

    private var allowNavigation: Boolean = false

    @SuppressLint("SetJavaScriptEnabled")
    fun configure(
        url: String?,
        html: String?,
        jsEnabled: Boolean,
        allowScrolling: Boolean,
        allowNavigation: Boolean,
        scaleToFit: Boolean
    ) {
        this.allowNavigation = allowNavigation

        val wv = webView ?: createWebView().also {
            webView = it
            addView(it, LayoutParams(MATCH_PARENT, MATCH_PARENT))
        }

        wv.settings.apply {
            javaScriptEnabled = jsEnabled
            allowFileAccess = false
            allowContentAccess = false
            mixedContentMode = WebSettings.MIXED_CONTENT_NEVER_ALLOW
            if (scaleToFit) {
                loadWithOverviewMode = true
                useWideViewPort = true
            } else {
                loadWithOverviewMode = false
                useWideViewPort = false
            }
        }

        wv.isVerticalScrollBarEnabled = allowScrolling
        wv.isHorizontalScrollBarEnabled = allowScrolling

        if (!allowScrolling) {
            wv.setOnTouchListener { _, _ -> false }
        } else {
            wv.setOnTouchListener(null)
        }

        when {
            url != null && isValidUrl(url) -> wv.loadUrl(url)
            html != null -> wv.loadDataWithBaseURL(null, html, "text/html", "UTF-8", null)
        }
    }

    private fun createWebView(): WebView {
        return WebView(context).apply {
            setBackgroundColor(Color.TRANSPARENT)
            webViewClient = object : WebViewClient() {
                override fun onPageFinished(view: WebView?, url: String?) {
                    super.onPageFinished(view, url)
                    onLoadCallback?.invoke()
                }

                override fun onReceivedError(
                    view: WebView?,
                    request: WebResourceRequest?,
                    error: WebResourceError?
                ) {
                    super.onReceivedError(view, request, error)
                    if (request?.isForMainFrame == true) {
                        onErrorCallback?.invoke()
                    }
                }

                override fun shouldOverrideUrlLoading(
                    view: WebView?,
                    request: WebResourceRequest?
                ): Boolean {
                    if (!allowNavigation) {
                        return true
                    }
                    val requestUrl = request?.url?.toString() ?: return true
                    return !isValidUrl(requestUrl)
                }
            }
        }
    }

    open fun release() {
        webView?.let {
            removeView(it)
            it.stopLoading()
            it.destroy()
        }
        webView = null
        onLoadCallback = null
        onErrorCallback = null
    }

    private fun isValidUrl(url: String): Boolean {
        return try {
            val uri = Uri.parse(url)
            val scheme = uri.scheme?.lowercase()
            scheme == "http" || scheme == "https"
        } catch (e: Exception) {
            false
        }
    }
}
