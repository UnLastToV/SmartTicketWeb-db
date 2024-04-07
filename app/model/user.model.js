module.exports = (sequelize,DataType) => {
    const User = sequelize.define("user", {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataType.STRING,
            allownull: false,
        },
        lastname: {
            type: DataType.STRING,
            allownull: false,
        },
        birthday: {
            type: DataType.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        address: {
            type: DataType.STRING,
            allownull: false,
        },
        licensePlate:{
            type: DataType.STRING,
            allownull: false,
        }
    });
    return User;
};