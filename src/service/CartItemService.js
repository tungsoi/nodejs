const BaseService = require('./BaseService');
const repository = require('../repository/CartItemRepository');
const validator = require('../validator/CartItemValidator');
const cartItemDto = require('../dto/CartItemDto');
const {mapToDto} = require("../utils/MappingUtils");
const {isEmpty} = require("../utils/ObjectUtils");
const productService = require("../service/ProductService");

class CartItemService extends BaseService {
    constructor() {
        super(repository, validator, cartItemDto);
    }

    async getByCartId(cartId) {
        this.validator.validateGetByCartId(cartId);
        const data = await this.repository.getByCartId(cartId);
        if (isEmpty(data)) return null;
        for (const item of data) {
            item.product = await productService.getById(item.productId);
        }
        return mapToDto(this.baseDto, data);
    }

    async findOne(cartId, productId) {
        const data = await this.repository.findOne(cartId, productId);
        return mapToDto(this.baseDto, data);
    }
}

module.exports = new CartItemService();