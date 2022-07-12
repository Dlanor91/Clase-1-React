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
