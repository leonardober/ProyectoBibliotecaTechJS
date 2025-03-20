/*Autor.js (Manejo de Autores con el Backend)
Este archivo maneja las solicitudes HTTP relacionadas con los autores.*/ 

const mongoose = require('mongoose');

const AutorSchema = new mongoose.Schema({
    nombre: String,
    nacionalidad: String,
    fechaNacimiento: Date,
    fechaPublicacion: Date,
    fechaPublicacion: String,
    premios: String,
    biografia: String
});

module.exports = mongoose.model('Autor', AutorSchema);

/*Define la estructura de los autores en la base de datos.*/

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

/*
Resumen Final Backend
Archivo/Carpeta	            Función
package.json	            Define las dependencias del proyecto
package-lock.json	        Bloquea versiones exactas de dependencias
.env	                    Almacena variables de entorno (ej. URL de BD)
server.js	                Inicia el servidor con Express
database.js               	Conecta con MongoDB usando Mongoose
routes/	                    Define las rutas de la API (endpoints)
models/                  	Modela la estructura de datos con Mongoose
node_modules/	            Contiene las dependencias de Node.js*/