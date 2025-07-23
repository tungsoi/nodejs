const baseModel = require('./BaseModel');
const {TABLES} = require('../common/Tables');
require('dotenv').config();

module.exports = (sequelize, DataTypes) => {
    return baseModel(sequelize, DataTypes, TABLES.ORDER_VOUCHER, {
        orderId: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        voucherId: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        appliedAmount: {
            type: DataTypes.NUMBER,
            allowNull: true,
        }
    }, process.env.DATABASE_SCHEMA);
};