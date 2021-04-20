/*
Javascript tiene una gran particularidad a la hora de trabajar con
definiciones, veamos un ejemplo para entrar en situación:
*/

console.log('variable a :', a);
const a = 1;

/*
Se podría dar a entender que este código daría error, ya que al momento de
ejecutar el console.log la variable “a” no existe, pero esto no es así ! ya que
Javascript mueve todas las declaraciones al tope del scope donde estas se
encuentran definidas, antes de la ejecución de código, y así se sigue
manteniendo la idea de que la lectura del código se realiza de arriba hacia
abajo. Esta capacidad de poder llamar a un código que puede estar definido
antes o luego de una llamada se denomina hoisting.
*/

