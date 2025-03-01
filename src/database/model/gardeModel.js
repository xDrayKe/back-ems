import { DataTypes } from 'sequelize';
import { db } from '../database.js';

export const Grade = db.define('grades', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    description: { type: DataTypes.STRING(100), allowNull: false },
    paye: { type: DataTypes.INTEGER, allowNull: false },
}, { timestamps: false });
