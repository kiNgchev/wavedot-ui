package net.kingchev.avrora

@kotlin.js.JsExport
class Greeting {
    private val platform = getPlatform()

    fun greet(): String {
        return "Hello, ${platform.name}!"
    }
}