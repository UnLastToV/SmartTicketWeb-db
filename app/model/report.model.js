module.exports = (sequelize, DataType) => {
    const Report = sequelize.define("report", {
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        issueDate: {
            type: DataType.DATE,
            allowNull: false
        },
        expiryDate: {
            type: DataType.DATE,
            allowNull: false
        }
    });
    return Report;
};