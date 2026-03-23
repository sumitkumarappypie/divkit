package com.yandex.div.internal.widget

import android.annotation.SuppressLint
import android.content.Context
import android.graphics.Color
import android.view.ViewGroup.LayoutParams.MATCH_PARENT
import android.webkit.WebResourceError
import android.webkit.WebResourceRequest
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.FrameLayout

internal open class DivGoogleMapWidget(context: Context) : FrameLayout(context) {

    private var webView: WebView? = null

    var onReadyCallback: (() -> Unit)? = null
    var onErrorCallback: (() -> Unit)? = null

    @SuppressLint("SetJavaScriptEnabled")
    fun configure(
        latitude: Double,
        longitude: Double,
        zoom: Int,
        mapType: String,
        apiKey: String?,
        allowZoom: Boolean,
        allowScroll: Boolean,
        showUserLocation: Boolean,
        markers: List<MapMarkerData>?
    ) {
        val wv = webView ?: createWebView().also {
            webView = it
            addView(it, LayoutParams(MATCH_PARENT, MATCH_PARENT))
        }

        val mapTypeParam = when (mapType) {
            "satellite" -> "satellite"
            "terrain" -> "terrain"
            "hybrid" -> "hybrid"
            else -> "roadmap"
        }

        val markersJs = markers?.joinToString(",") { marker ->
            "{lat:${marker.latitude},lng:${marker.longitude},title:'${marker.title}'}"
        } ?: ""

        val html = buildMapHtml(
            latitude, longitude, zoom, mapTypeParam,
            apiKey, allowZoom, allowScroll, markersJs
        )

        wv.loadDataWithBaseURL(null, html, "text/html", "UTF-8", null)
    }

    private fun createWebView(): WebView {
        return WebView(context).apply {
            setBackgroundColor(Color.TRANSPARENT)
            @SuppressLint("SetJavaScriptEnabled")
            settings.javaScriptEnabled = true
            settings.domStorageEnabled = true
            settings.mixedContentMode = WebSettings.MIXED_CONTENT_NEVER_ALLOW
            settings.allowFileAccess = false
            settings.allowContentAccess = false
            webViewClient = object : WebViewClient() {
                override fun onPageFinished(view: WebView?, url: String?) {
                    super.onPageFinished(view, url)
                    onReadyCallback?.invoke()
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
                    return true
                }
            }
        }
    }

    private fun buildMapHtml(
        lat: Double, lng: Double, zoom: Int, mapType: String,
        apiKey: String?, allowZoom: Boolean, allowScroll: Boolean, markersJs: String
    ): String {
        val key = apiKey ?: ""
        return """
        <!DOCTYPE html>
        <html><head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>html,body,#map{width:100%;height:100%;margin:0;padding:0;}</style>
        </head><body>
        <div id="map"></div>
        <script>
        function initMap(){
            var map=new google.maps.Map(document.getElementById('map'),{
                center:{lat:$lat,lng:$lng},
                zoom:$zoom,
                mapTypeId:'$mapType',
                zoomControl:$allowZoom,
                scrollwheel:$allowScroll,
                draggable:$allowScroll,
                gestureHandling:${if (allowScroll) "'auto'" else "'none'"}
            });
            var markers=[$markersJs];
            markers.forEach(function(m){
                new google.maps.Marker({position:{lat:m.lat,lng:m.lng},map:map,title:m.title});
            });
        }
        </script>
        <script src="https://maps.googleapis.com/maps/api/js?key=$key&callback=initMap" async defer></script>
        </body></html>
        """.trimIndent()
    }

    open fun release() {
        webView?.let {
            removeView(it)
            it.stopLoading()
            it.destroy()
        }
        webView = null
        onReadyCallback = null
        onErrorCallback = null
    }

    data class MapMarkerData(
        val latitude: Double,
        val longitude: Double,
        val title: String
    )
}
