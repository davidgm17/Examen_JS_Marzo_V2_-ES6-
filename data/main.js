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
export var paginaObject = singletonPgWeb().get();
var toHtml = htmlContructor().get();
export var contendorRifas;


window.onload = function() {
    /** Localizamos los contenedores de los datos */
    var contenedorZapatilla = document.getElementById("datosZapa");
    contendorRifas = document.getElementById("contendorRifas");
    var contenedorFiltros = document.getElementById("zapatilla");
    // Creamos todos los objetos y los añadimos a
    // pagina object, actua como un contenedor de datos.
    paginaObject.addListaRifas(raffleDataSource);
    paginaObject.addFiltros(Filters);
    paginaObject.shoe = new ShoeDTO(ShoeDataSource);

    console.log(paginaObject);
    console.log(Filters);
    console.log(toHtml);
    //window.alert('mirar en la consola ,pulsa F12');

    // Poblamos el html.
    toHtml.loadZapatilla(paginaObject.shoe, contenedorZapatilla);
    toHtml.loadAllRifas(paginaObject.listaRifas, contendorRifas);
    toHtml.loadFiltros(paginaObject.filtros, contenedorFiltros);
};