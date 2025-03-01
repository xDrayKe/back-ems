import * as blameRepository from '../../database/repository/blameRepository.js';

export const getAllBlames = async (req, res) => {
    try {
        const blames = await blameRepository.getAllBlames();
        res.status(200).json(blames);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createBlame = async (req, res) => {
    try {
        const blame = await blameRepository.createBlame(req.body);
        res.status(201).json(blame);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getBlameById = async (req, res) => {
    try {
        const blame = await blameRepository.getBlameById(req.params.id);
        if (!blame) {
            return res.status(404).json({ message: 'Blame not found' });
        }
        res.status(200).json(blame);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateBlame = async (req, res) => {
    try {
        const blame = await blameRepository.getBlameById(req.params.id);
        if (!blame) {
            return res.status(404).json({ message: 'Blame not found' });
        }
        const updatedBlame = await blameRepository.updateBlame(req.params.id, req.body);
        res.status(200).json(updatedBlame);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteBlame = async (req, res) => {
    try {
        const blame = await blameRepository.getBlameById(req.params.id);
        if (!blame) {
            return res.status(404).json({ message: 'Blame not found' });
        }
        await blameRepository.deleteBlame(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
