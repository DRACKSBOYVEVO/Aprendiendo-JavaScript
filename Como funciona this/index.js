//CASO 1

//En el primer caso this está siendo invocado dentro de un método.

let yo = {
    nombre: "Juan José",
    edad: 22,
    hablar: function () {
      console.log(this.nombre); //this, hace referencia al objeto, que contiene el método donde se invoca.
    }
  };
  
  yo.hablar(); // Juan José

//Caso 2

//En este caso, existe una función que recibe un objeto como parámetro, y le agrega el método hablar, luego, se ejecuta la función sobre dos objetos.

let decirNombre = function(obj) {
    obj.hablar = function() {
    console.log(this.nombre); //This en este caso hace referencia al objeto que se añade este método.
    };
  };
  
  const Mateo = {
    nombre: "Mateo",
    edad: 22
  };
  
  const juan = {
    nombre: "Juan",
    edad: 25
  };
  
  decirNombre(juan);
  decirNombre(Mateo);
  
  juan.hablar(); // Juan
  Mateo.hablar(); // Mateo

//Caso 3

//En este caso tenemos una función que retorna un objeto, que contiene un método hablar, que invoca this.

let Persona = function (nombre, edad, madre) {
    return {
      nombre: nombre,
      edad: edad,
      hablar: function() {
        console.log(this.nombre);
      },
      madre: {
        nombre: madre,
        hablar: function() {
          console.log(this.nombre);
        }
      }
    };
  };
  
  const ana = Persona("Ana", 30, "Clara");
  
  ana.hablar(); // Ana
  ana.madre.hablar(); // Clara

  /*
  This en este caso hace referencia al objeto que contiene el método donde se invoca.

Como vimos en los 3 casos, cuando this es invocado dentro de un método, implícitamente este 
hace referencia al objeto que contiene el método, sin importar si el método es añadido luego 
de haber sido creado el objeto, o si es una función que retorna un objeto.
  */
//===================================================================================================================
/*
En el caso de asignación implícita, this hace referencia al objeto, que contenía el método donde se invoca this, pero si tenemos una función y deseamos explícitamente asignarle a que va a hacer referencia this, desde ES5 contamos con los métodos call(), apply() y bind().

Vamos a tener una función, que reciba unos parámetros y muestre en consola, con la propiedad nombre a la que haga referencia this, y los parámetros que recibe.
*/

const hablar = function(l1, l2, l3) {
    console.log(`Hola mi nombre es ${this.nombre}
                  y se programar en ${l1}, ${l2}, ${l3}.`);
  };
  
  const yeison = {
    nombre: "Yeison",
    edad: 22
  };
  
const lenguajes = ["JavaScript", "Python", "C"]

  //Ahora, nosotros debemos referenciar la variable yeison para que esta sea this.

hablar.call(yeison, lenguajes[0],lenguajes[1],lenguajes[2]); //El método call nos permite definir a que va a hacer referencia this, en su primer parámetro, los parámetros siguientes son los parámetros que recibe la función.

hablar.apply(yeison, lenguajes); //El método apply, funciona igual que call, permitiendo referencia this en el primer parámetro, pero este nos permite pasar un array, como los parámetros de la funcion.

//Este método funciona diferente a los anteriores, este nos devuelve una función, en dónde this, hace referencia al objeto que pasamos en su parámetro.
const hablaYeison = hablar.bind(yeison, lenguajes[0],lenguajes[1],lenguajes[2]);

hablaYeison();

//Estos tres métodos nos permite hacer una referencia explícita, y tener claro el valor de this, en la ejecución.


//Asignación con new

//Otro caso, es cuando invocamos this en un constructor , como el siguiente ejemplo:

let Animal = function(color, nombre, tipo) {
    //En este caso, this hace referencia al objeto que se instanciando.
    this.color = color;
    this.nombre = nombre;
    this.tipo = tipo;
  }
  
  const bipa = new Animal("gris", "Bipa", "Felino");



//====================00

//Asignación a window

/*
Uno de los grandes errores de diseño del keyword this, es que cuando no se tiene una referencia al objeto, que representa this, este hace referencia al objeto window.

En la versión ES2015 o si utilizamos el use strict hace referencia a undefined
*/

const decirEdad = function() {
    console.log(this.edad);
  };
  
  const yo = {
    edad: 22
  };

//Ahora bien
/*
Tomemos este ejemplo, tenemos una función que muestra en pantalla la propiedad edad, del objeto que sea referenciado como this. pero que tal si hacemos algo como:
*/

decirEdad();
window.edad = 24;
decirEdad(); //24

/*
Ejecutamos, la función sin asignarle un objeto.

En este caso this, hace referencia al objeto window, si asignamos una propiedad edad, al objeto window y ejecutamos de nuevo la función vemos como lo muestra.

Esto es un gran error de seguridad, para hacer un poco menos inseguro esto, podemos utilizar la sentencia ‘use strict’ así:
*/

const decirEdad = function() {
    "use strict";
    console.log(this.edad);
  };

  /*En este caso, si por algún error ejecutamos la función, sin asignarle un objeto, va a disparar un error, ya que _this hace referencia a undefined _y este no tiene la propiedad edad.*/