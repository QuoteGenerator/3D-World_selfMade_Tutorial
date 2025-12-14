//Extra Aufgabe: 'Vorderseite bemalen / Rückseite bemalen'
//Extra Aufgabe: '5 gleiche Würfel zeichnen'
//Hauptaufgabe: '3D-Würfel zeichnen mit linien'



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Vertices (Eckpunkte)
let cube = [
  {x: 300, y: 300}, {x: 500, y: 300}, // rückseite
  {x: 300, y: 500}, {x: 500, y: 500}, // rückseite
  {x: 400, y: 400}, {x: 600, y: 400}, // vorderseite
  {x: 400, y: 600}, {x: 600, y: 600}  // vorderseite
]

//Kanten (Edges): Von (a) -> bis (b); [a, b] definieren
const cubeEdges = [
  [0, 1], [1, 3], [3, 2], [2, 0], // Rückseite
  [0, 4], [1, 5],               // Verbindung Oben
  [2, 6], [3, 7],               // Verbindung Unten
  [4, 5], [5,7], [7,6], [6, 4] // Vorderseite
];

// Zeichnen
let move = 0;
ctx.beginPath();
let cubeAmount = 5;
for(let i = 0; i < cubeAmount; i++){

h
  for(const [a, b] of cubeEdges){
    
    ctx.moveTo(cube[a].x+move, cube[a].y); 
    ctx.lineTo(cube[b].x+move, cube[b].y); 
    ctx.lineWidt = 2;
    ctx.strokeStyle = "white";
  }


  // ----------- Vorderseite füllen ----------- (3 mal)

  if(i < 3){
    ctx.moveTo(cube[4].x+move*2, cube[4].y);
    ctx.lineTo(cube[5].x+move*2, cube[5].y);
    ctx.lineTo(cube[7].x+move*2, cube[7].y);
    ctx.lineTo(cube[6].x+move*2, cube[6].y);
    ctx.closePath();
    ctx.fillStyle = "blue";
  }

  ctx.stroke();
  ctx.fill();
  move+=200;
}







