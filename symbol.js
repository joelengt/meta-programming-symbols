// symbols
const nombre = Symbol('nombre');
const honorifico = Symbol();

let persona = {
  [nombre]: 'Pepito',
  [honorifico]: 'Don'
};

console.log(persona);
console.log(persona[nombre]);
console.log(persona[honorifico]);



// Symbol('nombre') - as a private prop
const nombre  = Symbol('nombre');

const persona = {
  [nombre]: 'Pepito',
  get nombre() { return persona[nombre] }
};

console.log(persona.nombre); // permite el acceso al nombre de persona
persona.nombre = 'Jose'; // da error al querer cambiarlo


// Symbol.for('nombre');
Symbol.for('nombre'); // crea un nuevo símbolo

let persona = {};

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
assert([] instanceof MiArray); // pasa, por evaluarse como true


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
