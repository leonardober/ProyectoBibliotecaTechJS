/*libros.js (Manejo de Libros con el Backend)
Este archivo maneja las solicitudes HTTP relacionadas con los libros.*/ 

const mongoose = require('mongoose');

const LibroSchema = new mongoose.Schema({
    isbn: { type: String, required: true, unique: true },
    titulo: { type: String, required: true },
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'Autor', required: true },
    fechaEdicion: { type: Date, required: true },
    numPaginas: { type: Number, required: true },
    cantidadEjemplares: { type: Number, required: true },
    cantidadDisponibles: { type: Number, required: true },
    sinopsis: { type: String, required: true },
    tipoPresentacion: { type: String, required: true }, // Ej: tapa dura, digital, etc.
    tipoLiteratura: { type: String, required: true } // Ej: ficción, ciencia ficción, etc.
});

module.exports = mongoose.model('Libro', LibroSchema);


/*Así, cuando obtienes un libro, puedes hacer un populate para ver la información del autor en vez de solo su id. */

/*Define la estructura de los libros en la base de datos.*/
/*
📂 biblioteca
│── 📂 backend
│   │── server.js
│   │── database.js
│   │── .env
│   │── 📂 models
│   │   │── Libro.js
│   │   │── Autor.js
│   │── 📂 routes
│   │   │── libros.js
│   │   │── autores.js
│   │── package.json
│
│── 📂 frontend
│   │── index.html
│   │── crear_libro.html
│   │── crear_autor.html
│   │── libros.js
│   │── autores.js
│   │── style.css
│   │── 📂 assets (para imágenes, iconos, etc.)
*/ 

/*models/ (Modelos de Datos con Mongoose)
es
Una carpeta donde se definen los esquemas de la base de datos con Mongoose.
sirve

Define la estructura de los documentos en MongoDB.
Facilita la manipulación de datos.*/

/*Se usa required: true en los campos esenciales para evitar datos incompletos.
✔ Los textos tienen trim: true para eliminar espacios innecesarios.
✔ timestamps: true agrega automáticamente createdAt y updatedAt.
✔ Relación entre Libro y Autor con ref: 'Autor' para permitir la búsqueda de libros por autor. */