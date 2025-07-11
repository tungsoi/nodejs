const baseRoute = require('./BaseRoute');
const controller = require('../controller/PartnerController');
const {ROUTES} = require('../common/Routes');
module.exports = baseRoute(controller);

module.exports = function(routeList) {
    return baseRoute(controller, ROUTES.LOS_STAFFS.PARTNER, routeList);
};