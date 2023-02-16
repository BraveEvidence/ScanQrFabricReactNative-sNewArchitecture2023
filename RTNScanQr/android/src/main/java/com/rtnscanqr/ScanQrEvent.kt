package com.rtnscanqr

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap
import com.facebook.react.uimanager.events.Event
import com.facebook.react.uimanager.events.RCTModernEventEmitter


class ScanQrEvent(viewId: Int, private val qrValue: String): Event<ScanQrEvent>(viewId) {

    override fun getEventName(): String {
        return "topOnQrScanned"
    }

    override fun dispatchModern(rctEventEmitter: RCTModernEventEmitter?) {
        super.dispatchModern(rctEventEmitter)
        rctEventEmitter?.receiveEvent(
            -1,
            viewTag, eventName,
            Arguments.createMap()
        )
    }

    override fun getEventData(): WritableMap {
        val event: WritableMap = Arguments.createMap()
        event.putString("value", qrValue)
        return event
    }

}