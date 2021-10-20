//Contar por las propiedades de una matriz de objetos en JavaScript

const CountBy = (arr, prop) => arr.reduce((prev, curr) => ((prev[curr[prop]] = ++prev[curr[prop]] || 1), prev), {});

//Ejemplo
CountBy (
    [
        { branch: 'red', model: 'color_1', year: '2343'},
        { branch: 'yellow', model: 'color_2', year: '2345'},
        { branch: 'green', model: 'color_3', year: '4567'},
        { branch: 'white', model: 'color_4', year: '1234'},
        { branch: 'black', model: 'color_5', year: '2346'},
    ],
    'branch'
)

//{red: 1, yellow: 1, green: 1, white: 1, black: 1}