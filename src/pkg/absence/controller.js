import * as absenceRepository from '../../database/repository/absenceRepository.js';

export const getAllAbsences = async (req, res) => {
    try {
        const absences = await absenceRepository.getAllAbsences();
        res.status(200).json(absences);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createAbsence = async (req, res) => {
    try {
        const absence = await absenceRepository.createAbsence(req.body);
        res.status(201).json(absence);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getAbsenceById = async (req, res) => {
    try {
        const absence = await absenceRepository.getAbsenceById(req.params.id);
        if (!absence) {
            return res.status(404).json({ message: 'Absence not found' });
        }
        res.status(200).json(absence);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateAbsence = async (req, res) => {
    try {
        const absence = await absenceRepository.getAbsenceById(req.params.id);
        if (!absence) {
            return res.status(404).json({ message: 'Absence not found' });
        }
        const updatedAbsence = await absenceRepository.updateAbsence(req.params.id, req.body);
        res.status(200).json(updatedAbsence);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteAbsence = async (req, res) => {
    try {
        const absence = await absenceRepository.getAbsenceById(req.params.id);
        if (!absence) {
            return res.status(404).json({ message: 'Absence not found' });
        }
        await absenceRepository.deleteAbsence(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
