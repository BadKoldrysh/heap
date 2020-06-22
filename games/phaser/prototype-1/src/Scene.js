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

        this.load.svg("enemy", "./../assets/zero.svg", {
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

        this.player = this.physics.add.sprite((step * 2) + 8, step + 8, "hero");
        this.enemy = this.physics.add.sprite((step * 50) + 8, (step * 15) + 8, "enemy");

        this.enemy.move = function() {
            this.x += params.tileSize;
        }.bind(this.enemy);

        this.player.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.addKeyListeners();
    }

    addKeyListeners() {
        for (let key in this.cursors) {
            this.cursors[key].on('down', this.doAction.bind(this));
        }
    }

    doAction(event) {
        switch (event.keyCode) {
            case Phaser.Input.Keyboard.KeyCodes.SHIFT:
                console.log("ok");
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

        this.enemy.move();
    }
}