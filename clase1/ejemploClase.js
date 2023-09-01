class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
  static especie = "humana";
  saludar = () => {
    console.log(`Hola, soy ${this.nombre}, mucho gusto`);
  };
  especie = () => {
    console.log(`Aunque no lo creas, soy ${Persona.especie}`);
  };
}
let persona1 = new Persona("Luciano");
let persona2 = new Persona("Nerina");
persona1.saludar();
persona1.especie();
persona2.saludar();
persona2.especie();
