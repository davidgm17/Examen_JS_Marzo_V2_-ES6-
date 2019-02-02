diario = []; // registro goblal, se compone de diarios
eventosTotales = []; //variable goblal, volcaremos todos los eventos del diario
/** Datos para cargar al diario */

// generarRegistro(["trabajar", "tocar un árbol", "pizza", "correr", "television"], false);
// generarRegistro(["trabajar", "helado", "coliflor", "lasaña", "tocar un árbol", "lavarse los dientes"], false);
// generarRegistro(["finde", "bicicleta", "descansar", "cacahuetes", "cerveza"], true)

/** Datos para los casos test */
test_eventos = [
  "trabajar",
  "tocar un árbol",
  "hamburguesa",
  "correr",
  "twitter"
];
test_pulpo = false;
casoTestLista = [test_eventos, test_pulpo];
casoTestObjeto = {
  eventos: test_eventos,
  pulpo: test_pulpo
  /** Datos del caso test del git */
};

var cargaMasiva = [
  { eventos: ["carrot", "exercise", "weekend"], pulpo: false },
  {
    eventos: ["bread", "pudding", "brushed teeth", "weekend", "touched tree"],
    pulpo: false
  },
  {
    eventos: ["carrot", "nachos", "brushed teeth", "cycling", "weekend"],
    pulpo: false
  },
  {
    eventos: [
      "brussel sprouts",
      "ice cream",
      "brushed teeth",
      "computer",
      "weekend"
    ],
    pulpo: false
  },
  {
    eventos: [
      "potatoes",
      "candy",
      "brushed teeth",
      "exercise",
      "weekend",
      "dentist"
    ],
    pulpo: false
  },
  {
    eventos: [
      "brussel sprouts",
      "pudding",
      "brushed teeth",
      "running",
      "weekend"
    ],
    pulpo: false
  },
  {
    eventos: ["pizza", "brushed teeth", "computer", "work", "touched tree"],
    pulpo: false
  },
  {
    eventos: ["bread", "beer", "brushed teeth", "cycling", "work"],
    pulpo: false
  },
  { eventos: ["cauliflower", "brushed teeth", "work"], pulpo: false },
  { eventos: ["pizza", "brushed teeth", "cycling", "work"], pulpo: false },
  { eventos: ["lasagna", "nachos", "brushed teeth", "work"], pulpo: false },
  { eventos: ["brushed teeth", "weekend", "touched tree"], pulpo: false },
  {
    eventos: ["lettuce", "brushed teeth", "television", "weekend"],
    pulpo: false
  },
  { eventos: ["spaghetti", "brushed teeth", "work"], pulpo: false },
  { eventos: ["brushed teeth", "computer", "work"], pulpo: false },
  { eventos: ["lettuce", "nachos", "brushed teeth", "work"], pulpo: false },
  { eventos: ["carrot", "brushed teeth", "running", "work"], pulpo: false },
  { eventos: ["brushed teeth", "work"], pulpo: false },
  { eventos: ["cauliflower", "reading", "weekend"], pulpo: false },
  { eventos: ["bread", "brushed teeth", "weekend"], pulpo: false },
  { eventos: ["lasagna", "brushed teeth", "exercise", "work"], pulpo: false },
  { eventos: ["spaghetti", "brushed teeth", "reading", "work"], pulpo: false },
  {
    eventos: ["carrot", "ice cream", "brushed teeth", "television", "work"],
    pulpo: false
  },
  { eventos: ["spaghetti", "nachos", "work"], pulpo: false },
  {
    eventos: ["cauliflower", "ice cream", "brushed teeth", "cycling", "work"],
    pulpo: false
  },
  { eventos: ["spaghetti", "peanuts", "computer", "weekend"], pulpo: true },
  {
    eventos: ["potatoes", "ice cream", "brushed teeth", "computer", "weekend"],
    pulpo: false
  },
  { eventos: ["potatoes", "ice cream", "brushed teeth", "work"], pulpo: false },
  { eventos: ["peanuts", "brushed teeth", "running", "work"], pulpo: false },
  { eventos: ["potatoes", "exercise", "work"], pulpo: false },
  { eventos: ["pizza", "ice cream", "computer", "work"], pulpo: false },
  { eventos: ["lasagna", "ice cream", "work"], pulpo: false },
  { eventos: ["cauliflower", "candy", "reading", "weekend"], pulpo: false },
  {
    eventos: ["lasagna", "nachos", "brushed teeth", "running", "weekend"],
    pulpo: false
  },
  { eventos: ["potatoes", "brushed teeth", "work"], pulpo: false },
  { eventos: ["carrot", "work"], pulpo: false },
  { eventos: ["pizza", "beer", "work", "dentist"], pulpo: false },
  { eventos: ["lasagna", "pudding", "cycling", "work"], pulpo: false },
  { eventos: ["spaghetti", "brushed teeth", "reading", "work"], pulpo: false },
  { eventos: ["spaghetti", "pudding", "television", "weekend"], pulpo: false },
  { eventos: ["bread", "brushed teeth", "exercise", "weekend"], pulpo: false },
  { eventos: ["lasagna", "peanuts", "work"], pulpo: true },
  { eventos: ["pizza", "work"], pulpo: false },
  { eventos: ["potatoes", "exercise", "work"], pulpo: false },
  { eventos: ["brushed teeth", "exercise", "work"], pulpo: false },
  {
    eventos: ["spaghetti", "brushed teeth", "television", "work"],
    pulpo: false
  },
  { eventos: ["pizza", "cycling", "weekend"], pulpo: false },
  { eventos: ["carrot", "brushed teeth", "weekend"], pulpo: false },
  { eventos: ["carrot", "beer", "brushed teeth", "work"], pulpo: false },
  { eventos: ["pizza", "peanuts", "candy", "work"], pulpo: true },
  {
    eventos: ["carrot", "peanuts", "brushed teeth", "reading", "work"],
    pulpo: false
  },
  { eventos: ["potatoes", "peanuts", "brushed teeth", "work"], pulpo: false },
  {
    eventos: ["carrot", "nachos", "brushed teeth", "exercise", "work"],
    pulpo: false
  },
  {
    eventos: ["pizza", "peanuts", "brushed teeth", "television", "weekend"],
    pulpo: false
  },
  { eventos: ["lasagna", "brushed teeth", "cycling", "weekend"], pulpo: false },
  {
    eventos: [
      "cauliflower",
      "peanuts",
      "brushed teeth",
      "computer",
      "work",
      "touched tree"
    ],
    pulpo: false
  },
  { eventos: ["lettuce", "brushed teeth", "television", "work"], pulpo: false },
  { eventos: ["potatoes", "brushed teeth", "computer", "work"], pulpo: false },
  { eventos: ["bread", "candy", "work"], pulpo: false },
  { eventos: ["potatoes", "nachos", "work"], pulpo: false },
  { eventos: ["carrot", "pudding", "brushed teeth", "weekend"], pulpo: false },
  {
    eventos: ["carrot", "brushed teeth", "exercise", "weekend", "touched tree"],
    pulpo: false
  },
  { eventos: ["brussel sprouts", "running", "work"], pulpo: false },
  { eventos: ["brushed teeth", "work"], pulpo: false },
  { eventos: ["lettuce", "brushed teeth", "running", "work"], pulpo: false },
  { eventos: ["candy", "brushed teeth", "work"], pulpo: false },
  {
    eventos: ["brussel sprouts", "brushed teeth", "computer", "work"],
    pulpo: false
  },
  { eventos: ["bread", "brushed teeth", "weekend"], pulpo: false },
  { eventos: ["cauliflower", "brushed teeth", "weekend"], pulpo: false },
  {
    eventos: ["spaghetti", "candy", "television", "work", "touched tree"],
    pulpo: false
  },
  { eventos: ["carrot", "pudding", "brushed teeth", "work"], pulpo: false },
  { eventos: ["lettuce", "brushed teeth", "work"], pulpo: false },
  {
    eventos: ["carrot", "ice cream", "brushed teeth", "cycling", "work"],
    pulpo: false
  },
  { eventos: ["pizza", "brushed teeth", "work"], pulpo: false },
  { eventos: ["spaghetti", "peanuts", "exercise", "weekend"], pulpo: true },
  {
    eventos: ["bread", "beer", "computer", "weekend", "touched tree"],
    pulpo: false
  },
  { eventos: ["brushed teeth", "running", "work"], pulpo: false },
  {
    eventos: ["lettuce", "peanuts", "brushed teeth", "work", "touched tree"],
    pulpo: false
  },
  { eventos: ["lasagna", "brushed teeth", "television", "work"], pulpo: false },
  {
    eventos: ["cauliflower", "brushed teeth", "running", "work"],
    pulpo: false
  },
  { eventos: ["carrot", "brushed teeth", "running", "work"], pulpo: false },
  { eventos: ["carrot", "reading", "weekend"], pulpo: false },
  { eventos: ["carrot", "peanuts", "reading", "weekend"], pulpo: true },
  { eventos: ["potatoes", "brushed teeth", "running", "work"], pulpo: false },
  { eventos: ["lasagna", "ice cream", "work", "touched tree"], pulpo: false },
  {
    eventos: ["cauliflower", "peanuts", "brushed teeth", "cycling", "work"],
    pulpo: false
  },
  { eventos: ["pizza", "brushed teeth", "running", "work"], pulpo: false },
  { eventos: ["lettuce", "brushed teeth", "work"], pulpo: false },
  {
    eventos: ["bread", "brushed teeth", "television", "weekend"],
    pulpo: false
  },
  {
    eventos: ["cauliflower", "peanuts", "brushed teeth", "weekend"],
    pulpo: false
  }
];
/** Carga masiva de todos los datos del fichero de git hub */
function cargaMasivaregistros(cargaMasiva) {
  let contador = 0;
  cargaMasiva.forEach(registro => {
    contador++;
    generarRegistro(registro.eventos, registro.pulpo);
  });
  console.log(contador + " Registro/s añadido/s con exito.");
}

