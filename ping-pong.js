const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext("2d");


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

const STATE_CHANGE_INTERVAL = 20;

ctx.fillStyle = "white";
ctx.font = "20px Arial";


function drawPaddle(x, y) {
    ctx.fillRect(x, y, 20, 100);
}

function drawPoints(text, x) {
    ctx.fillText(text, x, BOARD_Y);
}
  
ctx.fillText("Ping Pong", 360, 50);

function drawText(text, x, y) {
    ctx.fillText(text, x, y);
};



function drawCircle(x,y,r,) {
    ctx.beginPath();
    ctx.arc(x,y,r,0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
}

function drawBall(x, y) {
    drawCircle(x, y, BALL_R);
}

function clearCanvas() {
    ctx.clearRect(0,0, canvas.width, canvas.height); 
}

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
    drawPoints(p2Points.toString(), BOARD_P2_X);//to nie działa
    drawBall(ballX, ballY);
    drawPaddle(PADDLE_P1_X, p1PaddleY);
    drawPaddle(PADDLE_P2_X, p2PaddleY);
};

//zmiana stanu  

function updateState() {
    ballX += ballDX;
    ballY += ballDY;
    p1PaddleY++;
    p2PaddleY--;
    p1Points++;
    p2Points += 3;
}

function updateAndDrawState() {
    updateState();
    drawState();
}

setInterval(updateAndDrawState, STATE_CHANGE_INTERVAL);

drawPaddle(770, 100);
drawPaddle(10, 300);  
drawText("0", 300,50);
drawText("0", 500, 50);
drawCircle(400, 250, 15);


