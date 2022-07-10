input.onGesture(Gesture.TiltRight, function () {
    basic.showArrow(ArrowNames.SouthEast)
    basic.pause(1000)
    basic.showString("D")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.SouthWest)
    basic.pause(1000)
    basic.showString("I")
})
basic.forever(function () {
	
})
