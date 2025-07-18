const express = require('express');

function baseRoute(controller, resourceName = '', routeList = []) {
    const router = express.Router();

    function addRoute(method, path) {
        routeList.push({
            module: controller,
            method: method.toUpperCase(),
            path: `${resourceName}${path}`
        });
    }

    router.post('/', controller.create);
    addRoute('post', '/');

    router.get('/', controller.getAll);
    addRoute('get', '/');

    router.get('/:id', controller.getById);
    addRoute('get', '/:id');

    router.put('/:id', controller.update);
    addRoute('put', '/:id');

    router.delete('/:id', controller.delete);
    addRoute('delete', '/:id');

    return router;
}

module.exports = baseRoute;