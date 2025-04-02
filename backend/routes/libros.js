
/*Define las rutas para crear, consultar, modificar y eliminar libros.*/

const express = require('express');
const router = express.Router();
const Libro = require('../models/Libro');

// Obtener todos los libros
router.get('/', async (req, res) => {
    try {
        const libros = await Libro.find().populate('autor'); // Trae datos del autor
        res.json(libros);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener libros' });
    }
});

// Obtener un libro por ID
router.get('/:id', async (req, res) => {
    try {
        const libro = await Libro.findById(req.params.id).populate('autor');
        if (!libro) return res.status(404).json({ error: 'Libro no encontrado' });
        res.json(libro);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener libro' });
    }
});

// Crear un libro
router.post('/', async (req, res) => {
    try {
        const nuevoLibro = new Libro(req.body);
        await nuevoLibro.save();
        res.json({ mensaje: 'Libro creado exitosamente', libro: nuevoLibro });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear libro' });
    }
});

// Modificar un libro
router.put('/:id', async (req, res) => {
    try {
        const libroActualizado = await Libro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!libroActualizado) return res.status(404).json({ error: 'Libro no encontrado' });
        res.json({ mensaje: 'Libro actualizado', libro: libroActualizado });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar libro' });
    }
});

// Eliminar un libro
router.delete('/:id', async (req, res) => {
    try {
        const libroEliminado = await Libro.findByIdAndDelete(req.params.id);
        if (!libroEliminado) return res.status(404).json({ error: 'Libro no encontrado' });
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