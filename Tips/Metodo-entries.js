/**
 * El metodo retorna un objeto array con key/value
 */

let MySetup = ["Celular","Teclado","Computador","Diademas"];

let f = MySetup.entries();

for (x of f){
    console.log(x);
}

//RESULTADO
/**
 * [ 0,'Celular' ]
 * [ 0,'Teclado' ]
 * [ 0,'Computador' ]
 * [ 0,'Diademas' ]
 */