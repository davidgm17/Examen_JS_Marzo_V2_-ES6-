function ejecutar() {
  console.log('ejercicio_2');
}

function limita(evento, tamanoMax) {
  return true;
}

function actualizaInfo(observable, tamanoMax) {
  let observableSize = observable.value.length;
  let output = document.getElementById('info');
  output.textContent =
    observableSize >= tamanoMax
      ? 'TAS PASAO'
      : 'TE QUEDAN: ' + (tamanoMax - observableSize);
}

window.onload = function() {
  ejecutar();
  let observable = document.getElementById('myTextArea');
  observable.onkeypress = function() {
    limita(event, 150);
  };
  observable.onkeyup = function() {
    actualizaInfo(observable, 150);
  };
};
//export { ejecutar };
