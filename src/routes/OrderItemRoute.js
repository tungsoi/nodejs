const baseRoute = require('./BaseRoute');
const controller = require('../controller/OrderItemController');
const {ROUTES} = require('../common/Routes');

module.exports = function (routeList) {
    return baseRoute(controller, ROUTES.ORDER_ITEM, routeList);
};