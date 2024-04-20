module.exports = (sequelize, DataType) => {
    const DriveCard = sequelize.define("driveCard", {
        // for citizen peopleID = user
        cardID: {
            type: DataType.INTEGER,
            allowNull: false,
            autoIncrement: false,
            primaryKey: true
        },
        expireDate: {
            type: DataType.DATE,
            allowNull: false,
        },
        status: {
            type: DataType.STRING,
            allowNull: false,
        }
    });
    return DriveCard;
};