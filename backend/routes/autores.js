/*Define las rutas para crear, consultar, modificar y eliminar autores.*/

const express = require('express');
const router = express.Router();
const Autor = require('../models/Autor');

// Obtener todos los autores
router.get('/', async (req, res) => {
    const autores = await Autor.find();
    res.json(autores);
});

// Crear un autor
router.post('/', async (req, res) => {
    try {
        const nuevoAutor = new Autor(req.body);
        await nuevoAutor.save();
        res.json({ mensaje: 'Autor creado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear autor' });
    }
});

// Modificar un autor
router.put('/:id', async (req, res) => {
    try {
        await Autor.findByIdAndUpdate(req.params.id, req.body);
        res.json({ mensaje: 'Autor actualizado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar autor' });
    }
});

// Eliminar un autor
router.delete('/:id', async (req, res) => {
    try {
        await Autor.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Autor eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar autor' });
    }
});

module.exports = router;


/*
routes/ (Rutas del Backend)
¿Qué es?
Una carpeta donde se definen las rutas de la API (endpoints).

¿Para qué sirve?

Maneja las peticiones HTTP (GET, POST, PUT, DELETE).
Separa la lógica de cada entidad (Libros, Autores).
Se importa en server.js.*/ 