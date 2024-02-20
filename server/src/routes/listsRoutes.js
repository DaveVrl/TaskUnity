const { Router } = require('express');

const createList = require('../controllers/list/createList');


const listsRoutes = Router();

listsRoutes.post('/board/:boardId/list',createList);


module.exports = listsRoutes;