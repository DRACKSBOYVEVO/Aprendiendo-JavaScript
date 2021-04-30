/*
La última versión de Javascript trae consigo los mejores métodos basados
en los conceptos de la programación funcional. Por ahí te has topado alguna
vez con una librería muy linda llamada Lodash, esta nos trae una gran
cantidad de métodos de muchísima utilidad, pero a su vez, cae dentro de la
maldición de las librerías externas que pesan mucho en una aplicación como
para solo utilizar algunos de los métodos de la misma.
Por eso entender los beneficios de ES6 es tan importante ! Veamos los
principales métodos que todo desarrollador front debe saber y cómo estos
aplican la programación funcional.
*/

//Find

/*
Escribamos de forma imperativa un código para poder encontrar un objeto
entre una colección de elementos:
*/

let ArrayEjemplo = [
    { nombre: "Jośe", Edad: 22},
    { nombre: "Juan", Edad: 21},
];

function BuscarObjeto(nombre){
    let EncontrarObjeto = null;
    let index = 0;

    while(!EncontrarObjeto && ArrayEjemplo.length > index){
        if (ArrayEjemplo[index].nombre === nombre){
            EncontrarObjeto = ArrayEjemplo[index];
        }
        index += 1;
    }
return EncontrarObjeto;
}
console.log(BuscarObjeto('Juan'));

/*
[object Object] {
  Edad: 21,
  nombre: "Juan"
}
*/

/*
Lindo código verdad ? Dentro de todo pequeño y util, pero veamos como
quedaría con ES6:
*/


console.log(ArrayEjemploFind.find((element, index) => element.nombre === 'Jośe'));


/*
Sorprendidos ? Este es el método Find, que es declarativo ya que solo se
preocupa en el qué hay que hacer ( encontrar un elemento ), es inmutable ya
que devuelve un elemento nuevo sin modificar el arreglo original y no genera
ningún tipo de efecto secundario.
*/

/*
Para utilizarlo vamos a escribir primero el arreglo donde se encuentra el
elemento que queremos encontrar, en este caso exampleArrayFind, luego
vamos a escribir el método en sí .find() y dentro del mismo vamos a aplicar
un método que usaremos como condición. La estructura de esta condición es
la siguiente, en los paréntesis iniciales escribiremos el nombre que nos
gustaría para representar un elemento del arreglo, seguido por un parámetro
opcional que representa el índice en el que nos encontramos en el bucle.
*/

//(element, index) =>

/*
Luego escribiremos una condición que pueda terminar en verdadero o
falso y esta se aplicará elemento por elemento evaluando cada uno de ellos.
*/

//element.nombre === 'Jośe'

/*
Si ninguno cumple la condición, se retornara undefined, caso contrario se
devolverá el elemento.
*/









































