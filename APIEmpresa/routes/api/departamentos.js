const express = require('express');
const router = express.Router();

const { getAllDptos, createDpto } = require('../../models/departamentos');


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


module.exports = router;
