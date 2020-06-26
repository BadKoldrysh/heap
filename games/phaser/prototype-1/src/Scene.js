class Scene extends Phaser.Scene {
    // cursors;

    constructor() {
        // id of this scene
        super("bootGame");
    }

    preload() {
        this.load.svg("hero", "./../assets/hero.svg", {
            width: params.tileSize,
            height: params.tileSize
        });

        this.load.svg("zero", "./../assets/zero.svg", {
            width: params.tileSize,
            height: params.tileSize
        });
        // this.load.spritesheet("player", params.assets + "hero.svg", {
        //     frameWidth: params.tileSize,
        //     frameHeight: params.tileSize
        // });
    }

    create() {
        const step = params.tileSize;

        // this.player = this.physics.add.sprite((step * 2) + 8, step + 8, "hero");
        this.player = new Player(this, (step * 2) + 8, step + 8, "hero");

        this.enemy = this.physics.add.sprite((step * 50) + 8, (step * 15) + 8, "zero");
        this.wall = this.physics.add.sprite((step * 10) + 8, (step * 7) + 8, "zero");

        this.enemy.move = function () {
            const steps = 5;
            if (this.count == 'undefined') {
                this.count = 0;
            }
            if (this.count < steps) {
                this.x += params.tileSize;
            } else if (this.count < steps * 2) {
                this.y -= params.tileSize;
            } else if (this.count < steps * 3) {
                this.x -= params.tileSize;
            } else if (this.count < steps * 4) {
                this.y += params.tileSize;
            } else {
                this.x += params.tileSize;
                this.count = 0;
            }
            this.count++;
        }.bind(this.enemy);

        // this.player.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.addKeyListeners();
    }

    update() {
        this.physics.overlap(this.player, this.wall, function () {
            this.player.moveBack();
        }, null, this);

    }

    addKeyListeners() {
        for (let key in this.cursors) {
            this.cursors[key].on('down', this.doAction.bind(this));
        }
    }

    doAction(event) {
        console.log("ok");
        this.player.setPreviousPosition();
        switch (event.keyCode) {
            case Phaser.Input.Keyboard.KeyCodes.SHIFT:
                break;
            case Phaser.Input.Keyboard.KeyCodes.UP:
                this.player.y -= params.tileSize;
                break;
            case Phaser.Input.Keyboard.KeyCodes.DOWN:
                this.player.y += params.tileSize;
                break;
            case Phaser.Input.Keyboard.KeyCodes.LEFT:
                this.player.x -= params.tileSize;
                break;
            case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                this.player.x += params.tileSize;
                break;
            default:
                break;
        }

        this.gameTurn();
    }

    gameTurn() {
        this.enemy.move();
    }

    touchWall() {
        console.log("ok");
    }
}