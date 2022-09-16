let condicion; // cuando declaras y está vacío te devuelve undefined || se intenta evitar

// condicion = null;

// condicion = true;
// condicion = false;

// let numero = 0 // false
// condicion = numero

// let string = "" // false
// condicion = string

// let array = [] // [1,2,3,4]
// condicion = array.length; // false

// let obj = {};
// condicion = Object.keys(obj).length;

if (condicion) {
  console.log(`la condicion ${condicion} es: `, true);
} else {
  console.log(`la condicion ${condicion} es: `, false);
}

// en caso de los números evaluará si son diferentes a 0 o no       0 ---> false   && cualquier otro número ---> true
// en caso de los string evaluará si el length de su contenido       "" ---> false   && "si el string tiene contenido" ---> true

//en caso de trabajar con datatypes de referencia, estos siempre nos darán true, por lo que se deberá evaluar el length del contenido de estos   | [].length
