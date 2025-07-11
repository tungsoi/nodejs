require('./src/instance/MinioInstance');
require('./src/instance/RedisInstance');
const express = require('express');
const {requestLogging} = require('./src/logging/RequestLogging');
const app = express();
const routeList = [];
const {ROUTES} = require('./src/common/Routes');

app.use(express.json());
app.use(requestLogging);

const partnerRoutes = require('./src/routes/PartnerRoute')(routeList);
const positionRoutes = require('./src/routes/PositionRoute')(routeList);

app.use(express.json());
app.use(ROUTES.LOS_STAFFS.PARTNER, partnerRoutes);
app.use(ROUTES.LOS_STAFFS.POSITION, positionRoutes);

module.exports = {
    app,
    routeList
}