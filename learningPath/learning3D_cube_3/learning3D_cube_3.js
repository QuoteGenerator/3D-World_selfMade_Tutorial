//Extra Aufgabe: 'Rechteck, skalieren und minimieren (pulsieren lassen)'
//Extra Aufgabe: 'Die Möglichkeit dem User geben, die Farbe zu ändern, der Linie'
//Hauptaufgabe: 'Eine Linie erstellen die ihren Endpunkt (zielrichtung) konstant ändert'


//------------- Canvas Vorbereitung -------------
const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext("2d");
}
resizeCanvas();


//------------- Änderung der Radiusfarbe mit Input -------------
let lineColor = "white";

const input = document.getElementById("colorInput");

input.addEventListener("input", () => {
    lineColor = input.value;
})


//------------- Frame Löschen (veralteten Frame) -------------
function refreshCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(refreshCanvas);
} 
refreshCanvas();


//------------- Rotierende Linie -------------
let x_axe = 0;
let y_axe = 0;
let r = 0;

function drawLine(radius, pos, speed, radiusColor){
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(window.innerWidth/2, window.innerHeight/2);
    ctx.lineTo(window.innerWidth/2+x_axe, window.innerHeight/2+y_axe);
    ctx.strokeStyle = radiusColor;
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.restore();
    
    x_axe = Math.cos(pos) * radius;
    y_axe = Math.sin(pos) * radius;

    pos += speed

    
    requestAnimationFrame(() => drawLine(radius, pos, speed, lineColor));

}
drawLine(100, 6, 0.04, lineColor);


//------------- Pulsierendes Rechteck -------------
let rectangleSize = 0; 
let sizeChanger = 0;
function drawPulsatingRectangle(pos_x, pos_y, width, height){
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;
    ctx.strokeRect(pos_x, pos_y, width*(rectangleSize*rectangleSize), height*rectangleSize*rectangleSize);
    ctx.stroke();
    ctx.restore();

    rectangleSize = Math.cos(sizeChanger)
    sizeChanger += 0.01;

    requestAnimationFrame(() => drawPulsatingRectangle(pos_x, pos_y, width, height));
}



drawPulsatingRectangle(window.innerWidth/2-150, 100, 300, 200);
