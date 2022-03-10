const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TheAnime extends Model {}

TheAnime.init(
    {
        anime_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        anime_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        anime_rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        episode_names: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'TheAnime',
    }
);

module.exports = TheAnime;