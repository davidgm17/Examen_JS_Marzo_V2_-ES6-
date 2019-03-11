window.onload = function () {
    var b1 = document.getElementById("cl");
    var b2 = document.getElementById("cl2");
    // Compruebo el comportamiento de todos los eventos del primer botón
    b1.onclick = function () {
        console.log("Soy el evento on click");
    };

    b1.addEventListener("click", function () {
        console.log("Soy addEvent click. Como tercer paremetro false");
    }, false);
    b1.addEventListener("click", function () {
        console.log("Soy addEvent click. Como tercer parametro true");
    }, true);

    // Compruebo si el orden dentro del js altera el comportamiento de los eventos

    b2.addEventListener("click", function () {
        console.log("Soy addEvent click. Como tercer paremetro false");
    }, false);
    b2.onclick = function () {
        console.log("Soy el evento on click");
    };

    b2.addEventListener("click", function () {
        console.log("Soy addEvent click. Como tercer parametro true");
    }, true);


    // codigo para el ejemplo de preventDefault
    document.querySelector("#id-checkbox").addEventListener("click", function (event) {
        document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
        event.preventDefault();
    }, false);
}

// quiero comprobar el tiempo que tarda en cargar la pagina
// solo es para comprobar el comportamiento de eventos
var t1

dameElMomento = function () {
    t1 = new Date();
    console.log('Momento llamada: ', t1);
}
dameDiferenciaTiempo = function () {
    let t2 = new Date();
    let resultado = t2 - t1;
    console.log('Tiempo de carga: ', resultado, 'milisegundos.')
}
window.onloadstart = dameElMomento();
window.onloadend = dameDiferenciaTiempo();