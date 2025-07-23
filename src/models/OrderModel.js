const baseModel = require('./BaseModel');
const {TABLES} = require('../common/Tables');
require('dotenv').config();

module.exports = (sequelize, DataTypes) => {
    return baseModel(sequelize, DataTypes, TABLES.ORDER, {
        customerId: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        totalPrice: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    }, process.env.DATABASE_SCHEMA);
};