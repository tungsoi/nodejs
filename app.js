// require('./src/instance/MinioInstance');
// require('./src/instance/RedisInstance');
const express = require('express');
const {requestLogging} = require('./src/logging/RequestLogging');
const app = express();
const routeList = [];
const {ROUTES} = require('./src/common/Routes');

app.use(requestLogging);

const categoryRoutes = require('./src/routes/CategoryRoute')(routeList);

app.use(express.json());
app.use(ROUTES.CATEGORY, categoryRoutes);

module.exports = {
    app,
    routeList
}