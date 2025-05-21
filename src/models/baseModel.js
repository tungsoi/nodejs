module.exports = (sequelize, DataTypes, tableName, attributes) => {
    return sequelize.define(tableName, {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        ...attributes,
    }, {
        tableName,
        timestamps: false,
    });
};