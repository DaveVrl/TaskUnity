const { Router } = require('express');

const createUser = require('../controllers/user/createUser');
const updateUser = require('../controllers/user/updateUser');
const getUserById = require('../controllers/user/getUserById');
const deleteUser = require('../controllers/user/deleteUser');
const getUserBoard = require('../controllers/user/getUserBoard');

const userRoutes = Router();

userRoutes.post('/user',createUser);
userRoutes.get('/user/:id',getUserById);
userRoutes.get('/user/board/:id',getUserBoard);
userRoutes.put('/user/:id',updateUser);
userRoutes.delete('/user/:id', deleteUser);

module.exports = userRoutes;