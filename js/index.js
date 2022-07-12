let let1 = 3;
//si hago let let1=5; da error

const objeto = { Nombre: "Bart", Edad: "10" };

objeto.apellido = "Simposons";

console.log("objeto:", objeto);

const arreglo = { 1: "hola", objeto };

//template string
console.log(`Hola mi nombre es ${objeto.Nombre}`);

let salida = 5;

let mensaje = salida == 5 ? "si" : "no"; //aqui asigno el resutlaso de la operacion a mensaje y q devuelva directo el valor
console.log(mensaje);

//otro uso mas functions

function setPersona(data) {
  console.log("data", data.Nombre);
  const person = {
    nombre: data.Nombre ? data.Nombre : "Sin Nombre",
  };
  return person;
}
let persona = setPersona({});
console.log(persona);

//las functioms se pueden usar antes de definirlas (hoisting)
console.log("funcionDuplicar", functionDuplicar(4));

function functionDuplicar(x) {
  return x * 2;
}

const functionDuplicar2 = (x) => x * 2; //para un parametro
const functionDuplicar3 = (x, y, z) => x * 2 + y * 2 + z * 2; //para varios

//ojo las arrows functions no se definen  antes, se definen despues y ayudan al this q define el objeto
window.age = 10;
function PersonFlecha() {
  this.age = 42; // <-- ¿me notas?
  setTimeout(() => {
    // <-- arrow function ejecutándose en el ámbito de "pf" (una instancia de PersonFlecha)
    console.log("edad función flecha", this.age); // genera "42" porque la función se ejecuta en el ámbito de PersonFlecha
  }, 100);
}

let pf = new PersonFlecha();

//foreach
let arreglo2 = ["Bart", "Homero", "Lisa"];

let callback = (valor) => console.log(valor);
arreglo2.forEach(callback);

arreglo2.forEach((x) => console.log(x)); //seria lo mismo pero mas corto

//map que devuelve un nuevo arreglo que no tiene relacion con el original
let numeros = [1, 2, 3, 4];
let duplicados = numeros.map((x) => x * 2);
console.log(duplicados);

//map puede dar un indice tambien
let callback2 = (valor, indice) => console.log(`indice: ${indice}: ${valor}`);
numeros.map(callback2); //aqui el indice es el lugar en el arreglo y valor lo saca de numero

//from recibe opcionalmente un callback y devuelve un nuevo arreglo

//find recibe un callback el cual debe devolver un valor booleano y para cada elemento se ejecuta la funcion pasada como parametro
//cuando devuelva true, find retorna solo el primer objeto completo
const frutas = [
  { nombre: "manzana", cantidad: 2 },
  { nombre: "uva", cantidad: 1 },
  { nombre: "pera", cantidad: 5 },
];

let quieroUva = frutas.find((fruta) => fruta.nombre === "uva");
console.log(quieroUva);

//filter recibe un callback que devuelve un booleano que guarda cada nuevo valor en un nuevo arreglo
let palabras = ["hola", "como", "estas", "hoy"];

let misPalabras = palabras.filter((palabra) => palabra.length >= 4);
console.log(misPalabras);

//reduce recibe un callback y opcionalmente un valor inicial, sino por defecto se asigna 0 o ¨¨
//dicha funcion recibe 2 parametros, uno es acumulador yel otro itera

const arreglo4 = [1, 2, 3, 4];
const reducer = (acumulador, valorActual) => acumulador + valorActual;

console.log(arreglo4.reduce(reducer)); //daria 10

//la suma inicia en 5, daria 15
console.log(arreglo4.reduce(reducer, 5));

const arreglo5 = ["a", "b", "c"];
const reducer2 = (acumulador, valorActual) => acumulador.concat(valorActual);

console.log(arreglo5.reduce(reducer2)); //daria 10

//inicia en z, daria zabc
console.log(arreglo5.reduce(reducer2, "z"));

const arreglo6 = ["a", "b", "c"];
const reducer3 = (acumulador, valorActual) => acumulador.push(valorActual);
//aqui hay q agregar un elemento nuevo
//console.log(arreglo6.reduce(reducer3, []}));

//destructuring(arreglos), permite darle nombre a los elementos  de un arreglo
const arreglo7 = ["hola", "mundo", "como", "estan"];
let [a, b] = arreglo7;
let [, , c] = arreglo7;
console.log([a, b]);
console.log([c]);

//otra via
let x = "soyx";
let y = "soyy";
[x, y] = [y, x];
console.log([x]);

//otro caso
const personaje = { nombre: "Bart", apellido: "Simpsons" };
const { nombre } = personaje; //tiene q ser el mismo atributo
console.log(nombre);

//renombrar o pponer alias
const dato = {
  country: "USA",
  address: {
    street: "Ever green",
    city: "Springfield",
  },
};

const { country: pais } = dato; //aqui renombro el parametro
console.log(pais);

const {
  address: { street: calle },
} = dato; //aqui renombro el parametro dentro
console.log(calle);

//parametros por defecto
const f = (x, y = 3, z = 5) => x + y + z;

let resultado = f(1, 2); // aqui sobreescribe los parametros depende la posicion q usamos
console.log("resultado", resultado);

//sobrecarga, tiene el mismo nombre pero sabe a quien llama depende del tipo de parametro que usa
