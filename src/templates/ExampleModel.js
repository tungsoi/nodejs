const baseModel = require('./BaseModel');
const {TABLES} = require('../common/Tables');
require('dotenv').config();

module.exports = (sequelize, DataTypes) => {
    return baseModel(sequelize, DataTypes, TABLES.TABLE_NAME, {
        // TODO
    }, process.env.DATABASE_SCHEMA);
};