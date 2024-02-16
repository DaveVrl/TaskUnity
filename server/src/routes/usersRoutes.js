const { Router } = require('express');

const createUser = require('../controllers/createUser');
const updateUser = require('../controllers/updateUser');

const userRoutes = Router();

userRoutes.post('/user',createUser);

userRoutes.put('/user/:id',updateUser);

module.exports = userRoutes;