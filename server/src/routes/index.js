const { Router } = require('express');

// Importar todos los routers;
const usersRoutes = require('./usersRoutes');
const boardsRoutes = require('./boardsRoutes');
const listsRoutes = require('./listsRoutes');
const cardsRoutes = require('./cardsRoutes');
const commentsRoutes = require('./commentsRoutes');
const workspacesRoutes = require('./workspacesRoutes');
const adminRoutes = require('./adminRoutes');

const router = Router();

// Configurar los routers
router.use('/TaskUnity',usersRoutes);
router.use('/TaskUnity',workspacesRoutes);
router.use('/TaskUnity',boardsRoutes);
router.use('/TaskUnity',listsRoutes);
router.use('/TaskUnity',cardsRoutes);
router.use('/TaskUnity',commentsRoutes);
router.use('/TaskUnity',adminRoutes);







module.exports = router;