import express from 'express';
import { getPermisForEmployee, addPermisToEmployee, removePermisFromEmployee } from './controller.js';

const router = express.Router();

router.get('/:id', getPermisForEmployee);
router.post('/', addPermisToEmployee);
//router.delete('/:id', removePermisFromEmployee);

export default router;
