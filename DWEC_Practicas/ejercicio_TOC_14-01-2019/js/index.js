import { paramsDataSource } from 'cabecerasDataSource';

/* function searchToc() {
  var toc = document.getElementById('TOC');
  if (!toc) {
    toc = document.createElement('div');
    toc.id = 'TOC';
    document.body.insertBefore(toc, document.body.firstChild);
  }
  return true;
} */

function getheaders(listHeaders) {
  return document.querySelectorAll(listHeaders);
}

function updateHtml(Indices, htmlObject) {
  //let prioridad = htmlObject.nodeName.substring(1);
  console.log(htmlObject);
  let prioridad = Number.parseInt(htmlObject.substring(1));
  Indices.actualizarProfundidad(prioridad);
}

function Incides(arrayIndices) {
  this.profundidad = arrayIndices;
  this.ultimaPosicion = 0;
}

Incides.prototype.actualizaDesdeValor = function(valor) {
  let valorProfundidad = this.correcionValorToArray(valor);
  this.profundidad[valorProfundidad] = this.profundidad[valorProfundidad] + 1;
  this.actualizaAZero(valor);
};

Incides.prototype.actualizaDesdeValorPosterior = function(valor) {
  let valorProfundidad = this.correcionValorToArray(valor);
  this.profundidad[valorProfundidad] = this.profundidad[valorProfundidad] + 1;
  this.actualizaAZero(valor);
};
Incides.prototype.actualizaAZero = function(valor) {
  for (valor; valor < this.profundidad.length; valor++) {
    this.profundidad[valor] = 0;
  }
};
Incides.prototype.correcionValorToArray = function(valor) {
  return valor - 1;
};

Incides.prototype.actualizarProfundidad = function(valor) {
  this.ultimaPosicion =
    this.ultimaPosicion == null || undefined ? valor : this.ultimaPosicion;

  this.ultimaPosicion <= valor
    ? this.actualizaDesdeValor(valor)
    : this.actualizaDesdeValorPosterior(valor);

  this.ultimaPosicion = valor;
  console.log(this.profundidad);
};

/* window.onload = function() {
  searchToc();
  var headings = ['h1', 'h2', 'h3', 'h4', 'h5'];
  let arrayIndices = [0, 0, 0, 0, 0];
  if (document.querySelectorAll) {
    let headers = getheaders(headings);
    console.log(headers);
    let Indices = new Incides(arrayIndices);
    headers.forEach(head => {
      updateHtml(Indices, head);
    });
  }
}; */

function main(paramsDataSource) {
  var headings = paramsDataSource.getTiposCabeceras(1, 5);
  let arrayIndices = [0, 0, 0, 0, 0];
  let headers = paramsDataSource.getheaders(headings);
  console.log(headers);

  let Indices = new Incides(arrayIndices);
  headers.forEach(head => {
    updateHtml(Indices, head);
  });
}

let CabecerasDataSource = paramsDataSource;
main(CabecerasDataSource);
