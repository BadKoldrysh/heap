export default class Component {
    constructor(context, width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.color = color;
        this.ctx = context;

        this.moveX = function (x) {
            this.x += x;
        };
        this.moveY = function (y) {
            this.y += y;
        };

        this.update = function () {
            this.drawComponent();
        };

        this.drawComponent = function () {
            this.ctx.fillStyle = this.color;
            this.ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}
