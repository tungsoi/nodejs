const BaseDto = require('./BaseDto');
class OrderVoucherDto extends BaseDto {
    constructor(orderVoucher) {
        super(orderVoucher, ['updatedAt', 'createdBy', 'updatedBy']);
        this.appliedAmount = orderVoucher.appliedAmount;
        this.code = orderVoucher.voucher?.code;
        this.type = orderVoucher.voucher?.type;
        this.typeLabel = orderVoucher.voucher?.typeLabel;
        this.status = orderVoucher.voucher?.status;
    }
}
module.exports = OrderVoucherDto;