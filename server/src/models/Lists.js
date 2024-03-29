// board_id 
const { DataTypes } = require('sequelize');

const Lists = (sequelize) => {

    sequelize.define("lists", {

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

        position: {
            type: DataTypes.INTEGER,
        },

        type: {
            type: DataTypes.STRING,
            defaulValue: 'task'
            //Valor 'task_over' para manejar lista de task finalizadas
        } 
    },{timestamps: false});
};

module.exports = Lists;