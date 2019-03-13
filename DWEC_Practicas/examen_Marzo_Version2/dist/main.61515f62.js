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
exports.raffles = raffles;
exports.sole = {
  "shoe": shoe,
  "raffles": raffles
};
},{}],"data/shoe.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShoeDTO = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ShoeDTO =
/*#__PURE__*/
function () {
  function ShoeDTO(object) {
    _classCallCheck(this, ShoeDTO);

    this.model = object.model;
    this.colour = object.model;
    this.code = object.model;
    this.avaliable = object.avaliable;
    this.price = object.price;
  }

  _createClass(ShoeDTO, [{
    key: "jsonToShoeDTO",
    value: function jsonToShoeDTO() {
      console.log('Te voy a parsear');
    }
  }]);

  return ShoeDTO;
}();

exports.ShoeDTO = ShoeDTO;
;
},{}],"data/rifa.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RifaDTO = function RifaDTO(object, nombre) {
  var _this = this;

  _classCallCheck(this, RifaDTO);

  this.name = nombre || "";
  var objectString = this.name;
  var propiedades = Object.keys(object);
  propiedades.forEach(function (propiedad) {
    if (object[propiedad].includes("http")) {
      getPropertyURL(propiedad, object[propiedad]);
    } else {
      _this[propiedad] = object[propiedad];
      objectString += updateToString(propiedad, _this[propiedad]);
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

;
/**
 *
 *
 * @param { String } propiedad
 * @param {String} valueURL
 * @memberof RifaDTO
 */

var getPropertyURL = function getPropertyURL(propiedad, valueURL) {
  if (propiedad in this) {
    RifaDTO[propiedad] = valueURL;
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
    var generaGet = 'get' + getCapitalize(propiedad);
    /*RifaDTO[generaGet] = function() {
        return valueURL;
    };*/

    RifaDTO.prototype[generaGet] = valueURL;
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

module.exports = RifaDTO;
},{}],"data/htmlContructor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.htmlConstructor = void 0;
var htmlConstructor = {
  loadZapatilla: function loadZapatilla(object, place) {
    /** añadimos dinamicamente mas atributos al div */
    place.className += " rigth";
    /** Cargamos los datos de la zapatilla */

    place.appendChild(getTitulo(object));
    place.appendChild(getSubtitle(object));
    place.appendChild(getDescription(object));
  },

  /** Generamos el contenedor de una rifa */
  createRifa: function createRifa(object, nombreObjeto) {
    var rifaContainer = document.createElement("div");
    rifaContainer.className = "col-4 row";
    rifaContainer.appendChild(getLogo(object));
    rifaContainer.appendChild(getDatosRifa(object, nombreObjeto));
    return rifaContainer;
  },
  getLogo: function getLogo(object) {
    var logoC = document.createElement("img");
    logoC.src = object.logo;
    logoC.className = "logoStyle";
    return logoC;
  },
  getDatosRifa: function getDatosRifa(object, nombreObjeto) {
    var datosContainer = document.createElement("div");
    datosContainer.className = "w-75 m-auto text-center";
    datosContainer.appendChild(getTituloRifa(nombreObjeto));
    datosContainer.appendChild(getInfoRifa(object, nombreObjeto));
    return datosContainer;
  },
  getTituloRifa: function getTituloRifa(nombreObjeto) {
    var titulo = document.createElement("h4");
    titulo.textContent = nombreObjeto;
    titulo.style.fontWeight = "bold";
    return titulo;
  },

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
  getInfoRifa: function getInfoRifa(object, nombreObjeto) {
    var infoContainer = document.createElement("div");
    infoContainer.className = "w-100 text-center";
    Object.values(object).forEach(function (element) {
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
    infoContainer.appendChild(this.getButtonEntered(nombreObjeto));
    return infoContainer;
  },
  getSpan: function getSpan(value) {
    var span = document.createElement("span");
    span.textContent = value;
    return span;
  },
  getSpanSize: function getSpanSize(value) {
    var span = document.createElement("span");
    span.textContent = "Size - " + value;
    return span;
  },
  getSpanOpens: function getSpanOpens(value) {
    var span = document.createElement("span");
    span.textContent = "Opens - " + value;
    return span;
  },
  getSpanClose: function getSpanClose(value) {
    var span = document.createElement("span");
    span.textContent = "Closes - " + value;
    return span;
  },
  getBr: function getBr() {
    var br = document.createElement("br");
    return br;
  },

  /**
   * Creo el boton y añado para capturar evento over
   */
  getButton: function getButton(object) {
    var enlace = document.createElement("a");
    enlace.href = object.url;
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
  },

  /**
   * creo  boton entered y capturo el evento para guardarlo en local storage
   */
  getButtonEntered: function getButtonEntered(nombreTienda) {
    var button = document.createElement("button");
    button.style.fontWeight = "bold";
    button.className = "btn";
    button.id = nombreTienda;
    button.name = nombreTienda;
    button.addEventListener("click", function () {
      updateStorage(nombreTienda);
    }, true); //button.onclick = updateStorage(button.name);

    if (localStorage.getItem(nombreTienda) && localStorage.getItem(nombreTienda) == "true") {
      button.innerText = "Entered";
    } else {
      button.innerText = "Mark as Entered";
      localStorage.setItem(nombreTienda, false);
    }

    return button;
  }
};
exports.htmlConstructor = htmlConstructor;

var getTitulo = function getTitulo(object) {
  var titulo = document.createElement("h1");
  titulo.textContent = object.model;
  return titulo;
};

var getSubtitle = function getSubtitle(object) {
  var subtitle = document.createElement("h2");
  subtitle.textContent = object.colour;
  return subtitle;
};

var getDescription = function getDescription(object) {
  var description = document.createElement("h3");
  description.textContent = object.code + " | " + object.avaliable + " | " + object.price;
  return description;
};
},{}],"C:/Users/david.gomezmartinez/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
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

var _shoe = require("./shoe");

var _htmlContructor = require("./htmlContructor");

require("../css/style.css");

var datasource = require('./raffles');

var RifaDto = require('./rifa');

/**
 * Logica que se  implementa
 */

/* var repositorio = require('raffles');*/

/** Generamos el contenedor de datos de la zapatilla */
var loadZapatilla = function loadZapatilla(object, place) {
  /** añadimos dinamicamente mas atributos al div */
  place.className += " rigth";
  /** Cargamos los datos de la zapatilla */

  place.appendChild(getTitulo(object));
  place.appendChild(getSubtitle(object));
  place.appendChild(getDescription(object));
};

var getTitulo = function getTitulo(object) {
  var titulo = document.createElement("h1");
  titulo.textContent = object.model;
  return titulo;
};

var getSubtitle = function getSubtitle(object) {
  var subtitle = document.createElement("h2");
  subtitle.textContent = object.colour;
  return subtitle;
};

var getDescription = function getDescription(object) {
  var description = document.createElement("h3");
  description.textContent = object.code + " | " + object.avaliable + " | " + object.price;
  return description;
};
/** Generamos el contenedor de una rifa */


var createRifa = function createRifa(object, nombreObjeto) {
  var rifaContainer = document.createElement("div");
  rifaContainer.className = "col-4 row";
  rifaContainer.appendChild(getLogo(object));
  rifaContainer.appendChild(getDatosRifa(object, nombreObjeto));
  return rifaContainer;
};

var getLogo = function getLogo(object) {
  var logoC = document.createElement("img");
  logoC.src = object.logo;
  logoC.className = "logoStyle";
  return logoC;
};

var getDatosRifa = function getDatosRifa(object, nombreObjeto) {
  var datosContainer = document.createElement("div");
  datosContainer.className = "w-75 m-auto text-center";
  datosContainer.appendChild(getTituloRifa(nombreObjeto));
  datosContainer.appendChild(getInfoRifa(object, nombreObjeto));
  return datosContainer;
};

var getTituloRifa = function getTituloRifa(nombreObjeto) {
  var titulo = document.createElement("h4");
  titulo.textContent = nombreObjeto;
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


var getInfoRifa = function getInfoRifa(object, nombreObjeto) {
  var infoContainer = document.createElement("div");
  infoContainer.className = "w-100 text-center";
  Object.values(object).forEach(function (element) {
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
};

var getSpan = function getSpan(value) {
  var span = document.createElement("span");
  span.textContent = value;
  return span;
};

var getSpanSize = function getSpanSize(value) {
  var span = document.createElement("span");
  span.textContent = "Size - " + value;
  return span;
};

var getSpanOpens = function getSpanOpens(value) {
  var span = document.createElement("span");
  span.textContent = "Opens - " + value;
  return span;
};

var getSpanClose = function getSpanClose(value) {
  var span = document.createElement("span");
  span.textContent = "Closes - " + value;
  return span;
};

var getBr = function getBr() {
  var br = document.createElement("br");
  return br;
};
/**
 * Creo el boton y añado para capturar evento over
 */


var getButton = function getButton(object) {
  var enlace = document.createElement("a");
  enlace.href = object.url;
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


var getButtonEntered = function getButtonEntered(nombreTienda) {
  var button = document.createElement("button");
  button.style.fontWeight = "bold";
  button.className = "btn";
  button.id = nombreTienda;
  button.name = nombreTienda;
  button.addEventListener("click", function () {
    updateStorage(nombreTienda);
  }, true); //button.onclick = updateStorage(button.name);

  if (localStorage.getItem(nombreTienda) && localStorage.getItem(nombreTienda) == "true") {
    button.innerText = "Entered";
  } else {
    button.innerText = "Mark as Entered";
    localStorage.setItem(nombreTienda, false);
  }

  return button;
};

var updateStorage = function updateStorage(nombreTienda) {
  var nombre = nombreTienda;
  console.log(nombre);

  if (localStorage.getItem(nombre) && localStorage.getItem(nombre) == "true") {
    localStorage.setItem(nombre, false);
    var boton = document.getElementById(nombre);
    boton.innerText = "Mark as Entered";
  } else {
    localStorage.setItem(nombre, true);

    var _boton = document.getElementById(nombre);

    _boton.innerText = "Entered";
  }
};

var getAllRifas = function getAllRifas(object, place) {
  place.className = "row d-wrap m-auto";
  var numeroRifas = Object.values(object).length;
  var listaObjetosRifa = Object.values(object);
  var listaNombresRifa = Object.getOwnPropertyNames(object);

  for (var index = 0; index < numeroRifas; index++) {
    if (listaNombresRifa[index] != "length") {
      place.appendChild(createRifa(listaObjetosRifa[index], listaNombresRifa[index]));
    }
  }
};

var contenedorZapatilla;
var contendorRifas;
var fitros = {};

window.onload = function () {
  /** Localizamos los contenedores de los datos */
  contenedorZapatilla = document.getElementById("datosZapa");
  contendorRifas = document.getElementById("contendorRifas");
  loadZapatilla(datasource.sole.shoe, contenedorZapatilla);
  getAllRifas(datasource.sole.raffles, contendorRifas);
  var rifa = new RifaDto(datasource.sole.raffles["Antonia Milano"], "Antonia Milano");
  console.log(rifa);
  console.log(rifa.toString());
  console.log(rifa.getLogo);
  console.log(rifa.getUrl);
  var shoe = new _shoe.ShoeDTO(datasource.sole.shoe);
  console.log(shoe);
  console.log(_htmlContructor.htmlConstructor);
};
},{"./raffles":"data/raffles.js","./shoe":"data/shoe.js","./rifa":"data/rifa.js","./htmlContructor":"data/htmlContructor.js","../css/style.css":"css/style.css"}],"C:/Users/david.gomezmartinez/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57584" + '/');

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