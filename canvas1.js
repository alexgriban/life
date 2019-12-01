
class Board {
    constructor(id) {
        this.id = id;
        let canvas = document.getElementById(id);
        this.ctx = canvas.getContext('2d');
        this.drawGrid();
    }
    drawGrid (){
        for ( let i = 0; i <= 500; i = i+5 ){
            this.ctx.beginPath();
            this.ctx.moveTo(0,i);
            this.ctx.lineTo(500,i);
            this.ctx.stroke();
        }
        for ( let j = 0; j <= 500; j = j+5 ){
            this.ctx.beginPath();
            this.ctx.moveTo(j,0);
            this.ctx.lineTo(j,500);
            this.ctx.stroke();
        }
    }


    white(a,b) {
        this.ctx.clearRect(a,b,5,5);
    }
    black(a,b){
        this.ctx.fillRect(a, b, 5, 5);
    }

}

const board = new Board('canvas');

board.black(25,25);
board.white(85,85);