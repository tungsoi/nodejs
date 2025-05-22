class BaseService {
    constructor(repository, convertUtils) {
        this.repository = repository;
        this.convertUtils = convertUtils;
    }

    async create(data) {
        return this.repository.create(data);
    }

    async getById(id) {
        id = this.convertUtils ? this.convertUtils.toInt(id) : id;
        return this.repository.getById(id);
    }

    async update(id, data) {
        id = this.convertUtils ? this.convertUtils.toInt(id) : id;
        return this.repository.update(id, data);
    }

    async delete(id) {
        id = this.convertUtils ? this.convertUtils.toInt(id) : id;
        return this.repository.delete(id);
    }

    async getAll(options) {
        return this.repository.getAll(options);
    }
}

module.exports = BaseService;