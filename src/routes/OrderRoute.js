const baseRoute = require('./BaseRoute');
const controller = require('../controller/OrderController');
const {ROUTES} = require('../common/Routes');

module.exports = function (routeList) {
    const router = baseRoute(controller, ROUTES.ORDER, routeList);

    const getOrderByCustomerId = '/:customerId';
    router.get(getOrderByCustomerId, controller.getOrderByCustomerId);
    routeList.push({
        module: controller,
        method: 'GET',
        path: ROUTES.ORDER + getOrderByCustomerId
    });

    return router;
};