const BaseDto = require('./BaseDto');
class OrderVoucherDto extends BaseDto {
    constructor(orderVoucher) {
        super(orderVoucher, ['updated_at', 'created_by', 'updated_by']);
        this.applied_amount = orderVoucher.applied_amount;
        this.code = orderVoucher.voucher.code;
        this.type = orderVoucher.voucher.type;
        this.type_label = orderVoucher.voucher.type_label;
        this.status = orderVoucher.voucher.status;
    }
}
module.exports = OrderVoucherDto;