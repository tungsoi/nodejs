const {User} = require('../client/database/PostgreSql');
const BaseRepository = require('./BaseRepository');

class UserRepository extends BaseRepository {
    constructor() {
        super(User);
    }
}

module.exports = new UserRepository();