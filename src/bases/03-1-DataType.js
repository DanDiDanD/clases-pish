// *** DataTypes (TEORIA)
// ** Value Type - en una asignación solo el valor es asignado
let nombre = "daniel";
let newNombre = nombre;
newNombre = nombre + "lllll";

console.log("nombre", nombre);
console.log("newNombre", newNombre);

// ** Reference Type - en una asignación el espacio de memoria es asignado (objetos, arreglos, funciones)
let persona = {
  nombre: "daniel",
  edad: "24",
  ciudadania: "peruana",
  universidad: "unmsm",
  ubicacion: "cono norte",
};

let newPersona = persona;
newPersona.nombre = "Renzo";

console.log("persona", persona);
console.log("newPersona", newPersona);

// ** Objeto: {}
// ** Arreglo: []
// ** Funcion: () => {}
