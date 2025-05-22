const express = require('express');
const baseRoute = require('./BaseRoute');
const controller = require('../controller/OcrSdkHistoryController');
const router = express.Router();

router.use('/', baseRoute(controller));
router.get('/ecm/getContentStream/:documentId', controller.getContentStream);

module.exports = router;