const BaseService = require('./BaseService');
const repository = require('../repository/CartRepository');
const validator = require('../validator/CartValidator');
const cartDto = require('../dto/CartDto');
const {mapToDto} = require("../utils/MappingUtils");
const cartItemService = require('../service/CartItemService');
const {isEmpty} = require('../utils/ObjectUtils');
const {mappingElementData} = require("../utils/CartUtils");

class CartService extends BaseService {
    constructor() {
        super(repository, validator, cartDto);
    }

    async create(data) {
        this.validator.validateCreate(data);
        const { items = [], guestToken } = data;
        if (!guestToken) throw new Error('Missing guest token');
        let cart = await this.getCartByGuestToken(guestToken);
        if (!cart) {
            cart = await this.repository.create({ guestToken });
        }
        const cartId = cart.id;
        for (const { productId, quantity } of items) {
            if (!productId || quantity == null) continue;
            const existingItem = await cartItemService.findOne(cartId, productId);
            if (quantity <= 0 && existingItem) {
                await cartItemService.delete(existingItem.id);
            } else if (existingItem) {
                await cartItemService.update(existingItem.id, { quantity });
            } else if (quantity > 0) {
                await cartItemService.create({ cartId, productId, quantity });
            }
        }
        const updatedCart = await this.getById(cartId);
        return mapToDto(this.baseDto, updatedCart);
    };

    async getCartByUserId(userId) {
        this.validator.validateGetCartByUserId(userId);
        let data = await this.repository.getCartByUserId(userId);
        if (isEmpty(data)) return null;
        data = await mappingElementData(data);
        return mapToDto(this.baseDto, data);
    }

    async getAll(options) {
        let data = await this.repository.getCartByGuestToken(options.guestToken);
        if (isEmpty(data)) return null;
        data = await mappingElementData(data);
        return mapToDto(this.baseDto, data);
    }

    async getCartByGuestToken(guestToken) {
        this.validator.validateGetCartByGuestToken(guestToken);
        let data = await this.repository.getCartByGuestToken(guestToken);
        if (isEmpty(data)) return null;
        data = await mappingElementData(data);
        return mapToDto(this.baseDto, data);
    }

    async getById(id) {
        this.validator.validateGetById(id);
        let data = await this.repository.getById(id);
        if (isEmpty(data)) return null;
        data = await mappingElementData(data);
        return mapToDto(this.baseDto, data);
    }
}

module.exports = new CartService();