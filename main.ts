input.onButtonPressed(Button.A, function () {
    rope += -0.1
})
input.onButtonPressed(Button.B, function () {
    rope += 0.1
})
let rope = 2
let round = 0
let A_score = 0
let B_score = 0
basic.forever(function () {
    basic.clearScreen()
    led.plot(Math.round(rope), round)
    if (round <= 4) {
        if (rope < 0) {
            rope = 2
            round += 1
            B_score += 1
            basic.showNumber(A_score)
            basic.pause(100)
            basic.showNumber(B_score)
            basic.pause(100)
        } else if (rope > 4) {
            rope = 2
            round += 1
            B_score += 1
            basic.showNumber(A_score)
            basic.pause(100)
            basic.showNumber(B_score)
            basic.pause(100)
        } else if (A_score > B_score) {
            basic.showString("A wins")
        } else {
            basic.showString("B wins")
        }
    }
})
