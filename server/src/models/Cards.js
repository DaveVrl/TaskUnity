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
            type: DataTypes.STRING
        },

        description: {
            type: DataTypes.STRING
        },

        position: {
            type: DataTypes.INTEGER
        },

        state: {
            type: DataTypes.STRING,
            defaulValue: 'default'
            //Debo manejar 3 estados para styles 'assigned' 'done'
        },

        assigned_to: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            defaulValue: 'default'
        },

        due_date: {
            type: DataTypes.DATE
        }
    });
};

module.exports = Cards;
//para commit