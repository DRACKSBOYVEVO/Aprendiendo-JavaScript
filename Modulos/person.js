/*
Imaginemos ahora que tenemos otro archivo, ubicado dentro del mismo
directorio que utilities.mjs, llamado person.js. En el mismo, vamos a
importar e utilizar nuestro método sum().
*/

import { sum } from './export';

const persona = {
    Edad: 22
}

console.log(sum(persona.Edad, 2));
//24

/*
Bastante fácil verdad ? Esto nos da una gran ventaja al poder separar
nuestra lógica de acuerdo a lo que se quiere hacer. Si tuviésemos que pensar
en cómo separar una aplicación, siempre fíjate en qué funcionalidades va a
otorgar y de esta manera puedes utilizar los módulos para cada una de esas
funcionalidades. También te recomiendo tener siempre un módulo llamado
shared.mjs, para toda aquella lógica que pueda ser compartida entre todos
los módulos ! Así si se requiere un cambio en algún método, solo se debe
realizar el cambio en el lugar donde esté definido generando un impacto en
toda la aplicación ...lo que es mucho mejor que ir de lugar en lugar. También
piensa que si realizas este cambio de esta otra forma, quién dice que lo hagas
correctamente y en todos los lugares donde se debía aplicar ? Hagamos re
utilización de código y dejémonos de complicaciones.
*/




