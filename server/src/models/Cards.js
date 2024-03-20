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
            //Debo manejar 3 estados para styles 'in-progress' 'done'
        },

        assigned_to: {
            type: DataTypes.JSON,
            defaultValue: null,
            allowNull: true,
            get() {
                const assignedTo = this.getDataValue('assigned_to');
                if (assignedTo) {
                    return {
                        id: assignedTo.id,
                        name: assignedTo.name,
                        username: assignedTo.username,
                        avatar_img: assignedTo.avatar_img
                    };
                } else {
                    return null;
                }
            }
        },

        due_date: {
            type: DataTypes.DATE
        }
    });
};

module.exports = Cards;
//para commit