import { Experiencia } from '../models/index.js';

const ExperienciaService = {
  registrar: async (dados) => Experiencia.create(dados),
  listarTodas: async () => Experiencia.findAll(),
  encontrarPorId: async (id) => Experiencia.findByPk(id),
  editar: async (id, dados) => Experiencia.update(dados, { where: { id } }), // use 'id' se sua PK for 'id'
  remover: async (id) => Experiencia.destroy({ where: { id } }),
};

export default ExperienciaService;
