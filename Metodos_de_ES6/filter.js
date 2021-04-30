/*
Veamos un código imperativo que filtre un arreglo de personas y solo
devuelva aquellas cuya edad sea mayor a veinticuatro :
*/

let ArrayEjemplo = [
    { nombre: "Jośe", Edad: 22},
    { nombre: "Juan", Edad: 21},
];

function ArrayFilter(nombre){
    let newArray = [];

    for(let index = 0; ArrayEjemplo.length > index; index++){
        if (ArrayEjemplo[index].Edad > 20) {
            newArray.push(ArrayEjemplo[index]);
        }
    }
    return newArray;
}

console.log(ArrayFilter(ArrayEjemplo));

/*
[[object Object] {
  Edad: 22,
  nombre: "Jośe"
}, [object Object] {
  Edad: 21,
  nombre: "Juan"
}]

si no encuentra nada: 
[]
*/

//Ahora veamos como realizar esta funcionalidad con el método Filter:

console.log(ArrayFilter.filter(element => element.Edad > 20));

/*
Qué pequeño y eficiente

Filter devuelve nuevamente un arreglo nuevo
con todos aquellos elementos que cumplan con una condición, que resultará
en verdadero o falso. Si la condición resulta verdadera, el elemento es
agregado en este nuevo arreglo.
*/

