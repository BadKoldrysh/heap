export default class Player extends Phaser.Physics.Arcade.Sprite {
    private oldX: number;
    private oldY: number;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
        super(scene, x, y, texture, frame);

        this.oldX = 0;
        this.oldY = 0;
        this.savePreviousPosition();

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);
    }

    public savePreviousPosition(): void
    {
        this.oldX = this.x;
        this.oldY = this.y;
    }

    public moveBack(): void {
        this.x = this.oldX;
        this.y = this.oldY;
    }
}