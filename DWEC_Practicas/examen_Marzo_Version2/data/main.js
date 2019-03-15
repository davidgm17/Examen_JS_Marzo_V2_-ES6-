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
    window.alert('mirar en la consola ,pulsa F12');


};