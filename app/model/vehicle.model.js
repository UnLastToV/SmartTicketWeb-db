// driver = user
module.exports = (sequelize, DataType) => {
    const Vehicle = sequelize.define("vehicle", {
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        vehicleLicensePlate: {
            type: DataType.STRING,
            allowNull: false,
        },
        vehicleProvince: {
            type: DataType.STRING,
            allowNull: false
        },
        carType: {
            type: DataType.STRING,
            allowNull: false
        },
        brand: {
            type: DataType.STRING,
            allownull: false
        }
    });
    return Vehicle;
};