import express from 'express';
import { getAllEmployees, createEmployee, getEmployeeById, updateEmployee, deleteEmployee } from './controller.js';

const router = express.Router();

router.get('/', getAllEmployees); //recup tous les employer
router.post('/', createEmployee); //creer un employer
router.get('/:id', getEmployeeById); // recup un emplopyer en fonction de l'id
router.patch('/', updateEmployee); //change un employer en fonction de l'id
router.delete('/:id', deleteEmployee); //supprime un employer en fonction de l'id

// router.get('/employees/search', searchEmployees);// Rechercher des employés (ex: par nom, prénom, matricule, etc.)
// router.get('/employees/role/:role', getEmployeesByRole);// Optionnel: Récupérer les employés qui ont un certain rôle ou autre critère

export default router;
