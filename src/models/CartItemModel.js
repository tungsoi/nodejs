const baseModel = require('./BaseModel');
const {TABLES} = require('../common/Tables');
require('dotenv').config();

module.exports = (sequelize, DataTypes) => {
    return baseModel(sequelize, DataTypes, TABLES.CART_ITEM, {
        cart_id: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        product_id: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.NUMBER,
            allowNull: false,
        }
    }, process.env.DATABASE_SCHEMA);
};