const express = require('express');
const router = express.Router();

const { getAllDptos } = require('../../models/departamentos');


//PETICION GET PARA OBTENER TODOS LOS DEPARTAMENTOS
router.get('/', async (req, res) => {
    try {
        const dptos = await getAllDptos();
        res.json(dptos);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});


module.exports = router;
