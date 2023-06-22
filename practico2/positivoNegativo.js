const readlineSync = require("readline-sync");
let dato = readlineSync.question("ingrese un numero: ");
let numero = Number(dato);

if (numero > 0) {
  console.log("El numero es positivo");
} else if (numero == 0) {
  console.log("El numero es cero");
} else {
  console.log("El numero es negativo");
}
