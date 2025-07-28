const RESPONSE_MESSAGE = {
    SUCCESS: 'Success',
    RECORD_CREATED: 'Created',
    RECORD_UPDATED: 'Updated',
    RECORD_DELETED: 'Deleted',
    RECORD_NOT_FOUND: 'Not found',
    INTERNAL_ERROR: 'Internal server error',
    BAD_REQUEST: 'Bad request',
};

const RESPONSE_STATUS = {
    SUCCESS: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
}

const VOUCHER_TYPE = {
    DISCOUNT: "Giảm giá trực tiếp",
    FREE_SHIP: "Miễn phí giao hàng",
}

const ORDER_STATUS = {
    DRAFF: "Nháp",
    NEW: "Đơn hàng mới",
    STAKED: "Đã cọc",
    SHIPPING: "Đang vận chuyển",
    IN_DEBT: "Còn nợ",
    DONE: "Hoàn thành"
}

const STATUS = {
    ACTIVE: 1,
    INACTIVE: 2
}

module.exports = {
    RESPONSE_MESSAGE,
    RESPONSE_STATUS,
    VOUCHER_TYPE,
    ORDER_STATUS,
    STATUS
};