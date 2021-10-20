//Convertir código RGB a HEX en JavaSpcript 
const rgbToHex = (r, g, b) =>
    "#" + ((1 << 24) + (r << 16) + (g << 8) + b)
        .toString(16).slice(1);

rgbToHex(123, 4, 6);
//'#7b0406'