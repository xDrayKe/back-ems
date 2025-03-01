import { DataTypes } from 'sequelize';
import { db } from '../database.js';
import { Employee } from './employeeModel.js';

export const Blame = db.define('blames', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    raison: { type: DataTypes.STRING(255), allowNull: false },
    emis_par: { type: DataTypes.INTEGER, allowNull: false },
    pour_qui: { type: DataTypes.INTEGER, allowNull: false },
    date_creation: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { timestamps: false });

Blame.belongsTo(Employee, { foreignKey: 'emis_par' });
Blame.belongsTo(Employee, { foreignKey: 'pour_qui' }); 