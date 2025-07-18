const BaseService = require('./BaseService');
const repository = require('../repository/ProductRepository');
const validator = require('../validator/ProductValidator');
const productDto = require('../dto/ProductDto');
const {mapToDto} = require("../utils/MappingUtils");
const categoryService = require('../service/CategoryService');

class ProductService extends BaseService {
    constructor() {
        super(repository, validator, productDto);
    }

    async getById(id) {
        this.validator.validateGetById(id);
        const product = await this.repository.getById(id);
        product.category = await categoryService.getById(product.category_id);
        return mapToDto(this.baseDto, product);
    }

}

module.exports = new ProductService();