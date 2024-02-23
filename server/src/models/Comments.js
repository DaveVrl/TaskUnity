const { DataTypes } = require('sequelize');

const Comments = (sequelize) => {

    sequelize.define("comments", {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        comment: {
            type: DataTypes.STRING
        }
    });
};

module.exports = Comments;