const RESPONSE_MESSAGES = {
    SUCCESS: 'Success',
    RECORD_CREATED: 'Record created',
    RECORD_UPDATED: 'Record updated successfully',
    RECORD_DELETED: 'Record deleted successfully',
    RECORD_NOT_FOUND: 'Record not found',
    INTERNAL_ERROR: 'Internal server error',
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

module.exports = {
    RESPONSE_MESSAGES,
    RESPONSE_STATUS
};