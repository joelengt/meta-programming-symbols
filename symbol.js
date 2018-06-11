// symbols
const nombre = Symbol('nombre')
const honorifico = Symbol()

let persona = {
  [nombre]: 'Pepito',
  [honorifico]: 'Don'
}
 
console.log(persona)
console.log(persona[nombre])
console.log(persona[honorifico])

// Symbol('nombre') - as a private prop
const nombre  = Symbol('nombre')

const persona = {
  [nombre]: 'Pepito',
  get nombre() { return persona[nombre] }
}

console.log(persona.nombre); // permite el acceso al nombre de persona
persona.nombre = 'Jose'; // da error al querer cambiarlo


// Symbol.for('nombre')
Symbol.for('nombre') // crea un nuevo símbolo

let persona = {}

// usa el symbolo 'nombre' para identificar a una propiedad de persona
persona[Symbol.for('nombre')] = 'Jose';

console.log(persona);
console.log(persona[Symbol.for('nombre')])


// Symbol.hasInstance: instanceof
class MiArray {  
    // aquí sobrecargo el operador instanceof 
    static [Symbol.hasInstance](otro) {
        return Array.isArray(otro);
    }
}
assert([] instanceof MiArray) // pasa, por evaluarse como true


// Symbol.iterator
class IterarSaltando {  
  *[Symbol.iterator]() {
    var i = 0;
    while(this[i] !== undefined) {
      yield this[i];
      i+=2;
    }
  }
}

var iterarSaltando = new IterarSaltando();
iterarSaltando[0] = '1';
iterarSaltando[1] = '2';
iterarSaltando[2] = '3';

for(var value of iterarSaltando) {  
    console.log(value); // 1, luego 3
}

// Array
const iia = [...Array(5)]
const arr = [1, 2, 3, 4]
Array.isArray(arr) // true
Array.for('sample') // ['s', 'a', 'm','p', 'l', 'e']

// Object
const ob = { name: 'dasd', age:19, lastName: 'fuldata date', info: 'sample delivery' }
Object.keys(ob) // ["name", "age", "lastName", "info"]
Object.keys(ob).sort() // ["age", "info", "lastName", "name"]

Object.values(ob) // ["dasd", "19", "dsad", "sample delivery"]
Object.entries(ob) // [["name", "dasd"], ["age", "19"], ["lastName", "fuldata date"], ["info", "sample delivery"]]


const app = Object.freeze({
  init: async function init () {
    try {
      const data1 = await getData(); // hola
      const data2 = `${data1} mundo`;

      console.log(data2);
    } catch (error) {
      console.log(error);
    }
  }
});

async const initProcess = () => {
  try {
    const data1 = await fetch('https://github.com/joelengt')
      .then(result => result.status)
    
    const data2 = `${data1} mundo`;

    console.log(data2); 
  } catch (error) {
    console.log(error);
  }
}

app.init();

initProcess()

// Function Bind Operator
// sample 1
this.func.bind(this) 

// vs

::this.fun;
::this.fun(1, 'sample');


// sample 2
const map    = Array.prototype.map;
const filter = Array.prototype.filter;
function mostrar() { console.log(this); return this; }
function agregar(numeros) {
  for (let numero of numeros) {
    this.push(numero);
  }
  return this;
}

const data = [1,2,3];

data
::mostrar()
::filter(x => x % 2 !== 0)
::mostrar()
::map(x => ++x)
::mostrar()
::agregar(data)
::mostrar();



// sample 3

/* ES7 */
import { map, takeWhile, forEach } from "iterlib";

getPlayers()
::map(x => x.character())
::takeWhile(x => x.strength > 100)
::forEach(x => console.log(x))


// Object Observe
let persona = {
  nombre: 'Jose'
};

Object.observe(persona, changes => {
  changes.forEach(change => console.log(change));
});

persona.nombre = 'Pepito';
persona.honorifico = 'Don';
delete persona.nombre;


const ob = { name: 'dasd', age: 20 }
'age' in ob // true
'lastname' in ob // false
 
// String
var a = 5;
var b = 10;

