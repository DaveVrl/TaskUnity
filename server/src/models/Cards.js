// list_id
const { DataTypes } = require('sequelize');

const Cards = (sequelize) => {

    sequelize.define("cards", {

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

        description: {
            type: DataTypes.STRING,
        },

        comments: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        },

        position: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        state: {
            type: DataTypes.STRING,
            allowNull: false,
            defaulValue: 'default'
            //Debo manejar 3 estados para styles 'assigned' 'done'
        },

        assigned_to: {
            type: DataTypes.ARRAY(DataTypes.INTEGER)
        },

        due_date: {
            type: DataTypes.DATE
        }
    });
};

module.exports = Cards;