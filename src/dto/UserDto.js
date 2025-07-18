const BaseDto = require('./BaseDto');
class UserDto extends BaseDto {
    constructor(user) {
        super(user);
    }
}
module.exports = UserDto;