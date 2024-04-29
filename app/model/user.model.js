// driver = user
module.exports = (sequelize, DataType) => {
    const User = sequelize.define("user", {
        // for citizen peopleID = user
        peopleID: {
            type: DataType.STRING,
            allowNull: false,
        },
        password: {
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
            type: DataType.STRING,
            allowNull: false
        },
        status: {
            type: DataType.STRING,
            allowNull: false
        }
    });
    return User;
};