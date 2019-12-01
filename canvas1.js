/* function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

       // ctx.fillRect(25,25,100,100);
        //ctx.clearRect(45,45,60,60);
       // ctx.strokeRect(50,50,50,50);

        for ( let i = 0; i <= 500; i = i+5 ){
            ctx.beginPath();
            ctx.moveTo(0,i);
            ctx.lineTo(500,i);
            ctx.stroke();
        }
        for ( let j = 0; j <= 500; j = j+5 ){
            ctx.beginPath();
            ctx.moveTo(j,0);
            ctx.lineTo(j,500);
            ctx.stroke();
        }

    }
}
function black(x,y) {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillRect(x,y,5,5);

    }
}
function white(a,b) {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.clearRect(a,b,5,5);

    }
} */

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