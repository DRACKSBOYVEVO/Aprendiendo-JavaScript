class Carro {
    NumeroDePuertas;

    constructor(NumeroDePuertas) {
        this.NumeroDePuertas = NumeroDePuertas;
    }

    Conductor() {
        console.log(`Estoy conduciendo un carro con ${this.NumeroDePuertas} puertas`);
    }
}

class Ferrari extends Carro{
    Velovidad;

    constructor(NumeroDePuertas, Velovidad){
        /* super hace referencia a la función de la clase padre con el mismo
nombre que donde ella se ubica, en este caso el constructor ! */
    super(NumeroDePuertas);
    this.Velovidad = Velovidad;
    }

    MiVelocidad() {
        console.log(this.Velovidad);
    }
}

let porche = new Ferrari(4, 354);
porche.Conductor(); //"Estoy conduciendo un carro con 4 puertas"
porche.MiVelocidad(); //354

/*
Como podemos ver, la clase Ferrari ha heredado todos los atributos y
métodos de la clase Car y ademas ha agregado el suyo propio ! Esto nos
sirve para poder reutilizar código que ya esta probado, minimiza la
probabilidad de errores y permite desarrollar mas rápidamente. 

Para poder implementar el concepto de encapsulamiento lo mejor posible
en la programación orientada a objetos, vamos a utilizar unas palabras
especiales a la hora de definir nuestras propiedades dentro de una clase.

class Car {
private / public / protected numberOfDoors;
...
}

//AHORA BIEN, TENGO QUE TENER ALGO CLARO

Private: hace que él atributo sea privado para el exterior, el único que
puede acceder a una propiedad privada es la clase misma y sus métodos y
de esta manera aseguramos el encapsulamiento.

Public: si no incluimos ningún tipo de palabra antes de la definición de
una propiedad, vamos a hacer que esta sea publica y pueda ser accedida
por cualquier entidad externa.

Protected: se puede pensar que una propiedad protegida es aquella que
es privada para entidades externas pero es publica para las clases que
heredan de la misma, es una forma de tener un mayor control de las
propiedades brindando un poco mas de flexibilidad a la hora de desarrollar
desde las clases hijas.

Por mala suerte en ES6 no se pueden utilizar estas propiedades, recién en la
versión actual del 2020 se puede utilizar propiedades privadas con el uso de
“#” antes de la definición.
*/

class Car {
    #NumeroDePuertas;
    //Mi propiedad ahora es privada!
    constructor(NumeroDePuertas){
        this.#NumeroDePuertas = NumeroDePuertas;
    }
}

let car = new Car(6);
car.#NumeroDePuertas = 2;

/*
la propiedad #NumeroDePuertas no es accesible fuera de la clase 'Coche' porque tiene
un identificador privado.
*/


//METODOS ESTATICOS

/*
Antes de terminar con este concepto veamos rápidamente la manera de
utilizar métodos de una clase sin la necesidad de crear una instancia de la
misma.
*/

class Mazda {
    Velovidad;

    constructor(Velovidad){
        this.Velovidad = Velovidad;
    }

    MyVelovidad() {
        console.log(this.Velovidad);
    }

    static conductor() {
        console.log("Estoy conduciendo un porche!");
    }
}

Mazda.conductor();
//"Estoy conduciendo un porche!"

/*
Como puedes ver, en ningún momento hemos credo una instancia de la
clase Mazda, pero igualmente podemos utilizar su método estático! Esto es
muy util si tenemos una clase que contiene utilidades que pueden ser re
utilizadas a lo largo de la app, ya que no habría necesidad de crear un
instancia de la clase cada vez que necesitemos uno de estos métodos.
*/

//Constantes y variables centradas en el scope

/*
Dentro de la programación y no importa el lenguaje, existe una regla de
oro, NUNCA utilices variables globales. Si un scope es el ambiente donde
definimos nuestras variables y métodos, el scope global hace referencia al
archivo en sí y todo lo que se defina en su interior va a poder ser accedido por
todo lo que este contenga....lo cuál es un problema ! Si en algún lugar delarchivo 
la variable global es redefinida, pueden ocasionarse grandes
ambigüedades, ya que una función puede esperar un valor que fue
reemplazado.

Para ello ES6 trata de mejorar la forma en que definimos nuestras variables
para poder tener un mejor manejo de las mismas y también un mayor
entendimiento de qué es lo que se espera de ellas.

const: como su nombre lo indica, hace referencia a una variable que es
constante y no va a ser redefinida, es muy util para casos en los que no
queremos que la variable tome un valor diferente y queremos utilizarla
para almacenar información para uso posterior.

let: es muy similar a var, pero posee una vida util SOLO en el scope
donde se define, no existe para el mundo exterior.

*/

//PARTICULARIDADES A TENER EN CUENTA

