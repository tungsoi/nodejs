const BaseDto = require('./BaseDto');
class CartItemDto extends BaseDto {
    constructor(cardItem) {
        super(cardItem);
    }
}
module.exports = CartItemDto;