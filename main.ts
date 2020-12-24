function Sender (ampm: number) {
    if (ampm == 0) {
        radio.sendString("AM")
        AMSentSignal = 1
        PMSentSignal = 0
        basic.showString("am")
    } else {
        radio.sendString("PM")
        PMSentSignal = 1
        AMSentSignal = 0
        basic.showString("pm")
    }
}
let PMSentSignal = 0
let AMSentSignal = 0
radio.setGroup(1)
basic.forever(function () {
    if (input.lightLevel() >= 150 && AMSentSignal == 0) {
        Sender(0)
    }
    if (input.lightLevel() <= 70 && PMSentSignal == 0) {
        Sender(1)
    }
})
