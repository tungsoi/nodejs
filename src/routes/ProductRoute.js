const baseRoute = require('./BaseRoute');
const controller = require('../controller/ProductController');
const {ROUTES} = require('../common/Routes');

module.exports = function (routeList) {
    return baseRoute(controller, ROUTES.PRODUCT, routeList);
};