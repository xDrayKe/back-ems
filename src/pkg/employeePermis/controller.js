import * as employeePermisRepository from '../../database/repository/employeePermisRepository.js';

export const getPermisForEmployee = async (req, res) => {
    try {
        const permis = await employeePermisRepository.getPermisForEmployee(req.params.id);
        res.status(200).json(permis);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const addPermisToEmployee = async (req, res) => {
    try {
        const record = await employeePermisRepository.addPermisToEmployee(req.body);
        res.status(201).json(record);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const removePermisFromEmployee = async (req, res) => {
    try {
        const { permisId } = req.params.id;
        const { employeeId } = req.params;
        const result = await employeePermisRepository.removePermisFromEmployee(employeeId, permisId);
        if (result) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Permis not found for this employee' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
