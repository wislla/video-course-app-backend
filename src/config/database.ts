import { Sequelize } from 'sequelize';

// Configuração da instância do Sequelize
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql', // ou 'postgres', 'sqlite', 'mariadb', dependendo do banco de dados que você está usando
});

// Exportar a instância para ser usada em outros arquivos
export default sequelize;
