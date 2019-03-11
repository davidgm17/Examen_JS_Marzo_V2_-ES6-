/**
 * Datos iniciales 
 */



var shoe = {
    "model": "Sacai x Nike LDV Waffle",
    "colour": "Varsity Blue/Del Sol/Varsity Red",
    "code": "BV0073-400",
    "avaliable": "07/03/19",
    "price": "180$"
};

var raffles = {

    "Antonia Milano": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/AntoniaMilano.jpg",
        "country": "Italy",
        "purchase": "Online Raffle",
        "collection": "Postage Available",
        "Sizes": "4 to 12 US",
        "Opens": "live",
        "Closes": "06/03 @ 11AM CET",
        "url": "https://www.antonia.it/164-shoes"
    },

    "END": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/End.jpg",
        "country": "UK",
        "purchase": "Online Raffle",
        "collection": "Postage Available",
        "Sizes": "5 to 12 UK",
        "Opens": "live",
        "Closes": "07/03 @ 12AM GMT",
        "url": "https://launches.endclothing.com/"
    },

    "Foot Patrol": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/FootPatrol.png",
        "country": "France",
        "purchase": "Online Raffle",
        "collection": "Collection Only",
        "Sizes": "36.5 to 47.5 EU",
        "Opens": "live",
        "Closes": "04/02 @ 10AM CET",
        "url": "https://www.footpatrol.com/customer-service/raffle-fr/"
    },

    "Holypop": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/HolyPop.png",
        "country": "Italy",
        "purchase": "Online FCFS",
        "collection": "Postage Available",
        "Sizes": "TBC",
        "Opens": "announced",
        "Closes": "07/02 @ 12AM CET",
        "url": "https://www.holypopstore.com/en/footwear"
    },

    "Offspring": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/OffSpring.jpg",
        "country": "UK",
        "purchase": "Online Raffle",
        "collection": "Collection Only",
        "Sizes": "3.5 to 7 UK",
        "Opens": "live",
        "Closes": "closed",
        "url": "https://www.offspring.co.uk/release-dates"
    },

    "SNS": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/SNS.jpg",
        "country": "Swe, UK, Ger, Fr",
        "purchase": "Online Raffle",
        "collection": "Post and Collect",
        "Sizes": "4 to 13 US",
        "Opens": "live",
        "Closes": "06/03 @ 11AM CET",
        "url": "https://www.sneakersnstuff.com/en/937/sns-raffles"
    },

    "Solebox": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/SoleBox.jpg'git",
        "country": "Germany",
        "purchase": "In-Store/Online",
        "collection": "Post and Collect",
        "Sizes": "41 to 46 EU",
        "Opens": "announced",
        "Closes": "When sold out",
        "url": "https://www.solebox.com/en/Footwear/"
    },

};



/**
 * Logica que se  implementa
 */


/* var repositorio = require('raffles');*/


var contenedorZapatilla;
var contendorRifas;


/** Generamos el contenedor de datos de la zapatilla */

var loadZapatilla = function (object, place) {
    /** añadimos dinamicamente mas atributos al div */
    place.className += " rigth";

    /** Cargamos los datos de la zapatilla */
    place.appendChild(getTitulo(object));
    place.appendChild(getSubtitle(object));
    place.appendChild(getDescription(object));

}

var getTitulo = function (object) {
    let titulo = document.createElement("h1");
    titulo.textContent = object.model;
    return titulo;
}
var getSubtitle = function (object) {
    let subtitle = document.createElement("h2");
    subtitle.textContent = object.colour;
    return subtitle;
}
var getDescription = function (object) {
    let description = document.createElement("h3");
    description.textContent = object.code + " | " + object.avaliable + " | " + object.price;
    return description;
}


/** Generamos el contenedor de una rifa */
var createRifa = function (object, nombreObjeto) {
    let rifaContainer = document.createElement("div");
    rifaContainer.className = "col-4 row";
    rifaContainer.appendChild(getLogo(object));
    rifaContainer.appendChild(getDatosRifa(object, nombreObjeto));
    return rifaContainer;
}

var getLogo = function (object) {
    let logoC = document.createElement("img");
    logoC.src = object.logo;
    logoC.className = "logoStyle";
    return logoC;
}

var getDatosRifa = function (object, nombreObjeto) {
    let datosContainer = document.createElement("div");
    datosContainer.className = "w-75 m-auto text-center";
    datosContainer.appendChild(getTituloRifa(nombreObjeto));
    return datosContainer;
}

var getTituloRifa = function (nombreObjeto) {
    let titulo = document.createElement("h4");
    titulo.textContent = nombreObjeto;
    return titulo;
}


var getAllRifas = function (object, place) {
    let numeroRifas = Object.values(object).length;
    let listaObjetosRifa = Object.values(object);
    let listaNombresRifa = Object.getOwnPropertyNames(object)
    for (let index = 0; index < numeroRifas; index++) {
        if (listaNombresRifa[index] != "length") {
            console.log(listaNombresRifa[index]);
            console.log(listaObjetosRifa[index]);
            place.appendChild(createRifa(listaObjetosRifa[index], listaNombresRifa[index]));
        }
    }
}



/** 
    "Antonia Milano": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/AntoniaMilano.jpg",
        "country": "Italy",
        "purchase": "Online Raffle",
        "collection": "Postage Available",
        "Sizes": "4 to 12 US",
        "Opens": "live",
        "Closes": "06/03 @ 11AM CET",
        "url": "https://www.antonia.it/164-shoes"
    },
 */


window.onload = function () {
    /** Localizamos los contenedores de los datos */
    contenedorZapatilla = document.getElementById("datosZapa");
    contendorRifas = document.getElementById("contendorRifas");
    loadZapatilla(shoe, contenedorZapatilla);
    getAllRifas(raffles, contendorRifas);




}