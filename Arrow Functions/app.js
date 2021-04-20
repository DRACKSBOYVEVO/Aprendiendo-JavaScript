let MyDog = {
    Nombre: "Rocky",
    Actions: ["Corre","Comér","Dormir","Morder","hacerme compañia"],
    MostrarActions: function(){
        this.Actions.forEach((action) => {
            console.log(this.Nombre + " quiere" + action);
        });
    }
};

MyDog.MostrarActions();

/*
"Rocky quiere Corre"
"Rocky quiere Comér"
"Rocky quiere Dormir"
"Rocky quiere Morder"
"Rocky quiere Hacerme compañia"
*/

//ENTONCES...
/*
Porqué funciona nuestro nuevo código si es exactamente igual al primero ?
Esto se debe a que utilizamos una Arrow Function, que tiene como
particularidad que NO crea un scope nuevo sino que comparte el mismo que
el1 del lugar donde se ha definido.
*/