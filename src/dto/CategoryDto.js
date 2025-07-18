const BaseDto = require('./BaseDto');
class CategoryDto extends BaseDto {
    constructor(category) {
        super(category);
        this.name = category.name;
        this.status = category.status;
    }
}
module.exports = CategoryDto;