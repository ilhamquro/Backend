import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Package = db.define('package',{
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    desc: DataTypes.TEXT,
},{
    freezeTableName: true
});

export default Package;

(async()=>{
    await db.sync();
})();