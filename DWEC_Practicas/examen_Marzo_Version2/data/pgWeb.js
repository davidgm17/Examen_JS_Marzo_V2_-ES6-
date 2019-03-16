import {
    RifaDTO as Rifa
} from './rifa';
class PgWeb {

    constructor() {
        console.log("este objeto es la dimension pagina web");
        this.listaRifas = new Array();
        this.filtros = new Object();
    };
    addListaRifas(dataSource) {

        let nombresObjetos = Object.getOwnPropertyNames(dataSource);
        for (let index = 0; index < nombresObjetos.length; index++) {
            let rifa = new Rifa(dataSource[nombresObjetos[index]], nombresObjetos[index]);
            this.listaRifas.push(rifa);
        }
    };
    addFiltros(dataSource) {
        Object.assign(this.filtros, dataSource);
    };

}

// singleton de objeto pagina web, solo quiero un objeto en todo el funcionamiento
export function singletonPgWeb() {

    const prototipo = new PgWeb();

    return {
        get: function() {
            return prototipo;
        }
    };
};