const express = require('express');
const {requestLogging} = require('./src/logging/RequestLogging');
const app = express();
const routeList = [];
const {ROUTES} = require('./src/common/Routes');

app.use(requestLogging);

const moduleRoutes = require('./src/routes/ModuleRoute');
routeList.push({
    method: 'POST',
    path: `/api/module/create`
});

const categoryRoutes = require('./src/routes/CategoryRoute')(routeList);
const voucherRoutes = require('./src/routes/VoucherRoute')(routeList);
app.use(express.json());
app.use(ROUTES.MODULE, moduleRoutes);
app.use(ROUTES.CATEGORY, categoryRoutes);
app.use(ROUTES.VOUCHER, voucherRoutes);
module.exports = {
    app,
    routeList
}