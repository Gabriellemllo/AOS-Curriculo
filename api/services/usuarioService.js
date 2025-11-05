import Usuario from '../models/usuario.js';

const UsuarioService = {
  criarNovo: async (dados) => Usuario.create(dados),
  listarUsuarios: async () => Usuario.findAll(),
  buscarUm: async (id) => Usuario.findByPk(id),
  atualizarDados: async (id, dados) => Usuario.update(dados, { where: { usuarioId: id } }),
  removerUsuario: async (id) => Usuario.destroy({ where: { usuarioId: id } }),
};

export default UsuarioService;
