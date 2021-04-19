const saludar = function(nombre){
    return "Hola" + nombre;
}

saludar("Juan"); //Hola Juan

//Ahora, una funcion puede estar dentro de otra funcion

/*
A esto se le conoce como scopes, y para poder
acceder desde el exterior de la funcion a estas variables
tenemos que utilizar dos veces el operador parentesis.
*/

const a = "Hey!"

function global(){
    const b = "¿Qué";

    function local(){
        const c = "tal?";
        return a + b + c;
    }
    return local; 
}

global(); //local() devuelve la funcion como tal, no lafuncion ejecutada
global()(); //el segundo parentesis lo que hace es la ejecucion de la funcion 
//Quedaria asi: "Hey! ¿Qué tal?"

/*
Para evitar hacer esta doble llamada
*/

//Funciones anidadas
const closure = global();
closure(); //Quedaria asi: "Hey! ¿Qué tal?"

 //entonces, ¿Que es un closure?

 /*
 Closure es una funcion que encapsula una serie de variables y definiciones locales que unicamente seran accesibles si 
son debueltas con el operador return.

con esto logramos que sea dificil acceder desde afuera, este patron nos permite modularizar nuestro codigo y crear algo parecido
a una clase.
 */

//ahora veremos un ejemplo mas practico.
//El _ bajo es para saber que esa funcion no va hacer accdedida desde afuera
const miContador = (function() {
    let _contador = 0;

    function incrementar() {
        return _contador++;
    }

    function decrementar() {
        return _contador--;
    }

    function valor() {
        return _contador;
    }

    return {
        incrementar,
        decrementar,
        valor
    }
})();

miContador //Me devuelve la clave y el valor
miContador.valor() // 0
miContador.incrementar() // 0
miContador.valor()// 1

/*entonces, un closure es una funcion auto ejecutable 
que devuelve determinadas variables o funciones y puedes 
trabajar con ellas, y te permite tener datos privados*/