const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SpecificEpisode extends Model {}

SpecificEpisode.init(
    {
        series: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        aniID: {
            type: DataTypes.INTEGER,
            allowNull: true,
    
        
        },
        episode: {
            type: DataTypes.INTEGER,
            allowNull: true,
           
    
        },
        isFiller: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        epTit: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
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