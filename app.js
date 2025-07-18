const express = require('express');
const {requestLogging} = require('./src/logging/RequestLogging');
const app = express();
const routeList = [];
const {ROUTES} = require('./src/common/Routes');

app.use(requestLogging);

const moduleRoutes = require('./src/routes/ModuleRoute');
routeList.push({
    module: 'ModuleController',
    method: 'POST',
    path: `/api/module/create`
});

const categoryRoutes = require('./src/routes/CategoryRoute')(routeList);
const userRoutes = require('./src/routes/UserRoute')(routeList);
const customerRoutes = require('./src/routes/CustomerRoute')(routeList);
const orderShippingRoutes = require('./src/routes/OrderShippingRoute')(routeList);
const orderVoucherRoutes = require('./src/routes/OrderVoucherRoute')(routeList);
const orderItemRoutes = require('./src/routes/OrderItemRoute')(routeList);
const orderRoutes = require('./src/routes/OrderRoute')(routeList);
const productRoutes = require('./src/routes/ProductRoute')(routeList);
const voucherRoutes = require('./src/routes/VoucherRoute')(routeList);

app.use(express.json());
app.use(ROUTES.MODULE, moduleRoutes);
app.use(ROUTES.CATEGORY, categoryRoutes);
app.use(ROUTES.USER, userRoutes);
app.use(ROUTES.CUSTOMER, customerRoutes);
app.use(ROUTES.ORDER_SHIPPING, orderShippingRoutes);
app.use(ROUTES.ORDER_VOUCHER, orderVoucherRoutes);
app.use(ROUTES.ORDER_ITEM, orderItemRoutes);
app.use(ROUTES.ORDER, orderRoutes);
app.use(ROUTES.PRODUCT, productRoutes);
app.use(ROUTES.VOUCHER, voucherRoutes);

module.exports = {
    app,
    routeList
}