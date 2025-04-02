//FrontEnd JavaScript para manejar la carga de libros/autores y formularios.
/*Función:

Consulta la API del backend para cargar libros y autores.
Maneja los formularios de creación de libros y autores.*/
async function cargarLibros() {
    try {
        const response = await fetch('http://localhost:3000/libros');
        const libros = await response.json();
        const lista = document.getElementById('listaLibros');
        lista.innerHTML = '';
        libros.forEach(libro => {
            const li = document.createElement('li');
            li.textContent = `${libro.titulo} - ${libro.autor}`;
            lista.appendChild(li);
        });
    } catch (error) {
        console.error('Error al cargar libros', error);
    }
}

async function cargarAutores() {
    try {
        const response = await fetch('http://localhost:3000/autores');
        const autores = await response.json();
        const lista = document.getElementById('listaAutores');
        lista.innerHTML = '';
        autores.forEach(autor => {
            const li = document.createElement('li');
            li.textContent = `${autor.nombre} - ${autor.nacionalidad}`;
            lista.appendChild(li);
        });
    } catch (error) {
        console.error('Error al cargar autores', error);
    }
}
