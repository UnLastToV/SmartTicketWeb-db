module.exports = (sequelize, DataType) => {
    const Police = sequelize.define("police", {
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        peopleID: {
            type: DataType.STRING,
            allowNull: false
        },
        user: {
            type: DataType.STRING,
            allowNull: false
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
        rank: {
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
    return Police;
};