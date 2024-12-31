const { Sequelize } = require('sequelize');

// Configuração do Sequelize com os novos argumentos
const sequelize = new Sequelize('postgres_do_site_jobs', 'postgres_do_site_jobs_user', 'M1B98XNgYDPJeNNSsWrYuOJyP5K6ISAP', {
  host: 'dpg-ctptbv0gph6c73dhlr60-a',
  port: 5432,
  dialect: 'postgres',
  logging: false, // Define como 'true' se quiser exibir os logs de consultas no console
});

sequelize.authenticate()
  .then(() => {
    console.log('Conectado ao banco!');
  })
  .catch((erro) => {
    console.error('Erro ao conectar:', erro);
  });

module.exports = sequelize;
