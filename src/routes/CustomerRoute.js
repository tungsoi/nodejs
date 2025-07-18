const baseRoute = require('./BaseRoute');
const controller = require('../controller/CustomerController');
const {ROUTES} = require('../common/Routes');

module.exports = function (routeList) {
    return baseRoute(controller, ROUTES.CUSTOMER, routeList);
};