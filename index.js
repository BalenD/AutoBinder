const path = require('path');

const srcPath = path.join(__dirname, 'src', 'autoBinding.js');
const autoBinding = require(srcPath);


module.exports = autoBinding.autoBind;
