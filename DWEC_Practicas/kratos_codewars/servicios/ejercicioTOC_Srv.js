var prototypeDataSource = require('../resources/dataSourceTOC');
var paramsDataSource = require('../resources/cabeceraDataSourceMock');
var Indices = require('../resources/indices');
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

function main(paramsDataSource, Indices) {
  var headings = paramsDataSource.getTiposCabeceras(1, 5);
  let arrayIndices = [0, 0, 0, 0, 0];
  let headers = paramsDataSource.getheaders(headings);
  console.log(headers);

  let IndicesVO = new Indices(arrayIndices);
  headers.forEach(head => {
    updateHtml(IndicesVO, head);
  });
}

function ejecutar() {
  let CabecerasDataSource = paramsDataSource(prototypeDataSource.methods);
  main(CabecerasDataSource, Indices);
}

module.exports = ejecutar;
