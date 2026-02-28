package com.yandex.div.core.view2.divs.widgets

import android.content.Context
import android.graphics.Canvas
import com.yandex.div.core.annotations.Mockable
import com.yandex.div.internal.widget.ProgressBarView
import com.yandex.div2.Div

@Mockable
internal class DivProgressView(context: Context) : ProgressBarView(context),
    DivHolderView<Div.Progress> by DivHolderViewMixin() {

    override fun onSizeChanged(w: Int, h: Int, oldw: Int, oldh: Int) {
        super.onSizeChanged(w, h, oldw, oldh)
        onBoundsChanged(w, h)
    }

    override fun draw(canvas: Canvas) {
        drawBorderClipped(canvas) { super.draw(it) }
    }
}
