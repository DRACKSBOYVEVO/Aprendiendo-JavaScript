/*
Atributos: Por ejemplo un perro tiene generalmente cuatro patas, dos
ojos, una nariz, etc. Esos son atributos que representan al objeto al que
pertenecen.

Métodos: a su vez cada objeto posee acciones, en nuestro ejemplo
anterior el perro también puede ladrar, correr, saltar.

Una clase se puede pensar como la estructura en la que nos basamos para crear un objeto,
es exactamente lo mismo que un molde para hornear. 

En esta forma una clase posee cuáles son los atributos que pertenecen a la misma, por medio de constructor recibe la
información y la adapta para que la clase la pueda utilizar mediante métodos.

AHORA, ALGO IMPORTANTE QUE TENGO QUE TENER EN CUENTA SON ESTOS 4 CONCEPTOS!!

1. Encapsulamiento

esta propiedad es una de las más importantes y la vamos a entender con solo un ejemplo:

Si nosotros representamos una persona a nivel de código, vamos a
encontrar que dentro de sus propiedades cualquier persona conlleva
una edad, y esta edad es generalmente numérica. Si alguien quisiese
modificar este atributo y no sabe de esta condición, puede llegar a
ocasionar problemas en nuestro código con tan solo asignar una edad
en formato de texto. Esto se soluciona fácilmente al respetar el
principio de encapsulamiento, solo puede modificarse un atributomediante 
un método propio de la clase y así podemos escribir ciertas
cláusulas para controlar la lógica y que estos problemas no ocurran.

2. Herencia

principio de SUMA importancia también, la herencia
representa el concepto de que generalmente un objeto no es único y
puede basarse en otro. 

Un claro ejemplo es el de un estudiante, ya que también es una persona, a su vez 
un profesor también lo es y entre ellos comparten atributos como la edad, nombre, altura, etc. Vale
aclarar también, que un profesor NO es un alumno y viceversa, ya que
de la misma forma que comparten atributos también poseen sus
diferencias. 

Se utiliza Herencia para poder representar el vinculo entre objetos y 
mediante el mismo, el aprovechamiento del código. Nunca se debe repetir código si es
posible!.


Polimorfismo

generalmente uno de los conceptos mas difíciles de
entender en un comienzo. Digamos que tenemos una clase que es
“Animal”, tanto un perro como un gato pueden basarse en esta clase
ya que en sí son animales, pero un gato al tratar de comunicarse
“maúlla” mientras que el perro “ladra”. Este es el principio del
polimorfismo, que una clase puede comportarse de manera diferente
acorde al contexto, en este caso de si la clase que se basa de un animal
es perro o gato.


Abstracción

ahora que aprendimos las otras tres propiedades
vamos a poder entender este principio que.....lo estuvimos aplicando
todo este tiempo ! El principio de abstracción habla de la capacidad
de abstraerse lo más posible al trabajar con objetos y ocultar la mayor
cantidad de detalles al usuario. Veamos cómo fuimos aplicándolo
hasta ahora.

En el encapsulamiento abstraemos al que utilice el método para
modificar una propiedad, ya que éste solo ingresa información, no se
sabe qué pasa por dentro. Durante la herencia pasa algo parecido, ya
que al heredar todos los métodos y atributos del padre también
terminamos abstrayéndonos de esa complejidad. Con el polimorfismo,
abstraemos la forma en que se comportara el objeto de acuerdo a sucontexto, solo llamamos a un método y que este se comporte de la
manera que debe, nuevamente ahorrándonos esa complejidad.
*/

