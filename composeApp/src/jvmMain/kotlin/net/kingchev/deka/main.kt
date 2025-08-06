package net.kingchev.deka

import androidx.compose.ui.window.Window
import androidx.compose.ui.window.application

fun main() = application {
    Window(
        onCloseRequest = ::exitApplication,
        title = "deka-ui",
    ) {
        App()
    }
}