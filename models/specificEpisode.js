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
        },
        episode: {
            type: DataTypes.INTEGER,
            allowNull: false,
    
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
            type: DataTypes.TEXT,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'SpecificEpisode',
    }
);

module.exports = SpecificEpisode;