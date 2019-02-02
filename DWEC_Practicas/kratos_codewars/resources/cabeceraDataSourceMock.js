/* var prototype = require('./dataSourceTOC');
console.log(prototype);

var prototyMethod = prototype.methods;
console.log(prototyMethod); */

var inherit = require('../objetosJS/patrones');
console.log(inherit);

function getDataSource(DataSource) {
  var dataSourceVO = inherit(DataSource);
  console.log(dataSourceVO);
  dataSourceVO.getheaders = function() {
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

  dataSourceVO.getTiposCabeceras = function(primera, ultima) {
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
  dataSourceVO.headingsToZero = function() {
    this.headings = [];
    return this.headings.length == 0 ? true : false;
  };

  return dataSourceVO;
}

module.exports = getDataSource;
