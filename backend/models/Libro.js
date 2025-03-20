/*libros.js (Manejo de Libros con el Backend)
Este archivo maneja las solicitudes HTTP relacionadas con los libros.*/ 

const mongoose = require('mongoose');

const LibroSchema = new mongoose.Schema({
    isbn: String,
    titulo: String,
    autor: String,
    fechaEdicion: Date,
    numPaginas: Number,
    cantidadEjemplares: Number,
    cantidadDisponibles: Number,
    sinopsis: String,
    tipoPresentacion: String,
    tipoLiteratura: String
});

module.exports = mongoose.model('Libro', LibroSchema);


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