const { Router } = require('express');

const assignAdminRole = require('../controllers/admin/assignAdminRole');
const removeAdminRole = require('../controllers/admin/removeAdminRole');

const adminRoutes = Router();

adminRoutes.put('/admin/:workspaceId/assign/:userId',assignAdminRole);
adminRoutes.put('/admin/:workspaceId/remove/:userId',removeAdminRole);

module.exports = adminRoutes;