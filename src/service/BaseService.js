const {mapToDto} = require('../utils/MappingUtils');

class BaseService {
    constructor(repository, validator, baseDto) {
        this.repository = repository;
        this.validator = validator;
        this.baseDto = baseDto;
    }

    async create(data) {
        this.validator.validateCreate(data);
        return this.repository.create(data);
    }

    async getById(id) {
        this.validator.validateGetById(id);
        const data = await this.repository.getById(id);
        return mapToDto(this.baseDto, data);
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