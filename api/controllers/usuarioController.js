import UsuarioService from '../services/usuarioService.js';

const usuarioController = {
  inserir: async (req, res) => {
    const novo = await UsuarioService.criarNovo(req.body);
    res.status(201).json({ mensagem: 'Usuário cadastrado!', dados: novo });
  },
  listarTudo: async (req, res) => {
    const lista = await UsuarioService.listarUsuarios();
    res.json({ total: lista.length, lista });
  },
  consultarPorId: async (req, res) => {
    const resp = await UsuarioService.buscarUm(req.params.id);
    if (resp) res.json(resp);
    else res.status(404).json({ mensagem: 'Usuário não encontrado.' });
  },
  atualizar: async (req, res) => {
    const [qtd] = await UsuarioService.atualizarDados(req.params.id, req.body);
    if (qtd) res.json({ mensagem: 'Cadastro atualizado.' });
    else res.status(404).json({ mensagem: 'Usuário não localizado para atualizar.' });
  },
  remover: async (req, res) => {
    const qtd = await UsuarioService.removerUsuario(req.params.id);
    if (qtd) res.status(200).json({ mensagem: 'Usuário excluído com sucesso.' });
    else res.status(404).json({ mensagem: 'Usuário não encontrado.' });
  }
};

export default usuarioController;
