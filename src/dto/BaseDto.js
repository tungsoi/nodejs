class BaseDto {
    constructor(entity, excludedFields = []) {
        const allFields = ['id', 'createdAt', 'createdBy', 'updatedAt', 'updatedBy'];
        for (const field of allFields) {
            if (!excludedFields.includes(field)) {
                this[field] = entity[field];
            }
        }
    }
}

module.exports = BaseDto;