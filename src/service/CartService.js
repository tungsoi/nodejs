const BaseService = require('./BaseService');
const repository = require('../repository/CartRepository');
const validator = require('../validator/CartValidator');
const cartDto = require('../dto/CartDto');

const bizUtils = require('../utils/biz');
const globalUtils = require('../utils/global');

class CartService extends BaseService {
    constructor() {
        super(repository, validator, cartDto);
    }

    async create(data) {
        this.validator.validateCreate(data);
        const {items = [], guestToken} = data;
        const cart = await this.getCartByGuestToken(guestToken) ?? await this.repository.create({guestToken});
        await bizUtils.cart.attachItemsToCart(items, cart.id);
        return this.getById(cart.id);
    }

    async getById(id) {
        this.validator.validateGetById(id);
        return this.getEnrichedCartData(() => this.repository.getById(id));
    }

    async getCartByUserId(userId) {
        this.validator.validateGetCartByUserId(userId);
        return this.getEnrichedCartData(() => this.repository.getCartByUserId(userId));
    }

    async getCartByGuestToken(guestToken) {
        this.validator.validateGetCartByGuestToken(guestToken);
        return this.getEnrichedCartData(() => this.repository.getCartByGuestToken(guestToken));
    }

    async getEnrichedCartData(fetchFn) {
        const data = await fetchFn();
        if (globalUtils.object.isEmpty(data)) return null;
        const enriched = await bizUtils.cart.enrichCartData(data);
        return this.convertToDto(this.baseDto, enriched);
    }
}

module.exports = new CartService();