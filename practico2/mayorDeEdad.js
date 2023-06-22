const readlineSync = require("readline-sync");
let dato = readlineSync.question("Por favor ingrese su edad: ");
let edad = Number(dato);

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
