// Tipo de mascotas = Gato, Perro, Hamster 

// Condicionales (Jaula mediana, Jaula grande, Jaula chica)

let tipoMascota = "Delfin";

if(tipoMascota === "Perro")
{
    console.log("Si tienes perro, necesitas la jaula grande");
    //Bloque de codigo de lo que va a pasar
} else if(tipoMascota === "Gato")
{
    console.log("Si tienes gato, necesitas la jaula mediana");
} else if(tipoMascota === "Hamster")
{
    console.log("Si tienes Hamster, necesitas la jaula chica");
} else
{
    console.log("No contamos para jaula para esa mascota");
}

// Semaforo color = Rojo, Amarillo, Verde
// Rojo = Alto, Amarillo = Detente, Verde = Siga

let colorSemaforo = "Verde";

if(colorSemaforo === "Verde")
{
    console.log("Siga");
    //Bloque de codigo de lo que va a pasar
} else if(colorSemaforo === "Amarillo")
{
    console.log("Detente");
} else if(colorSemaforo === "Rojo")
{
    console.log("Alto");
} else
{
    console.log("No existe ese color en el semaforo");
}

edad = 17;
let tieneLicencia = true;

if(edad >= 18 && tieneLicencia)
{
    console.log("Puedes conducir");
} else
{
    console.log("No puedes conducir");
}


let creditos = 9;
let promedio = 8;

if(creditos >= 10 && promedio >= 8.5)
{
    console.log("Tienes derecho a una beca");
} else if(creditos < 10 && promedio >= 8.5)
{
    console.log("Te hacen falta creditos");
} else if(creditos >= 10 && promedio < 8.5)
{
    console.log("Tu promedio debe subir");
} else 
{
    console.log("No tienes derecho a una beca");
}
    

// Agregar el mensaje de - Te hacen falta creditos
// Agregar el mensaje de - Tu promedio debe subir