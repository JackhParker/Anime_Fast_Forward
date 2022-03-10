const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SpecificEpisode extends Model {}

SpecificEpisode.init(
    {
        episode_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        episode_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        filler_canon: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        synopsis: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'SpecificEpisode',
    }
);

module.exports = SpecificEpisode;