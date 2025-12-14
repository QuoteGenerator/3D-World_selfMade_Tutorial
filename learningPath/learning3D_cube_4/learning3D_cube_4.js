//Extra Aufgabe: ''
//Hauptaufgabe: 'Z-Tiefe simulieren mit Kreisen (größe und position simulieren)'



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let points = [
    {x: 0, y: 0, z: 300},
    {x: 200, y: 0, z: 100},
    {x: -400, y: 0, z: 200},
    {x: 600, y: 0, z: 500}
]

const f = 500; //Zoom-faktor
function projectSimple(x, y, z){
    const scale = f / (f + z)
    return {
        x: window.innerWidth/2 + (x * scale), 
        y: window.innerHeight/2 + (y * scale),
        z: z
    }
}



let further = 0;
function loop(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    linesFromMiddle();

    for (const p of points){
        const q = projectSimple(p.x, p.y, p.z+further);
        ctx.beginPath();
        ctx.strokeStyle = "white";
        //ctx.strokeStyle = "re";
        ctx.lineWidth = 3;
        ctx.arc(q.x, q.y, 64 * (f / (f+q.z+further)), 0, Math.PI * 2);
        ctx.stroke();
        //ctx.fill();
    }
    further += 1;
    requestAnimationFrame(loop);
}
loop();



function linesFromMiddle(){
let x = 0;  
    for(let i = 0; i < 60; i++){
        ctx.beginPath();
        ctx.moveTo(window.innerWidth/2, window.innerHeight/2);
        ctx.lineTo((Math.sin(x+i)*10000)+window.innerWidth/2, (Math.cos(x)*1000)+window.innerHeight/2);
        ctx.strokeStyle = "red";
        ctx.lineWidth = 2;
        ctx.stroke();

        x += 0.001;
    }

}
linesFromMiddle();




