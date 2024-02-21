const { Router } = require('express');

const createList = require('../controllers/list/createList');
const updateList = require('../controllers/list/updateList');
const deleteList = require('../controllers/list/deleteList');


const listsRoutes = Router();

listsRoutes.post('/board/:boardId/list',createList);
listsRoutes.put('/list/:id',updateList);
listsRoutes.delete('/list/:id',deleteList);

module.exports = listsRoutes;