import { Model, DataTypes } from 'sequelize'; 
import sequelize from '../config/database'; // Certifique-se de que o caminho esteja correto

class User extends Model {
  public id!: number;
  public email!: string;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init({
  id: {
    type: DataTypes.INTEGER, // Usar DataTypes ao invés de Sequelize
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING, // Usar DataTypes ao invés de Sequelize
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING, // Usar DataTypes ao invés de Sequelize
    allowNull: false,
  },
}, {
  sequelize, // Instância de conexão do banco de dados
  tableName: 'users',
});

export default User;


export interface IUser {
  id: number;
  email: string;
}