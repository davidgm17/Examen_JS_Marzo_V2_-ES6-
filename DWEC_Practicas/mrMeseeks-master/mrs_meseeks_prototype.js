let usuarios = ["Jerry", "Summer", "Beth"];
let request = [
  "Open Jerry's stupid mayonnaise jar",
  "I wanna be popullar at school",
  "I wanna be a more complete woman",
  "I would  like to take  two strokes off my golf game"
];

function capituloDeHoy(cliente, request) {
  this.padre = cliente;
  this.request = request;
  console.log(this.padre + ", mi petición es: " + this.request);
}

/* Propiedades de la caja generadora de Meseeks. */

function box(user) {
  this.user = user;
}

/* Propiedades de los humanos. */

function human(name, request) {
  this.name = name;
  this.request = request;
  this.mrMeseks = [];
}
human.prototype.addMeseks = function(that) {
  this.mrMeseks.push(that);
};

/* Propiedades de los mr Meseeks. */
function mrMeseks(owner) {
  this.owner = owner;
  if (owner instanceof mrMeseks) {
    this.hello = "I kill you !";
  } else {
    this.hello = "I'm Mr Meeseeks! Look at meeeeee !";
  }
  this.bye = "";
  this.messageOnRequest = [
    "Oooh yeah! Can do!",
    "Yes sireee!",
    "Oh, yeah!, Yes, ma'am!"
  ];
  this.sayDone = function() {
    var x = Math.floor(Math.random() * 3 + 0);
    return this.messageOnRequest[x];
  };

  this.getBye = function() {
    return this.bye;
  };

  this.setBye = function(that) {
    this.bye = that;
  };
  this.setBye(this.sayDone());
}

mrMeseks.prototype.new = function(owner) {
  if (owner instanceof mrMeseks) {
    return mrMeseks.newMr;
  }
  return this.new;
};

mrMeseks.prototype.newMr = function(owner) {
  var x = new mrMeseks();
  x.hello = "I kill you !";
  return x;
};

mrMeseks.prototype.toString = function() {
  return (
    "{Saludo:" +
    this.hello +
    " Mi creador: " +
    this.owner +
    ", Terminado: " +
    this.bye +
    "}"
  );
};

mrMeseks.ZERO = new mrMeseks(usuarios[0]);
console.log(mrMeseks.ZERO.hello);

console.log(mrMeseks.ZERO.owner);
console.log(mrMeseks.ZERO.bye);
console.log("Esta muerto Mr Meseks: " + delete mrMeseks.ZERO);
console.log("Comprobación de desaparición de mr Meseeks: " + mrMeseks.ZERO);
mrMeseks.ZERO = new mrMeseks(usuarios[0]);

console.log(mrMeseks.ZERO);
/* mrMeseks.TEST = mrMeseks.ZERO.new;
console.log(mrMeseks.TEST);

mrMeseks.TEST_A = mrMeseks.new;
console.log(mrMeseks.TEST_A); */

console.log("I need help !");
mrMeseks.DEMON = new mrMeseks(mrMeseks.ZERO);
console.log(mrMeseks.DEMON);
console.log(mrMeseks.DEMON.hello);
console.log(mrMeseks.DEMON.owner);
console.log(mrMeseks.DEMON.bye);
console.log(Object.getOwnPropertyDescriptor(mrMeseks, "DEMON"));
console.log(mrMeseks.DEMON);
//console.assert(false, mrMeseks.ZERO.toString, "CAGADA.");
