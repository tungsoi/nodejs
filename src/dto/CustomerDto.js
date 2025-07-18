const BaseDto = require('./BaseDto');
class CustomerDto extends BaseDto {
    constructor(customer) {
        super(customer, ['created_at', 'updated_at', 'created_by', 'updated_by']);
        this.full_name = customer.full_name;
        this.phone = customer.phone;
        this.address = customer.address;
    }
}
module.exports = CustomerDto;