// driver = user
module.exports = (sequelize, DataType) => {
    const User = sequelize.define("user", {
        // for citizen peopleID = user
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        peopleID: {
            type: DataType.STRING,
            allowNull: false,
        },
        passwordID: {
            type: DataType.STRING,
            allowNull: false
        },
        name: {
            type: DataType.STRING,
            allownull: false,
        },
        lastname: {
            type: DataType.STRING,
            allownull: false,
        },
        age: {
            type: DataType.INTEGER,
            allownull: false,
        },
        birthDay: {
            type: DataType.DATE,
            allowNull: false
        },
        address: {
            type: DataType.STRING,
            allownull: false,
        },
        phoneNumber: {
            type: DataType.INTEGER,
            allowNull: false
        },
        status: {
            type: DataType.STRING,
            allowNull: false
        }
    });
    return User;
};