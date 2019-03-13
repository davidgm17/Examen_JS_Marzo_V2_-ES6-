var htmlConstructor = {

    loadZapatilla: function(object, place) {
        /** añadimos dinamicamente mas atributos al div */
        place.className += " rigth";

        /** Cargamos los datos de la zapatilla */
        place.appendChild(getTitulo(object));
        place.appendChild(getSubtitle(object));
        place.appendChild(getDescription(object));

    },

    getTitulo: function(object) {
        let titulo = document.createElement("h1");
        titulo.textContent = object.model;
        return titulo;
    },

    getSubtitle: function(object) {
        let subtitle = document.createElement("h2");
        subtitle.textContent = object.colour;
        return subtitle;
    },
    getDescription: function(object) {
        let description = document.createElement("h3");
        description.textContent = object.code + " | " + object.avaliable + " | " + object.price;
        return description;
    },


    /** Generamos el contenedor de una rifa */
    createRifa: function(object, nombreObjeto) {
        let rifaContainer = document.createElement("div");
        rifaContainer.className = "col-4 row";
        rifaContainer.appendChild(getLogo(object));
        rifaContainer.appendChild(getDatosRifa(object, nombreObjeto));
        return rifaContainer;
    },

    getLogo: function(object) {
        let logoC = document.createElement("img");
        logoC.src = object.logo;
        logoC.className = "logoStyle";
        return logoC;
    },

    getDatosRifa: function(object, nombreObjeto) {
        let datosContainer = document.createElement("div");
        datosContainer.className = "w-75 m-auto text-center";
        datosContainer.appendChild(getTituloRifa(nombreObjeto));
        datosContainer.appendChild(getInfoRifa(object, nombreObjeto));
        return datosContainer;
    },

    getTituloRifa: function(nombreObjeto) {
        let titulo = document.createElement("h4");
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

    getInfoRifa: function(object, nombreObjeto) {
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
        infoContainer.appendChild(this.getButtonEntered(nombreObjeto));
        return infoContainer;
    },
    getSpan: function(value) {
        let span = document.createElement("span");
        span.textContent = value;
        return span;
    },
    getSpanSize: function(value) {
        let span = document.createElement("span");
        span.textContent = "Size - " + value;
        return span;
    },
    getSpanOpens: function(value) {
        let span = document.createElement("span");
        span.textContent = "Opens - " + value;
        return span;
    },
    getSpanClose: function(value) {
        let span = document.createElement("span");
        span.textContent = "Closes - " + value;
        return span;
    },
    getBr: function() {
        let br = document.createElement("br");
        return br;
    },
    /**
     * Creo el boton y añado para capturar evento over
     */
    getButton: function(object) {
        let enlace = document.createElement("a");
        enlace.href = object.url;
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
    },

    /**
     * creo  boton entered y capturo el evento para guardarlo en local storage
     */

    getButtonEntered: function(nombreTienda) {
        let button = document.createElement("button");
        button.style.fontWeight = "bold";
        button.className = "btn";
        button.id = nombreTienda;
        button.name = nombreTienda;
        button.addEventListener("click", function() {
            updateStorage(nombreTienda);
        }, true);
        //button.onclick = updateStorage(button.name);
        if ((localStorage.getItem(nombreTienda)) && (localStorage.getItem(nombreTienda) == "true")) {
            button.innerText = "Entered";

        } else {
            button.innerText = "Mark as Entered";
            localStorage.setItem(nombreTienda, false);
        }
        return button;
    }

}

module.exports = htmlConstructor;