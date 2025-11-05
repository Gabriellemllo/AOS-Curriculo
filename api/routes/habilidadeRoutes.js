import { Router } from 'express';
import habilidadeController from '../controllers/habilidadeController.js';

const router = Router();

router.post('/', habilidadeController.inserir);
router.get('/', habilidadeController.listarTudo);
router.get('/:id', habilidadeController.consultarPorId);
router.put('/:id', habilidadeController.atualizar);
router.delete('/:id', habilidadeController.remover);

export default router;
