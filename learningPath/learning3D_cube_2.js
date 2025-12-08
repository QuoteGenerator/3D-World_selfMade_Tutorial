const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();

function drawLine(startPosition_x, startPosition_y, goTo_x, goTo_y, color, width){
    ctx.beginPath();
    ctx.moveTo(startPosition_x, startPosition_y);
    ctx.lineTo(goTo_x, goTo_y);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
}

function drawRect(startPosition_x, startPosition_y, width, height, color, lineWidth){
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.strokeRect(startPosition_x,startPosition_y, width, height);
}


drawLine(window.innerWidth/2, window.innerHeight/2, window.innerWidth/2+200, window.innerHeight/2+100, "red", 3);
drawLine(window.innerWidth/2+200, window.innerHeight/2, window.innerWidth/2, window.innerHeight/2+100, "red", 3);
drawRect(window.innerWidth/2, window.innerHeight/2, 200, 100, "white", 2);
