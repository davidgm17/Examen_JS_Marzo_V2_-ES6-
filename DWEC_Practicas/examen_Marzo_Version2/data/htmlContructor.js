var htmlConstructor = {

    loadZapatilla: function(object, place) {
        console.log(object);

        /** añadimos dinamicamente mas atributos al div */
        place.className += " rigth";
        /** Cargamos los datos de la zapatilla */
        place.appendChild(getTitulo(object));
        place.appendChild(getSubtitle(object));
        place.appendChild(getDescription(object));

    },

    loadAllRifas: function(listaObjetos, place) {
        place.className = "row d-wrap m-auto w-75";
        /* let numeroRifas = Object.values(object).length;
             let listaObjetosRifa = Object.values(object);
             let listaNombresRifa = Object.getOwnPropertyNames(object);
             for (let index = 0; index < numeroRifas; index++) {
                 if (listaNombresRifa[index] != "length") {
                     place.appendChild(createRifa(listaObjetosRifa[index], listaNombresRifa[index]));
                 }
             }*/
        listaObjetos.forEach(objeto => {
            place.appendChild(createRifa(objeto));

        });

    }




};

/**
 * Aqui están las funciones con las que voy a crear los diferentes elementos
 * pero no seran visibles en el main.
 * 
 */

// funciones para la zapatilla

let getTitulo = function(object) {
    let titulo = document.createElement("h1");
    titulo.className = 'pb-3';
    titulo.textContent = object.model;
    return titulo;
};

let getSubtitle = function(object) {
    let subtitle = document.createElement("h2");
    subtitle.className = 'py-3';
    subtitle.textContent = object.colour;
    return subtitle;
};
let getDescription = function(object) {
    let description = document.createElement("h3");
    description.className = 'py-3';
    description.textContent = object.code + " | " + object.avaliable + " | " + object.price;
    return description;
};

// funciones para las tarjetas de las rifas.

/** Generamos el contenedor de una rifa */
let createRifa = function(object) {
    let rifaContainer = document.createElement("div");
    rifaContainer.className = "col-3  p-2";
    rifaContainer.appendChild(getLogo(object));
    rifaContainer.appendChild(getDatosRifa(object));
    return rifaContainer;
};

let getLogo = function(object) {
    let logoC = document.createElement("img");
    logoC.src = object.getLogo();
    logoC.className = "logoStyle img-fluid";
    return logoC;
};

let getDatosRifa = function(object) {
    let datosContainer = document.createElement("div");
    datosContainer.className = "w-75 m-auto text-center";
    datosContainer.appendChild(getTituloRifa(object));
    datosContainer.appendChild(getInfoRifa(object));
    return datosContainer;
};

let getTituloRifa = function(object) {
    let titulo = document.createElement("h4");
    titulo.textContent = object.nombre;
    titulo.style.fontWeight = "bold";
    return titulo;
};
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

let getInfoRifa = function(object) {
    let infoContainer = document.createElement("div");
    infoContainer.className = "w-100 text-center";
    infoContainer.appendChild(getSpan(object));
    /*
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
    infoContainer.appendChild(getSpanClose(object.Closes));*/
    infoContainer.appendChild(getBr());
    infoContainer.appendChild(getButton(object));
    infoContainer.appendChild(getBr());
    infoContainer.appendChild(getButtonEntered(object));
    return infoContainer;
};
let getSpan = function(object) {
    let span = document.createElement("span");
    span.textContent = object.toString();
    return span;
};
let getSpanSize = function(value) {
    let span = document.createElement("span");
    span.textContent = "Size - " + value;
    return span;
};
let getSpanOpens = function(value) {
    let span = document.createElement("span");
    span.textContent = "Opens - " + value;
    return span;
};
let getSpanClose = function(value) {
    let span = document.createElement("span");
    span.textContent = "Closes - " + value;
    return span;
};
let getBr = function() {
    let br = document.createElement("br");
    return br;
};
/**
 * Creo el boton y añado para capturar evento over
 */
let getButton = function(object) {
    let enlace = document.createElement("a");
    enlace.href = object.getUrl();
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
};

/**
 * creo  boton entered y capturo el evento para guardarlo en local storage
 */

let getButtonEntered = function(objeto) {
    let button = document.createElement("button");
    button.style.fontWeight = "bold";
    button.className = "btn";
    button.id = objeto.nombre;
    button.name = objeto.nombre;
    button.addEventListener("click", function() {
        updateStorage(objeto.nombre);
    }, true);
    //button.onclick = updateStorage(button.name);
    if ((localStorage.getItem(objeto.nombre)) && (localStorage.getItem(objeto.nombre) == "true")) {
        button.innerText = "Entered";

    } else {
        button.innerText = "Mark as Entered";
        localStorage.setItem(objeto.nombre, false);
    }
    return button;
};

export function singletonHtml() {

    const prototipo = htmlConstructor;

    return {
        get: function() {
            return prototipo;
        }
    };
};