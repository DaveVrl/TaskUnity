const { DataTypes } = require("sequelize");

const UserWorkspaces = (sequelize) => {
    
    sequelize.define('user_workspaces', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },

        rol: {
            type: DataTypes.STRING
        }
        
    },{timestamps: false});
};

module.exports = UserWorkspaces;