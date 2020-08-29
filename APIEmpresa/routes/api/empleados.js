const express = require('express');
const router = express.Router();

const { getAllEmpleados, createEmpleado, updateEmpleado } = require('../../models/empleado');

//PETICION GET PARA OBTENER TODOS LOS EMPLEADOS
router.get('/', async (req, res) => {
    try {
        const empleados = await getAllEmpleados();
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//PETICION POST PARA CREAR UN NUEVO EMPLEADO
router.post('/', async (req, res) => {
    try {
        req.body.fecha_inc = new Date();
        const result = await createEmpleado(req.body);
        res.json(result);
        console.log(req.body);
    } catch (error) {
        res.json({ error: error.message })
    }
});

//PETICION PARA ACTUALIZAR UN EMPLEADO
router.put('/', async (req, res) => {
    try {
        const result = await updateEmpleado(req.body);
        res.json({ succes: 'Empleado editado' })
    } catch (error) {
        res.json({ error: error.message })
    }
});

module.exports = router;