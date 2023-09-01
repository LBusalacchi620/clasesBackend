//En esta actualización, eststa distribución agrega el operador nullish, que difiere del operador || porque tambien ignora los falseys,
// De esta manera se le puede poner un valor por default a variables que podrían ser nulas o indefindas

// Variables privadas, esto hace que estas variables no sean accesibles desde el entorno de instacia de una clase y sólo tengan acceso de manera interna

let variableDePrueba = 0;
let variableAsignable = variableDePrueba || "sin valor";
let variableConNullish = variableDePrueba ?? "sin valor";

console.log(
  `Con el operador or, me completa el valor por defecto ${variableAsignable}`
); //tal vez quería recibir el 0 como dato... pero con el or, no lo recibo
console.log(`Con el operador nullish sí me toma el --- ${variableConNullish}`);

//Ejemplo de variable privada

class Persona {
  #fullname; //la variable privada hay que construirla antes que el constructor para poder construirla con los valores del constructor
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.#fullname = `${this.nombre} ${this.apellido}`; //acá construyo la variable privada y le asigno un valor, acá adentro es la unica manera de darle un valor
  }
  getFullName = () => {
    return this.#fullname;
  };
  #metodoprivado = () => {
    //también se pueden declarar métodos privados, lo que hace que no puedan ser llamados desde fuera de la clase. los cálculos que hace son internos de la clase
    return console.log("Este mensaje es privado");
  };
}

let persona1 = new Persona("Luciano", "Busalacchi");
console.log(persona1.getFullName());
