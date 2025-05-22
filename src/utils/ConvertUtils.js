const toNumber = (value, defaultValue = 0) => {
    const n = Number(value);
    return isNaN(n) ? defaultValue : n;
};

const toInt = (value, defaultValue = 0) => {
    const n = parseInt(value, 10);
    return isNaN(n) ? defaultValue : n;
};

const toFloat = (value, defaultValue = 0.0) => {
    const n = parseFloat(value);
    return isNaN(n) ? defaultValue : n;
};

const toString = (value, defaultValue = '') => {
    if (value === null || value === undefined) return defaultValue;
    return String(value);
};

const toBoolean = (value) => {
    if (typeof value === 'boolean') return value;
    if (typeof value === 'string') return value.toLowerCase() === 'true' || value === '1';
    return Boolean(value);
};

const toDate = (value, defaultValue = null) => {
    const d = new Date(value);
    return isNaN(d.getTime()) ? defaultValue : d;
};

const toArray = (value) => {
    if (Array.isArray(value)) return value;
    if (value === null || value === undefined) return [];
    return [value];
};

const toObject = (value) => {
    if (typeof value === 'object' && value !== null) return value;
    try {
        return JSON.parse(value);
    } catch {
        return {};
    }
};

const toJson = (value, defaultValue = '{}') => {
    try {
        return JSON.stringify(value);
    } catch {
        return defaultValue;
    }
};

const fromJson = (value, defaultValue = {}) => {
    try {
        return JSON.parse(value);
    } catch {
        return defaultValue;
    }
};

const toBase64 = (value) => {
    if (typeof value !== 'string') value = String(value);
    return Buffer.from(value).toString('base64');
};

const fromBase64 = (value) => {
    return Buffer.from(value, 'base64').toString('utf-8');
};

module.exports = {
    toNumber,
    toInt,
    toFloat,
    toString,
    toBoolean,
    toDate,
    toArray,
    toObject,
    toJson,
    fromJson,
    toBase64,
    fromBase64,
};