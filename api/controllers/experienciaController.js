// controllers/experienciaController.js
import ExperienciaService from '../services/experienciaService.js';

const experienciaController = {
  inserir: async (req, res) => {
    const novaExperiencia = await ExperienciaService.registrarNova(req.body);
    res.status(201).json({
      mensagem: 'Experiência cadastrada com sucesso!',
      dados: novaExperiencia
    });
  },
  listarTudo: async (req, res) => {
    const experiencias = await ExperienciaService.listarTudo();
    res.json({
      total: experiencias.length,
      experiencias
    });
  },
  consultarPorId: async (req, res) => {
    const experiencia = await ExperienciaService.encontrarUnica(req.params.id);
    if (experiencia)
      res.json(experiencia);
    else
      res.status(404).json({ mensagem: 'Experiência não encontrada.' });
  },
  atualizar: async (req, res) => {
    const [qtdAlterada] = await ExperienciaService.modificar(req.params.id, req.body);
    if (qtdAlterada)
      res.json({ mensagem: 'Experiência atualizada com sucesso.' });
    else
      res.status(404).json({ mensagem: 'Nenhuma experiência encontrada para editar.' });
  },
  remover: async (req, res) => {
    const deletada = await ExperienciaService.remover(req.params.id);
    if (deletada)
      res.status(200).json({ mensagem: 'Experiência excluída permanentemente.' });
    else
      res.status(404).json({ mensagem: 'Experiência não encontrada para exclusão.' });
  }
};

export default experienciaController;
