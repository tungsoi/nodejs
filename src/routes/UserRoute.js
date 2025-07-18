const baseRoute = require('./BaseRoute');
const controller = require('../controller/UserController');
const {ROUTES} = require('../common/Routes');

module.exports = function (routeList) {
    return baseRoute(controller, ROUTES.USER, routeList);
};