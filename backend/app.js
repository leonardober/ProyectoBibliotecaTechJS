
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const conectarDB = require('./database');

const app = express();
app.use(express.json());
app.use(cors());

conectarDB();

app.use('/libros', require('./routes/libros'));
app.use('/autores', require('./routes/autores'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));

/*Archivo	Función
app.js	Configura el servidor con Express y las rutas.
database.js	Conecta con la base de datos MongoDB.
/models/Libro.js	Define el esquema de los libros en MongoDB.
/models/Autor.js	Define el esquema de los autores en MongoDB.
/routes/libros.js	Rutas API para CRUD de libros.
/routes/autores.js	Rutas API para CRUD de autores.
.env	Variables de entorno para la configuración.

http://localhost:5000./routes/libros
http://localhost:5000./routes/autores
*/