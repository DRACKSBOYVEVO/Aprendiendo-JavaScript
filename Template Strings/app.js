/*
ES6 trae una forma muy fácil de trabajar con strings, llamada Template
Strings, que permite poder escribir tal cual se vería en pantalla,
reemplazando solo en aquellos lugares por referencias a nuestras variables.
*/

let Amiga = 'Manuela';
let Edad = 48

let Frase = `Hola, mi nombre es ${Amiga} y tengo ${Edad} años.`;

console.log(Frase);

//"Hola, mi nombre es Edilia y tengo 48 años."

function ObtenerEdadPersona(edad){
    return edad + 10;
}

let PersonName = "Juan José";
let PersonEdad = 21

//Obcion 1
let text = `Hola, mi nombre es ${PersonName} y tengo ${PersonEdad + 10} años!`;
console.log(text);
//"Hola, mi nombre es Juan José y tengo 31 años!"

//Obcion 2
let text_2 = `Hola, mi nombre es ${PersonName} y tengo ${ObtenerEdadPersona(PersonEdad)}`;
console.log(text_2);
//"Hola, mi nombre es Juan José y tengo 31"
