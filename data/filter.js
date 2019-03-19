class Filter {
    constructor() {
        console.log("soy un filtro");
    };
    toString() {
        return "estoy vivo";
    };
    addFilterProperty(propiedadNombre, propiedadValor) {
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
            };

        } else if (propiedadNombre.includes("purchase")) {
            if (this[propiedadNombre]) {
                this[propiedadNombre] = poblarPropiedadTipoSet(this[propiedadNombre], damePurchases(propiedadValor));
            } else {
                this[propiedadNombre] = damePurchases(propiedadValor);
            };

        } else if (propiedadNombre.includes("collection")) {
            if (this[propiedadNombre]) {
                this[propiedadNombre] = poblarPropiedadTipoSet(this[propiedadNombre], dameCollections(propiedadValor));

            } else {
                this[propiedadNombre] = dameCollections(propiedadValor);
            };
        } else if (!propiedadNombre.includes("Size")) {
            console.log(propiedadNombre);

            if (this[propiedadNombre]) {
                this[propiedadNombre] = poblarPropiedadTipoSet(this[propiedadNombre], dameCollections(propiedadValor));

            } else {
                this[propiedadNombre] = dameCollections(propiedadValor);
            };
        };
    };
};


let poblarPropiedadTipoSet = function(arraySetAnterior, arraySetNuevo) {

    Set.prototype.union = function(setB) {
        var union = new Set(this);
        for (var elem of setB) {
            union.add(elem);
        }
        return union;
    };
    let anterior = new Set(arraySetAnterior);
    return anterior.union(arraySetNuevo);
}


let dameCountries = function(cadenaPalabras) {
    let listaPalabras = new Set();
    if (cadenaPalabras.includes(",")) {
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
    if (cadenaPalabras.includes('/')) {
        listaPalabras = cadenaPalabras.split('/');
    } else {
        listaPalabras = cadenaPalabras.split(' ');
    }
    return listaPalabras;
}

let dameCollections = function(cadenaPalabras) {
        let listaPalabras = new Set();
        if (cadenaPalabras.includes('Only')) {
            listaPalabras.add(cadenaPalabras.split('Only')[0].trim());
        } else if (cadenaPalabras.includes('and')) {
            listaPalabras.add(cadenaPalabras.split('and')[0].trim());
        } else if (cadenaPalabras.includes('vailable')) {
            listaPalabras.add(cadenaPalabras.split('Available')[0].trim());
        } else {
            listaPalabras.add(cadenaPalabras.trim());
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