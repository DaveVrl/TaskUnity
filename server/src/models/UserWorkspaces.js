const { DataTypes } = require("sequelize");

const UserWorkspaces = (sequelize) => {
    
    sequelize.define('user_workspaces', {
        role: {
            type: DataTypes.STRING
        }
    },{timestamps: false});
};

module.exports = UserWorkspaces;