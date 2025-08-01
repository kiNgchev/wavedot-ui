package net.kingchev.avrora

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform