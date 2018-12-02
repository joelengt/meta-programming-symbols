
// DI: Dependency Inyection
// https://www.andrewmunsell.com/blog/dependency-injection-for-modern-javascript-using-es6-classes-and-es7-decorators/
// needlepoint => decorator https://github.com/andrewmunsell/needlepoint

/* config.js */
 
import {singleton} from 'needlepoint';
 
@singleton
export default class Config {
    constructor() {
        
    }
 
    /**
     * Get a configuration value for the specified key
     */
    get(key) {
        return this._data[key];
    }
}
 
/* database.js */
 
import {dependencies, singleton} from 'needlepoint';
 
@dependencies(Config)
@singleton
export default class Database {
    constructor(config) {
        this.config = config;
 
        this.configureDatabase();
    }
 
    configureDatabase() {
        // ... configure the database with the current configuration instance
    }
 
    query(q) {
        // ... Perform the specified query
    }
}
 
/* index.js */
 
import {container} from 'needlepoint';
 
import Database from './database';
 
var db = container.resolve(Database);
db.query("SELECT * FROM users");


// Another Example

// Coupling
class Alumno {
  constructor() {
    this.calificaciones = Calificacion.all()
    this.salon = Salon.find(this.id)
    this.info = new StudentInfo()
  }
}



// loss coupling: constructor inyection
class Alumno {
  constructor(calificaciones: Calificacion, salon: Salon, info: StudentInfo) {
    this.calificaciones = calificaciones
    this.salon = salon
    this.info = info
  }
}


// create new alumano
var calificaciones = new Calificacion.all()
var salon =  Salon.find(this.id)
var info = new StudentInfo()

var alumnito = new Alumno(calificaciones, salon, info)


// proof at unit test, mocking
var calificaciones = FakeCalificacion.all()
var salon =  FakeSalon.find(this.id)
var info = new StudentInfo()

var alumnito = new Alumno(calificaciones, salon, info)

// Frameworks

// functional
// with curryng, High Order Functions, mindset functional


// SOLID

/// Single Responsability

/// Open/Close

/// 
