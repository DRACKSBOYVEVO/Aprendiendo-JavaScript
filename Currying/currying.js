/*
Digamos que poseemos una cadena de funciones que queremos utilizar, en
la cual el resultado de cada una será utilizada dentro de la funcionalidad de la
siguiente y cada una posee su propio parámetro.....te asustaste verdad ? No te
preocupes que yo al principio también me sentí así. Currying es un increíble
concepto que nos puede ayudar a solucionar esta problemática y que para ello
utiliza fuertemente el concepto de clausuras :
*/

function sayHi(name, lastName, age) {
    console.log('hi: ' + name + ' ' + lastName + 'with age: ' + age);
}

/* 
Esta simple función saluda a una persona según su nombre, apellido y edad,
veamos cómo podemos aplicar currying para aumentar su funcionalidad:
*/
function sayHiCurried(name) {
    return function (lastName) {
      return function (age) {
        console.log('Hola: ' + name + ' ' + lastName + ' con edad: ' + age);
    };
  };
}
sayHiCurried('Juan')('Jośe')(22);

/*
De esta manera vemos que podemos utilizar las funciones de manera
encadenada, donde cada parámetro continuo que utilizamos al llamar a la
función, se aplica a una de las funciones por orden de aparición. Veamos
ahora en que manera nos puede ayudar el utilizar Curry Functions:
*/

function Mycurry(nombre) {
    return function (apellido) {
        return function (edad) {
            console.log('Hola, mi nombre es ' + nombre + ' ' + apellido + ' y Tengo ' + edad + ' años de edad');
        };
    };
}

function AhoraEresTuJuan() {
    return Mycurry('Juan');
}

AhoraEresTuJuan()('José')(22);

/*
La función AhoraEresTuJuan es lo que se denomina una función parcial,
esta tendrá un valor por defecto como parámetro y gracias al currying
podemos seguir permitiendo que los demás parámetros sean variables.
*/














