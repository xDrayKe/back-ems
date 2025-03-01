import express from 'express';
import { getGradesForEmployee, addGradeToEmployee, removeGradeFromEmployee } from './controller.js';

const router = express.Router();

router.get('/', getGradesForEmployee); // GET grades d'un employé
router.post('/', addGradeToEmployee); // Ajouter un grade à un employé
router.delete('/:gradeId', removeGradeFromEmployee); // Supprimer un grade d'un employé

export default router;
