/**
 * Creo el objeto que me interesa para poder testear desde node,
 *  sin tener que ir al explorador
 */
var paramsDataSource = {};
paramsDataSource.getheaders = function() {
  return [
    'h1',
    'h2',
    'h3',
    'h3',
    'h2',
    'h3',
    'h4',
    'h1',
    'h2',
    'h3',
    'h4',
    'h4',
    'h4',
    'h4'
  ];
};
paramsDataSource.headings = [];

paramsDataSource.getTiposCabeceras = function(primera, ultima) {
  if (this.headingsToZero()) {
    primera = primera == 0 ? 1 : primera;
    for (primera; primera <= ultima; primera++) {
      this.headings.push('h' + primera);
    }
    return this.headings;
  } else {
    throw 'No se ha podido vaciar el array anterior.';
  }
};
paramsDataSource.headingsToZero = function() {
  this.headings = [];
  return this.headings.length == 0 ? true : false;
};

export { paramsDataSource };
