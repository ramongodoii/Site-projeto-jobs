const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgresql://postgres:QmXzFLnmacJgYOBTLeWZXKpnQbXJXjxr@postgres.railway.internal:5432/railway', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});


  module.exports = sequelize;

