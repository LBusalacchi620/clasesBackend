//Hasta ECMAScript7, para hacer la operación matemática Exponencial, había que utilizar Math.pow(base,expo)
//Luego de la actualización ECMAScript 7, se incorpora el operador **

let numeros = [1, 2, 3, 4, 5, 6];
let resultado = numeros.map((numeros, indice) => numeros ** indice);
console.log(resultado);

//EN ENMAScript 7 tambien se incoorpora la función includes, que lo que hace es verificar si existe un valor dentro de un arreglo.
let nombre = ["Luciano", "Nerina", "Valentino", "Pancho", "Morena"];
if (nombre.includes("Nerina")) {
  console.log("Nerina existe dentro del arreglo nombre");
} else {
  console.log("Nerina no existe dentro del arreglo nombre");
}
