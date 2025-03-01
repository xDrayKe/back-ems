import { DataTypes } from 'sequelize';
import { db } from '../database.js';
import { Employee } from './employeeModel.js';
import { Permis } from './permisModel.js';

export const EmployeePermis = db.define('employee_permis', {
    employee_id: {
        type: DataTypes.INTEGER,
        references: { model: Employee, key: 'id' },
        allowNull: false,
    },
    permis_id: {
        type: DataTypes.INTEGER,
        references: { model: Permis, key: 'id' },
        allowNull: false,
    },
}, { timestamps: false });


Employee.belongsToMany(Permis, { through: EmployeePermis, foreignKey: 'employee_id' });
Permis.belongsToMany(Employee, { through: EmployeePermis, foreignKey: 'permis_id' });

