/**
 * ".elements" devuelve los elementos propios del formulario,
 * con esta función recuperas y actualizas el prototipo del prototipo del elemento,
 * el "abuelo" de los elementos del formulario es el mismo para todos.
 * le generamos la función "getValor()" que luego sobreescribiremos para los diferentes elementos.
 *
 * @param {Form} formulario
 */
function actualizarPrototipoElementosForm() {
  HTMLElement.prototype.getValor = function() {};
  HTMLTextAreaElement.prototype.getValor = function() {
    return this.value;
  };

  HTMLInputElement.prototype.getValor = function() {
    function isCheckedGetValue(element) {
      return element.checked ? element.value : '';
    }
    return this.type == 'text' ? this.value.trim() : isCheckedGetValue(this);
  };
  HTMLSelectElement.prototype.getValor = function() {
    return this.value;
  };
}

function dameCamposFormulario(formulario) {
  let output;
  for (let index = 0; index < formulario.elements.length; index++) {
    let valor = formulario.elements[index].getValor();
    if (valor == '') continue;
    output = output != undefined ? output + ', ' + valor : ' ' + valor;
  }
  console.log(output);

  return output;
}
function rellenaHTML(input) {
  document.getElementById('paragraf').textContent =
    'Continguts dels diferents camps:' + input;
}

function ejecutar() {
  const miFormulario = document.forms[0];
  actualizarPrototipoElementosForm();
  let salidaString = dameCamposFormulario(miFormulario);
  rellenaHTML(salidaString);
}

export { ejecutar };
