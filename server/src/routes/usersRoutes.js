const { Router } = require('express');

const createUser = require('../controllers/user/createUser');
const updateUser = require('../controllers/user/updateUser');
const getUserById = require('../controllers/user/getUserById');
const deleteUser = require('../controllers/user/deleteUser');
const getUserWorkspace = require('../controllers/user/getUserWorkspace');

const userRoutes = Router();

userRoutes.post('/user',createUser);
userRoutes.get('/user/:id',getUserById);
userRoutes.get('/user/workspace/:id',getUserWorkspace);
userRoutes.put('/user/:id',updateUser);
userRoutes.delete('/user/:id', deleteUser);

module.exports = userRoutes;