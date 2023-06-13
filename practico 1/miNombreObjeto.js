let objeto = { nombre: "Federico", apellido: "Hekimian", edad: "27" };
let jsonString = JSON.stringify(objeto);

let texto = "Mi objeto persona es el siguiente";
let objetoPersona = texto + jsonString;

console.log(objetoPersona);
