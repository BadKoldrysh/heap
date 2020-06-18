import Component from "./Component.js";

export default class Player extends Component {
    constructor(context, width, height, color, x, y) {
        super(context, width, height, color, x, y);

        this.drawComponent = function () {
            this.ctx.font = width + "px Arial";
            this.ctx.fillStyle = this.color;
            this.ctx.fillText("@", this.x, this.y);
        }

        this.controller = function(e) {
            const step = this.width;

            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code) === false) {
                return;
            }

            if (e.code === 'ArrowUp') {
                this.moveY(-step);
            } else if (e.code === 'ArrowDown') {
                this.moveY(step);
            } else if (e.code === 'ArrowLeft') {
                this.moveX(-step);
            } else if (e.code === 'ArrowRight') {
                this.moveX(step);
            }
        }
    }
}
