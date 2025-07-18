const {OrderVoucher} = require('../client/database/PostgreSql');
const BaseRepository = require('./BaseRepository');

class OrderVoucherRepository extends BaseRepository {
    constructor() {
        super(OrderVoucher);
    }

    async getByOrderId(id) {
        return this.model.findAll({where: {order_id: id}});
    }
}

module.exports = new OrderVoucherRepository();