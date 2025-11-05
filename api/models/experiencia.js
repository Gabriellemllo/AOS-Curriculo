import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Experiencia = sequelize.define('Experiencia', {
  experienciaId: {   
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  empresa: {        
    type: DataTypes.STRING,
    allowNull: false,
  },
  cargo: {           
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,  
    allowNull: false,
  },
  inicio: {          
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  termino: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  }
}, {
  tableName: 'experiencias',
  timestamps: true,
  createdAt: 'criadoEm',
  updatedAt: 'modificadoEm',
});

export default Experiencia;
