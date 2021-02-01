/*
    Verifica cada elemento de un array mediante una 
    condicion y devuelve true si todos los elementos
    cumplen la condicion o false si no la cumplen
*/

let Numbers = ["32","33","16","40"];

FuncionEvery();

function ValidarArray(item) {
    return item >= 19;
}
function FuncionEvery(){
    Numbers.every(ValidarArray);
}

//RESULTADO

//false

/*
    En este caso, retorna un valor flase
    por que ages[2] = 16, y por eso, no 
    cumple con la condición.
*/