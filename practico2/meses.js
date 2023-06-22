const meses = {
  1: "Enero",
  2: "Febrero",
  3: "Marzo",
  4: "Abril",
  5: "Mayo",
  6: "junio",
  7: "julio",
  8: "Agosto",
  9: "Septiembre",
  10: "Octubre",
  11: "Noviembre",
  12: "Diciembre",
};

const diasPorMes = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

const readlineSync = require("readline-sync");
let dato = readlineSync.question("ingrese un numero entero del (1 al 12): ");
let mes = Number(dato);

if (
  mes == 1 ||
  mes == 2 ||
  mes == 3 ||
  mes == 4 ||
  mes == 5 ||
  mes == 6 ||
  mes == 7 ||
  mes == 8 ||
  mes == 9 ||
  mes == 10 ||
  mes == 11 ||
  mes == 12
) {
  const nombreMes = meses[mes];
  const cantidadDeDias = diasPorMes[mes];
  console.log(
    `La cantidad de días del mes de ${nombreMes} es ${cantidadDeDias}.`
  );
} else {
  console.log("el numero ingresado es invalido");
}
