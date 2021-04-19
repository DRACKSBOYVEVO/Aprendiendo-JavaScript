const personajes = [{
    id: 1,
    titulo: 'iron man',
    año: 2008
},{
    id: 2,
    titulo: 'X-Men',
    año: 2008
},{
    id: 3,
    titulo: 'Superman',
    año: 2008
}];

//Funcion Flecha

//const ObtenerDatos = () => {
    //return personajes
//}

//console.log(ObtenerDatos());

/* Me devuelve esto:

[[object Object] {
  año: 2008,
  id: 1,
  titulo: "iron man"
}, [object Object] {
  año: 2008,
  id: 2,
  titulo: "X-Men"
}, [object Object] {
  año: 2008,
  id: 3,
  titulo: "Superman"
}]
*/

//ENTONCES
/*
Voy a utilizar setTimeout() para ejecutar la funcion
pasado x tiempo.
*/

/*const ObtenerDatos = () => {
    setTimeout(() => {
        return personajes;
    }, 1500);
}

console.log(ObtenerDatos());*/

const ObtenerDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(personajes);
        }, 1500);
    });
}

ObtenerDatos().then((datos) => console.log(personajes));

//Cuando ejecutamos el codigo, el navegador espera 1500s y luego ejecuta el codigo.
//Espera a que tenga los datos, cuando los tenga, seguimos.


/*Aweit solo es valido si esta dentro de una funcion asincrona */

/*async function Obtenerdata () { //Hay que poner async para que await sea usado
    const datos = await ObtenerDatos();
    console.log(datos);
}

Obtenerdata();
*/



//Ahora, para hacerlo un poco mas legible y elegante.

async function Obtenerdata () {
    try {
        const datos = await ObtenerDatos();
        console.log(datos);
    } catch (err){
        console.log(err);
    }
}

Obtenerdata();