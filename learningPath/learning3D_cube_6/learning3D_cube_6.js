
//Extra Aufgabe: ''
//Hauptaufgabe: 'Würfel erstellen und diesen drehen lassen'

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//Vertex definieren/erstellen (Punkte definieren/erstellen)
function makeCube(size = 200){ 
  const s = size/2;

  return [
    {x:-s, y:-s, z:s}, {x:s, y:-s, z:s}, //hinten oben
    {x:-s, y:s, z:s}, {x:s, y:s, z:s}, //hinten unten
    {x:-s, y:-s, z:-s}, {x:s, y:-s, z:-s}, //vorne oben
    {x:-s, y:s, z:-s}, {x:s, y:s, z:-s} //vorne unten
  ]
  
} 
let cube = makeCube(200); //Vertext speichern

// Edges erstellen (linien erstellen) -> [a, b] a=>b
const cubeEdges = [
  [0, 1], [1, 3], [3, 2], [2, 0], // hinten verbinden
  [0, 4], [1, 5], // oben verbinden mit hinterem und vorderem
  [2, 6], [3, 7], // unten verbinden mit hinterem und vorderem
  [4, 5], [5, 7], [7, 6], [6, 4], // vorne verbinden
]

//rotation - X-Axis
function rotateX(p, angle){
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  return {
    x: p.x,
    y: p.y * c - p.z * s,
    z: p.y * s + p.z * c
  };
}

function rotateY(p, angle){
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  
  return {
    x: p.x * c - p.z * s,
    y: p.y,
    z: p.x * s + p.z * c
  };
}


//projection
const f = 400;
function project(p){
  const scale = f / (f+p.z);
  return{
    x: p.x * scale + canvas.width/2,
    y: p.y * scale + canvas.height/2,
    z: p.z
  }
}

let angle = 0;
let rotationSpeed = 0.003;
function loop(){
  ctx.clearRect(0,0, canvas.width, canvas.height);

  const rotated = cube.map(p => rotateY(rotateX(p, angle), angle));
  const projected = rotated.map(project);

  ctx.beginPath();
  for(const [a,b] of cubeEdges){
    ctx.moveTo(projected[a].x, projected[a].y);
    ctx.lineTo(projected[b].x, projected[b].y);
  }
  ctx.strokeStyle = "white";
  ctx.stroke();

  angle += rotationSpeed;
  requestAnimationFrame(loop);
}
loop();




