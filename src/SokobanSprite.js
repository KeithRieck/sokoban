import phaser from 'phaser'

export class SokobanSprite extends phaser.GameObjects.Sprite {

    constructor(scene, imageKey, xx=0, yy=0) {
        super(scene, xx * scene.game.TILESIZE + scene.game.INDENT, yy * scene.game.TILESIZE, imageKey)
        this.game = scene.game
        this.xPos = xx
        this.yPos = yy
    }

    moveTo(xx, yy) {
        this.xPos = xx
        this.yPos = yy
        this.x = this.xPos * this.game.TILESIZE + this.game.INDENT
        this.y = this.yPos * this.game.TILESIZE
        this.depth = 10
    }

    moveUp() {
        this.moveTo(this.xPos, this.yPos - 1)
    }

    moveDown() {
        this.moveTo(this.xPos, this.yPos + 1)
    }

    moveLeft() {
        this.moveTo(this.xPos - 1, this.yPos)
    }

    moveRight() {
        this.moveTo(this.xPos + 1, this.yPos)
    }
}

