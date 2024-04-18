module.exports = (sequelize, DataType) => {
    const Report = sequelize.define("report",{
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        date: {
            type: DataType.DATE,
            allowNull: false
        }
    });
    return Report;
};