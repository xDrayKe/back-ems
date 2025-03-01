import { DataTypes } from 'sequelize';
import { db } from '../database.js';

export const Absence = db.define('absences', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    employee_id: { type: DataTypes.INTEGER, allowNull: false },
    raison: { type: DataTypes.STRING(255), allowNull: false },
    dateDebut: { type: DataTypes.DATE, allowNull: false },
    dateFin: { type: DataTypes.DATE, allowNull: false },
}, {
    timestamps: false,
});