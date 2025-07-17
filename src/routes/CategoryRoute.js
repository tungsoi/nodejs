const baseRoute = require('./BaseRoute');
const controller = require('../controller/CategoryController');
const {ROUTES} = require('../common/Routes');
module.exports = baseRoute(controller);

module.exports = function (routeList) {
    return baseRoute(controller, ROUTES.CATEGORY, routeList);
};