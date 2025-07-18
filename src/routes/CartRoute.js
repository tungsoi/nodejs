const baseRoute = require('./BaseRoute');
const controller = require('../controller/CartController');
const {ROUTES} = require('../common/Routes');

module.exports = function (routeList) {
    return baseRoute(controller, ROUTES.CART, routeList);
};