//Descripción de la actividad.
//Dados los objetos indicados en la siguiente diapositiva:
//--> Realizar una lista nueva  (array) que contenga todos los tipos de productos (no cantidades), consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.
//-->Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values)

const objetos = [
  {
    manzanas: 3,
    peras: 2,
    carne: 1,
    jugos: 5,
    dulces: 2,
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4,
  },
];

// Crear un array con todos los tipos de productos
const tiposDeProductos = [];
//declaro un array global donde voy a almacenar todos los productos sin que se repitan.

//en el primer foreach, cargo todas las key del priimer array del objeto y me meto en el 2do foreach, con un include, pregunto si en el array global ya está el producto de la iteración del 2do foreach
//si no está, lo agrega en el array global.
//Hago lo mismo con la 2da iteración del primer foreach, acá probablemente ya encuentre mas coincidencias el include

objetos.forEach((venta) => {
  const productosDeVenta = Object.keys(venta);
  productosDeVenta.forEach((producto) => {
    if (!tiposDeProductos.includes(producto)) {
      tiposDeProductos.push(producto);
    }
  });
});

console.log("Tipos de productos:", tiposDeProductos);

// Obtener el total de productos vendidos
let totalProductosVendidos = 0;
//Defino una variable global donde se va a almacenar la sumatoria de los productos vendidos
//con un primer foreach, en la primer iteración, cargo todos los valores del primer array del objeto
//en este array, aplico un foreach y sumo todos los valores de este array
//en la 2da iteración del primer foreach, armo otro array con los valores del 2do array del objeto
//en este array, aplico un foreach y sumo llos valores a los valores que ya había obtenido en el paso anterior
objetos.forEach((venta) => {
  const cantidades = Object.values(venta);
  //console.log("hola" + JSON.stringify(venta));
  cantidades.forEach((cantidad) => {
    totalProductosVendidos += cantidad;
    //console.log("chau" + cantidad);
  });
});
console.log("Total de productos vendidos:", totalProductosVendidos);
//Este código utilizará el objeto objetos que proporcionaste para generar una lista de tipos de productos y calcular el total de productos vendidos en todas las ventas.
