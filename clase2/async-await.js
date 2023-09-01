//en Javascript el soporte para Async - Await, unas palabras reservadas que, trabajando juntas, permiten gestionar un entorno asíncrono, resolviendo las limitantes del .then y .catch
//async se colocará al inicio de una función, indicando que todo el cuerpo de esa función deberá ejecutarse de manera asíncrona
//await servirá (como indica su nombre) para esperar por el resultado de la promesa y extraer su resultado.
//Al ser operaciones que podrían salir bien, PERO TAMBIÉN MAL, es importante encerrar el cuerpo en un bloque try {} catch {}

//Limitaciones del .then() y catch():
//el principal problema de los .then y .catch son su encapsulamiento excesivo, impidiendo o limitando que podamos acceder a los recursos de algunos resultados, variables, etc.

const dividir = (dividendo, divisor) => {
  return new Promise((res, rej) => {
    if (divisor === 0) {
      rej("No se puede dividi entre 0");
    } else {
      res(dividendo / divisor);
    }
  });
};
const funcionAsincrona = async () => {
  try {
    let resultado = await dividir(10, 5);
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
};
funcionAsincrona();
