package com.rtnscanqr

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.common.MapBuilder
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.viewmanagers.RTNScanQrManagerDelegate
import com.facebook.react.viewmanagers.RTNScanQrManagerInterface

@ReactModule(name = ScanQrManager.NAME)
class ScanQrManager(private val mCallerContext: ReactApplicationContext) :
    SimpleViewManager<ScanQr>(), RTNScanQrManagerInterface<ScanQr?> {

    private val mDelegate: ViewManagerDelegate<ScanQr>

    init {
        mDelegate = RTNScanQrManagerDelegate(this)

    }

    override fun getDelegate(): ViewManagerDelegate<ScanQr> {
        return mDelegate
    }

    override fun getName(): String {
        return NAME
    }

    override fun createViewInstance(reactContext: ThemedReactContext): ScanQr {
        val scanQr = ScanQr(mCallerContext)
        scanQr.setUpCamera(mCallerContext)
        return scanQr
    }

    companion object {
        const val NAME = "RTNScanQr"
    }


    override fun getExportedCustomDirectEventTypeConstants(): Map<String?, Any> {
        return MapBuilder.of(
            "topOnQrScanned",
            MapBuilder.of("registrationName", "onQrScanned")
        )
    }


}