const { Router } = require('express');

const createWorkspace = require('../controllers/workspace/createWorkspace');
const inviteUserToWorkspace = require('../controllers/workspace/inviteUserToWorkspace');
const deleteMemberFromWorkspace = require('../controllers/workspace/deleteMemberFromWorkspace');
const updateWorkspace = require ('../controllers/workspace/updateWorkspace');
const getWorkspaceMembers = require('../controllers/workspace/getWorkspaceMembers');

const workspaceRoutes = Router();

workspaceRoutes.post('/workspace/:id',createWorkspace);
workspaceRoutes.put('/workspace/:id',updateWorkspace);
workspaceRoutes.post('/workspace/:workspaceId/invite/:userId',inviteUserToWorkspace);
workspaceRoutes.get('/workspace/:workspaceId',getWorkspaceMembers);
workspaceRoutes.delete('/board/:workspaceId/delete/:userId',deleteMemberFromWorkspace);



module.exports = workspaceRoutes;