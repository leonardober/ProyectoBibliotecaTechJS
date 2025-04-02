const express = require('express');
const router = express.Router();
const Autor = require('../models/Autor');

// Obtener todos los autores
router.get('/', async (req, res) => {
    try {
        const autores = await Autor.find();
        res.json(autores);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener autores' });
    }
});

// Obtener un autor por ID
router.get('/:id', async (req, res) => {
    try {
        const autor = await Autor.findById(req.params.id);
        if (!autor) return res.status(404).json({ error: 'Autor no encontrado' });
        res.json(autor);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener autor' });
    }
});

// Crear un autor
router.post('/', async (req, res) => {
    try {
        const nuevoAutor = new Autor(req.body);
        await nuevoAutor.save();
        res.json({ mensaje: 'Autor creado exitosamente', autor: nuevoAutor });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear autor' });
    }
});

// Modificar un autor
router.put('/:id', async (req, res) => {
    try {
        const autorActualizado = await Autor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!autorActualizado) return res.status(404).json({ error: 'Autor no encontrado' });
        res.json({ mensaje: 'Autor actualizado', autor: autorActualizado });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar autor' });
    }
});

// Eliminar un autor
router.delete('/:id', async (req, res) => {
    try {
        const autorEliminado = await Autor.findByIdAndDelete(req.params.id);
        if (!autorEliminado) return res.status(404).json({ error: 'Autor no encontrado' });
        res.json({ mensaje: 'Autor eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar autor' });
    }
});

module.exports = router;






/*Define las rutas para crear, consultar, modificar y eliminar autores.*/



/*
routes/ (Rutas del Backend)
¿Qué es?
Una carpeta donde se definen las rutas de la API (endpoints).

¿Para qué sirve?

Maneja las peticiones HTTP (GET, POST, PUT, DELETE).
Separa la lógica de cada entidad (Libros, Autores).
Se importa en server.js.*/ 