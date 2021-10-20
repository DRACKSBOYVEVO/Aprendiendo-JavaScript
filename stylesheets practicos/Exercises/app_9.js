//Busque el elemento mínimo de una matriz mediante la clave dada en JavaScript
const minBy = (arr, key) => arr.reduce((a, b) => (a[key] < b[key] ? a : b), {});

//Ejemplo
const People = [
    { name: 'Juan', age: 22},
    { name: 'Jose', age: 45},
    { name: 'Laura', age: 34},
    { name: 'Mateo', age: 24}
];
minBy(People, 'age'); 
//{name: 'Juan', age: 22}