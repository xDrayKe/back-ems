import { EmployeePermis } from '../model/employeePermisModel.js';
import { Permis } from '../model/permisModel.js';

export const getPermisForEmployee = async (employeeId) => {
    return EmployeePermis.findAll({
        where: { employee_id: employeeId },
    });
};

export const addPermisToEmployee = async (permisData) => {
    return EmployeePermis.create(permisData);
};

export const removePermisFromEmployee = async (employeeId, permisId) => {
    const record = await EmployeePermis.findOne({
        where: { employee_id: employeeId, permis_id: permisId },
    });
    if (record) {
        return record.destroy();
    }
    return null;
};
