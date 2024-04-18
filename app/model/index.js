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
db.report = require("./report.model")(sequelize, DataType);

//One to Many Relation
// report--user
db.user.hasMany(db.report, {
    onDelete: 'CASCADE'
});
db.report.belongsTo(db.user);

// // report--police
// db.police.hasMany(db.report, {
//     onDelete: 'CASCADE'
// });
// db.report.belongsTo(db.police);

module.exports = db;