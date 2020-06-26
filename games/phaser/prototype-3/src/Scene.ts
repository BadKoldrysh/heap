import { params } from "./game";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game'
};

export default class Scene extends Phaser.Scene {
    private player;
    private cursors;

    constructor() {
        super(sceneConfig);
    }

    public preload() {
        this.load.svg('hero', './../assets/hero.svg', {
            width: params.tileSize,
            height: params.tileSize
        });

        this.load.svg('zero', './../assets/zero.svg', {
            width: params.tileSize,
            height: params.tileSize
        });
    }

    public create() {
        const step: number = params.tileSize;

        this.player = this.physics.add.sprite(step * 5, step * 10, 'hero');

        this.cursors = this.input.keyboard.createCursorKeys();
        this.addKeyListener(this.cursors);
    }

    public update() {

    }

    private addKeyListener(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
        for (let key in cursors) {
            this.cursors[key].on("down", this.doAction.bind(this));
        }
    }

    private doAction(event) {
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