const baseRoute = require('./BaseRoute');
const controller = require('../controller/OrderVoucherController');
const {ROUTES} = require('../common/Routes');

module.exports = function (routeList) {
    return baseRoute(controller, ROUTES.ORDER_VOUCHER, routeList);
};