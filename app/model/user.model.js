// driver = user
module.exports = (sequelize,DataType) => {
    const User = sequelize.define("user", {
        peopleID: {
            type: DataType.INTEGER,
            autoIncrement: false,
            allowNull: false,
            primaryKey: true
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
        birthDay: {
            type: DataType.DATE,
            allowNull: false
        },
        address: {
            type: DataType.STRING,
            allownull: false,
        }
    });
    return User;
};