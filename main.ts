let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P12,
    DigitalPin.P8,
    PingUnit.Centimeters
    )
    serial.writeValue("x", distance)
    music.setTempo(120)
    basic.pause(100)
})
