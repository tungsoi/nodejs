const baseModel = require('./BaseModel');
const {TABLES} = require('../common/Tables');
require('dotenv').config();

module.exports = (sequelize, DataTypes) => {
    return baseModel(sequelize, DataTypes, TABLES.ORDER_SHIPPING, {
        order_id: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        shipping_method: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        shipping_address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        shipping_cost: {
            type: DataTypes.NUMERIC,
            allowNull: true,
        },
        tracking_number: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, process.env.DATABASE_SCHEMA);
};