/** 

 * Funcion para detectar si el evento esta en la lista de eventos
 * @returns boolean 
 */
function contieneEvento(evento, eventos) {
  return eventos.includes(evento);
}
/** 

 * Muestra por consola los eventos y el estado del pulpo del registro introducido
 * @param registro_in Registro de un dia en concreto.
 */
function mostrarRegistro(registro_in) {
  var outPut = "\nEventos de hoy:\n";
  registro_in.eventos.forEach(element => {
    outPut += element + ", ";
  });
  outPut +=
    ".\nEstado del pulpo: " +
    (registro_in.pulpo
      ? "SOY PULPO de RAZA 'LOBA' (Es equivalente a SUPER SAYAYIN Nv.3 pero en pulpo.)"
      : "SOY PERSONA");
  console.log(outPut);
}

/**
 * Apartir de una lista de eventos y un estado del pulpo genera un Objeto "registro"
 * Que guarda en el diario.
 * @param eventos Lista de eventos de un dia.
 * @param pulpo Boolean, Estado del pulpo.
 */
function generarRegistro(eventos, pulpo) {
  let registro = {
    eventos: eventos,
    pulpo: pulpo
  };
  incluirRegistro(registro);
}

/**
 *  Añade el registro al diario goblal.
 * @param registro_in Objeto registro con los eventos y el estado del pulpo como atributos.
 * @returns Mensaje por consola informando que se ha añadido con exito un registro.
 */
