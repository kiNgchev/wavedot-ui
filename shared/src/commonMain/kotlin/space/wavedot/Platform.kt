package space.wavedot

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform