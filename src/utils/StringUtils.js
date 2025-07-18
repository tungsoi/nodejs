const capitalize = (str) =>
    typeof str === 'string' && str.length
        ? str.charAt(0).toUpperCase() + str.slice(1)
        : str;

const camelCase = (str) =>
    str
        .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
        .replace(/^(.)/, (m) => m.toLowerCase());

const kebabCase = (str) =>
    str &&
    str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase();

const snakeCase = (str) =>
    str &&
    str
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/[\s-]+/g, '_')
        .toLowerCase();

const trim = (str) => (typeof str === 'string' ? str.trim() : str);

const pad = (str, length, char = ' ') =>
    str.length >= length
        ? str
        : str + char.repeat(length - str.length);

const reverse = (str) =>
    typeof str === 'string' ? str.split('').reverse().join('') : str;

const isEmpty = (str) =>
    !str || (typeof str === 'string' && str.trim().length === 0);

const startsWith = (str, search) =>
    typeof str === 'string' && str.startsWith(search);

const endsWith = (str, search) =>
    typeof str === 'string' && str.endsWith(search);

const contains = (str, search) =>
    typeof str === 'string' && str.includes(search);

const repeat = (str, times) =>
    typeof str === 'string' ? str.repeat(times) : str;

const truncate = (str, length, ending = '...') =>
    typeof str === 'string' && str.length > length
        ? str.substring(0, length - ending.length) + ending
        : str;

const equal = (str1, str2) => {
    return (str1 === str2) || (str1?.toString() === str2?.toString());
}

module.exports = {
    capitalize,
    camelCase,
    kebabCase,
    snakeCase,
    trim,
    pad,
    reverse,
    isEmpty,
    startsWith,
    endsWith,
    contains,
    repeat,
    truncate,
    equal
};