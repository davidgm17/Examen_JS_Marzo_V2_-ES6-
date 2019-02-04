import { ejecutar } from './Ejercicio_1/DWEC_P06_601.js';

/* function main() {
  ejecutar();
  return false;
} */

window.onload = function() {
  document.getElementById('myForm').onsubmit = function() {
    ejecutar();
    return false;
  };
};

//main();
