import phaser from 'phaser'
import { WelcomeScene } from './WelcomeScene'
import { SokobanScene } from './SokobanScene'

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'content',
    scene: [
        new WelcomeScene(),
        new SokobanScene('level0', 'level1'),
        new SokobanScene('level1', 'level2'),
        new SokobanScene('level2', 'level3'),
        new SokobanScene('level3', null)
    ],
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    }
}

const game = new phaser.Game(config)
game.TILESIZE = 36
game.INDENT = 150
