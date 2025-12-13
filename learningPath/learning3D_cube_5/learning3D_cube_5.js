//Extra Aufgabe: 'Vorderseite bemalen; Rückseite bemalen'
//Hauptaufgabe: '3D-Würfel zeichnen mit linien'



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Vertices (Eckpunkte)
let cube = [
  {x: 300, y: 300}, {x: 500, y: 300}, // rückseite
  {x: 300, y: 500}, {x: 500, y: 500}, // rückseite
  {x: 400, y: 300}, {x: 600, y: 300}, // vorderseite
  {x: 400, y: 500}, {x: 600, y: 500}  // vorderseite
]

//Kanten (Edges): Von (a) -> bis (b); [a, b] definieren
const cubeEdges = [
  [0, 1], [1, 3], [3, 2], [2, 0] // Rückseite
  [0, 4], [1, 5],               // Verbindung Oben
  [2, 6], [3, 7],               // Verbindung Unten
  [4, 5], [5,7], [7,6], [6, 4] // Vorderseite
];

// Zeichnen

ctx.beginPath();

ctx.moveTo(cube[0].x, cube[0].y); // automatisieren noch für alle linien
ctx.lineTo(cube[1].x, cube[1].y); // automatisieren noch für alle linien

ctx.lineWidth = 2;
ctx.strokeStyle = "white";
ctx.stroke();


