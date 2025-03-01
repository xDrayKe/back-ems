import * as employeeGradeRepository from '../../database/repository/employeeGardeRepository.js';

export const getGradesForEmployee = async (req, res) => {
    try {
        const grades = await employeeGradeRepository.getGradesForEmployee(req.params.employeeId);
        res.status(200).json(grades);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const addGradeToEmployee = async (req, res) => {
    try {
        const { gradeId, dateObtention } = req.body;
        const { employeeId } = req.params;
        const record = await employeeGradeRepository.addGradeToEmployee(employeeId, gradeId, dateObtention);
        res.status(201).json(record);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const removeGradeFromEmployee = async (req, res) => {
    try {
        const { gradeId } = req.params;
        const { employeeId } = req.params;
        const result = await employeeGradeRepository.removeGradeFromEmployee(employeeId, gradeId);
        if (result) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Grade not found for this employee' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
