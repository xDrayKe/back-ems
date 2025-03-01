import express from 'express';
import { getAllAbsences, createAbsence, getAbsenceById, updateAbsence, deleteAbsence } from './controller.js';

const router = express.Router();

router.get('/', getAllAbsences);
router.post('/', createAbsence);
router.get('/:id', getAbsenceById);
router.patch('/:id', updateAbsence);
router.delete('/:id', deleteAbsence);

export default router;
