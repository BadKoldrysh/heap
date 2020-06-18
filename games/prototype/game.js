const gameArea = {
    canvas: document.createElement("canvas"),
    context: () => this.context,
    start: function() {
        this.canvas.width = 800;
        this.canvas.height = 600;
        this.canvas.setAttribute("id", "gameArea");
        this.gameObjects = [];
        this.context = this.canvas.getContext("2d");

        document.body.appendChild(this.canvas);

        setInterval(() => {
            this.updateGame();
        }, 20);
    },
    addObject: function(obj) {
        this.gameObjects.push(obj);
    },
    updateGame: function() {
        // console.log(this.gameObjects);
        this.gameObjects.forEach((o) => {
            o.update();
        })
    },
    gameObjects: () => this.gameObjects,
};


startGame();

function startGame() {
    gameArea.start();
    const hero = new Component(30, 30, "#900", 50, 25);
    gameArea.addObject(hero);
}

class Component {
    constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;

        this.update = function () {
            ctx = gameArea.context;
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        };
    }
}



