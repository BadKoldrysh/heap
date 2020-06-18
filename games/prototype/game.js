import Component from "./classes/Component.js";
import Player from "./classes/Player.js";

const gameArea = {
    canvas: document.createElement("canvas"),
    context: () => this.context,
    start: function() {
        this.canvas.width = 840;
        this.canvas.height = 630;
        this.canvas.setAttribute("id", "gameArea");
        this.gameObjects = [];
        this.context = this.canvas.getContext("2d");

        document.body.appendChild(this.canvas);

        setInterval(() => {
            this.updateGameArea();
        }, 20);
    },
    addObject: function(obj) {
        this.gameObjects.push(obj);
    },
    updateGameArea: function() {
        this.clear();
        this.gameObjects.forEach((o) => {
            o.update();
        })
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    gameObjects: () => this.gameObjects,
};


startGame();

function startGame() {
    const step = 30;

    gameArea.start();
    const hero = new Player(gameArea.context, 30, 30, "#900", 30, 23);
    gameArea.addObject(hero);

    const villain = new Component(gameArea.context, 30, 30, "#009", 300, 300);

    villain.pause = 0;
    villain.steps = 0;
    villain.stepsLimit = 7;
    villain.update = function() {
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

        this.drawComponent();
    };

    gameArea.addObject(villain);

    window.addEventListener("keydown", function(e) {
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code) === false) {
            return;
        }

        if (e.code === 'ArrowUp') {
            hero.moveY(-step);
        } else if (e.code === 'ArrowDown') {
            hero.moveY(step);
        } else if (e.code === 'ArrowLeft') {
            hero.moveX(-step);
        } else if (e.code === 'ArrowRight') {
            hero.moveX(step);
        }
    }, false);
}
