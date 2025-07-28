const {Voucher} = require('../client/database/PostgreSql');
const BaseRepository = require('./BaseRepository');

class VoucherRepository extends BaseRepository {
    constructor() {
        super(Voucher);
    }

    async findOne(code) {
        return await this.model.findOne({where: {code: code}});
    }
}

module.exports = new VoucherRepository();