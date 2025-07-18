const baseRoute = require('./BaseRoute');
const controller = require('../controller/CartItemController');
const {ROUTES} = require('../common/Routes');

module.exports = function (routeList) {
    return baseRoute(controller, ROUTES.CART_ITEM, routeList);
};