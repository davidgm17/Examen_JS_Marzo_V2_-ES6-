class RifaDTO {
    constructor(object, nombre) {
        this.name = nombre || "";
        let objectString = this.name;
        let propiedades = Object.keys(object);
        propiedades.forEach(propiedad => {
            if (object[propiedad].includes("http")) {
                getPropertyURL(propiedad, object[propiedad]);
            } else {
                this[propiedad] = object[propiedad];
                objectString += updateToString(propiedad, this[propiedad]);
            }
        });

        /**
         * Creo el toString de forma dinamica con todas las propiedades que no 
         * son "http..."
         */
        this.toString = function() {
            return objectString;
        }
    };

};

/**
 *
 *
 * @param { String } propiedad
 * @param {String} valueURL
 * @memberof RifaDTO
 */
let getPropertyURL = function(propiedad, valueURL) {
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

        let generaGet = 'get' + getCapitalize(propiedad);
        /*RifaDTO[generaGet] = function() {
            return valueURL;
        };*/

        RifaDTO.prototype[generaGet] = valueURL;
    };
};
let updateToString = function(propiedad, valor) {
    if (propiedad.includes('Size')) {
        return '\n Size - ' + valor;
    } else if (propiedad.includes('Opens')) {
        return '\n Opens - ' + valor;
    } else if (propiedad.includes('Closes')) {
        return '\n Closes - ' + valor;
    } else {
        return '\n ' + valor;
    };


};

let getCapitalize = function(palabra) {
    let output = palabra[0].toUpperCase() + palabra.slice(1).toLowerCase();
    return output;
};
module.exports = RifaDTO;