const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ----------------------
// Camera Settings
// ----------------------
let cam = {
    x: 0,
    y: 0,
    z: -5,
    rotX: 0,
    rotY: 0,
    speed: 0.05
};

// ----------------------
// Cube Geometry
// ----------------------
function makeCube(cx, cy, cz, size=1){
    let s = size/2;
    return [
        {x:cx-s, y:cy-s, z:cz-s}, {x:cx+s, y:cy-s, z:cz-s},
        {x:cx+s, y:cy+s, z:cz-s}, {x:cx-s, y:cy+s, z:cz-s},
        {x:cx-s, y:cy-s, z:cz+s}, {x:cx+s, y:cy-s, z:cz+s},
        {x:cx+s, y:cy+s, z:cz+s}, {x:cx-s, y:cy+s, z:cz+s}
    ];
}

const cubeEdges = [
    [0,1],[1,2],[2,3],[3,0],
    [4,5],[5,6],[6,7],[7,4],
    [0,4],[1,5],[2,6],[3,7]
];

// ----------------------
// World Cubes
// ----------------------
let world = [];
// single cube in center
world.push(makeCube(0,0,0,2));

// wall of cubes
let W = 5, H = 33;
for(let y=0; y<H; y++){
    for(let x=0; x<W; x++){
        world.push(makeCube(x*2 - 4, -y*2, 10, 2));
    }
}

// ----------------------
// 3D Projection
// ----------------------
function project(p){
    let x = p.x - cam.x;
    let y = p.y - cam.y;
    let z = p.z - cam.z;

    let cosy = Math.cos(cam.rotY), siny=Math.sin(cam.rotY);
    let x1 = x * cosy - z * siny;
    let z1 = x * siny + z * cosy;

    let cosx=Math.cos(cam.rotX), sinx=Math.sin(cam.rotX);
    let y1 = y*cosx - z1*sinx;
    let z2 = y*sinx + z1*cosx;

    let f = 300;
    let scale = f/z2;

    return {
        x: canvas.width/2 + x1*scale,
        y: canvas.height/2 + y1*scale,
        z: z2
    };
}

// ----------------------
// Controls
// ----------------------
let keys = {};
document.addEventListener("keydown", e => keys[e.key]=true);
document.addEventListener("keyup", e => keys[e.key]=false);

// Mouse look (hold left button)
let prevMouseX = 0;
let prevMouseY = 0;
canvas.addEventListener("mousemove", e => {
    if(e.buttons === 1){
        cam.rotY += (e.clientX - prevMouseX)*0.003;
        cam.rotX += (e.clientY - prevMouseY)*0.003;
        cam.rotX = Math.max(-Math.PI/2, Math.min(Math.PI/2, cam.rotX));
    }
    prevMouseX = e.clientX;
    prevMouseY = e.clientY;
});

function updateControls(){
    let forward=0, right=0;
    if(keys["w"]) forward=1;
    if(keys["s"]) forward=-1;
    if(keys["d"]) right=1;
    if(keys["a"]) right=-1;

    cam.x += (Math.sin(cam.rotY)*forward + Math.cos(cam.rotY)*right)*cam.speed;
    cam.z += (Math.cos(cam.rotY)*forward - Math.sin(cam.rotY)*right)*cam.speed;
}

// ----------------------
// Draw Cube
// ----------------------
function drawCube(points){
    const projected = points.map(project);
    ctx.beginPath();
    for(let e of cubeEdges){
        let p1=projected[e[0]], p2=projected[e[1]];
        if(p1.z<0 || p2.z<0) continue;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
    }
    ctx.strokeStyle="white";
    ctx.stroke();
}

// ----------------------
// Render Loop
// ----------------------
function loop(){
    updateControls();
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let cube of world){
        drawCube(cube);
    }
    requestAnimationFrame(loop);
}

loop();
