const baseRoute = require('./BaseRoute');
const controller = require('../controller/ExampleController');
const {ROUTES} = require('../common/Routes');

module.exports = function (routeList) {
    return baseRoute(controller, ROUTES.ROUTE_NAME, routeList);
};