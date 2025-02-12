let frutas = ['Manzana','Pera','Manzana','Pera','Naranja','Fresa','Fresa','Guayaba','Manzana'];
let nombreFrutas = ['Manzana', 'Pera', 'Naranja','Platano','Fresa','Guayaba'];
let numeroFrutas = [0,0,0,0,0,0];

// usando ciclo for

console.log("Usando ciclo for");

for (let i = 0; i < frutas.length; i++)
{
    for (let j = 0; j < nombreFrutas.length; j++)
    {
        if (frutas[i] === nombreFrutas[j])
        {
            numeroFrutas[j]++;
        }
    }
}

for (let i = 0; i < nombreFrutas.length; i++)
{
    console.log(nombreFrutas[i] + "=" + numeroFrutas[i]);
}

//usando ciclo while

console.log("Usando ciclo while");

let frutas2 = ['Manzana','Pera','Manzana','Pera','Naranja','Fresa','Fresa','Guayaba','Manzana'];
let nombreFrutas2 = ['Manzana', 'Pera', 'Naranja','Platano','Fresa','Guayaba'];
let numeroFrutas2 = [0,0,0,0,0,0];

let i = 0;
let j = 0;

while (i < frutas2.length)
{
    while (j < nombreFrutas2.length)
    {
        if (frutas2[i] === nombreFrutas2[j])
        {
            numeroFrutas2[j]++;
        }
        j ++;
    }
    i ++;
}

i = 0;

while (i < nombreFrutas2.length)
{
    console.log(nombreFrutas2[i] + "=" + numeroFrutas2[i]);
    i ++;
}


// RESOLUCION PROYECTO 3 CON OBJETOS

// Declarar un arreglo llamado frutas con varios tipos de frutas 

console.log("Usando Objetos");

// Declarar un arreglo llamado frutas con varios tipos de fruta
let frutas3 = ["Manaza", "Platano", "Manzana", "Lulo", "Platano", "Lulo", "Manazana"];

// Crear un objeto para almacenar la cantidad de cada tipo de fruta
let conteoFrutas = {};

// Usar un ciclo for para recorrer el arreglo y contar las frutas
for (let indice = 0; indice < frutas3.length; indice++)
{
    let fruta = frutas3[indice];
    if (conteoFrutas[fruta])
    {
        // Si la fruta ya existe, incrementar el contador
        conteoFrutas[fruta]++; // conteoFrutas[fruta] = conteoFrutas[fruta] + 1;
    } else
    {
        conteoFrutas[fruta] = 1;
        // Si la fruta no existe, inicializar el contador en 1
    }
}

// Imprimir en consola la cantidad de cada tipos de fruta
console.log("Conteo de frutas usando ciclos for:")
for (let fruta in conteoFrutas)
{
console.log(`${fruta}: ${conteoFrutas[fruta]}`);
}