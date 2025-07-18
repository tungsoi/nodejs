const BaseDto = require('./BaseDto');
class OrderShippingDto extends BaseDto {
    constructor(orderShipping) {
        super(orderShipping, ['updated_at', 'created_by', 'updated_by']);
        this.method = orderShipping.method;
        this.address = orderShipping.address;
        this.cost = orderShipping.cost;
        this.tracking_number = orderShipping.tracking_number;
    }
}
module.exports = OrderShippingDto;