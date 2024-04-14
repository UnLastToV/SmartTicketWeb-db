const config = require("../config/db")

const DataType = require("sequelize");
const sequelize = new DataType(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db = {};
db.DataType = DataType;
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize, DataType);
db.police = require("./police.model")(sequelize, DataType);

module.exports = db;