const mostrarLista = (arreglo) => {
  let tamaño = arreglo.length;
  if (tamaño >= 0) {
    console.log(
      `El arreglo tiene :${tamaño} elementos y sus numeros son: ${arreglo}`
    );
  } else {
    console.log(`El arreglo esta vacio`);
  }
};
arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
mostrarLista(arreglo);
