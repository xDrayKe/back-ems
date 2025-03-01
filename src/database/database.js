import { Sequelize } from "sequelize";
import process from 'process';

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mariadb',
    port: process.env.DB_PORT
});

db.sync();

export { db };
