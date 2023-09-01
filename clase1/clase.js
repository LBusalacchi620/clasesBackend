class Clase1 {
  constructor(parametros) {
    console.log("Nuevo objeto creado");
    this.variable1 = 2;
  }
  static variableEstatica1 = 3;
  metodo1() {
    console.log("Esto se escribe atraves del metodo1 de la clase1");
  }
  metodo2 = () => {
    console.log(
      `Este metodo es una funcion flecha que permite incrustar variables ${this.variable1}`
    );
  };
}
let clase1 = new Clase1();
clase1.metodo1();
clase1.metodo2();
