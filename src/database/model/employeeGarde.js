import { DataTypes } from 'sequelize';
import { db } from '../database.js';
import { Employee } from './employeeModel.js';
import { Garde } from './gardeModel.js';

export const EmployeeGarde = db.define('employee_gardes', {
    employee_id: {
        type: DataTypes.INTEGER,
        references: { model: Employee, key: 'id' },
        allowNull: false,
    },
    garde_id: {
        type: DataTypes.INTEGER,
        references: { model: Garde, key: 'id' },
        allowNull: false,
    },
}, { timestamps: false });


Employee.belongsToMany(Garde, { through: EmployeePermis, foreignKey: 'employee_id' });
Garde.belongsToMany(Employee, { through: EmployeePermis, foreignKey: 'garde_id' });

