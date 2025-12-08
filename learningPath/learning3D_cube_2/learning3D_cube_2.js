//Extra Aufgabe: 'Ein Quadrat erstellen mithilfe der selbsterstellten Rechteckfunktion'
//Extra Aufgabe: 'Ein Rechteck erstellen mit einem Kreuz im inneren - also zwei linien [oben links -> unten rechts | oben rechts -> unten links]"
//Hauptaufgabe: 'Ein Rechteck zeichnen, mit linien (dabei eine Funktion erstellen und diese nutzen)'

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
    ctx.strokeRect(startPosition_x-(width/2),startPosition_y, width, height);
}

function drawSquare(x_position, y_position, size, color, lineWidth){
    drawRect(x_position+(size/2), y_position, size, size, color, lineWidth);
}


drawLine(window.innerWidth/2-100, window.innerHeight/2, window.innerWidth/2+100, window.innerHeight/2+100, "red", 3);
drawLine(window.innerWidth/2+100, window.innerHeight/2, window.innerWidth/2-100, window.innerHeight/2+100, "red", 3);
drawRect(window.innerWidth/2, window.innerHeight/2, 200, 100, "white", 2);

drawSquare(0, 100, 250, "blue", 6);