function incluirRegistro(registro_in) {
  diario.push(registro_in);
}

/**
 * Recorremos el diario goblal, para mostrar todos sus registros por consola
 * @param diario Diario , declarado como variable global.
 */
function mostrarDiario(diario) {
  diario.forEach(registro => {
    mostrarRegistro(registro);
  });
  console.log("\nLongitud total del diario: " + diario.length);
}

// function phi(){

//   return resultado;
// }

function phi(tabla) {
  let resultado;
  let n00 = tabla[0];
  let n01 = tabla[1];
  let n10 = tabla[2];
  let n11 = tabla[3];
  resultado =
    (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) * (n00 + n10) * (n01 + n11));
  //console.log(resultado);
  return resultado;
}

function mostrarTabla(tabla) {
  // console.log("Tabla :\n" +
  //     "|   " + tabla[0] + "   |   " + tabla[1] + "   |\n" +
  //     "|   " + tabla[2] + "   |   " + tabla[3] + "   |\n");
  return (print =
    "Tabla del evento:\n" +
    "-----------------\n" +
    "|   " +
    tabla[0] +
    "   |   " +
    tabla[1] +
    "   |\n" +
    "-----------------\n" +
    "|   " +
    tabla[2] +
    "   |   " +
    tabla[3] +
    "   |\n" +
    "-----------------\n");
}

function mostrarResultadoEvento(resultadoEvento) {
  let print = "_________________\n";
  print += "'" + resultadoEvento.evento.toUpperCase() + "'\n";
  print += "_________________\n";
  print += mostrarTabla(resultadoEvento.tabla);
  print += "Phi:  " + resultadoEvento.phi + "\n\n";
  return print;
}

function mostrarMatrizEventos(matrizEventos) {
  let print = "\n";
  matrizEventos.forEach(resultadoEvento => {
    print += mostrarResultadoEvento(resultadoEvento);
  });
  return print;
}

function mostrarResumenResultadoEvento(resultadoEvento) {
  let print = "\n\t";
  print += resultadoEvento.evento + ":\t";
  print += resultadoEvento.phi;
  return print;
}
/**
 *Formato resumen de mostrar resultado final, solicitado en el titulo.
 *
 * @param {*} matrizEventos
 * @returns string para sacar por pantalla.
 */
