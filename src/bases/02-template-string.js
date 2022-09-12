// *** Template String con backtick / back quotes    (`Hola mi nombre es ${nombre}`)

// ** `texto ${variable} texto` == "" === ''
const promedio = 15;
const estado = "aprobado";

let texto = "";
// texto = "Su notado es de " + promedio + ". Usted está " + estado;
texto = `Su nota es de ${promedio}. Usted está ${estado}`;

console.log(texto);
