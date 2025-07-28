const BaseService = require('./BaseService');
const repository = require('../repository/OrderVoucherRepository');
const validator = require('../validator/OrderVoucherValidator');
const orderVoucherDto = require('../dto/OrderVoucherDto');
const {isEmpty} = require("../utils/global/ObjectUtils");
const voucherService = require('../service/VoucherService');

class OrderVoucherService extends BaseService {
    constructor() {
        super(repository, validator, orderVoucherDto);
    }

    async getByOrderId(id) {
        const data = await this.repository.getByOrderId(id);
        if (!isEmpty(data)) {
            for (const item of data) {
                item.voucher = await voucherService.getById(item.id);
            }
        }
        return this.convertToDto(this.baseDto, data);
    }

    async findOne(orderId, voucherId) {
        const data = await this.repository.findOne(orderId, voucherId);
        return this.convertToDto(this.baseDto, data);
    }
}

module.exports = new OrderVoucherService();