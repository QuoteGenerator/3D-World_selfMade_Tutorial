//Extra Aufgabe: 'Ein X zeichnen, mit zwei Linien'
//Hauptaufgabe: 'Eine Linie zeichnen mit Canvas'

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

//Eine Linie erstellen
ctx.strokeStyle = "white";
ctx.lineWidth = 3;

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(window.innerWidth, window.innerHeight);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(window.innerWidth, 0);
ctx.lineTo(0, window.innerHeight);
ctx.stroke();