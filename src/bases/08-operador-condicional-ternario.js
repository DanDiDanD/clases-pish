// *** Operador condocional ternario

const activo = false;

let mensaje = "";

// if (activo) {
//   mensaje = "activo";
// } else {
//   mensaje = "inactivo";
// }

// mensaje = activo === true ? "activo" : "inactivo";
mensaje = activo ? "activo" : "inactivo";
mensaje = activo && "activo";
mensaje = !activo && "inactivo";

let texto = "conchatumare";
mensaje = texto || "texto vacío";

console.log(mensaje);
