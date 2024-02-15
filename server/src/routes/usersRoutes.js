const { Router } = require('express');

const createUser = require('../controllers/createUser');

const userRoutes = Router();

userRoutes.post('/user',createUser);

module.exports = userRoutes;