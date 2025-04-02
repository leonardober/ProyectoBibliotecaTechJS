
require('dotenv').config();
console.log("Conectando a:", process.env.MONGO_URI); // Añade esto para depurar

const mongoose = require('mongoose');

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Conectado a MongoDB Atlas');
    } catch (error) {
        console.error('❌ Error al conectar a MongoDB:', error);
        process.exit(1);
    }
};

module.exports = conectarDB;



/* *npm install mongoose*/


/*database.js (Conexión a MongoDB)
📌 Función:

Conecta el backend con MongoDB usando Mongoose.
Usa variables de entorno para la URL de la base de datos.

El archivo que maneja la conexión con MongoDB.

¿Para qué sirve?

Usa Mongoose para conectar a MongoDB.
Verifica si la conexión es exitosa.
Se importa en server.js.*/


/*
📂 backend
│── 📜 package.json
│── 📜 package-lock.json
│── 📜 .env
│── 📜 app.js
│── 📜 database.js
│── 📂 node_modules/
│── 📂 routes/
│   │── libros.js
│   │── autores.js
│── 📂 models/
│   │── Libro.js
│   │── Autor.js  */


/* EXPLICACION PROYECTO
PACKAGE.JSON
el archivo principal de configuración de Node.js. Contiene información sobre el proyecto y sus dependencias.

sirve para
Definir el nombre, versión y descripción del proyecto.
Contiene la lista de dependencias necesarias.
Permite ejecutar scripts con npm run.

Comandos útiles con package.json:

npm install → Instala todas las dependencias.
npm start → Ejecuta el servidor.
npm run dev → Ejecuta el servidor en modo desarrollo con Nodemon.



package-lock.json

 ES Un archivo que se genera automáticamente cuando instalamos paquetes con npm.
se utiliza para

Registrar la versión exacta de cada dependencia instalada.
Garantiza que todos los desarrolladores trabajen con las mismas versiones.
Se actualiza cada vez que instalas una nueva dependencia.

.env

Es
Un archivo donde se guardan las variables de entorno.
sirve para

Proteger información sensible (contraseñas, claves API, URL de bases de datos).
Facilita la configuración del entorno de desarrollo y producción.

PORT=3000
MONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/biblioteca

Para usar las variables de .env, instalamos dotenv:

npm install dotenv


 En server.js la usamos así

 require('dotenv').config();
const PORT = process.env.PORT || 3000;


server.js
Es
El archivo principal del servidor donde se configura Express y se definen las rutas.

Nos sirve porque

Configura Express.
Conecta con la base de datos.
Inicia el servidor en un puerto específico.
Importa las rutas (routes/).


routes/ (Rutas del Backend)
es
Una carpeta donde se definen las rutas de la API (endpoints).
sirve?

Maneja las peticiones HTTP (GET, POST, PUT, DELETE).
Separa la lógica de cada entidad (Libros, Autores).
Se importa en server.js.


models/ (Modelos de Datos con Mongoose) es
Una carpeta donde se definen los esquemas de la base de datos con Mongoose.
sirve

Define la estructura de los documentos en MongoDB.
Facilita la manipulación de datos.



node_modules/
es
Una carpeta donde se almacenan todas las dependencias 
de Node.js instaladas con npm install.

no se debe modificar manualmente node_modules/,
ya que se genera automáticamente con npm install.


Resumen Final
Archivo/Carpeta	            Función
package.json	            Define las dependencias del proyecto
package-lock.json	        Bloquea versiones exactas de dependencias
.env	                    Almacena variables de entorno (ej. URL de BD)
server.js	                Inicia el servidor con Express
database.js               	Conecta con MongoDB usando Mongoose
routes/	                    Define las rutas de la API (endpoints)
models/                  	Modela la estructura de datos con Mongoose
node_modules/	            Contiene las dependencias de Node.js

*/



