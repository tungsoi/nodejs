const fs = require('fs');
const path = require('path');

const exists = (filePath) => fs.existsSync(filePath);

const readFile = (filePath, encoding = 'utf8') =>
    fs.readFileSync(filePath, encoding);

const writeFile = (filePath, data, encoding = 'utf8') =>
    fs.writeFileSync(filePath, data, {encoding});

const appendFile = (filePath, data, encoding = 'utf8') =>
    fs.appendFileSync(filePath, data, {encoding});

const deleteFile = (filePath) => {
    if (exists(filePath)) fs.unlinkSync(filePath);
};

const copyFile = (src, dest) =>
    fs.copyFileSync(src, dest);

const moveFile = (src, dest) => {
    copyFile(src, dest);
    deleteFile(src);
};

const getFileName = (filePath) => path.basename(filePath);

const getDirName = (filePath) => path.dirname(filePath);

const getExtension = (filePath) => path.extname(filePath);

const listFiles = (dirPath) =>
    fs.readdirSync(dirPath).filter(f => fs.statSync(path.join(dirPath, f)).isFile());

module.exports = {
    exists,
    readFile,
    writeFile,
    appendFile,
    deleteFile,
    copyFile,
    moveFile,
    getFileName,
    getDirName,
    getExtension,
    listFiles,
};