const { Router } = require('express');

const createComment = require('../controllers/comments/createComment');
const updateComment = require('../controllers/comments/updateComment');
const deleteComment = require('../controllers/comments/deleteComment');

const commentsRoutes = Router();

commentsRoutes.post('/card/:cardId/comment',createComment);
commentsRoutes.put('/comment/:id',updateComment);
commentsRoutes.delete('/comment/:id',deleteComment);



module.exports = commentsRoutes;