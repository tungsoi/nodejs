const BaseService = require('./BaseService');
const repository = require('../repository/OrderItemRepository');
const validator = require('../validator/OrderItemValidator');
const orderItemDto = require('../dto/OrderItemDto');
const {isEmpty} = require("../utils/ObjectUtils");
const productService = require("./ProductService");
const {mapToDto} = require("../utils/MappingUtils");

class OrderItemService extends BaseService {
    constructor() {
        super(repository, validator, orderItemDto);
    }

    async getByOrderId(id) {
        const data = await this.repository.getByOrderId(id);
        if (!isEmpty(data)) {
            for (const item of data) {
                item.product = await productService.getById(item.product_id);
            }
        }
        return mapToDto(this.baseDto, data);
    }
}

module.exports = new OrderItemService();