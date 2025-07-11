module.exports = (sequelize, DataTypes, tableName, attributes, schema) => {
    return sequelize.define(tableName, {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        ...attributes,
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        created_by: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        updated_by: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        tableName: tableName,
        schema: schema,
        timestamps: false,
    });
};