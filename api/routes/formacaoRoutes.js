import { Router } from 'express';
import formacaoController from '../controllers/formacaoController.js';

const router = Router();

router.post('/', formacaoController.inserir);
router.get('/', formacaoController.listarTudo);
router.get('/:id', formacaoController.consultarPorId);
router.put('/:id', formacaoController.atualizar);
router.delete('/:id', formacaoController.remover);

export default router;
