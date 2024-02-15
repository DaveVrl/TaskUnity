const { Router } = require('express');

// Importar todos los routers;
const usersRoutes = require('./usersRoutes');


const router = Router();

// Configurar los routers
router.use('/TaskUnity',usersRoutes);







module.exports = router;