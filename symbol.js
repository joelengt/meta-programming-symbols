
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


