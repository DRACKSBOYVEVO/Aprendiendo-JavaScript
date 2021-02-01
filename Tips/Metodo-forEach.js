/*
    Recorre todos los elementos que tenga el array
*/

let MiRopa =["camisa","buso","gorra","pantalon","zapatos"];
MiRopa.forEach(Funcionforeach);

function Funcionforeach(item, index){
    //index = posicion del elemento en el array
    //item = valor del elemento
    console.log(index + ": " + item);
}

//Resultado

/*
0: camisa 
1: buso     
2: gorra    
3: pantalon 
4: zapatos
*/