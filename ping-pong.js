const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext("2d");
ctx.fillStyle = "white";
ctx.font = "20px Arial";
function drawPaddle(x, y) {
    ctx.fillRect(x, y, 20, 100);
}
drawPaddle(770, 100);
drawPaddle(10, 300);    

ctx.fillText("Ping Pong", 360, 50);

function drawText(text, x, y) {
    ctx.fillText(text, x, y);
};

drawText("3", 300,50);
drawText("6", 500, 50);

function drawCircle(x,y,r,) {
    ctx.beginPath();
    ctx.arc(x,y,r,0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
}

function clearCanvas() {
    context.clearRect(0,0, canvas.width, canvas.height);
}

drawCircle(400, 250, 15);

const CANVAS_HEIGHT = canvas.height;
const CANVAS_WIDTH = canvas.width;

const BOARD_Y = 50;
//y obydwu punktacji

const BOARD_P1_X =300;
const BOARD_P2_X = 500;
//x punktacji graczy

const PADDLE_WIDTH = 20;
const PADDLE_HEIGHT = 100;
const PADDLE_P1_X = 10;
const PADDLE_P2_X = 770;
//pozycje graczy oraz wymiary paletek

const PADDLE_START_Y = (CANVAS_HEIGHT - PADDLE_HEIGHT) / 2;
//pozycja początkowa paletki

const BALL_R = 15; //promień piłeczki
const BALL_START_X= CANVAS_WIDTH / 2;
//pozycja x początkowa piłeczki
const BALL_START_Y = CANVAS_HEIGHT /2;
//pozycja początkowa y piłeczki
const BALL_START_DX = 4.5;
//początkowa prędkość lotu piłki na współrzędnej x
const BALL_START_DY = 1.5;
//pocz. lotu piłki na współrzędnej y

//stany

let ballX = BALL_START_X;
let ballY = BALL_START_Y;
let ballDX = BALL_START_DX;
let ballDY = BALL_START_DY;
let p1PaddleY = PADDLE_START_Y;
let p2PaddleY = PADDLE_START_Y;
let p1Points = 0;
let p2Points = 0;

//funkcja na aktualny stan gry

function drawState() {
    clearCanvas();
    drawPoints(p1Points.toString(), BOARD_P1_X);
    drawPoints(p2Points.toString(), BOARD_P2_X);
    drawBall(ballX, ballY);
    drawPaddle(PADDLE_P1_X, p1PaddleY);
    drawPaddle(PADDLE_P2_X, p2PaddleY);
};

//zmiana stanu