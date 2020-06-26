import * as Phaser from 'phaser';
import GameScene from './GameScene';

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'Sample',

    type: Phaser.AUTO,

    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
    },

    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },

    scene: GameScene,

    parent: 'game',
    backgroundColor: '#cecece',
};

export const game = new Phaser.Game(gameConfig);
