const dayjs = require('dayjs');
module.exports = (sequelize, DataTypes, tableName, attributes, schema) => {
    return sequelize.define(tableName, {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        ...attributes,
        createdAt: {
            type: DataTypes.TIME,
            allowNull: true,
            defaultValue: DataTypes.NOW,
            get() {
                const val = this.getDataValue('createdAt');
                return val ? dayjs(val).format('HH:mm DD-MM-YYYY') : null;
            }
        },
        updatedAt: {
            type: DataTypes.TIME,
            allowNull: true,
            defaultValue: DataTypes.NOW,
            get() {
                const val = this.getDataValue('createdAt');
                return val ? dayjs(val).format('HH:mm DD-MM-YYYY') : null;
            }
        },
        createdBy: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        updatedBy: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        tableName: tableName,
        schema: schema,
        timestamps: false,
        underscored: true
    });
};