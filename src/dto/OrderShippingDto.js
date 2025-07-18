const BaseDto = require('./BaseDto');
class OrderShippingDto extends BaseDto {
    constructor(orderShipping) {
        super(orderShipping, ['updated_at', 'created_by', 'updated_by']);
        this.shipping_method = orderShipping.shipping_method;
        this.shipping_address = orderShipping.shipping_address;
        this.shipping_cost = orderShipping.shipping_cost;
        this.tracking_number = orderShipping.tracking_number;
    }
}
module.exports = OrderShippingDto;