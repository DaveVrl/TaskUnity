const { Router } = require('express');

// Importar todos los routers;
const usersRoutes = require('./usersRoutes');
const boardsRoutes = require('./boardsRoutes');
const listsRoutes = require('./listsRoutes');

const router = Router();

// Configurar los routers
router.use('/TaskUnity',usersRoutes);
router.use('/TaskUnity',boardsRoutes);
router.use('/TaskUnity',listsRoutes);







module.exports = router;