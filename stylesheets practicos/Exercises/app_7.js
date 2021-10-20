//Convertir una matriz de cadenas en números en JavaScript 
const toNumbersValue = (arr) => arr.map(Number);

// Or
const toNumbersValue = (arr) => arr.map((x) => +x);

//Ejemplo
toNumbersValue(['4','5','7','2','1']);