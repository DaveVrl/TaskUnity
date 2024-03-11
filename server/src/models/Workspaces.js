const { DataTypes } = require('sequelize');

const Workspaces = (sequelize) => {

    sequelize.define('workspaces' , {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },

        name: {
            type: DataTypes.STRING
        },

        created_by: {
            type: DataTypes.INTEGER
        },

        description: {
            type: DataTypes.STRING
        },

        members_id: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            defaultValue: []
        },

        admins_id: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            defaultValue: []
        },
        
        public: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },

        logo: {
            type: DataTypes.STRING
        }
    },{timestamps: false});
};

module.exports = Workspaces;