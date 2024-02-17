const { Router } = require('express');

const createUser = require('../controllers/createUser');
const updateUser = require('../controllers/updateUser');
const getUserById = require('../controllers/getUserById');

const userRoutes = Router();

userRoutes.post('/user',createUser);
userRoutes.get('/user/:id',getUserById);
userRoutes.put('/user/:id',updateUser);

module.exports = userRoutes;