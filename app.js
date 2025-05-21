// app.js
const express = require('express');
const app = express();

const ocrFlowHistoryRoutes = require('./src/routes/ocrFlowHistoryRoutes');

app.use(express.json());
app.use('/api/ocr-flow-history', ocrFlowHistoryRoutes);

module.exports = app;