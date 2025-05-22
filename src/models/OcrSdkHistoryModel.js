const baseModel = require('./BaseModel');
const {TABLES} = require('../common/Tables');
const TABLE_NAME = TABLES.OCR_SDK_HISTORY;

module.exports = (sequelize, DataTypes) => {
    return baseModel(sequelize, DataTypes, TABLE_NAME, {
        app_code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        open_sdk_time: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        partner_code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        data_source: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};