const BaseDto = require('./BaseDto');
class UserDto extends BaseDto {
    constructor(user) {
        super(user, ['updatedAt', 'createdBy', 'updatedBy']);
        this.username = user.username;
        this.email = user.email;
        this.isActive = user.isActive;
    }
}
module.exports = UserDto;