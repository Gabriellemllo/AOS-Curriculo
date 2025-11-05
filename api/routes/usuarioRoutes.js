import { Router } from 'express';
import usuarioController from '../controllers/usuarioController.js';

const router = Router();

router.post('/', usuarioController.inserir);
router.get('/', usuarioController.listarTudo);
router.get('/:id', usuarioController.consultarPorId);
router.put('/:id', usuarioController.atualizar);
router.delete('/:id', usuarioController.remover);

export default router;
