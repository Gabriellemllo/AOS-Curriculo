import Usuario from './usuario.js';
import Experiencia from './experiencia.js';
import Habilidade from './habilidade.js';
import Formacao from './formacao.js';

Usuario.hasMany(Experiencia, { foreignKey: 'usuarioId', as: 'experiencias' });
Experiencia.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'usuario' });


Usuario.hasMany(Habilidade, { foreignKey: 'usuarioId', as: 'habilidades' });
Habilidade.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'usuario' });


Usuario.hasMany(Formacao, { foreignKey: 'usuarioId', as: 'formacoes' });
Formacao.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'usuario' });

export { Usuario, Experiencia, Habilidade, Formacao };
