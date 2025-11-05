import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Habilidade = sequelize.define('Habilidade', {
  habilidadeId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nivel: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'habilidades',
  timestamps: false
});

export default Habilidade;
