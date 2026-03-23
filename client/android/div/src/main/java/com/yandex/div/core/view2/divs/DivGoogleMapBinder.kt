package com.yandex.div.core.view2.divs

import com.yandex.div.core.dagger.DivScope
import com.yandex.div.core.state.DivStatePath
import com.yandex.div.core.view2.BindingContext
import com.yandex.div.core.view2.DivViewBinder
import com.yandex.div.core.view2.divs.DivActionBinder.LogType.Companion.LOG_CLICK
import com.yandex.div.core.view2.divs.widgets.DivGoogleMapView
import com.yandex.div.internal.widget.DivGoogleMapWidget
import com.yandex.div.json.expressions.ExpressionResolver
import com.yandex.div.json.expressions.equalsToConstant
import com.yandex.div.json.expressions.isConstant
import com.yandex.div.json.expressions.isConstantOrNull
import com.yandex.div2.Div
import com.yandex.div2.DivGoogleMap
import javax.inject.Inject

@DivScope
internal class DivGoogleMapBinder @Inject constructor(
    baseBinder: DivBaseBinder,
    private val actionBinder: DivActionBinder
) : DivViewBinder<Div.GoogleMap, DivGoogleMap, DivGoogleMapView>(baseBinder) {

    override fun DivGoogleMapView.bind(
        bindingContext: BindingContext,
        div: DivGoogleMap,
        oldDiv: DivGoogleMap?,
        path: DivStatePath
    ) {
        val resolver = bindingContext.expressionResolver

        bindGoogleMap(div, oldDiv, bindingContext, resolver)
    }

    private fun DivGoogleMapView.bindGoogleMap(
        div: DivGoogleMap,
        oldDiv: DivGoogleMap?,
        bindingContext: BindingContext,
        resolver: ExpressionResolver
    ) {
        val latChanged = !div.latitude.equalsToConstant(oldDiv?.latitude)
        val lngChanged = !div.longitude.equalsToConstant(oldDiv?.longitude)
        val zoomChanged = !div.zoom.equalsToConstant(oldDiv?.zoom)
        val mapTypeChanged = !div.mapType.equalsToConstant(oldDiv?.mapType)
        val apiKeyChanged = !div.apiKey.equalsToConstant(oldDiv?.apiKey)
        val apiKeyAndroidChanged = !div.apiKeyAndroid.equalsToConstant(oldDiv?.apiKeyAndroid)
        val allowZoomChanged = !div.allowZoom.equalsToConstant(oldDiv?.allowZoom)
        val allowScrollChanged = !div.allowScroll.equalsToConstant(oldDiv?.allowScroll)
        val showUserLocationChanged = !div.showUserLocation.equalsToConstant(oldDiv?.showUserLocation)

        if (latChanged || lngChanged || zoomChanged || mapTypeChanged ||
            apiKeyChanged || apiKeyAndroidChanged || allowZoomChanged ||
            allowScrollChanged || showUserLocationChanged) {
            applyGoogleMap(div, resolver)
        }

        if (!div.latitude.isConstant()) {
            addSubscription(div.latitude.observe(resolver) { applyGoogleMap(div, resolver) })
        }
        if (!div.longitude.isConstant()) {
            addSubscription(div.longitude.observe(resolver) { applyGoogleMap(div, resolver) })
        }
        if (!div.zoom.isConstant()) {
            addSubscription(div.zoom.observe(resolver) { applyGoogleMap(div, resolver) })
        }
        if (!div.mapType.isConstant()) {
            addSubscription(div.mapType.observe(resolver) { applyGoogleMap(div, resolver) })
        }
        if (!div.apiKey.isConstantOrNull()) {
            addSubscription(div.apiKey?.observe(resolver) { applyGoogleMap(div, resolver) } ?: return)
        }
        if (!div.apiKeyAndroid.isConstantOrNull()) {
            addSubscription(div.apiKeyAndroid?.observe(resolver) { applyGoogleMap(div, resolver) } ?: return)
        }
        if (!div.allowZoom.isConstant()) {
            addSubscription(div.allowZoom.observe(resolver) { applyGoogleMap(div, resolver) })
        }
        if (!div.allowScroll.isConstant()) {
            addSubscription(div.allowScroll.observe(resolver) { applyGoogleMap(div, resolver) })
        }
        if (!div.showUserLocation.isConstant()) {
            addSubscription(div.showUserLocation.observe(resolver) { applyGoogleMap(div, resolver) })
        }

        bindCallbacks(div, bindingContext)
    }

    private fun DivGoogleMapView.applyGoogleMap(div: DivGoogleMap, resolver: ExpressionResolver) {
        val apiKey = div.apiKeyAndroid?.evaluate(resolver)
            ?: div.apiKey?.evaluate(resolver)

        val markers = div.markers?.map { marker ->
            DivGoogleMapWidget.MapMarkerData(
                latitude = marker.latitude.evaluate(resolver),
                longitude = marker.longitude.evaluate(resolver),
                title = marker.title?.evaluate(resolver) ?: ""
            )
        }

        configure(
            latitude = div.latitude.evaluate(resolver),
            longitude = div.longitude.evaluate(resolver),
            zoom = div.zoom.evaluate(resolver).toInt(),
            mapType = div.mapType.evaluate(resolver).toString(),
            apiKey = apiKey,
            allowZoom = div.allowZoom.evaluate(resolver),
            allowScroll = div.allowScroll.evaluate(resolver),
            showUserLocation = div.showUserLocation.evaluate(resolver),
            markers = markers
        )
    }

    private fun DivGoogleMapView.bindCallbacks(
        div: DivGoogleMap,
        bindingContext: BindingContext
    ) {
        onReadyCallback = {
            div.onReadyActions?.let { actions ->
                actionBinder.handleBulkActions(bindingContext, this, actions, LOG_CLICK)
            }
        }
        onErrorCallback = {
            div.onErrorActions?.let { actions ->
                actionBinder.handleBulkActions(bindingContext, this, actions, LOG_CLICK)
            }
        }
    }
}
