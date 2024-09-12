import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database'; // Certifique-se que esse caminho está correto

class Evaluation extends Model {
  public id!: number;
  public score!: number;
  public comment!: string;
}

Evaluation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // Aqui você passa a instância do sequelize
    modelName: 'Evaluation',
  }
);

export default Evaluation;
