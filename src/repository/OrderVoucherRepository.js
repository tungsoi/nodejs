const {OrderVoucher} = require('../client/database/PostgreSql');
const BaseRepository = require('./BaseRepository');

class OrderVoucherRepository extends BaseRepository {
    constructor() {
        super(OrderVoucher);
    }
}

module.exports = new OrderVoucherRepository();