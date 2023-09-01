//Las principales mejoras de este release son el uso de finally() para el manejo de promesas, para decirle qué hacer, se cumpla o no se cumpla la promesa
//mayor control a los objetos con los operadores rest y spread (aplicables tambien a arrays)

// Declaro 2 objetos

let object1 = {
  Propiedad1: "Antílope",
  Propiedad2: true,
  Propiedad3: 120,
};
let object2 = {
  Propiedad1: [120, 30, 83],
  Propiedad2: null,
  Propiedad3: "Esteban",
};
let { Propiedad1, Propiedad2 } = object1;
console.log(Propiedad1, Propiedad2);
let object3 = { object2, object1 };
console.log(object3);
//En este caso, si uso los operadores spread, para declarar el object3, lo que hace es armar un nuevo objeto con la longitud más larga entre los 2 objetos, y copia los valores del que se llama 2do, si el 2do era el mas corto, los ultios valores corresponden el 1ro

let object4 = {
  a: 2,
  b: 3,
  c: 4,
};
let { a, ...rest } = object4;
console.log(rest);
console.log(`El rest es: ${JSON.stringify(rest)}`); // ojo a cómo hay que escribir este ultio clg
