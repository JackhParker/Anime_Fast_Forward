const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class AnimePList extends Model {}

AnimePList.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    animeList: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lastWatched: {
        type: DataTypes.STRING,
        allowNull: true,
    }
  },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'AnimePList',
    }
);

module.exports = AnimePList;
