/**
 * Este Metodo, copia elementos de la matriz en otra 
 * posicion de la matriz sobrescribiendo los valores existentes
 */

let Sports = ["Futbol","natacion","tenis","basket"];

Sports.copyWithin(2, 0);

//RESULTADO
//[ "Futbol", "natacion", "Futbol", "natacion" ]