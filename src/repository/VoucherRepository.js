const {Voucher} = require('../client/database/PostgreSql');
const BaseRepository = require('./BaseRepository');

class VoucherRepository extends BaseRepository {
    constructor() {
        super(Voucher);
    }
}

module.exports = new VoucherRepository();