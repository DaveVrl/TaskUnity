const { Router } = require('express');

const createBoard = require('../controllers/board/createBoard');
const deleteBoard = require('../controllers/board/deleteBoard');
const updateBoard = require('../controllers/board/updateBoard');
const inviteUserToBoard = require('../controllers/board/inviteUserToBoard');
const deleteMemberFromBoard = require('../controllers/board/deleteMemberFromBoard');

const boardRoutes = Router();

boardRoutes.post('/board/:id',createBoard);
boardRoutes.put('/board/:id',updateBoard);
boardRoutes.post('/boards/:boardId/invite/:userId',inviteUserToBoard);
boardRoutes.delete('/boards/:boardId/delete/:userId',deleteMemberFromBoard);
boardRoutes.delete('/board/:id',deleteBoard);

module.exports = boardRoutes;