function tag(strings, ...values) {
  console.log(strings[0]); // "Hola "
  console.log(strings[1]); // " mundo "
  console.log(values[0]);  // 15
  console.log(values[1]);  // 50

  return "Bazinga!";
}

tag`Hola ${ a + b } mundo ${ a * b}`;
// "Bazinga!"

const text = "sample way to write";
const result = text.match(/wa/ig) // ["wa"]
if (!result.length) throw Error("it's empty")


// formt HTTP sample
function formatHTTP({ url, method = "GET", headers, body }) {
  const { path, host } = parseURL(url);

  return [
    `${method} ${path} HTTP/1.1`,
    `Host: ${host}`,
    ...Object.entries(headers).map(([key, value]) => `${key}: ${value}`),
    JSON.stringify(body, null, 2)
  ].join("\n");
}

// search a element inside a string
const text = 'sample' 
text.indexOf('p') // 3
text.search('p') // 3

// Map

// An Object has a prototype, so there are default keys in the map.
// The keys of an Object are Strings, where they can be any value for a Map.
// You can get the size of a Map easily while you have to keep track of size for an Object.

let map = new Map();
let persona;

map.set('sample', 'sas')
map.set('age', 20)
map.set('persona', { nombre: 'Jose' }); // guardamos el valor

// comprobamos que exista dentro de nuestro map
if (map.has('persona')) {
  persona = map.get('persona'); // lo obtenemos
}

map.delete('persona'); // borramos 'persona' y el valor asociado

console.log(persona);
console.log(map.get('persona'));


// another example
var myMap = new Map();

var keyObj = {},
    keyFunc = function () {},
    keyString = "a string";

myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

myMap.size; // 3

myMap.get(keyString);    // "value associated with 'a string'"
myMap.get(keyObj);       // "value associated with keyObj"
myMap.get(keyFunc);      // "value associated with keyFunc"



// Set 
let persona = { nombre: 'Pepito' };

let set = new Set([1, 'foo', 3.14, persona]);

console.log(set.size);

console.log(set.has(1));

set.add('bar');

set.delete(persona);

set.forEach(v => console.log(v));

for (let values of set) {
  console.log(values);
}

let values = set.values();
console.log(values.next());
console.log(values.next());
console.log(values.next());
console.log(values.next());


// WeakMap
let wMap = new WeakMap();

let obj = { first: 'value' }

wMap.set(obj, 'mundo');

console.log(wMap.get(obj));

if (wMap.has(obj)) {
  wMap.delete(obj);

  console.log(wMap.get(obj));
}

// WeakSet
let wSet = new WeakSet();

let obj = { first: 'value' };

wSet.add(obj);

if (wSet.has(obj)) {
  wSet.delete(obj);
}


// Proxy
let Jose = {
  nombre: 'Don Jose'
};

let proxy = new Proxy(Jose, {
  get(target, propiedad) {
    let mensaje = `obteniendo ${propiedad}:
${target[propiedad]}`;
    console.log(mensaje);
  }
});

proxy.nombre;

// jquery
$('.block .sample.box').find('span.padr>img.a').attr('src') 




// System.import vs import

/// >> system.import (async)
// Cargando un solo módulo
System.import('modulo')
  .then(modulo => {
    // código
  })
  .catch(error => {
    // código
  });

// Cargando múltiples módulos
Promise
  .all(['modulo1', 'modulo2', 'modulo3'].map(x => System.import(x)))
  .then(([modulo1, modulo2, modulo3]) => {
    // código
  })
  .catch(error => {
    // código
  });


/// >> import (sync)
// desde Exportación única
import Persona from './archivo.js';

// desde Multiples exportaciones
import * as calc from './archivo.js';

// desde Combinandolos
import calc from './archivo.js';
import { sumar } from './archivo.js';





>> bind vs apply vs call
//How about call and apply?
// magicMultiplication.bind(this)

magicMultiplication.call(this,3,2); //6
magicMultiplication.apply(this,[5,2]); //10

/**
* In simple words, bind creates the function,
* call and apply executes the function whereas apply expects the parameters in array
*/
