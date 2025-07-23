const BaseDto = require('./BaseDto');
class OrderItemDto extends BaseDto {
    constructor(orderItem) {
        super(orderItem, ['updatedAt', 'createdBy', 'updatedBy']);
        this.quantity = orderItem.quantity;
        this.price = orderItem.price;
        this.productId = orderItem.productId;
        this.name = orderItem.product?.name;
        this.description = orderItem.product?.description;
        this.realPrice = orderItem.product?.price;
        this.category = orderItem.product?.category;
    }
}
module.exports = OrderItemDto;