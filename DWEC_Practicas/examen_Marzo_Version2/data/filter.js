class Filter {
    constructor() {
        console.log("soy un filtro");
    };
    toString() {
        return "estoy vivo";
    };
    addFilterProperty = function(propiedadNombre, propiedadValor) {
        if (propiedadNombre.includes("country")) {
            if (this[propiedadNombre]) {
                for (var property of dameCountries(propiedadValor)) {
                    this[propiedadNombre].add(property);
                }
            } else {
                this[propiedadNombre] = dameCountries(propiedadValor);
            };

        } else if (propiedadNombre.includes("purchase")) {
            if (this[propiedadNombre]) {
                for (var property of damePurchases(propiedadValor)) {
                    this[propiedadNombre].add(property);
                };
            } else {
                this[propiedadNombre] = damePurchases(propiedadValor);
            };

        } else if (propiedadNombre.includes("collection")) {
            if (this[propiedadNombre]) {
                for (var property of dameCollections(propiedadValor)) {
                    this[propiedadNombre].add(property);
                };
            } else {
                this[propiedadNombre] = dameCollections(propiedadValor);
            };
        };
    };
};

let dameCountries = function(cadenaPalabras) {
    let listaPalabras = new Set();
    if (propiedadValor.includes(",")) {
        let listaProvisional = cadenaPalabras.split(',');
        listaProvisional.forEach(palabra => {
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
            };
        });
    } else {
        listaPalabras.add(cadenaPalabras.trim());
    }
    return listaPalabras;
}

let damePurchases = function(cadenaPalabras) {
    let listaPalabras = new Set();
    listaPalabras = cadenaPalabras.split(' ');
    return listaPalabras;
}

let dameCollections = function(cadenaPalabras) {
        let listaPalabras = new Set();
        if (cadenaPalabras.includes('Only')) {
            listaPalabras.add(cadenaPalabras.split('Only').trim());
        } else if (cadenaPalabras.includes('and')) {
            listaPalabras.add(cadenaPalabras.split('and').trim());
        } else if (cadenaPalabras.includes('vailable')) {
            listaPalabras.add(cadenaPalabras.split('Available').trim());
        };
        return listaPalabras;
    }
    // singleton de objeto filtro
export function singletonFilter() {

    const prototipo = new Filter();

    return {
        get: function() {
            return prototipo;
        }
    };
};