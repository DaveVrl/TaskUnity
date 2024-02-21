const { Router } = require('express');

const createCard = require('../controllers/card/createCard');
const updateCard = require('../controllers/card/updateCard');


const cardsRoutes = Router();


cardsRoutes.post('/list/:listId/card',createCard);
cardsRoutes.put('/card/:id',updateCard);

module.exports = cardsRoutes;