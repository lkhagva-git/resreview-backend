const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'res_review2020@', {
  host: 'db',
  port: 7001,
  dialect: 'postgres',
});

module.exports = sequelize;
