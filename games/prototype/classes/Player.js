import Component from "./Component.js";

export default class Player extends Component{
    constructor(context, width, height, color, x, y) {
        super(context, width, height, color, x, y);

        this.drawComponent = function() {
            this.ctx.font = width + "px Arial";
            this.ctx.fillStyle = this.color;
            this.ctx.fillText("@", this.x, this.y);
        }
    }
}
