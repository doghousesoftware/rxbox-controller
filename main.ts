input.onButtonPressed(Button.A, function () {
    basic.showString("am")
    Sender(0)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("pm")
    Sender(1)
})
function Sender (ampm: number) {
    if (ampm == 0) {
        radio.sendString("AM")
        AMSentSignal = 1
        PMSentSignal = 0
    } else {
        radio.sendString("PM")
        PMSentSignal = 1
        AMSentSignal = 0
    }
}
let PMSentSignal = 0
let AMSentSignal = 0
radio.setGroup(1)
basic.forever(function () {
    if (input.lightLevel() >= 70 && AMSentSignal == 0) {
        Sender(0)
    }
    if (input.lightLevel() <= 10 && PMSentSignal == 0) {
        Sender(1)
    }
})
