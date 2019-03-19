import {
    Filters
} from './main';
export class RifaDTO {
    constructor(object, nombreIn) {
        this.nombre = nombreIn || "";
        this.filtros = new Set();
        let objectString = "";
        let propiedades = Object.keys(object);
        propiedades.forEach(propiedad => {
            if (object[propiedad].includes("http")) {
                let generaGet = 'get' + getCapitalize(propiedad);
                this[generaGet] = function() {
                    return object[propiedad];
                };

                //getPropertyURL(propiedad, object[propiedad]);
            } else {
                this[propiedad] = object[propiedad];
                objectString += updateToString(propiedad, this[propiedad]);
                Filters.addFilterProperty(propiedad, this[propiedad]);
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
    let generaGet = 'get' + getCapitalize(propiedad);
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

        RifaDTO[generaGet] = function() {
            return valueURL;
        }
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