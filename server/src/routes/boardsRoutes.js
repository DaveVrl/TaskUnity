const { Router } = require('express');

const createBoard = require('../controllers/board/createBoard');

const boardRoutes = Router();

boardRoutes.post('/board',createBoard);

module.exports = boardRoutes;