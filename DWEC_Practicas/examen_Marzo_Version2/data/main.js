import {
    raffles as raffleDataSource,
    shoe as ShoeDataSource
} from './raffles';
import {
    ShoeDTO
} from './shoe';
import {
    RifaDTO as Rifa
} from './rifa';
import {
    htmlConstructor
} from './htmlContructor';
import {
    singletonFilter
} from './filter';
import {
    singletonPgWeb
} from './pgWeb';
import "../css/style.css";

export let Filters = singletonFilter().get();
var paginaObject = singletonPgWeb().get();

var updateStorage = function(nombreTienda) {
    let nombre = nombreTienda;
    console.log(nombre);
    if ((localStorage.getItem(nombre)) && (localStorage.getItem(nombre) == "true")) {

        localStorage.setItem(nombre, false);
        let boton = document.getElementById(nombre);
        boton.innerText = "Mark as Entered";
    } else {
        localStorage.setItem(nombre, true);
        let boton = document.getElementById(nombre);
        boton.innerText = "Entered";
    }
}






var contenedorZapatilla;
var contendorRifas;


window.onload = function() {
    /** Localizamos los contenedores de los datos */
    contenedorZapatilla = document.getElementById("datosZapa");
    contendorRifas = document.getElementById("contendorRifas");

    paginaObject.addListaRifas(raffleDataSource);
    paginaObject.addFiltros(Filters);
    paginaObject.shoe = new ShoeDTO(ShoeDataSource);
    //Object.assign(paginaObject.filtros, Filters);
    console.log(paginaObject);
    console.log(Filters);



};