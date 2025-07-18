const mapToDto = (dto, data) => {
    if (Array.isArray(data)) {
        return data.map(item => new dto(item));
    }
    return new dto(data);
}
module.exports = {
    mapToDto,
};