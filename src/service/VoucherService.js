const BaseService = require('./BaseService');
const repository = require('../repository/VoucherRepository');
const validator = require('../validator/VoucherValidator');
const voucherDto = require('../dto/VoucherDto');
const {generateVoucher} = require('../utils/biz/OrderUtils');
const {STATUS, VOUCHER_TYPE} = require('../common/Constants');
const {equal} = require('../utils/global/StringUtils');

class VoucherService extends BaseService {
    constructor() {
        super(repository, validator, voucherDto);
    }

    async generate() {
        const maxAttempts = 10;
        for (let i = 0; i < maxAttempts; i++) {
            const code = generateVoucher();
            const exists = await this.repository.findOne(code);
            if (!exists) {
                return code;
            }
        }
    }

    async create(data) {
        this.validator.validateCreate(data);
        let {type, value} = data;
        if (equal(type, 'FREE_SHIP')) value = process.env.APP_DEFAULT_FREE_SHIP;
        const code = await this.generate();
        return await this.repository.create({
            code: code,
            type: type,
            value: value,
            status: STATUS.ACTIVE
        });
    }
}

module.exports = new VoucherService();