const {Sequelize, DataTypes} = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL;
const DATABASE_NAME = process.env.DATABASE_NAME;
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
        console.log(`[Database] ${DATABASE_NAME} successfully`);
    })
    .catch(err => {
        console.error(`[Database] ${DATABASE_NAME} failed`, err);
    });

const OcrFlowHistory = require('../../models/OcrFlowHistoryModel')(sequelize, DataTypes);
const OcrSdkHistory = require('../../models/OcrSdkHistoryModel')(sequelize, DataTypes);

module.exports = {
    sequelize,
    OcrFlowHistory,
    OcrSdkHistory
};