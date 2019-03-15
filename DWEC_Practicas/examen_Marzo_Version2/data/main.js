import {
    raffles as raffleDataSource,
    shoe as ShoeDataSource
} from './raffles';
import {
    ShoeDTO
} from './shoe';
import {
    singletonHtml as htmlContructor
} from './htmlContructor';
import {
    singletonFilter
} from './filter';
import {
    singletonPgWeb
} from './pgWeb';
import classes from "../css/style.css";


export let Filters = singletonFilter().get();
var paginaObject = singletonPgWeb().get();
var toHtml = htmlContructor().get();



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
    //window.alert('mirar en la consola ,pulsa F12');

    // Poblamos el html.
    console.log(toHtml);
    toHtml.loadZapatilla(paginaObject.shoe, contenedorZapatilla);
    toHtml.loadAllRifas(paginaObject.listaRifas, contendorRifas);
};