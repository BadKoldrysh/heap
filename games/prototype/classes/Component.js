export default class Component {
    constructor(context, width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.leftSide = this.x;
        this.rightSide = this.x + this.width;
        this.topSide = this.y;
        this.bottomSide = this.y + this.height;
        this.color = color;
        this.ctx = context;

        this.moveX = function (x) {
            if (this.checkBordersX(x)) {
                this.x += x;
                this.updateBorders();
            }
        };
        this.moveY = function (y) {
            if (this.checkBordersY(y)) {
                this.y += y;
                this.updateBorders();
            }
        };

        this.checkBordersX = function (coords) {
            return true;
        }

        this.checkBordersY = function (coords) {
            return true;
        }

        this.update = function () {

        };

        this.updateBorders = function () {
            this.leftSide = this.x;
            this.rightSide = this.x + this.width;
            this.topSide = this.y;
            this.bottomSide = this.y + this.height;

            this.checkSides();
        };

        this.drawComponent = function () {
            this.ctx.fillStyle = this.color;
            this.ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}
