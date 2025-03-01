import { DataTypes } from 'sequelize';
import { db } from '../database.js';

export const Permis = db.define('permis', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    description: { type: DataTypes.STRING(50), allowNull: false },
}, { timestamps: false });
