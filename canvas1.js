
class Board {
    constructor(id) {
        this.id = id;
        let canvas = document.getElementById(id);
        this.ctx = canvas.getContext('2d');
        this.size = 10;
        this.cellSize = 10;
        this.drawGrid();
    }
    drawGrid (){
        const w = this.size * this.cellSize;
        for ( let i = 0; i <= w; i = i+this.cellSize ){
            this.ctx.beginPath();
            this.ctx.moveTo(0,i);
            this.ctx.lineTo(w,i);
            this.ctx.stroke();
        }
        for ( let j = 0; j <= w; j = j+this.cellSize ){
            this.ctx.beginPath();
            this.ctx.moveTo(j,0);
            this.ctx.lineTo(j,w);
            this.ctx.stroke();
        }
    }


    white(a,b) {
        this.ctx.clearRect(a*this.cellSize,b*this.cellSize,this.cellSize,this.cellSize);
    }
    black(a,b){ //black([a,b])
        this.ctx.fillRect(a*this.cellSize, b*this.cellSize, this.cellSize, this.cellSize);
    }

}

/*const board = new Board('canvas');

board.black(25,25);
board.white(85,85);*/
class Game{
    constructor(id){
        this.board = new Board(id);
        this.columns = [];
        this.clearBoard();
    }
    clearBoard(){
        for (let i = 0; i <= this.board.size; i++){
            const column = [];
            for (let j = 0; j <= this.board.size; j++){
                column.push(false);
            }
            this.columns.push(column);
        }

    }
    set(cells){
        for (let i = 0; i < cells.length; i++) {
            const[x,y] = cells[i]; //
            this.board.black(x,y); //this.board.black(cells[i])
        }
    }
    run(){


    }

}
 const game = new Game('canvas');
 game.set([
     [2,3],
     [3,3],
     [4,3]
 ]);
 game.run();