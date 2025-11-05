import FormacaoService from '../services/formacaoService.js';

const formacaoController = {
  inserir: async (req, res) => {
    const nova = await FormacaoService.adicionar(req.body);
    res.status(201).json({ mensagem: 'Formação cadastrada!', dados: nova });
  },
  listarTudo: async (req, res) => {
    const lista = await FormacaoService.listarTodas();
    res.json({ total: lista.length, lista });
  },
  consultarPorId: async (req, res) => {
    const resp = await FormacaoService.buscarPorId(req.params.id);
    if (resp) res.json(resp);
    else res.status(404).json({ mensagem: 'Formação não encontrada.' });
  },
  atualizar: async (req, res) => {
    const [qtd] = await FormacaoService.atualizar(req.params.id, req.body);
    if (qtd) res.json({ mensagem: 'Formação atualizada.' });
    else res.status(404).json({ mensagem: 'Formação não localizada para atualizar.' });
  },
  remover: async (req, res) => {
    const qtd = await FormacaoService.remover(req.params.id);
    if (qtd) res.status(200).json({ mensagem: 'Formação excluída com sucesso.' });
    else res.status(404).json({ mensagem: 'Formação não encontrada.' });
  }
};

export default formacaoController;
