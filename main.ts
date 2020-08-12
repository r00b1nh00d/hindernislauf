input.onButtonPressed(Button.B, function () {
    Spielfigur.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.A, function () {
    Spielfigur.change(LedSpriteProperty.X, -1)
})
let Spielfigur: game.LedSprite = null
Spielfigur = game.createSprite(2, 4)
let Hindernis1 = game.createSprite(Math.randomRange(0, 4), 0)
Hindernis1.turn(Direction.Right, 45)
basic.forever(function () {
    if (Hindernis1.get(LedSpriteProperty.Y) == 4) {
        Hindernis1.set(LedSpriteProperty.Y, 0)
        Hindernis1.set(LedSpriteProperty.X, Math.randomRange(0, 4))
    } else {
        Hindernis1.move(1)
        basic.pause(100)
    }
    if (Spielfigur.isTouching(Hindernis1)) {
        game.gameOver()
    }
})
