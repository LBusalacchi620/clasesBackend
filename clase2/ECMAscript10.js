//Strim.trim(), remueve los espaios en blanco de una cadena de caracteres. Sirve para validar cadenas enviadas
//Array.flat(),remueve las anidaciones internas en arrays para dejar un arreglo plano
// Dinamic Import. Permite importar sólo los modulos necesarios. Ahorrando espacio y memoria
let cadena1 = `    Hola`;
console.log(cadena1.trim());

//ejemplo de uso de trim() para validar entradas no vacías
let mensajes = [];
let intentoMensaje = `   sdsd `;
if (intentoMensaje.trim().length >= 0) {
  mensajes.push(intentoMensaje.trim());
  console.log(`se ingresó el mensaje: ${mensajes}`);
} else {
  console.log("no se ingresó ningún mensaje");
}

let array = [1, 2, 3, 4, [1, 4, 9, 16], [5, 6, 7]];
let arrayPlano = array.flat();
console.log(`El array  es: ${array}`);
console.log(`El array plano es: ${arrayPlano}`);
