class BaseDto {
    constructor(entity, excludedFields = []) {
        const allFields = ['id', 'created_at', 'created_by', 'updated_at', 'updated_by'];
        for (const field of allFields) {
            if (!excludedFields.includes(field)) {
                this[field] = entity[field];
            }
        }
    }
}

module.exports = BaseDto;