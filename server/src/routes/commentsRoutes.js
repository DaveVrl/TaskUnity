const { Router } = require('express');

const createComment = require('../controllers/comments/createComment');

const commentsRoutes = Router();

commentsRoutes.post('/card/:cardId/comment',createComment);



module.exports = commentsRoutes;