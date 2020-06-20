import Component from "./classes/Component.js";
import Player from "./classes/Player.js";
import Villain from "./classes/Villain.js";

const gameArea = {
    canvas: document.createElement("canvas"),
    context: () => this.context,
    start: function (width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
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
            o.drawComponent();
        });
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    gameObjects: () => this.gameObjects,
};


startGame();

function startGame() {
    const areaWidth = 1470;
    const areaHeight = 330;
    gameArea.start(areaWidth, areaHeight);

    const background = new Component(gameArea.context, areaWidth, areaHeight, "#dadada", 0, 0);
    gameArea.addObject(background);

    const comp = new Component(gameArea.context, 30, 30, "#090", 60, 300);
    gameArea.addObject(comp);

    const hero = new Player(gameArea.context, 30, 30, "#900", 30, 300);
    hero.checkBordersX = function (step) {
        console.log(hero.leftSide + ' ' + hero.rightSide + ' ' + hero.topSide + ' ' + hero.bottomSide);
        if (hero.leftSide + step < 0 || hero.rightSide + step > areaWidth) {
            return false;
        }

        return true;
    }
    hero.checkBordersY = function (step) {
        console.log(hero.leftSide + ' ' + hero.rightSide + ' ' + hero.topSide + ' ' + hero.bottomSide);
        if (hero.topSide + step < 0 || hero.bottomSide + step > areaHeight) {
            return false;
        }

        return true;
    }
    window.addEventListener("keydown", function (e) {
        hero.controller(e);
    }, false);
    gameArea.addObject(hero);

    const villain = new Villain(gameArea.context, 30, 30, "#009", 300, 300);
    gameArea.addObject(villain);

}
