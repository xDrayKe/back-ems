import { Absence } from '../model/absenceModel.js';

export const getAllAbsences = async () => await Absence.findAll();

export const createAbsence = async (absenceData) => await Absence.create(absenceData);

export const getAbsenceById = async (id) => await Absence.findByPk(id);

export const deleteAbsence = async (id) => {
    const absence = await Absence.findByPk(id);
    if (absence) {
        return await absence.destroy();
    }
    return null;
};

export const updateAbsence = async (id, absenceData) => {
    const absence = await Absence.findByPk(id);
    if (absence) {
        return await absence.update(absenceData);
    }
    return null;
};
