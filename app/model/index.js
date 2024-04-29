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
db.role = require("./user.model")(sequelize, DataType);
db.driveCard = require("./driveCard.model")(sequelize, DataType);
db.police = require("./police.model")(sequelize, DataType);
db.report = require("./report.model")(sequelize, DataType);
db.vehicle = require("./vehicle.model")(sequelize, DataType);
db.policeSatation = require("./policeStation.model")(sequelize, DataType);


//  Driver <---> User
db.user.hasOne(db.setting, {
    onDelete: 'CASCADE'
});
db.setting.belongsTo(db.employee);

// Role<---> User
// One to Many Relation
db.role.belongsToMany(db.user, {
    through: "user_roles"
});
db.user.belongsToMany(db.role, {
    through: "user_roles"
});



module.exports = db;