const axios = require('axios');

class AxiosClient {
    constructor(baseURL, defaultHeaders = {}) {
        this.client = axios.create({
            baseURL,
            headers: defaultHeaders
        });
    }

    async get(url, params = {}, config = {}) {
        return this.client.get(url, { params, ...config });
    }

    async post(url, data = {}, config = {}) {
        return this.client.post(url, data, config);
    }

    async put(url, data = {}, config = {}) {
        return this.client.put(url, data, config);
    }

    async delete(url, config = {}) {
        return this.client.delete(url, config);
    }
}

module.exports = AxiosClient;