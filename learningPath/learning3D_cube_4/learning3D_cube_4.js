//Extra Aufgabe: ''
//Hauptaufgabe: 'Z-Tiefe simulieren mit Kreisen (größe und position simulieren)'



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;





let points = [
    {x: 100, y: 0, z: 300},
    {x: 100, y: 200, z: 100},
    {x: 200, y: 100, z: 200},
    {x: 300, y: 300, z: 500}
]

const f = 400; //Zoom-faktor
function projectSimple(x, y, z){
    const scale = f / (f + z)
    return {
        x: window.innerWidth/2 + (x * scale), 
        y: window.innerHeight/2 + (y * scale),
        z: z
    }
}


for (const p of points){
    const q = projectSimple(p.x, p.y, p.z);
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;
    ctx.arc(q.x, q.y, 18 * (f / (f+q.z)), 0, Math.PI * 2);
    ctx.stroke();
}


