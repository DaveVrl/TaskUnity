const { Router } = require('express');

const createCard = require('../controllers/card/createCard');


const cardsRoutes = Router();


cardsRoutes.post('/list/:listId/card',createCard);


module.exports = cardsRoutes;