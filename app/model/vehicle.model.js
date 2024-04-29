// driver = user
module.exports = (sequelize, DataType) => {
    const Vehicle = sequelize.define("vehicle", {
        vehicleLicensePlate: {
            type: DataType.STRING,
        },
        vehicleProvince: {
            type: DataType.STRING,
        },
        carType: {
            type: DataType.STRING,
        },
        brand: {
            type: DataType.STRING,
        }
    });
    return Vehicle;
};