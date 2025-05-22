const express = require('express');

function baseRoute(controller, path = '/') {
    const router = express.Router();

    router.post(path, controller.create);
    router.get(`${path}:id`, controller.getById);
    router.put(`${path}:id`, controller.update);
    router.delete(`${path}:id`, controller.delete);
    router.get(path, controller.getAll);

    return router;
}

module.exports = baseRoute;