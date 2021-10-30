input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.QuarterNote)
    music.playMelody("C C G G A A G - ", 120)
    music.playMelody("F F E E D D C - ", 120)
    music.playMelody("G G F F E E D - ", 120)
    music.playMelody("G G F F E E D - ", 120)
    music.playMelody("C C G G A A G - ", 120)
    music.playMelody("F F E E D C - - ", 120)
})
basic.forever(function () {
    basic.showIcon(IconNames.EigthNote)
})
