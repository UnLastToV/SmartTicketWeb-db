module.exports = (sequelize, DataType) => {
    const db = require('../model');
    const User = db.user;
    const Report = db.report;

    const User_Report = sequelize.define("User_Report", {
        userId: {
            type: DataType.INTEGER,
            references: {
                model: User,
                key: 'peopleID'
            }
        },
        reportID: {
            type: DataType.INTEGER,
            model: Report,
            key: 'id'
        }
    });
    return User_Report;
};