const baseModel = require('./BaseModel');
const {TABLES} = require('../common/Tables');
require('dotenv').config();

module.exports = (sequelize, DataTypes) => {
    return baseModel(sequelize, DataTypes, TABLES.ORDER_ITEM, {
        orderId: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        productId: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        price: {
            type: DataTypes.NUMBER,
            allowNull: false,
        }
    }, process.env.DATABASE_SCHEMA);
};