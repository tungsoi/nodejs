const BaseDto = require('./BaseDto');
class OrderShippingDto extends BaseDto {
    constructor(orderShipping) {
        super(orderShipping, ['updatedAt', 'createdBy', 'updatedBy']);
        this.method = orderShipping.method;
        this.address = orderShipping.address;
        this.cost = orderShipping.cost;
        this.trackingNumber = orderShipping.trackingNumber;
    }
}
module.exports = OrderShippingDto;