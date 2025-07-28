class BaseManager {
    constructor(service) {
        this.service = service;
    }

    async create(data) {
        return this.service.create(data);
    }

    async getById(id) {
        return await this.service.getById(id);
    }

    async update(id, data) {
        return await this.service.update(id, data);
    }

    async delete(id) {
        return await this.service.delete(id);
    }

    async getAll(options) {
        return await this.service.getAll(options);
    }
}

module.exports = BaseManager;