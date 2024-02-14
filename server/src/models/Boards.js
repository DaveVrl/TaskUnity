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
            type: DataTypes.INTEGER,
            allowNull: false
        },

        description: {
            type: DataTypes.STRING
        },

        members_id: {
            type: DataTypes.ARRAY(DataTypes.INTEGER)
        },

        logo: {
            type: DataTypes.STRING
        },

        position: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
};

module.exports = Boards;