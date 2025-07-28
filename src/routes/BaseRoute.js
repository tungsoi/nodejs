const express = require('express');

function baseRoute(controller, resourceName = '', routeList = [], allowedRoutes) {
    const router = express.Router();
    const allRoutes = {
        create: ['post', '/', controller.create],
        getAll: ['get', '/', controller.getAll],
        getById: ['get', '/:id', controller.getById],
        update: ['put', '/:id', controller.update],
        delete: ['delete', '/:id', controller.delete]
    };

    allowedRoutes = allowedRoutes?.length ? allowedRoutes : Object.keys(allRoutes);

    for (const route of allowedRoutes) {
        const [method, path, handler] = allRoutes[route] || [];
        if (method && path && handler) {
            router[method](path, handler);
            routeList.push({
                module: controller,
                method: method.toUpperCase(),
                path: `${resourceName}${path}`
            });
        }
    }

    return router;
}

module.exports = baseRoute;
