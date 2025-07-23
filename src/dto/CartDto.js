const BaseDto = require('./BaseDto');
class CartDto extends BaseDto {
    constructor(cart) {
        super(cart);
        this.userId = cart.userId;
        this.fullName = cart.customer?.fullName;
        this.phone = cart.customer?.phone;
        this.address = cart.customer?.address;
        this.items = cart.items;
        this.totalPrice = cart.totalPrice;
        this.guestToken = cart.guestToken;
    }
}
module.exports = CartDto;