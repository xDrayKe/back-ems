import { EmployeeGrade } from '../model/employeeGarde.js';
import { Grade } from '../model/gradeModel.js';

export const getGradesForEmployee = async (employeeId) => {
    return EmployeeGrade.findAll({
        where: { employee_id: employeeId },
        include: { model: Grade },
    });
};

export const addGradeToEmployee = async (employeeId, gradeId, dateObtention) => {
    return EmployeeGrade.create({ employee_id: employeeId, grade_id: gradeId, date_obtention: dateObtention });
};

export const removeGradeFromEmployee = async (employeeId, gradeId) => {
    const record = await EmployeeGrade.findOne({
        where: { employee_id: employeeId, grade_id: gradeId },
    });
    if (record) {
        return record.destroy();
    }
    return null;
};
