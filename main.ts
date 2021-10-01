scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    EventnextLeve1()
})
function EventnextLeve1 () {
    changelevel += 1
    if (changelevel == 1) {
        tiles.setTilemap(tilemap`level2`)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(1, 1))
    } else if (changelevel == 2) {
        tiles.setTilemap(tilemap`level3`)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(14, 14))
    } else if (changelevel == 3) {
        tiles.setTilemap(tilemap`level8`)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(1, 1))
    } else if (changelevel == 4) {
        tiles.setTilemap(tilemap`level9`)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(14, 14))
    } else if (changelevel == 5) {
        tiles.setTilemap(tilemap`level10`)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(14, 14))
    } else if (changelevel == 6) {
        tiles.setTilemap(tilemap`level11`)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(1, 1))
    } else if (changelevel == 7) {
        tiles.setTilemap(tilemap`level12`)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(1, 1))
    } else if (changelevel == 8) {
        tiles.setTilemap(tilemap`level13`)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(1, 1))
    } else if (changelevel == 9) {
        tiles.setTilemap(tilemap`level16`)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(14, 1))
    } else {
        game.over(true)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.over(false)
    effects.clouds.endScreenEffect()
})
let changelevel = 0
let mySprite2: Sprite = null
mySprite2 = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite2, 100, 123)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite2)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(1, 14))
game.showLongText("to exit the text and move on to the other one press space", DialogLayout.Bottom)
game.showLongText("hey welcome use w a s d to move the character have fun", DialogLayout.Bottom)
