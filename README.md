# Hindernislauf
## ~avatar avatar @unplugged

Viel Spaß mit dem Hindernislauf auf deinem @boardname@ 

## ~ @unplugged
Ziel des Spieles bewege die Spielfigut mit den Tasten A und B und weiche so den Hindernissen aus.

## Schritt 1: Erstelle eine Spielfigur
Als erstes erstellen wir uns eine Spielfigur in der Mitte des unteren Bildschirmrandes.
```blocks
let Spielfigur: game.LedSprite = null
Spielfigur = game.createSprite(2, 4)
```
## Schritt 2: Bewegen der Spielfigur
Lass die Spielfigur mit dem A-Knopf ein Feld nach links bewegen und mit dem B-Knopf ein Feld nach rechts.
```blocks
let Spielfigur: game.LedSprite = null
Spielfigur = game.createSprite(2, 4)

input.onButtonPressed(Button.B, function () {
    Spielfigur.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.A, function () {
    Spielfigur.change(LedSpriteProperty.X, -1)
})
```
## Schritt 3: das erste Hindernis erstellen
Das Hindernis soll an einer zufälligen Stelle in der oberen Reihe auftauchen.
```blocks
let Hindernis1: game.LedSprite = null
let Hindernis1 = game.createSprite(Math.randomRange(0, 4), 0)
Hindernis1.turn(Direction.Right, 90)
```
## Schritt 4: 
Nun soll das Hindernis nach unten bewegt werden. Sobald das Hindernis die Speilfigur bewegt ist das ``||game: Spiel beendet||``. Wenn das Hindernis am unteren Bildschirmrand angekommen ist soll es wieder nach oben gesetzt werden.
```blocks
let Spielfigur: game.LedSprite = null
let Hindernis1: game.LedSprite = null
Spielfigur = game.createSprite(2, 4)
let Hindernis1 = game.createSprite(Math.randomRange(0, 4), 0)

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
```
## Schritt 5: Füge nun noch die Hindernisse 2 und 3 hinzu 
Zum start sollen die Hindernisse 2 und 3 genau so, wie das Hindernis 1 hinzugefügt werden. In der Abfrage aus Schritt 5 müssen nun auch die Hindernisse 2 und 3 bewegt werden. Ebenso muss überprüft werden, ob diese Hinderniss den unteren Rand bzw. die Spielfigur berühren. Mit der Einstellung der ``||basic: pausiere||`` Zeit kannst du die Schwierigkeit erhöhen.
