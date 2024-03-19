const { Router } = require('express');

const assignAdminRole = require('../controllers/admin/assignAdminRole');
const removeAdminRole = require('../controllers/admin/removeAdminRole');
const transferOwnership = require('../controllers/admin/transferOwnership');

const adminRoutes = Router();

adminRoutes.put('/admin/:workspaceId/assign/:userId',assignAdminRole);
adminRoutes.put('/admin/:workspaceId/remove/:userId',removeAdminRole);
adminRoutes.put('/admin/:workspaceId/owner/:ownerId/transfer/:userId',transferOwnership);

module.exports = adminRoutes;