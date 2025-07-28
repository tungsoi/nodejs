const redisInstance = require('../instance/RedisInstance');

class RedisService {
    constructor() {
        this.client = redisInstance.getClient();
    }

    async set(key, value) {
        const payload = typeof value === 'string' ? value : JSON.stringify(value);
        await this.client.set(key, payload);
    }

    async get(key) {
        return await this.client.get(key);
    }

    async getJson(key) {
        const data = await this.get(key);
        try {
            return JSON.parse(data);
        } catch {
            return null;
        }
    }

    async del(key) {
        return await this.client.del(key);
    }
}

module.exports = new RedisService();
