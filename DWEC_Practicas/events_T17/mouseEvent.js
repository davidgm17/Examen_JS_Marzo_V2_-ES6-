var contenedorX;
var contenedorY;
var ejeX0 = 0;
var ejeY0 = 0;

window.onload = function () {
    contenedorX = document.getElementById("cx");
    contenedorY = document.getElementById("cy");
}


function mouseMoveHandler(e) {
    console.log("eje X", "referencia punto 0: ", ejeX0, "momentoRaton", e.clientX, "resultado:", e.clientX - ejeX0);
    console.log("eje Y", "referencia punto 0: ", ejeY0, "momentoRaton", e.clientY, "resultado:", e.clientY - ejeY0);
    let calculoX = e.clientX - ejeX0;
    let calculoY = e.clientY - ejeY0;
    contenedorX.textContent = 'Eje x: ' + calculoX;
    contenedorY.textContent = 'Eje Y: ' + calculoY;
    /*var relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth / 2;
    }*/

}

function resetearAceroCoordenadas(e) {
    ejeX0 = e.clientX;
    ejeY0 = e.clientY;
}

document.addEventListener("mousemove", mouseMoveHandler, false);
document.addEventListener("click", resetearAceroCoordenadas, false);