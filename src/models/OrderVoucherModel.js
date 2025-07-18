const baseModel = require('./BaseModel');
const {TABLES} = require('../common/Tables');
require('dotenv').config();

module.exports = (sequelize, DataTypes) => {
    return baseModel(sequelize, DataTypes, TABLES.ORDER_VOUCHER, {
        order_id: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        voucher_id: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        applied_amount: {
            type: DataTypes.NUMBER,
            allowNull: true,
        }
    }, process.env.DATABASE_SCHEMA);
};