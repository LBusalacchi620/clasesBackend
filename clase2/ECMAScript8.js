//Esta actualización es muy importante ya que se incluyen grandes cambios:
//El async - await para mejorar el funcionamiento del asincronismo
//operadores que ayudan a controlar internamente las propiedades de los objetos:
//Object.entries
//Object.values
//Object.keys

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  occupation: "Developer",
};

// Object.entries() devuelve un arreglo de arreglos con pares clave-valor
const entries = Object.entries(person);
console.log("Object entries:");
console.log(entries);

// Object.keys() devuelve un arreglo con las claves del objeto
const keys = Object.keys(person);
console.log("Object keys:");
console.log(keys);

// Object.values() devuelve un arreglo con los valores del objeto
const values = Object.values(person);
console.log("Object values:");
console.log(values);
