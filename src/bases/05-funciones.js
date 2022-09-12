// *** Funciones | const miFuncion = (parametro) => {}    &    const miFuncionConParametrosDefault = (parametro = valorDefault) => {}

function saludar(nombre) {
  return `hola ${nombre}`;
}

// saludar = 4;

console.log(saludar("Pish"));

//-------------------

const saludarEnContante = function (nombre) {
  return `hola ${nombre}`;
};

console.log(saludarEnContante("Pish"));

//------------------
const saludarArrowFunction = (nombre) => {
  return `hola ${nombre}`;
};

// const saludarArrowFunction = (nombre) => `hola ${nombre}`;

console.log(saludarArrowFunction("Pish"));

const printObjeto = () => ({
  nombre: "Daniel",
  edad: "24",
});

console.log(printObjeto);
