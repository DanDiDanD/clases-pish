// *** Operador condocional ternario

const activo = false;

let mensaje = "";
// if (activo) mensaje = "activo";
// else mensaje = "inactivo";

// mensaje = activo === true ? "activo" : "inactivo"; // donde, el primero bloque es la condición, siguiendo el signo de ? que reemplaza a la estructura condicional 'if' con su return al costado; y finalizando con el signo : que reemplaza al else, con su return al costado

mensaje = activo ? "activo" : "inactivo";
// mensaje = activo && "activo";
// mensaje = !activo && "inactivo";

// let texto = "hola";
// mensaje = texto || "texto vacío";

// if(condicion1 && condicion2 && condicion3)

// let condicion1 = false;
// let condicion2 = false;
// let condicion3 = false;

// mensaje = condicion1 && condicion2 && condicion3 && "resultado"; //multiples condiciones
// mensaje = !(condicion1 && condicion2 && condicion3) && "resultado"; //multiples condiciones

// mensaje = condicion1
//   ? "pasa condicion1"
//   : condicion2
//   ? "pasa condicion2"
//   : condicion3
//   ? "pasa condicion3"
//   : "no paso ninguna condicion"; //if else

console.log(`el mensaje es ${mensaje}`);
