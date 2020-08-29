const express = require('express');
const router = express.Router();

// *!IMPORTAMOS LAS RUTAS EMPLEADOS Y DEPARTAMENTOS
const apiEmpleadosRouter = require('./api/empleados');
const apiDptoRouter = require('./api/departamentos');


// *!APLICAMOS LAS RUTAS
router.use('/empleados', apiEmpleadosRouter);
router.use('/departamentos', apiDptoRouter);



module.exports = router;