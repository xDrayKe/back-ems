import * as permisRepository from '../../database/repository/permisRepository.js';

export const getAllPermis = async (req, res) => {
    try {
        const permis = await permisRepository.getAllPermis();
        res.status(200).json(permis);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createPermis = async (req, res) => {
    try {
        const permis = await permisRepository.createPermis(req.body);
        res.status(201).json(permis);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getPermisById = async (req, res) => {
    try {
        const permis = await permisRepository.getPermisById(req.params.id);
        if (!permis) {
            return res.status(404).json({ message: 'Permis not found' });
        }
        res.status(200).json(permis);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updatePermis = async (req, res) => {
    try {
        const permis = await permisRepository.getPermisById(req.body.id);
        if (!permis) {
            return res.status(404).json({ message: 'Permis not found' });
        }
        const updatedPermis = await permisRepository.updatePermis(req.body.id, req.body);
        res.status(200).json(updatedPermis);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deletePermis = async (req, res) => {
    try {
        const permisId = req.params.id;
        const permis = await permisRepository.getPermisById(permisId);
        if (!permis) {
            return res.status(404).json({ message: 'Permis not found' });
        }
        await permisRepository.deletePermis(permisId);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};