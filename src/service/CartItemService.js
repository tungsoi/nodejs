const BaseService = require('./BaseService');
const repository = require('../repository/CartItemRepository');
const validator = require('../validator/CartItemValidator');
const cartItemDto = require('../dto/CartItemDto');
const globalUtils = require("../utils/global");
const bizUtils = require("../utils/biz");

class CartItemService extends BaseService {
    constructor() {
        super(repository, validator, cartItemDto);
    }

    async getByCartId(cartId) {
        this.validator.validateGetByCartId(cartId);
        const data = await this.repository.getByCartId(cartId);
        if (globalUtils.object.isEmpty(data)) return null;
        await bizUtils.cart.attachProductToItems(data);
        return this.convertToDto(this.baseDto, data);
    }

    async findOne(cartId, productId) {
        const data = await this.repository.findOne(cartId, productId);
        return this.convertToDto(this.baseDto, data);
    }
}

module.exports = new CartItemService();