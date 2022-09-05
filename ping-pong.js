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

const P1_UP_BUTTON = 'KeyQ';
const P1_DOWN_BUTTON = 'KeyA';
const P2_UP_BUTTON = 'KeyP';
const P2_DOWN_BUTTON = 'KeyL';

const UP_ACTION = 'up';
const DOWN_ACTION = 'down';
const STOP_ACTION = 'stop';

let p1Action = STOP_ACTION;
let p2Action = STOP_ACTION;

const STATE_CHANGE_INTERVAL = 20;

const PADDLE_STEP = 3;

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

window.addEventListener('keydown', function (event) {
    console.log('keydown' + event.code);
});

window.addEventListener('keyup', function (event) {
    console.log('keyup' + event.code);
});

window.addEventListener('keydown', function (event) {
    const code = event.code;
    if (code === P1_UP_BUTTON) {
        p1Action = UP_ACTION;
    } else if (code === P1_DOWN_BUTTON) {
        p1Action = DOWN_ACTION;
    } else if (code === P2_UP_BUTTON) {
        p2Action = UP_ACTION;
    } else if (code === P2_DOWN_BUTTON) {
        p2Action = DOWN_ACTION;
    }
});

function movePaddles() {
    if (p1Action === UP_ACTION) {
        p1PaddleY -= PADDLE_STEP;
    } else if (p1Action === DOWN_ACTION) {
        p1PaddleY += PADDLE_STEP;
    }
    if (p2Action === UP_ACTION) {
        p2PaddleY -= PADDLE_STEP;
    } else if (p2Action === DOWN_ACTION) {
        p2PaddleY += PADDLE_STEP;
    }
}

function updateState() {
    movePaddles();

    ballX += ballDX;
    ballY += ballDY;
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


