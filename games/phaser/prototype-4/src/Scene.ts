import { params } from "./game";
import Player from "./Player";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game'
};

export default class Scene extends Phaser.Scene {
    private player: Player;
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    // private wall: Phaser.Physics.Arcade.Sprite;
    private wall: Array<Phaser.Physics.Arcade.Sprite>;

    constructor() {
        super(sceneConfig);
    }

    public preload() {
        this.load.image('tiles', './../assets/tiles.png');
        this.load.svg('hero', './../assets/hero.svg', {
            width: params.tileSize,
            height: params.tileSize
        });

        this.load.svg('wall', './../assets/wall.svg', {
            width: params.tileSize,
            height: params.tileSize
        });

        this.load.tilemapCSV('map', './../assets/map.csv');
    }

    public create() {
        const step: number = params.tileSize;

        const map = this.make.tilemap({
            key: 'map',
            tileWidth: params.tileSize,
            tileHeight: params.tileSize
        });
        const tiles = map.addTilesetImage('tiles');
        const layer = map.createStaticLayer(0, tiles, 0, 0);

        this.player = new Player(this, step * 5 + (step / 2), step * 10 + (step / 2), 'hero');

        this.cursors = this.input.keyboard.createCursorKeys();
        this.addKeyListener(this.cursors);
        this.wall = [];

        for (let i = 0; i < 5; i++) {
            this.wall.push(this.physics.add.sprite((step * (5 + i)) + (step / 2), (step * 7) + (step / 2), 'wall'));
        }
        for (let i = 0; i < 5; i++) {
            this.wall.push(this.physics.add.sprite((step * 9) + (step / 2), (step * (7 + i)) + (step / 2), 'wall'));
        }
    }

    public update() {
        this.wall.forEach(block => {
            this.physics.overlap(this.player, block, function () {
                this.player.moveBack();
            }, null, this);
        });
    }

    private addKeyListener(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
        for (let key in cursors) {
            this.cursors[key].on("down", this.doAction.bind(this));
        }
    }

    private doAction(event: Phaser.Input.Keyboard.Key) {
        this.player.savePreviousPosition();
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
    }
}