const baseRoute = require('./BaseRoute');
const controller = require('../controller/CartController');
const {ROUTES} = require('../common/Routes');

module.exports = function (routeList) {
    const router = baseRoute(controller, ROUTES.CART, routeList);

    const getCartByUserId = '/getByUserId/:userId';
    router.get(getCartByUserId, controller.getCartByUserId);
    routeList.push({
        module: controller,
        method: 'GET',
        path: ROUTES.CART + getCartByUserId
    });

    return router;
};