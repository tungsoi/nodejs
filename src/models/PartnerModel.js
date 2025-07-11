const baseModel = require('./BaseModel');
const {TABLES} = require('../common/Tables');
require('dotenv').config();

module.exports = (sequelize, DataTypes) => {
    return baseModel(sequelize, DataTypes, TABLES.LOS_STAFFS.PARTNER, {
        channel: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        partner_code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        partner_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        business_line: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        account_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        account_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bank_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tax_code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        disbursement_channel: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, process.env.DATABASE_SCHEMA);
};