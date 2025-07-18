const BaseDto = require('./BaseDto');
const {ORDER_STATUS} = require('../common/Constants');
class OrderDto extends BaseDto {
    constructor(order) {
        super(order);
        this.code = 'SG-' + order.id.toString().padStart(6, '0');
        this.total_price = order.total_price;
        this.status = order.status;
        this.status_label = ORDER_STATUS[order.status];
        this.customer = order.customer;
        this.vouchers = order.vouchers;
        this.ships = order.ships;
        this.items = order.items;
    }
}
module.exports = OrderDto;