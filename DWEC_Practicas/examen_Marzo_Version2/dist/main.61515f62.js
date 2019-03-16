// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"data/raffles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.raffles = exports.shoe = void 0;
var shoe = {
  "model": "Sacai x Nike LDV Waffle",
  "colour": "Varsity Blue/Del Sol/Varsity Red",
  "code": "BV0073-400",
  "avaliable": "07/03/19",
  "price": "180$"
};
exports.shoe = shoe;
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
  }
};
/*
exports.sole = {
    "shoe": shoe,
    "raffles": raffles
};
*/

exports.raffles = raffles;
},{}],"data/shoe.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShoeDTO = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShoeDTO = function ShoeDTO(object) {
  _classCallCheck(this, ShoeDTO);

  for (var propiedad in object) {
    this[propiedad] = object[propiedad];
  }
};

exports.ShoeDTO = ShoeDTO;
;
},{}],"data/htmlContructor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.singletonHtml = singletonHtml;

var _main = require("./main");

var htmlConstructor = {
  loadZapatilla: function loadZapatilla(object, place) {
    /** añadimos dinamicamente mas atributos al div */
    place.className += " rigth";
    /** Cargamos los datos de la zapatilla */

    place.appendChild(getTitulo(object));
    place.appendChild(getSubtitle(object));
    place.appendChild(getDescription(object));
  },
  loadAllRifas: function loadAllRifas(listaObjetos, place) {
    place.className = "row d-wrap m-auto w-75";
    listaObjetos.forEach(function (objeto) {
      place.appendChild(createRifa(objeto));
    });
  },
  loadFiltros: function loadFiltros(objeto, place) {
    place.appendChild(newFilterContainer(objeto));
  },
  updateStorage: function updateStorage(nombreTienda) {
    var nombre = nombreTienda;

    if (localStorage.getItem(nombre) && localStorage.getItem(nombre) == "true") {
      localStorage.setItem(nombre, false);

      var _boton = document.getElementById(nombre);

      _boton.innerText = "Mark as Entered";
    } else {
      localStorage.setItem(nombre, true);

      var _boton2 = document.getElementById(nombre);

      _boton2.innerText = "Entered";
    }
  }
};
/* 
=====================================
// Creamos el contenedor de filtros
====================================
*/

var newFilterContainer = function newFilterContainer(objeto) {
  var lista = document.createElement("div");
  lista.className = "btn-toolbar col-12 w-75 m-auto pt-5 pb-3 d-flex justify-content-around";
  lista.setAttribute('role', 'toolbar');
  lista.appendChild(subconjunto("allGroup", ["all"]));
  Object.keys(objeto).forEach(function (listaFiltros) {
    lista.appendChild(subconjunto(listaFiltros, objeto[listaFiltros]));
  });
  return lista;
};

var subconjunto = function subconjunto(filtro, valores) {
  var subFiltros = document.createElement("div");
  subFiltros.className = "btn-group mr-2";
  subFiltros.setAttribute('role', 'group');
  subFiltros.id = filtro;
  valores.forEach(function (valor) {
    subFiltros.appendChild(getBotonFiltro(valor));
  });
  return subFiltros;
};

var getBotonFiltro = function getBotonFiltro(filtro) {
  var botonFiltro = document.createElement("button");
  botonFiltro.id = filtro;
  botonFiltro.textContent = filtro.toUpperCase();
  botonFiltro.setAttribute('type', 'button');
  botonFiltro.setAttribute('value', 'false');
  botonFiltro.classList.add('btn', 'btn-outline-success');
  botonFiltro.addEventListener("click", function (ev) {
    if (botonFiltro.value == 'true') {
      desactivarBoton(this);
    } else {
      activarBoton(this);
    }

    ;
    aplicarFiltros(this);
  });
  return botonFiltro;
};

var desactivarBoton = function desactivarBoton(boton) {
  boton.classList.add('btn-outline-success');
  boton.classList.remove('btn-success');
  boton.setAttribute('value', 'false');
};

