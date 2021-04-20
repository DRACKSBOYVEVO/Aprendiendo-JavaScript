const fizzbuzz = require('./fizzbuzz'); //Importo el archivo que necesito para realizar el test

describe("fizzbuzz", () => {
    test("Imprime el error si el argumento que se le pasa no es un numero", () => {
        const expected = "Error: el argumento no es valido";
        const result = fizzbuzz(16);
        expect(expected).toBe(result);
    })
    test('Debe imprimir 1 si reciben 1', () => {
        const expected = 1; //Lo que espero recibir
        const result = fizzbuzz(1); //El resultado de la operacion
        expect(expected).toBe(result); //compruebo si el text es correcto
    });

    test('Imprimir fizz si es multiplo de 3', () => {
        const expected = "fizz"; 
        const result = fizzbuzz(3); 
        expect(expected).toBe(result);
    });

    test('Debe imprimir fizz si reciben un múltiplo de 3', () => {
        const expected = "fizz"; 
        const result = fizzbuzz(6); 
        expect(expected).toBe(result);
    });

    test('Deberia imprimir buzz si es multiplo de 5', () => {
        const expected = "buzz"; 
        const result = fizzbuzz(5); 
        expect(expected).toBe(result);
    });

    test('Deberia imprimir buzz si el numero recivido es multiplo de 5', () => {
        const expected = "buzz"; 
        const result = fizzbuzz(10); 
        expect(expected).toBe(result);
    });

    test('Deberia imprimir fizzbuzz si recive un multiplo de 3 y 5', () => {
        const expected = "fizzbuzz"; 
        const result = fizzbuzz(15); 
        expect(expected).toBe(result);
    });
});