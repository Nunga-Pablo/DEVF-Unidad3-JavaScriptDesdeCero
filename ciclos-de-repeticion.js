// Programa para mostrar los multiplos de 5 hasta un numero dado por el usuario

let numero = 20;

let contador = 0;

while(contador <= numero)
{
    // Codigo a iterar 
    if(contador % 5 === 0)
    {
        console.log(contador);
    }
    contador++;
}

console.log("Fin del programa");

// Numero impares

let numero2 = 35;

for (let indice = 0; indice <= numero2; indice++)
{
    if(indice % 2 !== 0)
    {
        console.log(indice)
    }
}

console.log("Fin del programa");

let inicio = 0;

while(inicio <= 10)
{
    console.log(inicio);
    inicio++;
}

console.log("Fin del programa");

for (let inicio = 0; inicio <= 10; inicio++)
{
    console.log(inicio);
}