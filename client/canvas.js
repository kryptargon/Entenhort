const canvas = document.getElementById('drawCanvas');
const ctx = canvas.getContext('2d');

let last_point = null;

function draw(toX, toY) {
    ctx.lineCap = 'round';
    ctx.lineWidth = 5;
    ctx.moveTo(last_point.x, last_point.y);
    ctx.lineTo(toX, toY);
    ctx.stroke();
}


canvas.addEventListener('mousedown', (param) => {
    last_point = {x:param.layerX, y:param.layerY};
    draw(param.layerX, param.layerY);
});

canvas.addEventListener('mousemove', (param) => {
    if (last_point != null) {
        draw(param.layerX, param.layerY);
        last_point.x = param.layerX;
        last_point.y = param.layerY;
    }
});

canvas.addEventListener('mouseup', (param) => {
    if (last_point != null){
        draw(param.layerX, param.layerY);
    }
    last_point = null;
});

canvas.addEventListener('mouseout', (param) => {
    if (last_point != null){
        draw(param.layerX, param.layerY);
    }
    last_point = null;
});

