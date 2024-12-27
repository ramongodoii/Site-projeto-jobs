const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Jobs', 'postgres', '2024', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});


  module.exports = sequelize;