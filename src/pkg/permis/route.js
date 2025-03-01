import express from 'express';
import { getAllPermis, createPermis, getPermisById, updatePermis, deletePermis } from './controller.js';

const router = express.Router();

router.get('/', getAllPermis);
router.post('/', createPermis);
router.get('/:id', getPermisById);
router.patch('/', updatePermis);
router.delete('/:id', deletePermis);

export default router;