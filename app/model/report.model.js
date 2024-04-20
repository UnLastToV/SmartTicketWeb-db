module.exports = (sequelize, DataType) => {
    const Report = sequelize.define("report", {
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        addDate: {
            type: DataType.DATE,
            allowNull: false
        },
        outDate: {
            type: DataType.DATE,
            allowNull: false
        }
    });
    return Report;
};