/*
Cuando creamos una variable, tenemos que pensar que en realidad estamos
creando un espacio de memoria, asignando un nombre para poder accederlo y
guardar un valor en su interior.

Entender este concepto nos va a permitir comprender la primera de las
particularidades. Const no permite redefinir el valor en un espacio de
memoria, pero si este valor es un arreglo o un objeto si va a permitirnos
modificar sus contenidos, ya que el espacio de memoria en sí no fue
modificado.
*/

const MyObjeto = {
    Nombre: "Juan José"
}

MyObjeto.Nombre = "Juan";
console.log(MyObjeto.Nombre); //"Juan", y no "Juan José", por que se reecribio el contenido.
/*
Algunas formas útiles de utilizar las variables definidas con let, tienen que
ver con el aprovechamiento de su particularidad de estar asociada al scope.
*/

const MyArray = [5,8,4,7,5,4];

function Suma(){
    let i = 1;
    MyArray.forEach( Element => i += Element);
    return i;
}
console.log(Suma()); // 34

/*
Si tratamos de acceder a la variable i, fuera del scope de sum(), no va a
poder ser encontrado ! Ya que su vida util empieza y termina dentro del
scope donde fue definido.
*/

const myArray = [1,5,4,6,2,5,3,4,9,7,8];

for(let index = 0; index < myArray.length; index++){
    setTimeout(() => {
        console.log(index)
    },2500);
} 

// Resultado:  

/*
Gracias a que una variable definida con let está atada al contexto donde se
define, podemos ver que no pierde su valor ni es reemplazada, ya que asocia
el mismo a cada instancia del recorrido
*/

//Operadores Spread y Rest

/*
Digamos que queremos unificar dos arreglos, generalmente lo haríamos de
la siguiente manera :
*/

const MyArray_1 = [1,2,5,46,3,25,5,4];
const MyArray_2 = [4,5,6,3,2,5,4,7,2];

const Resultado = MyArray_1.concat(MyArray_2);
console.log(Resultado);

//[1,2,5,46,3,25,5,4,4,5,6,3,2,5,4,7,2] ===>

/*
Y si quisiéramos unificarlos en orden inverso solo deberíamos reemplazar
el orden de la implementación :
*/
const Resultado = MyArray_2.concat(MyArray_1);
console.log(Resultado);

//[4,5,6,3,2,5,4,7,2,1,2,5,46,3,25,5,4] <====

/*
Pero qué pasaría si queremos tener un poco más de control sobre esta
operación ? Cómo podemos aumentar la flexibilidad de nuestro código para
poder controlar a fino detalle la unión de uno o más arreglos ?
*/

const MyArray_3 = [4,5,6,3];

const Resultado = MyArray_1.concat(MyArray_2).concat(MyArray_3);
console.log(Resultado);

//[1,2,5,46,3,25,5,4,4,5,6,3,2,5,4,7,2,4,5,6,3] ===>

/*
El coding empieza a tornarse más engorroso verdad ? Realizar una
concatenación por cada argumento puede lograr que el código sea poco claro
y difícil de seguir. Ahora bien, hay una forma mas amigable de hacerlo.
 */

//Usaremos Spread

const Array_1 = [1,2,3,4];
const Array_2 = [4,5,6,7];
const Array_3 = [7,8,9,10];

const ResultadoArray = [...Array_1,...Array_2,...Array_3];
console.log(ResultadoArray);

//[1, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9, 10]

/*
Se llama Spread a la utilización de los tres puntos en una variable dentro
de una determinada estructura. Como su nombre lo indica, éste extiende el
contenido de la variable a través de la estructura que lo contiene, haciendo
que estos valores pasen a formar parte de la misma.

En nuestro ejemplo, el contenido de Array_1,Array_2 y Array_3 fue volcado
en el interior de ResultadoArray, y pasaron a formar parte del mismo.
*/

/*
Spread no solo funciona con arreglos, podemos utilizarlo de igual manera
con objetos. Veamos como lo haríamos normalmente :
*/

const Objeto_1 = {
    Propiedad_1: 50,
    Propiedad_2: 100
};

const Objeto_2 = {
    Propiedad_3: 200
};

const ObjetoMix = {}; //Objeto vacio

ObjetoMix['Propiedad_1'] = Objeto_1.Propiedad_1;
ObjetoMix['Propiedad_2'] = Objeto_1.Propiedad_2;
ObjetoMix['Propiedad_3'] = Objeto_2.Propiedad_3;

console.log(ObjetoMix);

/*
[object Object] {
  Propiedad_1: 50,
  Propiedad_2: 100,
  Propiedad_3: 200
}
*/

