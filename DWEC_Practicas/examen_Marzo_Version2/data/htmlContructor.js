import {
    paginaObject,
    contendorRifas
} from './main';
var htmlConstructor = {

    loadZapatilla: function(object, place) {
        /** añadimos dinamicamente mas atributos al div */
        place.className += " rigth";
        /** Cargamos los datos de la zapatilla */
        place.appendChild(getTitulo(object));
        place.appendChild(getSubtitle(object));
        place.appendChild(getDescription(object));

    },

    loadAllRifas: function(listaObjetos, place) {
        place.className = "row d-wrap m-auto w-75";
        listaObjetos.forEach(objeto => {
            place.appendChild(createRifa(objeto));

        });

    },
    loadFiltros: function(objeto, place) {
        place.appendChild(newFilterContainer(objeto));
    },

    updateStorage: function(nombreTienda) {
        let nombre = nombreTienda;
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

};
/* 
=====================================
// Creamos el contenedor de filtros
====================================
*/


let newFilterContainer = function(objeto) {
    let lista = document.createElement("div");
    lista.className = "btn-toolbar col-12 w-75 m-auto pt-5 pb-3 d-flex justify-content-around";
    lista.setAttribute('role', 'toolbar');
    lista.appendChild(subconjunto("allGroup", ["all"]));

    Object.keys(objeto).forEach(listaFiltros => {
        lista.appendChild(subconjunto(listaFiltros, objeto[listaFiltros]));
    });
    return lista;
};

let subconjunto = function(filtro, valores) {
    let subFiltros = document.createElement("div");
    subFiltros.className = "btn-group mr-2";
    subFiltros.setAttribute('role', 'group');
    subFiltros.id = filtro;
    valores.forEach(valor => {
        subFiltros.appendChild(getBotonFiltro(valor));
    });
    return subFiltros;
};

let getBotonFiltro = function(filtro) {
    let botonFiltro = document.createElement("button");
    botonFiltro.id = filtro;
    botonFiltro.textContent = filtro.toUpperCase();
    botonFiltro.setAttribute('type', 'button');
    botonFiltro.setAttribute('value', 'false');
    botonFiltro.classList.add('btn', 'btn-outline-success');
    botonFiltro.addEventListener("click", function(ev) {

        if (botonFiltro.value == 'true') {
            desactivarBoton(this);

        } else {
            activarBoton(this);

        };
        aplicarFiltros(this);

    });
    return botonFiltro;
};
let desactivarBoton = function(boton) {
    boton.classList.add('btn-outline-success');
    boton.classList.remove('btn-success');
    boton.setAttribute('value', 'false');
};
let activarBoton = function(boton) {

    boton.classList.add('btn-success');
    boton.classList.remove('btn-outline-success');
    boton.setAttribute('value', 'true');
    if (boton.id != 'all') {
        let botonAll = document.getElementById('all');
        desactivarBoton(botonAll);
    } else {
        desactivarRestoBotones(boton);
    }
};

/*
Sabiendo que el boton es 'all' utilizo node.parentElement, para buscar a la caja contenedora
y creo un bucle mientras tenga mas cajas contenedoras para desactivar todos los botones.
*/

let desactivarRestoBotones = function(botonAll) {
    let cajaBotonAll = botonAll.parentElement;
    let siguienteCaja = cajaBotonAll.nextSibling;
    while (siguienteCaja) {
        if (siguienteCaja.hasChildNodes()) {
            siguienteCaja.childNodes.forEach(elemento => {
                if (elemento.type == 'button') desactivarBoton(elemento);
            });
        }
        siguienteCaja = siguienteCaja.nextSibling;
    }
};

/**
 * 
 * Función para aplicar filtros
 */

let aplicarFiltros = function(boton) {
    vaciarContenedor(contendorRifas);
    if (boton.id == 'all' && boton.value == 'true') {
        vaciarContenedor(contendorRifas);
        console.log('todos borrados');
        htmlConstructor.loadAllRifas(paginaObject.listaRifas, contendorRifas);
        delete paginaObject.rifasFiltradas;
        console.log('Borrada propiedad rifas Filtradas, racargadas todas las rifas');
    } else if (boton.id != 'all') {
        if (!paginaObject.hasOwnProperty('rifasFiltradas')) {
            paginaObject.rifasFiltradas = new Array();
            htmlConstructor.loadAllRifas(listaActual(paginaObject.listaRifas, boton), contendorRifas);
        } else {
            htmlConstructor.loadAllRifas(listaActual(paginaObject.rifasFiltradas, boton), contendorRifas);
        };
    };
};

/*
Aquí borro la lista desde el último al primero por que si no solo borra la mitad
al quitar la posición 0 el resto de la lista en el siguiente bucle a reducido su indice en 1

*/
let vaciarContenedor = function(contenedor) {
    let listaHijos = contenedor.childNodes;
    for (let index = (listaHijos.length - 1); index >= 0; index--) {
        listaHijos[index].remove();
    };
};

/* 
hay que iterar sobre los objetos de la lista en función del boton.
*/
let listaActual = function(listaObjetos, boton) {
        //let listaSalida = new Array();
        paginaObject.rifasFiltradas = [];
        let propiedad = boton.parentElement;
        propiedad = propiedad.id;
        let valor = boton.id;
        (propiedad == 'country') ? valor = valor.substring(0, 2): valor;
        listaObjetos.forEach(rifa => {
            if (rifa[propiedad].includes(valor)) {
                paginaObject.rifasFiltradas.push(rifa);
            };
        });
        console.log(paginaObject.rifasFiltradas);
        return paginaObject.rifasFiltradas;

    }
    /**
     * Aqui están las funciones con las que voy a crear los diferentes elementos
     * pero no seran visibles en el main.
     * 
     */
    /*
    ==============================================
    // funciones para la zapatilla
    ===============================================
    */
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
/*
==============================================
// funciones para las tarjetas de las rifas.
=============================================
*/
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
    datosContainer.className = "w-75 m-auto text-center pt-4";
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


let getInfoRifa = function(object) {
    let infoContainer = document.createElement("div");
    infoContainer.className = "w-100 text-center pt-2";
    infoContainer.appendChild(getParrafo(object));
    infoContainer.appendChild(getBr());
    infoContainer.appendChild(getButton(object));
    infoContainer.appendChild(getBr());
    infoContainer.appendChild(getButtonEntered(object));
    return infoContainer;
};
let getParrafo = function(object) {
    let span = document.createElement("pre");
    span.textContent = object.toString();
    return span;
};

let getBr = function() {
    let br = document.createElement("br");
    return br;
};


/* 
===========================================
 // Creamos los botones
===========================================
*/
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
    button.className = "btn py-3";
    button.id = objeto.nombre;
    button.name = objeto.nombre;
    button.addEventListener("click", function() {
        htmlConstructor.updateStorage(objeto.nombre);
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


/**
 * ===============================================
 * Exporto un solo objeto para toda la aplicacion.
 * 
 * Las funciones que están fuera del objeto , no son accesibles en el main.
 * ==============================================
 */
export function singletonHtml() {

    const prototipo = htmlConstructor;

    return {
        get: function() {
            return prototipo;
        }
    };
};