const BaseDto = require('./BaseDto');
class CartDto extends BaseDto {
    constructor(card) {
        super(card);
    }
}
module.exports = CartDto;