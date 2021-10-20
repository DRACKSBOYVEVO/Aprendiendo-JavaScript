//Convertir una matriz de objetos en un solo objeto en JavaScript
const toObjetc = (arr, key) => arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {});

//Or
const toObjetc = (arr, key) => Object.fromEntries(arr.map((it) => [it[key], it]));

//Ejemplo
toObjetc (
    [
        { id: '1', name: 'Juan', gender: 'Masculino'},
        { id: '2', name: 'Jose', gender: 'Masculino'},
        { id: '3', name: 'Laura', gender: 'Femenino'},
    ],
    'id'
);