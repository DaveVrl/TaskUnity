const { DataTypes } = require('sequelize');

const Boards = (sequelize) => {

    sequelize.define("boards", {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        created_by: {
            type: DataTypes.INTEGER
        },

        description: {
            type: DataTypes.STRING
        },

        position: {
            type: DataTypes.INTEGER
        
        },

        state: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });
};

module.exports = Boards;