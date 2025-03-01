import express from 'express';
import { getAllBlames, createBlame, getBlameById, updateBlame, deleteBlame } from './controller.js';

const router = express.Router();

router.get('/', getAllBlames);
router.post('/', createBlame);
router.get('/:id', getBlameById);
router.patch('/:id', updateBlame);
router.delete('/:id', deleteBlame);

export default router;
