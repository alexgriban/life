
class View {
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
class Board {
    constructor(id){
        this.view = new View(id);
        this.createBoard();
    }
    createBoard(){
        this.columns = [];
        for (let i = 0; i < this.view.size; i++){
            this.columns[i] = [];
            for (let j = 0; j < this.view.size; j++){
                this.columns[i][j] = false;
            }
        }
        console.log(this.columns);
    }
    createNewColumns(){
        this.newColumns = [];
        for (let i = 0; i < this.view.size; i++){
            this.newColumns[i] = [];
            for (let j = 0; j < this.view.size; j++){
                let a = 0;
                if(i!==0 && j!==0){
                    if (this.columns[i-1][j-1] === true){ a++}
                    if (this.columns[i-1][j] === true){ a++}
                    if (this.columns[i][j-1] === true){ a++}
                }
                if(i<this.view.size - 1 && j<this.view.size - 1){
                    if (this.columns[i][j+1] === true){ a++}
                    if (this.columns[i+1][j] === true){ a++}
                    if (this.columns[i+1][j+1] === true){ a++}
                }
                if(i!==0 && j!==0 && i<this.view.size - 1 && j<this.view.size - 1){
                    if (this.columns[i+1][j-1] === true){ a++}
                    if (this.columns[i-1][j+1] === true){ a++}
                }
                if ((this.columns[i][j] === true) && (a === 2 || a === 3) ){this.newColumns[i][j] = true }
                else if (this.columns[i][j] === false && a>=3){ this.newColumns[i][j] = true}
                else {this.newColumns[i][j] = false}
            }
        }
       console.log(this.newColumns);
    }

}
class Game{
    constructor(id){
        this.view = new View(id);
        this.board = new Board(id);
    }
    set(cells){
        for (let i = 0; i < cells.length; i++) {
            const[x,y] = cells[i]; //
            this.view.black(x,y); //this.board.black(cells[i])
            this.board.columns[y][x] = true;
        }
    }
    run(){
        this.board.createNewColumns();
        for (let i = 0; i < this.view.size; i++) {
            for (let j = 0; j < this.view.size; j++) {
                if (this.board.newColumns[i][j] === true) {
                    this.view.black(j,i);
                }
                else {
                    this.view.white(j,i);
                }
            }
        }
        this.view.drawGrid();
        this.board.columns.push(this.board.newColumns);
    }
}
 const game = new Game('canvas');
 game.set([
     [2,3],
     [3,3],
     [4,3]
 ]);
 game.run();