import * as employeeRepository from '../../database/repository/employeeRepository.js';

export const getAllEmployees = async (req, res) => {
    try {
        const employees = await employeeRepository.getAllEmployees();
        res.status(200).json(employees);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createEmployee = async (req, res) => {
    try {
        const employee = await employeeRepository.createEmployee(req.body);
        res.status(201).json(employee);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getEmployeeById = async (req, res) => {
    try {
        const employee = await employeeRepository.getEmployeeById(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateEmployee = async (req, res) => {
    try {
        const employee = await employeeRepository.getEmployeeById(req.body.id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        const updatedEmployee = await employeeRepository.updateEmployee(req.body.id, req.body);
        console.log("kfvkfdfdgk");
        console.log(updatedEmployee);
        res.status(200).json(updatedEmployee);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteEmployee = async (req, res) => {
    try {
        const employeeId = req.params.id; // Récupération de l'ID dans l'URL

        const employee = await employeeRepository.getEmployeeById(employeeId);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        await employeeRepository.deleteEmployee(employeeId);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};