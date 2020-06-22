const params = {
    tileSize: 16,
    root: "./",
    assets: "./assets/",
};

const config = {
    width: 90 * params.tileSize,
    height: 23 * params.tileSize,
    backgroundColor: 0xdadada,
    scene: [Scene],
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
        },
    },
};

const game = new Phaser.Game(config);