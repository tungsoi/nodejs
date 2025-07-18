const BaseDto = require('./BaseDto');
class ProductDto extends BaseDto {
    constructor(product) {
        super(product, ['updated_at', 'created_by', 'updated_by']);
        this.name = product.name;
        this.description = product.description;
        this.price = product.price;
        this.category = product.category.name;
    }
}
module.exports = ProductDto;