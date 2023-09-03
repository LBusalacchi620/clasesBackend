//Sincronismo
console.log(`1 esto`);
console.log(`2 esto`);
console.log(`3 esto`);
console.log(`4 esto`);

//Asincronismo

const temporizador = (callback) => {
  setTimeout(() => {
    callback();
  }, 5000);
};

let inicio = () => {
  //Esta función podría ejecutarse instantanemente, pero se la ejecuta dentro de una función que tiene un temporizador con 5 segundos
  console.log(`1 esto`);
  console.log(`2 esto`);
};
temporizador(inicio);
console.log(`3 esto`);
console.log(`4 esto`);
