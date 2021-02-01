/**
 * Este metodo crea una matriz con todos los elementos que cumplan con la validadcion
 * 
 */

 let Numbers = [35,33,16,40];

 FuncionFilter();

 function ValidarArray(item){
     return item >= 17;
 }
 function FuncionFilter(){
     Numbers.filter(ValidarArray);
 }

 //RESULTADO
 //[35,33,40]