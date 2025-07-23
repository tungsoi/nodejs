const BaseDto = require('./BaseDto');
class ProductDto extends BaseDto {
    constructor(product) {
        super(product, ['updatedAt', 'createdBy', 'updatedBy']);
        this.name = product.name;
        this.description = product.description;
        this.price = product.price;
        this.category = product.category?.name;
    }
}
module.exports = ProductDto;