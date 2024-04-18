module.exports = (sequelize, DataType) => {
    const Police = sequelize.define("police", {
        
        policeID: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        peopleID: {
            type: DataType.STRING,
            allowNull: false
        },
        user: {
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
        position: {
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
        }
    });
    return Police;
};