class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        return this.model.create(data);
    }

    async getById(id) {
        return this.model.findByPk(id);
    }

    async update(id, data) {
        return this.model.update(data, {where: {id}});
    }

    async delete(id) {
        return this.model.destroy({where: {id}});
    }

    async getAll({limit = 10, order = [['id', 'DESC']], ...filters} = {}) {
        return this.model.findAll({limit, order, where: filters});
    }
}

module.exports = BaseRepository;