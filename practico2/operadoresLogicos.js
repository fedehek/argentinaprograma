const readlineSync = require("readline-sync");
let dato = readlineSync.question("Ingrese un numero entero: ");
let numero = Number(dato);

if (!Number.isInteger(numero)) {
  console.log("El numero no es un entero");
} else if (numero > 0 && numero % 2 == 0) {
  console.log("El numero es positivo y par");
} else if (numero > 0 && numero % 2 != 0) {
  console.log("El numero es positivo e impar");
} else if (numero < 0) {
  console.log("El numero es negativo");
} else if (numero == 0) {
  console.log("El numero es cero");
}
