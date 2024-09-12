import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Course from './course';

class Video extends Model {
  public id!: number;
  public title!: string;
  public url!: string;
  public courseId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Video.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    courseId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Course, // refere-se ao modelo Course
        key: 'id',
      },
    },
  },
  {
    sequelize,
    tableName: 'videos',
  }
);

Video.belongsTo(Course, { foreignKey: 'courseId', as: 'course' });

export default Video;
