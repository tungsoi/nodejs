const BaseDto = require('./BaseDto');
class CustomerDto extends BaseDto {
    constructor(customer) {
        super(customer, ['createdAt', 'updatedAt', 'createdBy', 'updatedBy']);
        this.fullName = customer.fullName;
        this.phone = customer.phone;
        this.address = customer.address;
    }
}
module.exports = CustomerDto;