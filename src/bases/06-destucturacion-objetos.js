// *** Destructuración de objetos |  const {nombre, edad} = persona      &    const {nombre:name, edad:age} = persona       &   const funcionConParametrosDestructurados = ({ nombre, edad, tipoDocumento = "DNI" }) => {}

const persona = {
  nombre: "Daniel",
  edad: "24",
  nacionalidad: "bandido",
  tipoDocumento: "",
};

const { nombre, edad } = persona;
console.log(nombre, edad);

const { nombre: name, edad: age } = persona;
console.log(name, age);

const pintarInfoPersonas = ({ nombre, edad, nacionalidad, dni = "DNI" }) => {
  console.log(`
    nombre: ${nombre}
    edad: ${edad}
    nacionalidad: ${nacionalidad}
    dni: ${dni}
  `);
};

const personaVenezolana = {
  nombre: "Daniel",
  edad: "24",
  nacionalidad: "Venezuela",
  tipoDocumento: "pasamorte",
};

pintarInfoPersonas(persona);
pintarInfoPersonas(personaVenezolana);
