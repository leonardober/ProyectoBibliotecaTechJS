const express = require('express');
const cors = require('cors');
const conectarDB = require('./database');
const libroRoutes = require('./routes/libros');

require('dotenv').config();
const app = express();

conectarDB();
app.use(express.json());
app.use(cors());

// Rutas
app.use('/libros', libroRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:3000`);
});
//   console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);


/*Archivo	Función
server.js	Configura el servidor con Express y las rutas.
database.js	Conecta con la base de datos MongoDB.
/models/Libro.js	Define el esquema de los libros en MongoDB.
/models/Autor.js	Define el esquema de los autores en MongoDB.
/routes/libros.js	Rutas API para CRUD de libros.
/routes/autores.js	Rutas API para CRUD de autores.
.env	Variables de entorno para la configuración.*/