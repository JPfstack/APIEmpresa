const express = require('express');
const router = express.Router();

const { getAllEmpleados } = require('../../models/empleados');

//PETICION GET PARA OBTENER TODOS LOS EMPLEADOS
router.get('/', async (req, res) => {
    try {
        const empleados = await getAllEmpleados();
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;