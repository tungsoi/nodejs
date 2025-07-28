const redisService = require('../service/RedisService');

class BaseService {
    constructor(repository, validator, baseDto) {
        this.repository = repository;
        this.validator = validator;
        this.baseDto = baseDto;
        this.cachePrefix = this.baseDto?.name || 'data';
    }

    async create(data) {
        this.validator.validateCreate(data);
        const result = await this.repository.create(data);
        await this.clearCache();
        return result;
    }

    async getById(id) {
        this.validator.validateGetById(id);
        const cacheKey = `${this.cachePrefix}:id:${id}`;
        const cached = await redisService.get(cacheKey);
        if (cached) {
            return JSON.parse(cached);
        }
        const data = await this.repository.getById(id);
        const dto = this.convertToDto(this.baseDto, data);
        await redisService.set(cacheKey, JSON.stringify(dto));
        return dto;
    }

    async update(id, data) {
        this.validator.validateUpdate(id, data);
        const result = await this.repository.update(id, data);
        await this.clearCache(id);
        return result;
    }

    async delete(id) {
        this.validator.validateDelete(id);
        const result = await this.repository.delete(id);
        await this.clearCache(id);
        return result;
    }

    async getAll(options) {
        const cacheKey = `${this.cachePrefix}:all`;
        const cached = await redisService.get(cacheKey);
        if (cached) {
            return JSON.parse(cached);
        }
        const data = await this.repository.getAll(options);
        const dto = this.convertToDto(this.baseDto, data);
        await redisService.set(cacheKey, JSON.stringify(dto));
        return dto;
    }

    async clearCache(id = null) {
        if (id) {
            await redisService.del(`${this.cachePrefix}:id:${id}`);
        }
        await redisService.del(`${this.cachePrefix}:all`);
    }

    convertToDto = (dto, data) => {
        if (Array.isArray(data)) {
            return data.map(item => new dto(item));
        }
        return new dto(data);
    }
}

module.exports = BaseService;
