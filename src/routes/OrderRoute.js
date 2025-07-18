const baseRoute = require('./BaseRoute');
const controller = require('../controller/OrderController');
const {ROUTES} = require('../common/Routes');

module.exports = function (routeList) {
    return baseRoute(controller, ROUTES.ORDER, routeList);
};