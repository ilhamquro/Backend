import {Sequelize} from "sequelize";

const db = new Sequelize('gymapp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;