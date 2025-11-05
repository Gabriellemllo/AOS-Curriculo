import HabilidadeService from '../services/habilidadeService.js';

const habilidadeController = {
  inserir: async (req, res) => {
    const nova = await HabilidadeService.adicionar(req.body);
    res.status(201).json({ mensagem: 'Habilidade cadastrada!', dados: nova });
  },
  listarTudo: async (req, res) => {
    const lista = await HabilidadeService.listarTodas();
    res.json({ total: lista.length, lista });
  },
  consultarPorId: async (req, res) => {
    const resp = await HabilidadeService.buscarPorId(req.params.id);
    if (resp) res.json(resp);
    else res.status(404).json({ mensagem: 'Habilidade não encontrada.' });
  },
  atualizar: async (req, res) => {
    const [qtd] = await HabilidadeService.atualizar(req.params.id, req.body);
    if (qtd) res.json({ mensagem: 'Habilidade atualizada.' });
    else res.status(404).json({ mensagem: 'Habilidade não localizada para atualizar.' });
  },
  remover: async (req, res) => {
    const qtd = await HabilidadeService.remover(req.params.id);
    if (qtd) res.status(200).json({ mensagem: 'Habilidade excluída com sucesso.' });
    else res.status(404).json({ mensagem: 'Habilidade não encontrada.' });
  }
};

export default habilidadeController;
