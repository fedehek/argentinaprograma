let num1 = 6;
let num2 = 5;
let num3 = 15;
let num4 = 11;

let suma = num1 + num2;

let resta = num3 - num4;

let resultadoFinal = suma * resta;

let esPar = resultadoFinal % 2 == 0;

let mensaje =
  "mis variables de entrada fueron: " +
  num1 +
  ", " +
  num2 +
  ", " +
  num3 +
  ", " +
  num4 +
  ". La respuesta a verificar si el resultado final es par es: " +
  esPar;

console.log(mensaje);
