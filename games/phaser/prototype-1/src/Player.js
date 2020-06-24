class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        this.oldX = 0;
        this.oldY = 0;
        this.setPreviousPosition();

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);
    }

    moveBack() {
        this.x = this.oldX;
        this.y = this.oldY;
    }

    setPreviousPosition() {
        this.oldX = this.x;
        this.oldY = this.y;
    }
}

