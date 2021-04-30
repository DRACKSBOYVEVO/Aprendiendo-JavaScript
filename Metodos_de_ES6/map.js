//Map

/*
Siguiendo nuestro esquema, vamos a escribir un código imperativo que
tome un arreglo de personas y modifique la edad de cada una sumando uno asu valor original.
*/

let ArrayEjemplo_2 = [
    { nombre: "Jośe", Edad: 22},
    { nombre: "Juan", Edad: 21},
];

function CambiarEdad(array){
    let ArrayAuxiliar = array;
    ArrayAuxiliar.forEach((element, index) => {
        ArrayAuxiliar[index].Edad += 1;
    });
    return ArrayAuxiliar;
}
console.log(CambiarEdad(ArrayEjemplo_2));

/*
[[object Object] {
  Edad: 23,
  nombre: "Jośe"
}, [object Object] {
  Edad: 22,
  nombre: "Juan"
}]
*/

//Y ahora escribamos el mismo código pero utilizando la función Map:

const ResultadoArray = ArrayEjemplo_2Map.map((element, index) => {
    element.Edad += 1;
    return element;
});

console.log(ResultadoArray);

/*
Nuevamente es mucho más pequeña ! La función Map es muy interesante
ya que esta vez la condición debe retornar un nuevo elemento, por lo que al
aplicar esta condición sobre cada valor del arreglo original dará como
resultado un nuevo arreglo con los resultados de cada operación.
*/