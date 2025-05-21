const {Sequelize, DataTypes} = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL;
const sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});

sequelize.authenticate()
    .then(() => {
        console.log(`Connect ${DATABASE_URL} successfully`);
    })
    .catch(err => {
        console.error('Unable to connect to the database: ${DATABASE_URL}', err);
    });

const OcrFlowHistory = require('../models/OcrFlowHistoryModel')(sequelize, DataTypes);

module.exports = {sequelize, OcrFlowHistory};