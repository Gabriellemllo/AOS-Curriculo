import Habilidade from '../models/habilidade.js';

const HabilidadeService = {
  adicionar: async (dados) => Habilidade.create(dados),
  listarTodas: async () => Habilidade.findAll(),
  buscarPorId: async (id) => Habilidade.findByPk(id),
  atualizar: async (id, dados) => Habilidade.update(dados, { where: { habilidadeId: id } }),
  remover: async (id) => Habilidade.destroy({ where: { habilidadeId: id } }),
};

export default HabilidadeService;
