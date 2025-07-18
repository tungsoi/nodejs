const baseRoute = require('./BaseRoute');
const controller = require('../controller/VoucherController');
const {ROUTES} = require('../common/Routes');

module.exports = function (routeList) {
    return baseRoute(controller, ROUTES.VOUCHER, routeList);
};