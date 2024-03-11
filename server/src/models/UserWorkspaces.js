const { DataTypes } = require("sequelize");

const UserWorkspaces = (sequelize) => {
    
    sequelize.define('user_workspaces', {
        role: {
            type: DataTypes.STRING
        }
    });
};

module.exports = UserWorkspaces;