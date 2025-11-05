import { Router } from 'express';
import experienciaController from '../controllers/experienciaController.js';

const router = Router();

router.post('/', experienciaController.inserir);
router.get('/', experienciaController.listarTudo);
router.get('/:id', experienciaController.consultarPorId);
router.put('/:id', experienciaController.atualizar);
router.delete('/:id', experienciaController.remover);

export default router;
