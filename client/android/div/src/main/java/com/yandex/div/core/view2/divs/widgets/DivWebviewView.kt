package com.yandex.div.core.view2.divs.widgets

import android.content.Context
import android.graphics.Canvas
import com.yandex.div.core.annotations.Mockable
import com.yandex.div.internal.widget.DivWebViewWidget
import com.yandex.div2.Div

@Mockable
internal class DivWebviewView(context: Context) : DivWebViewWidget(context),
    DivHolderView<Div.Webview> by DivHolderViewMixin() {

    override fun onSizeChanged(w: Int, h: Int, oldw: Int, oldh: Int) {
        super.onSizeChanged(w, h, oldw, oldh)
        onBoundsChanged(w, h)
    }

    override fun draw(canvas: Canvas) {
        drawBorderClipped(canvas) { super.draw(it) }
    }

    override fun release() {
        super<DivHolderView>.release()
        super<DivWebViewWidget>.release()
    }
}