/*
Parece que es fácil verdad ? Pero que pasaría si quisiéramos unificar mas de
dos objetos y que cada uno de ellos tuviera dies propiedades ? Tendríamos
una linea de código para cada propiedad ! Este código sera engorroso y muy
difícil de mantener, mas allá de la posibilidad de crear una función que lo
haga por nosotros. Para ello podemos utilizar Spread
*/

const ObjetoMix = {
    ...Objeto_1,
    ...Objeto_2,
};

console.log(ObjetoMix);

/*
[object Object] {
  Propiedad_1: 50,
  Propiedad_2: 100,
  Propiedad_3: 200
}
*/

/*
De esta manera podemos unificar las propiedades de los objetos en uno
solo, con gran facilidad y comodidad.

Una de las particularidades que tenemos con spread en objetos, es que si un
objeto posee las mismas propiedades que otro, aquel que se encuentre mas
adelante en el orden de implementación, reemplazará al primero.
*/


const Objeto_1 = {
    Propiedad_1: 50,
    Propiedad_2: 100
};

const Objeto_2 = {
    Propiedad_2: 'Objeto_2 Propiedad2',
    Propiedad_3: 200
};

const ObjetoMix = {
    ...Objeto_1,
    ...Objeto_2,
};

console.log(ObjetoMix);

/*
[object Object] {
  Propiedad_1: 50,
  Propiedad_2: "Objeto_2 Propiedad2",
  Propiedad_3: 200
}
*/

//Esto es super util para poder actualizar objetos

let Developer = {
    Name: "Juan José",
    Edad: 21,
    Posicion: "Front-end"
};

const ActualizarInformacionDeveloper = {
    Edad: 22
}

Developer = {
    ...Developer,
    ...ActualizarInformacionDeveloper
}

console.log(Developer);

/*
[object Object] {
  Edad: 22,
  Name: "Juan José",
  Posicion: "Front-end"
}
*/

/*
En este caso vemos que el objeto Developer toma el valor de un nuevo
objeto, que por medio del uso del spread operator, posee todas las
propiedades de Developer y las de ActualizarInformacionDeveloper. Como
este último se encuentra implementado luego que developer, el valor de la
propiedad age de ActualizarInformacionDeveloper será el resultante.
*/

//Rest

/*
Comprendiendo la funcionalidad del Spread, podremos entender el Rest
Operator de una manera muy fácil. Rest va a ser utilizada para poder expandir
los parámetros de una función, y podremos utilizar los mismos como si
fueran parte de un arreglo:
*/

function AgregarConRest(...Numeros){
    let Total = 0;
    Numeros.forEach((Numeros) => (Total += Numeros));
    return Total;
}

console.log(AgregarConRest(5,4,8)); //17

/*
De esta manera no importa la cantidad de argumentos que utilicemos ya
que todos serán parte de un arreglo que puede ser recorrido y utilizado.
*/

//Destructuring //Destructuración

/*
Digamos que tenemos un arreglo y queremos obtener y guardar los valores
del mismo en una serie de variables, normalmente haríamos algo como esto:
*/

const arrayDestructuring = [1, 2, 3];

const elem1 = arrayDestructuring[0];
const elem2 = arrayDestructuring[1];
const elem3 = arrayDestructuring[2];

/*
Al igual que con la unificación de las propiedades de diferentes objetos en
uno solo, este código se puede hacer muy complicado al ampliar la cantidad
de elementos que queremos crear. Veamos como se puede mejorar con la
implementación de Destructuring:
 */

const [elem1, elem2, elem3] = arrayDestructuring;
console.log(elem1);

/*
Destructuring es la capacidad de extraer información de una manera fácil y
comprensiva de tanto objetos como arreglos. La idea principal es la de pensar
que, cada una de las variables definidas dentro de “[]”, representaran el
elemento que se encuentre en la misma posición del arreglo al que están
igualados.
*/

const elem1 = arrayDestructuring[0];
//Es igual a :
const [elem1] = arrayDestructuring;

/*
Si quisiéramos crear una sola variable que represente el segundo elemento
de nuestro arreglo, deberíamos hacer:
*/

const [, elem] = arrayDestructuring;
console.log(elem);

//Para poder utilizar destructuring con objetos, podemos hacer algo muy similar:

const ObjetoDestructuring = {
    Propiedad1: 5,
    Propiedad2: 10,
};

const { Propiedad1, Propiedad2 } = ObjetoDestructuring;

/*
Al igual que con arreglos, introducimos la definición de nuestras variables
dentro de la estructura que representaría al elemento que igualamos, en este
caso “{}”. Igualmente es muy diferente a la hora de nombrar nuestras
variables, en este caso deben ser idénticas a las propiedades que queremos
obtener, caso contrario nos encontraremos con un error.
*/

const obj = {
    prop1: 1,
};
const { prop1, prop2 } = obj;
/* Property 'prop2' does not exist on type '{ prop1: number; }’. */














