const baseModel = require('./BaseModel');
const {TABLES} = require('../common/Tables');
require('dotenv').config();

module.exports = (sequelize, DataTypes) => {
    return baseModel(sequelize, DataTypes, TABLES.CART, {
        userId: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        guestToken: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    }, process.env.DATABASE_SCHEMA);
};