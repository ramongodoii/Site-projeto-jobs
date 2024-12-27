const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('railway', 'postgres', 'QmXzFLnmacJgYOBTLeWZXKpnQbXJXjxr', {
  host: 'postgres.railway.internal',
  dialect: 'postgres',
  logging: false,
});

sequelize.authenticate().then(() => {
  console.log('Conectado ao banco!');
}).catch((erro) => {
  console.error('Erro ao conectar:', erro);
});

module.exports = sequelize;