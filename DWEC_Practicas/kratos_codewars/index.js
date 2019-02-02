/*
 Sección donde declarar los ficheros o funciones importadas.
 */

import { inherit } from 'objetosJS/patrones.js';

// range.js: A class representing a range of values.
// This is a factory function that returns a new range object.
function range(from, to) {
  // Use the inherit() function to create an object that inherits from the
  // prototype object defined below. The prototype object is stored as
  // a property of this function, and defines the shared methods (behavior)
  // for all range objects.
  var r = inherit(range.methods);
  // Store the start and end points (state) of this new range object.
  // These are noninherited properties that are unique to this object.
  r.from = from;
  r.to = to;
  // Finally return the new object
  return r;
}

// This prototype object defines methods inherited by all range objects.
range.methods = {
  includes: function(x) {
    return this.from <= x && x <= this.to;
  },
  foreach: function(f) {
    for (var x = Math.ceil(this.from); x <= this.to; x++) f(x);
  },
  // Return a string representation of the range
  toString: function() {
    return '(' + this.from + '...' + this.to + ')';
  }
};

var r = range(1, 3);
r.includes(2);
r.foreach(console.log);
console.log(r);
