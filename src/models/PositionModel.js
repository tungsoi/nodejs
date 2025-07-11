const baseModel = require('./BaseModel');
const {TABLES} = require('../common/Tables');
require('dotenv').config();

module.exports = (sequelize, DataTypes) => {
    return baseModel(sequelize, DataTypes, TABLES.LOS_STAFFS.POSITION, {
        channel: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        position_code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        position_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        position_level: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        position_title: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, process.env.DATABASE_SCHEMA);
};