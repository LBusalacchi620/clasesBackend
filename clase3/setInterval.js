// lo hago de manera sincrónica

console.log(`Iniciando la operación`);
console.log(`Realizando la operación`);
for (let contador = 1; contador <= 5; contador++) {
  console.log(`paso numero ${contador}`);
}
console.log(`Operación finalizada`);

// Lo hago de manera asincrónica

let contador = () => {
  let counter = 1;
  console.log(`Realizando la operación`);
  let timer = setInterval(() => {
    console.log(`paso numero${counter++}`);
    if (counter >= 5) {
      clearInterval(timer);
    }
  }, 1000);
};

console.log(`Iniciando la operación`);
contador();
console.log(`Operación terminada`);
