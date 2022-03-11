const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SpecificEpisode extends Model {}

SpecificEpisode.init(
    {
        series: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        aniID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        episode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        isFiller: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        epTit: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
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