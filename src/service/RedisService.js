const redisInstance = require('../instance/RedisInstance');

class RedisService {
    constructor() {
        this.client = redisInstance.getClient();
    }

    async put(key, value, expireSeconds = null) {
        if (expireSeconds) {
            await this.client.set(key, value, {EX: expireSeconds});
        } else {
            await this.client.set(key, value);
        }
    }

    async get(key) {
        return await this.client.get(key);
    }
}

module.exports = new RedisService();