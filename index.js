const path = require('path');

const srcPath = path.join(__dirname, 'src', 'contextBinder.js');
const contextBinder = require(srcPath);


module.exports = contextBinder.bindContext;
