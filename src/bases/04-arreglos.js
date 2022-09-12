// *** Arreglos | arr = new Array(cantidad)   &  arr = []    &   copiaArr = [...arr]

let oldArr = new Array(100);

let arrayMutado = [1, 2, 4, "8"]; // son multidatos
arrayMutado.push("Daniel");
arrayMutado.push("Jhonatan");
// ** No se recomienda la utilización de la función PUSH porque es un comando que fuerza la mutación del objeto (Array)

let array = [];
array = [...array, 1];
array = [...array, 2];
array = [...array, 3];
array = [...array, 4];

console.log(array, array[0], array["length"], array.length);

console.log(
  "filtro",
  array.filter((i) => i % 2 === 0)
);

console.log(
  "find",
  array.find((i) => i === 3)
);

array.forEach((i) => console.log("ForEach i", i));

const arrayDuplicado = array.map((i) => i * 2); //Retorna un nuevo array
console.log("Array map", arrayDuplicado);
