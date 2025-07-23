const BaseDto = require('./BaseDto');
const {VOUCHER_TYPE} = require('../common/Constants');
class VoucherDto extends BaseDto {
    constructor(voucher) {
        super(voucher, ['createdAt', 'updatedAt', 'createdBy', 'updatedBy']);
        this.code = voucher.code;
        this.type = voucher.type;
        this.typeLabel = VOUCHER_TYPE[voucher.type];
        this.status = voucher.status;
    }
}
module.exports = VoucherDto;