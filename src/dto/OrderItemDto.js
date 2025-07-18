const BaseDto = require('./BaseDto');
class OrderItemDto extends BaseDto {
    constructor(orderItem) {
        super(orderItem, ['updated_at', 'created_by', 'updated_by']);
        this.quantity = orderItem.quantity;
        this.price = orderItem.price;
        this.product_id = orderItem.product_id;
        this.name = orderItem.product.name;
        this.description = orderItem.product.description;
        this.price_raw = orderItem.product.price;
        this.category = orderItem.product.category;
    }
}
module.exports = OrderItemDto;