require('dotenv').config();
const {Sequelize, DataTypes} = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL;
const DATABASE_NAME = process.env.DATABASE_NAME;
const sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
});

sequelize.authenticate()
    .then(() => {
        console.log(`[Database] ${DATABASE_NAME} successfully`);
    })
    .catch(err => {
        console.error(`[Database] ${DATABASE_NAME} failed`, err);
    });

const Category = require('../../models/CategoryModel')(sequelize, DataTypes);
const Voucher = require('../../models/VoucherModel')(sequelize, DataTypes);
module.exports = {sequelize, Category , Voucher };