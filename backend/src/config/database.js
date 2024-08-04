require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: false
});

sequelize.authenticate()
  .then(() => {
    console.log('Conectado ao banco de dados PostgreSQL');
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados: ', err);
  });

module.exports = sequelize;
