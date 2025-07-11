require('dotenv').config();
const { createClient } = require('redis');

class RedisClient {
    constructor() {
        const {
            REDIS_HOST = 'localhost',
            REDIS_PORT = 6379,
            REDIS_PASSWORD = ''
        } = process.env;

        this.client = createClient({
            socket: {
                host: REDIS_HOST,
                port: Number(REDIS_PORT)
            },
            password: REDIS_PASSWORD || undefined
        });

        this.client.connect()
            .then(() => {
                console.log('[Redis] Connected successfully');
            })
            .catch(err => {
                console.error('[Redis] Connection failed', err);
            });
    }

    getClient() {
        return this.client;
    }
}

module.exports = RedisClient;