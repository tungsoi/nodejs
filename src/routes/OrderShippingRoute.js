const baseRoute = require('./BaseRoute');
const controller = require('../controller/OrderShippingController');
const {ROUTES} = require('../common/Routes');

module.exports = function (routeList) {
    const router = baseRoute(controller, ROUTES.ORDER_SHIPPING, routeList);

    const getByOrderId = '/getByOrderId/:id';
    router.get(getByOrderId, controller.getByOrderId);
    routeList.push({
        module: controller,
        method: 'GET',
        path: ROUTES.ORDER_SHIPPING + getByOrderId
    });

    return router;
};