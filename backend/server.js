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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));

/*server.js (Archivo Principal del Servidor)
📌 Función:

Configura el servidor con Express.js.
Define el puerto del servidor.
Importa las rutas de libros y autores.*/

/*
server.js
Es
El archivo principal del servidor donde se configura Express y se definen las rutas.

Nos sirve porque

Configura Express.
Conecta con la base de datos.
Inicia el servidor en un puerto específico.
Importa las rutas (routes/).
*/ 