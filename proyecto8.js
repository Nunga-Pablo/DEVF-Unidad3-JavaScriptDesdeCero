document.addEventListener('DOMContentLoaded', iniciarApp);

function iniciarApp()
{
    const nombreInput = document.getElementById("nombre");
    const correoInput = document.getElementById("correo");
    const comentarioInput = document.getElementById("comentario");
    const boton = document.getElementById("boton");
    const listaComentarios = document.getElementById("listaComentarios");
    
    const hora = new Date();

    const horaArray =  new Intl.DateTimeFormat('es-Es', {
        dateStyle: 'full',
        timeStyle: 'short',
        timeZone: 'Australia/Sydney',
    }).format(hora);

    let comentariosArray = []; 

    boton.addEventListener("click", function()
    {
        agregarComentario(comentariosArray, comentarioInput, nombreInput, correoInput,listaComentarios, horaArray);
    });
}

function agregarComentario(comentariosArray, comentarioInput, nombreInput, correoInput, listaComentarios, horaArray)
{
    const comentario = comentarioInput.value.trim();
    const nombre = nombreInput.value.trim();
    const correo = correoInput.value.trim();

    if(comentario)
    {
        const nuevoComentario = 
        {
            nombre: nombre,
            correo: correo,
            texto: comentario,
            hora: horaArray
        };

        comentariosArray.push(nuevoComentario);
        mostrarComentarios(nuevoComentario, listaComentarios);
        comentarioInput.value = "";
        // nombreInput.value = "";
        // correoInput.value = "";
    }
}

function mostrarComentarios(comentario, listaComentarios)
{
    const nuevoComent = document.createElement('li');
    nuevoComent.textContent = comentario.hora + " " + comentario.nombre + " " + comentario.correo + " : " + comentario.texto;
    listaComentarios.appendChild(nuevoComent);
}