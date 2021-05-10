/*
Aquí viene el método más mal entendido, del que menos se acuerdan los
desarrolladores, el increíble Reduce.

Para explicarlo veamos primero su estructura:
*/

const FuncionReducir = (Acumulator, ValorActual, index,Valoracumuladorinicial) => Acumulator + element;

/*
Como podemos ver el método sigue con una estructura muy parecida al
resto pero tiene algunas diferencias. Ademas de recorrer nuestro arreglo
aplicando un método, vamos a tener un parámetro agregado llamado
acumulador. Este almacenará el resultado de cada operación que realicemos
dentro de sí y puede concluir en cualquier tipo de estructura, tanto esta sea un
arreglo, un objeto o un valor especifico.

Escribamos un código imperativo que devuelva como resultado la
sumatoria de todos los valores de un arreglo de números:
*/

let EjemploArrayReduce = []