function mostarResumenMatrizEventos(matrizEventos) {
  let print = "\n";
  matrizEventos.forEach(resultadoEvento => {
    print += mostrarResumenResultadoEvento(resultadoEvento);
  });
  return print;
}

/**
 * TODO
 *
 * @param {*} matrizEventos
 * @returns
 */
function calcularEventosEsenciales(matrizEventos) {
  let print = "\n";
  let eventoMayor = {
    evento: "",
    phi: 0
  };
  let eventoMenor = {
    evento: "",
    phi: 0
  };

  matrizEventos.forEach(resultadoEvento => {
    if (resultadoEvento.phi > eventoMayor.phi) {
      eventoMayor.evento = resultadoEvento.evento;
      eventoMayor.phi = resultadoEvento.phi;
    }
    if (resultadoEvento.phi < eventoMenor.phi) {
      eventoMenor.evento = resultadoEvento.evento;
      eventoMenor.phi = resultadoEvento.phi;
    }
  });
  // para imprimir los valores criticos.
  print += "El evento que está directamente relacionado es : \n\t";
  print +=
    eventoMayor.evento.toUpperCase() +
    ", con un valor 'phi' --> " +
    eventoMayor.phi +
    "\n";
  print += "El evento que está inversamente relacionado es : \n\t";
  print +=
    eventoMenor.evento.toUpperCase() +
    ", con un valor 'phi' --> " +
    eventoMenor.phi +
    "\n";

  return print;
}

function tablaPara(evento, diario) {
  let tabla = [0, 0, 0, 0];
  diario.forEach(registro => {
    if (contieneEvento(evento, registro.eventos)) {
      registro.pulpo ? (tabla[3] = tabla[3] + 1) : (tabla[1] = tabla[1] + 1);
    } else {
      registro.pulpo ? (tabla[2] = tabla[2] + 1) : (tabla[0] = tabla[0] + 1);
    }
  });
  return tabla;
}
/**
 * Recorro el diario comprobando todos los registros y todos los eventos de cada registro, si no está en la lista global lo añado
 *  */
function cargarEventosTotales() {
  eventosTotales.slice(0, eventosTotales.length); // vacio la lista de eventos totales , por si tiene datos memorizados.
  diario.forEach(registro => {
    registro.eventos.forEach(evento => {
      if (!contieneEvento(evento, eventosTotales)) {
        eventosTotales.push(evento);
      }
    });
  });
}

function conclusioFinal() {
  cargarEventosTotales();
  console.log(eventosTotales);
  let matrizEventos = [];
  eventosTotales.forEach(evento => {
    let tablaResultado = tablaPara(evento, diario);
    let resultadoEvento = {
      evento: evento,
      tabla: tablaResultado,
      phi: phi(tablaResultado)
    };
    matrizEventos.push(resultadoEvento);
  });
  console.log(
    "\nResultado matriz final:\n" + mostrarMatrizEventos(matrizEventos)
  );
  console.log("\nTabla resumen: " + mostarResumenMatrizEventos(matrizEventos));
  console.log(calcularEventosEsenciales(matrizEventos));
}
/**
 * Test solicitado en el primer punto, adaptado a un objeto registro, NO acepta listas.
 * @param  registro  metemos una posicion del diario, con la lista de eventos y el valor del pulpo.
 */
function comprobarTest(registro) {
  var longitudRegistro = registro.eventos.length;
  var test1 = longitudRegistro === 5 ? "Longitud es 5" : "Longitud NO es 5";
  var test2 = registro.pulpo ? "Es un pulpo" : "No es pulpo";
  var test3 = contieneEvento("hamburguesa", registro.eventos)
    ? "Contiene el evento Hamburguesa"
    : "No contiene el evento hamburguesa";
  var test4 = contieneEvento("pizza", registro.eventos)
    ? "Contiene el evento pizza"
    : "No contiene el evento pizza";
  console.log(
    "test 1 --> " +
      test1 +
      "\ntest 2 --> Estado del pulpo = " +
      test2 +
      "\ntest 3 --> " +
      test3 +
      "\ntest 4 --> " +
      test4
  );
}
// console.log(casoTestObjeto);
// console.log(casoTestObjeto.eventos);
// console.log(casoTestObjeto.eventos.length);
// comprobarTest(casoTestLista);
// mostrarRegistro(casoTestObjeto);
// generarRegistro(test_eventos, test_pulpo);
// mostrarRegistro(diario[0]);
// comprobarTest(diario[0]);
cargaMasivaregistros(cargaMasiva);
// console.log("\nTest mostrar diario:");
// mostrarDiario(diario);
conclusioFinal();
