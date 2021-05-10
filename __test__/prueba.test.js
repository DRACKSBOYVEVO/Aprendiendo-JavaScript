describe('Comparando atributos', () => {
    //Elementos de la prueba
    const My = {
        Nombre: "Juan José",
        Apellidos: "Henao",
        Edad: 22
    }

    const Hermana = {
        Nombre: "Catalina",
        Apellidos: "Henao",
        Edad: 21
    }
    //elementos de la prueba unitaria
    test('Comprando si los elementos son iguales', () => {
        Expected(My).toEqual(Hermana); //comparo si ambos datos tienen los mismos datos
        //falso, por lo que no lo son.
    });

    test('Comprando si los elementos no son iguales', () => {
        Expected(My).not.toEqual(Hermana); //comparo si ambos datos no tienen los mismos datos
        //falso, por lo que no lo son.
    });
});