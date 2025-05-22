module.exports = (sequelize, DataTypes, tableName, attributes) => {
    return sequelize.define(tableName, {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        ...attributes,
        created_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        last_updated_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        created_by: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_updated_by: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        tableName,
        timestamps: false,
    });
};