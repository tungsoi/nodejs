const BaseDto = require('./BaseDto');
class OrderDto extends BaseDto {
    constructor(order) {
        super(order);
        this.total_price = order.total_price;
        this.status = order.status;
        this.customer = order.customer;
        this.vouchers = order.vouchers;
        this.shipping = order.shipping;
        this.items = order.items;
    }
}
module.exports = OrderDto;