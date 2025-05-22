require('./src/client/MinioInstance');
const express = require('express');
const {requestLogging} = require('./src/logging/RequestLogging');
const app = express();
const { ROUTES } = require('./src/common/Routes');

app.use(express.json());
app.use(requestLogging);

const ocrFlowHistoryRoutes = require('./src/routes/OcrFlowHistoryRoute');
const ocrSdkHistoryRoutes = require('./src/routes/OcrSdkHistoryRoute');

app.use(express.json());
app.use('/api' + ROUTES.OCR_FLOW_HISTORY, ocrFlowHistoryRoutes);
app.use('/api' + ROUTES.OCR_SDK_HISTORY, ocrSdkHistoryRoutes);

module.exports = app;