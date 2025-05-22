const baseModel = require('./BaseModel');
const {TABLES} = require('../common/Tables');
const TABLE_NAME = TABLES.OCR_FLOW_HISTORY;

module.exports = (sequelize, DataTypes) => {
    return baseModel(sequelize, DataTypes, TABLE_NAME, {
        app_code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        step_code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        client_channel: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        retry: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        open_sdk_time: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        imgs: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        data_sign: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        data_base_64: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        log_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        server_version: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        object_raw: {
            type: DataTypes.JSONB,
            allowNull: false,
        },
        challenge_code: {
            type: DataTypes.STRING,
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