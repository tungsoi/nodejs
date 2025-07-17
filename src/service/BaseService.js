const {validator} = require("sequelize/lib/utils/validator-extras");

class BaseService {
    constructor(repository, validator) {
        this.repository = repository;
        this.validator = validator;
    }

    async create(data) {
        this.validator.validateCreate(data);
        return this.repository.create(data);
    }

    async getById(id) {
        this.validator.validateGetById(id);
        return this.repository.getById(id);
    }

    async update(id, data) {
        this.validator.validateUpdate(id, data);
        return this.repository.update(id, data);
    }

    async delete(id) {
        this.validator.validateDelete(id);
        return this.repository.delete(id);
    }

    async getAll(options) {
        return this.repository.getAll(options);
    }
}

module.exports = BaseService;