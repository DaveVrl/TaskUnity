const { DataTypes } = require('sequelize');

const Users = (sequelize) => {

    sequelize.define("users", {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },

        username: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        password: {
            type: DataTypes.STRING,
            allowNull: true
        },

        avatar_img: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'Establecer'
        },

        master: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },

        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
};

module.exports = Users;