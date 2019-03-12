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
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/SoleBox.jpg",
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
    datosContainer.appendChild(getInfoRifa(object, nombreObjeto));
    return datosContainer;
}

var getTituloRifa = function (nombreObjeto) {
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

var getInfoRifa = function (object, nombreObjeto) {
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
var getSpan = function (value) {
    let span = document.createElement("span");
    span.textContent = value;
    return span;
}
var getSpanSize = function (value) {
    let span = document.createElement("span");
    span.textContent = "Size - " + value;
    return span;
}
var getSpanOpens = function (value) {
    let span = document.createElement("span");
    span.textContent = "Opens - " + value;
    return span;
}
var getSpanClose = function (value) {
    let span = document.createElement("span");
    span.textContent = "Closes - " + value;
    return span;
}
var getBr = function () {
    let br = document.createElement("br");
    return br;
}
/**
 * Creo el boton y añado para capturar evento over
 */
var getButton = function (object) {
    let enlace = document.createElement("a");
    enlace.href = object.url;
    let button = document.createElement("button");

    button.addEventListener("mouseover", function () {
        button.style.opacity = "0.5"
    });
    button.addEventListener("mouseout", function () {
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
    button.addEventListener("click", function() { updateStorage(nombreTienda); }, true);
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



var getAllRifas = function (object, place) {
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

window.onload = function () {
    /** Localizamos los contenedores de los datos */
    contenedorZapatilla = document.getElementById("datosZapa");
    contendorRifas = document.getElementById("contendorRifas");

    loadZapatilla(shoe, contenedorZapatilla);
    getAllRifas(raffles, contendorRifas);

    //console.log(filtros);



}
