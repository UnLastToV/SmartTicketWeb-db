//  ohter server
module.exports = (sequelize,DataType) => {
    const Vehicle = sequelize.define("vehicle", {
        vehicleLicenseId: {
            type: DataType.STRING,
            allownull: false,
            primaryKey: true
        },
        brand: {
            type: DataType.STRING,
            allownull: false,
        },
        plateColor : {
            type: DataType.STRING,
            allownull: false
        }
    });
    return Vehicle;
};