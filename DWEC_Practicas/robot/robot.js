/** MEADOWFIELD
 *
 * publo con 11 lugares y 14 caminos
 */
const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  'Marketplace-Farm',
  'Marketplace-Post Office',
  'Marketplace-Shop',
  'Marketplace-Town Hall',
  'Shop-Town Hall'
];

/**
 * Construimos a partir de las direcciones , un grafo.
 */

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map(r => r.split('-'))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

const roadGraph = buildGraph(roads);

/**
 * nuestro robot encargado de entregar paquetes, a partir del grafo,
 * necesita un lugar donde se encuetra, la parcela
 *  y un destino donde entregar el paquete.
 */

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels
        .map(p => {
          if (p.place != this.place) return p;
          return { place: destination, address: p.address };
        })
        .filter(p => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}

/**
 * El método "move" nos dá un nuevo estado del pueblo,
 * manteniendo el antigo intacto
 */

let first = new VillageState('Post Office', [
  { place: 'Post Office', address: "Alice's House" }
]);
let next = first.move("Alice's House");

console.log(next.place);
// → Alice's House
console.log(next.parcels);
// → []
console.log(first.place);
// → Post Office

/**
 * función  Object.freeze
 *  que cambia un objeto para que se ignore la escritura en sus propiedades.
 *
 * Ejemplo de uso:
 */

let object = Object.freeze({ value: 5 });
object.value = 10;
console.log(object.value);
// → 5

/**
 * Le damos vida a nuestro robot por el pueblo,
 *
 * @param {*} state Estado en donde se encuentra el pueblo
 * @param {*} robot  Robot que transporta nuestros paquetes
 * @param {*} memory  Memoria que le asignamos a nuestro robot
 */
function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}
