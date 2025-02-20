// 1. Abstraccion: Definir una clase (plantilla) de una figura geometrica 

class Figura
{
    constructor(color) // El metodo constructor se asegura de que los objetos tengan las propiedades necesarias para funcionar
    {
        this.color = color; // Propiedad color
    }

    // Metodos: son las acciones que puede realizar un objeto
    calcularArea() 
    {
        throw new Error("El metodo no ha sido implementado.");    
    }

    obtenerColor()
    {
        return this.color;
    }

    miNombre()
    {
        return "Hola soy una figura";
    }
}

// 2. Herencia: Creamos subclases especificas a partir de la clase padre

class Circulo extends Figura
{
    constructor(color, radio)
    {
        super(color); // Propuedad heredada con palabra reseverada super
        this.radio = radio;
    }

    calcularArea()
    {
        return Math.PI * this.radio *  this.radio;
    }
}

class Rectangulo extends Figura
{
    constructor(color, base, altura)
    {
        super(color); // Propuedad heredada con palabra reseverada super
        this.base = base;
        this.altura = altura
    }

    calcularArea()
    {
        return this.base *  this.altura;
    }
}

class Triangulo extends Figura
{
    constructor(color, base, altura)
    {
        super(color); // Propuedad heredada con palabra reseverada super
        this.base = base;
        this.altura = altura
    }

    calcularArea()
    {
        return ((this.base*this.altura)/2);
    }
}


// 3. Crear mis objetos (instancias)

const miCirculo = new Circulo("Morado", 14);
const miRectangulo = new Rectangulo("Verde", 12, 6);
const miTriangulo = new Triangulo("Rosa", 3, 4);

console.log("Color del circulo:", miCirculo.obtenerColor());
console.log("Color del rectangulo:", miRectangulo.obtenerColor());
console.log("Rectangulo dice:", miRectangulo.miNombre());

// 4. Polimorfismo: Un objeto puede hacer el mismo trabajo de forma diferente

function mostrarArea(figura)
{
    console.log(figura.calcularArea());
}

mostrarArea(miCirculo);
mostrarArea(miRectangulo);
mostrarArea(miTriangulo);