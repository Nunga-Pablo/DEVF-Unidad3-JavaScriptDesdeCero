document.addEventListener('DOMContentLoaded', iniciarApp);
/* DOMContentLoader:   */

/* addEventListener:   */


function iniciarApp()
{
    const comentarioInput = document.getElementById('comentario');
    const agregarButton = document.getElementById('agregar');
    const listaComentarios = document.getElementById('lista-comentarios');

/* getElementByID:  */
    let comentarios = []; // Arreglo de productos

    agregarButton.addEventListener('click', function()
        {
        agregarProducto(comentarios, comentarioInput, listaComentarios);
        });
}

function agregarProducto(comentarios, comentarioInput, listaComentarios)
{
    const comentario = comentarioInput.value.trim();
    if(comentario)
    {
        const Nuevocomentario = 
        {
            nombre: comentario,
            comprado: false
        };

        comentarios.push(Nuevocomentario);
        mostrarProductos(Nuevocomentario, listaComentarios);
        comentarioInput.value = '';
    }
}

/* value:  */
/* trim():  */
/* appendChild:  */

function mostrarProductos(comentario, listaComentarios)
{
    const nuevoComent = document.createElement('li');
    nuevoComent.textContent = comentario.nombre;
    listaComentarios.appendChild(nuevoComent);
}