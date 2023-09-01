//Tipos de funciones:
//1) Función tradicional
function nombre(arg) {
  return arg;
}

//2) Arrow funcion
const nombre1 = (arg) => {
  return arg;
};

//3) Función definida. cuenta con un nombre específico y por lo general son creadas para no ser reasignadas

//4) Función anónima (Casi toddas son callBack) Son usualmente pensadas para reasignarse o utilizarse en un proceso sin almacenarse en memoria

//CALLBACKS: Estas funciones tienen la particularidad de que pueden ser utilizadas como argumentos de otros callbacks. Permiten que las funciones ejecuten operaciones adicionales dentro de si mismas
//Ejemplos de callbacks son las funciones map, filter, foreach y onClic en fronted

let valoresOriginales = [1, 2, 3, 4, 5];
let valoresNuevos = valoresOriginales.map((x) => x + 1);
console.log(`los valores originales son ${valoresOriginales}`);
console.log(`los valores nuevos son ${valoresNuevos}`);

const funcionPar = (valor) => {
  if (valor % 2 === 0) {
    return valor;
  } else {
    console.log(`No es un valor par`);
  }
};
const evaluacionDePares = valoresOriginales.map(funcionPar);
console.log(evaluacionDePares);

//-------------------------Ejemplo de recreación interna de función map para localizar su callback

let arregloDePrueba = [1, 2, 3, 4, 5];
const miFuncionCallback = (arreglo, callback) => {
  //esta función casera sería como un map
  let nuevoArreglo = [];
  for (let i = 0; i < arreglo.length; i++) {
    let nuevoValor = callback(arreglo[i]);
    nuevoArreglo.push(nuevoValor);
  }
  return nuevoArreglo;
};

// a continuación, voy a probarr el resultado de usar mi map casero Vs el map nativo

console.log(
  `Mi función map casera: ${miFuncionCallback(arregloDePrueba, (x) => x * 2)}`
);
console.log(`Función callback nativa: ${arregloDePrueba.map((x) => x * 2)}`);

//Ejemplo calculadora sumar, restar, multiplicar y dividir

const sumar = (n1, n2) => n1 + n2;
const restar = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;
const dividir = (n1, n2) => n1 / n2;

const hacerOperacion = (n1, n2, callback) => {
  let resultado = callback(n1, n2);
  return resultado;
};

console.log(hacerOperacion(1, 2, sumar));
console.log(hacerOperacion(1, 2, restar));
console.log(hacerOperacion(1, 2, multiplicar));
console.log(hacerOperacion(1, 2, dividir));

// por convención, los callbacks tienen 2 parámetros. La función llama al callback cuando termina de ejecutar todas sus operaciones
//Si la operación fue exitosa, la función llamará al callback pasando null como primer parámetro y el resultado como segundo.
//si hubo un error en la ejecución.La función pasará el error obtenido como primer parámetro.

//Ejemplo

const callback = (error, resultado) => {
  if (error) {
    //hacer algo para el error
  } else {
    //hacer algo con el resultado
  }
};
