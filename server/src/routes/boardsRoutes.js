const { Router } = require('express');

const createBoard = require('../controllers/board/createBoard');
const deleteBoard = require('../controllers/board/deleteBoard');
const updateBoard = require('../controllers/board/updateBoard');

const boardRoutes = Router();

boardRoutes.post('/board/:workspaceId',createBoard);
boardRoutes.put('/board/:id',updateBoard);
boardRoutes.delete('/board/:id',deleteBoard);

module.exports = boardRoutes;