//Busque la longitud de la cadena más larga de una matriz en JavaScript
const FindLongest = (words) => Math.max(...words.map((el) => el.length));

//Ejemplo
FindLongest(['Red','violet','Yellow','Green','White','Black']); //6