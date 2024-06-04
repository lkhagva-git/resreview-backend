const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Restaurant = sequelize.define('Restaurant', {
//   img: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  openingTime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  closingTime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  reviews: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Restaurant;
