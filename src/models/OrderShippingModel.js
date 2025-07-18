const baseModel = require('./BaseModel');
const {TABLES} = require('../common/Tables');
require('dotenv').config();

module.exports = (sequelize, DataTypes) => {
    return baseModel(sequelize, DataTypes, TABLES.ORDER_SHIPPING, {
        order_id: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        method: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        cost: {
            type: DataTypes.NUMBER,
            allowNull: true,
        },
        tracking_number: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, process.env.DATABASE_SCHEMA);
};