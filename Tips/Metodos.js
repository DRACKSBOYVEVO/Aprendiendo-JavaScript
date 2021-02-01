/*
find(): Devuelve el primer elemento que cumpla con la condición dentro del array
findIndex(): Devuelve el indice del primer elemento que cumpla con la condición
some(): Si encuentra un elemento en la matriz que cumpla la condicion devuelve un valor verdadero (y no verifica los valores restantes)
*/

//EJEMPLO

let años = ["1999","1998","2018","2020"];

function FuncionFind(item){
    return item >= 1999;
}

años.find(FuncionFind);
años.findIndex(FuncionFind);
años.some(FuncionFind);

//RESULTADO
//2018 / find()
// 2 / findIndex()
// true / some()


