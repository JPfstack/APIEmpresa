const express = require('express');
const router = express.Router();

const { getAllDptos, createDpto, updateDpto } = require('../../models/departamento');


//PETICION GET PARA OBTENER TODOS LOS DEPARTAMENTOS
router.get('/', async (req, res) => {
    try {
        const dptos = await getAllDptos();
        res.json(dptos);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

//PETICION POST PARA CREAR NUEVO DEPARTAMENTO
router.post('/', async (req, res) => {
    try {
        const result = await createDpto(req.body);
        res.json(result);
        console.log(result);
    } catch (error) {
        res.json({ error: error.message })

    }
});

//PETICION PUT PARA ACTUALIZAR DEPARTAMENTO
router.put('/', async (req, res) => {
    try {
        const result = await updateDpto(req.body);
        res.json({ succes: 'Departamento editado' })
    } catch (error) {
        res.json({ error: error.message })
    }
});



module.exports = router;
