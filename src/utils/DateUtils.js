const pad = (n) => n < 10 ? '0' + n : n;

const format = (date, formatStr = 'YYYY-MM-DD') => {
    if (!(date instanceof Date) || isNaN(date)) return '';
    const YYYY = date.getFullYear();
    const MM = pad(date.getMonth() + 1);
    const DD = pad(date.getDate());
    const HH = pad(date.getHours());
    const mm = pad(date.getMinutes());
    const ss = pad(date.getSeconds());
    return formatStr
        .replace('YYYY', YYYY)
        .replace('MM', MM)
        .replace('DD', DD)
        .replace('HH', HH)
        .replace('mm', mm)
        .replace('ss', ss);
};

const parse = (str) => {
    const d = new Date(str);
    return isNaN(d) ? null : d;
};

const now = () => new Date();

const addDays = (date, days) => {
    const d = new Date(date);
    d.setDate(d.getDate() + days);
    return d;
};

const subtractDays = (date, days) => addDays(date, -days);

const diffInDays = (date1, date2) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return Math.floor((d1 - d2) / (1000 * 60 * 60 * 24));
};

const isValid = (date) => date instanceof Date && !isNaN(date);

const isBefore = (date1, date2) => new Date(date1) < new Date(date2);

const isAfter = (date1, date2) => new Date(date1) > new Date(date2);

const isSameDay = (date1, date2) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();
};

const startOfDay = (date) => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d;
};

const endOfDay = (date) => {
    const d = new Date(date);
    d.setHours(23, 59, 59, 999);
    return d;
};

const toISOString = (date) => {
    if (!(date instanceof Date) || isNaN(date)) return '';
    return date.toISOString();
};

module.exports = {
    format,
    parse,
    now,
    addDays,
    subtractDays,
    diffInDays,
    isValid,
    isBefore,
    isAfter,
    isSameDay,
    startOfDay,
    endOfDay,
    toISOString,
};