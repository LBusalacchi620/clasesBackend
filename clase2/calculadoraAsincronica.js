// Función para sumar dos números
function suma(a, b) {
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0) {
      reject("Operación innecesaria");
    } else {
      resolve(a + b);
    }
  });
}

// Función para restar dos números
function resta(minuendo, sustraendo) {
  return new Promise((resolve, reject) => {
    if (minuendo === 0 || sustraendo === 0) {
      reject("Operación inválida");
    } else {
      const resultado = minuendo - sustraendo;
      if (resultado < 0) {
        reject("La calculadora sólo puede devolver valores positivos");
      } else {
        resolve(resultado);
      }
    }
  });
}

// Función asincrónica para probar las operaciones
async function probarOperaciones() {
  try {
    const resultadoSuma = await suma(5, 10);
    console.log("Resultado de la suma:", resultadoSuma);

    const resultadoResta = await resta(15, 8);
    console.log("Resultado de la resta:", resultadoResta);

    const resultadoInvalido = await resta(0, 7);
    console.log("Resultado inválido:", resultadoInvalido);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Llamar a la función para probar las operaciones
probarOperaciones();
