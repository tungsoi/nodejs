require('dotenv').config();
const {app, routeList} = require('./app');
const http = require('http');
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || 'MyApp';
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`${APP_NAME} run on http://localhost:${PORT}`);
    console.log('=== ROUTES ===');
    console.table(routeList);
});
