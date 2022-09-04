const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext("2d");
ctx.fillStyle = "white";

function drawPaddle(x, y) {
    ctx.fillRect(x, y, 20, 100);
}
drawPaddle(770, 100);
drawPaddle(10, 300);    

ctx.fillText("Ping Pong", 370, 50);

function drawText(text, x, y) {
    ctx.fillText(text, x, y);
};

drawText("3", 300,50);
drawText("6", 500, 50);

function drawCircle(x,y,r) {
    ctx.BeginPath();
    ctx.arc(x,y,r,0, Math.PI * 2, true);
    ctx.closePath();
    
}

drawCircle(400, 250, 15);
