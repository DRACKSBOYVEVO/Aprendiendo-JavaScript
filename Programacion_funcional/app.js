/*
La programación funcional es un tema muy importante a saber a la hora de
programar, ya que rige en la forma que codificamos nuestros proyectos y
genera un cierto orden muy difícil de combatir.

Existen dos tipos de formas al programar que generalmente dictan la vida
de un programador, la imperativa y la declarativa.

La manera imperativa es la que generalmente aplicamos al comenzar a
programar y es en la cual, para poder lograr llegar a un resultado,
codificamos los diferentes pasos a seguir hasta llegar al mismo.

La programación declarativa se abstrae de este concepto de cómo llegar al
resultado y se encarga de explicar el problema, el qué hacer para poder llegar
al resultado.

En cuanto a la programación funcional, esta pone la balanza sobre este
último y tiene diferentes conceptos que la identifican:
*/

/*
Funciones puras

son aquellas funciones en las cuales entran valores
como parámetros y salen resultados, y siempre que entren los mismo
valors siempre serán iguales los resultados. No generan ningún tipo de
efecto secundario, el cual representa que todo lo que se realice dentro de la
funciona no saldrá al mundo exterior y no modificará ninguna variable
fuera de esta. Un console.log, la escritura a un archivo externo, llamar a
otra función, o hacer que se dispare un evento externo son ejemplos de
efectos secundarios.
*/

/*
Inmutabilidad

a mi parecer uno de los conceptos más importantes a
tener en cuenta a la hora de programar ya que muchos frameworks se
basan en el mismo para evitar ambigüedades. El concepto explica que
NUNCA se debe modificar una variable sino que se debe reemplazar por
un nuevo valor. Te acuerdas que habíamos visto que siempre hay que
pensar en una variable como un espacio de memoria con un valor en su
interior, y que cuando utilizábamos const al definir una variable con un
objeto en su interior, este permitía modificar una propiedad del mismo.
Por este tipo de posibles problemas es que es tan importante siempre
generar un resultado nuevo y no modificar los originales...así que
acuérdense siempre reemplazar nunca modificar.
*/

