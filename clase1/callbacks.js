const sumarDosNumeros = (n1, n2) => {
  let resultado;
  resultado = n1 + n2;
  return resultado;
};
resultado = sumarDosNumeros(1, 2);
console.log(resultado);

const sumarReturnImplicito = (n1, n2) => n1 + n2;
console.log(sumarReturnImplicito(2, 3));
