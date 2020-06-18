import Component from "./classes/Component.js";
import Player from "./classes/Player.js";
import Villain from "./classes/Villain.js";

const gameArea = {
    canvas: document.createElement("canvas"),
    context: () => this.context,
    start: function () {
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
    addObject: function (obj) {
        this.gameObjects.push(obj);
    },
    updateGameArea: function () {
        this.clear();
        this.gameObjects.forEach((o) => {
            o.update();
        })
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    gameObjects: () => this.gameObjects,
};


startGame();

function startGame() {
    gameArea.start();

    const hero = new Player(gameArea.context, 30, 30, "#900", 30, 53);
    window.addEventListener("keydown", function(e) {
        hero.controller(e);
    }, false);
    gameArea.addObject(hero);

    const villain = new Villain(gameArea.context, 30, 30, "#009", 300, 300);
    gameArea.addObject(villain);

}
