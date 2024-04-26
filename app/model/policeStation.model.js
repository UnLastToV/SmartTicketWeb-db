// driver = user
module.exports = (sequelize, DataType) => {
    const PoliceStation = sequelize.define("policeStation", {
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        stationName: {
            type: DataType.STRING,
            allowNull: false,
        }
    });
    return PoliceStation;
};