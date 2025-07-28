const {OrderVoucher} = require('../client/database/PostgreSql');
const BaseRepository = require('./BaseRepository');

class OrderVoucherRepository extends BaseRepository {
    constructor() {
        super(OrderVoucher);
    }

    async getByOrderId(id) {
        return this.model.findAll({where: {order_id: id}});
    }

    async findOne(orderId, voucherId) {
        return this.model.findOne({where: {orderId, voucherId}});
    }
}

module.exports = new OrderVoucherRepository();