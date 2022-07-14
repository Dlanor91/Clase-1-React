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

//para el spread
const arreglo8 = ["a", "b", "c"];
const reducer4 = (acumulador, valorActual) => acumulador.concat(valorActual);
console.log(arreglo8.reduce(reducer4, [])); //aqui concateno todo, los [] van dentro de la , sino no sale

//desestructurar como usar el push, no puede tener el return en el push entonces debo si o si ponerlo despues
const reducer5 = (acumulador, valorActual) => {
  console.log("acumulador", acumulador);
  acumulador.push(valorActual);
  return acumulador;
};
console.log(arreglo8.reduce(reducer5, []));

//parametros rest los ...nombres es que para cada parametro admite mas de uno y debe ser el ultimo parametro
const armarSaludo = (saludo, finSaludo, ...nombres) => {
  console.log(saludo, finSaludo, nombres);
  nombres.forEach((nombre) => console.log(`${saludo} ${nombre} ${finSaludo}`));
};
armarSaludo("Hola", "bienvenido", "Jose", "Pedro", "Roberto");
//otro ejemplo pero desestructurado
const armarSaludo2 = (...nombres) => {
  let [primerNombre, segundoNombre] = nombres;
  console.log(`Nombres: ${primerNombre} , ${segundoNombre}`);
};
armarSaludo2("Jose"); //aqui solo tiene un elemento el arreglo y por ende da error

//spread permite usar los objetos de forma iterable, para que use los datos del arreglo
const sum = (x, y, z) => x + y + z;

const numbers = [1, 2, 3];
console.log(sum(...numbers));

//spread al realizar una copia con el = te apunta a el mismo lugar(apunta al mismo puntero) y luego modificar la copia el original se ve afectado
const arreglo9 = ["a", "b", "c"];
const arreglo10 = arreglo9; //esto esta mal, se debe usar spread y esparcirlo. es una copia por referencia
arreglo9.push("d");
console.log(`${arreglo9} , ${arreglo10}`);

const arreglo11 = ["a", "b", "c"];
const arreglo12 = [...arreglo11]; //esto es una copia en profundidad o sea son independientes
arreglo11.push("d");
console.log(`${arreglo11} , ${arreglo12}`);

//tambien traduce una cadena y la descontruye
//A partir de un arreglo se puedo obtener una cadena continua
const items = ["This", "is", "a", "sentence"];
console.log(items); // [ 'This', 'is', 'a','sentence' ]
console.log(...items); // This is a sentence es lo q devuelve y los espacios es porq separa los valores

//spread en objetos te permite clonar
let addams = { nombre: "Homero", apellido: "Addams" };
let simpsons = { apellido: "Simpsons", edad: 38 };
//se realiza una copia del objeto
let addamsClonado = { ...addams };
console.log(addamsClonado);
let mergedFamilias = { ...addams, ...simpsons }; //aqui sobreescribe los campos iguales y se aueda con el ultimo por eso el apellido aqui lo sobreescribe
console.log(mergedFamilias);

//clases el this se usa para desambiguar cual es parametro y cual es de objeto(sin this) sino usas la misma variable
class Vehiculo {
  constructor(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
  }
  obtenerDatos() {
    return `marca:${this.marca}, modelo: ${this.modelo}, anio: ${this.anio}`;
  }
  saludar() {
    console.log("Hola soy un vehículo");
  }
}

class Auto extends Vehiculo {
  //el extends es para usar clases hijos
  constructor(marca, modelo, anio, numPuertas) {
    super(marca, modelo, anio);
    this.numPuertas = numPuertas;
  }
  //se sobreescribe el método heredado
  obtenerDatos() {
    let metodoHeredado = super.obtenerDatos(); //super es del padre por eso usa super
    return `${metodoHeredado}, puertas:${this.numPuertas}`; //el this es referido al auto en este caso
  }
  queSoy() {
    console.log("Soy un auto");
  }
  modificarPuertas(puertas) {
    this.numPuertas = puertas;
  }
}

const auto = new Auto("Nissan", "Versa", 2019, 5);
auto.saludar();
auto.queSoy();
console.log(auto.obtenerDatos());
auto.modificarPuertas(4);
console.log(auto.obtenerDatos());
