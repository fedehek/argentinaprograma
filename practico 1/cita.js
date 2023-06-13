//ej. "a"

let cita = "tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";

let tamañoDeCita = cita.length;

console.log("el tamaño de cita es: " + tamañoDeCita);

//ej. "b"

let indice = cita.indexOf(substring);

console.log("el indice del substring es: " + indice);

//ej. "c"

let citaRevisada = cita.slice(0, 30);

console.log(citaRevisada);
