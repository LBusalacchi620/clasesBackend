const dividir = (divisor, dividendo) => {
  return new Promise((res, rej) => {
    if (divisor === 0) {
      rej(`No se pueden hacer divisiones entre 0`);
    } else {
      res(dividendo / divisor);
    }
  });
};
dividir(0, 6)
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });

//Ejemplo de promesas anidadas

new Promise(function (res, rej) {
  setTimeout(() => res(1), 1000);
})
  .then((res) => {
    console.log(`resultado 1 ${res}`);
    return res * 2;
  })
  .then((res) => {
    console.log(`resultado 2 ${res}`);
    return res * 2;
  })
  .then((res) => {
    console.log(`resultado 3 ${res}`);
    return res * 2;
  });
