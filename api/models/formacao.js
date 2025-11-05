import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Formacao = sequelize.define('Formacao', {
  formacaoId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  instituicao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  curso: {
    type: DataTypes.STRING,
    allowNull: false
  },
  inicio: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  fim: {
    type: DataTypes.DATEONLY,
    allowNull: true
  }
}, {
  tableName: 'formacoes',
  timestamps: true
});

export default Formacao;