var activarBoton = function activarBoton(boton) {
  boton.classList.add('btn-success');
  boton.classList.remove('btn-outline-success');
  boton.setAttribute('value', 'true');

  if (boton.id != 'all') {
    var botonAll = document.getElementById('all');
    desactivarBoton(botonAll);
  } else {
    desactivarRestoBotones(boton);
  }
};
/*
Sabiendo que el boton es 'all' utilizo node.parentElement, para buscar a la caja contenedora
y creo un bucle mientras tenga mas cajas contenedoras para desactivar todos los botones.
*/


var desactivarRestoBotones = function desactivarRestoBotones(botonAll) {
  var cajaBotonAll = botonAll.parentElement;
  var siguienteCaja = cajaBotonAll.nextSibling;

  while (siguienteCaja) {
    if (siguienteCaja.hasChildNodes()) {
      siguienteCaja.childNodes.forEach(function (elemento) {
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


var aplicarFiltros = function aplicarFiltros(boton) {
  console.log('valor del boton -->', boton.value);

  if (boton.id == 'all' && boton.value == 'true') {
    vaciarContenedor(_main.contendorRifas);
    console.log('todos borrados');
    htmlConstructor.loadAllRifas(_main.paginaObject.listaRifas, _main.contendorRifas);
    delete _main.paginaObject.rifasFiltradas;
    console.log('Borrada propiedad rifas Filtradas, racargadas todas las rifas');
  } else if (boton.id != 'all') {
    if (!_main.paginaObject.hasOwnProperty('rifasFiltradas')) {
      _main.paginaObject.rifasFiltradas = new Array();
      htmlConstructor.loadAllRifas(listaActual(_main.paginaObject.listaRifas, boton), _main.contendorRifas);
    } else {
      htmlConstructor.loadAllRifas(listaActual(_main.paginaObject.rifasFiltradas, boton), _main.contendorRifas);
    }

    ;
  }

  ;
};
/*
Aquí borro la lista desde el último al primero por que si no solo borra la mitad
al quitar la posición 0 el resto de la lista en el siguiente bucle a reducido su indice en 1

*/


var vaciarContenedor = function vaciarContenedor(contenedor) {
  var listaHijos = contenedor.childNodes;

  for (var index = listaHijos.length - 1; index >= 0; index--) {
    console.log(listaHijos[index]);
    listaHijos[index].remove();
  }

  ;
};
/* 
hay que iterar sobre los objetos de la lista en función del boton.
*/


var listaActual = function listaActual(listaObjetos) {
  var listaSalida = new Array();

  _main.paginaObject.rifasFiltradas.push(boton); // TODO


  return listaSalida;
};
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


var getTitulo = function getTitulo(object) {
  var titulo = document.createElement("h1");
  titulo.className = 'pb-3';
  titulo.textContent = object.model;
  return titulo;
};

var getSubtitle = function getSubtitle(object) {
  var subtitle = document.createElement("h2");
  subtitle.className = 'py-3';
  subtitle.textContent = object.colour;
  return subtitle;
};

var getDescription = function getDescription(object) {
  var description = document.createElement("h3");
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


var createRifa = function createRifa(object) {
  var rifaContainer = document.createElement("div");
  rifaContainer.className = "col-3  p-2";
  rifaContainer.appendChild(getLogo(object));
  rifaContainer.appendChild(getDatosRifa(object));
  return rifaContainer;
};

var getLogo = function getLogo(object) {
  var logoC = document.createElement("img");
  logoC.src = object.getLogo();
  logoC.className = "logoStyle img-fluid";
  return logoC;
};

var getDatosRifa = function getDatosRifa(object) {
  var datosContainer = document.createElement("div");
  datosContainer.className = "w-75 m-auto text-center pt-4";
  datosContainer.appendChild(getTituloRifa(object));
  datosContainer.appendChild(getInfoRifa(object));
  return datosContainer;
};

var getTituloRifa = function getTituloRifa(object) {
  var titulo = document.createElement("h4");
  titulo.textContent = object.nombre;
  titulo.style.fontWeight = "bold";
  return titulo;
};

var getInfoRifa = function getInfoRifa(object) {
  var infoContainer = document.createElement("div");
  infoContainer.className = "w-100 text-center pt-2";
  infoContainer.appendChild(getParrafo(object));
  infoContainer.appendChild(getBr());
  infoContainer.appendChild(getButton(object));
  infoContainer.appendChild(getBr());
  infoContainer.appendChild(getButtonEntered(object));
  return infoContainer;
};

var getParrafo = function getParrafo(object) {
  var span = document.createElement("pre");
  span.textContent = object.toString();
  return span;
};

var getBr = function getBr() {
  var br = document.createElement("br");
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


var getButton = function getButton(object) {
  var enlace = document.createElement("a");
  enlace.href = object.getUrl();
  var button = document.createElement("button");
  button.addEventListener("mouseover", function () {
    button.style.opacity = "0.5";
  });
  button.addEventListener("mouseout", function () {
    button.style.opacity = "1";
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


var getButtonEntered = function getButtonEntered(objeto) {
  var button = document.createElement("button");
  button.style.fontWeight = "bold";
  button.className = "btn py-3";
  button.id = objeto.nombre;
  button.name = objeto.nombre;
  button.addEventListener("click", function () {
    htmlConstructor.updateStorage(objeto.nombre);
  }, true); //button.onclick = updateStorage(button.name);

  if (localStorage.getItem(objeto.nombre) && localStorage.getItem(objeto.nombre) == "true") {
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


function singletonHtml() {
  var prototipo = htmlConstructor;
  return {
    get: function get() {
      return prototipo;
    }
  };
}

;
},{"./main":"data/main.js"}],"data/filter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.singletonFilter = singletonFilter;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Filter =
/*#__PURE__*/
function () {
  function Filter() {
    _classCallCheck(this, Filter);

    console.log("soy un filtro");
  }

  _createClass(Filter, [{
    key: "toString",
    value: function toString() {
      return "estoy vivo";
    }
  }, {
    key: "addFilterProperty",
    value: function addFilterProperty(propiedadNombre, propiedadValor) {
      if (propiedadNombre.includes("country")) {
        if (this[propiedadNombre]) {
          this[propiedadNombre] = poblarPropiedadTipoSet(this[propiedadNombre], dameCountries(propiedadValor));
          /* for (var property of dameCountries(propiedadValor)) {
               //this[propiedadNombre].push(property);
               if (!this[propiedadNombre].has(property)) {
                   this[propiedadNombre].add(property);
               }
           };*/
        } else {
          this[propiedadNombre] = dameCountries(propiedadValor);
        }

        ;
      } else if (propiedadNombre.includes("purchase")) {
        if (this[propiedadNombre]) {
          this[propiedadNombre] = poblarPropiedadTipoSet(this[propiedadNombre], damePurchases(propiedadValor));
          /*for (var property of damePurchases(propiedadValor)) {
              console.log(property);
              if (!this[propiedadNombre].has(property)) {
                  this[propiedadNombre].add(property);
              }
          };*/
        } else {
          this[propiedadNombre] = damePurchases(propiedadValor);
        }

        ;
      } else if (propiedadNombre.includes("collection")) {
        if (this[propiedadNombre]) {
          this[propiedadNombre] = poblarPropiedadTipoSet(this[propiedadNombre], dameCollections(propiedadValor));
          /*for (var property of dameCollections(propiedadValor)) {
              if (!this[propiedadNombre].has(property)) {
                  this[propiedadNombre].add(property);
              }
          };*/
        } else {
          this[propiedadNombre] = dameCollections(propiedadValor);
        }

        ;
      }

      ;
    }
  }]);

  return Filter;
}();

;

var poblarPropiedadTipoSet = function poblarPropiedadTipoSet(arraySetAnterior, arraySetNuevo) {
  Set.prototype.union = function (setB) {
    var union = new Set(this);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = setB[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var elem = _step.value;
        union.add(elem);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return union;
  };

  var anterior = new Set(arraySetAnterior);
  return anterior.union(arraySetNuevo);
};

var dameCountries = function dameCountries(cadenaPalabras) {
  var listaPalabras = new Set();

  if (cadenaPalabras.includes(",")) {
    var listaProvisional = cadenaPalabras.split(',');
    listaProvisional.forEach(function (palabra) {
      if (palabra.includes("Fr") || palabra.includes("France")) {
        listaPalabras.add("France");
      } else if (palabra.includes("It") || palabra.includes("Italy")) {
        listaPalabras.add("Italy");
      } else if (palabra.includes("UK") || palabra.includes("United Kingdom")) {
        listaPalabras.add("UK");
      } else if (palabra.includes("Ger") || palabra.includes("Germany")) {
        listaPalabras.add("Germany");
      } else if (palabra.includes("Swe") || palabra.includes("Sweeden")) {
        listaPalabras.add("Sweeden");
      } else {
        listaPalabras.add(palabra);
      }

      ;
    });
  } else {
    listaPalabras.add(cadenaPalabras.trim());
  }

  return listaPalabras;
};

var damePurchases = function damePurchases(cadenaPalabras) {
  var listaPalabras = new Set();

  if (cadenaPalabras.includes('/')) {
    listaPalabras = cadenaPalabras.split('/');
  } else {
    listaPalabras = cadenaPalabras.split(' ');
  }

  return listaPalabras;
};

var dameCollections = function dameCollections(cadenaPalabras) {
  var listaPalabras = new Set();

  if (cadenaPalabras.includes('Only')) {
    listaPalabras.add(cadenaPalabras.split('Only')[0].trim());
  } else if (cadenaPalabras.includes('and')) {
    listaPalabras.add(cadenaPalabras.split('and')[0].trim());
  } else if (cadenaPalabras.includes('vailable')) {
    listaPalabras.add(cadenaPalabras.split('Available')[0].trim());
  }

  ;
  return listaPalabras;
}; // singleton de objeto filtro


function singletonFilter() {
  var prototipo = new Filter();
  return {
    get: function get() {
      return prototipo;
    }
  };
}

;
},{}],"data/rifa.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RifaDTO = void 0;

var _main = require("./main");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RifaDTO = function RifaDTO(object, nombreIn) {
  var _this = this;

  _classCallCheck(this, RifaDTO);

  this.nombre = nombreIn || "";
  this.filtros = new Set();
  var objectString = "";
  var propiedades = Object.keys(object);
  propiedades.forEach(function (propiedad) {
    if (object[propiedad].includes("http")) {
      var generaGet = 'get' + getCapitalize(propiedad);

      _this[generaGet] = function () {
        return object[propiedad];
      }; //getPropertyURL(propiedad, object[propiedad]);

    } else {
      _this[propiedad] = object[propiedad];
      objectString += updateToString(propiedad, _this[propiedad]);

      _main.Filters.addFilterProperty(propiedad, _this[propiedad]);
    }
  });
  /**
   * Creo el toString de forma dinamica con todas las propiedades que no 
   * son "http..."
   */

  this.toString = function () {
    return objectString;
  };
};

exports.RifaDTO = RifaDTO;
;
/**
 *
 *
 * @param { String } propiedad
 * @param {String} valueURL
 * @memberof RifaDTO
 */

var getPropertyURL = function getPropertyURL(propiedad, valueURL) {
  var generaGet = 'get' + getCapitalize(propiedad);

  if (propiedad in RifaDTO) {
    RifaDTO[generaGet] = valueURL;
  } else {
    /** 
     * El problema es que al exportar este objeto 
     * las propiedades no enumerables , no son visibles.
     * 
    Object.defineProperty(RifaDTO, propiedad, {
         value: valueURL,
         writable: true,
         enumerable: false,
         configurable: true
     });*/

    /** 
      * genero funcion get del atributo, el problema 
      * es que tmapoco es visible en documento donde se importa
      * 
    Oject.defineProperty(RifaDTO, propiedad, {
        get: function() { return valueURL; }
    });
    */

    /*RifaDTO[generaGet] = function() {
        return valueURL;
    };*/
    RifaDTO[generaGet] = function () {
      return valueURL;
    };
  }

  ;
};

var updateToString = function updateToString(propiedad, valor) {
  if (propiedad.includes('Size')) {
    return '\n Size - ' + valor;
  } else if (propiedad.includes('Opens')) {
    return '\n Opens - ' + valor;
  } else if (propiedad.includes('Closes')) {
    return '\n Closes - ' + valor;
  } else {
    return '\n ' + valor;
  }

  ;
};

var getCapitalize = function getCapitalize(palabra) {
  var output = palabra[0].toUpperCase() + palabra.slice(1).toLowerCase();
  return output;
};
},{"./main":"data/main.js"}],"data/pgWeb.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.singletonPgWeb = singletonPgWeb;

var _rifa = require("./rifa");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PgWeb =
/*#__PURE__*/
function () {
  function PgWeb() {
    _classCallCheck(this, PgWeb);

    console.log("este objeto es la dimension pagina web");
    this.listaRifas = new Array();
    this.filtros = new Object();
  }

  _createClass(PgWeb, [{
    key: "addListaRifas",
    value: function addListaRifas(dataSource) {
      var nombresObjetos = Object.getOwnPropertyNames(dataSource);

      for (var index = 0; index < nombresObjetos.length; index++) {
        var rifa = new _rifa.RifaDTO(dataSource[nombresObjetos[index]], nombresObjetos[index]);
        this.listaRifas.push(rifa);
      }
    }
  }, {
    key: "addFiltros",
    value: function addFiltros(dataSource) {
      Object.assign(this.filtros, dataSource);
    }
  }]);

  return PgWeb;
}(); // singleton de objeto pagina web, solo quiero un objeto en todo el funcionamiento


function singletonPgWeb() {
  var prototipo = new PgWeb();
  return {
    get: function get() {
      return prototipo;
    }
  };
}

;
},{"./rifa":"data/rifa.js"}],"C:/Users/david.gomezmartinez/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"C:/Users/david.gomezmartinez/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"C:/Users/david.gomezmartinez/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"css/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/david.gomezmartinez/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"data/main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contendorRifas = exports.paginaObject = exports.Filters = void 0;

var _raffles = require("./raffles");

var _shoe = require("./shoe");

var _htmlContructor = require("./htmlContructor");

var _filter = require("./filter");

var _pgWeb = require("./pgWeb");

var _style = _interopRequireDefault(require("../css/style.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Filters = (0, _filter.singletonFilter)().get();
exports.Filters = Filters;
var paginaObject = (0, _pgWeb.singletonPgWeb)().get();
exports.paginaObject = paginaObject;
var toHtml = (0, _htmlContructor.singletonHtml)().get();
var contendorRifas;
exports.contendorRifas = contendorRifas;

window.onload = function () {
  /** Localizamos los contenedores de los datos */
  var contenedorZapatilla = document.getElementById("datosZapa");
  exports.contendorRifas = contendorRifas = document.getElementById("contendorRifas");
  var contenedorFiltros = document.getElementById("zapatilla"); // Creamos todos los objetos y los añadimos a
  // pagina object, actua como un contenedor de datos.

  paginaObject.addListaRifas(_raffles.raffles);
  paginaObject.addFiltros(Filters);
  paginaObject.shoe = new _shoe.ShoeDTO(_raffles.shoe);
  console.log(paginaObject);
  console.log(Filters);
  console.log(toHtml); //window.alert('mirar en la consola ,pulsa F12');
  // Poblamos el html.

  toHtml.loadZapatilla(paginaObject.shoe, contenedorZapatilla);
  toHtml.loadAllRifas(paginaObject.listaRifas, contendorRifas);
  toHtml.loadFiltros(paginaObject.filtros, contenedorFiltros);
};
},{"./raffles":"data/raffles.js","./shoe":"data/shoe.js","./htmlContructor":"data/htmlContructor.js","./filter":"data/filter.js","./pgWeb":"data/pgWeb.js","../css/style.css":"css/style.css"}],"C:/Users/david.gomezmartinez/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64493" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/david.gomezmartinez/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","data/main.js"], null)
//# sourceMappingURL=/main.61515f62.js.map