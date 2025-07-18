const baseRoute = require('./BaseRoute');
const controller = require('../controller/OrderShippingController');
const {ROUTES} = require('../common/Routes');

module.exports = function (routeList) {
    return baseRoute(controller, ROUTES.ORDER_SHIPPING, routeList);
};