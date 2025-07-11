require('dotenv').config();
const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, '../logs');
const appName = process.env.APP_NAME;
const now = new Date();
const timeStr = now.toISOString().replace(/[:.]/g, '-').replace('T', '_').slice(0, 19);
const logFile = path.join(logDir, `${appName}-${timeStr}.log`);
const isLogging = process.env.APP_LOGGING;

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

function writeLog(line) {
    fs.appendFile(logFile, line + '\n', err => {
        if (err) console.error('Failed to write log:', err);
    });
}

function requestLogging(req, res, next) {
    const { method, originalUrl, body, query, params } = req;
    const logBase = {
        timestamp: new Date().toISOString(),
        level: "info",
        service: "ocr-service",
        method,
        url: originalUrl,
        params,
        query,
        body
    };
    const reqLog = JSON.stringify({ ...logBase, type: "request" });
    if (isLogging === "true") {
        console.log(reqLog);
    }
    writeLog(reqLog);

    const oldSend = res.send;
    res.send = function (data) {
        let responseBody;
        try {
            responseBody = typeof data === 'string' ? JSON.parse(data) : data;
        } catch {
            responseBody = data;
        }
        const resLog = JSON.stringify({
            ...logBase,
            type: "response",
            response: responseBody
        });
        if (isLogging === "true") {
            console.log(resLog);
        }
        writeLog(resLog);
        oldSend.apply(res, arguments);
    };
    next();
}

module.exports = {
    requestLogging
};