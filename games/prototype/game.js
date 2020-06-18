const gameArea = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = 1024;
        this.canvas.height = 768;
        this.canvas.setAttribute("id", "gameArea");
        this.context = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);
    }
};


startGame();

function startGame() {
    gameArea.start();
}



