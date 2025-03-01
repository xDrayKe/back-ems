import { Employee } from '../model/employeeModel.js';

export const getAllEmployees = async () => await Employee.findAll();

export const createEmployee = async (employeeData) => await Employee.create(employeeData);

export const getEmployeeById = async (id) => await Employee.findByPk(id);

export const deleteEmployee = async (id) => {
    const employee = await Employee.findByPk(id);
    if (!employee) {
        return null;
    }
    await employee.destroy();
    return "Employee supprimé !";
};

export const updateEmployee = async (id, employeeData) => {
    const employee = await Employee.findByPk(id);
    if (!employee) {
        return null;
    }
    await Employee.update(employeeData, { where: { id } });
    return await Employee.findByPk(id); // Récupérer et retourner l'objet mis à jour
};
