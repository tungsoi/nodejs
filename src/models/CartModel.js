const baseModel = require('./BaseModel');
const {TABLES} = require('../common/Tables');
require('dotenv').config();

module.exports = (sequelize, DataTypes) => {
    return baseModel(sequelize, DataTypes, TABLES.CART, {
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        guest_token: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, process.env.DATABASE_SCHEMA);
};