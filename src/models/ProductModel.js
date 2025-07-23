const baseModel = require('./BaseModel');
const {TABLES} = require('../common/Tables');
require('dotenv').config();

module.exports = (sequelize, DataTypes) => {
    return baseModel(sequelize, DataTypes, TABLES.PRODUCT, {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.NUMBER,
            allowNull: true,
        },
        stock: {
            type: DataTypes.NUMBER,
            allowNull: true,
        },
        categoryId: {
            type: DataTypes.NUMBER,
            allowNull: true,
        }
    }, process.env.DATABASE_SCHEMA);
};