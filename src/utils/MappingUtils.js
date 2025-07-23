const {isEmpty} = require ('./ObjectUtils');

const mapToDto = (dto, data) => {
    if (isEmpty(data)) {
        return null;
    }
    if (Array.isArray(data)) {
        return data.map(item => new dto(item));
    }
    return new dto(data);
}
module.exports = {
    mapToDto,
};