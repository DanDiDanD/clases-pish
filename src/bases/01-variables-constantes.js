// *** Variables y constantes (let = variableQueCambia   &   const = variableQueNoPuedeCambiar)
const nombre = "Jhonatan";
let edad = 27;
const nacionalidad = "Peruano";
edad = 28;

function nuevoScope() {
  const nombre = "Daniel";
  let edad = 24;
  console.log("Scope de la funcion nuevoScope", nombre, edad, nacionalidad);
}
// nuevoScope()
console.log("Scope global del archivo", nombre, edad, nacionalidad);
