import Component from "./Component.js";

export default class Villain extends Component {
    constructor(context, width, height, color, x, y) {
        super(context, width, height, color, x, y);

        this.pause = 0;
        this.steps = 0;
        this.stepsLimit = 7;

        this.update = function () {
            const step = this.width;

            if (this.pause < 25) {
                this.pause++;
            } else {
                this.pause = 0;
                if (this.steps < this.stepsLimit) {
                    this.steps++;
                    this.moveX(step);
                } else if (this.steps >= this.stepsLimit && this.steps < 2 * this.stepsLimit) {
                    this.steps++;
                    this.moveY(-step);
                } else if (this.steps >= 2 * this.stepsLimit && this.steps < 3 * this.stepsLimit) {
                    this.steps++;
                    this.moveX(-step);
                } else if (this.steps >= 3 * this.stepsLimit && this.steps < 4 * this.stepsLimit) {
                    this.steps++;
                    this.moveY(step);
                } else if (this.steps >= 4 * this.stepsLimit) {
                    this.steps = 0;
                }
            }

            // this.drawComponent();
        }
    }
}