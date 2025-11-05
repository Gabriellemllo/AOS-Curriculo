import Formacao from '../models/formacao.js';

const FormacaoService = {
  adicionar: async (dados) => Formacao.create(dados),
  listarTodas: async () => Formacao.findAll(),
  buscarPorId: async (id) => Formacao.findByPk(id),
  atualizar: async (id, dados) => Formacao.update(dados, { where: { formacaoId: id } }),
  remover: async (id) => Formacao.destroy({ where: { formacaoId: id } }),
};

export default FormacaoService;
