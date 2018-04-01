
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

// search a element inside a string
const text = 'sample' 
text.indexOf('p') // 3
text.search('p') // 3


// jquery
$('.block .sample.box').find('span.padr>img.a').attr('src') 
