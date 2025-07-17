module.exports = (sequelize, DataTypes, tableName, attributes, schema) => {
    return sequelize.define(tableName, {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        ...attributes,
        created_at: {
            type: DataTypes.TIME,
            allowNull: true,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.TIME,
            allowNull: true,
            defaultValue: DataTypes.NOW,
        },
        created_by: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        updated_by: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        tableName: tableName,
        schema: schema,
        timestamps: false,
    });
};