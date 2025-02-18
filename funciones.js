// Palabra reservada function + nombre de la funcion + parametros

function Sumar(numero1, numero2)
{
    let total = numero1 + numero2;
    return total;
}

// Llamada a mi funcion 

let resultado = Sumar(10,10);

console.log(resultado);

console.log(Sumar(12,20));

Sumar(2,3)

function Saludar(nombre)
{
    console.log("Hola, bienvenido/a " + nombre); //Concatenar
}

Saludar("Carolina");
Saludar("Montserrat");


function Restar(a, b)
{
    let total = a - b;
   console.log(total) // Con console.log SOLO se imprime en consola
}

// No se guarda el resultado en una variable 
Restar(13,12);

function Casita() //No recibe parametros (datos de entrada)
{
    let nombre = "Ana";
    let apellido  = "Villanueva";
    console.log("Esta es una casita");
}

Casita();

// console.log(nombre); // No se puede acceder porque esta dentro de una funcion
//Scope de bloque 

let nombre = "Vanessa";
let edad = 23;
let ciudad = "Ciudad de Mexico";

console.log("Ella se llama " + nombre + " tiene " + edad + " años y vive en " + ciudad);

console.log(`Ella se llama ${nombre} tiene ${edad} años y vive en ${ciudad}`);
// Ctrl + Alt + }
// Actualizacion a ES6 (2015)

let usuario = prompt("¿Cúal es tu nombre?"); //Los datos se guardan en string
let gatos = prompt("¿Cúantos gatos tienes?");
let perros = prompt("¿Cúantos perros tienes?");
let total = parseInt(gatos) + parseInt(perros); // Convertir string a numero entero
let total_2 = Number(gatos) + Number(perros); // Convertir string a numero respetando decimales

console.log(`${usuario} tiene ${gatos} gatos y ${perros} perros. En total tiene ${total} mascotas.`);

alert(`${usuario} tiene ${gatos} gatos y ${perros} perros. En total tiene ${total} mascotas.`);

document.write(`${usuario} tiene ${gatos} gatos y ${perros} perros. En total tiene ${total} mascotas.`)



