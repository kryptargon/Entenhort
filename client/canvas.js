const canvas = document.getElementById('drawCanvas');
const ctx = canvas.getContext('2d');

let last_point = null;

ctx.lineCap = 'round';
ctx.lineWidth = 5;

canvas.addEventListener('mousedown', ({layerX, layerY}) => {
    last_point = {x: layerX, y: layerY};
    draw(layerX, layerY);
});

canvas.addEventListener('mousemove', ({layerX, layerY}) => {
    if (last_point != null) {
        draw(layerX, layerY);
        last_point = {x: layerX, y: layerY};
    }
});

canvas.addEventListener('mouseup', () => {
    last_point = null;
});

canvas.addEventListener('mouseout', ({layerX, layerY}) => {
    if (last_point != null) {
        draw(layerX, layerY);
    }
    last_point = null;
});

function draw(toX, toY) {
    ctx.moveTo(last_point.x, last_point.y);
    ctx.lineTo(toX, toY);
    ctx.stroke();
}

