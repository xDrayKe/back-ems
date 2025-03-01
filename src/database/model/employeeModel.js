import { DataTypes } from 'sequelize';
import { db } from '../database.js';

export const Employee = db.define('Employees', {
    prenom: { type: DataTypes.STRING, allowNull: false },
    nom: { type: DataTypes.STRING, allowNull: false },
    matricule: { type: DataTypes.STRING, unique: true, allowNull: false },
    dateArriver: { type: DataTypes.DATE, allowNull: false },
    carteIdentite: { type: DataTypes.STRING, allowNull: false },
    discordID: { type: DataTypes.STRING, allowNull: true }
}, {
    timestamps: false,
});
