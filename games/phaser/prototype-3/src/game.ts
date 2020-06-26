import * as Phaser from 'phaser';
import Scene from './Scene';

interface Params {
    tileSize: number;
    [key: string]: string | boolean | number;
}

export const params: Params = {
    tileSize: 16,
    root: "./",
    assets: "./assets/"
};

const config: Phaser.Types.Core.GameConfig = {
    title: 'Roguelike-lite',

    type: Phaser.AUTO,

    scale: {
        width: 90 * params.tileSize,
        height: 23 * params.tileSize,
    },

    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        },
    },

    scene: Scene,

    parent: 'game',
    backgroundColor: '#cecece'
};

export const game = new Phaser.Game(config);
