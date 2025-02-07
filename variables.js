// var es una forma antigua de declarar variables, let es una forma moderna de declarar variables

var nombre = "Pablo";

var nombre = "Fernanda";

var nombre = "Victor";

console.log(nombre);

// let no permite declarar variables, lo que significa que no puedes declarar la misma variable dos veces

// let tiene un scope de bloque, lo que significa que solo vive en el bloque donde fue declarado. Un bloque es {}

let apellido1 = "Gutierrez";

let apellido2 = "Lopez";

// let SI permite cambiar el valor 

// reasignacion de valor

apellido1 = "Perez";
console.log(apellido1);

// const es una constante, no se puede reasignar el valor

const pi = 3.1416;