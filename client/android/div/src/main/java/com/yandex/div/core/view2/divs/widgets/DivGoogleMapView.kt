package com.yandex.div.core.view2.divs.widgets

import android.content.Context
import android.graphics.Canvas
import com.yandex.div.core.annotations.Mockable
import com.yandex.div.internal.widget.DivGoogleMapWidget
import com.yandex.div2.Div

@Mockable
internal class DivGoogleMapView(context: Context) : DivGoogleMapWidget(context),
    DivHolderView<Div.GoogleMap> by DivHolderViewMixin() {

    override fun onSizeChanged(w: Int, h: Int, oldw: Int, oldh: Int) {
        super.onSizeChanged(w, h, oldw, oldh)
        onBoundsChanged(w, h)
    }

    override fun draw(canvas: Canvas) {
        drawBorderClipped(canvas) { super.draw(it) }
    }

    override fun release() {
        super<DivHolderView>.release()
        super<DivGoogleMapWidget>.release()
    }
}
