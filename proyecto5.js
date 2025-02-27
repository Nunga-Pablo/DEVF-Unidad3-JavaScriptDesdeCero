class Libro
{
    // Propiedades
    constructor(titulo, autor, anio, estado, capitulos)
    {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.estado = estado;
        this.capitulos = capitulos; 
    }

    // Metodos
    describirLibro() 
    {
        console.log("Libro titulado " + this.titulo + " escrito por " + this.autor + " en el año " + this.anio + " el estado es: " + this.estado);    
    }

    agregarCapitulo(capitulo)
    {
        this.capitulos.push(capitulo);
    }

    eliminarCapitulo(indice)
    {
        this.capitulos.splice(indice, 1);
    }
}

const miLibro = new Libro("Hamlet", "William Shakespeare", 1600, "disponible", [1,2,3,4,5]);

miLibro.describirLibro();
miLibro.agregarCapitulo(6);
console.log(miLibro.capitulos);