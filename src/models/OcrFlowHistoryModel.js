const baseModel = require('./baseModel');
const TABLE_NAME = 'ocr_flow_history';

module.exports = (sequelize, DataTypes) => {
    return baseModel(sequelize, DataTypes, TABLE_NAME, {
        app_code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};