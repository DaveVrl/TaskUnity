const { Router } = require('express');

const createCard = require('../controllers/card/createCard');
const updateCard = require('../controllers/card/updateCard');
const getCardById = require('../controllers/card/getCardById');
const deleteCard = require('../controllers/card/deleteCard');



const cardsRoutes = Router();


cardsRoutes.post('/list/:listId/card',createCard);
cardsRoutes.put('/card/:id',updateCard);
cardsRoutes.get('/card/:id',getCardById);
cardsRoutes.delete('/card/:id',deleteCard);

module.exports = cardsRoutes;