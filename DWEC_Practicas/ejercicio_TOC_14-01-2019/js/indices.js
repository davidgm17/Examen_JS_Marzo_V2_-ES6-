function Indices(arrayIndices) {
  this.profundidad = arrayIndices;
  this.ultimaPosicion = 0;
}

Indices.prototype.actualizaDesdeValor = function(valor) {
  let valorProfundidad = this.correcionValorToArray(valor);
  this.profundidad[valorProfundidad] = this.profundidad[valorProfundidad] + 1;
  this.actualizaAZero(valor);
};

Indices.prototype.actualizaDesdeValorPosterior = function(valor) {
  let valorProfundidad = this.correcionValorToArray(valor);
  this.profundidad[valorProfundidad] = this.profundidad[valorProfundidad] + 1;
  this.actualizaAZero(valor);
};
Indices.prototype.actualizaAZero = function(valor) {
  for (valor; valor < this.profundidad.length; valor++) {
    this.profundidad[valor] = 0;
  }
};
Indices.prototype.correcionValorToArray = function(valor) {
  return valor - 1;
};

Indices.prototype.actualizarProfundidad = function(valor) {
  this.ultimaPosicion =
    this.ultimaPosicion == null || undefined ? valor : this.ultimaPosicion;

  this.ultimaPosicion <= valor
    ? this.actualizaDesdeValor(valor)
    : this.actualizaDesdeValorPosterior(valor);

  this.ultimaPosicion = valor;
  console.log(this.profundidad);
};

module.exports = Indices;
