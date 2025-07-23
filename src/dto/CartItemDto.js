const BaseDto = require('./BaseDto');
class CartItemDto extends BaseDto {
    constructor(cartItem) {
        super(cartItem);
        this.productId = cartItem.productId;
        this.quantity = cartItem.quantity;
        this.productName = cartItem.product?.name;
        this.productDescription = cartItem.product?.description;
        this.productPrice = cartItem.product?.price;
        this.productCategory = cartItem.product?.category;
        this.itemPrice = this.quantity * this.productPrice;
    }
}
module.exports = CartItemDto;