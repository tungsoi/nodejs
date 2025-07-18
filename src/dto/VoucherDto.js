const BaseDto = require('./BaseDto');
class VoucherDto extends BaseDto {
    constructor(voucher) {
        super(voucher, ['created_at', 'updated_at', 'created_by', 'updated_by']);
        this.code = voucher.code;
        this.type = voucher.type;
        this.status = voucher.status;
    }
}
module.exports = VoucherDto;