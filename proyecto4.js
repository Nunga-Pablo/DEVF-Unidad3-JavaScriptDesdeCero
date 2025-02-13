librosLeidos = [];

function agregarLibro(titulo) 
{
    librosLeidos.push(titulo);
    console.log("El libro " + titulo + " ha sido leido y agregado al arreglo");
}

function mostrarLibros()
{
    console.log("Los libros leidos son: " + librosLeidos)
    console.log(librosLeidos)
}

agregarLibro("Demian");

agregarLibro("Hamlet");

agregarLibro("Frankenstein");

agregarLibro("Fahrenheit 451");

agregarLibro("Aura");

mostrarLibros();

