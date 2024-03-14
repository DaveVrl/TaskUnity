const { Router } = require('express');

const assignAdminRole = require('../controllers/admin/assignAdminRole');

const adminRoutes = Router();

adminRoutes.put('/admin/:workspaceId/assign/:userId',assignAdminRole);

module.exports = adminRoutes;