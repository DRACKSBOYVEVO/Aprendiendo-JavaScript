/*
Apply, Call y Bind son métodos muy interesantes que nos van a permitir
llamar a nuestra función y que ésta ejecute su funcionalidad haciendo uso del
scope en la que se llame.
Veamos un ejemplo:
*/

const person = {
    Nombre: 'Juan',
    edad: 20,
    personInformation: function () {
        return 'Hola, mi nombre es ' + this.Nombre + ' y tengo ' + this.edad + ' años de edad';
  },
};
  
console.log(person.personInformation()); 
//"Hola, mi nombre es Juan y tengo 20 años de edad"

/*
Dentro del objeto person veremos al método personInformation, cuya
función es solo mostrar la información almacenada; además podemos
observar que estamos haciendo uso de la palabra this, esta se utiliza para
poder hacer referencia al scope de la función y, como se aplica closure,
puede acceder perfectamente a las propiedades name y age que se encuentran
en el scope superior.

Ahora digamos que queremos reutilizar el método personInformation para
poder utilizarlo en más de un objeto:
*/


const persona = {
    personInformation: function(sex){
        return "Hola mi nombre es " + this.Nombre + " y tengo " + this.edad + " Años de edad" + " y mi sexo es " + sex;
    },
};

const hermana = {
    Nombre: "Catalina",
    edad: 20,
};

const hermano = {
    Nombre: "Daniel",
    edad: 23,
};

console.log(persona.personInformation.call(hermana, "Femenino"));
//"Hola mi nombre es Catalina y tengo 20 Años de edad y mi sexo es Femenino"
console.log(persona.personInformation.call(hermano, "Masculino"));
//"Hola mi nombre es Daniel y tengo 23 Años de edad y mi sexo es Masculino"

//METODO 2

/*
El método apply es muy similar a call, teniendo como diferencia que
cuando se pasan argumentos, estos deben estar contenidos en un array.
*/

const MyargumentArray_1 = ["Femenino"];
const MyargumentArray_2 = ["Masculino"];

console.log(persona.personInformation.apply(hermana, MyargumentArray_1));
//"Hola mi nombre es Catalina y tengo 20 Años de edad y mi sexo es Femenino"
console.log(persona.personInformation.apply(hermano, MyargumentArray_2));
//"Hola mi nombre es Daniel y tengo 23 Años de edad y mi sexo es Masculino"

/*
Por último tenemos el método bind, que a diferencia de los demás, retorna
una nueva función a la cual se le asigna un nuevo scope. Para dar una mejor
idea, utilizaremos call y apply llamar a una función utilizando un nuevo
scope y utilizaremos bind, para crear una función con un scope diferente que
puede llamarse luego.
*/

const person = {
    name: 'Juan José',
    age: 20,
    personInformation: function () {
        return 'Hola, mi nombre es ' + this.name + ' y tengo ' + this.age;
    },
};
    
const NuevaPersona = {
    name: 'Leoncio',
    age: 48,
};

const newPersonInformationFunction = person.personInformation;
console.log(newPersonInformationFunction());
// "Hola, mi nombre es JS Bin Output  y tengo undefined"
const NuevaPersonaPersonaInformation = person.personInformation.bind(NuevaPersona)
console.log(NuevaPersonaPersonaInformation());
// "Hola, mi nombre es Leoncio y tengo 48"


/*
Cuando llamamos a newPersonInformationFunction, vemos que las
propiedades se muestran como undefined, ya que se le ha asociado el scope
global al momento de su definición, y en su interior no existen las
propiedades name o age.

Al momento de definir NuevaPersonaPersonaPersonaInformation,
hemos utilizado el método bind para poder asociar el scope de
NuevaPersonaPersona a la definición de nuestra nueva función y es por
ello que al llamarla sí muestra los datos correctamente.
*/












