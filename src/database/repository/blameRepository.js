import { Blame } from '../model/blameModel.js';

export const getAllBlames = async () => await Blame.findAll();

export const createBlame = async (blameData) => await Blame.create(blameData);

export const getBlameById = async (id) => await Blame.findByPk(id);

export const deleteBlame = async (id) => {
    const blame = await Blame.findByPk(id);
    if (blame) {
        return await blame.destroy();
    }
    return null;
};

export const updateBlame = async (id, blameData) => {
    const blame = await Blame.findByPk(id);
    if (blame) {
        return await blame.update(blameData);
    }
    return null;
};
