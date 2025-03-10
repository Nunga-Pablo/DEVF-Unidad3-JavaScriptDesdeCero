let titulo = document.getElementById('miTitulo');
let parrafo = document.getElementById('miParrafo');
let nuevoParrafo = document.createElement('p');
let parrafoEliminar = document.getElementById('parrafoAEliminar');

// Cambia el contenido HTML
titulo.innerHTML = 'Nuevo Título';

// Cambiando estilo de parrafo a etqieta p de id "miParrafro"
parrafo.style.color = 'red'; // Cambia el color del texto a rojo
parrafo.style.fontSize = '20px'; // Cambia el tamaño de la fuente

nuevoParrafo.textContent = 'Este es un nuevo parrafo.';
// document.body.appendChild(nuevoParrafo); // Añade el nuevo párrafo al final del cuerpo (body)

//Eliminar un parrafo
parrafoEliminar.remove();

// Formulario

let formulario = document.getElementById('miFormulario');
let mensaje = document.getElementById('mensaje');

formulario.addEventListener("submit", function(event) 
{
    event.preventDefault();  // Previene que se recargue la página
    let nombre = document.getElementById('nombre').value;
    mensaje.innerHTML = '¡Gracias por enviar, ' + nombre + '!';
});


//Boton cambia color

let boton = document.getElementById('cambiarColor');

boton.addEventListener('click', function() {

    document.body.style.backgroundColor = 'lightblue';

});

//Mostrar u ocultar elementos

let botonOcultar = document.getElementById('mostrarOcultar');
let contenido = document.getElementById('contenido');

botonOcultar.addEventListener('click', function() 
{
    if (contenido.style.display === 'none') 
    {
        contenido.style.display = 'block';  // Muestra el contenido
        boton.textContent = 'Ocultar contenido';
    } 
    else 
    {
        contenido.style.display = 'none';  // Oculta el contenido
        botonOcultar.textContent = 'Mostrar contenido';
    }
});


let mensaje2 = document.getElementById('mensaje2');

mensaje2.addEventListener('mouseover', function() 
{
    mensaje2.textContent = '¡Estás sobre el texto!';
});

mensaje2.addEventListener('mouseout', function() 
{
    mensaje2.textContent = 'Pasa el mouse por aquí';
});
