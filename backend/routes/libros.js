
/*Define las rutas para crear, consultar, modificar y eliminar libros.*/

const express = require('express');
const router = express.Router();
const Libro = require('../models/Libro');

// Obtener todos los libros
router.get('/', async (req, res) => {
    const libros = await Libro.find();
    res.json(libros);
});

// Crear un libro
router.post('/', async (req, res) => {
    try {
        const nuevoLibro = new Libro(req.body);
        await nuevoLibro.save();
        res.json({ mensaje: 'Libro creado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear libro' });
    }
});

// Modificar un libro
router.put('/:id', async (req, res) => {
    try {
        await Libro.findByIdAndUpdate(req.params.id, req.body);
        res.json({ mensaje: 'Libro actualizado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar libro' });
    }
});

// Eliminar un libro
router.delete('/:id', async (req, res) => {
    try {
        await Libro.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Libro eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar libro' });
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