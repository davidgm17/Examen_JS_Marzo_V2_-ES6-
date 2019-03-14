import { raffles, shoe } from './raffles';
import { ShoeDTO } from './shoe';
import { RifaDTO } from './rifa';
import { htmlConstructor } from './htmlContructor';
import { singletonFilter } from './filter';
import "../css/style.css";

export let Filters = singletonFilter().get();


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

    loadZapatilla(datasource.sole.shoe, contenedorZapatilla);
    getAllRifas(datasource.sole.raffles, contendorRifas);
    export let Filters = singletonFilter().get();
    let rifa = new RifaDto(datasource.sole.raffles["Antonia Milano"], "Antonia Milano");
    console.log(Filters);
    console.log(Filters.toString());
    console.log(rifa);
    console.log(rifa.toString());
    console.log(rifa.getLogo);
    console.log(rifa.getUrl);
    let shoe = new ShoeDTO(datasource.sole.shoe);
    console.log(shoe);
    console.log(htmlConstructor);


};