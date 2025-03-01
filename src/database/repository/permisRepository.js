import { Permis } from '../model/permisModel.js';

export const getAllPermis = async () => await Permis.findAll();

export const createPermis = async (permisData) => await Permis.create(permisData);

export const getPermisById = async (id) => await Permis.findByPk(id);

export const deletePermis = async (id) => {
    const permis = await Permis.findByPk(id);
    if (!permis) {
        return null;
    }
    await permis.destroy();
    return 'Permis supprimé !';
};

export const updatePermis = async (id, permisData) => {
    const permis = await Permis.findByPk(id);
    if (!permis) {
        return null;
    }
    await Permis.update(permisData, { where: { id } });
    return await Permis.findByPk(id);
};
