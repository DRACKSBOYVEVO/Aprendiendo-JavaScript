/**
 * El metodo agrega  o elimina elementos de una matriz
 */

 //Ejemplo 1
let Fruts = ["pera","mango","melon","uva"];
Fruts.splice(2, 0, "Kiwi", "Limon");
console.log(Fruts)

//RESULTADO
//Aqui agrego los elementos apartir de la posicion 2 del array
//[ "pera", "mango", "Kiwi", "Limon", "melon", "uva" ]

 //Ejemplo 1
 let Fruts = ["pera","mango","melon","uva"];
 Fruts.splice(2, 1);
 console.log(Fruts)

//RESULTADO
//Aqui se elimino el elemento de la posicion 2 en el array
 //[ "pera", "mango", "uva" ]