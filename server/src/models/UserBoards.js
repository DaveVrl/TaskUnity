const { DataTypes } = require("sequelize");

const UserBoards = (sequelize) => {
    
    sequelize.define('user_boards', {
        role: {
            type: DataTypes.STRING
        }
    });
};

module.exports = UserBoards;