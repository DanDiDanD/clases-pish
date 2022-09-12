// *** Objetos | obj = {}   &   copiaObjeto = {...obj}

// **  Objeto: tipo de estructura que puede contener variables

let objetoVacio = {};

let persona = {
  nombre: "daniel",
  edad: "24",
  ciudadania: "peruana",
  universidad: "unmsm",
  ubicacion: "cono norte",
};

// **  Se está declarando la variable newPerson junto con la dirección del espacio de memoria de la variable Person - si uno cambia, ambos cambian
let newPersona = persona;
newPersona.nombre = "Renzo";

//   console.log("persona", persona);
//   console.log("newPersona", newPersona);

// ** Operador Spreed(...):
// ** En palabras simples: hace una copia de objeto
// ** Siendo más específicos extrae y devuelve individualmente los valores de un objeto (arreglo, funcion, etc...)

let carro = {
  marca: "toyota",
  llantas: "4",
  anio: "2016",
};
let newCarro = { ...carro };
let nombrePropiedad = "persona";

newCarro.anio = "2020";
newCarro.motor = "kia4000";
newCarro["lugarFabricacion"] = "Japon";
newCarro[nombrePropiedad] = persona;

console.log("carro", carro);
console.log("newCarro", newCarro);
