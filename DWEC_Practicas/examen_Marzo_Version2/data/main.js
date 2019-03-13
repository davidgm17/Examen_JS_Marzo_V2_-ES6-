var datasource = require('./raffles');
import {
    ShoeDTO,
} from './shoe';

var RifaDto = require('./rifa');
import { htmlConstructor } from './htmlContructor';

import "../css/style.css";


/**
 * Logica que se  implementa
 */


/* var repositorio = require('raffles');*/




/** Generamos el contenedor de datos de la zapatilla */

var loadZapatilla = function(object, place) {
    /** añadimos dinamicamente mas atributos al div */
    place.className += " rigth";

    /** Cargamos los datos de la zapatilla */
    place.appendChild(getTitulo(object));
    place.appendChild(getSubtitle(object));
    place.appendChild(getDescription(object));

}

var getTitulo = function(object) {
    let titulo = document.createElement("h1");
    titulo.textContent = object.model;
    return titulo;
}
var getSubtitle = function(object) {
    let subtitle = document.createElement("h2");
    subtitle.textContent = object.colour;
    return subtitle;
}
var getDescription = function(object) {
    let description = document.createElement("h3");
    description.textContent = object.code + " | " + object.avaliable + " | " + object.price;
    return description;
}


/** Generamos el contenedor de una rifa */
var createRifa = function(object, nombreObjeto) {
    let rifaContainer = document.createElement("div");
    rifaContainer.className = "col-4 row";
    rifaContainer.appendChild(getLogo(object));
    rifaContainer.appendChild(getDatosRifa(object, nombreObjeto));
    return rifaContainer;
}

var getLogo = function(object) {
    let logoC = document.createElement("img");
    logoC.src = object.logo;
    logoC.className = "logoStyle";
    return logoC;
}

var getDatosRifa = function(object, nombreObjeto) {
    let datosContainer = document.createElement("div");
    datosContainer.className = "w-75 m-auto text-center";
    datosContainer.appendChild(getTituloRifa(nombreObjeto));
    datosContainer.appendChild(getInfoRifa(object, nombreObjeto));
    return datosContainer;
}

var getTituloRifa = function(nombreObjeto) {
        let titulo = document.createElement("h4");
        titulo.textContent = nombreObjeto;
        titulo.style.fontWeight = "bold";
        return titulo;
    }
    /** 
     * Con esta funcion mi codigoo seria mas open-code  el problema 
     * que he tenido ha sio filtrar los atributos que quiero mostrar
     * , porque siempre me cogía la url del logo
     * por eso he decidido no perder tiempo y continuar con la siguiente funcion
     * 
    var getInfoRifa = function (object) {
        let infoContainer = document.createElement("div");


        infoContainer.className = "w-100 text-center";
        Object.values(object).forEach(element => {

            
            let span = document.createElement("span");
            span.textContent = element;
            infoContainer.appendChild(span);
            let br = document.createElement("br");
            infoContainer.appendChild(br);
        })

        return infoContainer;
    }
    */

var getInfoRifa = function(object, nombreObjeto) {
    let infoContainer = document.createElement("div");


    infoContainer.className = "w-100 text-center";

    Object.values(object).forEach(element => {
        fitros["element"] = element;
    });
    infoContainer.appendChild(getSpan(object.country));
    infoContainer.appendChild(getBr());
    infoContainer.appendChild(getSpan(object.purchase));
    infoContainer.appendChild(getBr());
    infoContainer.appendChild(getSpan(object.collection));
    infoContainer.appendChild(getBr());
    infoContainer.appendChild(getSpanSize(object.Sizes));
    infoContainer.appendChild(getBr());
    infoContainer.appendChild(getSpanOpens(object.opens));
    infoContainer.appendChild(getBr());
    infoContainer.appendChild(getSpanClose(object.Closes));
    infoContainer.appendChild(getBr());
    infoContainer.appendChild(getButton(object));
    infoContainer.appendChild(getBr());
    infoContainer.appendChild(getButtonEntered(nombreObjeto));
    return infoContainer;
}
var getSpan = function(value) {
    let span = document.createElement("span");
    span.textContent = value;
    return span;
}
var getSpanSize = function(value) {
    let span = document.createElement("span");
    span.textContent = "Size - " + value;
    return span;
}
var getSpanOpens = function(value) {
    let span = document.createElement("span");
    span.textContent = "Opens - " + value;
    return span;
}
var getSpanClose = function(value) {
    let span = document.createElement("span");
    span.textContent = "Closes - " + value;
    return span;
}
var getBr = function() {
        let br = document.createElement("br");
        return br;
    }
    /**
     * Creo el boton y añado para capturar evento over
     */
var getButton = function(object) {
    let enlace = document.createElement("a");
    enlace.href = object.url;
    let button = document.createElement("button");

    button.addEventListener("mouseover", function() {
        button.style.opacity = "0.5"
    });
    button.addEventListener("mouseout", function() {
        button.style.opacity = "1"
    });
    switch (object.Opens) {
        case 'live':

            if (object.Closes == "closed") {
                button.className = "btn btn-rounded bg-rojo ";
                button.innerText = "CLOSED";
            } else {
                button.className = "btn btn-rounded bg-verde";
                button.innerText = "ENTER RAFFLE";
            }
            break;
        case 'announced':
            button.className = "btn btn-rounded bg-gris";
            button.innerText = "ANNOUNCED";
            break;
    }
    enlace.appendChild(button);
    return enlace;
}

/**
 * creo  boton entered y capturo el evento para guardarlo en local storage
 */

var getButtonEntered = function(nombreTienda) {
    let button = document.createElement("button");
    button.style.fontWeight = "bold";
    button.className = "btn";
    button.id = nombreTienda;
    button.name = nombreTienda;
    button.addEventListener("click", function() {
        updateStorage(nombreTienda);
    }, true);
    //button.onclick = updateStorage(button.name);
    if ((localStorage.getItem(nombreTienda)) && (localStorage.getItem(nombreTienda) == "true")) {
        button.innerText = "Entered";

    } else {
        button.innerText = "Mark as Entered";
        localStorage.setItem(nombreTienda, false);
    }
    return button;
}

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



var getAllRifas = function(object, place) {
    place.className = "row d-wrap m-auto"
    let numeroRifas = Object.values(object).length;
    let listaObjetosRifa = Object.values(object);
    let listaNombresRifa = Object.getOwnPropertyNames(object);
    for (let index = 0; index < numeroRifas; index++) {
        if (listaNombresRifa[index] != "length") {
            place.appendChild(createRifa(listaObjetosRifa[index], listaNombresRifa[index]));
        }
    }
}




var contenedorZapatilla;
var contendorRifas;
var fitros = {};

window.onload = function() {
    /** Localizamos los contenedores de los datos */
    contenedorZapatilla = document.getElementById("datosZapa");
    contendorRifas = document.getElementById("contendorRifas");

    loadZapatilla(datasource.sole.shoe, contenedorZapatilla);
    getAllRifas(datasource.sole.raffles, contendorRifas);
    let rifa = new RifaDto(datasource.sole.raffles["Antonia Milano"], "Antonia Milano");
    console.log(rifa);
    console.log(rifa.toString());
    console.log(rifa.getLogo);
    console.log(rifa.getUrl);
    let shoe = new ShoeDTO(datasource.sole.shoe);
    console.log(shoe);
    console.log(htmlConstructor);


};