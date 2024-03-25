const { Router } = require('express');

const createUser = require('../controllers/user/createUser');
const updateUser = require('../controllers/user/updateUser');
const getUserById = require('../controllers/user/getUserById');
const deleteUser = require('../controllers/user/deleteUser');
const getUserWorkspace = require('../controllers/user/getUserWorkspace');
const getWorkspaceCards = require('../controllers/user/getWorkspaceCards');
const login = require('../controllers/user/login');

const userRoutes = Router();

userRoutes.post('/user',createUser);
userRoutes.post('/login',login);
userRoutes.get('/user/:id',getUserById);
userRoutes.get('/user/workspace/:id',getUserWorkspace);
userRoutes.get('/user/workspace/card/:userId',getWorkspaceCards);
userRoutes.put('/user/:id',updateUser);
userRoutes.delete('/user/:id', deleteUser);

module.exports = userRoutes;